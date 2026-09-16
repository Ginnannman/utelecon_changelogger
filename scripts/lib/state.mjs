const ISO_DATETIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
const COMMIT_SHA = /^[0-9a-f]{40}$/;

export class StateError extends Error {}

export function parseState(text) {
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new StateError("state/last.json が JSON として読めない");
  }
  if (!data || typeof data !== "object") throw new StateError("state/last.json がオブジェクトではない");
  if (typeof data.until !== "string" || !ISO_DATETIME.test(data.until) || Number.isNaN(Date.parse(data.until))) {
    throw new StateError(`state/last.json の until が不正: ${JSON.stringify(data.until)}`);
  }
  if (typeof data.sha !== "string" || !COMMIT_SHA.test(data.sha)) {
    throw new StateError(`state/last.json の sha が不正: ${JSON.stringify(data.sha)}`);
  }
  return { until: data.until, sha: data.sha };
}

export function nextState({ current, expectedSha, until, sha }) {
  const currentSha = current === null ? "" : current.sha;
  if (currentSha !== expectedSha) {
    throw new StateError(
      `state/last.json が実行開始後に変わっている（開始時: ${expectedSha || "なし"}、現在: ${currentSha || "なし"}）`,
    );
  }
  return parseState(JSON.stringify({ until, sha }));
}

export function formatState(state) {
  return `${JSON.stringify(state, null, 2)}\n`;
}
