#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import path from "node:path";
import { parseArgs } from "node:util";
import { buildSnapshot } from "./lib/snapshot.mjs";
import { validateSnapshot } from "./lib/schema.mjs";

const USAGE = "usage: node scripts/snapshot.mjs --dist <dir> --source <repo-root> --out <file.json.gz> [--sha <sha>] [--committed-at <iso>]";

const { values } = parseArgs({
  options: {
    dist: { type: "string" },
    source: { type: "string" },
    out: { type: "string" },
    sha: { type: "string", default: "" },
    "committed-at": { type: "string", default: "" },
  },
});
if (!values.dist || !values.out) {
  console.error(USAGE);
  process.exit(2);
}

const snapshot = validateSnapshot(
  await buildSnapshot({
    distDir: values.dist,
    sourceRoot: values.source,
    sha: values.sha,
    committedAt: values["committed-at"],
  }),
);

await mkdir(path.dirname(values.out), { recursive: true });
await writeFile(values.out, gzipSync(JSON.stringify(snapshot)));
console.log(
  `pages=${snapshot.stats.pages} redirects=${Object.keys(snapshot.redirects).length} ` +
    `files=${Object.keys(snapshot.files).length} assets=${Object.keys(snapshot.assets).length} ` +
    `markers=${JSON.stringify(snapshot.stats.markers)}`,
);
