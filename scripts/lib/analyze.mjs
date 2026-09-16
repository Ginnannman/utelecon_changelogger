import { diffArrays } from "diff";
import { CHECKS } from "./config.mjs";
import { englishPath, pageKey, slugOf } from "./format.mjs";

/**
 * @typedef {{ type: " " | "-" | "+", text: string }} DiffOp
 * @typedef {"added" | "removed" | "modified"} ChangeStatus
 * @typedef {{ path: string, status: ChangeStatus, ops: DiffOp[], contentChanged: boolean, chromeOps: DiffOp[], sharedGroup: number | null }} PageChange
 * @typedef {{ paths: string[], ops: DiffOp[] }} ChangeGroup
 */

export function diffOps(before, after) {
  return diffArrays(before, after).flatMap((part) => {
    const type = part.added ? "+" : part.removed ? "-" : " ";
    return part.value.map((text) => ({ type, text }));
  });
}

export function hasChanges(ops) {
  return ops.some((op) => op.type !== " ");
}

function signature(ops) {
  return JSON.stringify(ops.filter((op) => op.type !== " ").map((op) => op.type + op.text));
}

function pageLines(page) {
  return page ? [`タイトル: ${page.title}`, `説明: ${page.description}`, "", ...page.content] : [];
}

function statusOf(before, after) {
  if (!before) return "added";
  if (!after) return "removed";
  return "modified";
}

function unionKeys(a, b) {
  return [...new Set([...Object.keys(a), ...Object.keys(b)])].sort();
}

function groupBySignature(entries) {
  const groups = new Map();
  for (const { path, ops } of entries) {
    const key = signature(ops);
    if (!groups.has(key)) groups.set(key, { paths: [], ops });
    groups.get(key).paths.push(path);
  }
  return [...groups.values()];
}

function comparePages(before, after) {
  /** @type {Map<string, PageChange>} */
  const changes = new Map();
  for (const path of unionKeys(before.pages, after.pages)) {
    const a = before.pages[path];
    const b = after.pages[path];
    const status = statusOf(a, b);
    const ops = status === "modified" ? diffOps(pageLines(a), pageLines(b)) : [];
    const chromeOps = status === "modified" ? diffOps(a.chrome, b.chrome) : [];
    const contentChanged = status !== "modified" || hasChanges(ops);
    if (!contentChanged && !hasChanges(chromeOps)) continue;
    changes.set(path, { path, status, ops, contentChanged, chromeOps, sharedGroup: null });
  }
  return changes;
}

function findSharedContent(changes, minPages) {
  const candidates = [...changes.values()].filter((c) => c.status === "modified" && c.contentChanged);
  const groups = groupBySignature(candidates).filter((group) => group.paths.length >= minPages);
  groups.forEach((group, index) => {
    for (const path of group.paths) changes.get(path).sharedGroup = index + 1;
  });
  return groups;
}

function findChromeChanges(changes) {
  const candidates = [...changes.values()]
    .filter((c) => hasChanges(c.chromeOps))
    .map((c) => ({ path: c.path, ops: c.chromeOps }));
  return groupBySignature(candidates).sort((x, y) => y.paths.length - x.paths.length);
}

function languageEntry(path, changes, before, after) {
  const page = after.pages[path] ?? before.pages[path];
  if (!page) return { path, state: "absent", source: null };
  const change = changes.get(path);
  let state = "unchanged";
  if (change?.contentChanged) state = change.sharedGroup ? "shared" : change.status;
  return {
    path,
    state,
    sharedGroup: change?.sharedGroup ?? null,
    title: page.title,
    source: page.source,
    oldSource: before.pages[path]?.source ?? null,
    newSource: after.pages[path]?.source ?? null,
    ops: state === "modified" ? change.ops : [],
  };
}

function individualPages(changes, before, after) {
  const keys = new Set(
    [...changes.values()].filter((c) => c.contentChanged && !c.sharedGroup).map((c) => pageKey(c.path)),
  );
  const pages = [...keys].sort().map((key) => {
    const ja = languageEntry(key, changes, before, after);
    const en = languageEntry(englishPath(key), changes, before, after);
    const title = (ja.state !== "absent" ? ja.title : en.title) ?? key;
    return { key, slug: slugOf(key), title, ja, en };
  });

  const bySlug = new Map();
  for (const page of pages) {
    if (bySlug.has(page.slug)) {
      throw new Error(`報告ファイル名が衝突する: ${bySlug.get(page.slug)} と ${page.key}（${page.slug}）`);
    }
    bySlug.set(page.slug, page.key);
  }
  return pages;
}

function compareRecords(before, after, isEqual, toRow) {
  return unionKeys(before, after)
    .filter((key) => !(before[key] && after[key] && isEqual(before[key], after[key])))
    .map((key) => ({ key, status: statusOf(before[key], after[key]), ...toRow(before[key], after[key]) }));
}

function compareAssets(before, after) {
  const a = new Set(Object.keys(before.assets));
  const b = new Set(Object.keys(after.assets));
  return {
    added: [...b].filter((name) => !a.has(name)).sort(),
    removed: [...a].filter((name) => !b.has(name)).sort(),
  };
}

function markerRatios(snapshot) {
  const total = snapshot.stats.pages || 1;
  return Object.fromEntries(Object.entries(snapshot.stats.markers).map(([name, count]) => [name, count / total]));
}

export function checkSnapshots(before, after) {
  const errors = [];
  const warnings = [];
  if (before.stats.pages > 0 && after.stats.pages < before.stats.pages * CHECKS.minPageCountRatio) {
    errors.push(
      `ページ数が ${before.stats.pages} から ${after.stats.pages} に減少した` +
        `（下限は比較元の ${CHECKS.minPageCountRatio * 100}%）。ビルド結果を確認すること。`,
    );
  }
  const ratiosBefore = markerRatios(before);
  const ratiosAfter = markerRatios(after);
  for (const [name, ratio] of Object.entries(ratiosBefore)) {
    const next = ratiosAfter[name] ?? 0;
    if (Math.abs(next - ratio) >= CHECKS.markerRatioWarningDelta) {
      warnings.push(
        `レイアウト要素 ${name} を持つページの割合が ${(ratio * 100).toFixed(0)}% から ` +
          `${(next * 100).toFixed(0)}% に変化した。対象サイトの構造変更により、差分が過大または過小になっている可能性がある。`,
      );
    }
  }
  return { errors, warnings };
}

/**
 * @param {import("./schema.mjs").Snapshot} before
 * @param {import("./schema.mjs").Snapshot} after
 */
export function analyze(before, after) {
  const changes = comparePages(before, after);
  const sharedContent = findSharedContent(changes, CHECKS.sharedContentMinPages);
  const chromeChanges = findChromeChanges(changes);
  return {
    checks: checkSnapshots(before, after),
    pages: individualPages(changes, before, after),
    sharedContent,
    chromeChanges,
    assets: compareAssets(before, after),
    files: compareRecords(before.files, after.files, (a, b) => a.sha256 === b.sha256, (a, b) => ({
      oldSize: a?.size ?? null,
      newSize: b?.size ?? null,
    })),
    redirects: compareRecords(before.redirects, after.redirects, (a, b) => a.to === b.to, (a, b) => ({
      oldTo: a?.to ?? null,
      newTo: b?.to ?? null,
      oldSource: a?.source ?? null,
      newSource: b?.source ?? null,
    })),
  };
}

export function emptyAnalysis() {
  return {
    checks: { errors: [], warnings: [] },
    pages: [],
    sharedContent: [],
    chromeChanges: [],
    assets: { added: [], removed: [] },
    files: [],
    redirects: [],
  };
}
