#!/usr/bin/env bash
# 比較する2時点のコミットを決め、GITHUB_OUTPUT に書き出す。
#
# 環境変数
#   TARGET_REPO, TARGET_BRANCH  比較対象のリポジトリとブランチ
#   EVENT                       schedule または workflow_dispatch
#   IN_SINCE, IN_UNTIL          手動実行の入力（JST, "YYYY-MM-DD HH:MM"。IN_UNTIL は空なら現在）
#   STATE_FILE                  定期実行の状態ファイル（既定 state/last.json）
#   META_DIR                    対象リポジトリの履歴を置くディレクトリ（既定 target-meta）
#   NOW                         現在時刻の上書き（試験用）
#   GITHUB_OUTPUT               出力先
set -euo pipefail

: "${TARGET_REPO:?}" "${TARGET_BRANCH:?}" "${EVENT:?}" "${GITHUB_OUTPUT:?}"
STATE_FILE="${STATE_FILE:-state/last.json}"
META_DIR="${META_DIR:-target-meta}"
NOW="${NOW:-now}"
INPUT_FORMAT='^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}$'
DEFAULT_NODE=22
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

fail() {
  echo "::error::$*" >&2
  exit 1
}

jst_iso() { TZ=Asia/Tokyo date -d "$1" --iso-8601=seconds; }
epoch() { date -d "$1" +%s; }
stamp() { TZ=Asia/Tokyo date -d "$1" +%Y%m%d-%H%M; }

fetch_history() {
  [ -d "$META_DIR" ] && return
  git clone --quiet --filter=blob:none --no-checkout --single-branch --branch "$TARGET_BRANCH" \
    "https://github.com/${TARGET_REPO}.git" "$META_DIR"
}

commit_at() {
  local limit
  limit=$(epoch "$1")
  git -C "$META_DIR" log --first-parent --reverse --format='%H %ct' "refs/heads/${TARGET_BRANCH}" |
    awk -v limit="$limit" '{ if ($2 > latest) latest = $2; if (latest <= limit) found = $1 } END { print found }'
}

commit_date() { git -C "$META_DIR" log -1 --format=%cI "$1"; }

node_major() {
  local version
  version=$(git -C "$META_DIR" show "$1:.github/workflows/astro.yml" 2>/dev/null |
    sed -nE 's/^[[:space:]]*node-version:[[:space:]]*["'\'']?([0-9]+)(\.[0-9x]+)*["'\'']?[[:space:]]*$/\1/p' | head -1 || true)
  echo "${version:-}"
}


read_input() {
  local name=$1 value=$2
  [[ "$value" =~ $INPUT_FORMAT ]] || fail "${name}は YYYY-MM-DD HH:MM（JST）で指定する: '${value}'"
  jst_iso "$value" || fail "${name}の日時を解釈できない: '${value}'"
}

fetch_history

NOTICES=()
STATE_SHA=""
OLD=""
if [ "$EVENT" = "schedule" ]; then
  KIND=weekly
  UNTIL=$(jst_iso "$NOW")
  if [ -f "$STATE_FILE" ]; then
    STATE=$(node "$SCRIPT_DIR/state.mjs" read "$STATE_FILE") || fail "状態ファイルを読めない: $STATE_FILE"
    SINCE=$(sed -n 's/^until=//p' <<<"$STATE")
    STATE_SHA=$(sed -n 's/^sha=//p' <<<"$STATE")
    git -C "$META_DIR" merge-base --is-ancestor "$STATE_SHA" "refs/heads/${TARGET_BRANCH}" 2>/dev/null ||
      fail "記録済みのコミット ${STATE_SHA} が対象の ${TARGET_BRANCH} の履歴にない。README の復旧手順を参照"
    OLD=$STATE_SHA
  else
    SINCE=$(jst_iso "$NOW - 7 days")
  fi
elif [ "$EVENT" = "workflow_dispatch" ]; then
  KIND=manual
  SINCE=$(read_input "開始" "${IN_SINCE:-}")
  if [ -n "${IN_UNTIL:-}" ]; then
    UNTIL=$(read_input "終了" "$IN_UNTIL")
  else
    UNTIL=$(jst_iso "$NOW")
  fi
else
  fail "未対応のイベント: $EVENT"
fi

[ "$(epoch "$SINCE")" -lt "$(epoch "$UNTIL")" ] || fail "開始 ${SINCE} が終了 ${UNTIL} 以降になっている"

[ -n "$OLD" ] || OLD=$(commit_at "$SINCE")
[ -n "$OLD" ] || fail "開始 ${SINCE} 以前のコミットがない"
NEW=$(commit_at "$UNTIL")
[ -n "$NEW" ] || fail "終了 ${UNTIL} 以前のコミットがない"

SAME=false
[ "$OLD" = "$NEW" ] && SAME=true

DIR="reports/$(TZ=Asia/Tokyo date -d "$UNTIL" +%Y)/$(stamp "$SINCE")_$(stamp "$UNTIL")"
[ "$KIND" = manual ] && DIR="${DIR}-manual"

OLD_NODE=$(node_major "$OLD")
NEW_NODE=$(node_major "$NEW")
[ -n "$OLD_NODE" ] || { NOTICES+=("${OLD:0:9} の Node の版を判定できなかったため ${DEFAULT_NODE} を使う"); OLD_NODE=$DEFAULT_NODE; }
[ -n "$NEW_NODE" ] || { NOTICES+=("${NEW:0:9} の Node の版を判定できなかったため ${DEFAULT_NODE} を使う"); NEW_NODE=$DEFAULT_NODE; }

{
  echo "kind=$KIND"
  echo "since=$SINCE"
  echo "until=$UNTIL"
  echo "old_sha=$OLD"
  echo "new_sha=$NEW"
  echo "old_date=$(commit_date "$OLD")"
  echo "new_date=$(commit_date "$NEW")"
  echo "old_node=$OLD_NODE"
  echo "new_node=$NEW_NODE"
  echo "state_sha=$STATE_SHA"
  echo "same=$SAME"
  echo "dir=$DIR"
} >>"$GITHUB_OUTPUT"

for notice in "${NOTICES[@]}"; do echo "::notice::$notice"; done
echo "期間: $SINCE → $UNTIL（$KIND）"
echo "比較: $OLD → $NEW（同一: $SAME）"
