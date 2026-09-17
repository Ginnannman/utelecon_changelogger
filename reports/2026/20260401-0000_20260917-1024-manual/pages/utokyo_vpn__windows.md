# WindowsでUTokyo VPNを利用する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_vpn/windows/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_vpn/windows/>) | [`src/pages/utokyo_vpn/windows.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_vpn/windows.mdx>) |
| English | 変更 | [`/en/utokyo_vpn/windows/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_vpn/windows/>) | [`src/pages/en/utokyo_vpn/windows.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_vpn/windows.mdx>) |

## 日本語

```diff
  ![](/_astro/win04-install-1.webp)![](/_astro/win05-install-2.webp)![](/_astro/win06-install-3.webp)
  ヘルプ：「This installation package is not supported by this processor type. Please use the Windows for ARM64 installer.」と表示され，インストールが失敗する場合
- 手順A・手順Bにおいて使用するブラウザを，Google ChromeまたはMicrosoft Edgeに変更することで，問題が解消する可能性があります．
- それでもうまくいかなければ，[サポート窓口](/support/)に相談してください．
+ [もうひとつの配布ページ](https://univtokyo.sharepoint.com/sites/utokyoaccount/Cisco_Secure_Client/win-arm64)にアクセスしてダウンロードをお試しください． ダウンロードはファイル名の右にある「…」をクリックするか，ファイル名をダブルクリックした後に左上に表示される，ダウンロードボタンで行うことができます．
+ それでもうまくいかなければ，[サポート窓口のメールフォーム](/support/#email-form)に相談してください．
  手順D: インストールが完了すると，アプリにVPNクライアントアプリケーションであるCisco Secure Clientが追加されています．
  ![](/_astro/win07-cisco-on-task.webp)
  これで準備は完了です．
  ## 利用編: UTokyo VPNへの接続
- 以下の手順はVPNを利用するたびに必要です. 特にPCを起動した直後に自動的にVPNに接続されるわけではありませんので, ご注意ください.
+ 以下の手順はVPNを利用するたびに必要です．特にPCを起動した直後に自動的にVPNに接続されるわけではありませんので，ご注意ください．
  手順E: 準備編でインストールしたCisco Secure Clientを起動すると，以下のような画面が出てきます．VPN接続先として vpn1.adm.u-tokyo.ac.jp と入力し，「接続」ボタンをクリックします．
  ![](/_astro/win08-app-window-connect.webp)
```

## English

```diff
  To use UTokyo VPN, you must enable Multi-Factor Authentication in your UTokyo Account. In addition, you are required to have completed the Information Security Education at the specified time. Please refer to the [UTokyo VPN home page](../) for details, and then follow the steps below.
  ## Preparation: Download and Install the VPN Client Application.
- Install the application “AnyConnect” on your device to connect to UTokyo VPN.
- Step A: Go to [https://vpn1.adm.u-tokyo.ac.jp/](https://vpn1.adm.u-tokyo.ac.jp/). When the UTokyo Account authentication page appears as illustrated below, log in with your UTokyo Account.
- ![](/_astro/win01-vpn1-login.webp)
+ Install the application “Cisco Secure Client” on your device to connect to UTokyo VPN.
+ Step A: Go to [https://vpn1.adm.u-tokyo.ac.jp/](https://vpn1.adm.u-tokyo.ac.jp/). Unless you have already signed in, the UTokyo Account sign-in page will appear. Sign in with your UTokyo Account.
  Help: When the error message “You don’t have access to this” (Error Code: 53003) appears
- It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo VPN, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for MFA Use” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
+ It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo VPN, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for Starting Your UTokyo Account” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  Troubleshooting guide: When the error message “申し訳ありませんが、サインイン中に問題が発生しました” or “Sorry, but we’re having trouble signing you in.” appears
  There is a possibility that you have not passed the information security education confirmation test, which is required to use UTokyo VPN. Please check the [page for the Information Security Education](https://univtokyo.sharepoint.com/sites/Security/SitePages/en/Information_Security_Education.aspx), and complete and pass the confirmation test. Once you pass the test, the results will be immediately reflected in the system.
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
- Step B: After the log-in, a download page for the AnyConnect client application, as illustrated below, will appear. Click “Download for Windows” to download the client application.
+ Step B: After the sign-in, a download page for the Cisco Secure Client application, as illustrated below, will appear. Click “Download for Windows” to download the client application.
  ![](/_astro/win02-download-page.webp)
  Troubleshooting guide: When the download page does not appear and a blank page is displayed
  Please access [this page](https://vpn1.adm.u-tokyo.ac.jp/+CSCOE+/logon.html?tgroup=utvpn-tunnel-group) and try downloading.
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
+ Troubleshooting guide: When the error message "This installation package is not supported by this processor type. Please use the Windows for ARM64 installer." appears.
+ Please access [another distribution page](https://univtokyo.sharepoint.com/sites/utokyoaccount/Cisco_Secure_Client/win-arm64) and try downloading. When you download the Cisco Secure Client from SharePoint, please click the download button. The download button will appear after you click the "…" button on the right side of the file name, or in the upper-left corner after you double-click the file name.
+ If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  After these steps, install the application as you would do for any other Windows application.
- Step C: End User License Agreement, please select “I accept the terms in the License Agreement” and click “Next” to proceed.
- ![](/_astro/win03-install-1.webp) ![](/_astro/win04-install-2.webp) ![](/_astro/win05-install-3.webp)
- Step D: If the installation was completed successfully, the VPN client application “Cisco AnyConnect Secure Mobility Client” is added to the application.
+ Step C: Follow the setup wizard screens below to proceed with the installation. In the End User License Agreement, please review the terms, select “I accept the terms in the License Agreement” and click “Next” to proceed.
+ ![](/_astro/win03-install-1.webp)![](/_astro/win04-install-2.webp)![](/_astro/win05-install-3.webp)
+ Step D: If the installation was completed successfully, the VPN client application “Cisco Secure Client” is added to the application.
  ![](/_astro/win06-cisco-on-task.webp)
  You are now ready to use VPN.
  ## Steps to connect to the UTokyo VPN
  The following steps are required, every time to use the VPN. Please note that your device will not connect automatically to the VPN immediately after booting your PC.
- Step E: After launching the “Cisco AnyConnect Secure Mobility Client” installed following the Preparation steps, the window illustrated below will appear. Enter vpn1.adm.u-tokyo.ac.jp as the VPN server. Click the “Connect” button.
+ Step E: After launching the “Cisco Secure Client” installed following the Preparation steps, the window illustrated below will appear. Enter vpn1.adm.u-tokyo.ac.jp as the VPN server. Click the “Connect” button.
  ![](/_astro/win07-app-window-connect.webp)
- Step F: After clicking the “Connect” button, the following UTokyo Account authentication window appears. Log in with your UTokyo Account.
- ![](/_astro/win09-anyconnect-login.webp)
+ Step F: After clicking the “Connect” button, unless you have already signed in, the UTokyo Account sign-in page will appear. Sign in with your UTokyo Account.
  Troubleshooting guide: When the error message "AnyConnect profile settings mandate a single local user, but multiple local users are currently logged into your computer. A VPN connection will not be established" appears
  It is possible that multiple users are simultaneously logged in on the device that is trying to connect to the UTokyo VPN, please log off all the users except the user connecting to the VPN.
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  Help: When the error message “You don’t have access to this” (Error Code: 53003) appears
- It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo VPN, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for MFA Use” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
+ It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo VPN, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for Starting Your UTokyo Account” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  Troubleshooting guide: When the error message “申し訳ありませんが、サインイン中に問題が発生しました” or “Sorry, but we’re having trouble signing you in.” appears
  There is a possibility that you have not passed the information security education confirmation test, which is required to use UTokyo VPN. Please check the [page for the Information Security Education](https://univtokyo.sharepoint.com/sites/Security/SitePages/en/Information_Security_Education.aspx), and complete and pass the confirmation test. Once you pass the test, the results will be immediately reflected in the system.
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
- Step G: If the window displaying “Connected: vpn1.adm.u-tokyo.ac.jp” appears as illustrated below, your device is connected to the VPN. Communication is performed via this VPN while connected to UTokyo campus network. Except for some communication platforms such as Zoom and WebEx that do not require a VPN connection and e-journal sites, all communications occur via this VPN, connecting to UTokyo campus network.
+ Step G: If the window displaying “Connected: vpn1.adm.u-tokyo.ac.jp” appears as illustrated below, your device is connected to the VPN. Except for some communication platforms such as Zoom and Webex that do not require a VPN connection and e-journal sites, all communications occur via this VPN, connecting to UTokyo campus network.
  ![](/_astro/win10-vpn-connected.webp)
- Step H: To view the current connection status, click on the “Cisco AnyConnect Secure Mobility Client” icon again. If the window displaying “Connected to vpn1.adm.u-tokyo.ac.jp” illustrated below appears, your device is connected to the UTokyo VPN.
+ Step H: To view the current connection status, click on the “Cisco Secure Client” icon again. If the window displaying “Connected to vpn1.adm.u-tokyo.ac.jp.” illustrated below appears, your device is connected to UTokyo VPN.
  To disconnect from the VPN, click the “Disconnect” button in this window.
  ![](/_astro/win11-vpn-connected-window.webp)
```

[← 一覧へ](<../README.md>)
