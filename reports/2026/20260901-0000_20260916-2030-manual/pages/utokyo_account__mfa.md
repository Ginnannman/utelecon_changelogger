# UTokyo Accountにおける多要素認証の利用について

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更なし | [`/utokyo_account/mfa/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/mfa/>) | [`src/pages/utokyo_account/mfa/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_account/mfa/index.mdx>) |
| English | 変更 | [`/en/utokyo_account/mfa/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_account/mfa/>) | [`src/pages/en/utokyo_account/mfa/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_account/mfa/index.mdx>) |

## English

```diff
    - [Deleting Verification Methods](change/#delete)
  - Others
+   - [FIDO Security Keys](fido-security_key/): You can use a dedicated device called a FIDO security key as a method of identity verification.
+   - [Yubico Authenticator](yubikey-totp/): One method of identity verification that uses a computer app in conjunction with a dedicated device called a security key is the “YubiKey”—specifically, certain models of the YubiKey security key and the “Yubico Authenticator” app.
    - [Hardware Tokens](others/#hardware-token): For faculty members who are unable to register any verification methods, such as those who do not have smartphones, we offer devices called “hardware tokens” as an alternative.
    - [Use the 6-digit Code in Microsoft Authenticator to Sign In](others/#msauth-totp): If you registered “Microsoft Authenticator” app as the verification method, typically you will receive a notification for verification from the app when you sign in. However, the app offers another method for verification.
```

[← 一覧へ](<../README.md>)
