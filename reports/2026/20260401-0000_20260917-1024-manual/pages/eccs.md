# 教育用計算機システム（ECCS）

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/eccs/`](<https://utelecon.adm.u-tokyo.ac.jp/eccs/>) | [`src/pages/eccs/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/eccs/index.mdx>) |
| English | 変更 | [`/en/eccs/`](<https://utelecon.adm.u-tokyo.ac.jp/en/eccs/>) | [`src/pages/en/eccs/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/eccs/index.mdx>) |

## 日本語

```diff
  タイトル: 教育用計算機システム（ECCS） | utelecon
- 説明: 目次: ...
+ 説明: 目次: ECCSとは; 利用案内; 不具合等・問い合わせ...
  
  # 教育用計算機システム（ECCS）
- このページは作成中です．公開までの間，基本的な使い方については，[ECCS2026暫定版マニュアル](https://docs.google.com/document/d/1ItPQcUj0EvydwHecoS87hN5l3eGbGz8k5nrenW2RXE8/edit?usp=sharing)を参照してください．
- 2026年3月26日(木) 14:30から教育用計算機システム(ECCS)の機器を利用した対面授業，ハイブリッド授業を行なう教員，ティーチングアシスタントと分散配置端末管理・担当責任者を対象にした[ECCSシステム利用説明会](/notice/2026/0326-eccs-seminar)を実施します．参加を希望される方はフォームから申込みしてください．また，説明会開催後に資料および動画は大学内限定で公開します．
- なお，2021年3月から運用してきたECCS2021は既に運用を停止しており，2026年3月からECCS2026が稼働を開始します．詳しくは[教育用計算機システム(ECCS2026)について](/notice/2025/eccs2026-announcement/)をご覧ください．
+ ## ECCSとは
+ 教育用計算機システム（Educational Campus-Wide Computing System, ECCS）は，東京大学の学生や教職員が，教育や研究のために利用できる，コンピュータなどを含む設備です．数年に一度の頻度でシステムを大きくリプレイスしており，現在提供されているのは2026年3月から稼働している「ECCS2026」です．ECCS2026は，学内に設置されている[ChromeOSデバイス](./chromeos/)や，[持込デバイス利用のための設備](./byod/)，[Windowsリモート環境](./vdi-windows/)などから構成されます．
+ なお，東京大学のGoogleアカウントである「ECCSクラウドメール」（g.ecc.u-tokyo.ac.jpで終わるメールアドレスのGoogleアカウント）についての全般的な情報は「[ECCSクラウドメール (Google Workspace)](/google/)」をご覧ください．（ただしECCSのChromeOSデバイスでの利用のみに関わる情報は「[ChromeOSデバイス利用席](./chromeos/)」のページで紹介しています．）
+ ## 利用案内
+ ECCS2026では，キャンパスの特定の場所で利用できる設備として，利用者が持ち込んだノートPCなどを外付けのディスプレイやキーボードなどにUSB Type-Cを介して接続して利用する「[持込デバイス利用席](./byod/)」と，ChromeOSデバイスとディスプレイなどが設置されている「[ChromeOSデバイス利用席](./chromeos/)」があります．なおChromeOSデバイス利用席では，ChromeOSデバイスを利用する代わりに，USB Type-C (Chromeboxが設置されている座席ではHDMI)を介して持ち込んだデバイスを接続して利用することも可能です．
+ これらの設備は，駒場・本郷・柏の各地区のキャンパスに合わせて1,000席以上設置されています．配置に関する情報は，以下の「[配置に関する情報](#location_and_business_hours)」のセクションをご覧ください．またこれらの設備が配置されている部屋にはUTokyo Wi-Fiのアクセスポイントも設置されており，持込デバイスでインターネット接続を利用することもできます．
+ ![ECCSの設備．持込デバイス利用席とChromeOSデバイス利用席があり，ChromeOSデバイス利用席にはChromebookまたはChromeboxが設置されている．Chromeboxはモニターの背面に「Chrome」ロゴが印字されたコンピュータがマウントされている．](/_astro/eccs_devices.drawio.webp)
+ 上記の設備に加え，ソフトウェアのみの設備として「[Windowsリモート環境](./vdi-windows/)」もあります．これはクラウド上に展開されたWindowsの仮想デスクトップ環境 (Virtual Desktop Infrastructure, VDI) (Windows 365 Frontline)で，学内外のデバイスからインターネットを通じてアクセスすることが可能です．性能や同時利用可能人数の制約等から高度・複雑な作業での利用には適していませんが，Windows上でしか実行できないアプリケーションを使う授業などでの利用が想定されています．
+ これらの設備の仕様や利用方法について詳しくは，次の各ページを参照してください．
+ - [持込デバイス利用席](./byod/)
+ - [ChromeOSデバイス利用席](./chromeos/)
+ - [Windowsリモート環境](./vdi-windows/)
+ ECCSの機器を利用した対面授業，ハイブリッド授業を行なう教員，ティーチングアシスタントと分散配置端末管理・担当責任者の方は[ECCS2026教員用マニュアル](https://docs.google.com/document/d/1JPT95A6OxDi-k6ZZ11VYIF66p4T8JYJ3MKDEbrf1gCQ/edit?usp=sharing) （大学内限定．ECCSクラウドメールのアカウントでのログインが必要）を参照してください．
+ ### 配置に関する情報
+ ECCSのChromeOSデバイス利用席や持込デバイス利用席を利用できる日・時間帯は，原則として各施設の開館日・開館時間によります．情報基盤センターが管理する施設に関しては，臨時の開閉館はuteleconのページを更新してお知らせします．それ以外の施設に関しては，それぞれの案内を参照してください．
+ #### 演習室・実習室
+ ##### 情報教育棟（駒場地区・駒場Ⅰキャンパス）
+ 駒場Ⅰキャンパスの情報教育棟には，ECCSの設備が最も集中的に配置されています．主に授業のために用いられる大・中・小の演習室と，自習のために用いられる自習室で，持込デバイス利用席やChromeOSデバイス利用席を利用できます．
+ また情報教育棟1階の自習室(E11教室)にはScanSnapが実験的に設置されており，紙の資料をスキャンして，持込PCやスマートフォン等に取り込むことも可能です．
+ 施設の管理は，情報基盤センターではなく，教養学部・大学院総合文化研究科が担当しています．詳細な利用方法については，[情報教育棟のウェブサイト](https://sites.google.com/site/iebtokyouniv/)を確認してください．授業等で演習室を利用したい場合も，情報基盤センターではなく，教養学部等事務部教務課に問い合わせてください．
+ ##### 情報基盤センター（本郷地区・浅野キャンパス）
+ 浅野キャンパスの情報基盤センターには，1階にある2つの大演習室と1つの自習室に，持込デバイス利用席やChromeOSデバイス利用席が設置されています．
+ 演習室は，学部や学科等を問わず，授業などの目的で利用できます．演習室は利用が予約されている時間のみ開室します．演習室の利用を希望する方は，「[浅野情報基盤センター（本郷）演習室の予約方法・予約状況](./asano-reservation/)」をご覧ください．
+ 浅野キャンパスの大演習室について，移転計画があります．また仮移転中は自習室の利用ができません（本移転後については未定です）．詳細は「[2026年度以降の浅野大演習室の利用について（続報）](/notice/2026/0116-asanoyoyaku/)」をご覧ください．
+ ##### 福武ホール（本郷地区・本郷キャンパス）
+ 本郷キャンパスの福武ホール地下1階の「全学スペース7 情報基盤センター実習室」では，持込デバイス利用席やChromeOSデバイス利用席を自習目的で利用できます．
+ なお実習室には窓がなく，換気のため入口を常に開放しています．そのため，授業での利用は受け付けていません．
+ 福武ホールの実習室は現在，月・火・木の週3日のみ開室しています．詳しくは，[【ECCS】福武ホールECCS窓口，演習室の閉室日](https://www.itc.u-tokyo.ac.jp/education/2025/06/20/post-5223-2/)をご覧ください．
+ ## 不具合等・問い合わせ
+ ### 不具合がある場合
+ 既知の不具合に関する情報については「[ECCS関連の不具合等の情報](./defects/)」をご覧ください．
+ また不具合があり利用者自身での復旧が困難な場合や，未知の不具合を見つけた場合は，「[ECCSの利用に関するサポート](./support/)」のページに記載の問い合わせ窓口に問い合わせてください．
+ ### 忘れ物をした場合
+ 基本的にはutelecon相談員ではなく，忘れ物をした部屋の施設管理を担当する窓口に問い合わせてください．またキャンパス・施設ごとの落とし物・忘れ物に関する案内も参照してください．
+ - 本郷地区: [遺失物・拾得物の取扱い](https://www.u-tokyo.ac.jp/ja/students/campus-life/h13_06_02.html)
+   - 総合図書館: [お問い合わせ](https://www.lib.u-tokyo.ac.jp/ja/library/general/inquiry)(「本館の遺失物」の項目を参照)
+ - 駒場地区: [駒場キャンパス内で忘れ物 落し物をしたとき、拾ったとき](https://www.c.u-tokyo.ac.jp/campuslife/procedures/lost-found/index.html)
+   - 情報教育棟: [忘れ物について](https://sites.google.com/site/iebtokyouniv/home/ieb/lost_and_found?authuser=0)
+   - 駒場図書館: [よくある質問](https://www.lib.u-tokyo.ac.jp/ja/library/komaba/faq)(「館内で落し物・忘れ物をしたときは？」を参照)
+ - 柏地区
+   - 柏図書館: [アクセス・お問い合わせ](https://www.lib.u-tokyo.ac.jp/ja/library/kashiwa/contact)(「遺失物」の項目を参照)
+ なおutelecon相談員が配置されている部屋の場合，utelecon相談員は利用者の方から忘れ物を受け取って一時的に預かることはありますが，勤務終了時までには建物の受付に引き渡すか忘れ物ボックスに入れる対応をとります．
```

## English

```diff
  タイトル: Educational Campus-Wide Computing System (ECCS) | utelecon
- 説明: Table of Contents: ...
+ 説明: Table of Contents: What is ECCS?; Usage Overview; Issues and Inquiries...
  
  # Educational Campus-Wide Computing System (ECCS)
- This page is currently under construction. Until this page is officially published, please refer to the [ECCS2026 provisional manual(in Japanese)](https://docs.google.com/document/d/1ItPQcUj0EvydwHecoS87hN5l3eGbGz8k5nrenW2RXE8/edit?usp=sharing) for basic usage instructions.
- The [ECCS System Usage Seminar](/notice/2026/0326-eccs-seminar) will be held on Thursday, March 26, 2026, from 14:30 for faculty members, teaching assistants, and PC room administrators who use the Educational Campuswide Computing System (ECCS) equipment for in-person or hybrid classes. Those who wish to attend should register using the form on the page. The presentation materials and video will be made available to University members only after the seminar.
- Please note that ECCS2021, which had been in operation since March 2021, has already ceased operations, and ECCS2026 will begin operations in March 2026. For more details, please refer to [About the Educational Campus-wide Computing System (ECCS2026)](/notice/2025/eccs2026-announcement/) (in Japanese).
+ ## What is ECCS?
+ The Educational Campus-Wide Computing System (ECCS) is a set of resources, including computers, that students and staff of the University of Tokyo can use for research and education.
+ The ECCS undergoes major upgrades every few years, and the current system, “ECCS2026,” has been in operation since March 2026.
+ ECCS2026 consists of [ChromeOS devices installed across the campuses](./chromeos/), [facilities for BYOD (bring your own device)](./byod/), and [the Remote Windows Environment](./vdi-windows/).
+ Please refer to the “ECCS Cloud Email (Google Workspace)” page for general information about the “ECCS Cloud Email” (a Google account with an email address ending in g.ecc.u-tokyo.ac.jp). (For information specifically related to the use of ECCS ChromeOS devices, please see the [“ChromeOS Devices Station”](./chromeos/) page (this page is currently under construction)).
+ ## Usage Overview
+ ECCS2026 provides two kinds of facilities at specific locations on campus: [“BYOD Stations”](./byod/) and [“ChromeOS Device Stations”](./chromeos/). The “BYOD Stations” are seating areas where users can connect their own laptops and other devices to external displays, keyboards, etc. via USB Type-C cables. “ChromeOS Device Stations” refer to seating areas equipped with ChromeOS devices, displays, etc. for use. At these ChromeOS Device Stations, users may also choose to connect their own devices via USB Type-C cable (HDMI at seats equipped with a Chromebox) instead of using the provided ChromeOS devices.
+ Altogether, these facilities include more than 1,000 seats across the Komaba, Hongo, and Kashiwa Campuses. For information on their locations, please refer to the [“Information on Facility Locations”](#location_and_business_hours) section below. In addition, these facilities are equipped with UTokyo Wi-Fi access points, allowing users to connect to the internet using their own devices.
+ ![Image of ECCS facilities: BYOD Stations and ChromeOS Device Stations. ChromeOS Device Stations are equipped with Chromebooks or Chromeboxes; the Chromebox is a computer mounted on the back of a monitor with a "Chrome" logo printed on it.](/_astro/eccs_devices.drawio.webp)
+ In addition to the physical facilities described above, the ECCS2026 also includes a software-based service called the [“Remote Windows Environment”](./vdi-windows/). This is a Windows Virtual Desktop environment (Virtual Desktop Infrastructure, VDI), which can be accessed using devices on and off campus via the internet. Although it is not suitable for highly complex tasks due to its performance limitations and restrictions on the number of concurrent users, it is intended for use in courses that require applications available only on Windows.
+ For more details on the specifications and the use of these facilities, please refer to the following pages.
+ - [BYOD Stations](./byod/)
+ - [ChromeOS Device Stations](./chromeos/)
+ - [Remote Windows Environment](./vdi-windows/)
+ For faculty members and teaching assistants conducting face-to-face or hybrid classes using ECCS equipment, as well as administrators and supervisors responsible for distributed terminals, please refer to the [ECCS2026 Faculty Manual](https://docs.google.com/document/d/1JPT95A6OxDi-k6ZZ11VYIF66p4T8JYJ3MKDEbrf1gCQ/edit?usp=sharing) (In Japanese. On-campus access only. Login with an ECCS Cloud Mail account is required).
+ ### Information on Facility Locations
+ The days and hours during which the ChromeOS Device Stations and BYOD Stations are available are generally determined by the opening days and hours of each facility. For facilities managed by the Information Technology Center, temporary changes to opening hours will be announced on the utelecon website. For other facilities, please refer to the information provided by each individual facility.
+ #### PC Classrooms and Self-Study Rooms
+ ##### Information Education Building (Komaba 1 Campus, Komaba area)
+ ECCS facilities are most concentrated in the Information Education Building on the Komaba 1 Campus. There are BYOD stations and ChromeOS device stations available in the Large, Medium, and Small PC classrooms (which are used mainly for classes), and in the self-study rooms.
+ In addition, a ScanSnap scanner is currently installed experimentally in the self-study room (E11) on the first floor of the Information Education Building. It can be used to scan paper documents and import the data onto the users’ own devices, such as laptops and smartphones.
+ These facilities are managed by the College of Arts and Sciences and the Graduate School of Arts and Sciences, not by the Information Technology Center. For detailed information on how to use them, please refer to [the Information Education Building website](https://sites.google.com/site/iebtokyouniv/). If you would like to use PC classrooms for courses, please contact the Academic Affairs Division of the College of Arts and Sciences.
+ ##### Information Technology Center (Asano Campus, Hongo Area)
+ BYOD stations and ChromeOS device stations are installed in two Large PC rooms and one self-study room on the first floor of the Information Technology Center on the Asano Campus.
+ The PC classrooms can be used for classes regardless of faculty or department, and are open only during reserved time slots. If you wish to use the PC classrooms, please refer to the [“How to Make a Reservation for PC Classrooms/Reservation Status for PC Classrooms at the Information Technology Center (Asano Campus, Hongo)”](./asano-reservation/) page.
+ There are plans to relocate the large PC classrooms on the Asano Campus. During this temporary relocation period, the self-study room will not be available for use (its availability after the permanent relocation has not yet been decided). For more details, please refer to [“Use of Large PC Classrooms on the Asano Campus from the 2026 academic year (Follow-up Report)”](/notice/2026/0116-asanoyoyaku/) (currently available only in Japanese).
+ ##### Fukutake Hall (Hongo Campus, Hongo Area)
+ BYOD stations and ChromeOS device stations are available for self-study use in the “Common Space 7 ITC ECCS Room” on basement level 1 of Fukutake Hall on the Hongo Campus.
+ Please note that this room has no windows, and the entrance is kept open at all times for ventilation. For this reason, it is not available for class use.
+ This study room at Fukutake Hall is currently open only three days a week: Monday, Tuesday, and Thursday. For more details, please refer to [“【ECCS】Opening Days of the ECCS HelpDesk and Study Room at Fukutake Hall”](https://www.itc.u-tokyo.ac.jp/education/2025/06/20/post-5223-2/) (currently available only in Japanese).
+ ## Issues and Inquiries
+ ### If you encounter any issues
+ For information on known issues, please refer to the [“Information on ECCS-Related Issues, etc.”](./defects/) page.
+ Alternatively, if you are unable to resolve an issue on your own or encounter an unknown issue, please contact the support desk listed on the [“Support for ECCS usage”](./support/) page.
+ ### If you have lost an item
+ As a general rule, please contact the office responsible for managing the facility where you lost the item, rather than the utelecon Support Staff. In addition, please refer to the following information on lost and found services at each campus and facility.
+ - Hongo Area: [遺失物・拾得物の取扱い](https://www.u-tokyo.ac.jp/ja/students/campus-life/h13_06_02.html) (currently available only in Japanese)
+   - General Library: [Inquiry](https://www.lib.u-tokyo.ac.jp/ja/library/general/inquiry) (refer to 本館の遺失物 - currently available only in Japanese)
+ - Komaba Area: [駒場キャンパス内で忘れ物 落し物をしたとき、拾ったとき](https://www.c.u-tokyo.ac.jp/campuslife/procedures/lost-found/index.html) (currently available only in Japanese)
+   - Information Education Building: [Lost and Found](https://sites.google.com/site/iebtokyouniv/home/ieb/lost_and_found?authuser=0)
+   - Komaba Library: [FAQ](https://www.lib.u-tokyo.ac.jp/en/library/komaba/faq) (refer to “What should I do if I lost something in the library?”)
+ - Kashiwa Area
+   - Kashiwa Library: [Access / Contact](https://www.lib.u-tokyo.ac.jp/en/library/kashiwa/contact) (refer to “Others” > “Lost Items”)
+ In rooms where utelecon Support Staff are present, they may occasionally receive lost and found items from users and keep them temporarily. However, they usually hand the items over to the building’s administration office or place them in the area’s lost and found box at the end of their shift.
```

[← 一覧へ](<../README.md>)
