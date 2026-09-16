#!/usr/bin/env node
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { renderIndex } from "./lib/report-index.mjs";

const reportsDir = process.argv[2] ?? "reports";

async function* findChangeFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const child = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* findChangeFiles(child);
    else if (entry.name === "changes.json") yield child;
  }
}

const reports = [];
for await (const file of findChangeFiles(reportsDir)) {
  const dir = path.relative(reportsDir, path.dirname(file)).split(path.sep).join("/");
  reports.push({ dir, changes: JSON.parse(await readFile(file, "utf8")) });
}
await writeFile(path.join(reportsDir, "README.md"), renderIndex(reports));
console.log(`index: ${reports.length} reports`);
