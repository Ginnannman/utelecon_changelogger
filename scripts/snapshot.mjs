#!/usr/bin/env node
// ビルド出力（dist）を走査し、比較に必要な情報だけを持つスナップショットを作る。
//
// 使い方:
//   node scripts/snapshot.mjs <distDir> <out.json.gz>
// 環境変数（来歴として記録する）:
//   SNAP_SHA, SNAP_COMMITTED_AT, SNAP_NODE, SNAP_INSTALL, SNAP_SITE
//
// ページ（*.html）: タイトル・説明文・本文の行・共通部分の行
// リダイレクト（meta refresh を持つ HTML）: 転送先
// /_astro/ 配下: ファイル名とハッシュ（スタイル・スクリプトの変更検出用）
// それ以外のファイル: パス・サイズ・SHA-256（配布ファイル等）
// rss.xml は対象外とする。

import { readFile, readdir, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { gzipSync } from "node:zlib";
import path from "node:path";
import { fromHtml } from "hast-util-from-html";
import { select, selectAll } from "hast-util-select";
import { extractLines, removeWhere, hasId } from "./lib/extract.mjs";

const [distDir, outFile] = process.argv.slice(2);
if (!distDir || !outFile) {
  console.error("usage: node scripts/snapshot.mjs <distDir> <out.json.gz>");
  process.exit(2);
}
const SITE = (process.env.SNAP_SITE || "https://utelecon.adm.u-tokyo.ac.jp").replace(/\/$/, "");

async function* walkFiles(root, rel = "") {
  const entries = await readdir(path.join(root, rel), { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name));
  for (const ent of entries) {
    const r = rel ? `${rel}/${ent.name}` : ent.name;
    if (ent.isDirectory()) yield* walkFiles(root, r);
    else if (ent.isFile()) yield r;
  }
}

/** dist 内の相対パスを公開 URL のパスに変換する（build.format: directory 前提） */
function toUrlPath(rel) {
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return "/" + rel.slice(0, -"index.html".length);
  return "/" + rel;
}

function textOf(node) {
  if (!node) return "";
  return extractLines(node).join(" ").trim();
}

function parseRefresh(content) {
  const m = /url\s*=\s*['"]?([^'"]+)/i.exec(content || "");
  return m ? m[1].trim() : "";
}

function snapshotHtml(rel, html) {
  const tree = fromHtml(html);
  const urlPath = toUrlPath(rel);
  const htmlEl = select("html", tree);
  const lang = String(htmlEl?.properties?.lang || (urlPath.startsWith("/en/") ? "en" : "ja"));

  const refresh = selectAll("meta", tree).find(
    (m) => String(m.properties?.httpEquiv || "").toLowerCase() === "refresh",
  );
  if (refresh) {
    return { kind: "redirect", path: urlPath, lang, to: parseRefresh(String(refresh.properties.content || "")) };
  }

  const title = textOf(select("title", tree));
  const descEl = selectAll("meta", tree).find((m) => m.properties?.name === "description");
  const description = descEl ? String(descEl.properties.content || "") : "";

  const body = select("body", tree) ?? tree;
  // パンくずの区切りは Material Icons の名前が文字として入っているので置き換える
  for (const sep of selectAll(".breadcrumb__separator", body)) {
    sep.children = [{ type: "text", value: " > " }];
  }
  // 言語切替リンクの href はページごとに異なり、共通部分の差分を分散させるので除く
  const langLink = select("#changeLangLink", body);
  if (langLink) delete langLink.properties.href;

  const main = select("main", body);
  let content;
  let chrome;
  if (main) {
    // 目次は本文の見出しから生成されるので、本文の差分と重複する
    removeWhere(main, (el) => hasId(el, "sidebar"));
    content = extractLines(main);
    removeWhere(body, (el) => el.tagName === "main");
    chrome = extractLines(body);
  } else {
    content = extractLines(body);
    chrome = [];
  }
  return { kind: "page", path: urlPath, lang, title, description, content, chrome };
}

const snap = {
  format: 1,
  site: SITE,
  sha: process.env.SNAP_SHA || "",
  committedAt: process.env.SNAP_COMMITTED_AT || "",
  node: process.env.SNAP_NODE || process.version,
  install: process.env.SNAP_INSTALL || "",
  createdAt: new Date().toISOString(),
  pages: {},
  redirects: {},
  assets: {},
  files: {},
};

let count = 0;
for await (const rel of walkFiles(distDir)) {
  const base = path.posix.basename(rel);
  if (base === "rss.xml") continue;
  const buf = await readFile(path.join(distDir, rel));
  if (rel.startsWith("_astro/")) {
    snap.assets[rel] = createHash("sha256").update(buf).digest("hex");
  } else if (rel.endsWith(".html")) {
    const s = snapshotHtml(rel, buf.toString("utf8"));
    if (s.kind === "redirect") snap.redirects[s.path] = { lang: s.lang, to: s.to };
    else snap.pages[s.path] = s;
  } else {
    snap.files["/" + rel] = { size: buf.length, sha256: createHash("sha256").update(buf).digest("hex") };
  }
  if (++count % 500 === 0) console.log(`${count} files`);
}

await mkdir(path.dirname(outFile), { recursive: true });
await writeFile(outFile, gzipSync(JSON.stringify(snap)));
console.log(
  `snapshot: pages=${Object.keys(snap.pages).length} redirects=${Object.keys(snap.redirects).length} ` +
    `files=${Object.keys(snap.files).length} assets=${Object.keys(snap.assets).length} -> ${outFile}`,
);
