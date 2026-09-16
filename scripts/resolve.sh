#!/usr/bin/env bash
# 比較する2時点のコミットを決め、GitHub Actions の出力に書く。
#
# 環境変数:
#   TARGET_REPO, TARGET_BRANCH  対象リポジトリとブランチ
#   EVENT                       schedule または workflow_dispatch
#   IN_SINCE, IN_UNTIL          手動実行時の入力（JST, "YYYY-MM-DD HH:MM"。IN_UNTIL は空なら現在）
#   STATE_FILE                  定期実行の続きを記録するファイル
#   GITHUB_OUTPUT               出力先（手元で試すときは任意のファイル）
#
# 時点 T のコミット:
#   master の first-parent を古い順にたどり、コミット時刻の累積最大値が T 以下である最後のコミット。
#   PR のマージコミットはマージ時刻がコミット時刻になる。累積最大値を使うのは、
#   手元で古い日付に作られたコミットが後から直接 push された場合に、それを T 以前と誤認しないため。
set -euo pipefail

: "${TARGET_REPO:?}" "${TARGET_BRANCH:?}" "${EVENT:?}" "${GITHUB_OUTPUT:?}"
STATE_FILE="${STATE_FILE:-state/last.json}"
META_DIR="${META_DIR:-target-meta}"
FMT='^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}$'

fail() { echo "::error::$*" >&2; exit 1; }
to_iso() { TZ=Asia/Tokyo date -d "$1" --iso-8601=seconds; }
to_epoch() { date -d "$1" +%s; }

if [ ! -d "$META_DIR" ]; then
  git clone --quiet --filter=blob:none --no-checkout --single-branch --branch "$TARGET_BRANCH" \
    "https://github.com/${TARGET_REPO}.git" "$META_DIR"
fi
REF="refs/heads/${TARGET_BRANCH}"

rev_at() {
  local t
  t=$(to_epoch "$1")
  git -C "$META_DIR" log --first-parent --reverse --format='%H %ct' "$REF" |
    awk -v t="$t" '{ if ($2 > m) m = $2; if (m <= t) last = $1 } END { print last }'
}
commit_date() { git -C "$META_DIR" log -1 --format=%cI "$1"; }
state_get() { node -e 'const s = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8")); console.log(s[process.argv[2]] ?? "")' "$STATE_FILE" "$1"; }
node_of() {
  local v
  v=$(git -C "$META_DIR" show "$1:.github/workflows/astro.yml" 2>/dev/null |
    sed -nE 's/.*node-version:[[:space:]]*["'\'']?([0-9]+).*/\1/p' | head -1 || true)
  echo "${v:-22}"
}

OLD=""
if [ "$EVENT" = "schedule" ]; then
  KIND=weekly
  UNTIL_ISO=$(TZ=Asia/Tokyo date --iso-8601=seconds)
  if [ -f "$STATE_FILE" ]; then
    SINCE_ISO=$(state_get until)
    OLD=$(state_get sha)
    git -C "$META_DIR" cat-file -e "${OLD}^{commit}" 2>/dev/null ||
      fail "記録済みのコミット ${OLD} が対象リポジトリに見つかりません"
  else
    SINCE_ISO=$(TZ=Asia/Tokyo date -d '7 days ago' --iso-8601=seconds)
  fi
else
  KIND=manual
  [[ "${IN_SINCE:-}" =~ $FMT ]] || fail "開始は YYYY-MM-DD HH:MM（JST）で指定してください: '${IN_SINCE:-}'"
  SINCE_ISO=$(to_iso "$IN_SINCE") || fail "開始の日時を解釈できません: '$IN_SINCE'"
  if [ -n "${IN_UNTIL:-}" ]; then
    [[ "$IN_UNTIL" =~ $FMT ]] || fail "終了は YYYY-MM-DD HH:MM（JST）で指定してください: '$IN_UNTIL'"
    UNTIL_ISO=$(to_iso "$IN_UNTIL") || fail "終了の日時を解釈できません: '$IN_UNTIL'"
  else
    UNTIL_ISO=$(TZ=Asia/Tokyo date --iso-8601=seconds)
  fi
fi

[ "$(to_epoch "$SINCE_ISO")" -lt "$(to_epoch "$UNTIL_ISO")" ] || fail "開始 ${SINCE_ISO} が終了 ${UNTIL_ISO} より後です"

[ -n "$OLD" ] || OLD=$(rev_at "$SINCE_ISO")
[ -n "$OLD" ] || fail "開始 ${SINCE_ISO} 以前のコミットがありません"
NEW=$(rev_at "$UNTIL_ISO")
[ -n "$NEW" ] || fail "終了 ${UNTIL_ISO} 以前のコミットがありません"

SAME=false
[ "$OLD" = "$NEW" ] && SAME=true

# 出力先ディレクトリ名: reports/YYYY/YYYYMMDD-HHMM_YYYYMMDD-HHMM[-manual]
stamp() { TZ=Asia/Tokyo date -d "$1" +%Y%m%d-%H%M; }
DIR="reports/$(TZ=Asia/Tokyo date -d "$UNTIL_ISO" +%Y)/$(stamp "$SINCE_ISO")_$(stamp "$UNTIL_ISO")"
[ "$KIND" = manual ] && DIR="${DIR}-manual"

{
  echo "kind=$KIND"
  echo "since=$SINCE_ISO"
  echo "until=$UNTIL_ISO"
  echo "old_sha=$OLD"
  echo "new_sha=$NEW"
  echo "old_date=$(commit_date "$OLD")"
  echo "new_date=$(commit_date "$NEW")"
  echo "old_node=$(node_of "$OLD")"
  echo "new_node=$(node_of "$NEW")"
  echo "same=$SAME"
  echo "dir=$DIR"
} >>"$GITHUB_OUTPUT"

echo "期間: $SINCE_ISO → $UNTIL_ISO（$KIND）"
echo "比較: $OLD → $NEW（同一: $SAME）"
