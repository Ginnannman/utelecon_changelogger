// 模擬的なビルド出力（utelecon の Layout.astro の構造に倣う）を2時点分作り、
// snapshot.mjs → compare.mjs → index.mjs を通して結果を検査する。
// 実際の utelecon のビルド出力での検証ではない。

import { mkdtemp, mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import path from "node:path";
import assert from "node:assert/strict";

const root = await mkdtemp(path.join(tmpdir(), "uchg-"));
const node = (...args) => execFileSync(process.execPath, args, { encoding: "utf8" });

function page({ lang = "ja", title, body, toc = "", emergency = "", footerLink = "/about/", other = "/en/" }) {
  return `<!doctype html><html lang="${lang}"><head><title>${title} | utelecon</title>
<meta name="description" content="説明 ${title}"><script src="/_astro/x.js"></script></head><body>
<header id="header" class="header"><div class="title"><a href="/">utelecon</a></div>
<a id="changeLangLink" href="${other}">English</a></header>
<main data-toc="true" class="mark-external-link">
<p class="breadcrumb"><a href="/" class="breadcrumb__item">トップ</a><span class="breadcrumb__separator">arrow_forward_ios</span><span class="breadcrumb__item">${title}</span></p>
<h1 class="title">${title}</h1>
<div id="article"><aside id="sidebar"><section id="toc"><b>目次</b><ul><li><a href="#a">${toc}</a></li></ul></section></aside>
<div id="content">${emergency}${body}</div></div></main>
<footer><div class="footer"><a href="${footerLink}">uteleconについて</a></div></footer></body></html>`;
}
const redirect = (to) =>
  `<!doctype html><title>Redirecting to: ${to}</title><meta http-equiv="refresh" content="0;url=${to}"><body></body>`;

async function writeDist(dir, files) {
  for (const [rel, content] of Object.entries(files)) {
    const p = path.join(dir, rel);
    await mkdir(path.dirname(p), { recursive: true });
    await writeFile(p, content);
  }
}

const banner = `<div class="emergency"><p>【重要】システム停止のお知らせ</p></div>`;
const many = ["a", "b", "c", "d", "e", "f"];

function site(v) {
  const newer = v === 2;
  const files = {
    "index.html": page({ title: "トップ", body: "<p>ようこそ</p>", footerLink: newer ? "/about/new/" : "/about/" }),
    "about/index.html": page({
      title: "uteleconについて",
      toc: newer ? "目次が変わる" : "目次",
      body: `<h2>概要</h2><p>${newer ? "改訂した説明文です。" : "元の説明文です。"}</p>
<ul><li><p>項目1</p><p>補足</p><ul><li>入れ子</li></ul></li><li>項目2 <a href="/_astro/doc.AbC123xy.pdf">資料</a></li></ul>
<table><tr><th>名前</th><th>値</th></tr><tr><td>A</td><td>${newer ? "2" : "1"}</td></tr></table>`,
      footerLink: newer ? "/about/new/" : "/about/",
      other: "/en/about/",
    }),
    "en/about/index.html": page({ lang: "en", title: "About", body: "<p>Same text.</p>", footerLink: newer ? "/about/new/" : "/about/", other: "/about/" }),
    "faq/index.html": page({ title: "FAQ", body: `<h2>質問</h2><pre>code line\n${newer ? "new" : "old"}</pre>`, footerLink: newer ? "/about/new/" : "/about/" }),
    "en/faq/index.html": page({ lang: "en", title: "FAQ", body: `<p>${newer ? "Updated" : "Original"}</p>`, footerLink: newer ? "/about/new/" : "/about/" }),
    "google/index.html": page({ title: "ECCSクラウドメール", body: "<p>不変</p>", footerLink: newer ? "/about/new/" : "/about/" }),
    "en/google/index.html": page({ lang: "en", title: "ECCS Cloud Email", body: `<p>${newer ? "changed" : "same"}</p>`, footerLink: newer ? "/about/new/" : "/about/" }),
    "notice/rss.xml": `<rss>${v}</rss>`,
    [`_astro/layout.${newer ? "NEWHASH1" : "OLDHASH1"}.css`]: `body{color:${newer ? "red" : "black"}}`,
    "about/doc.pdf": `PDF-${v}`,
    "zoom/index.html": redirect(newer ? "/zoom/new/" : "/zoom/old/"),
  };
  for (const m of many) {
    files[`many/${m}/index.html`] = page({ title: `頁${m}`, body: "<p>同じ本文</p>", emergency: newer ? banner : "", footerLink: newer ? "/about/new/" : "/about/" });
  }
  if (newer) {
    files["new/index.html"] = page({ title: "新しいページ", body: "<p>追加された</p>", footerLink: "/about/new/" });
    files["img/new.png"] = "PNG";
    files["webex/index.html"] = redirect("https://example.com/");
  } else {
    files["old/index.html"] = page({ title: "古いページ", body: "<p>削除される</p>" });
  }
  return files;
}

try {
  for (const v of [1, 2]) await writeDist(path.join(root, `dist${v}`), site(v));
  for (const v of [1, 2]) {
    process.env.SNAP_SHA = `sha${v}`;
    process.env.SNAP_INSTALL = "npm ci";
    console.log(node("scripts/snapshot.mjs", path.join(root, `dist${v}`), path.join(root, `s${v}.json.gz`)).trim());
  }
  const out = path.join(root, "reports/2026/r1");
  const common = ["--kind", "weekly", "--since", "2026-09-07T03:00:00+09:00", "--until", "2026-09-14T03:00:00+09:00", "--old-sha", "a".repeat(40), "--new-sha", "b".repeat(40)];
  console.log(node("scripts/compare.mjs", "--old", path.join(root, "s1.json.gz"), "--new", path.join(root, "s2.json.gz"), "--out", out, ...common).trim());
  // 同一コミットの記録
  node("scripts/compare.mjs", "--out", path.join(root, "reports/2026/r0"), ...common.slice(0, 6), "--old-sha", "c".repeat(40), "--new-sha", "c".repeat(40));
  console.log(node("scripts/index.mjs", path.join(root, "reports")).trim());

  const c = JSON.parse(await readFile(path.join(out, "changes.json"), "utf8"));
  const keys = c.pages.map((p) => p.key);
  assert.deepEqual(keys, ["/about/", "/faq/", "/google/", "/new/", "/old/"], "個別ページ");
  const g = c.pages.find((p) => p.key === "/google/");
  assert.equal(g.title, "ECCSクラウドメール", "日本語が変更なしでも表題は日本語を使う");
  assert.deepEqual([g.ja, g.en], ["unchanged", "modified"]);
  assert.equal(c.pages.find((p) => p.key === "/about/").en, "unchanged", "en/about は本文不変");
  assert.equal(c.pages.find((p) => p.key === "/faq/").en, "modified");
  assert.equal(c.pages.find((p) => p.key === "/new/").ja, "added");
  assert.equal(c.pages.find((p) => p.key === "/new/").en, "absent");
  assert.equal(c.pages.find((p) => p.key === "/old/").ja, "removed");
  assert.equal(c.sharedContent.length, 1, "バナーは共通本文として束ねる");
  assert.equal(c.sharedContent[0].paths.length, 6);
  assert.equal(c.chrome.length, 1, "フッタの変更は1件に束ねる（言語切替リンクで分散しない）");
  assert.ok(c.chrome[0].paths.length >= 10);
  assert.deepEqual(c.assets, { added: ["_astro/layout.NEWHASH1.css"], removed: ["_astro/layout.OLDHASH1.css"] });
  assert.deepEqual(c.files.map((f) => [f.path, f.status]), [["/about/doc.pdf", "modified"], ["/img/new.png", "added"]], "rss は除外");
  assert.deepEqual(c.redirects.map((r) => [r.from, r.status]), [["/webex/", "added"], ["/zoom/", "modified"]]);

  const about = await readFile(path.join(out, "pages/about.md"), "utf8");
  assert.ok(!about.includes("目次が変わる"), "目次は比較しない");
  assert.ok(about.includes("- 元の説明文です。") && about.includes("+ 改訂した説明文です。"));
  assert.ok(about.includes("| A | 2 |"));
  const snapLines = about.split("\n");
  assert.ok(!snapLines.some((l) => /^[-+ ] \s*- 補足/.test(l)), "箇条内の2段落目に記号を重ねない");
  assert.ok(!about.includes("arrow_forward_ios"));
  console.log("\n----- README.md -----\n" + (await readFile(path.join(out, "README.md"), "utf8")));
  console.log("----- pages/about.md -----\n" + about);
  console.log("----- reports/README.md -----\n" + (await readFile(path.join(root, "reports/README.md"), "utf8")));
  console.log("ALL PASSED");
} finally {
  if (!process.env.KEEP) await rm(root, { recursive: true, force: true });
  else console.log(root);
}
