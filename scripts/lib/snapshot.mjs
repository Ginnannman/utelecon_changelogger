import { readFile, readdir, access } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { fromHtml } from "hast-util-from-html";
import { select, selectAll } from "hast-util-select";
import { extractLines, extractText } from "./extract.mjs";
import {
  ASSET_DIR,
  CHROME_RULES,
  CONTENT_RULES,
  EXCLUDED_FILE_NAMES,
  LAYOUT_MARKERS,
  SNAPSHOT_FORMAT,
  SOURCE_EXTENSIONS,
  SOURCE_PAGES_DIR,
} from "./config.mjs";

async function* walkFiles(root, relative = "") {
  const entries = await readdir(path.join(root, relative), { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    const child = relative ? `${relative}/${entry.name}` : entry.name;
    if (entry.isDirectory()) yield* walkFiles(root, child);
    else if (entry.isFile()) yield child;
  }
}

export function toUrlPath(distRelativePath) {
  if (distRelativePath === "index.html") return "/";
  if (distRelativePath.endsWith("/index.html")) return `/${distRelativePath.slice(0, -"index.html".length)}`;
  return `/${distRelativePath}`;
}

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

export function sourceCandidates(urlPath) {
  const trimmed = urlPath.replace(/^\/|\/$/g, "").replace(/\.html$/, "");
  const stems = trimmed ? [trimmed, `${trimmed}/index`] : ["index"];
  return stems.flatMap((stem) => SOURCE_EXTENSIONS.map((ext) => `${SOURCE_PAGES_DIR}/${stem}${ext}`));
}

async function findSource(sourceRoot, urlPath) {
  if (!sourceRoot) return null;
  for (const candidate of sourceCandidates(urlPath)) {
    if (await exists(path.join(sourceRoot, candidate))) return candidate;
  }
  return null;
}

function metaContent(tree, predicate) {
  const element = selectAll("meta", tree).find(predicate);
  return element ? String(element.properties.content ?? "") : null;
}

function redirectTarget(tree) {
  const content = metaContent(tree, (m) => String(m.properties?.httpEquiv ?? "").toLowerCase() === "refresh");
  if (content === null) return null;
  return /url\s*=\s*['"]?([^'"]+)/i.exec(content)?.[1].trim() ?? "";
}

export function parseHtmlPage(html, urlPath) {
  const tree = fromHtml(html);
  const lang = String(select("html", tree)?.properties?.lang ?? (urlPath.startsWith("/en/") ? "en" : "ja"));
  const target = redirectTarget(tree);
  if (target !== null) return { kind: "redirect", lang, to: target };

  const body = select("body", tree) ?? tree;
  const main = select(LAYOUT_MARKERS.main, body);
  const markers = Object.fromEntries(
    Object.entries(LAYOUT_MARKERS).map(([name, selector]) => [name, Boolean(select(selector, body))]),
  );
  return {
    kind: "page",
    lang,
    title: extractText(select("title", tree)),
    description: metaContent(tree, (m) => m.properties?.name === "description") ?? "",
    content: main ? extractLines(main, CONTENT_RULES) : extractLines(body, CONTENT_RULES),
    chrome: main ? extractLines(body, CHROME_RULES) : [],
    markers,
  };
}

/**
 * @param {{ distDir: string, sourceRoot?: string, sha?: string, committedAt?: string, node?: string }} options
 * @returns {Promise<import("./schema.mjs").Snapshot>}
 */
export async function buildSnapshot({ distDir, sourceRoot, sha = "", committedAt = "", node = process.version }) {
  const snapshot = {
    format: SNAPSHOT_FORMAT,
    sha,
    committedAt,
    node,
    createdAt: new Date().toISOString(),
    pages: {},
    redirects: {},
    assets: {},
    files: {},
    stats: { pages: 0, markers: Object.fromEntries(Object.keys(LAYOUT_MARKERS).map((name) => [name, 0])) },
  };

  for await (const relative of walkFiles(distDir)) {
    if (EXCLUDED_FILE_NAMES.includes(path.posix.basename(relative))) continue;
    const buffer = await readFile(path.join(distDir, relative));

    if (relative.startsWith(ASSET_DIR)) {
      snapshot.assets[relative] = sha256(buffer);
      continue;
    }
    if (!relative.endsWith(".html")) {
      snapshot.files[`/${relative}`] = { size: buffer.length, sha256: sha256(buffer) };
      continue;
    }

    const urlPath = toUrlPath(relative);
    const parsed = parseHtmlPage(buffer.toString("utf8"), urlPath);
    const source = await findSource(sourceRoot, urlPath);
    if (parsed.kind === "redirect") {
      snapshot.redirects[urlPath] = { lang: parsed.lang, to: parsed.to, source };
      continue;
    }
    const { markers, kind, ...page } = parsed;
    snapshot.pages[urlPath] = { ...page, source };
    snapshot.stats.pages += 1;
    for (const [name, present] of Object.entries(markers)) {
      if (present) snapshot.stats.markers[name] += 1;
    }
  }
  return snapshot;
}
