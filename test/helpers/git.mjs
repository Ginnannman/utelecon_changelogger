import { execFileSync } from "node:child_process";

export function git(cwd, args, env = {}) {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    env: {
      ...process.env,
      GIT_AUTHOR_NAME: "t",
      GIT_AUTHOR_EMAIL: "t@example.com",
      GIT_COMMITTER_NAME: "t",
      GIT_COMMITTER_EMAIL: "t@example.com",
      ...env,
    },
  }).trim();
}

export function commitAt(cwd, message, date) {
  git(cwd, ["add", "-A"]);
  git(cwd, ["commit", "--quiet", "--allow-empty", "-m", message], { GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date });
  return git(cwd, ["rev-parse", "HEAD"]);
}

export function initRepo(cwd, branch) {
  git(cwd, ["init", "--quiet", `--initial-branch=${branch}`]);
}
