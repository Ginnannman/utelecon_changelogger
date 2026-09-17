# UTokyo Account多要素認証におけるFIDOセキュリティキーの利用方法

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更なし | [`/utokyo_account/mfa/fido-security_key/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/mfa/fido-security_key/>) | [`src/pages/utokyo_account/mfa/fido-security_key/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_account/mfa/fido-security_key/index.mdx>) |
| English | 変更 | [`/en/utokyo_account/mfa/fido-security_key/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_account/mfa/fido-security_key/>) | [`src/pages/en/utokyo_account/mfa/fido-security_key/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_account/mfa/fido-security_key/index.md>) |

## English

```diff
  [UTokyo Account](/en/utokyo_account/) > [Multi-Factor Authentication (MFA)](/en/utokyo_account/mfa/) > How to use FIDO Security Keys
  # How to use FIDO Security Keys for UTokyo Account Multi-factor Authentication
- Starting from March 12, 2024, [using the FIDO security key with multi-factor authentication for UTokyo Account will be made more convenient.](/en/notice/2024/02-utac-auth-improvement/).
+ Starting from March 12, 2024, [using the FIDO security key with multi-factor authentication for UTokyo Account will be made more convenient.](/en/notice/2024/02-utac-auth-improvement/)
  ## Introduction
  This page explains how to use FIDO security keys for multi-factor authentication for UTokyo Accounts, including precautions, registration, and usage. FIDO (Fast IDentity Online) is a new technology that is being promoted to improve the security when signing-in for online services. It is a sign-in method that does not share confidential information such as passwords and PINs with servers, thus reducing the risk of information leakage, while allowing a smooth operation without requiring the use of applications other than a browser.
- FIDO can be classified into two main types: one that uses a dedicated device called a security key, and another that uses a passkey using information stored on a PC or smartphone. However, the UTokyo Account’s multi-factor authentication does not currently support FIDO passkeys, but only security keys such as YubiKey. Therefore, please purchase and use your own security key. Please note that the security keys that can be used are those compatible with the ‘FIDO 2’ standard
+ FIDO can be classified into two main types: one that uses a dedicated device called a security key, and another that uses a passkey using information stored on a PC or smartphone. However, the UTokyo Account’s multi-factor authentication does not currently support FIDO passkeys, but only security keys such as YubiKey. Therefore, please purchase and use your own security key. Please note that the security keys that can be used are those compatible with the ‘FIDO 2’ standard.
  ## Unavailability for some OS or browsers combinations
  FIDO is not available for some combinations of operating systems and browsers, such as Google Chrome on Android or Firefox on Linux. As of May 2024, FIDO is available for the following OS and browser combinations:
```

[← 一覧へ](<../README.md>)
