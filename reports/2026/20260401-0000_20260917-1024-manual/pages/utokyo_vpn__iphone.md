# iPhoneでUTokyo VPNを利用する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_vpn/iphone/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_vpn/iphone/>) | [`src/pages/utokyo_vpn/iphone.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_vpn/iphone.mdx>) |
| English | 変更 | [`/en/utokyo_vpn/iphone/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_vpn/iphone/>) | [`src/pages/en/utokyo_vpn/iphone.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_vpn/iphone.mdx>) |

## 日本語

```diff
  手順A: [App Store](https://apps.apple.com/jp/app/cisco-anyconnect/id1135064690)にアクセスし，Cisco社のCisco Secure Clientというアプリをインストールします．
  ![](/_astro/iphone01-app-store.webp)
- 手順B: インストールを終えてSecure Clientアプリを開くと，下図1枚目のような画面が出ることを確認します．これでインストールは完了です．なお，開く際に下図2枚目のように通知の送信について確認する画面が表示されることがありますが，いずれを選択しても構いません．
+ 手順B: インストールを終えてCisco Secure Clientアプリを開くと，下図1枚目のような画面が出ることを確認します．これでインストールは完了です．なお，開く際に下図2枚目のように通知の送信について確認する画面が表示されることがありますが，いずれを選択しても構いません．
  ![](/_astro/iphone02-setup_home.webp)![](/_astro/iphone03-setup_home_popup_notify.webp)
  手順C: アプリを起動した直後の画面で「接続」をタップし，続いて表示される画面で「VPN接続の追加」をタップすると，以下のような画面が表示されます．「サーバーアドレス」の横の入力欄をタップして vpn1.adm.u-tokyo.ac.jp と入力します．
```

## English

```diff
  Step A: Access the [App Store](https://apps.apple.com/us/app/cisco-secure-client/id1135064690) and install the Cisco Secure Client app from Cisco.
  ![](/_astro/iphone01-app-store_en.webp)
- Step B: After installation, open the Secure Client app and check if the screen shown in the first image below is displayed. If the screen is displayed, then the installation is complete. When you open the application, you may be prompted to confirm the sending of notifications as shown in the second image below. You can choose either of the options.
+ Step B: After installation, open the Cisco Secure Client app and check if the screen shown in the first image below is displayed. If the screen is displayed, then the installation is complete. When you open the application, you may be prompted to confirm the sending of notifications as shown in the second image below. You can choose either of the options.
  ![](/_astro/iphone02-setup_home_en.webp)![](/_astro/iphone03-setup_home_popup_notify_en.webp)
  Step C: Tap “Connections” on the screen after launching the application, and then tap “Add VPN Connection…” on the subsequent screen. The following screen will then appear. Tap the input field next to “Server Address” and enter vpn1.adm.u-tokyo.ac.jp.
  ⋯
  ![](/_astro/iphone06-home_disconnected_en.webp)![](/_astro/iphone07-signin_en.webp)
  Help: When the error message “You don’t have access to this” (Error Code: 53003) appears
- It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo VPN, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for MFA Use” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
+ It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use UTokyo VPN, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for Starting Your UTokyo Account” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  Troubleshooting guide: When the error message “申し訳ありませんが、サインイン中に問題が発生しました” or “Sorry, but we’re having trouble signing you in.” appears
```

[← 一覧へ](<../README.md>)
