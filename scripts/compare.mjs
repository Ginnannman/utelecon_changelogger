#!/usr/bin/env node
// 2時点のスナップショットを比較し、報告（Markdown と changes.json）を書き出す。
//
// 使い方:
//   node scripts/compare.mjs --out <dir> --kind weekly|manual --since <ISO> --until <ISO>
//     --old-sha <sha> --new-sha <sha> [--old <old.json.gz> --new <new.json.gz>]
//     [--old-date <ISO>] [--new-date <ISO>] [--repo owner/name] [--tool-sha <sha>] [--group-min 5]
// --old/--new を省略すると（2時点のコミットが同一の場合）「変更なし」の記録を書く。

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { gunzipSync } from "node:zlib";
import path from "node:path";
import { parseArgs } from "node:util";
import { diffArrays } from "diff";

const { values: opt } = parseArgs({
  options: {
    old: { type: "string" },
    new: { type: "string" },
    out: { type: "string" },
    kind: { type: "string", default: "manual" },
    since: { type: "string" },
    until: { type: "string" },
    "old-sha": { type: "string" },
    "new-sha": { type: "string" },
    "old-date": { type: "string", default: "" },
    "new-date": { type: "string", default: "" },
    repo: { type: "string", default: "utelecon/utelecon.github.io" },
    "tool-sha": { type: "string", default: "" },
    "group-min": { type: "string", default: "5" },
  },
});
for (const k of ["out", "since", "until", "old-sha", "new-sha"]) {
  if (!opt[k]) {
    console.error(`missing --${k}`);
    process.exit(2);
  }
}
const GROUP_MIN = Number(opt["group-min"]);
const CONTEXT = 2;
const MAX_DIFF_LINES = 1500;
const same = !opt.old || !opt.new;
const repoUrl = `https://github.com/${opt.repo}`;

const load = async (p) => JSON.parse(gunzipSync(await readFile(p)).toString("utf8"));
const empty = { pages: {}, redirects: {}, assets: {}, files: {}, site: "https://utelecon.adm.u-tokyo.ac.jp" };
const A = same ? empty : await load(opt.old);
const B = same ? empty : await load(opt.new);
const SITE = (B.site || A.site).replace(/\/$/, "");

// ---------- 共通の道具 ----------

const jst = (iso) =>
  iso ? new Date(iso).toLocaleString("sv-SE", { timeZone: "Asia/Tokyo" }).slice(0, 16) : "";
const pairKey = (p) => p.replace(/^\/en(\/|$)/, "/");
const slug = (key) =>
  key === "/" ? "index" : key.replace(/^\/|\/$/g, "").replace(/[^-_.0-9A-Za-z]+/g, "__") || "index";
const mdEscape = (s) => String(s ?? "").replace(/[|[\]<>]/g, (c) => "\\" + c).replace(/\s+/g, " ");
const fmtSize = (n) => (n >= 1048576 ? `${(n / 1048576).toFixed(1)} MB` : n >= 1024 ? `${(n / 1024).toFixed(1)} KB` : `${n} B`);
const short = (sha) => (sha || "").slice(0, 9);
const displayTitle = (t) => String(t ?? "").replace(/\s*\|\s*utelecon$/, "");
const dateNote = (iso) => (iso ? `（${jst(iso)}）` : "");

/** 行配列の差分を、文脈付きの操作列にする */
function diffOps(a, b) {
  const ops = [];
  for (const part of diffArrays(a, b)) {
    const t = part.added ? "+" : part.removed ? "-" : " ";
    for (const v of part.value) ops.push({ t, v });
  }
  return ops;
}
const changed = (ops) => ops.some((o) => o.t !== " ");
const signature = (ops) => JSON.stringify(ops.filter((o) => o.t !== " ").map((o) => o.t + o.v));

/** 操作列を、変更箇所の前後 CONTEXT 行だけ残した diff 文字列にする */
function renderOps(ops) {
  const keep = new Array(ops.length).fill(false);
  ops.forEach((o, i) => {
    if (o.t === " ") return;
    for (let j = Math.max(0, i - CONTEXT); j <= Math.min(ops.length - 1, i + CONTEXT); j++) keep[j] = true;
  });
  const out = [];
  let gap = false;
  ops.forEach((o, i) => {
    if (!keep[i]) {
      gap = true;
      return;
    }
    if (gap && out.length) out.push("  ⋯");
    gap = false;
    out.push(`${o.t} ${o.v}`);
  });
  return out;
}

function fence(lines) {
  const longest = Math.max(2, ...lines.map((l) => (l.match(/`+/g) || []).reduce((m, s) => Math.max(m, s.length), 0)));
  const f = "`".repeat(longest + 1);
  return [f + "diff", ...lines, f].join("\n");
}

/** diff を Markdown に埋める。長すぎる場合は切り詰め、全文を .diff として別に書く */
async function diffBlock(lines, fullPath, relFromMd) {
  if (lines.length <= MAX_DIFF_LINES) return fence(lines);
  await mkdir(path.dirname(fullPath), { recursive: true });
  await writeFile(fullPath, lines.join("\n") + "\n");
  return (
    fence(lines.slice(0, MAX_DIFF_LINES)) +
    `\n\n差分が ${lines.length} 行あるため先頭 ${MAX_DIFF_LINES} 行のみ表示しています。全文: [${path.basename(fullPath)}](${relFromMd})`
  );
}

const pageLines = (p) => (p ? [`タイトル: ${p.title}`, `説明: ${p.description}`, "", ...p.content] : []);

// ---------- ページ ----------

const allPaths = [...new Set([...Object.keys(A.pages), ...Object.keys(B.pages)])].sort();
/** path -> { status, ops, chromeOps, title } */
const pageResult = new Map();
for (const p of allPaths) {
  const a = A.pages[p];
  const b = B.pages[p];
  const status = !a ? "added" : !b ? "removed" : "modified";
  const ops = diffOps(pageLines(a), pageLines(b));
  const chromeOps = a && b ? diffOps(a.chrome, b.chrome) : [];
  if (!changed(ops) && !changed(chromeOps)) continue;
  pageResult.set(p, { status, ops, chromeOps, title: displayTitle((b ?? a).title), lang: (b ?? a).lang });
}

// 本文の差分が同一のページが GROUP_MIN 以上あれば、共通の変更として束ねる（追加・削除は束ねない）
const contentGroups = new Map();
for (const [p, r] of pageResult) {
  if (r.status !== "modified" || !changed(r.ops)) continue;
  const sig = signature(r.ops);
  if (!contentGroups.has(sig)) contentGroups.set(sig, { paths: [], ops: r.ops });
  contentGroups.get(sig).paths.push(p);
}
const sharedContent = [...contentGroups.values()].filter((g) => g.paths.length >= GROUP_MIN);
const sharedIndex = new Map();
sharedContent.forEach((g, i) => g.paths.forEach((p) => sharedIndex.set(p, i + 1)));

// 共通部分（main 以外）の差分は件数に関わらずすべて束ねる
const chromeGroupsMap = new Map();
for (const [p, r] of pageResult) {
  if (!changed(r.chromeOps)) continue;
  const sig = signature(r.chromeOps);
  if (!chromeGroupsMap.has(sig)) chromeGroupsMap.set(sig, { paths: [], ops: r.chromeOps });
  chromeGroupsMap.get(sig).paths.push(p);
}
const chromeGroups = [...chromeGroupsMap.values()].sort((x, y) => y.paths.length - x.paths.length);

// 個別ページ: 本文の差分があり、かつ共通の変更に束ねられていないもの。ja/en をまとめる
const individual = new Map();
for (const [p, r] of pageResult) {
  const isIndividual = changed(r.ops) && !sharedIndex.has(p);
  if (!isIndividual) continue;
  const key = pairKey(p);
  if (!individual.has(key)) individual.set(key, { key });
}
const statusLabel = { added: "追加", removed: "削除", modified: "変更" };
function langCell(p) {
  const r = pageResult.get(p);
  const exists = Boolean(A.pages[p] || B.pages[p]);
  if (!exists) return { text: "—", status: "absent" };
  const url = SITE + p;
  if (!r || !changed(r.ops)) return { text: `[変更なし](${url})`, status: "unchanged" };
  if (sharedIndex.has(p)) return { text: `[共通の変更 #${sharedIndex.get(p)}](${url})`, status: "shared" };
  if (r.status === "removed") return { text: `削除 \`${p}\``, status: "removed" };
  return { text: `[${statusLabel[r.status]}](${url})`, status: r.status };
}
const jaPath = (key) => key;
const enPath = (key) => (key === "/" ? "/en/" : "/en" + key);

// ---------- リダイレクト・ファイル・スタイル ----------

const redirectRows = [];
for (const from of [...new Set([...Object.keys(A.redirects), ...Object.keys(B.redirects)])].sort()) {
  const a = A.redirects[from];
  const b = B.redirects[from];
  if (a && b && a.to === b.to) continue;
  redirectRows.push({ from, status: !a ? "added" : !b ? "removed" : "modified", oldTo: a?.to ?? "", newTo: b?.to ?? "" });
}

const fileRows = [];
for (const f of [...new Set([...Object.keys(A.files), ...Object.keys(B.files)])].sort()) {
  const a = A.files[f];
  const b = B.files[f];
  if (a && b && a.sha256 === b.sha256) continue;
  fileRows.push({ path: f, status: !a ? "added" : !b ? "removed" : "modified", oldSize: a?.size ?? null, newSize: b?.size ?? null });
}

const assetNames = (s) => new Set(Object.keys(s.assets));
const assetsA = assetNames(A);
const assetsB = assetNames(B);
const assetAdded = [...assetsB].filter((x) => !assetsA.has(x)).sort();
const assetRemoved = [...assetsA].filter((x) => !assetsB.has(x)).sort();

// ---------- 書き出し ----------

const out = opt.out;
await mkdir(path.join(out, "pages"), { recursive: true });
await mkdir(path.join(out, "common"), { recursive: true });

// 個別ページのファイル
const individualRows = [];
for (const key of [...individual.keys()].sort()) {
  const pj = jaPath(key);
  const pe = enPath(key);
  // 表題は日本語ページを優先する（日本語側が変更なしでも、存在すればその表題を使う）
  const titleSrc = B.pages[pj] ?? A.pages[pj] ?? B.pages[pe] ?? A.pages[pe];
  const title = displayTitle(titleSrc?.title) || key;
  const ja = langCell(pj);
  const en = langCell(pe);
  const file = `pages/${slug(key)}.md`;
  const md = [`# ${title}`, "", `- 日本語: ${ja.text}`, `- English: ${en.text}`, ""];
  for (const [label, p, cell] of [["日本語", pj, ja], ["English", pe, en]]) {
    const r = pageResult.get(p);
    if (!r || !changed(r.ops) || cell.status === "shared") continue;
    md.push(`## ${label}（${statusLabel[r.status]}）`, "");
    md.push(await diffBlock(renderOps(r.ops), path.join(out, "pages", `${slug(key)}.${label === "日本語" ? "ja" : "en"}.diff`), `${slug(key)}.${label === "日本語" ? "ja" : "en"}.diff`), "");
  }
  md.push(`[← 一覧へ](../README.md)`, "");
  await writeFile(path.join(out, file), md.join("\n"));
  individualRows.push({ key, title, file, ja: ja.status, en: en.status, jaText: ja.text, enText: en.text });
}

async function writeGroup(name, heading, g, i) {
  const file = `common/${name}-${i + 1}.md`;
  const urls = g.paths.map((p) => `- [${p}](${SITE + p})`);
  const md = [
    `# ${heading} #${i + 1}（${g.paths.length} ページ）`,
    "",
    "<details>",
    `<summary>対象ページ（${g.paths.length}）</summary>`,
    "",
    ...urls,
    "",
    "</details>",
    "",
    `代表として \`${g.paths[0]}\` の差分を示します。`,
    "",
    await diffBlock(renderOps(g.ops), path.join(out, "common", `${name}-${i + 1}.diff`), `${name}-${i + 1}.diff`),
    "",
    `[← 一覧へ](../README.md)`,
    "",
  ];
  await writeFile(path.join(out, file), md.join("\n"));
  return file;
}
const sharedFiles = [];
for (const [i, g] of sharedContent.entries()) sharedFiles.push(await writeGroup("content", "複数ページに共通する本文の変更", g, i));
const chromeFiles = [];
for (const [i, g] of chromeGroups.entries()) chromeFiles.push(await writeGroup("chrome", "共通部分の変更", g, i));

const title = `${jst(opt.since)} → ${jst(opt.until)}（JST）`;
const R = [];
R.push(`# utelecon 変更記録 ${title}`, "");
R.push("| 項目 | 値 |", "|---|---|");
R.push(`| 種別 | ${opt.kind === "weekly" ? "定期実行" : "手動実行"} |`);
R.push(`| 比較元 | [\`${short(opt["old-sha"])}\`](${repoUrl}/commit/${opt["old-sha"]})${dateNote(opt["old-date"])} |`);
R.push(`| 比較先 | [\`${short(opt["new-sha"])}\`](${repoUrl}/commit/${opt["new-sha"]})${dateNote(opt["new-date"])} |`);
if (!same) R.push(`| ソースの差分 | [compare](${repoUrl}/compare/${opt["old-sha"]}...${opt["new-sha"]}) |`);
if (!same) R.push(`| ビルド環境 | 比較元 Node ${A.node}（${A.install}）／比較先 Node ${B.node}（${B.install}） |`);
R.push("");

if (same) {
  R.push("指定した2時点で master の先端コミットが同一のため、変更はありません。", "");
} else {
  R.push(
    `個別ページ ${individualRows.length} 件、複数ページに共通する本文の変更 ${sharedContent.length} 件、` +
      `共通部分の変更 ${chromeGroups.length} 件、ビルド生成ファイル ${assetAdded.length + assetRemoved.length} 件、` +
      `配布ファイル・静的ファイル ${fileRows.length} 件、リダイレクト ${redirectRows.length} 件。`,
    "",
  );

  R.push(`## 個別ページの変更（${individualRows.length}）`, "");
  if (individualRows.length) {
    R.push("| ページ | 日本語 | English |", "|---|---|---|");
    for (const r of individualRows) R.push(`| [${mdEscape(r.title)}](${r.file}) | ${r.jaText} | ${r.enText} |`);
  } else R.push("なし");
  R.push("");

  R.push(`## 複数ページに共通する本文の変更（${sharedContent.length}）`, "");
  R.push(`同一の差分が ${GROUP_MIN} ページ以上に生じたものです（緊急のお知らせの表示、一括置換など）。`, "");
  if (sharedContent.length) {
    R.push("| # | ページ数 | 例 |", "|---|---|---|");
    sharedContent.forEach((g, i) => R.push(`| [#${i + 1}](${sharedFiles[i]}) | ${g.paths.length} | \`${g.paths[0]}\` |`));
  } else R.push("なし");
  R.push("");

  R.push(`## 共通部分の変更（${chromeGroups.length}）`, "");
  R.push("ヘッダ・フッタなど、本文（`main`）の外側の差分です。差分が同じページをまとめています。", "");
  if (chromeGroups.length) {
    R.push("| # | ページ数 | 例 |", "|---|---|---|");
    chromeGroups.forEach((g, i) => R.push(`| [#${i + 1}](${chromeFiles[i]}) | ${g.paths.length} | \`${g.paths[0]}\` |`));
  } else R.push("なし");
  R.push("");
  R.push(`### ビルド生成ファイル（\`/_astro/\`）`, "");
  if (assetAdded.length || assetRemoved.length) {
    R.push("CSS・JavaScript と、ビルド時に変換された画像です。ファイル名にハッシュが含まれるため、名前の増減が内容や変換条件の変更を表します。", "");
    R.push("<details>", `<summary>追加 ${assetAdded.length}／削除 ${assetRemoved.length}</summary>`, "");
    for (const x of assetAdded) R.push(`- 追加 \`${x}\``);
    for (const x of assetRemoved) R.push(`- 削除 \`${x}\``);
    R.push("", "</details>");
  } else R.push("なし");
  R.push("");

  R.push(`## 配布ファイル・静的ファイル（${fileRows.length}）`, "");
  if (fileRows.length) {
    R.push("| ファイル | 状態 | サイズ |", "|---|---|---|");
    for (const f of fileRows) {
      const size = f.status === "modified" ? `${fmtSize(f.oldSize)} → ${fmtSize(f.newSize)}` : fmtSize(f.newSize ?? f.oldSize);
      const name = f.status === "removed" ? `\`${f.path}\`` : `[\`${f.path}\`](${SITE + encodeURI(f.path)})`;
      R.push(`| ${name} | ${statusLabel[f.status]} | ${size} |`);
    }
  } else R.push("なし");
  R.push("");

  R.push(`## リダイレクト（${redirectRows.length}）`, "");
  if (redirectRows.length) {
    R.push("| 転送元 | 状態 | 転送先 |", "|---|---|---|");
    for (const r of redirectRows) {
      const to = r.status === "modified" ? `\`${r.oldTo}\` → \`${r.newTo}\`` : `\`${r.newTo || r.oldTo}\``;
      R.push(`| \`${r.from}\` | ${statusLabel[r.status]} | ${to} |`);
    }
  } else R.push("なし");
  R.push("");
}

R.push("---", "");
R.push(
  "各時点は、指定時刻以前に master へ入った最後のコミット（first-parent）をビルドした結果です。" +
    "差分は公開HTMLから本文を行に分解して比較したもので、表示上の見た目の変化（スタイルのみの変更など）はページ単位では検出しません。" +
    "RSS（`rss.xml`）は対象外です。",
  "",
);
R.push(`生成: ${jst(new Date().toISOString())} JST${opt["tool-sha"] ? `／ツール \`${short(opt["tool-sha"])}\`` : ""}`, "");
await writeFile(path.join(out, "README.md"), R.join("\n"));

const summary = {
  format: 1,
  kind: opt.kind,
  since: opt.since,
  until: opt.until,
  repo: opt.repo,
  old: { sha: opt["old-sha"], committedAt: opt["old-date"], node: A.node ?? null, install: A.install ?? null },
  new: { sha: opt["new-sha"], committedAt: opt["new-date"], node: B.node ?? null, install: B.install ?? null },
  toolSha: opt["tool-sha"],
  groupMin: GROUP_MIN,
  generatedAt: new Date().toISOString(),
  counts: {
    pages: individualRows.length,
    sharedContent: sharedContent.length,
    chrome: chromeGroups.length,
    assets: assetAdded.length + assetRemoved.length,
    files: fileRows.length,
    redirects: redirectRows.length,
  },
  pages: individualRows.map(({ key, title, file, ja, en }) => ({ key, title, file, ja, en })),
  sharedContent: sharedContent.map((g, i) => ({ file: sharedFiles[i], paths: g.paths })),
  chrome: chromeGroups.map((g, i) => ({ file: chromeFiles[i], paths: g.paths })),
  assets: { added: assetAdded, removed: assetRemoved },
  files: fileRows,
  redirects: redirectRows,
};
await writeFile(path.join(out, "changes.json"), JSON.stringify(summary, null, 2) + "\n");
console.log(JSON.stringify(summary.counts));
