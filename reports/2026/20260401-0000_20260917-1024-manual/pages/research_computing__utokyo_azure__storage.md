# Azure Blob Storage を利用した大容量データの保存とアクセス

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/storage/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/storage/>) | [`src/pages/research_computing/utokyo_azure/storage/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/storage/index.mdx>) |
| English | — | — | — |

## 日本語

```diff
  ## 手元の計算機等からのアクセス
  ### コンテナーの作成
- この操作はPython等で自動化可能です。例えば以下のリンクを参照ください。
+ この操作はPython等で自動化可能です．例えば以下のリンクを参照ください．
  - [Microsoft Learn: Python 用 Azure Blob Storage クライアント ライブラリ](https://learn.microsoft.com/ja-jp/azure/storage/blobs/storage-quickstart-blobs-python?tabs=managed-identity%2Croles-azure-portal%2Csign-in-azure-cli&pivots=blob-storage-quickstart-scratch/)
  ファイルシステムのディレクトリに相当する，コンテナーを作成します．
  ⋯
  - [Microsoft Learn:Azure Blob Storage のドキュメント](https://learn.microsoft.com/ja-jp/azure/storage/blobs/)
  ## データの共有
- 特定のファイルやコンテナーを Shared Access Signature (SAS) を用いて共有することができます。．
+ 特定のファイルやコンテナーを Shared Access Signature (SAS) を用いて共有することができます．
  1. ブラウザ上でファイル/コンテナーの右端の…からSASの作成を選択．
- 2. 共有する期間やアクセスを許可するIPアドレス範囲、共有相手の権限を設定し、SASトークンおよびURLを生成
+ 2. 共有する期間やアクセスを許可するIPアドレス範囲，共有相手の権限を設定し，SASトークンおよびURLを生成
  3. 生成されたBLOB SAS URLから共有相手もファイルにアクセスできます．
  ## ストレージのマウント
```

[← 一覧へ](<../README.md>)
