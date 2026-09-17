# AndroidでUTokyo VPNを利用する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_vpn/android/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_vpn/android/>) | [`src/pages/utokyo_vpn/android.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_vpn/android.mdx>) |
| English | 変更 | [`/en/utokyo_vpn/android/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_vpn/android/>) | [`src/pages/en/utokyo_vpn/android.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_vpn/android.mdx>) |

## 日本語

```diff
  ## 準備編: UTokyo VPNの初期設定
  まずはUTokyo VPNに接続するために必要なアプリをインストールし，初期設定を行います．手順は通常のAndroidアプリと同様です．
- 手順A: [Google Play](https://play.google.com/store/apps/details?id=com.cisco.anyconnect.vpn.android.avf)にアクセスし，Cisco Systems社のSecure Clientというアプリをインストールします．このアプリは以前，AnyConnectという名前だったため，以下の画像ではこの2つの名前が併記されています．
+ 手順A: [Google Play](https://play.google.com/store/apps/details?id=com.cisco.anyconnect.vpn.android.avf)にアクセスし，Cisco Systems社のCisco Secure Clientというアプリをインストールします．このアプリは以前，AnyConnectという名前だったため，以下の画像ではこの2つの名前が併記されています．
  ![](/_astro/android01-play-store.webp)
- 手順B: インストールを終えてSecure Clientアプリを開くと，以下の1枚目のような画面が出るので内容を確認のうえ「OK」をタップしてください．2枚目のような画面が出たらインストールは完了です．
+ 手順B: インストールを終えてCisco Secure Clientアプリを開くと，以下の1枚目のような画面が出るので内容を確認のうえ「OK」をタップしてください．2枚目のような画面が出たらインストールは完了です．
  ![](/_astro/android02-install-1.webp) ![](/_astro/android03-install-2.webp)
  手順C: 上の画面で「Connections」（日本語で表示されている場合は「接続」）をタップし，続いて右下のプラス「＋」ボタンをタップします．以下のような「接続エディタ」が表示されるので，「サーバーアドレス」をタップして vpn1.adm.u-tokyo.ac.jp と入力します．
  ⋯
  それでもうまくいかなければ，[サポート窓口](/support/)に相談してください．
  手順F: 認証に成功すれば，VPNへの接続は完了です．ZoomやWebexなどVPNを経由する必要のない一部の通信や電子ジャーナルサイトなどを除く全ての通信は，このVPNを経由して，東京大学キャンパスネットワークに接続している状態で行われます．
- 手順G: 以下のようにSecure Clientアプリの下に「接続中」と表示されていれば，お使いの機器はUTokyo VPNに接続している状態です．
+ 手順G: 以下のようにCisco Secure Clientアプリの下に「接続中」と表示されていれば，お使いの機器はUTokyo VPNに接続している状態です．
  ![](/_astro/android09-secure-client-connecting.webp)
  VPNを切断する際は，この画面のトグルボタンをタップして「切断されました」になったことを確認してください．
```

## English

```diff
  ## Preparation: Initial setup of UTokyo VPN
  First, install the apps necessary to connect to the UTokyo VPN and perform the initial setup. The procedure is similar to installing a regular Android app.
- Step A: Access [Google Play](https://play.google.com/store/apps/details?id=com.cisco.anyconnect.vpn.android.avf) and install the Secure Client app from Cisco Systems. This app was previously named AnyConnect. Therefore, these two names are shown together in the following image.
+ Step A: Access [Google Play](https://play.google.com/store/apps/details?id=com.cisco.anyconnect.vpn.android.avf) and install the Cisco Secure Client app from Cisco Systems. This app was previously named AnyConnect. Therefore, these two names are shown together in the following image.
  ![](/_astro/android01-play-store.webp)
- Step B: After installation, open the Secure Client app and check if the screen shown in the first image below is displayed. Confirm the contents and tap “OK”. If the screen shown in the second image below is displayed, the installation is complete.
+ Step B: After installation, open the Cisco Secure Client app and check if the screen shown in the first image below is displayed. Confirm the contents and tap “OK”. If the screen shown in the second image below is displayed, the installation is complete.
  ![](/_astro/android02-install-1.webp) ![](/_astro/android03-install-2.webp)
  Step C: Tap “Connections” and tap the plus “+” button in the lower right corner. The “Connection Editor” will appear as shown below. Tap “Server Address” and enter “vpn1.adm.u-tokyo.ac.jp”.
  ![](/_astro/android04-connect-editor.webp)
- Step D: Confirm that the screen is shown as below and tap “DONE” at the bottom of the screen if shown as below.
+ Step D: Confirm that the screen is shown as below and tap “Done” at the bottom of the screen if shown as below.
  ![](/_astro/android05-connect-editing.webp)
  ## Steps to connect to the UTokyo VPN
  The following procedure is required each time you use the VPN. Please note that the VPN connection is not automatically established immediately after the device is turned on.
- Step E: Confirm that “vpn1.adm.u-tokyo.ac.jp” is listed under “Connections” as shown in the first image below. Next, turn on the toggle button next to “AnyConnect VPN” and sign in with your UTokyo Account when the UTokyo Account authentication screen appears as shown in the second image below. If you launch the VPN shortly after your previous access, the VPN connection may start immediately without displaying this screen.
+ Step E: Confirm that “vpn1.adm.u-tokyo.ac.jp” is listed under “Connections” as shown in the first image below. Next, turn on the toggle button next to “AnyConnect VPN” and sign in with your UTokyo Account when the UTokyo Account authentication screen appears. If you launch the VPN shortly after your previous access, the VPN connection may start immediately without displaying this screen.
  ![](/_astro/android06-home-finished-setting.webp)
- At this time, a screen, shown below, may appear asking for permission. In this case, please confirm the information and tap the “OK” button.
+ At this time, a screen, as shown below, may appear asking for permission. In this case, please confirm the information and tap the “Allow” button.
  ![](/_astro/android08-secure-client-verify-window.webp)
  Help: When the error message “You don’t have access to this” (Error Code: 53003) appears
- It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo VPN, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for MFA Use” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
+ It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo VPN, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for Starting Your UTokyo Account” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  Troubleshooting guide: When the error message “申し訳ありませんが、サインイン中に問題が発生しました” or “Sorry, but we’re having trouble signing you in.” appears
  ⋯
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  Step F: If the authentication is successful, the connection to the VPN is complete; all communications, except for certain communications that do not require a VPN connection, such as Zoom and Webex, and e-journal sites, will be carried out while you are connected to the University of Tokyo campus network through this VPN.
- Step G: Your device is connected to the UTokyo VPN if “Connected” is displayed on the Secure Client app screen as shown below.
+ Step G: Your device is connected to the UTokyo VPN if “Connected” is displayed on the Cisco Secure Client app screen as shown below.
  ![](/_astro/android09-secure-client-connecting.webp)
- When you wish to disconnect the VPN, tap the toggle button on this screen and confirm that “Disconnected” is displayed.
- ---
- [Back to the main UTokyo VPN page](../)
+ If you want to disconnect the VPN, tap the toggle button on this screen and confirm that “Disconnected” is displayed.
```

[← 一覧へ](<../README.md>)
