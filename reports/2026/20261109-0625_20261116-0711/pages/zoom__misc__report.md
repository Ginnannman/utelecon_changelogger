# Zoomのレポート機能を使って出席を管理する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/zoom/misc/report/`](<https://utelecon.adm.u-tokyo.ac.jp/zoom/misc/report/>) | [`src/pages/zoom/misc/report/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/03b50cfc4c396ca7f73235e6e92ecb2c4af175ae/src/pages/zoom/misc/report/index.md>) |
| English | 変更なし | [`/en/zoom/misc/report/`](<https://utelecon.adm.u-tokyo.ac.jp/en/zoom/misc/report/>) | [`src/pages/en/zoom/misc/report/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/03b50cfc4c396ca7f73235e6e92ecb2c4af175ae/src/pages/en/zoom/misc/report/index.md>) |

## 日本語

```diff
  ここでは，ミーティング出席者の情報を一覧できるレポートを表示する方法について説明します．
  - Web ブラウザで[Zoomのレポートページ](https://u-tokyo-ac-jp.zoom.us/account/report?isPersonal=true#/usageReports)へ移動してください
- - 「用途」を押してください． ![](/_astro/ReportFirststep.webp)
- - 過去に開催された，自分がホストのミーティングが表示されます．
- - レポートを取得したいミーティングを見つけてください．対象のミーティングの日付が間になるように「開始日」「終了日」を設定し，「検索」を押すと，指定した期間内のミーティングのみが表示されます． ![](/_astro/ReportShowlist.webp)
+ - 「ミーティングとウェビナーの履歴」を押してください． ![](/_astro/ReportFirststep.webp)
+ - レポートを取得したいミーティングを見つけてください．対象のミーティングの日付が間になるように「開始」「終了」を設定し，「検索」を押すと，指定した期間内のミーティングのみが表示されます． ![](/_astro/ReportShowlist.webp)
  - 「参加者」の列に表示される数字を押してください． ![](/_astro/ReportSelectmeeting.webp)
  - 出席した人の名前，参加時刻，退出時刻，所要時間，またZoomアカウントでサインインしていればメールアドレスが表示されます． ![](/_astro/ReportReport.webp)
  ⋯
  ここでは，レポートの内容をCSVファイルの形式でダウンロードする方法について説明します．
  - 「[レポートを表示する](#%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B)」の最後の手順まで，操作をしてください．
- - 「ミーティングデータでエクスポート」のチェックボックスをオンにしてください． ![](/_astro/ReportExport.webp)
+ - 「ミーティングデータ付きでエクスポート」のチェックボックスをオンにしてください． ![](/_astro/ReportExport.webp)
  - 「エクスポート」を押してください．
  - レポートの内容が記録された，CSVファイルがダウンロードされます．
```

[← 一覧へ](<../README.md>)
