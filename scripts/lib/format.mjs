import { SITE_URL } from "./config.mjs";

export function toJst(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleString("sv-SE", { timeZone: "Asia/Tokyo" }).slice(0, 16);
}

export function shortSha(sha) {
  return String(sha ?? "").slice(0, 9);
}

export function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
}

export function pageKey(urlPath) {
  return urlPath.replace(/^\/en(\/|$)/, "/");
}

export function englishPath(key) {
  return key === "/" ? "/en/" : `/en${key}`;
}

export function slugOf(key) {
  if (key === "/") return "index";
  const slug = key.replace(/^\/|\/$/g, "").replace(/[^-_.0-9A-Za-z]+/g, "__");
  return slug || "index";
}

export function siteUrl(urlPath) {
  return SITE_URL + urlPath;
}

export function githubUrl(repo, ...parts) {
  return [`https://github.com/${repo}`, ...parts].join("/");
}

const CONTROL_CHARS = /[\u0000-\u001f\u007f]+/g;
const MARKDOWN_PUNCTUATION = /[\\`*_[\]<>|~#&]/g;

export function mdText(value) {
  return String(value ?? "")
    .replace(CONTROL_CHARS, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(MARKDOWN_PUNCTUATION, "\\$&");
}

export function mdCode(value) {
  const text = String(value ?? "").replace(CONTROL_CHARS, " ").replace(/\|/g, "\\|");
  const longestRun = Math.max(0, ...(text.match(/`+/g) ?? []).map((run) => run.length));
  const fence = "`".repeat(longestRun + 1);
  const padding = text.startsWith("`") || text.endsWith("`") ? " " : "";
  return `${fence}${padding}${text}${padding}${fence}`;
}

export function mdLink(text, url) {
  return `[${text}](<${encodeURI(url).replace(/[<>]/g, encodeURIComponent)}>)`;
}

export function diffFence(lines) {
  const longestRun = Math.max(2, ...lines.flatMap((line) => (line.match(/`+/g) ?? []).map((run) => run.length)));
  const fence = "`".repeat(longestRun + 1);
  return [`${fence}diff`, ...lines, fence].join("\n");
}
