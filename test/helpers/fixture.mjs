import { mkdir, mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

export function layoutPage({
  lang = "ja",
  title,
  body,
  toc = "目次",
  footerLink = "/about/",
  otherLanguage = "/en/",
  withSidebar = true,
}) {
  const sidebar = withSidebar ? `<aside id="sidebar"><section id="toc"><a href="#a">${toc}</a></section></aside>` : "";
  return `<!doctype html><html lang="${lang}"><head><title>${title} | utelecon</title>
<meta name="description" content="説明 ${title}"></head><body>
<header id="header"><a href="/">utelecon</a><a id="changeLangLink" href="${otherLanguage}">English</a></header>
<main><p class="breadcrumb"><a href="/">トップ</a><span class="breadcrumb__separator">arrow_forward_ios</span><span>${title}</span></p>
<h1 class="title">${title}</h1><div id="article">${sidebar}<div id="content">${body}</div></div></main>
<footer><a href="${footerLink}">uteleconについて</a></footer></body></html>`;
}

export function redirectPage(to) {
  return `<!doctype html><title>Redirecting to: ${to}</title><meta http-equiv="refresh" content="0;url=${to}"><body></body>`;
}

export async function tempDir(prefix = "uchg-") {
  return mkdtemp(path.join(tmpdir(), prefix));
}

export async function writeTree(root, files) {
  for (const [relative, content] of Object.entries(files)) {
    const target = path.join(root, relative);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, content);
  }
}

export function snapshotOf(pages, overrides = {}) {
  const entries = Object.entries(pages).map(([urlPath, page]) => [
    urlPath,
    {
      lang: urlPath.startsWith("/en/") ? "en" : "ja",
      title: "",
      description: "",
      content: [],
      chrome: [],
      source: null,
      ...page,
    },
  ]);
  const count = entries.length;
  return {
    format: 2,
    sha: "",
    committedAt: "",
    node: "v22.0.0",
    createdAt: "2026-01-01T00:00:00Z",
    pages: Object.fromEntries(entries),
    redirects: {},
    assets: {},
    files: {},
    stats: { pages: count, markers: { main: count, sidebar: count, breadcrumbSeparator: count, languageLink: count } },
    ...overrides,
  };
}
