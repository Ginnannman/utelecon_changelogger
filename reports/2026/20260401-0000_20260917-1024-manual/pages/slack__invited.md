# UTokyo Slackに特定のワークスペースから招待を受けて参加する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/slack/invited/`](<https://utelecon.adm.u-tokyo.ac.jp/slack/invited/>) | [`src/pages/slack/invited.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/slack/invited.mdx>) |
| English | 変更 | [`/en/slack/invited/`](<https://utelecon.adm.u-tokyo.ac.jp/en/slack/invited/>) | [`src/pages/en/slack/invited.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/slack/invited.mdx>) |

## 日本語

```diff
    それでもうまくいかなければ，[サポート窓口](/support/)に相談してください．
    ヘルプ：「これに対するアクセス権がありません」または「You don’t have access to this」というエラー（エラーコード：53003）が表示される場合
-   UTokyo VPNの利用に必要な[UTokyo Accountの多要素認証](/utokyo_account/mfa/)の申請およびその反映が完了していない可能性があります．「[UTokyo Account多要素認証の初期設定手順](/utokyo_account/mfa/initial/)」を最後の「手順4：多要素認証の利用を申請する」まで確実に行って，UTokyo Accountの多要素認証を有効化してください．その後，多要素認証の設定がシステムに反映されるまで約30分かかるので，それまでしばらくお待ちください．
+   UTokyo Slackの利用に必要な[UTokyo Accountの多要素認証](/utokyo_account/mfa/)の申請およびその反映が完了していない可能性があります．「[UTokyo Account多要素認証の初期設定手順](/utokyo_account/mfa/initial/)」を最後の「手順4：多要素認証の利用を申請する」まで確実に行って，UTokyo Accountの多要素認証を有効化してください．その後，多要素認証の設定がシステムに反映されるまで約30分かかるので，それまでしばらくお待ちください．
    それでもうまくいかなければ，[サポート窓口](/support/)に相談してください．
  - サービス利用規約を確認するよう求められるので，確認してください．
  ⋯
  ### 参加の後に
  #### プロフィールの設定
- UTokyo Slackを利用する際には，プロフィールを適切に設定することをおすすめします．特に，プロフィール内の「表示名」の項目は，通常メッセージなどにあなたの名前として表示される情報ですが，システムの仕様上，初期状態では共通ID（UTokyo Accountの先頭10桁の数字のみの部分)になってしまっていますので，他の人に分かるような名前を設定すると良いでしょう．
+ UTokyo Slackを利用する際には，プロフィールを適切に設定することをおすすめします．特に，プロフィール内の「表示名」の項目は，通常メッセージなどにあなたの名前として表示される情報ですが，システムの仕様上，初期状態では共通ID（UTokyo Accountの先頭10桁の数字のみの部分）になってしまっていますので，他の人に分かるような名前を設定すると良いでしょう．
  プロフィールを変更する手順は以下の通りです（PCで利用している場合）．
  - 画面左下にある人のマークを押してください．
```

## English

```diff
  - If you don’t complete the Information Security Education within the implementation period, your privilege to use the UTokyo Slack will be suspended. Specifically, you will no longer be able to sign in to UTokyo Slack. Furthermore, even if you have already signed in, you will be forced to sign out and will not be able to sign in again.
  - If your access gets suspended, please ensure to undergo the Information Security Education. As soon as you pass the confirmation test, the suspension of your access will be restored immediately.
- - For those who are newly enrolled and appointed, complete the [Information Security Education](https://univtokyo.sharepoint.com/sites/Security/SitePages/en/Information_Security_Education.aspx) and pass the confirmation test in order to start using UTokyo Slack. Please complete the Information Security Educationbefore starting to use the UTokyo Slack.
- In addition, to use UTokyo Slack, you are required to enable Multi-Factor Authentication for UTokyo Accounts. Please make sure to follow the initial setup procedures on the “[Using Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/)” page up to the last step “Step 4: Apply for MFA Use” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for your account settings to be reflected in the system, so please wait before proceeding to the following step.
+ - For those who are newly enrolled and appointed, complete the [Information Security Education](https://univtokyo.sharepoint.com/sites/Security/SitePages/en/Information_Security_Education.aspx) and pass the confirmation test in order to start using UTokyo Slack. Please complete the Information Security Education before starting to use the UTokyo Slack.
+ In addition, to use UTokyo Slack, you are required to enable Multi-Factor Authentication for UTokyo Accounts. Please make sure to follow the initial setup procedures on the “[Using Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/)” page up to the last step “Step 4: Apply for Starting Your UTokyo Account” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for your account settings to be reflected in the system, so please wait before proceeding to the following step.
  ### Procedure
  - Once the invitation is made by the person in charge of the workspace, you will receive an invitation email in your [ECCS Cloud Email](/en/google/).* We ask the person in charge to enter UTokyo Account (10-digit Common ID + @utac.u-tokyo.ac.jp) as the email address when sending invitations. Since emails sent to this email address will be forwarded to the ECCS Cloud Email @g.ecc.u-tokyo.ac.jp, you can receive the invitation email by logging in to ECCS Cloud Email.
  ⋯
    If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
    Help: When the error message “You don’t have access to this” (Error Code: 53003) appears
-   It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo Slack, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for MFA Use” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
+   It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo Slack, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for Starting Your UTokyo Account” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
    If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  - Since you will be asked to review the terms of service, please do so.
- - After joining in process has been completed, the workspace screen will appear.
+ - After the joining process has been completed, the workspace screen will appear.
  ### After you join
  #### Setting up a profile
```

[← 一覧へ](<../README.md>)
