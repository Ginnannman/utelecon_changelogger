# UTokyo Account多要素認証の初期設定手順

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_account/mfa/initial/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/mfa/initial/>) | [`src/pages/utokyo_account/mfa/initial/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/41648565847ebc9bd14160a8b1090829b1803beb/src/pages/utokyo_account/mfa/initial/index.mdx>) |
| English | 変更 | [`/en/utokyo_account/mfa/initial/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_account/mfa/initial/>) | [`src/pages/en/utokyo_account/mfa/initial/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/41648565847ebc9bd14160a8b1090829b1803beb/src/pages/en/utokyo_account/mfa/initial/index.mdx>) |

## 日本語

```diff
  - 「Authenticator Added」という表示に切り替わるので，「完了」を押してください．
    ![](/_astro/alt_approved.webp)
- - [多要素認証の設定ページ](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com)にアクセスしてください．
- - 「サインイン方法の追加」を押してください．
-   ![](/_astro/alt_add_method.webp)
- - 「サインイン方法の追加」欄で「Microsoft Authenticator」を押してください．
-   ![](/_astro/alt_add_method_window.webp)
+ < selection=“「Microsoft Authenticator」” />
  - 「別の認証アプリを設定する」というリンクを探して押してください．
    ![](/_astro/alt_ms_auth.webp)
```

## English

```diff
  - Install the “Microsoft Authenticator” app on your smartphone if you haven’t already done. The Android version is available in [Google Play](https://play.google.com/store/apps/details?id=com.azure.authenticator), and the iPhone version is available in [App Store](https://apps.apple.com/app/microsoft-authenticator/id983156458).
    ![](https://play-lh.googleusercontent.com/_1CV99jklLbXuun-6E7eCPR-sKKeZc602rhw_QHZz-qm7xrPdgWsJVc7NtFkkliI8No=w480-h960)
- - Open [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com).
- - Click “Add sign-in method”. ![](/_astro/alt_add_method.webp)
+ - Access the [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com) and sign in.
+ - Click “Add sign-in method”.
+   ![](/_astro/alt_add_method_en.webp)
  - For “Add a sign-in method”, select "Microsoft Authenticator".
-   ![](/_astro/alt_add_method_window.webp)
  - Click “Next” on the “Start by getting the app” screen. ![](/_astro/alt_next.webp)
  - The next procedure differs depending on the device that you are using: your smartphone (Microsoft Authenticator app has been installed) or else (PC etc.)
  ⋯
  - When "Notification approved” is appeared, click “Next”.
    ![](/_astro/alt_approved.webp)
- - Open [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com).
- - Click “Add sign-in method”. ![](/_astro/alt_add_method.webp)
+ - Access the [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com) and sign in.
+ - Click “Add sign-in method”.
+   ![](/_astro/alt_add_method_en.webp)
  - For “Add a sign-in method”, select "Microsoft Authenticator".
-   ![](/_astro/alt_add_method_window.webp)
  - Click “I want to use a different authenticator app”. ![](/_astro/alt.webp)
  - Follow the instructions until you reach the QR code page. Scan the QR code with your authenticator app and complete the setup procedure. If you want to use YubiKey and Yubico Authenticator app, see “[Instructions on how to use the Yubico Authenticator for the Multi-Factor Authentication of UTokyo Accounts](../yubikey-totp/)” page for details.
    ![](/_astro/alt_qr.webp)
- - Open [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com).
- - Click “Add sign-in method”. ![](/_astro/alt_add_method.webp)
+ - Access the [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com) and sign in.
+ - Click “Add sign-in method”.
+   ![](/_astro/alt_add_method_en.webp)
  - For “Add a sign-in method”, select the type of phone you want to add.
    You can register one number for each type of phone: "Phone", "Alternate Phone" and "Office Phone".
  ⋯
    - Alternate Phone: A substitute phone such as your home phone. Only phone call verification is available and you cannot select text.
    - Office Phone: A substitute phone of your company. Only phone call verification is available and you cannot select text. Unlike the others, you can register an extension number.
-   ![](/_astro/alt_add_method_window.webp)
  - Select the appropriate country code (+81 for Japan) and input your phone number. Also, if you chose “Phone” for the type of phone, choose to either receive a text message with a verification code (“Text a code”) or a phone call (“Call”).
    ![](/_astro/alt.webp)
```

[← 一覧へ](<../README.md>)
