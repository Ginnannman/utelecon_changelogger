# macOSでUTokyo VPNを利用する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_vpn/macos/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_vpn/macos/>) | [`src/pages/utokyo_vpn/macos.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_vpn/macos.mdx>) |
| English | 変更 | [`/en/utokyo_vpn/macos/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_vpn/macos/>) | [`src/pages/en/utokyo_vpn/macos.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_vpn/macos.mdx>) |

## 日本語

```diff
  [こちらのページ](https://vpn1.adm.u-tokyo.ac.jp/+CSCOE+/logon.html?tgroup=utvpn-tunnel-group)にアクセスしてダウンロードをお試しください．
  それでもうまくいかなければ，[サポート窓口](/support)に相談してください．
+ ヘルプ：上記の方法でもダウンロード画面に到達できない場合
+ [もうひとつの配布ページ](https://univtokyo.sharepoint.com/sites/utokyoaccount/Cisco_Secure_Client/macos)にアクセスしてダウンロードをお試しください．ダウンロードはファイル名の右にある「…」をクリックするか，ファイル名をダブルクリックした後に左上に表示される，ダウンロードボタンで行うことができます．
+ それでもうまくいかなければ，[サポート窓口のメールフォーム](/support/#email-form)に相談してください．
  手順C: Cisco Secure Clientのインストールの途中で，以下のような「Action Required AnyConnect VPN Service Not Enabled」というポップアップが表示されることがあります．その際はポップアップの指示に従って，「システム設定」→「一般」→「ログイン項目と機能拡張」にすすみ，「アプリのバックグラウンドでのアクティビティ」（または，「バックグラウンドでの実行を許可」）の「Cisco Secure Client - AnyConnect VPN Service」を有効にしてください．また，以下のような「“Cisco Secure Client - Socket Filter”が新しいネットワーク機能拡張を使おうとしています」というポップアップが表示されたら，「OK」をクリックしてください．
  ![](/_astro/mac04_0-install-2.webp) ![](/_astro/mac04_1-install-2.webp)
```

## English

```diff
  Step A: Go to [https://vpn1.adm.u-tokyo.ac.jp](https://vpn1.adm.u-tokyo.ac.jp). Unless you have already signed in, the UTokyo Account sign-in page will be displayed. Please sign in.
  Help: When the error message “You don’t have access to this” (Error Code: 53003) appears
- It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo VPN, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for MFA Use” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
+ It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo VPN, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for Starting Your UTokyo Account” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  Troubleshooting guide: When the error message “申し訳ありませんが、サインイン中に問題が発生しました” or “Sorry, but we’re having trouble signing you in.” appears
  There is a possibility that you have not passed the information security education confirmation test, which is required to use UTokyo VPN. Please check the [page for the Information Security Education](https://univtokyo.sharepoint.com/sites/Security/SitePages/en/Information_Security_Education.aspx), and complete and pass the confirmation test. Once you pass the test, the results will be immediately reflected in the system.
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
- Step B: After the log-in, a download page for the Cisco Secure Client application, as illustrated below, will appear. Click “Download for macOS” to download the client application.
+ Step B: After the sign-in, a download page for the Cisco Secure Client application, as illustrated below, will appear. Click “Download for macOS” to download the client application.
  After these steps, install the application as you would do for any other macOS application.
  ![](/_astro/mac02-download-page.webp) ![](/_astro/mac03-install_1-1.webp)
  ⋯
  Please access [this page](https://vpn1.adm.u-tokyo.ac.jp/+CSCOE+/logon.html?tgroup=utvpn-tunnel-group) and try downloading.
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
+ Troubleshooting guide: When you cannot access the download page
+ Please access [another distribution page](https://univtokyo.sharepoint.com/sites/utokyoaccount/Cisco_Secure_Client/macos) and try downloading.
+ When you download the Cisco Secure Client from SharePoint, please click the download button. The download button will appear after you click the ”…” button on the right side of the file name, or in the upper-left corner after you double-click the file name.
+ If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  Step C: During the installation of Cisco Secure Client, a window with the following message “Action Required AnyConnect VPN Service Not Enabled” may appear. Please follow the instructions to allow the system software from “Cisco Secure Client - AnyConnect VPN Service”, which is displayed in the “App Background Activity” in “Login Items & Extensions” in “General” in “System Settings”. When a window with the following message ‘“Cisco Secure Client - Socket Filter” would like to use a new network extension’ appears, please click the “OK” button.
  ![](/_astro/mac04-install_1-2.webp) ![](/_astro/mac05-install_1-3.webp)
  ⋯
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  Help: When the error message “You don’t have access to this” (Error Code: 53003) appears
- It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo VPN, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for MFA Use” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
+ It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo VPN, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for Starting Your UTokyo Account” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  Troubleshooting guide: When the error message “申し訳ありませんが、サインイン中に問題が発生しました” or “Sorry, but we’re having trouble signing you in.” appears
  ⋯
  - If “Cisco Secure Client - AnyConnect VPN Service” in “App Background Activity” (or “Allow Apps to Run in the Background”) is disabled, please enable “Cisco Secure Client - AnyConnect VPN Service” (click the toggle to the right of the item name and it turns blue).
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
- Step H: If the window displaying “Connected to vpn1.adm.u-tokyo.ac.jp” appears as illustrated below, your device is connected to the VPN. Communication is performed via this VPN while connected to UTokyo campus network. Except for some communication platforms such as Zoom and WebEx that do not require a VPN connection and e-journal sites, all communications occur via this VPN, connecting to UTokyo campus network.
+ Step H: If the window displaying “Connected to vpn1.adm.u-tokyo.ac.jp” appears as illustrated below, your device is connected to the VPN. Communication is performed via this VPN while connected to UTokyo campus network. Except for some communication platforms such as Zoom and Webex that do not require a VPN connection and e-journal sites, all communications occur via this VPN, connecting to UTokyo campus network.
  Step I: To view the current connection status, click on the “Cisco Secure Client” icon again. If the window displaying “Connected to vpn1.adm.u-tokyo.ac.jp” illustrated below appears, your device is connected to the UTokyo VPN.
  To disconnect from the VPN, click the “Disconnect” button in this window.
```

[← 一覧へ](<../README.md>)
