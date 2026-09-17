# 離籍時のデータのバックアップについて

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/systems/leave/backup/`](<https://utelecon.adm.u-tokyo.ac.jp/systems/leave/backup/>) | [`src/pages/systems/leave/backup.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/systems/leave/backup.mdx>) |
| English | 変更 | [`/en/systems/leave/backup/`](<https://utelecon.adm.u-tokyo.ac.jp/en/systems/leave/backup/>) | [`src/pages/en/systems/leave/backup.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/systems/leave/backup.mdx>) |

## 日本語

```diff
  なお，研究室や部署などで使用しているデータに関しては，データの所有権限を他の人に移譲することで，データの所有者が離籍した後もデータを利用し続けることができます．こちらの方法は，データをダウンロードしたり，共有リンクを変更したりする必要がなく，データの所有者がバックアップを取って他の人にデータを渡す方法よりも簡便ですので，あわせて検討してみてください．
  ## Zoom
- UTokyo Accountが失効すると，東京大学が提供しているZoomアカウントにサインインできなくなり，Zoomのクラウド録画に保存された動画にアクセスすることもできなくなります．失効した後にデータの復旧を行うことはできないので，必要に応じて，「[クラウドレコーティングの管理と共有](https://support.zoom.us/hc/ja/articles/205347605#h_01F4F8Z2FJCCE6KVBPGHNZEXSC)」を参考に動画をダウンロードしてください．
+ 2026年10月1日より，クラウド録画の保存期間は一律で最大3年とします．作成されてから3年が経過したクラウド録画は，毎日自動的に削除されます．削除される前に，必要なクラウド録画の整理（バックアップの取得等）をかならず行ってください．詳しくは「[東京大学におけるZoomの提供内容の変更について](/notice/2026/0801-zoom-contract-renewal/)」をご覧ください．
+ UTokyo Accountが失効すると，東京大学が提供しているZoomアカウントにサインインできなくなり，Zoomのクラウド録画に保存された動画にアクセスすることもできなくなります．失効した後にデータの復旧を行うことはできないので，必要に応じて，「[クラウドレコーディングの管理と共有](https://support.zoom.us/hc/ja/articles/205347605#h_01F4F8Z2FJCCE6KVBPGHNZEXSC)」を参考に動画をダウンロードしてください．
  ## ECCSクラウドメール
  UTokyo Accountが失効すると，ECCSクラウドメールにログインすることができなくなります．必要に応じて，以下の3つの作業を行ってください．
  ⋯
  各作業の詳細は以下で紹介しています．
  ### Googleコンテンツのバックアップ
- UTokyo Accountが失効すると，ECCSクラウドメールのアカウントで利用していたGmailやGoogleドライブなどのデータにもアクセスすることもできなくなります．失効した後にデータの復旧を行うことはできないので，「[ECCSクラウドメールのデータをバックアップする](/google/misc/backup/)」の手順に従って，確実にデータのバックアップを行ってください．
+ UTokyo Accountが失効すると，ECCSクラウドメールのアカウントで利用していたGmailやGoogleドライブなどのデータにアクセスすることもできなくなります．失効した後にデータの復旧を行うことはできないので，「[ECCSクラウドメールのデータをバックアップする](/google/misc/backup/)」の手順に従って，確実にデータのバックアップを行ってください．
  ### メールの転送設定
  ECCSクラウドメールのアカウントが失効した後，ECCSクラウドメール宛に送信されたメールを読むことはできません．必要に応じて，「[ECCSクラウドメールの転送設定について](/google/misc/automatic-forwarding/)」を参考にECCSクラウドメール宛に送信されたメールを別のメールアドレスに転送する設定を行ってください．なお，転送設定はアカウントの失効から約180日後に自動的に無効となります．
```

## English

```diff
  ## Zoom
  When your UTokyo Account is revoked, you will no longer be able to sign in to your Zoom account provided by the University of Tokyo, nor will you be able to access videos stored in cloud recordings on Zoom. Since it is not possible to restore the data after the revocation, please download videos as needed by referring to “[Managing and sharing cloud recordings](https://support.zoom.us/hc/en-us/articles/205347605#h_01F4F8Z2FJCCE6KVBPGHNZEXSC)”.
+ From October 1, 2026, the retention period for cloud recordings will be uniformly set to a maximum of three years. Cloud recordings older than three years will be automatically deleted on a daily basis. Before deletion, please be sure to organize any cloud recordings you need (e.g., by creating backups). For details, see “[Changes to the Zoom Service Provided at the University of Tokyo](/en/notice/2026/0801-zoom-contract-renewal/)”.
  ## ECCS Cloud Email
  When your UTokyo Account is revoked, you will no longer be able to log in. Please perform the following three tasks as necessary.
  ⋯
  The details of each task are described below.
  ### Back up your Google contents
- When your UTokyo Account is revoked, you will also not be able to access data in Gmail and Google Drive that you used with your ECCS Cloud Email account. Since it is not possible to restore the data after the revocation, please be sure to back up your data according to the procedure described in “[Backing up ECCS Cloud Email data before your graduation, etc.](https://www.ecc.u-tokyo.ac.jp/en/announcement/2019/02/25_2908.html)”.
+ When your UTokyo Account is revoked, you will also not be able to access data in Gmail and Google Drive that you used with your ECCS Cloud Email account. Since it is not possible to restore the data after the revocation, please be sure to back up your data according to the procedure described in “[Backing up ECCS Cloud Email data before your graduation, etc.](https://utelecon.adm.u-tokyo.ac.jp/en/google/misc/backup/)”.
  ### Set up email forwarding
- After your ECCS Cloud Email account has been revoked, you will not be able to read emails sent to your ECCS Cloud Email. If necessary, please set up forwarding of emails sent to ECCS Cloud Email to another email address by referring to “[Setting Up Email Forwarding for your ECCS Cloud Email](https://www.ecc.u-tokyo.ac.jp/en/announcement/2023/02/28_3511.html)”. Please note that the forwarding setting will be automatically disabled approximately 180 days after the account revocation.
+ After your ECCS Cloud Email account has been revoked, you will not be able to read emails sent to your ECCS Cloud Email. If necessary, please set up forwarding of emails sent to ECCS Cloud Email to another email address by referring to “[Setting Up Email Forwarding for your ECCS Cloud Email](https://utelecon.adm.u-tokyo.ac.jp/en/google/misc/automatic-forwarding/)”. Please note that the forwarding setting will be automatically disabled approximately 180 days after the account revocation.
  During the period of approximately 180 days after the account revocation, no error email will be returned to the sender that sends emails to ECCS Cloud Email. Therefore, if you have not set up forwarding, the sender may not be aware that your ECCS Cloud Email account has been revoked.
  ### Change the settings of external accounts that use ECCS Cloud Email for sign-in
```

[← 一覧へ](<../README.md>)
