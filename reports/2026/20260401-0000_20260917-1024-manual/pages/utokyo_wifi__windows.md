# WindowsでUTokyo Wi-Fiを利用する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更なし | [`/utokyo_wifi/windows/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_wifi/windows/>) | [`src/pages/utokyo_wifi/windows.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_wifi/windows.mdx>) |
| English | 変更 | [`/en/utokyo_wifi/windows/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_wifi/windows/>) | [`src/pages/en/utokyo_wifi/windows.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_wifi/windows.mdx>) |

## English

```diff
  [UTokyo Wi-Fi](/en/utokyo_wifi/) > Using UTokyo Wi-Fi on Windows
  # Using UTokyo Wi-Fi on Windows
- If you plan to issue a UTokyo Wi-Fi account and use UTokyo Wi-Fi or eduroam after March 1, 2024, please refer to “[UTokyo Wi-Fi Account Usage in AY2024](/notice/2024/02-wifi/)” (in Japanese).
  This page provides the detailed procedures on how to use the UTokyo Wi-Fi on terminal of Windows.
  UTokyo Wi-Fi is a Wi-Fi service available to members of the University of Tokyo for educational and research purposes. Please refer to [UTokyo Wi-Fi](/en/utokyo_wifi/) page first, which summarizes the general instructions for using the UTokyo Wi-Fi. If you still need the detailed instructions for terminal of Windows, please refer to this page.
  ⋯
  ## Procedures for Windows
  ### Step 1: Enable the Wi-Fi function in the taskbar
- Select the globe icon in the taskbar, and then select the fan-shaped “Wi-Fi” icon to enable the Wi-Fi function. If there is only the fan-shaped “Wi-Fi” icon but no globe icon, simply select the former. ![](/_astro/windows10-turnon-globe.webp) ![](/_astro/windows10-turnon-sector.webp)
+ Select the globe icon in the taskbar, and then select the “>” icon next to fan-shaped “Wi-Fi” icon to enable the Wi-Fi function. If there is only the fan-shaped “Wi-Fi” icon but no globe icon, simply select the former. ![](/_astro/windows11-turnon-globe.webp)
+ ![](/_astro/windows11-turnon-sector.webp)
  ### Step 2: Select the proper SSID from the SSID list
  After enabling the Wi-Fi function, wait for a list of SSIDs to appear in the Wi-Fi connection settings screen. SSID is a name to identify a Wi-Fi network. From the list of SSIDs, please select the SSID named 0000UTokyo and connect to it.
  ⋯
  If you cannot find the SSID 0000UTokyo
  Depending on the location, the signal of the UTokyo Wi-Fi may not be reachable. Please change the location and try again. If you have never had any trouble using it at the location before but are experiencing issues now, please consult the [Technical Support Desk](/en/support/).
- ![](/_astro/windows10-selectssid.webp)
+ ![](/_astro/windows11-selectssid.webp)![](/_astro/windows11-selectssid-2.webp)
  ### Step 3: Delete the existing Wi-Fi setting information
  If the screen for entering a user-name and a password does not appear in Step 2 and it fails to connect to the Wi-Fi, you need to delete the existing setting and register a new one. This is necessary because although once you reissue your account and your previous account becomes invalid, your devices may still store it. Before using the new account, your devices must “forget” the previous one. There is no need to worry about never being able to connect to the UTokyo Wi-Fi again upon “deleting” a account.
- Right click the SSID you found in Step 2, select “Forget” from the displayed menu. ![](/_astro/windows10-deleteprofile.webp)
+ Right click the SSID you found in Step 2, select “Forget” from the displayed menu. ![](/_astro/windows11-deleteprofile.webp)
  ### Step 4: Enter the required information and connect
- Select the SSID named 0000UTokyo from the SSID list again. The screen of the Wi-Fi settings will be displayed after you select the SSID. To enter the required setting information into each field, follow the instructions below. You do not have to set those items that are shown in the following table but are not displayed on the screen. Once you have entered the setting information, select the connection button.
+ Select the SSID named 0000UTokyo from the SSID list again, and select the “Connect” button.
+ The screen of the Wi-Fi settings will be displayed. To enter the required setting information into each field, follow the instructions below. You do not have to set those items that are shown in the following table but are not displayed on the screen. Once you have entered the setting information, select the connection button.
  | Field name | Content |
- | Username | Enter the user ID for the UTokyo Wi-Fi (Begin with a u and ending with @wifi.u-tokyo.ac.jp). |
+ | User name | Enter the user ID for the UTokyo Wi-Fi (Begin with a u and ending with @wifi.u-tokyo.ac.jp). |
  | Password | Enter the password for the UTokyo Wi-Fi. |
- ![](/_astro/windows10-createprofile.webp)
+ ![](/_astro/windows11-createprofile.webp)
  #### Supplement
- - Enter the user ID and password for the UTokyo Wi-Fi account into the fields of “User name” and “Password”. Note that they are not the regular ID and password for the UTokyo Account. You can check the user ID and password in the notification email described in the ”Preparation” step or the screen of the completed application.
+ - Enter the user ID and password for the UTokyo Wi-Fi account into the fields of “User name” and “Password”. Note that they are not the 10-digit Common ID and password for the UTokyo Account. You can check the user ID and password in the notification email described in the ”[Preparation](#issue-account)” step or the screen of the completed application.
  - If there are any setting items other than mentioned above, please configure them as needed. If you have no particular preferences, you can leave the default settings.
- - During the connecting operation, a screen asking if you trust the certificate may appear. To verify whether the certificate is correct, compare the “server fingerprint” of the displayed certificate with the fingerprint listed in 「[Connect Configuration](/utokyo_wifi/#connect-configuration)」. If they match, trust the certificate.
-   - In addition, there are two types of fingerprints (SHA-1 and SHA-256) listed on [Connect Configuration](/en/utokyo_wifi/#connect-configuration);matching one type will suffice
+ - During the connecting operation, a screen asking if you trust the certificate may appear. To verify whether the certificate is correct, compare the “server fingerprint” of the displayed certificate with the fingerprint listed in “[Connect Configuration](../#connect-configuration)”. If they match, trust the certificate.
+   - In addition, there are two types of fingerprints (SHA-1 and SHA-256) listed on [Connect Configuration](../#connect-configuration); matching one type will suffice
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
