#!/usr/bin/env bash
# 生成済みの報告を main の先端に重ねてコミットし、push する。
#
# 環境変数
#   REPORT_SRC   生成済みの報告ディレクトリ
#   DIR          リポジトリ内の配置先（reports/YYYY/...）
#   KIND         weekly または manual
#   SINCE, UNTIL 期間（ISO 8601）
#   NEW_SHA      比較先コミット
#   STATE_SHA    実行開始時点で状態ファイルに記録されていたコミット（なければ空）
#   GH_TOKEN     push に使うトークン
#   BRANCH       push 先（既定 main）
#   WORKTREE     作業用ディレクトリ（既定 $RUNNER_TEMP/publish）
set -euo pipefail

: "${REPORT_SRC:?}" "${DIR:?}" "${KIND:?}" "${SINCE:?}" "${UNTIL:?}" "${NEW_SHA:?}" "${GH_TOKEN:?}"
STATE_SHA="${STATE_SHA:-}"
BRANCH="${BRANCH:-main}"
WORKTREE="${WORKTREE:-${RUNNER_TEMP:-/tmp}/publish}"
TOOL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPORT_DIR_PATTERN='^reports/[0-9]{4}/[0-9]{8}-[0-9]{4}_[0-9]{8}-[0-9]{4}(-manual)?$'
ATTEMPTS=3

[[ "$DIR" =~ $REPORT_DIR_PATTERN ]] || { echo "::error::想定外の配置先: $DIR"; exit 1; }
[ -f "$REPORT_SRC/README.md" ] || { echo "::error::報告が見つからない: $REPORT_SRC"; exit 1; }

AUTH="AUTHORIZATION: basic $(printf 'x-access-token:%s' "$GH_TOKEN" | base64 -w0)"
echo "::add-mask::${AUTH#AUTHORIZATION: basic }"
git_auth() { git -c http.extraheader="$AUTH" "$@"; }

commit_message() {
  local from to
  from=$(TZ=Asia/Tokyo date -d "$SINCE" '+%F %H:%M')
  to=$(TZ=Asia/Tokyo date -d "$UNTIL" '+%F %H:%M')
  echo "changelog: ${KIND} ${from} → ${to} JST"
}

prepare_worktree() {
  git_auth -C "$TOOL_DIR" fetch --quiet origin "$BRANCH"
  if [ -d "$WORKTREE" ]; then
    git -C "$WORKTREE" reset --quiet --hard "origin/$BRANCH"
    git -C "$WORKTREE" clean --quiet -fdx
  else
    git -C "$TOOL_DIR" worktree add --quiet --detach "$WORKTREE" "origin/$BRANCH"
  fi
}

place_report() {
  rm -rf "${WORKTREE:?}/$DIR"
  mkdir -p "$(dirname "$WORKTREE/$DIR")"
  cp -R "$REPORT_SRC" "$WORKTREE/$DIR"
  if [ "$KIND" = weekly ]; then
    node "$TOOL_DIR/scripts/state.mjs" write "$WORKTREE/state/last.json" \
      --current "$WORKTREE/state/last.json" --expected-sha "$STATE_SHA" --until "$UNTIL" --sha "$NEW_SHA"
  fi
  node "$TOOL_DIR/scripts/index.mjs" "$WORKTREE/reports"
}

commit_and_push() {
  git -C "$WORKTREE" add -- reports
  [ -d "$WORKTREE/state" ] && git -C "$WORKTREE" add -- state
  if git -C "$WORKTREE" diff --cached --quiet; then
    echo "変更なし"
    return 0
  fi
  git -C "$WORKTREE" -c user.name="github-actions[bot]" \
    -c user.email="github-actions[bot]@users.noreply.github.com" \
    commit --quiet -m "$(commit_message)"
  git_auth -C "$WORKTREE" push --quiet origin "HEAD:refs/heads/$BRANCH"
}

for attempt in $(seq 1 "$ATTEMPTS"); do
  prepare_worktree
  place_report
  if commit_and_push; then
    exit 0
  fi
  echo "::warning::push に失敗した（${attempt}/${ATTEMPTS}）。main の先端を取り直して再試行する"
done
echo "::error::push に ${ATTEMPTS} 回失敗した"
exit 1
