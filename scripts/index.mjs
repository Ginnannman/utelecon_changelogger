#!/usr/bin/env node
// reports/ 以下の changes.json をすべて読み、reports/README.md（一覧）を作り直す。
// 使い方: node scripts/index.mjs [reportsDir]

import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.argv[2] || "reports";

async function* findChanges(dir) {
  for (const ent of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) yield* findChanges(p);
    else if (ent.name === "changes.json") yield p;
  }
}

const jst = (iso) => new Date(iso).toLocaleString("sv-SE", { timeZone: "Asia/Tokyo" }).slice(0, 16);
const rows = [];
for await (const f of findChanges(root)) {
  const c = JSON.parse(await readFile(f, "utf8"));
  rows.push({ c, dir: path.relative(root, path.dirname(f)).split(path.sep).join("/") });
}
rows.sort((a, b) => (b.c.until.localeCompare(a.c.until)) || (b.c.since.localeCompare(a.c.since)));

const md = [
  "# utelecon 変更記録一覧",
  "",
  "新しい順。数字は、個別ページ／共通本文／共通部分／配布・静的ファイル／リダイレクトの件数です。",
  "",
  "| 期間（JST） | 種別 | ページ | 共通本文 | 共通部分 | ファイル | リダイレクト |",
  "|---|---|---|---|---|---|---|",
];
for (const { c, dir } of rows) {
  const n = c.counts;
  md.push(
    `| [${jst(c.since)} → ${jst(c.until)}](${dir}/README.md) | ${c.kind === "weekly" ? "定期" : "手動"} | ` +
      `${n.pages} | ${n.sharedContent} | ${n.chrome} | ${n.files} | ${n.redirects} |`,
  );
}
md.push("");
await writeFile(path.join(root, "README.md"), md.join("\n"));
console.log(`index: ${rows.length} reports`);
