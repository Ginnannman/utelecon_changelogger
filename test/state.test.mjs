import { test } from "node:test";
import assert from "node:assert/strict";
import { nextState, parseState, StateError } from "../scripts/lib/state.mjs";

const SHA_A = "a".repeat(40);
const SHA_B = "b".repeat(40);

test("状態ファイルを検査して読む", () => {
  assert.deepEqual(parseState(`{"until":"2026-09-14T03:00:00+09:00","sha":"${SHA_A}"}`), {
    until: "2026-09-14T03:00:00+09:00",
    sha: SHA_A,
  });
  for (const text of ["{", "[]", `{"sha":"${SHA_A}"}`, `{"until":"2026-09-14\\nx","sha":"${SHA_A}"}`, '{"until":"2026-09-14T03:00:00+09:00","sha":"x"}']) {
    assert.throws(() => parseState(text), StateError, text);
  }
});

test("開始時点の記録と一致するときだけ更新する", () => {
  const until = "2026-09-21T03:00:00+09:00";
  assert.deepEqual(nextState({ current: null, expectedSha: "", until, sha: SHA_B }), { until, sha: SHA_B });
  assert.deepEqual(nextState({ current: { until, sha: SHA_A }, expectedSha: SHA_A, until, sha: SHA_B }), { until, sha: SHA_B });
  assert.throws(() => nextState({ current: { until, sha: SHA_B }, expectedSha: SHA_A, until, sha: SHA_B }), StateError);
  assert.throws(() => nextState({ current: { until, sha: SHA_A }, expectedSha: "", until, sha: SHA_B }), StateError);
});
