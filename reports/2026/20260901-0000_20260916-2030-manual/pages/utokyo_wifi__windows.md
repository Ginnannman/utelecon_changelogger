# WindowsでUTokyo Wi-Fiを利用する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更なし | [`/utokyo_wifi/windows/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_wifi/windows/>) | [`src/pages/utokyo_wifi/windows.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_wifi/windows.mdx>) |
| English | 変更 | [`/en/utokyo_wifi/windows/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_wifi/windows/>) | [`src/pages/en/utokyo_wifi/windows.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_wifi/windows.mdx>) |

## English

```diff
  [UTokyo Wi-Fi](/en/utokyo_wifi/) > Using UTokyo Wi-Fi on Windows
  # Using UTokyo Wi-Fi on Windows
- If you plan to issue a UTokyo Wi-Fi account and use UTokyo Wi-Fi or eduroam after March 1, 2024, please refer to “[UTokyo Wi-Fi Account Usage in AY2024](/en/notice/2024/02-wifi/)”.
  This page provides the detailed procedures on how to use the UTokyo Wi-Fi on terminal of Windows.
  UTokyo Wi-Fi is a Wi-Fi service available to members of the University of Tokyo for educational and research purposes. Please refer to [UTokyo Wi-Fi](/en/utokyo_wifi/) page first, which summarizes the general instructions for using the UTokyo Wi-Fi. If you still need the detailed instructions for terminal of Windows, please refer to this page.
  ⋯
  ![](/_astro/windows11-createprofile.webp)
  #### Supplement
- - Enter the user ID and password for the UTokyo Wi-Fi account into the fields of “User name” and “Password”. Note that they are not the regular ID and password for the UTokyo Account. You can check the user ID and password in the notification email described in the ”Preparation” step or the screen of the completed application.
+ - Enter the user ID and password for the UTokyo Wi-Fi account into the fields of “User name” and “Password”. Note that they are not the 10-digit Common ID and password for the UTokyo Account. You can check the user ID and password in the notification email described in the ”[Preparation](#issue-account)” step or the screen of the completed application.
  - If there are any setting items other than mentioned above, please configure them as needed. If you have no particular preferences, you can leave the default settings.
  - During the connecting operation, a screen asking if you trust the certificate may appear. To verify whether the certificate is correct, compare the “server fingerprint” of the displayed certificate with the fingerprint listed in “[Connect Configuration](../#connect-configuration)”. If they match, trust the certificate.
    - In addition, there are two types of fingerprints (SHA-1 and SHA-256) listed on [Connect Configuration](../#connect-configuration); matching one type will suffice
  ## Troubleshooting guide
- - Intermittent connection happens when the signal is weak. Try changing your location and then attempt to connect again.
- - Enter the user ID for the UTokyo Wi-Fi without skipping the u at the beginning and @wifi.u-tokyo.ac.jp at the end.
- - Make sure you enter all the symbols contained in the password correctly. Try to enter it by copying and pasting it from the notification email. When you copy and paste from the notification email, avoid adding a space before the password.
- - If you do not know your user ID or password, please go back to [the main page of UTokyo Wi-Fi](/en/utokyo_wifi/) and follow Step 2 in “Steps to start using the service” to reissue your account.
- - If you have applied for an account issue more than once, all except the last application will be invalid. When connecting, only the account displayed in [UTokyo Wi-Fi Account Menu](https://acm.wifi.adm.u-tokyo.ac.jp/secure/user_applies/index/1/) is valid.
- - Errors may occur when the software on your device is not updated. Please update the OS and then try from Step 2 again.
- - If Step 4 doesn’t work, retry Step 3 and restart your device, and then try Step 4 once more.
- If the issue is still not solved, please consult the [Technical Support Desk](/en/support/)
- However, if you find yourself in a situation where you are consistently (or frequently) unable to connect only at a specific location, you can also contact the person in charge of managing the facility. For contact information, please check the “[Departmental Contact for UTokyo Wi-Fi](https://univtokyo.sharepoint.com/sites/utokyoaccount/SitePages/utokyo_wifi_department_contact.aspx)” page (UTokyo Account sign-in required).
+ If you experience any problems when using UTokyo Wi-Fi, please refer to the following page. It also provides detailed information on how to make inquiries. [Troubleshooting UTokyo Wi-Fi](/en/utokyo_wifi/trouble_shooting/)
```

[← 一覧へ](<../README.md>)
