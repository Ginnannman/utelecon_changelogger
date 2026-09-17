# macOS 26でUTokyo Wi-Fiを利用する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_wifi/macos/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_wifi/macos/>) | [`src/pages/utokyo_wifi/macos.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_wifi/macos.mdx>) |
| English | 変更 | [`/en/utokyo_wifi/macos/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_wifi/macos/>) | [`src/pages/en/utokyo_wifi/macos.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_wifi/macos.mdx>) |

## 日本語

```diff
- タイトル: macOS 13でUTokyo Wi-Fiを利用する | utelecon
+ タイトル: macOS 26でUTokyo Wi-Fiを利用する | utelecon
  説明: 目次: 準備編：UTokyo Wi-Fiアカウントの発行を申請する; 利用編：macOSでの手順; うまくいかないときは...
  
- [UTokyo Wi-Fi](/utokyo_wifi/) > macOS 13で利用する
- # macOS 13でUTokyo Wi-Fiを利用する
- このページでは，macOS 13 Venturaの端末でUTokyo Wi-Fiを利用する際の具体的な操作手順について説明します．
- UTokyo Wi-Fiとは，東京大学の構成員が教育・研究を目的として利用できるWi-Fiサービスです．UTokyo Wi-Fiの利用に関する全般的な説明は， [UTokyo Wi-Fi全般の説明ページ](/utokyo_wifi/) に記載されています．はじめにそちらを確認した上で，macOS 13 Venturaの端末に即した詳しい手順説明が必要な場合に，このページを参照してください．
- 設定に際して，同じ種類のOSでも，機種やOSのバージョン等により画面の表示内容や操作時のふるまいに多少の違いがある場合があります．このページは，ページ作成時点で入手できた一部の端末（macOS 13 Venturaが搭載されたMacBook Pro）でのふるまいを確認して作成されていますから，必要であれば適宜内容を読み替えてください．
+ [UTokyo Wi-Fi](/utokyo_wifi/) > macOS 26で利用する
+ # macOS 26でUTokyo Wi-Fiを利用する
+ このページでは，macOS 26 Tahoeの端末でUTokyo Wi-Fiを利用する際の具体的な操作手順について説明します．
+ UTokyo Wi-Fiとは，東京大学の構成員が教育・研究を目的として利用できるWi-Fiサービスです．UTokyo Wi-Fiの利用に関する全般的な説明は， [UTokyo Wi-Fi全般の説明ページ](/utokyo_wifi/) に記載されています．はじめにそちらを確認した上で，macOS 26 Tahoeの端末に即した詳しい手順説明が必要な場合に，このページを参照してください．
+ 設定に際して，同じ種類のOSでも，機種やOSのバージョン等により画面の表示内容や操作時のふるまいに多少の違いがある場合があります．このページは，ページ作成時点で入手できた一部の端末（macOS 26 Tahoeが搭載されたMacBook Air）でのふるまいを確認して作成されていますから，必要であれば適宜内容を読み替えてください．
  ## 準備編：UTokyo Wi-Fiアカウントの発行を申請する
  初めて接続する場合や，アカウントの再発行が必要な場合は，UTokyo Wi-Fi全般の説明ページにある[利用開始までの手順の「準備編」](/utokyo_wifi/#apply)の説明に沿ってアカウントの発行を申請してください．
  ⋯
  ## 利用編：macOSでの手順
  ### 手順1：「システム設定」でWi-Fi機能をオンにする
- ツールバー左端のアップルメニューから「システム設定」を選択すると，設定画面が表示されます．設定画面のサイドバーの中から「Wi-Fi」のメニューを選択し，Wi-Fi機能のトグルスイッチをオンにしてください． ただし，OSのバージョンがmacOS 12 Monterey以前の場合は「システム設定」ではなく「システム環境設定」と表示されます．以降の手順でも操作方法が多少異なる場合がありますので，適宜読み替えながら設定を進めてください．
- ![](/_astro/macos13-turnon1.webp)![](/_astro/macos13-turnon2.webp)
+ メニューバー左端のアップルメニューから「システム設定…」を選択すると，設定画面が表示されます．設定画面のサイドバーの中から「Wi-Fi」のメニューを選択し，Wi-Fi機能のトグルスイッチをオンにしてください．
+ ![](/_astro/macos26-turnon1.webp)![](/_astro/macos26-turnon2.webp)
  ### 手順2：SSIDの一覧から接続先のSSIDを選択する
  Wi-Fi機能をオンにして少し待つと，Wi-Fi接続設定画面にSSIDの一覧が表示されます．SSIDとは，Wi-Fiの信号を識別するための名前のことです．このSSIDの一覧の中から，0000UTokyoというSSIDを選択して接続してください．
  ⋯
  ### 手順3：既存のWi-Fiの設定情報を削除する
  手順2でアカウント名とパスワードを入力する画面が表示されず，接続にも失敗した場合は，既存の設定情報をいったん削除し，新しい設定情報を登録しなおす必要があります．なぜならば，アカウントを再発行すると従前のアカウントは使用できなくなりますが，端末はこの以前のアカウントのことをいわば「覚えて」しまっているからです．新しいアカウントを使用する前に，使用できなくなった古いアカウントのことを「忘れさせる」操作が必要です．「『削除』してしまうと二度とUTokyo Wi-Fiに接続できなくなってしまうのではないか」という心配は無用です．
- 手順2で見つけたSSIDを選択し，表示された画面で「このネットワーク設定を削除する」を選択してください．「Wi‑Fi “0000UTokyo”を削除しますか?」という画面が出てくるので，「削除」を選択してください．
- ![](/_astro/macos13-deleteprofile1.webp)![](/_astro/macos13-deleteprofile2.webp)
+ 手順2で見つけたSSIDを選択し，右側にある「…」を選択してください．表示された画面で「このネットワーク設定を削除…」を選択してください．「Wi‑Fiネットワーク “0000UTokyo”を削除しますか?」という画面が出てくるので，「削除」を選択してください．
+ ![](/_astro/macos26-deleteprofile1.webp)![](/_astro/macos26-deleteprofile2.webp)
  ### 手順4：必要な設定情報を入力し接続する
- SSIDの一覧の中から，0000UTokyoというSSIDを再度選択してください． SSIDを選択すると，Wi-Fiの設定情報を入力する画面が表示されます．下記の説明に沿って，必要な設定情報を各欄に入力してください．下で説明されているのに入力画面に表示されなかった項目は，特に設定しなくてかまいません．設定情報を入力したら，接続ボタンを選択してください．
+ SSIDの一覧の中から，0000UTokyoというSSIDを再度選択してください． SSIDを選択すると，Wi-Fiの設定情報を入力する画面が表示されます．下記の説明に沿って，必要な設定情報を各欄に入力してください．下記に説明があっても入力画面に表示されなかった項目は，設定しなくて構いません．設定情報を入力したら，「OK」を選択して接続してください．
  | 設定欄の名称 | 設定内容 |
  | ID | 「なし」を選択してください |
  | アカウント名 | UTokyo Wi-FiのユーザーID（uから始まり@wifi.u-tokyo.ac.jpで終わるもの）を入力してください |
  | パスワード | UTokyo Wi-Fiのパスワードを入力してください |
- ![](/_astro/macos13-createprofile.webp)
+ ![](/_astro/macos26-createprofile.webp)
  #### 補足
- - 「アカウント名」欄と「パスワード」欄には、UTokyo Wi-FiアカウントのユーザーIDとパスワードをそれぞれ入力してください．UTokyo Accountの共通ID・パスワードではありません．ユーザーIDとパスワードは，「[準備編](#issue-account)」の手順で受け取った通知メールから確認できるほか，申請直後であればアカウントメニューの申請完了画面にも表示されています．
+ - 「アカウント名」欄と「パスワード」欄には，UTokyo Wi-FiアカウントのユーザーIDとパスワードをそれぞれ入力してください．UTokyo Accountの共通ID・パスワードではありません．ユーザーIDとパスワードは，「[準備編](#issue-account)」の手順で受け取った通知メールから確認できるほか，申請直後であればアカウントメニューの申請完了画面にも表示されています．
  - 上の表に掲げた以外の設定項目は，必要に応じて設定してください．特にお好みがなければ，初期設定のままでかまいません．詳しくは[Appleによる説明のページ](https://support.apple.com/ja-jp/guide/mac-help/mh11935/mac)を確認してください．
- - 接続操作の途中で，証明書を信頼するかどうか尋ねる画面が表示される場合があります．証明書が正しいものであるか確認するため，表示された証明書の指紋について，「[接続の詳細な設定](/utokyo_wifi/#connect-configuration)」に掲載されている指紋と比較してください．両者が一致していれば，証明書を信頼してください．
-   - なお，「[接続の詳細な設定](/utokyo_wifi/#connect-configuration)」には，SHA-1とSHA-256の2種類の指紋が掲載されていますが，どちらかが一致すれば結構です．![](/_astro/macos13-certificate.webp)
+ - 接続操作の途中で，証明書を信頼するかどうか尋ねる画面が表示される場合があります．証明書が正しいものであるか確認するため，「証明書を表示」を選択し，表示された証明書の指紋について，「[接続の詳細な設定](/utokyo_wifi/#connect-configuration)」に掲載されている指紋と比較してください．両者が一致していれば，「続ける」を選択して証明書を信頼してください．
+   - なお，「[接続の詳細な設定](/utokyo_wifi/#connect-configuration)」には，SHA-1とSHA-256の2種類の指紋が掲載されていますが，どちらかが一致すれば結構です．![](/_astro/macos26-certificate.webp)
  ## うまくいかないときは
  利用にあたって問題が発生した場合は，以下のページを確認してください．問い合わせ方法についても詳しく記載されています． [UTokyo Wi-Fiのトラブルシューティング](/utokyo_wifi/trouble_shooting/)
```

## English

```diff
- タイトル: Using Utokyo Wi-Fi on macOS 13 | utelecon
+ タイトル: Using UTokyo Wi-Fi on macOS 26 | utelecon
  説明: Table of Contents: Preparation: Apply for the UTokyo Wi-Fi account; Procedures for macOS; Trouble...
  
- [UTokyo Wi-Fi](/en/utokyo_wifi/) > Using Utokyo Wi-Fi on macOS 13
- # Using Utokyo Wi-Fi on macOS 13
- If you plan to issue a UTokyo Wi-Fi account and use UTokyo Wi-Fi or eduroam after March 1, 2024, please refer to “[UTokyo Wi-Fi Account Usage in AY2024](/notice/2024/02-wifi/)” (in Japanese).
- This page provides the detailed procedures on how to use the UTokyo Wi-Fi on terminal with macOS 13 Ventura.
- UTokyo Wi-Fi is a Wi-Fi service available to members of the University of Tokyo for educational and research purposes. Please refer to [UTokyo Wi-Fi](/en/utokyo_wifi/) page first, which summarizes the general instructions for using the UTokyo Wi-Fi. If you still need the detailed instructions for terminal with macOS 13 Ventura, please refer to this page.
- During configuration and while in operation, different content and procedures may be displayed in the Wi-Fi settings even for the same kind of OS. This page was created based on the behavior confirmed for some specific （MacBook Pro with macOS 13 Ventura） available at the time of creation of this page. Therefore, when necessary, please read the content and procedures for the respective device and OS version.
+ [UTokyo Wi-Fi](/en/utokyo_wifi/) > Using UTokyo Wi-Fi on macOS 26
+ # Using UTokyo Wi-Fi on macOS 26
+ This page provides the detailed procedures on how to use the UTokyo Wi-Fi on terminal with macOS 26 Tahoe.
+ UTokyo Wi-Fi is a Wi-Fi service available to members of the University of Tokyo for educational and research purposes. Please refer to [UTokyo Wi-Fi](/en/utokyo_wifi/) page first, which summarizes the general instructions for using the UTokyo Wi-Fi. If you still need the detailed instructions for terminal with macOS 26 Tahoe, please refer to this page.
+ During configuration and while in operation, different content and procedures may be displayed in the Wi-Fi settings even for the same kind of OS. This page was created based on the behavior confirmed for some specific （MacBook Air with macOS 26 Tahoe） available at the time of creation of this page. Therefore, when necessary, please read the content and procedures for the respective device and OS version.
  ## Preparation: Apply for the UTokyo Wi-Fi account
  For first-time access or an account reissue, please go back to the main page of the UTokyo Wi-Fi and follow Step 2 in “[Steps to start using the service](/en/utokyo_wifi/#initial-setup)” to issue an account.
  ⋯
  ## Procedures for macOS
  ### Step 1: Enable the Wi-Fi function from the taskbar
- To see the setting screen, select the “System Settings” from the Apple menu on the left side of the toolbar. Select “Wi-Fi” in the side bar and turn on the toggle switch to enable the Wi-Fi function.
- Please note that if the OS version is macOS 12 Monterey or earlier, instead of “System Settings”, “System Preference” will be displayed. The following procedures may vary slightly in different situations, please read the content and procedures for the respective OS version.
- ![](/_astro/macos13-turnon1.webp)![](/_astro/macos13-turnon2.webp)
+ To see the setting screen, select the “System Settings…” from the Apple menu on the left side of the menu bar. Select “Wi-Fi” in the side bar and turn on the toggle switch to enable the Wi-Fi function.
+ ![](/_astro/macos26-turnon1.webp)![](/_astro/macos26-turnon2.webp)
  ### Step 2: Select the SSID of connecting destination from the SSID list
  After enabling the Wi-Fi function, wait for a list of SSIDs to appear in the Wi-Fi connection settings screen. SSID is a name to identify a Wi-Fi network. From the list of SSIDs, please select the SSID named 0000UTokyo and connect to it.
  ⋯
  ### Step 3: Delete the existing Wi-Fi setting information.
  If the screen for entering a Account name and a password does not appear in Step 2 and it fails to connect to the Wi-Fi, you need to delete the existing setting and register a new one. This is necessary because although once you reissue your account and your previous account becomes invalid, your devices may still store it. Before using the new account, your devices must “forget” the previous one. There is no need to worry about never being able to connect to the UTokyo Wi-Fi again upon “deleting” a account.
- Select the SSID found in Step 2 and then select “Forget This Network” on the displayed screen. When a screen asking “Forget Wi‑Fi “0000UTokyo”?” appears, select “Remove”.
- ![](/_astro/macos13-deleteprofile1.webp)![](/_astro/macos13-deleteprofile2.webp)
+ Select the SSID you found in Step 2, and select the “…” icon on the right side. Then select “Forget This Network…” on the displayed screen. When a screen asking ‘Forget Wi‑Fi Network “0000UTokyo”?’ appears, select “Forget”.
+ ![](/_astro/macos26-deleteprofile1.webp)![](/_astro/macos26-deleteprofile2.webp)
  ### Step 4: Enter the required information and connect
- The screen of the Wi-Fi settings will be displayed after you select the SSID 0000UTokyo. To enter the required setting information into each field, follow the instructions below. You do not have to set those settings that are not displayed here. Once you’ve entered the setting information, select the connection button.
+ The screen of the Wi-Fi settings will be displayed after you select the SSID 0000UTokyo. To enter the required setting information into each field, follow the instructions below. You do not have to set those settings that are not displayed here. Once you’ve entered the setting information, select “OK” to connect.
  | Field name | Content |
  | ID | Select “None” |
  | Account name | Enter the User ID for the UTokyo Wi-Fi (begin with a u and end with @wifi.u-tokyo.ac.jp) |
  | Password | Enter the password for the UTokyo Wi-Fi |
- ![](/_astro/macos13-createprofile.webp)
+ ![](/_astro/macos26-createprofile.webp)
  #### Supplement
- - Enter the user ID and password for the UTokyo Wi-Fi account into the fields of “Account name” and “Password”. Note that they are not the regular ID and password for the UTokyo Account. You can check the user ID and password in the notification email described in the ”Preparation” step or the screen of the completed application.
- - If there are any setting items other than mentioned above, please configure them as needed. If you have no particular preferences, you can leave the default settings.
- - During the connecting operation, a screen asking if you trust the certificate may appear. To verify whether the certificate is correct, compare the “server fingerprint” of the displayed certificate with the fingerprint listed in 「[Connect Configuration](/en/utokyo_wifi/#connect-configuration)」. If they match, trust the certificate.
-   - In addition, there are two types of fingerprints (SHA-1 and SHA-256) listed on [Connect Configuration](/en/utokyo_wifi/#connect-configuration);matching one type will suffice. ![](/_astro/macos13-certificate.webp)
+ - Enter the user ID and password for the UTokyo Wi-Fi account into the fields of “Account name” and “Password”. Note that they are not the 10-digit Common ID and password for the UTokyo Account. You can check the user ID and password in the notification email described in the ”[Preparation](#issue-account)” step or the screen of the completed application.
+ - If there are any setting items other than mentioned above, please configure them as needed. If you have no particular preferences, you can leave the default settings. For details, please refer to the [Apple Support page](https://support.apple.com/en-us/guide/mac-help/mh11935/mac).
+ - During the connecting operation, a screen asking if you trust the certificate may appear. To verify whether the certificate is correct, compare the “server fingerprint” of the displayed certificate with the fingerprint listed in “[Connect Configuration](/en/utokyo_wifi/#connect-configuration)”. If they match, trust the certificate.
+   - In addition, there are two types of fingerprints (SHA-1 and SHA-256) listed on [Connect Configuration](/en/utokyo_wifi/#connect-configuration);matching one type will suffice. ![](/_astro/macos26-certificate.webp)
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
