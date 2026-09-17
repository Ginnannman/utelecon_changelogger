# UTokyo Account本人確認サービスの事前連携について

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_account/ident-myna/link/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/ident-myna/link/>) | [`src/pages/utokyo_account/ident-myna/link/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_account/ident-myna/link/index.mdx>) |
| English | 変更 | [`/en/utokyo_account/ident-myna/link/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_account/ident-myna/link/>) | [`src/pages/en/utokyo_account/ident-myna/link/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_account/ident-myna/link/index.mdx>) |

## 日本語

```diff
  [UTokyo Account](/utokyo_account/) > [本人確認サービス](/utokyo_account/ident-myna/) > 事前連携
  # UTokyo Account本人確認サービスの事前連携について
+ [デジタル認証アプリの機能は，マイナアプリに統合されました](https://services.digital.go.jp/mynaapp/news/20260825-01/)．以下の説明では，「デジタル認証アプリ」は「マイナアプリ」と読み替えてください．
+ なお，マイナアプリは以下のリンクからダウンロードできます．
+ - [iOS](https://apps.apple.com/jp/app/%E3%83%9E%E3%82%A4%E3%83%8A%E3%82%A2%E3%83%97%E3%83%AA-%E6%97%A7%E3%83%9E%E3%82%A4%E3%83%8A%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E3%82%A2%E3%83%97%E3%83%AA/id1476359069)
+ - [Android](https://play.google.com/store/apps/details?id=jp.go.cas.mpa&pcampaignid=web_share)
  ## はじめに
  このページでは，UTokyo Account本人確認サービスを利用するために，あらかじめ済ませておく必要がある，「事前連携」の手続きについて説明します．
  ⋯
  - 既にUTokyo Accountにサインイン済みの場合を除き，UTokyo Accountのサインイン画面が表示されるので，サインインしてください．
  - 「情報を表示 / Display information」ボタンを押してください． ![](/_astro/my_display_info.webp)
- - 「UTokyo Account本人確認サービスを利用しています」と表示されていれば，事前連携が完了しています． ![](/_astro/my_status_link.webp)
+ - 「UTokyo Account本人確認サービスを利用しています」と表示されていれば，事前連携が完了しています． ![](/_astro/ident_myna_using.webp)
  Footnotes
  - 2025年9月現在，いわゆる[スマートフォンのマイナンバーカード](https://www.digital.go.jp/policies/mynumber/smartphone-certification)（Androidのスマホ用電子証明書やiPhoneのマイナンバーカード）は利用できません． [↩](#user-content-fnref-1)
```

## English

```diff
    ![](/_astro/auth_pc_qr.webp) ![](/_astro/auth_pc_qr_invalid.webp)
    If you close the PC page
-   Plese restart from the beginning of [Step 2](#auth-pc).
+   Please restart from the beginning of [Step 2](#auth-pc).
    If the Digital Identification App does not open and a different screen is displayed
    If the Digital Identification App is not installed, a screen will prompt you to install it. Depending on your browser’s display zoom settings, the system may detect the access as coming from a PC and display a QR code instead. In either case, please return to [Step 1](#app-setup) to install and register the Digital Identification App. ![](/_astro/promote_install.webp)
  ⋯
    ![](/_astro/auth_app_read1.webp) ![](/_astro/auth_app_read2.webp) ![](/_astro/auth_app_read3.webp)
  - A screen will appear asking for permission to authenticate with the UTokyo Account Identity Verification Service. After reviewing the privacy policy and terms and conditions, tap “Allow”. ![](/_astro/auth_app_permission1.webp)
-   When an options appears asking, “Stop authentication and information sharing?”
+   When an option appears asking, “Stop authentication and information sharing?”
    Although the format differs slightly between Android and iOS, a prompt will appear asking, “Stop authentication and information sharing?”
    - If you select ‘Stop,’ you will be redirected to a page that displays “Bad Request…” because this action is not supported by the UTokyo Account Identity Verification Service. In this case, please return to the UTokyo Account Identity Verification Service page and start over from the beginning of [Step 2](#auth-smartphone).
```

[← 一覧へ](<../README.md>)
