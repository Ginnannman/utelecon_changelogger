# UTokyo Account多要素認証の本人確認方法再登録について

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_account/mfa/reregister/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/mfa/reregister/>) | [`src/pages/utokyo_account/mfa/reregister/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_account/mfa/reregister/index.mdx>) |
| English | 変更 | [`/en/utokyo_account/mfa/reregister/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_account/mfa/reregister/>) | [`src/pages/en/utokyo_account/mfa/reregister/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_account/mfa/reregister/index.md>) |

## 日本語

```diff
  #### 専用の申請サイトで申請する
  専用の申請サイトから申請を行うこともできます．この申請サイトでは，本人確認のため，ICカード学生証またはICカード職員証の写真をアップロードする必要があります．ICカード学生証・ICカード職員証以外は受け付けられませんので，お持ちでない場合は，上で説明している学部・研究科等の窓口での申請を利用してください．
+ ※アップロードできる写真の上限サイズは1.9MBです．これを超える場合はエラーが発生するため，写真のサイズを小さくしてから申請を行ってください．
  ※担当者が内容を確認の上で対応するため，夜間・土日祝日の場合は翌営業日以降の対応となることをご了承ください．
  [本人確認方法の再登録申請サイト](https://identification.adm.u-tokyo.ac.jp/ident/)
```

## English

```diff
  This page describes the following procedures regarding [UTokyo Account Multi-Factor Authentication (MFA)](../): “Reregistering Verification Method” for MFA.
  In case you lose access to all verification methods and are unable to sign in to the UTokyo Account, we can take measures to allow you to retry the registration process for MFA all over again and keep using MFA. Check if any of your verification methods can be used beforehand as described below. Please follow the procedures only if all verification methods are no longer available.
- For security reasons, UTokyo Account mandates the use of multi-factor authentication. If you have a compelling reason to use multi-factor authentication, please contact our [Support Desk](/en/support/email-form/).
+ For security reasons, UTokyo Account mandates the use of multi-factor authentication. If you have a compelling reason not to use multi-factor authentication, please contact our [Support Desk](/en/support/email-form/).
  The “Reregistering Verification Method” procedure was renamed from the “Resetting” procedure in September 2022.
  ## Step 1: Check If Any Other Verification Methods Are Available
  ⋯
  - You will now be able to sign in to your UTokyo Account using the newly registered verification method.
  At this time, we strongly recommend registering multiple verification methods to avoid being locked out again if one method becomes unusable.
- ### Register by Application
+ ### Reregister by Application
  - There are three ways to apply for the reregistration of your verification method. Please refer to the explanations and apply using the method available to you.
    - [Apply using the dedicated Microsoft Form (if you can sign in to your UTokyo Account)](.#ms-form)
  ⋯
  If you can sign in to your UTokyo Account, you can apply via the Microsoft Form for reregistration.
  Please note that your application will not be processed until the next business day or later if you apply at night or on weekends and holidays because your application will be reviewed by our staff before processing.
- [Application form for reregisteration of verification method of MFA use](https://forms.office.com/r/NS4sh40RjR) (in Japanese)
+ [Application form for reregistration of verification method of MFA use](https://forms.office.com/r/NS4sh40RjR) (in Japanese)
  You need to sign in with MFA to access this form. If it is impossible for you, you cannot access this form. Use the other procedures described below.
  Situations where it is acceptable to submit the application form
  We assume that you can apply for the procedure via this form in the following cases.
  - If the trouble occurred during the initial setup of MFA and you need to reregister your verification method
-   - It may be possible to sign in and access Microsoft Forms during the initial setup process, as MFA is not required for sign-in until Step 4 (Apply for MFA Use) of the initial setup.
+   - It may be possible to sign in and access Microsoft Forms during the initial setup process, as MFA is not required for sign-in until Step 4 (Apply for Starting Your UTokyo Account) of the initial setup.
  #### Apply at your college/faculty/graduate school office
  You can apply for reregistration at the relevant office of your faculty/graduate school (the academic office for students, and the personnel department for faculty and staff members)
  ⋯
  - [Please refer to this page if you are in charge of the relevant office of faculty/graduate school (only for faculty members)](https://univtokyo.sharepoint.com/sites/utokyoportal/wiki/d/MFA_Reset_Request.aspx).
  #### Apply via the dedicated application website
- You can apply for reregistration via the application website. You are required to upload the photo of your student / staff ID card to verify your identity on this website.
+ You can apply for reregistration via the application website. You are required to upload the photo of your student / staff ID card to verify your identity on this website. The maximum file size for photo uploads is 1.9MB. If your file exceeds this limit, an error will occur. Please reduce the image size before submitting your application.
  Please note that your application will not be processed until the next business day or later if you apply at night or on weekends and holidays because your application will be reviewed by our staff before processing.
- [Application website for reregisteration of verification method of MFA use](https://identification.adm.u-tokyo.ac.jp/ident/)
+ [Application website for reregistration of verification method of MFA use](https://identification.adm.u-tokyo.ac.jp/ident/)
  Access the link above and sign in with your UTokyo Account. MFA is not necessary when signing in, and only the username and password are required.
```

[← 一覧へ](<../README.md>)
