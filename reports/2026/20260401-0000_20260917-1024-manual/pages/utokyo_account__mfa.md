# UTokyo Accountにおける多要素認証の利用について

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_account/mfa/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/mfa/>) | [`src/pages/utokyo_account/mfa/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_account/mfa/index.mdx>) |
| English | 変更 | [`/en/utokyo_account/mfa/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_account/mfa/>) | [`src/pages/en/utokyo_account/mfa/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_account/mfa/index.mdx>) |

## 日本語

```diff
  - 各種の本人確認方法
    - [FIDOセキュリティキーの利用方法](fido-security_key/)：FIDOセキュリティキーと呼ばれる専用の機器を用いる本人確認方法について説明します．
-   - [Yubico Authenticatorアプリの利用方法](yubikey-totp/)：セキュリティキーと呼ばれる専用の機器と連携させて利用するパソコンのアプリを用いる本人確認方法について，「YubiKey」セキュリティキーの一部のモデルと「Yubico Authenticator」アプリ
+   - [Yubico Authenticatorアプリの利用方法](yubikey-totp/)：セキュリティキーと呼ばれる専用の機器と連携させて利用するパソコンのアプリを用いる本人確認方法について，「YubiKey」セキュリティキーの一部のモデルと「Yubico Authenticator」アプリを例に説明します．
    - [ハードウェアトークンの貸出について（教職員向け）](others/#hardware-token)：スマートフォンを持っていないなどの理由で本人確認方法が登録できない教職員向けに，代わりに本人確認方法として登録できる「ハードウェアトークン」という専用の機器の貸出について説明します．
    - [Microsoft Authenticatorで6桁のコードを使ってサインインする方法](others/#msauth-totp)：本人確認方法として「Microsoft Authenticator」アプリを登録した場合に，通知を受け取る標準的な手順とは異なる手順で本人確認を行う方法について説明します．
```

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
