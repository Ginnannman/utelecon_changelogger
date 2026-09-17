# AndroidでUTokyo Wi-Fiを利用する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_wifi/android/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_wifi/android/>) | [`src/pages/utokyo_wifi/android.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_wifi/android.mdx>) |
| English | 変更 | [`/en/utokyo_wifi/android/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_wifi/android/>) | [`src/pages/en/utokyo_wifi/android.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_wifi/android.mdx>) |

## 日本語

```diff
  #### 補足
  - 「CA証明書」欄で「システム証明書を使用」を選択できない場合や，選択してもうまくいかない場合は，「初回使用時に信頼する」を選択してみてください．
- - 「ID」欄と「パスワード」欄には、UTokyo Wi-FiアカウントのユーザーIDとパスワードをそれぞれ入力してください．UTokyo Accountの共通ID・パスワードではありません．ユーザーIDとパスワードは，「[準備編](#issue-account)」の手順で受け取った通知メールから確認できるほか，申請直後であれば「UTokyo Wi-Fiアカウントメニュー」の申請完了画面にも表示されています．
+ - 「ID」欄と「パスワード」欄には、UTokyo Wi-FiアカウントのユーザーIDとパスワードをそれぞれ入力してください．UTokyo AccountのID・パスワードではありません．ユーザーIDとパスワードは，「[準備編](#issue-account)」の手順で受け取った通知メールから確認できるほか，申請直後であれば「UTokyo Wi-Fiアカウントメニュー」の申請完了画面にも表示されています．
  - 上の表に掲げた以外の設定項目は，必要に応じて設定してください．特にお好みがなければ，初期設定のままでかまいません．
  ## うまくいかないときは
```

## English

```diff
  [UTokyo Wi-Fi](/en/utokyo_wifi/) > Using UTokyo Wi-Fi on Android
  # Using UTokyo Wi-Fi on Android
- If you plan to issue a UTokyo Wi-Fi account and use UTokyo Wi-Fi or eduroam after March 1, 2024, please refer to “[UTokyo Wi-Fi Account Usage in AY2024](/notice/2024/02-wifi/)” (in Japanese).
  This page provides the detailed procedures on how to use the UTokyo Wi-Fi on Android devices.
  UTokyo Wi-Fi is a Wi-Fi service available to members of the University of Tokyo for educational and research purposes. Please refer to [UTokyo Wi-Fi](/en/utokyo_wifi/) page first, which summarizes the general instructions for using the UTokyo Wi-Fi. If you still need the detailed instructions for Android devices, please refer to this page.
- During configuration and while in operation, different content and procedures may be displayed in the Wi-Fi settings even for the same kind of OS. This page was created based on the behavior confirmed for some specific （Android 13 with Pixel 6a） available at the time of creation of this page. Therefore, when necessary, please read the content and procedures for the respective device and OS version.
+ During configuration and while in operation, different content and procedures may be displayed in the Wi-Fi settings even for the same kind of OS. This page was created based on the behavior confirmed for some specific (Android 13 with Pixel 6a) available at the time of creation of this page. Therefore, when necessary, please read the content and procedures for the respective device and OS version.
  ## Preparation: Apply for the UTokyo Wi-Fi account
  For first-time access or an account reissue, please go back to the main page of the UTokyo Wi-Fi and follow Step 2 in “[Steps to start using the service](/en/utokyo_wifi/#initial-setup)” to issue an account.
  ⋯
  ## Procedures on Android devices
  ### Step 1：Enable the Wi-Fi function in the “Settings” of your device
- In settins find “Internet” in the “Network & Internet” menu and turn on the Wi-Fi function. Note that the names in the actual menu may vary depending on the specific model. Find the corresponding settings of the proper category as needed. Likewise, in the following procedures, please read the respective content and procedures when necessary.
+ In settings find “Internet” in the “Network & Internet” menu and turn on the Wi-Fi function. Note that the names in the actual menu may vary depending on the specific model. Find the corresponding settings of the proper category as needed. Likewise, in the following procedures, please read the respective content and procedures when necessary.
  ![](/_astro/android-turnon1.webp)![](/_astro/android-turnon2.webp)![](/_astro/android-turnon3.webp)![](/_astro/android-turnon4.webp)
  ### Step 2: Select the SSID of connecting destination from the SSID list
  ⋯
  | EAP method | Select “PEAP” |
  | Phase 2 Authentication | Select “MSCHAPV2” |
- | Certificate authority | 「Select “Use system certificate” |
+ | Certificate authority | Select “Use system certificate” |
  | Online Certificate Verification | Select “Do not verify” or “Request the certificate status” |
  | Domain | Enter u-tokyo.ac.jp |
  ⋯
  ![](/_astro/android-createprofile.webp)
  #### Supplement
- - If you cannot select “Use the system certificate” in the “CA certificate”, or it does not work even you selected it, try selecting “Trust on the first use”
- - Enter the user ID and password for the UTokyo account into the fields of “ID” and “Password”. Note that they are not the regular ID and password for the UTokyo Account. You can check the user ID and password in the notification email described in the ”Preparation” step or the screen of the completed application.
+ - If you cannot select “Use the system certificate” in the “CA certificate”, or it does not work even if you selected it, try selecting “Trust on the first use”
+ - Enter the user ID and password for the UTokyo Wi-Fi account into the fields of “ID” and “Password”. Note that they are not the 10-digit Common ID and password for the UTokyo Account. You can check the user ID and password in the notification email described in the ”[Preparation](#issue-account)” step or the screen of the completed application.
  - If there are any setting items other than mentioned above, please configure them as needed. If you have no particular preferences, you can leave the default settings.
  ## Troubleshooting guide
- - Intermittent connection happens when the signal is weak. Try changing your location and then attempt to connect again.
- - Enter the user ID for the UTokyo Wi-Fi without skipping the u at the beginning and @wifi.u-tokyo.ac.jp at the end.
- - Make sure you enter all the symbols contained in the password correctly. Try to enter it by copying and pasting it from the notification email. When you copy and paste from the notification email, avoid adding a space before the password.
- - If you do not know your user ID or password, please go back to [the main page of UTokyo Wi-Fi](/en/utokyo_wifi/) and follow Step 2 in “Steps to start using the service” to reissue your account.
- - If you have applied for an account issue more than once, all except the last application will be invalid. When connectiong, only the account displayed in [UTokyo Wi-Fi Account Menu](https://acm.wifi.adm.u-tokyo.ac.jp/secure/user_applies/index/1/) is valid.
- - Errors may occur when the software on your device is not up dated. Please update the OS and then try from Step 2 again.
- - If Step 4 doesn’t work, retry Step 3 and restart your device, and then try Step 4 once more.
- If the issue is still not solved, please consult the [Technical Support Desk](/en/support/)
- However, if you find yourself in a situation where you are consistently (or frequently) unable to connect only at a specific location, you can also contact the person in charge of managing the facility. For contact information, please check the “[Departmental Contact for UTokyo Wi-Fi](https://univtokyo.sharepoint.com/sites/utokyoaccount/SitePages/utokyo_wifi_department_contact.aspx)” page (UTokyo Account sign-in required).
+ If you experience any problems when using UTokyo Wi-Fi, please refer to the following page. It also provides detailed information on how to make inquiries. [Troubleshooting UTokyo Wi-Fi](/en/utokyo_wifi/trouble_shooting/)
```

[← 一覧へ](<../README.md>)
