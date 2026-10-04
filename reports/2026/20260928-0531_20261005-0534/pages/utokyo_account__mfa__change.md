# UTokyo Account多要素認証の本人確認方法の登録変更手順

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更なし | [`/utokyo_account/mfa/change/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_account/mfa/change/>) | [`src/pages/utokyo_account/mfa/change/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/41648565847ebc9bd14160a8b1090829b1803beb/src/pages/utokyo_account/mfa/change/index.mdx>) |
| English | 変更 | [`/en/utokyo_account/mfa/change/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_account/mfa/change/>) | [`src/pages/en/utokyo_account/mfa/change/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/41648565847ebc9bd14160a8b1090829b1803beb/src/pages/en/utokyo_account/mfa/change/index.mdx>) |

## English

```diff
  ## Adding Verification Methods
  In the [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com), you can add verification methods by following the procedures given in [“Step 2: Add Alternative Verification Methods” in the “Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts” page](../initial/#alternative).
- ![](/_astro/alt_add_method.webp)
+ ![](/_astro/alt_add_method_en.webp)
  ## Changing the Default Sign-in Method
  One of your verification methods (usually the first method added) will become your “default sign-in method”. When you sign in, the system will automatically choose the default sign-in method as your verification method. The default sign-in method can be changed by following the steps below.
- - Find “Default sign-in method:” on the [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com). ![](/_astro/change_default_signin_method.webp)
+ - Find “Default sign-in method:” on the [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com).
+   ![](/_astro/alt_add_method_en.webp)
  - Click “Change” on the right of the default sign-in method.
  - For “Which method would you like to use to sign in?”, select the verification method you wish to use, and click “Confirm”.
  ## Editing Verification Methods
  The verification methods, “Phone”, “Alternate phone”, and “Office phone” can be edited by following the steps below.
- - Find the verification method you wish to edit in the list of verification methods on the [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com), and click “Change” on the right of the method. ![](/_astro/method_change.webp)
+ - Find the verification method you wish to edit in the list of verification methods on the [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com), and click “Change” on the right of the method.
+   ![](/_astro/alt_add_method_en.webp)
  - Enter your new phone number in the popup screen and click “Next”.
  - Verify your phone number (via text or call). Follow the same procedure as when adding a new phone number.
  ⋯
  ## Deleting Verification Methods
  Please follow the steps below to delete verification methods you no longer wish to use.
- - Find the method you wish to edit in the list of verification methods on the [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com), and click “Delete” on the right of it. ![](/_astro/delete_method.webp)
+ - Find the method you wish to edit in the list of verification methods on the [Security info page](https://mysignins.microsoft.com/security-info?domain_hint=univtokyo.onmicrosoft.com), and click “Delete” on the right of it.
+   ![](/_astro/alt_add_method_en.webp)
  - When “Are you sure you would like to delete this method for your account?” is displayed, click “Yes”.
  Note that if you delete all the verification methods (i.e. all authenticator apps and phones) on the list, you will be prompted to go through the initial setup procedure upon the next sign-in. (Even if “Email” and “App password” are left in the list, they do not work as verification methods.)
```

[← 一覧へ](<../README.md>)
