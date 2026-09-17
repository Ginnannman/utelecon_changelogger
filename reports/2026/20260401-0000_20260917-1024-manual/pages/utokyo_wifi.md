# UTokyo Wi-Fi

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_wifi/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_wifi/>) | [`src/pages/utokyo_wifi/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_wifi/index.mdx>) |
| English | 変更 | [`/en/utokyo_wifi/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_wifi/>) | [`src/pages/en/utokyo_wifi/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_wifi/index.mdx>) |

## 日本語

```diff
  - 「新規申請」ボタンを押してください．
    - この時点ではまだ申請は行われていません．引き続き下の案内に従って申請を行ってください．
- - 表示された画面で，「通知用メールアドレス」欄に記載されているメールアドレスが正しいか確認してください．初回の申請の場合，「通知用メールアドレス」欄は空白になっています．
-   - UTokyo Wi-FiアカウントのユーザーID・パスワードは，[ECCSクラウドメール](/google/)およびこの「通知用メールアドレス」に宛てて通知されます．初回の申請の場合，UTokyo Wi-FiアカウントのユーザーID・パスワードは，[ECCSクラウドメール](/google/)および[UTokyo Account利用者情報確認サイト](https://login.adm.u-tokyo.ac.jp/my/)の連絡先メールアドレスに宛てて通知されます．
+ - 表示された画面で，「通知用メールアドレス」欄にメールアドレスが記載されている場合，そのメールアドレスが正しいか確認してください．空白の場合もありますが，ECCSクラウドメールに届いたメッセージを確認できる場合は次の手順に進んでください．
+   - UTokyo Wi-FiアカウントのユーザーID・パスワードは，[ECCSクラウドメール](/google/)およびこの「通知用メールアドレス」に宛てて通知されます．初めてUTokyo Wi-Fiアカウントを作成する場合など，条件によってはこの表示が空白になってしまうこともありますが，通知は問題なく行われます．空白の場合は，UTokyo Wi-FiアカウントのユーザーID・パスワードは，[ECCSクラウドメール](/google/)および[UTokyo Account利用者情報確認サイト](https://login.adm.u-tokyo.ac.jp/my/)の連絡先メールアドレスに宛てて通知されます．
      通知用メールアドレスを変更したい場合
      通知メールが送信されるメールアドレスは次の場所から変更することができます．
  ⋯
  | 暗号化 | CCMP (AES) |
  | 認証方式 | PEAP MSCHAPv2 (EAP-MSCHAPv2) |
- | サーバ証明書 | - 名称 (Common Name): acm.wifi.adm.u-tokyo.ac.jp - 発行元: NII Open Domain CA - G7 RSA - ルート証明書: Security Communication RootCA2 - 指紋 (Fingerprint) SHA-1: - 9F:8F:A6:74:0B:4C:3D:84:E4:6A:81:2E:F0:CB:7B:B4:43:55:7D:F8（2026-01-27以降） - 69:38:BB:94:1A:98:04:85:A3:96:46:DA:C2:7F:45:62:EF:62:0B:AF（2026-01-27以前） - 指紋 (Fingerprint) SHA-256: - A9:B4:A7:2C:14:85:27:F1:64:53:A7:16:FC:90:7C:6C:D0:21:AB:E8:4A:ED:CE:80:6F:A8:69:53:B6:F2:40:12（2026-01-27以降） - DA:8D:7C:56:C8:6D:15:C6:38:2B:17:7E:40:EF:1C:DF:3B:13:54:83:26:AB:73:C2:80:AD:03:02:B6:84:EC:F0（2026-01-27以前） ※証明書の「ドメイン」を入力するよう求められた場合は，u-tokyo.ac.jpを入力してください． |
+ | サーバ証明書 | - 名称 (Common Name): acm.wifi.adm.u-tokyo.ac.jp - 発行元: NII Open Domain CA - G8 RSA - ルート証明書: Security Communication RootCA2 - 指紋 (Fingerprint) SHA-1: - 9F:8F:A6:74:0B:4C:3D:84:E4:6A:81:2E:F0:CB:7B:B4:43:55:7D:F8 - 指紋 (Fingerprint) SHA-256: - A9:B4:A7:2C:14:85:27:F1:64:53:A7:16:FC:90:7C:6C:D0:21:AB:E8:4A:ED:CE:80:6F:A8:69:53:B6:F2:40:12 ※証明書の「ドメイン」を入力するよう求められた場合は，u-tokyo.ac.jpを入力してください． |
  ## 利用に関する情報
  ### アカウントの有効期限
```

## English

```diff
  # UTokyo Wi-Fi
  ## About UTokyo Wi-Fi
- UTokyo Wi-Fi is a Wi-Fi service available to members of the University of Tokyo for the purposes of education, research, and other university-related activities. It is currently accessible in most buildings on campus. Please use the service in accordance with the “[Terms of Use for the University of Tokyo Wireless Network System (UTokyo WiFi)](https://www.u-tokyo.ac.jp/adm/dics/ja/wifi_termsofuse.html)“
+ UTokyo Wi-Fi is a Wi-Fi service available to members of the University of Tokyo for the purposes of education, research, and other university-related activities. It is currently accessible in most buildings on campus. Please use the service in accordance with the “[Terms of Use for the University of Tokyo Wireless Network System (UTokyo WiFi)](https://www.u-tokyo.ac.jp/adm/dics/ja/wifi_termsofuse.html)”.
  ## Before using UTokyo Wi-Fi
  ### Availabilities
  - UTokyo Wi-Fi is available to members of UTokyo (students & faculty and staff members) who have a [UTokyo Account](/en/utokyo_account/).
-   - UTokyo Wi-Fi are unavailable for UTokyo Accounts without Multi-factor authentication. Please refer to the “[Multi-Factor Authentication for UTokyo Accounts](#mfa)” section below for more details.
+   - UTokyo Wi-Fi is unavailable for UTokyo Accounts without Multi-factor authentication. Please refer to the “[Multi-Factor Authentication for UTokyo Accounts](#mfa)” section below for more details.
    - If you have not completed the Information Security Education course, your access may be suspended even if you are a member of UTokyo. Please refer to the “[Information Security Education](#jouhou-security)” section below for more details.
  ### Multi-Factor Authentication for UTokyo Accounts
  You are required to enable multi-factor authentication on your UTokyo Account to use the UTokyo Wi-Fi for security reasons.
  - If you have not enabled multi-factor authentication on your UTokyo Account, your privilege to use the UTokyo Wi-Fi will be suspended. Specifically, you will no longer be able to sign into the UTokyo Wi-Fi Account Menu or create a new account.
- - Before using the UTokyo Wi-Fi, you must complete the initial setup for Multi-Factor Authentication on your UTokyo Account. Please refer to the “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/))” for specific instructions.
+ - Before using the UTokyo Wi-Fi, you must complete the initial setup for Multi-Factor Authentication on your UTokyo Account. Please refer to the “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” for specific instructions.
  ### Information Security Education
  UTokyo Wi-Fi is only available to users who have completed the Information Security Education. The Information Security Education is held annually for all UTokyo Account holders with the aim of improving [Information Security at UTokyo](https://univtokyo.sharepoint.com/sites/Security/SitePages/en/Home.aspx). For details about the timing and the procedure of the course, kindly refer to the [Information Security Education](https://univtokyo.sharepoint.com/sites/Security/SitePages/en/Information_Security_Education.aspx) page.
  ⋯
    [UTokyo Wi-Fi Account Menu](https://acm.wifi.adm.u-tokyo.ac.jp/secure/user_applies/index/1/)
    Help: When the error message “You don’t have access to this” (Error Code: 53003) appears
-   It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use the UTokyo Wi-Fi, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for MFA Use” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
+   It is possible that the setup or activation of the [multi-factor authentication (MFA)](/en/utokyo_account/mfa/) for your UTokyo Account, which is required to use the UTokyo Wi-Fi, has not yet been completed. Please make sure to follow the initial setup procedure on the page, “[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial/)” until the last step, “Step 4: Apply for Starting Your UTokyo Account” to enable multi-factor authentication for your UTokyo Account. It will take about 30 minutes for the MFA settings to be reflected in the system after these procedures, so please wait for a while.
    If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
    Help: When the error message “申し訳ありませんが、サインイン中に問題が発生しました” or “Sorry, but we’re having trouble signing you in.” appears
  ⋯
  - Click on the “New Application” Button.
    - At this point, the application is not yet done. Please proceed to the next step to complete the application.
- - On the screen that appears, confirm that the email address in the “Notification E-mail Address” field is correct. For the first time, the “Notification E-mail Address” field is blank.
-   - The user ID and password for your UTokyo Wi-Fi account will be sent to both your [ECCS Cloud Email](/en/google/) address and this “Notification E-mail Address”. For the first time, the user ID and password for your UTokyo Wi-Fi account will be sent to both your [ECCS Cloud Email](/en/google/) address and your contact email address in [UTokyo Account User Information](https://login.adm.u-tokyo.ac.jp/my/).
+ - On the screen that appears, confirm that the email address in the “Notification E-mail Address” field is correct. This field may be blank in some cases. If you can check messages in your ECCS Cloud Email account, please proceed to the next step.
+   - The user ID and password for your UTokyo Wi-Fi account will be sent to both your [ECCS Cloud Email](/en/google/) address and this “Notification E-mail Address”. In some situations, such as when creating a UTokyo Wi-Fi account for the first time, this field may be blank. In such cases, a notification will be sent to both your [ECCS Cloud Email](/en/google/) address and your contact email address in [UTokyo Account User Information](https://login.adm.u-tokyo.ac.jp/my/).
      If you want to change your notification email address
      Follow the instructions below to change the email address to which the notification email is sent.
  ⋯
  - If you are copying and pasting from a notification email, please make sure that there are no extra spaces before or after the password.
  - If you have multiple applications for an account during the process, only one of them will be valid; only the account listed in the [UTokyo Wi-Fi account menu](https://acm.wifi.adm.u-tokyo.ac.jp/secure/user_applies/index/1/) will be valid, so please check.
- - The trouble may be caused by devices which are not kept up to date. Old MacOS, Windows 8.1 or earlier, and other devices (smartphones, etc.) that have not been updated should be updated to the latest version before connecting.
+ - The trouble may be caused by devices which are not kept up to date. Old macOS, Windows 8.1 or earlier, and other devices (smartphones, etc.) that have not been updated should be updated to the latest version before connecting.
  # Procedure by Device Type
  Additionally, the following pages provide detailed connection instructions for each type of device.
  ⋯
  | Encryption | CCMP (AES) |
  | Authentication Method | PEAP MSCHAPv2 (EAP-MSCHAPv2) |
- | Server Certificate | - Name (Common Name): acm.wifi.adm.u-tokyo.ac.jp - Issued by: NII Open Domain CA - G7 RSA - Root Certificate: Security Communication RootCA2 - Fingerprint SHA-1: - 9F:8F:A6:74:0B:4C:3D:84:E4:6A:81:2E:F0:CB:7B:B4:43:55:7D:F8 (after 2026-01-27) - C0:F2:3C:69:53:63:57:B3:57:0B:C7:7B:E8:6C:3E:3B:09:4F:74:CD (until 2026-01-27) - Fingerprint SHA-256: - A9:B4:A7:2C:14:85:27:F1:64:53:A7:16:FC:90:7C:6C:D0:21:AB:E8:4A:ED:CE:80:6F:A8:69:53:B6:F2:40:12 (after 2026-01-27) - FE:80:95:86:F5:2C:DE:CD:10:08:FC:02:CE:3D:2F:6D:AD:22:6D:94:B2:42:C7:3E:7F:8F:95:E4:19:50:F9:87 (until 2026-01-27) * If you are prompted to enter the “domain” of the certificate, enter u-tokyo.ac.jp. |
+ | Server Certificate | - Name (Common Name): acm.wifi.adm.u-tokyo.ac.jp - Issued by: NII Open Domain CA - G8 RSA - Root Certificate: Security Communication RootCA2 - Fingerprint SHA-1: - 9F:8F:A6:74:0B:4C:3D:84:E4:6A:81:2E:F0:CB:7B:B4:43:55:7D:F8 - Fingerprint SHA-256: - A9:B4:A7:2C:14:85:27:F1:64:53:A7:16:FC:90:7C:6C:D0:21:AB:E8:4A:ED:CE:80:6F:A8:69:53:B6:F2:40:12 * If you are prompted to enter the “domain” of the certificate, enter u-tokyo.ac.jp. |
  ## Information on usage
  ### Account expiration date
  ⋯
  - In addition to UTokyo Wi-Fi, UTokyo has other wireless LAN services that are available on campus. If you’re a member of the UTokyo, please refer to the [Wireless LAN Services for the Members of the University of Tokyo](/en/systems/wlan/) page. If you’re from outside the university, consult the [Wireless LAN Service at the University of Tokyo](https://www.u-tokyo.ac.jp/adm/dics/ja/wlan.html) page for proper use.
    - Using your UTokyo Wi-Fi account’s User ID and password, you can connect to the [eduroam](https://eduroam.jp/en) wireless LAN service, which allows mutual use across various universities and research institutions. For details, see the [eduroam section on the Wireless LAN Services for the Members of the University of Tokyo page](/en/systems/wlan/#eduroam).
- - In some classrooms and conference rooms, wired ports that can be accessed with a UTokyo Wi-Fi account are provided (primarily for faculty and staff). For more details, please refer to “[About the Wired Connection Service in Classrooms](/utokyo_wifi/wired_lan/)(in Japanese)”
+ - In some classrooms and conference rooms, wired ports that can be accessed with a UTokyo Wi-Fi account are provided (primarily for faculty and staff). For more details, please refer to “[About the Wired Connection Service in Classrooms](/utokyo_wifi/wired_lan/)” (in Japanese)
  - If you are in charge of a network of your department, please also refer to [the Information on UTokyo Portal](https://univtokyo.sharepoint.com/sites/utokyoportal/wiki/d/UTokyo_WiFi_Management.aspx).
  - We periodically renew the certificates for the UTokyo Wi-Fi authentication servers. During the renewal process and when connecting to UTokyo Wi-Fi for the first time after the renewal, there are some notes to be aware of, which we detail on the [page for certificate renewal](/en/utokyo_wifi/certificate_renewal/).
```

[← 一覧へ](<../README.md>)
