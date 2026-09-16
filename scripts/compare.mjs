#!/usr/bin/env node
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { gunzipSync } from "node:zlib";
import path from "node:path";
import { parseArgs } from "node:util";
import { LIMITS, TARGET_REPO } from "./lib/config.mjs";
import { analyze, emptyAnalysis } from "./lib/analyze.mjs";
import { renderReport, renderSummary } from "./lib/report.mjs";
import { validateSnapshot } from "./lib/schema.mjs";

const REQUIRED = ["out", "since", "until", "old-sha", "new-sha"];

function readOptions() {
  const { values } = parseArgs({
    options: {
      old: { type: "string" },
      new: { type: "string" },
      out: { type: "string" },
      summary: { type: "string" },
      kind: { type: "string", default: "manual" },
      since: { type: "string" },
      until: { type: "string" },
      "old-sha": { type: "string" },
      "new-sha": { type: "string" },
      "old-date": { type: "string", default: "" },
      "new-date": { type: "string", default: "" },
      repo: { type: "string", default: TARGET_REPO },
      "tool-sha": { type: "string", default: "" },
    },
  });
  const missing = REQUIRED.filter((name) => !values[name]);
  if (missing.length) {
    throw new Error(`必須の引数がない: ${missing.map((name) => `--${name}`).join(", ")}`);
  }
  if (Boolean(values.old) !== Boolean(values.new)) {
    throw new Error("--old と --new は両方指定するか、両方省略する");
  }
  return values;
}

async function loadSnapshot(file) {
  const compressed = await readFile(file);
  const json = gunzipSync(compressed, { maxOutputLength: LIMITS.snapshotBytes }).toString("utf8");
  return validateSnapshot(JSON.parse(json));
}

async function writeFiles(outDir, files) {
  for (const [relative, content] of files) {
    const target = path.join(outDir, relative);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, content);
  }
}

async function main() {
  const options = readOptions();
  const same = !options.old;
  const [before, after] = same ? [null, null] : await Promise.all([loadSnapshot(options.old), loadSnapshot(options.new)]);
  const analysis = same ? emptyAnalysis() : analyze(before, after);

  for (const message of analysis.checks.errors) console.log(`::error::${message}`);
  if (analysis.checks.errors.length) process.exit(1);
  for (const message of analysis.checks.warnings) console.log(`::warning::${message}`);

  const meta = {
    kind: options.kind,
    since: options.since,
    until: options.until,
    repo: options.repo,
    oldSha: options["old-sha"],
    newSha: options["new-sha"],
    oldDate: options["old-date"],
    newDate: options["new-date"],
    oldNode: before?.node ?? "",
    newNode: after?.node ?? "",
    toolSha: options["tool-sha"],
    generatedAt: new Date().toISOString(),
    same,
  };
  await writeFiles(options.out, renderReport(analysis, meta));
  if (options.summary) await writeFile(options.summary, renderSummary(analysis, meta), { flag: "a" });
  console.log(JSON.stringify({ out: options.out, pages: analysis.pages.length }));
}

main().catch((error) => {
  console.error(`::error::${error.message}`);
  process.exit(1);
});
