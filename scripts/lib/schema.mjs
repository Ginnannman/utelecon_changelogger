import { LIMITS, SNAPSHOT_FORMAT } from "./config.mjs";

/**
 * @typedef {object} PageEntry
 * @property {string} lang
 * @property {string} title
 * @property {string} description
 * @property {string[]} content
 * @property {string[]} chrome
 * @property {string | null} source
 *
 * @typedef {object} Snapshot
 * @property {number} format
 * @property {string} sha
 * @property {string} committedAt
 * @property {string} node
 * @property {string} createdAt
 * @property {Record<string, PageEntry>} pages
 * @property {Record<string, { lang: string, to: string, source: string | null }>} redirects
 * @property {Record<string, string>} assets
 * @property {Record<string, { size: number, sha256: string }>} files
 * @property {{ pages: number, markers: Record<string, number> }} stats
 */

const FORBIDDEN_PATH_CHARS = /[\u0000-\u001f\u007f\\]/;
const MAX_PATH_LENGTH = 1000;
const SHA256 = /^[0-9a-f]{64}$/;

export class SnapshotError extends Error {}

function fail(message) {
  throw new SnapshotError(message);
}

function isString(value, maxLength = LIMITS.lineLength) {
  return typeof value === "string" && value.length <= maxLength;
}

function hasValidSegments(path, { allowTrailingSlash }) {
  const segments = path.split("/");
  const last = segments.length - 1;
  return segments.every((segment, index) => {
    if (segment === "." || segment === "..") return false;
    if (segment !== "") return true;
    return index === 0 || (allowTrailingSlash && index === last);
  });
}

function checkSitePath(path) {
  const valid =
    isString(path, MAX_PATH_LENGTH) &&
    path.startsWith("/") &&
    !FORBIDDEN_PATH_CHARS.test(path) &&
    hasValidSegments(path, { allowTrailingSlash: true });
  if (!valid) fail(`不正なパス: ${JSON.stringify(path)}`);
}

function checkLines(lines, label) {
  if (!Array.isArray(lines) || lines.length > LIMITS.linesPerPage) fail(`${label} の行数が不正`);
  if (!lines.every((line) => isString(line))) fail(`${label} に不正な行がある`);
}

function checkSource(source, label) {
  if (source === null) return;
  const valid =
    isString(source, MAX_PATH_LENGTH) &&
    source.startsWith("src/") &&
    !FORBIDDEN_PATH_CHARS.test(source) &&
    hasValidSegments(`/${source}`, { allowTrailingSlash: false });
  if (!valid) fail(`${label} のソースパスが不正`);
}

/**
 * @param {unknown} data
 * @returns {Snapshot}
 */
export function validateSnapshot(data) {
  if (!data || typeof data !== "object") fail("スナップショットがオブジェクトではない");
  const snapshot = /** @type {Snapshot} */ (data);
  if (snapshot.format !== SNAPSHOT_FORMAT) fail(`形式 ${snapshot.format} は扱えない（期待値 ${SNAPSHOT_FORMAT}）`);
  for (const key of ["sha", "committedAt", "node", "createdAt"]) {
    if (!isString(snapshot[key], 100)) fail(`${key} が不正`);
  }
  for (const key of ["pages", "redirects", "assets", "files", "stats"]) {
    if (!snapshot[key] || typeof snapshot[key] !== "object") fail(`${key} がない`);
  }

  const pagePaths = Object.keys(snapshot.pages);
  if (pagePaths.length > LIMITS.pages) fail(`ページ数が上限 ${LIMITS.pages} を超える`);
  for (const path of pagePaths) {
    checkSitePath(path);
    const page = snapshot.pages[path];
    if (!isString(page.lang, 20) || !isString(page.title) || !isString(page.description)) fail(`${path} の属性が不正`);
    checkLines(page.content, `${path} の本文`);
    checkLines(page.chrome, `${path} の共通部分`);
    checkSource(page.source, path);
  }
  for (const [path, redirect] of Object.entries(snapshot.redirects)) {
    checkSitePath(path);
    if (!isString(redirect.lang, 20) || !isString(redirect.to)) fail(`${path} のリダイレクトが不正`);
    checkSource(redirect.source, path);
  }
  for (const [path, hash] of Object.entries(snapshot.assets)) {
    checkSitePath(`/${path}`);
    if (!SHA256.test(hash)) fail(`${path} のハッシュが不正`);
  }
  for (const [path, file] of Object.entries(snapshot.files)) {
    checkSitePath(path);
    if (!Number.isSafeInteger(file.size) || file.size < 0 || !SHA256.test(file.sha256)) fail(`${path} の属性が不正`);
  }
  if (!Number.isSafeInteger(snapshot.stats.pages)) fail("stats.pages が不正");
  for (const count of Object.values(snapshot.stats.markers ?? {})) {
    if (!Number.isSafeInteger(count)) fail("stats.markers が不正");
  }
  return snapshot;
}
