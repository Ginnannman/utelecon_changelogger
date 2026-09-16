import { test } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { buildSnapshot, sourceCandidates, toUrlPath } from "../scripts/lib/snapshot.mjs";
import { validateSnapshot, SnapshotError } from "../scripts/lib/schema.mjs";
import { layoutPage, redirectPage, tempDir, writeTree } from "./helpers/fixture.mjs";

async function fixture() {
  const root = await tempDir();
  await writeTree(path.join(root, "dist"), {
    "index.html": layoutPage({ title: "トップ", body: "<p>ようこそ</p>" }),
    "about/index.html": layoutPage({ title: "概要", body: "<p>説明</p>" }),
    "en/about/index.html": layoutPage({ lang: "en", title: "About", body: "<p>Text</p>" }),
    "dynamic/page/index.html": layoutPage({ title: "動的", body: "<p>x</p>", withSidebar: false }),
    "404.html": "<html><body><p>not found</p></body></html>",
    "zoom/index.html": redirectPage("/zoom/new/"),
    "notice/rss.xml": "<rss/>",
    "_astro/app.ABCDEFGH.css": "body{}",
    "about/doc.pdf": "PDF",
  });
  await writeTree(path.join(root, "src"), {
    "src/pages/index.mdx": "",
    "src/pages/about/index.md": "",
    "src/pages/en/about.mdx": "",
    "src/pages/zoom.md": "",
  });
  return root;
}

test("URL パスとソースの候補を求める", () => {
  assert.equal(toUrlPath("index.html"), "/");
  assert.equal(toUrlPath("a/b/index.html"), "/a/b/");
  assert.equal(toUrlPath("404.html"), "/404.html");
  assert.deepEqual(sourceCandidates("/a/").slice(0, 2), ["src/pages/a.md", "src/pages/a.mdx"]);
  assert.ok(sourceCandidates("/").includes("src/pages/index.astro"));
});

test("ビルド出力からスナップショットを作る", async () => {
  const root = await fixture();
  const snapshot = validateSnapshot(
    await buildSnapshot({ distDir: path.join(root, "dist"), sourceRoot: path.join(root, "src"), sha: "a".repeat(40) }),
  );

  assert.deepEqual(Object.keys(snapshot.pages).sort(), ["/", "/404.html", "/about/", "/dynamic/page/", "/en/about/"]);
  assert.equal(snapshot.pages["/"].source, "src/pages/index.mdx");
  assert.equal(snapshot.pages["/about/"].source, "src/pages/about/index.md");
  assert.equal(snapshot.pages["/en/about/"].source, "src/pages/en/about.mdx");
  assert.equal(snapshot.pages["/dynamic/page/"].source, null);
  assert.equal(snapshot.pages["/en/about/"].lang, "en");
  assert.equal(snapshot.pages["/about/"].title, "概要 | utelecon");
  assert.ok(snapshot.pages["/about/"].content.includes("説明"));
  assert.deepEqual(snapshot.pages["/404.html"].chrome, []);

  assert.deepEqual(snapshot.redirects, { "/zoom/": { lang: "ja", to: "/zoom/new/", source: "src/pages/zoom.md" } });
  assert.deepEqual(Object.keys(snapshot.files), ["/about/doc.pdf"]);
  assert.deepEqual(Object.keys(snapshot.assets), ["_astro/app.ABCDEFGH.css"]);
  assert.deepEqual(snapshot.stats, {
    pages: 5,
    markers: { main: 4, sidebar: 3, breadcrumbSeparator: 4, languageLink: 4 },
  });
});

test("形式に合わないスナップショットを拒否する", async () => {
  const root = await fixture();
  const valid = await buildSnapshot({ distDir: path.join(root, "dist"), sourceRoot: path.join(root, "src") });
  const broken = (mutate) => {
    const copy = structuredClone(valid);
    mutate(copy);
    return () => validateSnapshot(copy);
  };
  assert.throws(broken((s) => (s.format = 1)), SnapshotError);
  assert.throws(broken((s) => (s.pages["/x\n/"] = s.pages["/"])), SnapshotError);
  assert.throws(broken((s) => (s.pages["/a/../b/"] = s.pages["/"])), SnapshotError);
  assert.throws(broken((s) => (s.pages["/"].content = [1])), SnapshotError);
  assert.throws(broken((s) => (s.pages["/"].source = "../etc/passwd")), SnapshotError);
  assert.throws(broken((s) => (s.files["/about/doc.pdf"].size = -1)), SnapshotError);
  assert.throws(broken((s) => (s.assets["_astro/app.ABCDEFGH.css"] = "zz")), SnapshotError);
});
