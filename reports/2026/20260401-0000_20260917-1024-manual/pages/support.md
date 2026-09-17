# サポート窓口

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/support/`](<https://utelecon.adm.u-tokyo.ac.jp/support/>) | [`src/pages/support/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/support/index.mdx>) |
| English | 変更 | [`/en/support/`](<https://utelecon.adm.u-tokyo.ac.jp/en/support/>) | [`src/pages/en/support/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/support/index.mdx>) |

## 日本語

```diff
  タイトル: サポート窓口 | utelecon
- 説明: 東京大学の情報システムに関連した様々な質問や相談に対応します．メールフォーム・チャット・オンライン通話の3つの窓口を設けているので，利用しやすい窓口から相談してください．
+ 説明: 東京大学の情報システムに関連した様々な質問や相談に対応します．メールフォーム・チャット・オンライン通話・対面の4つの窓口を設けているので，利用しやすい窓口から相談してください．
  
  # サポート窓口
  ⋯
  - [オンライン授業への入室に関するトラブルシューティング](/oc/join/)
  ### 最近特に多く寄せられているご相談
- 更新日：2025年9月24日
+ 更新日：2026年5月7日
+ #### UTokyo Wi-Fi・UTokyo VPN・UTokyo Slackが使えない
+ 特に，「これに対するアクセス権がありません」「Error Code: 53003」「申し訳ありませんが、サインイン中に問題が発生しました。」「AADSTS50105」などと表示されて利用できない方が，多くいらっしゃいます．
+ UTokyo Accountで東京大学の情報システムを利用する際には，多要素認証の設定と情報セキュリティ教育の受講が必須です．これらを完了していない場合，上記のエラーが発生します．
+ そこでまず状況の確認のため，[UTokyo Account利用者情報確認サイト](https://login.adm.u-tokyo.ac.jp/my/)にアクセスし，UTokyo Accountでサインインした上で，「情報を表示 / Display information」を押してください．
+ 表示された画面で，「多要素認証を利用しています」と表示されていない場合
+ 多要素認証が有効になっていないため，有効化してください．
+ - UTokyo Wi-Fi・UTokyo VPN・UTokyo Slackを利用しようとした際，「これに対するアクセス権がありません」「Error Code: 53003」などと表示されます．
+ - 初期設定方法は，以下をご参照ください．手順4まで行うことと，設定がシステム全体に反映されるまで最大約30分かかることに，ご注意ください．
+   [UTokyo Account多要素認証の初期設定手順](/utokyo_account/mfa/initial/)
+ 表示された画面で，「2026年度の情報セキュリティ教育は受講済みです」と表示されていない場合
+ 情報セキュリティ教育の確認テストにまだ合格していないため，改めて受講してください．
+ - UTokyo Wi-Fi・UTokyo VPN・UTokyo Slackを利用しようとした際，「申し訳ありませんが、サインイン中に問題が発生しました。」「AADSTS50105」などと表示されます．
+ - 受講方法については，以下をご参照ください．確認テストには全問正解する必要がある点にご注意ください．
+   [情報セキュリティ教育](https://univtokyo.sharepoint.com/sites/Security/SitePages/Information_Security_Education.aspx)
+ 以上の案内で解決しない場合は，下記4つの窓口のいずれかに問い合わせてください．その際，詳しい状況をお伝えいただくとともに，[UTokyo Account利用者情報確認サイト](https://login.adm.u-tokyo.ac.jp/my/)の画面に表示された内容についてもお伝えください．
  #### 所属や雇用形態が変わる場合のアカウント・データの引き継ぎについて
  問い合わせの前に次のページをご確認ください．在籍期間に関する問い合わせは所属部局へお願いします．
```

## English

```diff
  The Technical Support Desk aims to respond to inquiries regarding information systems at the University of Tokyo. To expand our services, support is co-operated by student staff (“utelecon Support Staff”) and faculty members.
  We offer assistance through email form, chat, online call, and on-site. Please contact us through the appropriate channel for your inquiry.
- As of February 26, 2026, the on-site support previously provided by [ECCS Tutors](/eccs/support/#tutors) has been integrated into this utelecon support desk, and assistance is being provided under this new framework.
+ As of February 26, 2026, the on-site support previously provided by [ECCS Tutors](/en/eccs/support/#tutors) has been integrated into this utelecon support desk, and assistance is being provided under this new framework.
  ## Before Inquiring
  Before inquiring, please check the other support information and common recent inquiries provided on this site. If these resources help resolve your issue, it will be more efficient than contacting us. We kindly ask for your cooperation.
  ⋯
  For the systems listed below, please refer to detailed information on defects and troubleshooting provided on their respective pages.
  - [List of known UTOL defects and status of correspondence (in Japanese)](https://docs.google.com/spreadsheets/d/15jw_TpG8pfNoaspN2NYzYrFhJmjj--U1-c4IBejtBJ8/edit#gid=0)
- - [UTokyo Wi-Fi troubleshooting (in Japanese)](/utokyo_wifi/trouble_shooting/)
+ - [UTokyo Wi-Fi troubleshooting](/en/utokyo_wifi/trouble_shooting/)
  - [Troubleshooting for joining an online class](/en/oc/join/)
  ### Common Recent Inquiries
- Last Updated: September 24, 2025
+ Last Updated: May 7, 2026
+ #### Unable to use UTokyo Wi-Fi, UTokyo VPN, and UTokyo Slack
+ Many people with the error message “You don’t have access to this”, “Error Code:53003”, “Sorry, but we’re having trouble signing you in”, or “AADSTS50105” contact us.
+ You need to set up multi-factor authentication (MFA) and complete the Information Security Education before you use information systems with your UTokyo Account. If you have not completed these requirements, the errors described above will appear.
+ To check the status of your account, please visit the “[View Your UTokyo Account User Information](https://login.adm.u-tokyo.ac.jp/my/)” site, sign in to your UTokyo Account, and push the “Display information” button.
+ If it doesn’t show “You are using Multi-Factor Authentication (MFA)”
+ You have not completed the application for MFA of your UTokyo Account. You have to complete the initial setup for MFA and start using it.
+ - The error message “You don’t have access to this” or “Error Code:53003” appears when you try to use UTokyo Wi-Fi, VPN, and Slack.
+ - Please refer to the following page for instructions on how to finish the initial setup procedures. Please complete all steps, until “Step 4”, to finish the initial setup procedures, and please note that it will take 30 minutes for the MFA settings to be reflected in the whole system after these procedures.
+   [Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)
+ If it doesn’t show “You have taken the Information Security Education for the AY 2026”
+ You have not completed the Information Security Education for the AY 2026. You have to take it and pass the confirmation test.
+ - The error message “Sorry, but we’re having trouble signing you in” or “AADSTS50105” appears when you try to use UTokyo Wi-Fi, VPN, and Slack.
+ - Please refer to the following page for instructions on how to take the course. You need to score a perfect result on the confirmation test.
+   [AY2026 Information Security Education](https://univtokyo.sharepoint.com/sites/Security/SitePages/en/Information_Security_Education.aspx)
+ If the above does not solve your problem, please contact us through one of the following four channels. Please provide detailed information about your situation, and also tell us what you see on the “[View Your UTokyo Account User Information](https://login.adm.u-tokyo.ac.jp/my/)” screen.
  #### Transfer of accounts and data in the event of a change of affiliation or employment status.
  Before the inquiry, please see the page below. Please contact your department office if you have any queries about the enrollment period.
```

[← 一覧へ](<../README.md>)
