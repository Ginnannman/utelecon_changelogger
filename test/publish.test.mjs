import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { tempDir } from "./helpers/fixture.mjs";
import { commitAt, git, initRepo } from "./helpers/git.mjs";

const SCRIPTS = fileURLToPath(new URL("../scripts", import.meta.url));
const SHA_A = "a".repeat(40);
const SHA_B = "b".repeat(40);

function changes(since, until) {
  return JSON.stringify({ kind: "manual", since, until, counts: { pages: 1, sharedContent: 0, chrome: 0, files: 0, redirects: 0 } });
}

async function setup() {
  const root = await tempDir();
  const seed = path.join(root, "seed");
  await mkdir(path.join(seed, "reports/2026/20260101-0000_20260102-0000-manual"), { recursive: true });
  initRepo(seed, "main");
  await writeFile(
    path.join(seed, "reports/2026/20260101-0000_20260102-0000-manual/changes.json"),
    changes("2026-01-01T00:00:00+09:00", "2026-01-02T00:00:00+09:00"),
  );
  await writeFile(path.join(seed, "reports/README.md"), "old index\n");
  commitAt(seed, "seed", "2026-01-02T00:00:00+09:00");

  const origin = path.join(root, "origin.git");
  git(root, ["clone", "--quiet", "--bare", seed, origin]);
  const tool = path.join(root, "tool");
  git(root, ["clone", "--quiet", origin, tool]);
  await cp(SCRIPTS, path.join(tool, "scripts"), { recursive: true });

  const report = path.join(root, "report");
  await mkdir(report);
  await writeFile(path.join(report, "README.md"), "# report\n");
  await writeFile(path.join(report, "changes.json"), changes("2026-09-07T03:00:00+09:00", "2026-09-14T03:00:00+09:00"));
  return { root, seed, origin, tool, report };
}

function publish(f, env) {
  return spawnSync("bash", [path.join(f.tool, "scripts/publish.sh")], {
    cwd: f.tool,
    encoding: "utf8",
    env: {
      ...process.env,
      REPORT_SRC: f.report,
      DIR: "reports/2026/20260907-0300_20260914-0300",
      KIND: "weekly",
      SINCE: "2026-09-07T03:00:00+09:00",
      UNTIL: "2026-09-14T03:00:00+09:00",
      NEW_SHA: SHA_B,
      STATE_SHA: "",
      GH_TOKEN: "dummy",
      BRANCH: "main",
      WORKTREE: path.join(f.root, "worktree"),
      GIT_AUTHOR_NAME: "t",
      GIT_AUTHOR_EMAIL: "t@example.com",
      GIT_COMMITTER_NAME: "t",
      GIT_COMMITTER_EMAIL: "t@example.com",
      ...env,
    },
  });
}

function originFile(f, file) {
  return git(f.root, ["--git-dir", f.origin, "show", `main:${file}`]);
}

test("main の先端に報告と状態を重ね、一覧を作り直して push する", async () => {
  const f = await setup();
  await writeFile(path.join(f.seed, "reports/README.md"), "index updated by another run\n");
  commitAt(f.seed, "another run", "2026-09-10T00:00:00+09:00");
  git(f.seed, ["push", "--quiet", f.origin, "main"]);

  const r = publish(f, {});
  assert.equal(r.status, 0, r.stdout + r.stderr);
  assert.equal(originFile(f, "reports/2026/20260907-0300_20260914-0300/README.md"), "# report");
  assert.deepEqual(JSON.parse(originFile(f, "state/last.json")), { until: "2026-09-14T03:00:00+09:00", sha: SHA_B });
  const index = originFile(f, "reports/README.md");
  assert.match(index, /2026-09-07 03:00 → 2026-09-14 03:00/);
  assert.match(index, /2026-01-01 00:00 → 2026-01-02 00:00/);
  assert.match(git(f.root, ["--git-dir", f.origin, "log", "-1", "--format=%s", "main"]), /^changelog: weekly 2026-09-07 03:00 → 2026-09-14 03:00 JST$/);
});

test("状態ファイルが実行開始後に変わっていれば push しない", async () => {
  const f = await setup();
  await mkdir(path.join(f.seed, "state"));
  await writeFile(path.join(f.seed, "state/last.json"), JSON.stringify({ until: "2026-09-07T03:00:00+09:00", sha: SHA_A }));
  commitAt(f.seed, "state", "2026-09-07T03:00:00+09:00");
  git(f.seed, ["push", "--quiet", f.origin, "main"]);
  const head = git(f.root, ["--git-dir", f.origin, "rev-parse", "main"]);

  const r = publish(f, { STATE_SHA: "" });
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /実行開始後に変わっている/);
  assert.equal(git(f.root, ["--git-dir", f.origin, "rev-parse", "main"]), head);

  const ok = publish(f, { STATE_SHA: SHA_A });
  assert.equal(ok.status, 0, ok.stdout + ok.stderr);
});

test("手動実行は状態ファイルを作らない", async () => {
  const f = await setup();
  const r = publish(f, { KIND: "manual", DIR: "reports/2026/20260907-0300_20260914-0300-manual" });
  assert.equal(r.status, 0, r.stdout + r.stderr);
  assert.throws(() => originFile(f, "state/last.json"));
  assert.equal(originFile(f, "reports/2026/20260907-0300_20260914-0300-manual/README.md"), "# report");
});

test("想定外の配置先を拒否する", async () => {
  const f = await setup();
  const r = publish(f, { DIR: "reports/../../etc" });
  assert.notEqual(r.status, 0);
  assert.match(r.stdout, /想定外の配置先/);
});
