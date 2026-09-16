#!/usr/bin/env node
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "node:util";
import { formatState, nextState, parseState, StateError } from "./lib/state.mjs";

const USAGE = [
  "usage:",
  "  node scripts/state.mjs read <file>",
  "  node scripts/state.mjs write <file> --current <file> --expected-sha <sha> --until <iso> --sha <sha>",
].join("\n");

async function readOptional(file) {
  try {
    return await readFile(file, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

async function main() {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      current: { type: "string" },
      "expected-sha": { type: "string", default: "" },
      until: { type: "string" },
      sha: { type: "string" },
    },
  });
  const [command, file] = positionals;
  if (!file) throw new StateError(USAGE);

  if (command === "read") {
    const text = await readOptional(file);
    if (text === null) return;
    const state = parseState(text);
    console.log(`until=${state.until}`);
    console.log(`sha=${state.sha}`);
    return;
  }

  if (command === "write") {
    if (!values.current || !values.until || !values.sha) throw new StateError(USAGE);
    const currentText = await readOptional(values.current);
    const current = currentText === null || currentText === "" ? null : parseState(currentText);
    const state = nextState({ current, expectedSha: values["expected-sha"], until: values.until, sha: values.sha });
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, formatState(state));
    return;
  }

  throw new StateError(USAGE);
}

main().catch((error) => {
  console.error(error instanceof StateError ? `::error::${error.message}` : error);
  process.exit(1);
});
