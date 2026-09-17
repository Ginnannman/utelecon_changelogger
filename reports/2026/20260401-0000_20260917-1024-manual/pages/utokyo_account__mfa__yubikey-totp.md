# UTokyo Account多要素認証におけるYubico Authenticatorアプリの利用方法

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更なし | [`/utokyo_account/mfa/yubikey-totp/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/mfa/yubikey-totp/>) | [`src/pages/utokyo_account/mfa/yubikey-totp/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_account/mfa/yubikey-totp/index.mdx>) |
| English | 変更 | [`/en/utokyo_account/mfa/yubikey-totp/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_account/mfa/yubikey-totp/>) | [`src/pages/en/utokyo_account/mfa/yubikey-totp/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_account/mfa/yubikey-totp/index.md>) |

## English

```diff
  In addition to smartphone apps such as the “Google Authenticator” that are used as verification methods for the multi-factor authentication of UTokyo Accounts, there are PC applications used in conjunction with specific devices called security keys. An example of such products is the combination of the “YubiKey” security key and “Yubico Authenticator” application.
  This page provides information on how to register and sign in by using the YubiKey security key and Yubico Authenticator application as the verification method for the multi-factor authentication of UTokyo Accounts.
- YubiKey also has the ability to work in conjunction with another advanced security system “FIDO” for the multi-factor authentication. Please refer to the “[Using the FIDO Security Key for Multi-Factor Authentication of UTokyo Accounts](/utokyo_account/mfa/fido-security_key/)” (in Janpanese) for more details. Additionally, even if the YubiKey has been registered as a FIDO security key, it still can be also registered through an authentication app (which is useful as it allows you to sign in to [some systems where FIDO is not available](/utokyo_account/mfa/fido-security_key/#unsupported-system) (in Japanese)).
+ YubiKey also has the ability to work in conjunction with another advanced security system “FIDO” for the multi-factor authentication. Please refer to the “[Using the FIDO Security Key for Multi-Factor Authentication of UTokyo Accounts](/en/utokyo_account/mfa/fido-security_key/)” for more details. Additionally, even if the YubiKey has been registered as a FIDO security key, it still can be also registered through an authentication app (which is useful as it allows you to sign in to [some systems where FIDO is not available](/en/utokyo_account/mfa/fido-security_key/#unsupported-system)).
  ## Procedures to register Yubico Authenticator
  To register the combination of a YubiKey security key and Yubico Authenticator application as a verification method for the multi-factor authentication of your UTokyo Account, please follow the four-step procedure below.
  ⋯
  - Follow the instructions until you reach the QR code page. ![](/_astro/alt_qr.webp)
  ### Adding an account to Yubico Authenticator
- - To add an account to the Yubico Authenticator application, please click on the “Configure Yubikey” in the upper right corner of the screen, and press the “Add account” displayed on the screen. ![](/_astro/add_account.webp)
+ - To add an account to the Yubico Authenticator application, please click on the “Configure YubiKey” in the upper right corner of the screen, and press the “Add account” displayed on the screen. ![](/_astro/add_account.webp)
  - Press the “Scan QR code” and scan the QR code according to the instructions on your screen, and press “Save”.
    * If you are using a PC, the QR code displayed on the screen will be read in automatically and you do not need to scan the QR code with the camera of your PC. Therefore, when you do this process for the first time, it may ask you for the permission to record the screen. ![](/_astro/scan_qr.webp)
```

[← 一覧へ](<../README.md>)
