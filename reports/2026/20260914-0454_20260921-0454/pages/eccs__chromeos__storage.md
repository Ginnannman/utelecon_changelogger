# ChromeOSデバイスでのデータの保存（ストレージ）

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/eccs/chromeos/storage/`](<https://utelecon.adm.u-tokyo.ac.jp/eccs/chromeos/storage/>) | [`src/pages/eccs/chromeos/storage/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/622296c7e37347cfdf4cc523c7c9c43c8fd31a20/src/pages/eccs/chromeos/storage/index.mdx>) |
| English | 変更なし | [`/en/eccs/chromeos/storage/`](<https://utelecon.adm.u-tokyo.ac.jp/en/eccs/chromeos/storage/>) | [`src/pages/en/eccs/chromeos/storage/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/622296c7e37347cfdf4cc523c7c9c43c8fd31a20/src/pages/en/eccs/chromeos/storage/index.mdx>) |

## 日本語

```diff
- タイトル: storage | utelecon
- 説明: 目次: ...
+ タイトル: ChromeOSデバイスでのデータの保存（ストレージ） | utelecon
+ 説明: 目次: 概要; Googleドライブを使う; OneDriveを使う; USBフラッシュメモリやSDカードなどを使う; その他; 参考情報...
  
- [ECCS](/eccs/) > [ChromeOSデバイス](/eccs/chromeos/) > storage
- # storage
- このページは作成中です．公開までの間，基本的な使い方については，[ECCS2026暫定版マニュアル](https://docs.google.com/document/d/1ItPQcUj0EvydwHecoS87hN5l3eGbGz8k5nrenW2RXE8/edit?usp=sharing)を参照してください．
- 2026年3月26日(木) 14:30から教育用計算機システム(ECCS)の機器を利用した対面授業，ハイブリッド授業を行なう教員，ティーチングアシスタントと分散配置端末管理・担当責任者を対象にした[ECCSシステム利用説明会](/notice/2026/0326-eccs-seminar)を実施します．参加を希望される方はフォームから申込みしてください．また，説明会開催後に資料および動画は大学内限定で公開します．
- なお，2021年3月から運用してきたECCS2021は既に運用を停止しており，2026年3月からECCS2026が稼働を開始します．詳しくは[教育用計算機システム(ECCS2026)について](/notice/2025/eccs2026-announcement/)をご覧ください．
+ [ECCS](/eccs/) > [ChromeOSデバイス](/eccs/chromeos/) > ストレージ
+ # ChromeOSデバイスでのデータの保存（ストレージ）
+ ## 概要
+ ECCS2026のChromeOSデバイスでは，[Googleドライブ](#google-drive)や[OneDrive](#onedrive)，[USBなどで接続できる外部ストレージ](#external-storage)にデータを保存できます．
+ なお，ChromeOSデバイスのローカルに保存されたデータは，ローカルのストレージが不足すると古いものから順に削除されます．たとえ次回同じデバイスを使う予定だとしても，ローカルストレージに保存されたデータが残っていることは保証されません．上記のいずれかに必要なデータは保存するようにしてください．
+ また，ChromeOSデバイスの「ファイル」アプリから使えるのは，ECCSクラウドメールのアカウントのGoogleドライブ，UTokyo Microsoft LicenseのOneDrive，外部ストレージのみです．これら以外のクラウドストレージ（個人アカウントでの利用を含む）を利用したい場合は，ブラウザからのみ使用できます．
+ ## Googleドライブを使う
+ ### ECCSクラウドメールのアカウントから利用する
+ ECCSクラウドメールのアカウント（東大のGoogleアカウント）のGoogleドライブであれば，デバイスへのサインインによって自動的にドライブにもサインインされるので，簡単に使うことができます．[「ファイル」アプリ](#google-drive-eccs-files-app)からでも[ブラウザから](#google-drive-eccs-browser)でも利用できます．
+ #### 「ファイル」アプリから使う手順
+ - メニューから「ファイル」アプリを開いてください．
+ - 左側のサイドバーで「Google ドライブ」を選択してください．
+   Googleドライブに保存されたデータが「ファイル」アプリ上に正常に表示されない場合
+   - サインイン直後は，読み取り専用になっていることがあります．この場合は，しばらく待ってから再度開いてみてください．
+   - 「デバイスに十分な空き容量がないため〜」と表示される場合は，ローカルデバイスにGoogleドライブのデータをダウンロード（同期）できない状態です．この場合は，[ブラウザから使用する](#google-drive-eccs-browser)のがおすすめです． ![](/_astro/drive-insufficient-space.webp)
+ #### ブラウザで使う手順
+ すでにECCSクラウドメールのアカウントでログインしているので，メニューから「Google ドライブ」を選択するか，ブラウザでGoogleドライブを開いてください．
+ ### ECCSクラウドメール以外のアカウントから利用する
+ ECCSクラウドメールのアカウント（東大のGoogleアカウント）以外のGoogleアカウントも利用できます．ただし，ブラウザからのみの利用となります．
+ - メニュー > 設定アプリ > アカウントから「Google アカウントを追加」を選択するか，ブラウザから「別のアカウントを追加」を選択してください．
+   ![](/_astro/add-google-account-settings.webp)![](/_astro/add-google-account-browser.webp)
+ - 「OK」を選択してください． ![](/_astro/add-google-account-confirm.webp)
+ - Googleドライブを利用したいGoogleアカウントでログインしてください．
+   ![](/_astro/google-signin-email.webp)![](/_astro/google-signin-password.webp)![](/_astro/google-signin-2fa.webp)
+ - 内容を確認の上，「同意する」を選択してください． ![](/_astro/google-signin-agree.webp)
+ - ブラウザから[Googleドライブを利用](/google/drive/basic/)してください．
+ ## OneDriveを使う
+ 「ファイル」アプリから，UTokyo Microsoft Licenseの[OneDrive](/microsoft/onedrive/)を容易に利用することができます．もちろん，他のOSと同様に[ブラウザからも利用できます](/microsoft/onedrive/#signin)．（UTokyo Microsoft License以外のアカウントから利用したい場合は，ブラウザからのみ利用可能です．）
+ ### UTokyo Microsoft LicenseのOneDriveを利用する
+ - メニューから「ファイル」アプリを開いてください．
+ - 左側のサイドバーで「Microsoft OneDrive」を選択してください．
+ #### 「OneDrive setup failed」／「OneDriveを設定できませんでした」と通知された場合
+ 起動時に，以下の画像のように「OneDrive setup failed」「OneDriveを設定できませんでした」といった通知が来ることがあります．
+ ![](/_astro/onedrive-setup-failed.webp)
+ このような通知が来た場合で，UTokyo Microsoft LicenseのOneDriveに接続したいときは，次の手順で接続してください．
+ - 通知の「OneDriveに手動で接続」を押してください．
+ - 「ファイル」アプリで「Microsoft OneDrive」を選択し，「ログイン」を押してください． ![](/_astro/onedrive-files-app.webp)
+ - 画面に従ってサインインするか，アカウントを選択してください． ![](/_astro/onedrive-signin-select-account.webp)
+ - 要求されているアクセス許可を確認の上，「承諾」を押してください． ![](/_astro/onedrive-signin-permission.webp)
+ - 接続が完了すると，「ファイル」アプリからOneDriveのファイルを利用できるようになります． ![](/_astro/onedrive-signed-in.webp)
+ ## USBフラッシュメモリやSDカードなどを使う
+ USBフラッシュメモリやSDカードなどの外付けストレージを利用できます．
+ 利用終了時には，必ず「[取り出しの手順](#eject)」を実施してください．実施しないと，データが消えてしまったり，外付けストレージが壊れてしまったりする可能性があります．
+ ### 利用手順
+ - USBフラッシュメモリなどを差し込んでください．
+   - Chromebookの場合は，ハブまたは本体右側のUSB-A端子に接続してください．詳しくは「[ハードウェア](../hardware/)」を参照してください．
+ - メニューから「ファイル」アプリを開いてください．
+   - 表示されるポップアップから開くこともできます． ![](/_astro/removable-device-notification.webp)
+ ### 取り出しの手順
+ - 「ファイル」アプリを開いてください．
+ - 左側のサイドバーの，外付けメディアの名称の右側にある取り出しアイコン（⏏）を選択してください． ![](/_astro/usb-eject.webp)
+ - サイドバーから外付けメディアの名称が消えるまで待って，取り外してください．
+ ## その他
+ - 「設定 > システム環境設定 > ファイル」から，GoogleドライブやOneDriveの設定を確認できます．
+ - 外部のsshサーバへの接続には，「[Linux開発環境](../linux/)」を利用できます．
+   - ネットワークファイル共有（設定 > システム環境設定 > ファイル）は利用できません．
+ - Google PlayのアプリからのUSBフラッシュメモリやSDカードなどの外付けストレージの読み込み・書き出しには，「設定 > システム環境設定 > ストレージ管理 > 外部ストレージの設定」から，以下のように外付けストレージの使用を有効にしてください． ![](/_astro/external-storage-settings.webp)
+ - [ニアバイシェアによるファイル共有](https://support.google.com/chromebook/answer/10751738?hl=ja)や，[Androidスマートフォンとの接続による写真の同期など](https://support.google.com/chromebook/answer/9094445?hl=ja)は，管理者側の設定により利用できません．
+ ## 参考情報
+ - [Chromebook でファイルを開く、保存する、削除する](https://support.google.com/chromebook/answer/1700055?hl=ja)（公式ヘルプ）
+ - [付近のデバイスとファイルを共有する](https://support.google.com/chromebook/answer/10751738?hl=ja)（公式ヘルプ）
```

[← 一覧へ](<../README.md>)
