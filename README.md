# utelecon-changelog

このリポジトリと記録は個人が作成した非公式のものであり、utelecon 公式の情報ではありません。

[utelecon](https://utelecon.adm.u-tokyo.ac.jp/) の公開ページについて、2時点の間に変わったページの URL と差分を記録します。記録は [reports/](reports/README.md) にたまります。

仕組みと判断の理由は [docs/design.md](docs/design.md) にまとめています。

## 使い方

### 定期実行

毎週月曜 03:00（JST）に自動で実行します。前回の終了時点から実行時点までを比較し、`reports/` と `state/last.json` をコミットします。初回は直近7日間を対象にします。

### 手動実行

Actions タブ →「utelecon changelog」→「Run workflow」で、次の2項目を入力します。

- 開始: `2026-09-01 00:00` の形式（JST）
- 終了: 同じ形式。空欄にすると実行時点

手動実行の結果は、ディレクトリ名の末尾に `-manual` を付けて保存します。`state/last.json` は更新しないので、定期実行の続きには影響しません。同じ期間で再実行すると、その期間の記録を上書きします。2023-07-31 より前の時点は、対象リポジトリの master にビルド設定（`.github/workflows/astro.yml`）がないため対象外です。

## 記録の読み方

`reports/<年>/<開始>_<終了>/README.md` が、その期間の概要です。

| 区分 | 内容 |
|---|---|
| 個別ページ | 本文・表題・説明文が変わったページ。日本語と英語を1行にまとめます。変更の場合は `pages/` に差分があります。追加・削除の場合は、公開ページとソースへのリンクだけを示します |
| 複数ページに共通する本文の変更 | 同じ差分が5ページ以上に生じたもの（緊急のお知らせ、一括置換など） |
| 共通部分の変更 | ヘッダ・フッタなど本文の外側の差分 |
| ビルド生成ファイル | `/_astro/` の CSS・JavaScript・変換済み画像の増減 |
| 配布ファイル・静的ファイル | PDF などの追加・削除・内容の変更 |
| リダイレクト | 転送の追加・削除・転送先の変更 |

- **冒頭の「注意」:** 対象サイトの構造が変わったために、差分が過大または過小になっている可能性を示します。
- **`changes.json`:** 同じ内容を機械可読の形で置いています。
- **対象外:** RSS（`rss.xml`）は含みません。

## 運用

### ファイルの配置

web UI の「Upload files」では、`.` で始まるファイルやディレクトリが落ちることがあります。下表の `.github/` 配下と `.gitignore` は、**Add file → Create new file** でパスを入力して作成してください。

| パス | 内容 |
|---|---|
| `.github/workflows/changelog.yml` | 記録のワークフロー |
| `.github/workflows/test.yml` | 試験のワークフロー（push と PR で実行） |
| `.github/dependabot.yml` | 依存更新の設定（`workflows/` の中には置かない） |
| `.gitignore` | `node_modules/` などの除外 |
| `package.json`, `package-lock.json` | 依存の定義と固定 |
| `scripts/` | 処理本体 |
| `test/` | 試験 |
| `docs/` | 設計の記録 |

### 失敗したとき

Actions の実行履歴から、失敗したジョブのログを確認します。失敗の通知を受け取るには、GitHub の **Settings → Notifications → Actions** を確認してください。

| 状況 | 対処 |
|---|---|
| `report` だけが失敗した | 7日以内であれば **Re-run failed jobs** で再実行できます（スナップショットの保持期間が7日のため）。期限を過ぎた手動実行は、同じ期間で実行し直します |
| `記録済みのコミット … が対象の master の履歴にない` | 対象リポジトリの履歴が書き換えられています。下記「定期実行の再開」を行います |
| 比較元がビルドできない（`npm ci` の失敗など） | 古い時点の依存を再現できていません。下記「定期実行の再開」で比較元を新しくします |
| `ページ数が … に減少した` | 比較先のビルド結果が不完全な可能性があります。対象リポジトリの状態を確認してから再実行します |
| `state/last.json が実行開始後に変わっている` | 同じワークフローの別の実行が先に状態を進めています。最新の記録を確認し、必要なら手動実行で期間を補います |

### 定期実行の再開

`state/last.json` を編集または削除すると、次回の定期実行の比較元が変わります。

- **削除した場合:** 次回は直近7日間を比較します。削除前の終了時点から直近7日の開始までの期間は記録されないので、必要なら手動実行で補います。
- **編集した場合:** `until`（ISO 8601 の日時）と `sha`（対象リポジトリ master 上の40桁のコミット）を書き換えます。

### 定期実行が止まったとき

公開リポジトリでは、60日間活動がないと定期実行が自動的に無効になります。Actions タブで **utelecon changelog** を選び、無効になっていれば **Enable workflow** で有効化してください。

### 依存の更新

Dependabot が、npm パッケージと action の更新を週1回 PR で提案します。PR では test ワークフローが実行されるので、成功を確認し、リリース内容を読んでからマージしてください。action は SHA で固定しているため、PR の差分では SHA とコメントの版の両方が変わります。

### リポジトリの設定（確認用）

- **Actions → General**
  - 許可する action を GitHub 作成のものに限定する
  - action のフル SHA による固定を必須にする
  - Workflow permissions を読み取りのみにする
  - Actions による PR の作成・承認を許可しない
- **Rules**
  - `main` の削除と force push を禁止する（ボットが `main` に直接 push するため、PR 必須にはしない）
- **Collaborators、Deploy keys、Secrets**
  - 運用者以外の書き込み経路と、秘密情報がないこと
- **Code security**
  - secret scanning と push protection を有効にする
  - Dependabot alerts を有効にする

## 開発

```sh
npm ci --ignore-scripts
npm test
```

| ファイル | 役割 |
|---|---|
| `scripts/resolve.sh` | 期間から比較する2つのコミットを決める |
| `scripts/snapshot.mjs` | ビルド出力からスナップショットを作る |
| `scripts/compare.mjs` | 2つのスナップショットを比較し、報告を書く |
| `scripts/publish.sh` | 報告を `main` の先端に重ねてコミットし、push する |
| `scripts/index.mjs` | `reports/README.md`（一覧）を作り直す |
| `scripts/state.mjs` | `state/last.json` を検査・更新する |
| `scripts/lib/config.mjs` | 対象、抽出規則、上限、閾値 |
| `scripts/lib/extract.mjs` | HTML を差分用の行に変換する |
| `scripts/lib/snapshot.mjs`, `schema.mjs` | スナップショットの作成と形式の検査 |
| `scripts/lib/analyze.mjs` | 2つのスナップショットの比較と分類 |
| `scripts/lib/report.mjs`, `report-index.mjs` | 報告と一覧の Markdown |
| `scripts/lib/format.mjs` | 日時・URL・Markdown の書式 |

スナップショットの形式を変えた場合は、`scripts/lib/config.mjs` の `SNAPSHOT_FORMAT` を上げてください。
