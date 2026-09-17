# UTokyo Microsoft LicenseでOfficeアプリをインストールする

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/microsoft/install/`](<https://utelecon.adm.u-tokyo.ac.jp/microsoft/install/>) | [`src/pages/microsoft/install.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/microsoft/install.mdx>) |
| English | 変更 | [`/en/microsoft/install/`](<https://utelecon.adm.u-tokyo.ac.jp/en/microsoft/install/>) | [`src/pages/en/microsoft/install.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/microsoft/install.mdx>) |

## 日本語

```diff
  - 表示された画面を確認して，以下の指示に従ってください．
    - 「Officeを使い始めるにはサインインしてください」などのダイアログが表示された場合：OfficeアプリにどのMicrosoftアカウントでもサインインしていない状態です．「アカウントにサインインまたはアカウントを作成」をクリックしてください． ![](/_astro/microsoft-install-signin-new.webp)
-   - 上記のような画面が表示されず，通常の編集画面が表示された場合：OfficeアプリになんらかのMicrosoftアカウントでサインインしている状態です．Windowsの場合は右上の人型のアイコンを、macOSの場合は左上の円形のアイコンをクリックした後，現在サインインしているアカウントを確認してください．UTokyo Accountでない別のアカウントでサインインしていた場合は「アカウントを追加する」を選択してください． ![](/_astro/microsoft-install-signin-switch.webp)
+   - 上記のような画面が表示されず，通常の編集画面が表示された場合：OfficeアプリになんらかのMicrosoftアカウントでサインインしている状態です．Windowsの場合は右上の人型のアイコンを，macOSの場合は左上の円形のアイコンをクリックした後，現在サインインしているアカウントを確認してください．UTokyo Accountでない別のアカウントでサインインしていた場合は「アカウントを追加する」を選択してください． ![](/_astro/microsoft-install-signin-switch.webp)
  - [インストール](#install)時と同様のサインイン画面が表示されるので，サインインしてください．
  - Windowsの場合，「すべてのアプリにサインインしたままにする」というダイアログが表示されることがあります．ここでの設定内容によっては，Officeアプリの利用中にエラーメッセージが発生しうることが確認されています．これを防ぐため，以下のように回答してください．
```

## English

```diff
  - Access [Microsoft 365 > Apps](https://m365.cloud.microsoft/apps/?auth=2) and sign in with your UTokyo Account (your 10-digit Common ID followed by @utac.u-tokyo.ac.jp). For detailed instructions and information on switching between Microsoft accounts, see [Signing in to Microsoft Systems with UTokyo Account](/en/microsoft/signin/).
    Help: When the error message “You don’t have access to this” (Error Code: 53003) appears
-   It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use Microsoft Office applications, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for MFA Use” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
+   It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use Microsoft Office applications, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for Starting Your UTokyo Account” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
    If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  - Click “Install apps” in the upper right corner of the screen, and then click “Microsoft 365 Apps” from the menu that appears.
```

[← 一覧へ](<../README.md>)
