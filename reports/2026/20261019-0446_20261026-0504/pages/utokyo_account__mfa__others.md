# UTokyo Accountの多要素認証に関するその他の情報

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更なし | [`/utokyo_account/mfa/others/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/mfa/others/>) | [`src/pages/utokyo_account/mfa/others.md`](<https://github.com/utelecon/utelecon.github.io/blob/b8d968c4567728c2d7eea38f166f9c4fef58af2b/src/pages/utokyo_account/mfa/others.md>) |
| English | 変更 | [`/en/utokyo_account/mfa/others/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_account/mfa/others/>) | [`src/pages/en/utokyo_account/mfa/others.md`](<https://github.com/utelecon/utelecon.github.io/blob/b8d968c4567728c2d7eea38f166f9c4fef58af2b/src/pages/en/utokyo_account/mfa/others.md>) |

## English

```diff
  タイトル: Other Information About the Multi-Factor Authentication for UTokyo Accounts | utelecon
- 説明: Table of Contents: Hardware Tokens (for Faculty Members); Use the 6-digit Code in Microsoft Authe...
+ 説明: Table of Contents: Hardware Tokens (for Faculty Members); Using UTokyo Accounts Abroad; Use the 6...
  
  [UTokyo Account](/en/utokyo_account/) > [Multi-Factor Authentication (MFA)](/en/utokyo_account/mfa/) > Other Information
  ⋯
  ## Hardware Tokens (for Faculty Members)
  Authentication apps and phone numbers (SMS or phone calls) are the standard verification methods for MFA. However, for faculty members who are unable to register any of the verification methods, such as those who do not have smartphones, we offer a device called “hardware token” as an alternative. Please refer to [UTokyo Portal (only for faculty members)](https://univtokyo.sharepoint.com/sites/utokyoportal/wiki/d/UTokyo_Account_Token.aspx) for details.
+ ## Using UTokyo Accounts Abroad
+ When signing in to your UTokyo Account from abroad (e.g., during business trips), service availability depends on your verification method.
+ - Microsoft Authenticator
+   - You can generally sign in as usual, provided that the smartphone on which the Microsoft Authenticator app is installed is connected to the Internet. Either mobile data or Wi-Fi can be used for the Internet connection.
+   - However, on Android smartphones, signing in via standard push notifications may fail in countries or regions where communication with Google systems is restricted, as notifications are delivered using Google services. In such cases, you can still sign in using the offline method: [signing in with a 6-digit verification code](#msauth-totp), provided you have your smartphone.
+   - You can still sign in even without an Internet connection by [signing in with a 6-digit verification code](#msauth-totp), as long as you have your smartphone with you.
+ - Other Authenticator Apps
+   - You can sign in using the 6-digit code displayed in the app, provided the code can be generated.
+   - Most authenticator apps should work without an Internet connection as long as you have the smartphone with the app installed, while it depends on the app’s specifications. For example, Google Authenticator, which is introduced on the [Initial Setup Procedures for Multi-Factor Authentication (MFA)](/utokyo_account/mfa/initial/) page, functions offline.
+ - Phone Number
+   - This method is available only if your mobile plan supports international roaming at your destination, as you must be able to receive Short Message Service (SMS) messages or voice calls on your registered phone number. Please note that international roaming usually incurs charges for incoming SMS messages and voice calls.
+   - Please make sure to [add another verification method](../change/#add) before leaving the country if your phone service contract does not support international roaming at your destination.
+ - FIDO Security Key
+   - You can sign in as long as you carry your FIDO security key with you.
+ Before traveling abroad, please check your registered verification methods on the [Multi-Factor Authentication (MFA) Settings Page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com) in advance, and [update your registration](../change/) as necessary.
  ## Use the 6-digit Code in Microsoft Authenticator to Sign In
  If you are using Microsoft Authenticator for MFA, you can verify your identity by entering the 6-digit code displayed on the app instead of approving the sign-in after receiving a notification on your app (which is the standard method). This method is available even when your phone is offline and is resilient against network failure.
```

[← 一覧へ](<../README.md>)
