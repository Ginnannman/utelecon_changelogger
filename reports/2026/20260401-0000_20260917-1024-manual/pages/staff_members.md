# 東京大学における情報システムの準備について（職員向け）

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/staff_members/`](<https://utelecon.adm.u-tokyo.ac.jp/staff_members/>) | [`src/pages/staff_members/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/staff_members/index.mdx>) |
| English | 変更 | [`/en/staff_members/`](<https://utelecon.adm.u-tokyo.ac.jp/en/staff_members/>) | [`src/pages/en/staff_members/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/staff_members/index.mdx>) |

## 日本語

```diff
  
  # 東京大学における情報システムの準備について（職員向け）
- 2026/3/16 15:30から，説明会「[東京大学における情報システムとコミュニケーションツール](/events/2026-03-16/)」を開催します．本ページとあわせてご参照ください．
+ 2026/9/9 に，説明会「[東京大学における情報システムとコミュニケーションツール](/events/2026-00-09/)」を開催しました．説明会の資料と動画をリンク先のページで提供していますので，本ページとあわせてご参照ください．
  ## 基本的なご案内
  このページでは，職員の方（教育を直接担当しない方）が業務を実施するために必要なアカウントの初期設定と，必要なシステムについて説明します．
  ⋯
  なお東京大学では，セメスターの開始にあたり，教職員の方向けに，東京大学の各システムの概要についての説明会を実施しています．東京大学で提供している情報システムは多岐にわたり，把握するのが難しいですが，説明会ではそれぞれのシステムとその関係性について説明しておりますのでよりわかりやすくなっています．2026年度Sセメスターに向けた説明会につきましては，「[東京大学における情報システムとコミュニケーションツール](/events/2026-03-16/)」をご覧ください．
  ## はじめに：「UTokyo Account」の初期設定など
- 「UTokyo Account」は，東京大学の情報システムを利用する際に必要となる全学的なアカウントです．この後で説明するZoomやUTOLなどの各システムは，このアカウントでログインして使うのが基本になります．
+ 「UTokyo Account」は，東京大学の情報システムを利用する際に必要となる全学的なアカウントです．この後で説明するZoomやUTOLなどの各システムは，このアカウントでサインインして使うのが基本になります．
  UTokyo Accountは，0123456789@utac.u-tokyo.ac.jpのように，共通ID（UTokyo Accountの先頭10桁の数字のみの部分）の後に東京大学であることを表す記号@utac.u-tokyo.ac.jpを付けたもので表されます．
  以下，UTokyo Accountの初期設定について説明します．システムを利用するために必要となる重要な作業ですので，よく読んで作業を行ってください．
  ⋯
  - パスワードの更新が求められるので，パスワード通知書の初期パスワードを「現在のパスワード」に入力し，新しく設定するパスワードを「新しいパスワード」と「パスワードの確認入力」に入力してください．
    - パスワードは英大文字，英小文字，数字，記号の4種類のうち3種類以上を使い，文字数を12文字以上64文字以下に設定する必要があります． ただし，財務会計システム・予算執行管理システムでは，パスワードが32文字までしか入力できないため，このシステムを利用する場合にはパスワードを32文字以下に設定することを推奨しております．
- - サインインに成功したら「情報を表示」ボタンを押してください．多要素認証の利用状況（「利用していません」）や情報セキュリティ教育の受講状況（「受講していません」）が表示されるので、多要素認証の有効化、情報セキュリティ教育の受講へと進んでください．
+ - サインインに成功したら「情報を表示」ボタンを押してください．多要素認証の利用状況（「利用していません」）や情報セキュリティ教育の受講状況（「受講していません」）が表示されるので，多要素認証の有効化，情報セキュリティ教育の受講へと進んでください．
  この手順がうまくいかないときのヘルプ
  - 初期パスワードを変更したのに，「これに対するアクセス権がありません」または「You don’t have access to this」というエラー（エラーコード 53003）が表示される場合：パスワードの変更後，実際にシステムを利用できるようになるまで，少し時間がかかる（最大30分）場合があります．しばらくお待ちいただき，再度操作をお試しください．
  ⋯
  これらを確認して，それでもうまくいかなければ，[サポート窓口](/support/)に相談してください．
  ### 【推奨】UTokyo Account本人確認サービスの事前連携
- ご自身のマイナンバーカードをUTokyo Accountと[あらかじめひも付けておく](/utokyo_account/ident-myna/link/)ことで，UTokyo Accountでサインインできなくなったときなどに本人確認に利用できます．詳しくは，[UTokyo Account本人確認サービスの説明](/utokyo_account/ident-myna/)を参照してください．（なお[UTokyo Account本人確認サービスの事前連携](/utokyo_account/ident-myna/link/)には物理的なマイナンバーカード[1](#user-content-fn-1)やその暗証番号，マイナンバーカードの読み取りに対応したスマートフォンが必要です．これらが手元にない場合は，一旦この手順を飛ばしても問題ありません．）
+ [UTokyo Account本人確認サービス](/utokyo_account/ident-myna/)で，ご自身のマイナンバーカードをUTokyo Accountとあらかじめひも付けておく（事前連携を行う）ことで，UTokyo Accountでサインインできなくなったときなどの本人確認が便利になります．ただし，[UTokyo Account本人確認サービスの事前連携](/utokyo_account/ident-myna/link/)には物理的なマイナンバーカード[1](#user-content-fn-1)やその暗証番号，マイナンバーカードの読み取りに対応したスマートフォンが必要です．事前連携が難しい状況の場合，この作業を飛ばしても問題ありません．（後日，連携することも可能です．また事前連携をしていなくてもサービスは全て利用できます．）
+ ひも付ける手順については，「[UTokyo Account本人確認サービスの事前連携について](/utokyo_account/ident-myna/link/)」を参照してください．
  Footnotes
- - 2025年9月現在，いわゆる[スマートフォンのマイナンバーカード](https://www.digital.go.jp/policies/mynumber/smartphone-certification)（Androidのスマホ用電子証明書やiPhoneのマイナンバーカード）は利用できません． [↩](#user-content-fnref-1)
+ - マイナンバー通知書や通知カードは利用できません．また2025年9月現在，いわゆる[スマートフォンのマイナンバーカード](https://www.digital.go.jp/policies/mynumber/smartphone-certification)（Androidのスマホ用電子証明書やiPhoneのマイナンバーカード）は利用できません． [↩](#user-content-fnref-1)
  ### 職員向けの初期設定
  ここまでの手順により，以下のページの「はじめに」の項目の部分が完了します． これ以降の初期設定は以下のページを参照してください．
```

## English

```diff
  
  # Getting Ready for ICT Systems at the UTokyo (for Staff Members)
- An information session titled “[Information Session on ICT Systems and Tools for UTokyo Members (Conducted in Japanese)](/events/2026-03-16/)” will be held on March 16, 2026 at 3:30 PM. Please refer to this page as well.
+ An information session titled “[Information Session on ICT Systems and Tools for UTokyo Members (Conducted in Japanese)](/events/2026-09-09/)” was held on September 9, 2026. Materials and recordings of the session are provided on the linked page. Please refer to this page as well.
  ## Introduction
  This page explains the initial account setup and necessary systems for staff members (who are not directly in charge of education) to conduct their work.
  ⋯
  For faculty members, please refer to [Getting Ready for ICT Systems at the UTokyo (for Faculty Members)](/en/faculty_members/).
  ### Troubleshooting: Technical Support Desk
- If you have any problems or need advice on using information systems, please consult the [Technical Support Desk](/en/support/). The Technical Support Desk provides consultation services through three tools: chat, online call, email form, and on-site. The Technical Support Desk will respond quickly through the collaboration of student staff “Common Supporters” and faculty members.
+ If you have any problems or need advice on using information systems, please consult the [Technical Support Desk](/en/support/). The Technical Support Desk provides consultation services through four tools: chat, online call, email form, and on-site. The Technical Support Desk will respond quickly through the collaboration of student staff “Common Supporters” and faculty members.
  ## Overall view of the UTokyo system
  The UTokyo provides various information systems such as Microsoft, Google, and so on. In order to use these various systems, you need to sign in using a university-wide account called UTokyo Account. The following figure shows an overview of the UTokyo information systems.
  ⋯
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  ### [Recommended] Pre-linking the UTokyo Account Identity Verification Service
- By [linking your Individual Number Card (My Number Card) to your UTokyo Account in advance](/en/utokyo_account/ident-myna/link/), you can use it for identity verification when you are unable to sign in to your UTokyo Account. For details, please see the [UTokyo Account Identity Verification Service page](/en/utokyo_account/ident-myna/). (Note that [pre-linking the UTokyo Account Identity Verification Service](/en/utokyo_account/ident-myna/link/) requires a physical Individual Number Card ([My Number Card](https://www.digital.go.jp/en/policies/mynumber))[1](#user-content-fn-1), its PIN, and a smartphone capable of reading the card. If you do not have these at hand, you may skip this step for now.)
+ By pre-linking your Individual Number Card (My Number Card) to your UTokyo Account in advance using the [UTokyo Account Identity Verification Service](/en/utokyo_account/ident-myna/), you can conveniently verify your identity in situations such as when you are unable to sign in to your account. However, [pre-linking for the UTokyo Account Identity Verification Service](/en/utokyo_account/ident-myna/link/) requires a physical Individual Number Card[1](#user-content-fn-1), its PIN, and a smartphone capable of reading the card. If it is difficult to complete the pre-linking at this time, you may skip this step. (It is possible to link them at a later date, and all services are available even without pre-linking.)
+ For the procedure to link your card, please refer to “[How to set up the UTokyo Account Identity Verification Service](/en/utokyo_account/ident-myna/link/)”.
  Footnotes
- - As of September 2025, the so-called [smartphone-based My Number Card](https://www.digital.go.jp/en/policies/mynumber/smartphone-certification) (Android smartphone digital certificates and iPhone My Number Cards) cannot be used. [↩](#user-content-fnref-1)
+ - Individual Number Notice or Notification Cards cannot be used. Additionally, as of September 2025, the so-called [smartphone-based My Number Card](https://www.digital.go.jp/en/policies/mynumber/smartphone-certification) (Android smartphone electronic certificates or iPhone My Number Cards) cannot be used. [↩](#user-content-fnref-1)
  ### Initial setup for Staff Members
  By completing the steps above, you will have finished the “はじめに (Introduction)” section of the page below. For further initial setup instructions, please refer to the following page.
```

[← 一覧へ](<../README.md>)
