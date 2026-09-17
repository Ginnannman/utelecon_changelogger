# Windowsリモート環境

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/eccs/vdi-windows/`](<https://utelecon.adm.u-tokyo.ac.jp/eccs/vdi-windows/>) | [`src/pages/eccs/vdi-windows/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/eccs/vdi-windows/index.mdx>) |
| English | 変更 | [`/en/eccs/vdi-windows/`](<https://utelecon.adm.u-tokyo.ac.jp/en/eccs/vdi-windows/>) | [`src/pages/en/eccs/vdi-windows/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/eccs/vdi-windows/index.mdx>) |

## 日本語

```diff
- タイトル: vdi-windows | utelecon
- 説明: 目次: ...
+ タイトル: Windowsリモート環境 | utelecon
+ 説明: 目次: 概要; スペック; 利用枠と予約; 利用方法...
  
- [ECCS](/eccs/) > vdi-windows
- # vdi-windows
- このページは作成中です．公開までの間，基本的な使い方については，[ECCS2026暫定版マニュアル](https://docs.google.com/document/d/1ItPQcUj0EvydwHecoS87hN5l3eGbGz8k5nrenW2RXE8/edit?usp=sharing)を参照してください．
- 2026年3月26日(木) 14:30から教育用計算機システム(ECCS)の機器を利用した対面授業，ハイブリッド授業を行なう教員，ティーチングアシスタントと分散配置端末管理・担当責任者を対象にした[ECCSシステム利用説明会](/notice/2026/0326-eccs-seminar)を実施します．参加を希望される方はフォームから申込みしてください．また，説明会開催後に資料および動画は大学内限定で公開します．
- なお，2021年3月から運用してきたECCS2021は既に運用を停止しており，2026年3月からECCS2026が稼働を開始します．詳しくは[教育用計算機システム(ECCS2026)について](/notice/2025/eccs2026-announcement/)をご覧ください．
+ [ECCS](/eccs/) > Windowsリモート環境
+ # Windowsリモート環境
+ ## 概要
+ Windowsリモート環境は，インターネット経由でWindows環境を利用できるようにするサービスです[1](#user-content-fn-1)．Windowsリモート環境を使うと，手元にWindows PCがなくても，Microsoft 365 Apps (Microsoft Office)等のソフトウェアを利用できます．また，大学がライセンスを提供する，Stata/SE等のソフトウェアを無償で利用できます．
+ Windowsリモート環境を利用できるのは，UTokyo Accountを持つ東京大学の構成員（教職員・学生）です．
+ なお，通常のWindows PCとは異なる点があります．利用の前に[通常のWindows PCとの相違点](#differences)をよく読み，データの喪失などには十分ご注意ください．
+ また，同時利用可能な数に全学単位の制限があります．授業で使う場合など，確実に利用したい場合は利用枠の予約ができます．詳しくは[利用枠と予約](#quota-and-reservation)を参照してください．
+ ### 通常のWindows PCとの相違点
+ Windowsリモート環境は，通常のWindowsがインストールされたPCと異なる点があります．以下にその一部を挙げます．
+ #### 接続が切断されると，作業中のデータが削除されることがあります
+ 以下のような場合に，自動的にセッションが削除され，環境内の全てのデータ・作業履歴が消去されます．
+ - 最後に操作してから一定時間経過した場合
+ - 接続を切断してから一定時間経過した場合
+ - 予約して利用していた場合に，予約していた時間が終了した場合（ただし，実際にセッションが削除されるのは，終了の時刻よりも後になることがあります）
+ データの喪失を防ぐため，必要なファイルはこまめに，環境外に保存するようにしてください．環境外の保存先としては，以下が利用できます：
+ - OneDrive（一部のフォルダが自動的にクラウドと同期されます）
+   - 環境へのサインイン時に使用したUTokyo Accountに基づいて，自動的に認証され，[UTokyo Microsoft License](/microsoft/)で提供されているOneDriveが利用できるようになります．
+   - Desktopフォルダ，Documentsフォルダ，Picturesフォルダは自動的にOneDriveと同期されます．
+   - また，エクスプローラーからOneDriveにアクセスすることもできます．そこに作成したファイルも，自動的にOneDriveにアップロードされます．
+ - Google Drive（設定したフォルダが自動的にクラウドと同期されます）
+   - Google Driveアプリからの設定が必要です．
+   - 同期されるフォルダは，Google Driveアプリから変更できます．
+ - ファイル転送機能によるダウンロード
+   - クラウドストレージに保存したくない場合は，接続元のデバイスにファイルをダウンロードすることも可能です．
+   - ただし，リモート環境でファイルに加えた変更を保存するには都度ダウンロードする必要がありますので，ご注意ください．
+ また，Microsoft 365 Apps（Microsoft Office; Word, PowerPointなど）の場合は，アプリから直接OneDriveに自動保存することができます．
+ なお，[OneDrive](/microsoft/onedrive/#storage_capacity)や[Google Drive](/google/drive/#using_with_utokyo_account)の容量には制限がありますので，保存する必要のない大きなファイルを同期対象のフォルダに置かないようご注意ください．
+ #### アプリの新規インストールはできません
+ Windowsリモート環境に，新規にアプリをインストールすることはできません（Microsoft Storeを含む）．そのほか，管理者権限の必要な操作（WSLの環境の作成など）もできません．
+ 特に，環境内にZoomアプリがインストールされていないため，授業等で画面を共有したい場合は，接続元のデバイスからZoomに接続し，ブラウザもしくはWindows Appを画面共有してください．
+ #### 東京大学の学内からのみ利用できるサービスにはアクセスできません
+ Windowsリモート環境は東京大学のネットワーク内にないため，学内からのみ利用できるサービス（電子ジャーナルを含む）にはアクセスできません．
+ 電子ジャーナルに関してはOpenAthensの利用をご検討ください．また，それ以外に関しては，Windowsリモート環境ではなく，お持ちのデバイスから[UTokyo VPN](/utokyo_vpn/)を利用して接続することをご検討ください．
+ ## スペック
+ スペックは以下の通りです．
+ - OS: Windows 11 Enterprise
+ - CPU: 2 vCPU
+ - Mem: 8 GB
+ - Storage: 256 GB
+   - ただし，[通常のWindows PCとの相違点](#differences)の通り，接続を切ってから一定時間，あるいは一定時間の無操作の後に消去されます．
+ ### 利用できるソフトウェア（一部）
+ CADをはじめとする，コンピュータの性能が要求されるソフトウェアでは性能が不足する可能性があります．もし手元のデバイスで利用可能であれば，手元のデバイスにインストールして利用することをお勧めします．
+ #### ライセンス認証が必要なもの等
+ - Microsoft 365 Apps（Microsoft Office; Word, PowerPointなど）：サインイン時に使用したUTokyo Accountに基づいて自動的に認証されます．ただし，学生および東京大学に雇用されている教職員のみが利用できます．
+ - MATLAB：自身で作成したMathWorksアカウントでサインインして利用してください．東京大学では[UTokyo MATLAB License](/matlab/)により追加の費用負担なく利用できます．利用開始の方法については，[UTokyo MATLAB Licenseのページ](/matlab/#how-to-start)を参照してください．
+ - Autodesk Fusion：自身で作成したAutodeskアカウントでサインインして利用してください．なお，[Autodesk Student Access](https://www.autodesk.com/education/edu-software/overview)に登録すると無料で利用できます（2026年3月現在）．
+ - JMP Pro：自身で作成したMy JMPアカウントでサインインして利用してください．なお，[JMP Student Edition](https://www.jmp.com/en/academic/jmp-student-edition)に登録すると無料で利用できます（2026年3月現在）．
+ - Stata/SE：大学がライセンスを提供しています．
+ - EndNote online：大学がライセンスを提供しています．
+ - TNTlite：無料版がインストールされています．
+ #### その他のインストールされているソフトウェア
+ 上記以外でインストールされているソフトウェアを以下に示します．これら以外のソフトウェアも利用可能なことがありますので，詳細は実際の環境でご確認ください．
+ - Firefox
+ - Google Chrome
+ - Microsoft Edge
+ - Adobe Acrobat Reader DC
+ - VLC media player
+ - Microsoft Build of OpenJDK
+ - Visual Studio Code
+ - MinGW-w64
+ - Ruby
+ - GIMP
+ - Inkscape
+ - TexLive
+ - R
+ - RStudio
+ ## 利用枠と予約
+ Windowsリモート環境の同時接続可能数は，全学で合計200までとなっています．
+ このうち，予約なしで利用できるフリー枠は計18個，予約が必要な枠は182個です．フリー枠で利用可能な枠は少ないため，確実に利用したい場合，事前の予約をお勧めします．
+ - フリー枠（3枠×6グループ=計18枠）：予約なしで利用できます．
+   - ユーザーをほぼ同数の6つのグループに分けており，グループごとに3枠ずつ利用可能です．
+   - [Windows App](https://windows.cloud.microsoft/#/devices)の画面では，「ECCS-FREEn」（nは1から6までの数字）という名前で表示されます．枠が埋まっている場合は表示されなかったり，接続に失敗したりすることがあります．詳しくは[利用方法](./usage/)を参照してください．
+ - 予約枠（182枠）：利用には事前の予約が必要です．
+   - 授業用・個人利用など，利用目的に応じて異なる予約方法があります．予約方法については[予約](./reservation/)を参照してください．
+ ## 利用方法
+ ブラウザ，もしくは専用のアプリから利用できます．詳しい使い方については，[利用方法](./usage/)を参照してください．
+ Footnotes
+ - 一般的には仮想デスクトップ環境(Virtual Desktop Infrastructure, VDI)と呼ばれます．具体的には[Windows 365 Frontline](https://www.microsoft.com/ja-jp/windows-365)を提供しています． [↩](#user-content-fnref-1)
```

## English

```diff
- タイトル: vdi-windows | utelecon
- 説明: Table of Contents: ...
+ タイトル: Remote Windows Environment | utelecon
+ 説明: Table of Contents: Overview; Specifications; Usage Limits and Reservations; How to Use...
  
- [ECCS](/en/eccs/) > vdi-windows
- # vdi-windows
- This page is currently under construction. Until this page is officially published, please refer to the [ECCS2026 provisional manual(in Japanese)](https://docs.google.com/document/d/1ItPQcUj0EvydwHecoS87hN5l3eGbGz8k5nrenW2RXE8/edit?usp=sharing) for basic usage instructions.
- The [ECCS System Usage Seminar](/notice/2026/0326-eccs-seminar) will be held on Thursday, March 26, 2026, from 14:30 for faculty members, teaching assistants, and PC room administrators who use the Educational Campuswide Computing System (ECCS) equipment for in-person or hybrid classes. Those who wish to attend should register using the form on the page. The presentation materials and video will be made available to University members only after the seminar.
- Please note that ECCS2021, which had been in operation since March 2021, has already ceased operations, and ECCS2026 will begin operations in March 2026. For more details, please refer to [About the Educational Campus-wide Computing System (ECCS2026)](/notice/2025/eccs2026-announcement/) (in Japanese).
+ [ECCS](/en/eccs/) > Remote Windows Environment
+ # Remote Windows Environment
+ ## Overview
+ The Remote Windows Environment is a service that enables users to access Windows environments via the internet[1](#user-content-fn-1). By using this service, users can use software such as Microsoft 365 Apps (Microsoft Office) even without a Windows PC at hand. In addition, software such as Stata/SE, for which the university provides licenses, is available free of charge through this service.
+ The Remote Windows Environment is available only to members of the University of Tokyo (academic staff, administrative staff, and students) who have a UTokyo Account.
+ Please note that this environment differs from a typical Windows PC. Before using this service, be sure to review the [differences](#differences) outlined below carefully and take appropriate precautions to prevent data loss.
+ Additionally, it is important to note that there is a university-wide limit on the number of concurrent users. If you need to use it for courses, you can make a reservation for usage slots. For more details, please refer to the “[Usage Limits and Reservations](#quota-and-reservation)” section.
+ ### Differences From a Typical Windows Device
+ The Remote Windows Environment differs from a typical Windows PC. Some of the differences are listed below:
+ #### If the connection is lost, any data you are working on may be deleted
+ In the following cases, the session will automatically be terminated, and all data and work history in the environment will be deleted.
+ - A certain period of time has passed since the last recorded user activity
+ - A certain period of time has passed since the connection was disconnected
+ - When using a service with a reservation, and the reserved time has ended (please note that the session may not be terminated exactly at the scheduled end time)
+ To prevent data loss, please be sure to save necessary files frequently and store them outside of this environment. The following can be used for external storage:
+ - OneDrive (some folders will automatically be synchronized with the cloud)
+   - OneDrive provided under the [UTokyo Microsoft License](/en/microsoft/) is automatically available on the virtual environment, which is linked to the UTokyo Account used to sign in to it.
+   - The Desktop, Documents and Pictures folders are automatically synchronized with OneDrive.
+   - You can also access OneDrive through Explorer. Files created there are automatically uploaded to OneDrive.
+ - Google Drive (selected folders are automatically synchronized with the cloud)
+   - Initial setup using the Google Drive app is required.
+   - Folders to be synchronized can be selected in the Google Drive app.
+ - Downloading via File Transfer
+   - If you do not wish to store files in cloud storage, you can download them to your local device.
+   - Please note that you need to download files each time you make changes in the remote environment in order to save them.
+ In addition, when using Microsoft 365 apps (such as Word or PowerPoint), you can save files directly to OneDrive from within the app.
+ Please note that [OneDrive](/en/microsoft/onedrive/#storage_capacity) and [Google Drive](/en/google/drive/#using_with_utokyo_account) have storage limits. Therefore, please be careful not to place unnecessarily large files in folders that are synchronized with the cloud.
+ #### Unable to Install New Apps
+ You cannot install new applications on the Remote Windows Environment (including from the Microsoft Store). In addition, actions that require administrative privileges (such as creating a WSL environment) are not permitted.
+ In particular, since the Zoom app is not installed in the Remote Windows Environment, if you need to share your screen in classes, please access Zoom from your local device and share your screen using a browser or Windows app.
+ #### Unable to Access Services Available Only on the UTokyo Network
+ Because the Remote Windows Environment is not on the UTokyo network, services that are available only within the University (including e-journals) cannot be accessed.
+ For access to e-journals, please consider using OpenAthens. For other services, please consider connecting from your local devices using the [UTokyo VPN](/en/utokyo_vpn/) instead of the Remote Windows Environment.
+ ## Specifications
+ The specifications are as follows:
+ - OS: Windows 11 Enterprise
+ - CPU: 2 vCPU
+ - Memory: 8 GB
+ - Storage: 256 GB
+   - Please note that, as described in “[Differences From a Typical Windows Device](#differences)”, data may be deleted after a certain period of time has passed since the connection was disconnected or since the last recorded user activity.
+ ### Available Software (partial list)
+ Software which requires high computing performance, such as CAD applications, may not perform well in this environment. If such software can be used on your local device, we recommend installing and using it there.
+ #### Software that Requires Software License Authentication, etc.
+ - Microsoft 365 Apps (Microsoft Office; Word, PowerPoint, etc.): Automatically activated based on the UTokyo Account used to sign in to the environment. Please note that these applications are available only to students and academic and administrative staff employed by the University of Tokyo.
+ - MATLAB: Sign in using your own MathWorks account. At the University of Tokyo, MATLAB is available at no additional cost under the [UTokyo MATLAB Campus-Wide License](/en/matlab/). For details on how to start using it, please refer to the [UTokyo MATLAB Campus-Wide License webpage](/en/matlab/#how-to-start).
+ - Autodesk Fusion: Sign in using your own Autodesk account. As of March 2026, it is available free of charge upon registration for [Autodesk Student Access](https://www.autodesk.com/education/edu-software/overview).
+ - JMP Pro: Sign in using your own My JMP account. As of March 2026, it is available free of charge upon registration for [JMP Student Edition](https://www.jmp.com/en/academic/jmp-student-edition).
+ - Stata/SE: A license is provided by the University.
+ - EndNote online: A license is provided by the University.
+ - TNTlite: A free version is installed.
+ #### Other Installed Software
+ A list of software installed in addition to the above is provided below. Other software may also be available, so please check the actual environment for details.
+ - Firefox
+ - Google Chrome
+ - Microsoft Edge
+ - Adobe Acrobat Reader DC
+ - VLC media player
+ - Microsoft Build of OpenJDK
+ - Visual Studio Code
+ - MinGW-w64
+ - Ruby
+ - GIMP
+ - Inkscape
+ - TeX Live
+ - R
+ - RStudio
+ ## Usage Limits and Reservations
+ The total number of concurrent users for the Remote Windows Environment is limited to 200 across the University.
+ Of these, 18 slots are available without reservations (free slots), and 182 slots require a reservation. As the number of free slots is limited, reservation in advance is recommended if you need to ensure access.
+ - Free Slots (3 slots x 6 groups = 18 slots in total): Available without reservation.
+   - Users are divided into 6 groups of approximately equal size, with 3 slots available per group.
+   - In the screen of the [Windows App](https://windows.cloud.microsoft/#/devices), they are displayed as “ECCS-FREEn” (where n is a number from 1 to 6). These options may not appear, or connections may fail, if the slots are full. For more details, please refer to the “[How to Use](./usage/)” section.
+ - Reserved slots (182 slots): Reservation in Advance required
+   - Reservation methods differ depending on what the virtual environment will be used for (e.g. for courses vs. for personal use). Please refer to the “[Reservations](./reservation/)” page for details.
+ ## How to Use
+ You can access the service via a web browser or a dedicated application. For detailed instructions, please refer to the “[How to Use](./usage/)” page.
+ Footnotes
+ - This is generally referred to as a Virtual Desktop Infrastructure (VDI). In particular, [Windows 365 Frontline](https://www.microsoft.com/ja-jp/windows-365) (in Japanese) is provided. [↩](#user-content-fnref-1)
```

[← 一覧へ](<../README.md>)
