# UTokyo VPN

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utokyo_vpn/`](<https://utelecon.adm.u-tokyo.ac.jp/utokyo_vpn/>) | [`src/pages/utokyo_vpn/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utokyo_vpn/index.mdx>) |
| English | 変更 | [`/en/utokyo_vpn/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utokyo_vpn/>) | [`src/pages/en/utokyo_vpn/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utokyo_vpn/index.mdx>) |

## 日本語

```diff
  UTokyo VPNを利用するには，まず自身の端末にVPNクライアントアプリケーションであるCisco Secure Clientをインストールします．インストールしたアプリケーションを起動すると，UTokyo Accountの認証を経てVPNゲートウェイに接続し，端末からの通信は基本的にVPN経由でUTNETを通じて外部と通信するようになります．ただし，ZoomやWebexなどVPNを経由する必要のない一部の通信や電子ジャーナルサイトなどへの通信は除きます．
  ### 電子ジャーナルへのアクセスについて
- UTokyo VPN経由で東京大学附属図書館が契約・提供する電子ジャーナル等にアクセスすることはできません．附属図書館が契約・提供する電子ジャーナル・電子ブック・データベースを学外から利用するには、附属図書館が提供するEZproxyを使います．Google検索などで見つかった出版社の論文ページから、すばやく論文PDFを入手するには、[こちらのページ](https://note.com/k_yamamoto/n/n0ee13fe38f24)でも紹介されている、[ブックマークレットを使って読む](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus/ezproxy/others#marklet)方法が便利です．もちろん契約外の論文は入手できませんし、契約していてもこの方法で入手できない場合もあります．詳しい利用方法や、利用対象者は図書館の[EZproxy（イージープロキシー）経由で利用する](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus/ezproxy) のページ、[補足情報：学外にいるとき、みつけた論文を読む方法あれこれ](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus/ezproxy/others)をご一読ください．
+ UTokyo VPN経由で東京大学附属図書館が契約・提供する電子ジャーナル等にアクセスすることはできません．附属図書館が契約・提供する電子ジャーナル・電子ブック・データベースを学外から利用するには，附属図書館が提供するOpenAthensを使います．詳しい利用方法や利用対象者は，図書館の「[リモートアクセス（学外からの利用）](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus)」のページをご一読ください．
  ## 利用にあたって
  利用対象者: UTokyo Accountを持つ東京大学 構成員（教職員・学生）
  ⋯
  ## FAQ
  ### Q. VPN接続時にもローカルにあるプリンタを利用したい
- UTokyo VPN接続時は，そのままだとコンピュータの繋がっているローカルネットワークへの通信もVPNを経由します．VPNに接続したままローカルネットワークに設置されたプリンタ等を利用したい場合は，Secure Clientのウィンドウの左下，歯車のボタンをクリックしてください．すると下記のようなウィンドウが出てきます．このウィンドウ（Windowsの場合はウィンドウの「環境設定」タブ）から，「VPN使用時にローカル(LAN)アクセスを許可する(構成されている場合)」にチェックをつけてください．
+ UTokyo VPN接続時は，そのままだとコンピュータの繋がっているローカルネットワークへの通信もVPNを経由します．VPNに接続したままローカルネットワークに設置されたプリンタ等を利用したい場合は，Cisco Secure Clientのウィンドウの左下，歯車のボタンをクリックしてください．すると下記のようなウィンドウが出てきます．このウィンドウ（Windowsの場合はウィンドウの「環境設定」タブ）から，「VPN使用時にローカル(LAN)アクセスを許可する(構成されている場合)」にチェックをつけてください．
  ![](/_astro/win09-anyconnect-win-pref.webp)
  Windowsの場合
```

## English

```diff
  # UTokyo VPN
  ## Introduction
- UTokyo VPN is a VPN service available to all the faculties and staff of the University of Tokyo (UTokyo). When a device is connected to the UTokyo VPN from outside the campus, the device communicates via the VPN gateway installed at the Information Technology Center. Thereafter, the device virtually connects to the UTNET - UTokyo campus network.
- To use UTokyo VPN, first install AnyConnect, a VPN client application, on your device. When the installed application is launched, it connects to the VPN gateway through the UTokyo Account authentication process, allowing communication from the device to the outside world through UTNET via VPN.
+ UTokyo VPN is a VPN service available to all faculty, staff, and students of the University of Tokyo (UTokyo). When a device is connected to the UTokyo VPN from outside the campus, the device communicates via the VPN gateway installed at the Information Technology Center. Thereafter, the device virtually connects to the UTNET - UTokyo campus network.
+ To use UTokyo VPN, first install Cisco Secure Client, a VPN client application, on your device. When the installed application is launched, it connects to the VPN gateway through the UTokyo Account authentication process, allowing communication from the device to the outside world through UTNET via VPN.
  ### Access to e-journals
- You cannot access e-journals and e-books subscribed by UTokyo Library via UTokyo VPN. Instead use EZProxy to access these e-journals and e-books. To quickly download the pdf of a paper from the publisher’s landing page, it’s convenient to [Read using the bookmarklet](https://www.lib.u-tokyo.ac.jp/en/library/literacy/user-guide/campus/offcampus/ezproxy/others#marklet), also explained in [this page](https://note.com/k_yamamoto/n/n0ee13fe38f24) (in Japanese). There are of course papers not subscribed by the library, as well as papers subscribed but cannot be obtained by this method. For more details about the usage and eligible users, be sure to read the page “[Using EZproxy](https://www.lib.u-tokyo.ac.jp/en/library/literacy/user-guide/campus/offcampus/ezproxy)” and “[Supplement : How to read paper found outside the university](https://www.lib.u-tokyo.ac.jp/en/library/literacy/user-guide/campus/offcampus/ezproxy/others)” provided by the library.
+ You cannot access e-journals and e-books subscribed by UTokyo Library via UTokyo VPN. Instead, use OpenAthens to access these e-journals and e-books. For more details about the usage and eligible users, be sure to read the page “[Off-Campus Access](https://www.lib.u-tokyo.ac.jp/en/library/literacy/user-guide/campus/offcampus)” provided by the library.
  ## Requirements for use
- Eligible user: University of Tokyo faculties, staff and students having a UTokyo Account.
+ Eligible user: University of Tokyo faculty, staff and students having a UTokyo Account.
  Device Types and OS for VPN: UTokyo VPN is accessible on the following versions of Windows and macOS.
- - Windows: Windows 10, 11
- - macOS: macOS 12 Monterey, 13 Ventura, 14 Sonoma
+ - Windows: Windows 11
+ - macOS: macOS 13 Ventura, 14 Sonoma, 15 Sequoia, 26 Tahoe
  You can use UTokyo VPN on iPhone, Android, and other mobile devices, though we currently provide limited English manuals for them. If you use it on these mobile devices, please keep the OS and dedicated app properly updated while using it.
  ### Enable Multi-factor Authentication
- To use UTokyo VPN, you are required to enable multi-factor authentication for your UTokyo Account (please refer to [Using multi-factor authentication](/en/utokyo_account/mfa/) for your UTokyo Account). Thereafter, enable multi-factor authentication for your UTokyo Account (Multi-factor UTokyo VPN will be available 30 minutes after you apply for the authentication).
+ To use UTokyo VPN, you are required to enable multi-factor authentication for your UTokyo Account (please refer to [Using multi-factor authentication](/en/utokyo_account/mfa/) for your UTokyo Account). Complete [Initial setup of UTokyo Account MFA](/en/utokyo_account/mfa/initial/) through Step 4, then wait about 30 minutes before using UTokyo VPN.
  ### Information Security Education
  UTokyo VPN is only available to users who have completed the Information Security Education. The Information Security Education is held annually for all UTokyo Account holders with the aim of improving [Information Security at UTokyo](https://univtokyo.sharepoint.com/sites/Security/SitePages/en/Home.aspx). For details about the timing and the procedure of the course, kindly refer to the [Information Security Education](https://univtokyo.sharepoint.com/sites/Security/SitePages/en/Information_Security_Education.aspx) page.
  ⋯
  - [How to use UTokyo VPN on Windows devices](windows/)
  - [How to use UTokyo VPN on macOS devices](macos/)
- - [How to use UTokyo VPN on Android devices (in Japanese)](/utokyo_vpn/android/)
+ - [How to use UTokyo VPN on Android devices](android/)
  - [How to use UTokyo VPN on iPad devices](ipad/)
  - [How to use UTokyo VPN on iPhone devices](iphone/)
  ## FAQ
  ### Q. I want to use a local printer even when connected to UTokyo VPN.
- When you are connected to UTokyo VPN, the communication to the local network to which your computer is connected also goes through the VPN. Click the gear button on the bottom left of the AnyConnect Secure Mobility Client window. The following window will appear. In the “Preferences” tab of this window, check the “Allow local (LAN) access when using VPN (if configured)” check box.
+ When you are connected to UTokyo VPN, the communication to the local network to which your computer is connected also goes through the VPN. Click the gear button on the bottom left of the Cisco AnyConnect Secure Mobility Client window. The following window will appear. In the “Preferences” tab of this window, check the “Allow local (LAN) access when using VPN (if configured)” check box.
  ![](/_astro/win08-anyconnect-win-pref.webp)
  In case of Windows
  ⋯
  ### Q. Will I be able to view internal departmental websites?
  A. No. It depends on the access restrictions of your departmental site. You are required to ask your department.
- ### Q. Is it necessary to get a new account every six months like a UTokyo Wi-Fi account?
- UTokyo VPN authentication is done with a UTokyo Account, not a UTokyo Wi-Fi account. Therefore, you can continue to use UTokyo VPN without changing it. However, users are required to complete an information security training session, annually.
+ ### Q. Is it necessary to get a new account every year like a UTokyo Wi-Fi account?
+ UTokyo VPN authentication is done with a UTokyo Account, not a UTokyo Wi-Fi account. Therefore, you can continue to use UTokyo VPN without changing it. However, users are required to complete an information security training session annually.
  ## Regulations (only in Japanese)
  - [UTokyo VPN Usage Regulations](/utokyo_vpn/terms/UTokyoVPN-User-Term.pdf)
  - [UTokyo VPN Operation Regulations](/utokyo_vpn/terms/UTokyoVPN-Operation-Term.pdf)
  ## Inquiry
- Please contact via [Techinical Support Desk](/en/support/).
+ Please contact via [Technical Support Desk](/en/support/).
```

[← 一覧へ](<../README.md>)
