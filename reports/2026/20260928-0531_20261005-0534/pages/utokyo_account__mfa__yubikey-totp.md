# UTokyo Account多要素認証におけるYubico Authenticatorアプリの利用方法

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_account/mfa/yubikey-totp/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/mfa/yubikey-totp/>) | [`src/pages/utokyo_account/mfa/yubikey-totp/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/41648565847ebc9bd14160a8b1090829b1803beb/src/pages/utokyo_account/mfa/yubikey-totp/index.mdx>) |
| English | 変更 | [`/en/utokyo_account/mfa/yubikey-totp/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_account/mfa/yubikey-totp/>) | [`src/pages/en/utokyo_account/mfa/yubikey-totp/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/41648565847ebc9bd14160a8b1090829b1803beb/src/pages/en/utokyo_account/mfa/yubikey-totp/index.md>) |

## 日本語

```diff
  #### 既に1個目の本人確認方法を登録している場合
  既に他の本人確認方法を1個目の本人確認方法として登録済みであり，Yubico Authenticatorアプリを追加の本人確認方法として登録する場合，手順は以下の通りです．
- - [多要素認証の設定ページ](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com)にアクセスしてください．
- - 「サインイン方法の追加」を押してください．
-   ![](/_astro/alt_add_method.webp)
- - 「サインイン方法の追加」欄で「Microsoft Authenticator」を押してください．
-   ![](/_astro/alt_add_method_window.webp)
+ < selection=“「Microsoft Authenticator」” />
  - 「別の認証アプリを設定する」というリンクを探して押してください．
    ![](/_astro/alt_ms_auth.webp)
  ⋯
  ※メールアドレスの登録について
  1個目の本人確認方法としてYubico Authenticatorアプリを登録する場合は，コードの入力テストの後にメールアドレスの入力を求められます．なるべくECCSクラウドメール以外のメールアドレスを入力してください．続いてそのメールアドレスに送られてくる「コード」（6桁の数字）を入力するよう求められるので，そのようにしてください．![](/_astro/first_email.webp)
- 本人確認方法の登録を終えた後，必ず「[UTokyo Account多要素認証の初期設定手順](initial/)」の手順4までの全ての作業を行い，多要素認証を有効化してください．
+ 本人確認方法の登録を終えた後，必ず「[UTokyo Account多要素認証の初期設定手順](/utokyo_account/mfa/initial/)」の手順4までの全ての作業を行い，多要素認証を有効化してください．
  ## Yubico Authenticatorでのサインイン手順
  UTokyo Accountでサインイン時（パスワード入力後）に，デフォルトの本人確認方法で多要素認証の本人確認を行う画面が表示されますが，その画面で以下のように操作してください．
```

## English

```diff
  Regarding the registration of your email address
  If you register Yubico Authenticator application as the first verification method, you will be prompted to enter your email address after completing the code input test. Please enter an email address OTHER THAN your ECCS Cloud Email if possible, and click “Next”. Enter the 6-digit code sent to your email address, and click “Next”. ![](/_astro/first_email.webp)
- Once you have completed the registration for the verification method, make sure to follow all the steps up to step 4 in the “[Initial Setup Procedure of Multi-Factor Authentication for UTokyo Accounts](initial/)” and enable Multi-Factor Authentication.
+ Once you have completed the registration for the verification method, make sure to follow all the steps up to step 4 in the “[Initial Setup Procedure of Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” and enable Multi-Factor Authentication.
  ### Procedures of signing in Yubico Authenticator
  - Once you sign in to your UTokyo Account (after you enter your password), the screen for the default multi-factor authentication verification method will be displayed. Please click on the “Having troubles? Sign in another way” or “I can’t use my Microsoft Authenticator app right now”.
```

[← 一覧へ](<../README.md>)
