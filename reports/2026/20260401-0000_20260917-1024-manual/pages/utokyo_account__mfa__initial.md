# UTokyo Account多要素認証の初期設定手順

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_account/mfa/initial/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/mfa/initial/>) | [`src/pages/utokyo_account/mfa/initial/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_account/mfa/initial/index.mdx>) |
| English | 変更 | [`/en/utokyo_account/mfa/initial/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_account/mfa/initial/>) | [`src/pages/en/utokyo_account/mfa/initial/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_account/mfa/initial/index.mdx>) |

## 日本語

```diff
  - 続いて多要素認証の本人確認が行われます．本人確認方法により手順が異なりますので，画面の指示に従って操作してください．
    - Microsoft Authenticatorの場合：スマホに通知が送られ，サインイン画面に表示されている2桁の数字を入力するように求められるので，そのようにしてください．
-     ※「Microsoft Autheticator アプリを現在使用できません」の表示について
+     ※「Microsoft Authenticator アプリを現在使用できません」の表示について
      ![](/_astro/signin_approve.webp)
      画面に「Microsoft Authenticator アプリを現在使用できません」との表示が現れますが，これは，もしあなたがMicrosoft Authenticatorを使用できない状態にある場合にはここを押してくださいという旨のヘルプメッセージであり，システムがMicrosoft Authenticatorを使用できない状態にある旨のエラーメッセージではありません．
  ⋯
  ## 手順4：UTokyo Accountの利用を開始する
  最後に，UTokyo Accountの利用を開始します．この手順を行うと，以降，UTokyo Accountにサインインする際に毎回，上の手順3と同様の手順による本人確認が求められるようになります．
- なお，事務業務端末（職員向け）のリモートアクセス (Citrix Workspace) が接続中の場合，多要素認証の利用申請を行うと接続が強制的に切断されるため，あらかじめ接続を終了（サインアウト）してから以下の手順を行ってください．
  - [UTokyo Account利用者メニュー](https://utacm.adm.u-tokyo.ac.jp/UserMenu/LoginServlet)にアクセスしてください．
- - UTokyo Account（数字10桁の共通ID + @utac.u-tokyo.ac.jp）とパスワードを入力してログインしてください．
+ - UTokyo Account（数字10桁の共通ID + @utac.u-tokyo.ac.jp）とパスワードを入力してサインインしてください．
  - 左のメニューにある「UTokyo Account利用開始」を押してください． ![](/_astro/user_menu_1.webp)
  - 表示されるUTokyo Accountに関する説明をよく読んでから，下の方にある「UTokyo Accountの利用を開始する」を「はい」にして，「保存」を押してください． ![](/_astro/user_menu_2.webp)
```

## English

```diff
  - Step 2: [Add Alternative Verification Methods](#alternative)
  - Step 3: [Try Signing In](#try)
- - Step 4: [Apply for MFA Use](#apply)
+ - Step 4: [Apply for Starting Your UTokyo Account](#apply)
  Procedures on step 1 and 2 differ depending on the verification method you will register. Firstly, select verification methods to register for step 1 and 2, and then tasks to register them are shown below.
  Because the primary verification method registered on step 1 is used by default, you should register the method you use frequently for it. You may also register the same method for step 1 and 2; for example, you may register the same authenticator apps installed on your two or more smartphones, or register both your cell phone and landline.
  ⋯
  You can add your phone number and receive an SMS message or a call (voice guidance) to verify your identity. You can register a different phone number for each “Phone”, “Alternate Phone” and “Office Phone”.
  FIDO Security Key
- You can use a dedicated device called FIDO security key to authenticate. There are some systems where you cannot use it, so you have to register another method as primary and use them as alternative. For more details, see [How to use FIDO security key for Multi-Factor Authentication for UTokyo Account (in Japanese)](/utokyo_account/mfa/fido-security_key/).
+ You can use a dedicated device called FIDO security key to authenticate. There are some systems where you cannot use it, so you have to register another method as primary and use them as alternative. For more details, see [How to use FIDO security key for Multi-Factor Authentication for UTokyo Account](/en/utokyo_account/mfa/fido-security_key/).
+ Passkey
+ You can use passkeys saved in services such as “iCloud Keychain” or “Google Password Manager” to verify your identity. There are some systems where you cannot use them, so you have to register another method as primary and use them as alternatives. Please note that identity verification using passkeys is currently in preview, so the support desk may provide limited assistance. For more details, see [How to use a passkey for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/passkey/).
  Complete all the tasks from Step 1 to Step 4. After you complete the whole procedure, you will be asked to verify your identity with the registered SMS, apps, etc., whenever you sign in to your UTokyo Account. Be well aware that your UTokyo Account will be inaccessible if you lose access to every verification method (smartphone apps, phone number, etc.).
  ## Step 1: Set Up the First Verification Method
  ⋯
  At this time, we strongly recommend registering multiple verification methods to avoid being locked out again if one method becomes unusable.
  The procedure of step 2 differs depending on the verification method you selected. Click the following panels to show the procedure to set up the verification method.
- Microsoft Authenticator Other Authenticator Apps Phone Number FIDO Security Key
+ Microsoft Authenticator Other Authenticator Apps Phone Number FIDO Security Key Passkey
  Select an verification method you will register.
- Microsoft Authenticator “Microsoft Authenticator” is an MFA authentication application provided by Microsoft. Using this app is convenient since UTokyo Account’s MFA adopts Microsoft’s system. If you have more than one phone, you can register the same authenticator apps on these phones, making them two or more verification methods. Other Authenticator Apps If you already use other authenticator apps, such as “Google Authenticator”, you may also use them for your UTokyo Account authentication. If you have more than one phone, you can register the same authenticator apps on these phones, making them two or more verification methods. Phone Number You can add your phone number and receive an SMS message or a call (voice guidance) to verify your identity. You can register a different phone number for each “Phone”, “Alternate Phone” and “Office Phone”. FIDO Security Key You can use a dedicated device called FIDO security key to authenticate. There are some systems where you cannot use it, so you have to register another method as primary and use them as alternative. For more details, see [How to use FIDO security key for Multi-Factor Authentication for UTokyo Account (in Japanese)](/utokyo_account/mfa/fido-security_key/).
+ Microsoft Authenticator “Microsoft Authenticator” is an MFA authentication application provided by Microsoft. Using this app is convenient since UTokyo Account’s MFA adopts Microsoft’s system. If you have more than one phone, you can register the same authenticator apps on these phones, making them two or more verification methods. Other Authenticator Apps If you already use other authenticator apps, such as “Google Authenticator”, you may also use them for your UTokyo Account authentication. If you have more than one phone, you can register the same authenticator apps on these phones, making them two or more verification methods. Phone Number You can add your phone number and receive an SMS message or a call (voice guidance) to verify your identity. You can register a different phone number for each “Phone”, “Alternate Phone” and “Office Phone”. FIDO Security Key You can use a dedicated device called FIDO security key to authenticate. There are some systems where you cannot use it, so you have to register another method as primary and use them as alternative. For more details, see [How to use FIDO security key for Multi-Factor Authentication for UTokyo Account](/en/utokyo_account/mfa/fido-security_key/). Passkey You can use passkeys saved in services such as “iCloud Keychain” or “Google Password Manager” to verify your identity. There are some systems where you cannot use them, so you have to register another method as primary and use them as alternatives. Please note that identity verification using passkeys is currently in preview, so the support desk may provide limited assistance. For more details, see [How to use a passkey for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/passkey/).
  - Install the “Microsoft Authenticator” app on your smartphone if you haven’t already done. The Android version is available in [Google Play](https://play.google.com/store/apps/details?id=com.azure.authenticator), and the iPhone version is available in [App Store](https://apps.apple.com/app/microsoft-authenticator/id983156458).
    ![](https://play-lh.googleusercontent.com/_1CV99jklLbXuun-6E7eCPR-sKKeZc602rhw_QHZz-qm7xrPdgWsJVc7NtFkkliI8No=w480-h960)
  ⋯
    ![](/_astro/alt.webp)
  - You will receive a text or call on your phone to verify your identity. If you selected “Text a code”, you will receive an SMS message with a 6-digit verification code. Input the code in the setup page. If you selected “Call”, you will receive a phone call asking you press the pound key (#) on your phone to verify your identity. Press the key and end the call. (To display the pound key on your smartphone during the call, press the “keypad” button.)
- For details on the FIDO security key registration procedure, please refer to [How to use FIDO security key for Multi-Factor Authentication for UTokyo Account (in Japanese)](/utokyo_account/mfa/fido-security_key/).
+ For details on the FIDO security key registration procedure, please refer to [How to use FIDO security key for Multi-Factor Authentication for UTokyo Account](/en/utokyo_account/mfa/fido-security_key/).
+ For the passkey registration procedure, refer to the [Using Passkeys for UTokyo Account Multi-Factor Authentication (MFA)](/utokyo_account/mfa/passkey/) page.
  In the screen that appears after clicking “Add method”, “App password” and “Email” will also show up as choices for “Which method would you like to add?”. However, please be aware that these cannot be used for identity verification upon sign-in (they are for other purposes).
  The setup process is not over. Continue to Step 3.
  ⋯
  The setup process is not over. Continue to Step 4.
  *If you could not complete this Step 3 properly, do not proceed to Step 4. Contact the [Technical Support Desk](/en/support/).
- ## Step 4: Apply for starting your UTokyo Account
+ ## Step 4: Apply for Starting Your UTokyo Account
  The final step is to submit an application for starting your UTokyo Account. Once you submit this application, you will be asked to verify your identity with the process in Step 3 whenever you sign in to your UTokyo Account.
- If the remote-access environment (Citrix Workspace) of office work devices for administrative staff is being used, it will be disconnected once you apply for the MFA. Before moving on to the following procedures, please make sure you are signed out.
  - Access the [UTokyo Account User Menu](https://utacm.adm.u-tokyo.ac.jp/UserMenu/LoginServlet).
  - Sign in with your UTokyo Account if prompted.
```

[← 一覧へ](<../README.md>)
