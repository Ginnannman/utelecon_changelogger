import { test } from "node:test";
import assert from "node:assert/strict";
import { fromHtml } from "hast-util-from-html";
import { select } from "hast-util-select";
import { extractLines, normalizeUrl } from "../scripts/lib/extract.mjs";
import { CHROME_RULES, CONTENT_RULES } from "../scripts/lib/config.mjs";
import { layoutPage } from "./helpers/fixture.mjs";

const lines = (html, selector = "main", rules = CONTENT_RULES) => extractLines(select(selector, fromHtml(html)), rules);

test("見出し・箇条・入れ子・引用・定義を行に変換する", () => {
  const html = `<main><h2>概要</h2><ul><li><p>項目1</p><p>補足</p><ul><li>入れ子<ul><li>孫</li></ul></li></ul></li><li>項目2</li></ul>
    <blockquote><p>引用1</p><p>引用2</p></blockquote><dl><dt>用語</dt><dd>定義<br>2行目</dd></dl></main>`;
  assert.deepEqual(lines(html), [
    "## 概要",
    "- 項目1",
    "  補足",
    "  - 入れ子",
    "    - 孫",
    "- 項目2",
    "> 引用1",
    "> 引用2",
    "用語",
    "    定義",
    "    2行目",
  ]);
});

test("表・整形済みテキスト・リンク・画像・埋め込みを行に変換する", () => {
  const html = `<main><table><tr><th>a|b</th><td>c</td></tr></table><pre>l1\nl2\n</pre>
    <p>文<img src="/_astro/a.Xy12_abZ.webp" alt="図">と<a href="https://example.com">リンク</a></p>
    <iframe src="https://example.com/embed"></iframe><hr></main>`;
  assert.deepEqual(lines(html), [
    "| a\\|b | c |",
    "    l1",
    "    l2",
    "文![図](/_astro/a.webp)と[リンク](https://example.com)",
    "[iframe](https://example.com/embed)",
    "---",
  ]);
});

test("本文の規則で目次とRSSアイコンを除き、パンくずの区切りを置き換える", () => {
  const html = layoutPage({ title: "頁", toc: "目次の文字", body: '<p>本文<a class="rss_icon" href="/rss/">rss_feed</a></p>' });
  const result = lines(html);
  assert.ok(result.includes("[トップ](/) > 頁"));
  assert.ok(result.includes("本文"));
  assert.ok(!result.join("\n").includes("目次の文字"));
  assert.ok(!result.join("\n").includes("rss_feed"));
});

test("共通部分の規則で本文と言語切替リンクを除く", () => {
  const html = layoutPage({ title: "頁", body: "<p>本文</p>", otherLanguage: "/en/page/" });
  assert.deepEqual(lines(html, "body", CHROME_RULES), ["[utelecon](/)", "[uteleconについて](/about/)"]);
});

test("抽出で元の木を変更しない", () => {
  const tree = fromHtml(layoutPage({ title: "頁", body: "<p>本文</p>" }));
  const before = JSON.stringify(tree);
  extractLines(select("main", tree), CONTENT_RULES);
  extractLines(select("body", tree), CHROME_RULES);
  assert.equal(JSON.stringify(tree), before);
});

test("/_astro/ のハッシュだけを除く", () => {
  assert.equal(normalizeUrl("/_astro/kono_2.BcEG4a4g_RGGUG.webp"), "/_astro/kono_2.webp");
  assert.equal(normalizeUrl("/images/photo.BcEG4a4g.webp"), "/images/photo.BcEG4a4g.webp");
  assert.equal(normalizeUrl(undefined), "");
});
