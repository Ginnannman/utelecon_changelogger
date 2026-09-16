import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { tempDir } from "./helpers/fixture.mjs";
import { commitAt, git, initRepo } from "./helpers/git.mjs";

const SCRIPT = fileURLToPath(new URL("../scripts/resolve.sh", import.meta.url));

async function targetHistory() {
  const root = await tempDir();
  const repo = path.join(root, "target");
  await mkdir(path.join(repo, ".github/workflows"), { recursive: true });
  initRepo(repo, "master");
  const shas = {};
  shas.c1 = commitAt(repo, "c1", "2026-09-01T10:00:00+09:00");
  await writeFile(path.join(repo, ".github/workflows/astro.yml"), "      node-version: 24\n");
  shas.c2 = commitAt(repo, "c2", "2026-09-05T10:00:00+09:00");
  shas.c3 = commitAt(repo, "c3", "2026-09-10T10:00:00+09:00");
  shas.c4 = commitAt(repo, "c4 (pushed late with an old date)", "2026-09-08T10:00:00+09:00");
  shas.c5 = commitAt(repo, "c5", "2026-09-12T10:00:00+09:00");
  return { root, repo, shas };
}

async function resolve(fixture, env) {
  const output = path.join(fixture.root, `out-${Math.random()}`);
  await writeFile(output, "");
  const result = spawnSync("bash", [SCRIPT], {
    cwd: fixture.root,
    encoding: "utf8",
    env: {
      ...process.env,
      TARGET_REPO: "example/target",
      TARGET_BRANCH: "master",
      META_DIR: fixture.repo,
      STATE_FILE: path.join(fixture.root, "state.json"),
      NOW: "2026-09-14 12:00 +0900",
      GITHUB_OUTPUT: output,
      IN_SINCE: "",
      IN_UNTIL: "",
      ...env,
    },
  });
  const values = Object.fromEntries(
    (await readFile(output, "utf8")).split("\n").filter(Boolean).map((line) => line.split(/=(.*)/s).slice(0, 2)),
  );
  return { status: result.status, stdout: result.stdout, stderr: result.stderr, values };
}

test("手動実行: 指定時刻以前に入った最後のコミットを選ぶ", async () => {
  const f = await targetHistory();
  const r = await resolve(f, { EVENT: "workflow_dispatch", IN_SINCE: "2026-09-06 00:00", IN_UNTIL: "2026-09-11 00:00" });
  assert.equal(r.status, 0, r.stderr);
  assert.equal(r.values.old_sha, f.shas.c2);
  assert.equal(r.values.new_sha, f.shas.c4);
  assert.equal(r.values.kind, "manual");
  assert.equal(r.values.dir, "reports/2026/20260906-0000_20260911-0000-manual");
  assert.equal(r.values.new_node, "24");
});

test("古い日付のコミットが後から入っても、その前の時点に含めない", async () => {
  const f = await targetHistory();
  const r = await resolve(f, { EVENT: "workflow_dispatch", IN_SINCE: "2026-09-06 00:00", IN_UNTIL: "2026-09-09 00:00" });
  assert.equal(r.status, 0, r.stderr);
  assert.equal(r.values.new_sha, f.shas.c2);
  assert.equal(r.values.same, "true");
});

test("Node の版が判定できないときは既定値を使い、通知する", async () => {
  const f = await targetHistory();
  const r = await resolve(f, { EVENT: "workflow_dispatch", IN_SINCE: "2026-09-02 00:00", IN_UNTIL: "2026-09-06 00:00" });
  assert.equal(r.values.old_node, "22");
  assert.match(r.stdout, /::notice::.*22 を使う/);
});

test("定期実行: 状態ファイルの続きから比較する", async () => {
  const f = await targetHistory();
  const first = await resolve(f, { EVENT: "schedule" });
  assert.equal(first.status, 0, first.stderr);
  assert.equal(first.values.state_sha, "");
  assert.equal(first.values.since, "2026-09-07T12:00:00+09:00");
  assert.equal(first.values.old_sha, f.shas.c2);

  await writeFile(path.join(f.root, "state.json"), JSON.stringify({ until: "2026-09-11T00:00:00+09:00", sha: f.shas.c3 }));
  const next = await resolve(f, { EVENT: "schedule" });
  assert.equal(next.status, 0, next.stderr);
  assert.equal(next.values.old_sha, f.shas.c3);
  assert.equal(next.values.state_sha, f.shas.c3);
  assert.equal(next.values.new_sha, f.shas.c5);
});

test("不正な入力と状態を拒否する", async () => {
  const f = await targetHistory();
  const cases = [
    [{ EVENT: "workflow_dispatch", IN_SINCE: "2026/09/06" }, /YYYY-MM-DD HH:MM/],
    [{ EVENT: "workflow_dispatch", IN_SINCE: "2026-09-12 00:00", IN_UNTIL: "2026-09-11 00:00" }, /以降/],
    [{ EVENT: "workflow_dispatch", IN_SINCE: "2020-01-01 00:00", IN_UNTIL: "2020-02-01 00:00" }, /以前のコミットがない/],
    [{ EVENT: "push" }, /未対応/],
  ];
  for (const [env, message] of cases) {
    const r = await resolve(f, env);
    assert.notEqual(r.status, 0);
    assert.match(r.stderr, message);
  }

  await writeFile(path.join(f.root, "state.json"), JSON.stringify({ sha: f.shas.c3 }));
  assert.notEqual((await resolve(f, { EVENT: "schedule" })).status, 0);

  await writeFile(path.join(f.root, "state.json"), JSON.stringify({ until: "2026-09-11T00:00:00+09:00", sha: "0".repeat(40) }));
  const missing = await resolve(f, { EVENT: "schedule" });
  assert.notEqual(missing.status, 0);
  assert.match(missing.stderr, /履歴にない/);

  git(f.repo, ["checkout", "--quiet", "--orphan", "other"]);
  const orphan = commitAt(f.repo, "orphan", "2026-09-11T00:00:00+09:00");
  git(f.repo, ["checkout", "--quiet", "master"]);
  await writeFile(path.join(f.root, "state.json"), JSON.stringify({ until: "2026-09-11T00:00:00+09:00", sha: orphan }));
  assert.match((await resolve(f, { EVENT: "schedule" })).stderr, /履歴にない/);
});
