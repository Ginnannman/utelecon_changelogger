import { mdLink, mdText, toJst } from "./format.mjs";
import { UNOFFICIAL_NOTICE } from "./report.mjs";

/**
 * @param {{ dir: string, changes: any }[]} reports
 */
export function renderIndex(reports) {
  const sorted = [...reports].sort(
    (a, b) => b.changes.until.localeCompare(a.changes.until) || b.changes.since.localeCompare(a.changes.since),
  );
  const lines = [
    "# utelecon 変更記録一覧",
    "",
    `> ${UNOFFICIAL_NOTICE}`,
    "",
    "新しい順。数字は、個別ページ／共通本文／共通部分／配布・静的ファイル／リダイレクトの件数です。",
    "",
    "| 期間（JST） | 種別 | ページ | 共通本文 | 共通部分 | ファイル | リダイレクト |",
    "|---|---|---|---|---|---|---|",
  ];
  for (const { dir, changes } of sorted) {
    const c = changes.counts;
    const period = mdText(`${toJst(changes.since)} → ${toJst(changes.until)}`);
    const kind = changes.kind === "weekly" ? "定期" : "手動";
    lines.push(
      `| ${mdLink(period, `${dir}/README.md`)} | ${kind} | ${c.pages} | ${c.sharedContent} | ${c.chrome} | ${c.files} | ${c.redirects} |`,
    );
  }
  lines.push("");
  return lines.join("\n");
}
