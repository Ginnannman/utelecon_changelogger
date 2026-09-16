// HAST の部分木を、差分を読むための「行」の配列に変換する。
// 見出しは #、箇条は -、表の行は | a | b |、リンクは [文字](URL)、画像は ![alt](URL) で表す。
// 目的は表示の再現ではなく、人が差分を読んだときに何が変わったか分かることにある。

const BLOCK = new Set([
  "address", "article", "aside", "blockquote", "caption", "dd", "details",
  "dialog", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer",
  "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "li", "main", "nav",
  "ol", "p", "section", "summary", "table", "tbody", "tfoot", "thead", "ul",
]);
const SKIP = new Set(["script", "style", "noscript", "template", "svg", "head"]);
const EMBED = new Set(["iframe", "video", "audio", "source", "embed", "object"]);

/**
 * Astro がビルドごとに付けるハッシュをファイル名から除く。
 * utelecon の scripts/prediff と同じ考え方で、/_astro/ 配下に限る。
 * @param {unknown} url
 */
export function normalizeUrl(url) {
  if (typeof url !== "string") return "";
  return url.replace(/(\/_astro\/[^?#]*?)\.[-_0-9a-zA-Z]{6,}(\.[0-9a-zA-Z]+)(?=$|[?#])/, "$1$2");
}

function attr(node, name) {
  const v = node.properties?.[name];
  return Array.isArray(v) ? v.join(" ") : v == null ? "" : String(v);
}

class Emitter {
  constructor() {
    this.lines = [];
    this.buf = "";
    this.prefix = "";
    this.lead = "";
  }
  flush() {
    const t = this.buf.replace(/\s+/g, " ").trim();
    this.buf = "";
    if (!t) return;
    this.lines.push(this.prefix + this.lead + t);
    // 同じブロックの2行目以降は記号の幅だけ字下げする
    if (this.lead) this.lead = " ".repeat(this.lead.length);
  }
  emitRaw(line) {
    this.flush();
    this.lines.push(this.prefix + line);
  }
}

function inlineText(node) {
  const e = new Emitter();
  for (const c of node.children ?? []) walk(c, e, 0);
  e.flush();
  return e.lines.join(" ");
}

function textContent(node) {
  if (node.type === "text") return node.value;
  if (node.type !== "element" && node.type !== "root") return "";
  if (node.type === "element" && SKIP.has(node.tagName)) return "";
  return (node.children ?? []).map(textContent).join("");
}

/**
 * @param {any} node
 * @param {Emitter} e
 * @param {number} listDepth
 */
function walk(node, e, listDepth) {
  if (node.type === "text") {
    e.buf += node.value;
    return;
  }
  if (node.type === "root") {
    for (const c of node.children) walk(c, e, listDepth);
    return;
  }
  if (node.type !== "element") return;
  const tag = node.tagName;
  if (SKIP.has(tag)) return;

  if (tag === "br") return e.flush();
  if (tag === "img") {
    e.buf += `![${attr(node, "alt")}](${normalizeUrl(attr(node, "src"))})`;
    return;
  }
  if (tag === "a") {
    const text = inlineText(node);
    const href = normalizeUrl(attr(node, "href"));
    e.buf += href ? `[${text}](${href})` : text;
    return;
  }
  if (EMBED.has(tag)) {
    const src = normalizeUrl(attr(node, "src") || attr(node, "data"));
    if (src) e.buf += ` [${tag}](${src}) `;
    for (const c of node.children ?? []) walk(c, e, listDepth);
    return;
  }
  if (tag === "hr") return e.emitRaw("---");
  if (tag === "pre") {
    e.flush();
    const body = textContent(node).replace(/\n+$/, "");
    for (const l of body.split("\n")) e.lines.push(e.prefix + "    " + l);
    return;
  }
  if (tag === "tr") {
    const cells = (node.children ?? [])
      .filter((c) => c.type === "element" && (c.tagName === "td" || c.tagName === "th"))
      .map((c) => inlineText(c).replace(/\|/g, "\\|"));
    if (cells.some((c) => c)) e.emitRaw(`| ${cells.join(" | ")} |`);
    return;
  }
  if (!BLOCK.has(tag)) {
    for (const c of node.children ?? []) walk(c, e, listDepth);
    return;
  }

  e.flush();
  const saved = { prefix: e.prefix, lead: e.lead };
  const before = e.lines.length;
  let depth = listDepth;
  if (/^h[1-6]$/.test(tag)) e.lead = "#".repeat(Number(tag[1])) + " ";
  else if (tag === "ul" || tag === "ol") depth += 1;
  else if (tag === "li") {
    e.prefix = saved.prefix + saved.lead.replace(/\S/g, " ");
    e.lead = "- ";
  } else if (tag === "blockquote") e.prefix = saved.prefix + "> ";
  else if (tag === "dd") e.prefix = saved.prefix + "    ";
  for (const c of node.children ?? []) walk(c, e, depth);
  e.flush();
  e.prefix = saved.prefix;
  // このブロックで行を出したら、親ブロックの記号（"- " など）は使用済みとして字下げに置き換える
  e.lead = e.lines.length > before ? saved.lead.replace(/\S/g, " ") : saved.lead;
}

/**
 * @param {any} node HAST の要素または root
 * @returns {string[]}
 */
export function extractLines(node) {
  const e = new Emitter();
  walk(node, e, 0);
  e.flush();
  return e.lines;
}

/**
 * 条件に合う要素を部分木から取り除く（その場で変更する）。
 * @param {any} node
 * @param {(el: any) => boolean} pred
 */
export function removeWhere(node, pred) {
  if (!node.children) return;
  node.children = node.children.filter((c) => !(c.type === "element" && pred(c)));
  for (const c of node.children) removeWhere(c, pred);
}

export function hasId(el, id) {
  return attr(el, "id") === id;
}

