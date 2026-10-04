# UTokyo Account多要素認証におけるFIDOセキュリティキーの利用方法

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_account/mfa/fido-security_key/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/mfa/fido-security_key/>) | [`src/pages/utokyo_account/mfa/fido-security_key/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/41648565847ebc9bd14160a8b1090829b1803beb/src/pages/utokyo_account/mfa/fido-security_key/index.mdx>) |
| English | 変更 | [`/en/utokyo_account/mfa/fido-security_key/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_account/mfa/fido-security_key/>) | [`src/pages/en/utokyo_account/mfa/fido-security_key/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/41648565847ebc9bd14160a8b1090829b1803beb/src/pages/en/utokyo_account/mfa/fido-security_key/index.mdx>) |

## 日本語

```diff
  [UTokyo Account](/utokyo_account/) > [多要素認証の利用について](/utokyo_account/mfa/) > FIDOセキュリティキーの利用方法
  # UTokyo Account多要素認証におけるFIDOセキュリティキーの利用方法
- 2024年3月12日（予定）から，UTokyo Accountの多要素認証で[さらに便利にFIDOセキュリティキーを利用できるようになります](/notice/2024/02-utac-auth-improvement/)．
+ 2024年3月12日（予定）から，UTokyo Accountの多要素認証で[さらに便利にFIDOセキュリティキーを利用できるようになりました](/notice/2024/02-utac-auth-improvement/)．
  ## はじめに
  このページでは，UTokyo Accountの多要素認証にFIDOセキュリティキーを利用する方法について，注意事項や登録方法，利用方法について説明しています．FIDO（Fast IDentity Online）とは，オンラインサービスでのサインインのセキュリティ向上のために普及が進められている新しい技術の一つであり，パスワードやPINのような秘密情報をサーバーと共有せずにサインインを行うため情報漏洩のリスクが低く，ブラウザ以外にアプリなどを必要とせずスムーズに操作できる点で利便性が高いサインイン方法です．
```

## English

```diff
  ## FIDO Security Key Registration Procedure
  It is assumed that the FIDO security key will be registered as the second or subsequent verification method. If you are using the multi-factor authentication for the first time, please follow the procedure described in “[Step 1: Set Up the First Verification Method” in the “Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/#first)”section, and then register a FIDO security key as the additional verification method.
- - Access the [Security info page](https://mysignins.microsoft.com/security-info) and sign in.
- - Click on “Add sign-in method”. ![](/_astro/add_signin_method.webp)
- - Click on “Choose a method”, and from the choices that appear, click on “Security Key”, followed by “Add”. ![](/_astro/select_security_key.webp)
- - When adding a security key, you will be prompted to choose either a ‘USB device’ or an ‘NFC device’. Therefore, please click on the appropriate option. ![](/_astro/select_connection_method.webp)
- - When the dialogue box displaying “Have your key ready” appears, please click “Next”. ![](/_astro/prepare_key.webp)
+ - Access the [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com) and sign in.
+ - Click “Add sign-in method”.
+   ![](/_astro/alt_add_method_en.webp)
+ - For “Add a sign-in method”, select Passkey.
+   ![](/_astro/alt_add_method_window_en.webp)
+ - When the “Sign in faster with your face, fingerprint, or PIN” screen appears, click Next. ![](/_astro/passkey_prompt_en.webp)
+ - The screen will transition to “Setting up your passkey”. Click Next (it may also proceed to the next screen automatically). ![](/_astro/passkey_setup.webp)
  - Follow the on-screen instructions to complete the security key setup. Specifically, you will be asked to add the security key, set a PIN or biometric authentication, or tap the security key.
  - After setting up the security key, give a name to the security key. ![](/_astro/name_security_key.webp)
  *FIDO security keys cannot be set as the “default sign-in method”. Therefore, for signing in, you must first set another verification method as the “default sign-in method” and then select the FIDO security key as the additional verification method.
  ## How to sign in with a FIDO security key
- - When signing into your UTokyo Account (and after entering your password), you will be prompted to verify your identification using the multi-factor authentication with the default verification method. Click on the “Sign in with a different method” or “I can’t use my Microsoft Authenticator app right now” link. ![](/_astro/signin_other_method.webp)
- - When the screen to select a different authentication method appears, please click on the “Face, fingerprint, PIN or security key” option. ![](/_astro/signin_security_key.webp)
+ - When signing into your UTokyo Account (and after entering your password), you will be prompted to verify your identification using the multi-factor authentication with the default verification method. Click on the “Sign in with a different method” or “I can’t use my Microsoft Authenticator app right now” link.
+   ![](/_astro/signin_other_method.webp)
+ - When the screen to select a different authentication method appears, please click on the "Face, fingerprint, PIN or security key" option.
+   ![](/_astro/signin_security_key.webp)
  - Follow the instructions on the screen to complete actions such as entering a PIN, biometric authentication, or tapping the security key. After these steps, the sign-in process will be completed.
  *If you have trouble signing in, please refer to “[If you cannot sign in using a FIDO security key](#unsupported-os-browser)”.
```

[← 一覧へ](<../README.md>)
