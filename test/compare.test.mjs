import { test } from "node:test";
import assert from "node:assert/strict";
import { analyze, checkSnapshots } from "../scripts/lib/analyze.mjs";
import { renderDiffLines, renderReport, renderSummary, UNOFFICIAL_NOTICE } from "../scripts/lib/report.mjs";
import { LIMITS } from "../scripts/lib/config.mjs";
import { snapshotOf } from "./helpers/fixture.mjs";

const OLD_SHA = "a".repeat(40);
const NEW_SHA = "b".repeat(40);
const meta = {
  kind: "weekly",
  since: "2026-09-07T03:00:00+09:00",
  until: "2026-09-14T03:00:00+09:00",
  repo: "utelecon/utelecon.github.io",
  oldSha: OLD_SHA,
  newSha: NEW_SHA,
  oldDate: "",
  newDate: "",
  oldNode: "v24.0.0",
  newNode: "v24.0.0",
  toolSha: "",
  generatedAt: "2026-09-14T03:05:00+09:00",
  same: false,
};

const footer = ["[uteleconについて](/about/)"];
const newFooter = ["[uteleconについて](/about/new/)"];
const banner = "【重要】停止のお知らせ";

function sites() {
  const before = {
    "/about/": { title: "概要 | utelecon", content: ["元の説明"], chrome: footer, source: "src/pages/about.md" },
    "/en/about/": { title: "About | utelecon", content: ["Same"], chrome: footer, source: "src/pages/en/about.md" },
    "/google/": { title: "メール | utelecon", content: ["不変"], chrome: footer },
    "/en/google/": { title: "Mail | utelecon", content: ["old"], chrome: footer },
    "/old/": { title: "古い頁 | utelecon", content: ["削除される本文"], chrome: footer, source: "src/pages/old.md" },
  };
  const after = {
    "/about/": { ...before["/about/"], content: ["改訂した説明"], chrome: newFooter },
    "/en/about/": { ...before["/en/about/"], chrome: newFooter },
    "/google/": { ...before["/google/"], chrome: newFooter },
    "/en/google/": { ...before["/en/google/"], content: ["new"], chrome: newFooter },
    "/new/": { title: "新しい頁 | utelecon", content: ["追加された本文"], chrome: newFooter, source: "src/pages/new.mdx" },
  };
  for (const name of ["a", "b", "c", "d", "e"]) {
    before[`/many/${name}/`] = { title: name, content: ["同じ本文"], chrome: footer };
    after[`/many/${name}/`] = { title: name, content: [banner, "同じ本文"], chrome: newFooter };
  }
  return { before: snapshotOf(before), after: snapshotOf(after) };
}

test("個別ページ・共通の変更・共通部分を分類する", () => {
  const { before, after } = sites();
  const result = analyze(before, after);

  assert.deepEqual(result.pages.map((p) => p.key), ["/about/", "/google/", "/new/", "/old/"]);
  const byKey = Object.fromEntries(result.pages.map((p) => [p.key, p]));
  assert.deepEqual([byKey["/about/"].ja.state, byKey["/about/"].en.state], ["modified", "unchanged"]);
  assert.deepEqual([byKey["/google/"].ja.state, byKey["/google/"].en.state], ["unchanged", "modified"]);
  assert.equal(byKey["/google/"].title, "メール | utelecon");
  assert.deepEqual([byKey["/new/"].ja.state, byKey["/new/"].en.state], ["added", "absent"]);
  assert.equal(byKey["/old/"].ja.state, "removed");
  assert.equal(byKey["/old/"].ja.oldSource, "src/pages/old.md");

  assert.equal(result.sharedContent.length, 1);
  assert.equal(result.sharedContent[0].paths.length, 5);
  assert.equal(result.chromeChanges.length, 1);
  assert.equal(result.chromeChanges[0].paths.length, 9);
});

test("追加・削除ページは本文を載せず、公開ページとソースへのリンクを示す", () => {
  const { before, after } = sites();
  const files = renderReport(analyze(before, after), meta);

  const added = files.get("pages/new.md");
  assert.ok(added.includes("(<https://utelecon.adm.u-tokyo.ac.jp/new/>)"));
  assert.ok(added.includes(`(<https://github.com/utelecon/utelecon.github.io/blob/${NEW_SHA}/src/pages/new.mdx>)`));
  assert.ok(!added.includes("追加された本文"));

  const removed = files.get("pages/old.md");
  assert.ok(removed.includes(`(<https://github.com/utelecon/utelecon.github.io/blob/${OLD_SHA}/src/pages/old.md>)`));
  assert.ok(!removed.includes("削除される本文"));
  assert.ok(!removed.includes("utelecon.adm.u-tokyo.ac.jp/old/"));

  const modified = files.get("pages/about.md");
  assert.ok(modified.includes("- 元の説明") && modified.includes("+ 改訂した説明"));
  assert.ok(!modified.includes("## English"));

  const readme = files.get("README.md");
  assert.ok(readme.includes(UNOFFICIAL_NOTICE));
  assert.ok(readme.includes("| [メール](<pages/google.md>) |"));
  assert.ok(files.has("common/content-1.md") && files.has("common/chrome-1.md"));
  assert.equal(JSON.parse(files.get("changes.json")).counts.pages, 4);
  assert.ok(renderSummary(analyze(before, after), meta).includes("| 個別ページ | 4 |"));
});

test("対象由来の文字列で Markdown の構造を崩さない", () => {
  const hostile = "x | y\n## 注入 [link](https://evil.example) <script>`";
  const before = snapshotOf({ "/a/": { title: "A", content: ["1"] } });
  const after = snapshotOf({ "/a/": { title: hostile, content: ["2"] } });
  after.redirects["/r/"] = { lang: "ja", to: hostile, source: null };
  after.files["/f|`x`.pdf"] = { size: 1, sha256: "0".repeat(64) };
  const files = renderReport(analyze(before, after), meta);
  const readme = files.get("README.md");

  for (const line of readme.split("\n")) {
    assert.ok(!line.startsWith("## 注入"), line);
    if (line.startsWith("|")) {
      const cells = line.replace(/\\\|/g, "").split("|").length;
      assert.ok(cells <= 6, line);
    }
  }
  const outsideCode = readme.replace(/(`+)(?:(?!\1)[\s\S])*?\1/g, "");
  assert.doesNotMatch(outsideCode, /(?<!\\)\]\(https:\/\/evil/);
  assert.doesNotMatch(outsideCode, /(?<!\\)<script/);
  assert.ok(!files.get("pages/a.md").split("\n")[0].includes("\n"));
  assert.ok(files.get("pages/a.md").startsWith("# x \\| y \\#\\# 注入"));
});

test("長い差分は切り詰め、全文を別ファイルに置く", () => {
  const long = Array.from({ length: LIMITS.diffLinesPerBlock + 10 }, (_, i) => `行${i}`);
  const before = snapshotOf({ "/a/": { title: "A", content: [] } });
  const after = snapshotOf({ "/a/": { title: "A", content: long } });
  const files = renderReport(analyze(before, after), meta);
  assert.ok(files.get("pages/a.md").includes("先頭 1500 行のみ表示"));
  assert.equal(files.get("pages/a.ja.diff").trimEnd().split("\n").length, LIMITS.diffLinesPerBlock + 12);
});

test("ビルド生成ファイルの一覧は上限件数で打ち切る", () => {
  const assets = Object.fromEntries(Array.from({ length: 60 }, (_, i) => [`_astro/x${i}.css`, "0".repeat(64)]));
  const before = snapshotOf({});
  const after = snapshotOf({}, { assets });
  const readme = renderReport(analyze(before, after), meta).get("README.md");
  assert.equal(readme.split("\n").filter((l) => l.startsWith("- 追加")).length, LIMITS.assetsListedInReadme);
  assert.ok(readme.includes("ほか 10 件"));
});

test("報告ファイル名の衝突を検出する", () => {
  const before = snapshotOf({ "/a/b/": { content: ["1"] }, "/a__b/": { content: ["1"] } });
  const after = snapshotOf({ "/a/b/": { content: ["2"] }, "/a__b/": { content: ["2"] } });
  assert.throws(() => analyze(before, after), /衝突/);
});

test("ページ数の急減は失敗、レイアウト要素の変化は警告とする", () => {
  const many = Object.fromEntries(Array.from({ length: 10 }, (_, i) => [`/p${i}/`, {}]));
  const few = Object.fromEntries(Array.from({ length: 4 }, (_, i) => [`/p${i}/`, {}]));
  assert.equal(checkSnapshots(snapshotOf(many), snapshotOf(few)).errors.length, 1);

  const before = snapshotOf(many);
  const after = snapshotOf(many);
  after.stats.markers.sidebar = 0;
  const { errors, warnings } = checkSnapshots(before, after);
  assert.equal(errors.length, 0);
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /sidebar/);
});

test("差分は変更の前後2行だけを残す", () => {
  const ops = ["a", "b", "c", "d", "e", "f", "g"].map((text) => ({ type: " ", text }));
  ops.push({ type: "+", text: "h" });
  assert.deepEqual(renderDiffLines(ops), ["  f", "  g", "+ h"]);
});
