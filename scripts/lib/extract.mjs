import { matches } from "hast-util-select";
import { escapeTablePipes } from "./format.mjs";

const BLOCK_TAGS = new Set([
  "address", "article", "aside", "blockquote", "caption", "dd", "details",
  "dialog", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer",
  "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "li", "main", "nav",
  "ol", "p", "section", "summary", "table", "tbody", "tfoot", "thead", "tr", "ul",
  "pre", "hr",
]);
const IGNORED_TAGS = new Set(["script", "style", "noscript", "template", "svg", "head"]);
const EMBED_TAGS = new Set(["iframe", "video", "audio", "source", "embed", "object"]);
const HEADING = /^h([1-6])$/;
const ASTRO_ASSET_HASH = /(\/_astro\/[^?#]*?)\.[-_0-9a-zA-Z]{6,}(\.[0-9a-zA-Z]+)(?=$|[?#])/;

/**
 * @typedef {{ exclude?: string[], replaceText?: { selector: string, text: string }[] }} ExtractRules
 */

export function normalizeUrl(url) {
  if (typeof url !== "string") return "";
  return url.replace(ASTRO_ASSET_HASH, "$1$2");
}

/**
 * @param {import("hast").Nodes} node
 * @param {ExtractRules} [rules]
 * @returns {string[]}
 */
export function extractLines(node, rules = {}) {
  const context = {
    exclude: rules.exclude ?? [],
    replaceText: rules.replaceText ?? [],
  };
  if (node.type === "element") {
    if (isExcluded(node, context)) return [];
    if (BLOCK_TAGS.has(node.tagName)) return renderBlock(node, context);
  }
  return renderChildren(node.children ?? [], context);
}

export function extractText(node) {
  return node ? extractLines(node).join(" ").trim() : "";
}

function isExcluded(element, context) {
  if (IGNORED_TAGS.has(element.tagName)) return true;
  return context.exclude.some((selector) => matches(selector, element));
}

function replacementFor(element, context) {
  return context.replaceText.find((rule) => matches(rule.selector, element))?.text;
}

function attribute(element, name) {
  const value = element.properties?.[name];
  if (Array.isArray(value)) return value.join(" ");
  return value == null ? "" : String(value);
}

function collapse(text) {
  return text.replace(/\s+/g, " ").trim();
}

function renderChildren(children, context) {
  const lines = [];
  let inline = "";
  const flush = () => {
    const text = collapse(inline);
    if (text) lines.push(text);
    inline = "";
  };

  for (const child of children) {
    if (child.type === "text") {
      inline += child.value;
      continue;
    }
    if (child.type !== "element" || isExcluded(child, context)) continue;

    const replacement = replacementFor(child, context);
    if (replacement !== undefined) {
      inline += replacement;
    } else if (child.tagName === "br") {
      flush();
    } else if (BLOCK_TAGS.has(child.tagName)) {
      flush();
      lines.push(...renderBlock(child, context));
    } else {
      inline += renderInline(child, context);
    }
  }
  flush();
  return lines;
}

function renderInline(element, context) {
  const tag = element.tagName;
  if (tag === "img") {
    return `![${attribute(element, "alt")}](${normalizeUrl(attribute(element, "src"))})`;
  }
  const text = renderChildren(element.children ?? [], context).join(" ");
  if (tag === "a") {
    const href = normalizeUrl(attribute(element, "href"));
    return href ? `[${text}](${href})` : text;
  }
  if (EMBED_TAGS.has(tag)) {
    const src = normalizeUrl(attribute(element, "src") || attribute(element, "data"));
    return [src ? ` [${tag}](${src}) ` : "", text].join("");
  }
  return text;
}

function renderBlock(element, context) {
  const tag = element.tagName;
  if (tag === "hr") return ["---"];
  if (tag === "pre") return renderPre(element);
  if (tag === "tr") return renderTableRow(element, context);

  const lines = renderChildren(element.children ?? [], context);
  const heading = HEADING.exec(tag);
  if (heading) {
    return lines.length ? [`${"#".repeat(Number(heading[1]))} ${lines.join(" ")}`] : [];
  }
  if (tag === "li") return withMarker(lines, "- ");
  if (tag === "blockquote") return lines.map((line) => `> ${line}`);
  if (tag === "dd") return lines.map((line) => `    ${line}`);
  return lines;
}

function withMarker(lines, marker) {
  const indent = " ".repeat(marker.length);
  return lines.map((line, index) => (index === 0 ? marker : indent) + line);
}

function renderPre(element) {
  const text = rawText(element).replace(/\n+$/, "");
  return text ? text.split("\n").map((line) => `    ${line}`) : [];
}

function rawText(node) {
  if (node.type === "text") return node.value;
  if (node.type === "element" && IGNORED_TAGS.has(node.tagName)) return "";
  return (node.children ?? []).map(rawText).join("");
}

function renderTableRow(row, context) {
  const cells = (row.children ?? [])
    .filter((cell) => cell.type === "element" && (cell.tagName === "td" || cell.tagName === "th"))
    .filter((cell) => !isExcluded(cell, context))
    .map((cell) => escapeTablePipes(renderChildren(cell.children ?? [], context).join(" ")));
  return cells.some(Boolean) ? [`| ${cells.join(" | ")} |`] : [];
}
