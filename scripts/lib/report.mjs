import { CHANGES_FORMAT, CHECKS, DIFF_CONTEXT_LINES, LIMITS, SOURCE_PAGES_DIR } from "./config.mjs";
import {
  diffFence,
  formatSize,
  githubUrl,
  mdCode,
  mdLink,
  mdText,
  shortSha,
  siteUrl,
  toJst,
} from "./format.mjs";

export const UNOFFICIAL_NOTICE =
  "この記録は個人が作成した非公式のものであり、utelecon の運営主体による公式の情報ではありません。";

const STATUS_LABEL = { added: "追加", removed: "削除", modified: "変更" };
const TITLE_SUFFIX = /\s*\|\s*utelecon$/;

function displayTitle(title, fallback) {
  const cleaned = String(title ?? "").replace(TITLE_SUFFIX, "").trim();
  return cleaned || fallback;
}

/**
 * @param {import("./analyze.mjs").DiffOp[]} ops
 * @returns {string[]}
 */
export function renderDiffLines(ops) {
  const keep = ops.map(() => false);
  ops.forEach((op, index) => {
    if (op.type === " ") return;
    const from = Math.max(0, index - DIFF_CONTEXT_LINES);
    const to = Math.min(ops.length - 1, index + DIFF_CONTEXT_LINES);
    for (let i = from; i <= to; i++) keep[i] = true;
  });

  const lines = [];
  let skipped = false;
  ops.forEach((op, index) => {
    if (!keep[index]) {
      skipped = true;
      return;
    }
    if (skipped && lines.length) lines.push("  ⋯");
    skipped = false;
    lines.push(`${op.type} ${op.text}`);
  });
  return lines;
}

class ReportFiles {
  constructor() {
    /** @type {Map<string, string>} */
    this.files = new Map();
  }

  add(path, content) {
    this.files.set(path, content);
  }

  diffBlock(ops, fullDiffPath, fullDiffLink) {
    const lines = renderDiffLines(ops);
    if (lines.length <= LIMITS.diffLinesPerBlock) return diffFence(lines);
    this.add(fullDiffPath, `${lines.join("\n")}\n`);
    return [
      diffFence(lines.slice(0, LIMITS.diffLinesPerBlock)),
      "",
      `差分が ${lines.length} 行あるため、先頭 ${LIMITS.diffLinesPerBlock} 行のみ表示しています。` +
        `全文: ${mdLink(mdText(fullDiffLink), fullDiffLink)}`,
    ].join("\n");
  }

  totalBytes() {
    let total = 0;
    for (const content of this.files.values()) total += Buffer.byteLength(content);
    return total;
  }
}

function sourceLink(meta, source, side) {
  const sha = side === "old" ? meta.oldSha : meta.newSha;
  if (source) return mdLink(mdCode(source), githubUrl(meta.repo, "blob", sha, source));
  return `特定できず（${mdLink(SOURCE_PAGES_DIR, githubUrl(meta.repo, "tree", sha, SOURCE_PAGES_DIR))}）`;
}

function stateLabel(entry) {
  if (entry.state === "absent") return "—";
  if (entry.state === "unchanged") return "変更なし";
  if (entry.state === "shared") return `共通の変更 #${entry.sharedGroup}`;
  return STATUS_LABEL[entry.state];
}

function languageCell(entry, meta) {
  const label = stateLabel(entry);
  if (entry.state === "absent") return label;
  if (entry.state === "removed") return `${label}（${sourceLink(meta, entry.oldSource, "old")}）`;
  return mdLink(label, siteUrl(entry.path));
}

function pageFile(files, page, meta) {
  const title = displayTitle(page.title, page.key);
  const lines = [`# ${mdText(title)}`, "", "| 言語 | 状態 | 公開ページ | ソース |", "|---|---|---|---|"];
  for (const [label, entry] of [["日本語", page.ja], ["English", page.en]]) {
    if (entry.state === "absent") {
      lines.push(`| ${label} | — | — | — |`);
      continue;
    }
    const removed = entry.state === "removed";
    const published = removed ? "—" : mdLink(mdCode(entry.path), siteUrl(entry.path));
    const source = removed ? sourceLink(meta, entry.oldSource, "old") : sourceLink(meta, entry.newSource, "new");
    lines.push(`| ${label} | ${stateLabel(entry)} | ${published} | ${source} |`);
  }
  lines.push("");

  for (const [label, suffix, entry] of [["日本語", "ja", page.ja], ["English", "en", page.en]]) {
    if (entry.state !== "modified") continue;
    const diffName = `${page.slug}.${suffix}.diff`;
    lines.push(`## ${label}`, "", files.diffBlock(entry.ops, `pages/${diffName}`, diffName), "");
  }
  lines.push(mdLink("← 一覧へ", "../README.md"), "");
  files.add(`pages/${page.slug}.md`, lines.join("\n"));
  return `pages/${page.slug}.md`;
}

function groupFile(files, name, heading, group, number) {
  const base = `${name}-${number}`;
  const lines = [
    `# ${heading} #${number}（${group.paths.length} ページ）`,
    "",
    "<details>",
    `<summary>対象ページ（${group.paths.length}）</summary>`,
    "",
    ...group.paths.map((path) => `- ${mdLink(mdText(path), siteUrl(path))}`),
    "",
    "</details>",
    "",
    `代表として ${mdCode(group.paths[0])} の差分を示します。`,
    "",
    files.diffBlock(group.ops, `common/${base}.diff`, `${base}.diff`),
    "",
    mdLink("← 一覧へ", "../README.md"),
    "",
  ];
  files.add(`common/${base}.md`, lines.join("\n"));
  return `common/${base}.md`;
}

function headerLines(meta) {
  const commit = (sha, date) =>
    `${mdLink(mdCode(shortSha(sha)), githubUrl(meta.repo, "commit", sha))}${date ? `（${toJst(date)}）` : ""}`;
  const lines = [
    `# utelecon 変更記録 ${toJst(meta.since)} → ${toJst(meta.until)}（JST）`,
    "",
    `> ${UNOFFICIAL_NOTICE}`,
    "",
    "| 項目 | 値 |",
    "|---|---|",
    `| 種別 | ${meta.kind === "weekly" ? "定期実行" : "手動実行"} |`,
    `| 比較元 | ${commit(meta.oldSha, meta.oldDate)} |`,
    `| 比較先 | ${commit(meta.newSha, meta.newDate)} |`,
  ];
  if (!meta.same) {
    lines.push(`| ソースの差分 | ${mdLink("compare", githubUrl(meta.repo, "compare", `${meta.oldSha}...${meta.newSha}`))} |`);
    lines.push(`| ビルド環境 | 比較元 Node ${mdText(meta.oldNode)}／比較先 Node ${mdText(meta.newNode)} |`);
  }
  lines.push("");
  return lines;
}

function countLine(counts) {
  return (
    `個別ページ ${counts.pages} 件、複数ページに共通する本文の変更 ${counts.sharedContent} 件、` +
    `共通部分の変更 ${counts.chrome} 件、ビルド生成ファイル ${counts.assets} 件、` +
    `配布ファイル・静的ファイル ${counts.files} 件、リダイレクト ${counts.redirects} 件。`
  );
}

function groupTable(groups, files) {
  if (!groups.length) return ["なし"];
  return [
    "| # | ページ数 | 例 |",
    "|---|---|---|",
    ...groups.map((group, i) => `| ${mdLink(`#${i + 1}`, files[i])} | ${group.paths.length} | ${mdCode(group.paths[0])} |`),
  ];
}

function assetLines(assets) {
  const total = assets.added.length + assets.removed.length;
  if (!total) return ["なし"];
  const listed = [
    ...assets.added.map((name) => `- 追加 ${mdCode(name)}`),
    ...assets.removed.map((name) => `- 削除 ${mdCode(name)}`),
  ];
  const shown = listed.slice(0, LIMITS.assetsListedInReadme);
  const lines = [
    "CSS・JavaScript と、ビルド時に変換された画像です。ファイル名にハッシュが含まれるため、名前の増減が内容や変換条件の変更を表します。",
    "",
    "<details>",
    `<summary>追加 ${assets.added.length}／削除 ${assets.removed.length}</summary>`,
    "",
    ...shown,
  ];
  if (listed.length > shown.length) {
    lines.push("", `ほか ${listed.length - shown.length} 件。全件は ${mdLink("changes.json", "changes.json")} にあります。`);
  }
  lines.push("", "</details>");
  return lines;
}

function fileLines(rows) {
  if (!rows.length) return ["なし"];
  return [
    "| ファイル | 状態 | サイズ |",
    "|---|---|---|",
    ...rows.map((row) => {
      const name = row.status === "removed" ? mdCode(row.key) : mdLink(mdCode(row.key), siteUrl(row.key));
      const size =
        row.status === "modified"
          ? `${formatSize(row.oldSize)} → ${formatSize(row.newSize)}`
          : formatSize(row.newSize ?? row.oldSize);
      return `| ${name} | ${STATUS_LABEL[row.status]} | ${size} |`;
    }),
  ];
}

function redirectLines(rows, meta) {
  if (!rows.length) return ["なし"];
  return [
    "| 転送元 | 状態 | 転送先 | ソース |",
    "|---|---|---|---|",
    ...rows.map((row) => {
      const target =
        row.status === "modified" ? `${mdCode(row.oldTo)} → ${mdCode(row.newTo)}` : mdCode(row.newTo ?? row.oldTo);
      const source =
        row.status === "removed" ? sourceLink(meta, row.oldSource, "old") : sourceLink(meta, row.newSource, "new");
      return `| ${mdCode(row.key)} | ${STATUS_LABEL[row.status]} | ${target} | ${source} |`;
    }),
  ];
}

function footerLines(meta) {
  return [
    "---",
    "",
    "各時点は、指定時刻以前に master へ入った最後のコミット（first-parent）をビルドした結果です。" +
      "差分は公開HTMLから本文を行に分解して比較したもので、表示上の見た目の変化はページ単位では検出しません。" +
      "追加・削除されたページは本文を載せず、公開ページとソースへのリンクを示します。RSS（`rss.xml`）は対象外です。",
    "",
    UNOFFICIAL_NOTICE,
    "",
    `生成: ${toJst(meta.generatedAt)} JST${meta.toolSha ? `／ツール ${mdCode(shortSha(meta.toolSha))}` : ""}`,
    "",
  ];
}

export function countsOf(analysis) {
  return {
    pages: analysis.pages.length,
    sharedContent: analysis.sharedContent.length,
    chrome: analysis.chromeChanges.length,
    assets: analysis.assets.added.length + analysis.assets.removed.length,
    files: analysis.files.length,
    redirects: analysis.redirects.length,
  };
}

function changesJson(analysis, meta, pageFiles, sharedFiles, chromeFiles) {
  const entryJson = (entry) => ({
    path: entry.path,
    state: entry.state,
    oldSource: entry.oldSource ?? null,
    newSource: entry.newSource ?? null,
  });
  return {
    format: CHANGES_FORMAT,
    kind: meta.kind,
    since: meta.since,
    until: meta.until,
    repo: meta.repo,
    old: { sha: meta.oldSha, committedAt: meta.oldDate, node: meta.oldNode },
    new: { sha: meta.newSha, committedAt: meta.newDate, node: meta.newNode },
    toolSha: meta.toolSha,
    sharedContentMinPages: CHECKS.sharedContentMinPages,
    generatedAt: meta.generatedAt,
    warnings: analysis.checks.warnings,
    counts: countsOf(analysis),
    pages: analysis.pages.map((page, i) => ({
      key: page.key,
      title: displayTitle(page.title, page.key),
      file: pageFiles[i],
      ja: entryJson(page.ja),
      en: entryJson(page.en),
    })),
    sharedContent: analysis.sharedContent.map((group, i) => ({ file: sharedFiles[i], paths: group.paths })),
    chrome: analysis.chromeChanges.map((group, i) => ({ file: chromeFiles[i], paths: group.paths })),
    assets: analysis.assets,
    files: analysis.files,
    redirects: analysis.redirects,
  };
}

/**
 * @param {ReturnType<import("./analyze.mjs").analyze>} analysis
 * @param {object} meta
 * @returns {Map<string, string>}
 */
export function renderReport(analysis, meta) {
  const files = new ReportFiles();
  const pageFiles = analysis.pages.map((page) => pageFile(files, page, meta));
  const sharedFiles = analysis.sharedContent.map((group, i) =>
    groupFile(files, "content", "複数ページに共通する本文の変更", group, i + 1),
  );
  const chromeFiles = analysis.chromeChanges.map((group, i) =>
    groupFile(files, "chrome", "共通部分の変更", group, i + 1),
  );
  const counts = countsOf(analysis);

  const readme = headerLines(meta);
  if (meta.same) {
    readme.push("指定した2時点で master の先端コミットが同一のため、変更はありません。", "");
  } else {
    if (analysis.checks.warnings.length) {
      readme.push("## 注意", "", ...analysis.checks.warnings.map((w) => `- ${mdText(w)}`), "");
    }
    readme.push(countLine(counts), "");
    readme.push(`## 個別ページの変更（${counts.pages}）`, "");
    if (analysis.pages.length) {
      readme.push("| ページ | 日本語 | English |", "|---|---|---|");
      analysis.pages.forEach((page, i) => {
        const title = mdLink(mdText(displayTitle(page.title, page.key)), pageFiles[i]);
        readme.push(`| ${title} | ${languageCell(page.ja, meta)} | ${languageCell(page.en, meta)} |`);
      });
    } else {
      readme.push("なし");
    }
    readme.push("");
    readme.push(`## 複数ページに共通する本文の変更（${counts.sharedContent}）`, "");
    readme.push(`同一の差分が ${CHECKS.sharedContentMinPages} ページ以上に生じたものです（緊急のお知らせの表示、一括置換など）。`, "");
    readme.push(...groupTable(analysis.sharedContent, sharedFiles), "");
    readme.push(`## 共通部分の変更（${counts.chrome}）`, "");
    readme.push("ヘッダ・フッタなど、本文（`main`）の外側の差分です。差分が同じページをまとめています。", "");
    readme.push(...groupTable(analysis.chromeChanges, chromeFiles), "");
    readme.push("### ビルド生成ファイル（`/_astro/`）", "", ...assetLines(analysis.assets), "");
    readme.push(`## 配布ファイル・静的ファイル（${counts.files}）`, "", ...fileLines(analysis.files), "");
    readme.push(`## リダイレクト（${counts.redirects}）`, "", ...redirectLines(analysis.redirects, meta), "");
  }
  readme.push(...footerLines(meta));
  files.add("README.md", readme.join("\n"));
  files.add(
    "changes.json",
    `${JSON.stringify(changesJson(analysis, meta, pageFiles, sharedFiles, chromeFiles), null, 2)}\n`,
  );

  if (files.totalBytes() > LIMITS.reportBytes) {
    throw new Error(`報告の合計サイズが上限 ${formatSize(LIMITS.reportBytes)} を超える`);
  }
  return files.files;
}

export function renderSummary(analysis, meta) {
  const counts = countsOf(analysis);
  const lines = [
    `### utelecon 変更記録 ${toJst(meta.since)} → ${toJst(meta.until)}（JST）`,
    "",
    "| 区分 | 件数 |",
    "|---|---|",
    `| 個別ページ | ${counts.pages} |`,
    `| 複数ページに共通する本文 | ${counts.sharedContent} |`,
    `| 共通部分 | ${counts.chrome} |`,
    `| ビルド生成ファイル | ${counts.assets} |`,
    `| 配布ファイル・静的ファイル | ${counts.files} |`,
    `| リダイレクト | ${counts.redirects} |`,
    "",
  ];
  if (analysis.checks.warnings.length) {
    lines.push("**注意**", "", ...analysis.checks.warnings.map((w) => `- ${mdText(w)}`), "");
  }
  return lines.join("\n");
}
