# 東京大学のシステム

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/systems/`](<https://utelecon.adm.u-tokyo.ac.jp/systems/>) | [`src/pages/systems/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/systems/index.mdx>) |
| English | 変更 | [`/en/systems/`](<https://utelecon.adm.u-tokyo.ac.jp/en/systems/>) | [`src/pages/en/systems/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/systems/index.mdx>) |

## 日本語

```diff
  - 教職員向けのシステム（事務システム等）については，[UTokyo Portal](https://login.adm.u-tokyo.ac.jp/utokyoportal)に情報を掲載しているものもあります．
  - ICT管理者向けのシステムについては，[学内ICT管理者向け情報ページ](/ict-admin/)にまとめています．
- - 「[オンラインを活用するために：使えるツールから探す](/online/tools/)」のページでは，大学として運用・契約しているものに限らず，オンラインでの授業・活動で活用できるさまざまツールを紹介しています．
+ - 「[オンラインを活用するために：使えるツールから探す](/online/tools/)」のページでは，大学として運用・契約しているものに限らず，オンラインでの授業・活動で活用できるさまざまなツールを紹介しています．
  - 学部・研究科等において独自に提供されているシステムについては，提供元の情報を確認してください．
  ## 主要なシステム
  ⋯
  - [NII FileSender](/filesender/)：国立情報学研究所(NII)が提供するファイル転送サービスです．
  ## 学内システム全般
- - [ECCS端末](/eccs/)：キャンパス内に設置されているパソコンです．利用には事前に利用権の申請が必要ですので，注意してください．
+ - [教育用計算機システム(ECCS)](/eccs/)：東京大学の学生や教職員が，教育や研究のために利用できる，コンピュータなどを含む設備です．学内に設置されているChromeOSデバイスや持込デバイス利用のための設備，特定のソフトウェアをリモートで利用できる環境などから構成されます．
  - [UTokyo VPN](/utokyo_vpn/)：学内ネットワーク専用の事務システムなどにキャンパス外からアクセスするためのシステムです．
  - [全学向け高速計算機・データ活用基盤](/research_computing/)：東京大学が学内の教員や学生の研究や学習に提供している高速計算機やデータ活用基盤です．
  ⋯
  ### 図書館・電子ジャーナル関連
  - [東京大学OPAC](https://opac.dl.itc.u-tokyo.ac.jp/opac/opac_search/)：図書館の蔵書検索や貸出・予約等の手続きを行うシステムです．
- - [EZproxy](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus/ezproxy)：東京大学が契約している学内者限定の電子ジャーナルにキャンパス外からアクセスするためのシステムです．
+ - [OpenAthens](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus)：東京大学が契約している学内者限定の電子ジャーナルにキャンパス外からアクセスするためのシステムです．
  - [Literacy](https://www.lib.u-tokyo.ac.jp/ja/library/literacy)：論文などの学術情報を探す際の「入り口」となるサイトです．
  - [TREE (UTokyo REsource Explorer)](https://tokyo.summon.serialssolutions.com/)：さまざまなデータベース・電子ジャーナルを横断して学術情報を検索できる，東大構成員のためのシステムです．
```

## English

```diff
  - [Zoom](/en/zoom/): This is a web conferencing system. Under the University of Tokyo’s license, you can host meetings with up to 300 participants and a maximum duration of 30 hours.
  - [Webex](/en/webex/): This is a web conferencing system. Under the University of Tokyo’s license, you can host meetings with up to 1,000 participants and a maximum duration of 24 hours.
- - [ECCS Cloud Mail (Google Workspace)](/en/google/): This service allows you to use Google’s system with your University of Tokyo account (UTokyo Account). You can use your University of Tokyo email address (xxxx@g.ecc.u-tokyo.ac.jp) through Gmail. When you create a UTokyo Account, it enables a sharing setting called “limited access”, which restricts visibility to UTokyo Accounts, a feature not available with regular Google accounts. Even if you already have a Google account, you will need to set up your UTokyo Account to access pages restricted to UTokyo Accounts.
+ - [ECCS Cloud Email (Google Workspace)](/en/google/): This service allows you to use Google’s system with your University of Tokyo account (UTokyo Account). You can use your University of Tokyo email address (xxxx@g.ecc.u-tokyo.ac.jp) through Gmail. When you create a UTokyo Account, it enables a sharing setting called “limited access”, which restricts visibility to UTokyo Accounts, a feature not available with regular Google accounts. Even if you already have a Google account, you will need to set up your UTokyo Account to access pages restricted to UTokyo Accounts.
  - [UTokyo Microsoft License](/en/microsoft/): This service allows you to use Microsoft’s system with your university account. You can download Microsoft Office applications, such as Word and Excel, for free. Similar to Google, it enables a sharing setting called “limited access”, restricting visibility to university accounts. To access such restricted pages, you must ensure that your university account is set up for use.
  - [UTokyo Slack](/en/slack/): This is a type of business chat tool used for communication through text messages. A key feature is the ability to create multiple “channels” where text messages can be posted, allowing separate conversations to take place simultaneously. In UTokyo Slack, “workspaces”, which are units where people gather to communicate, can be created upon request by faculty and staff members.
  - [Slido](/en/slido/): This is a web service that provides features for interactive communication with participants during classes, meetings, and lectures, such as Q&A sessions, live polls, and surveys. It integrates with Webex, allowing you to access premium features by signing in with your University of Tokyo Webex account.
  - [UTokyo MATLAB Campus-Wide License](/en/matlab/): This service allows you to use MATLAB, a software for scientific and technical computing, under the University of Tokyo’s campus-wide license.
- - [UTokyo Azure](/research_computing/utokyo_azure/) (in Japanese)： This service is available across the university. It is funded by a donation (gift credit) from Microsoft, based on the basic agreement concluded between the university and Microsoft.
+ - [UTokyo Azure](/en/research_computing/utokyo_azure/)： This service is available across the university. It is funded by a donation (gift credit) from Microsoft, based on the basic agreement concluded between the university and Microsoft.
  - [only for educational use] [UTokyo Microsoft Azure Dev Tools for Teaching](/en/microsoft/adt4t/): This service provides Microsoft developer software for educational use.
  - [UTokyo Antivirus License](/en/antivirus/): This comprehensive antivirus software license is provided for faculty and students. The University of Tokyo requires “[appropriate virus protection](https://www.u-tokyo.ac.jp/adm/cie/ja/index.html) (in Japanese)” for computers, as stated in the “Information Ethics and Computer Use Guidelines”. Please use this software as part of your virus protection measures.
  ## University-wide Systems
- - [ECCS Terminals](https://www-old.ecc.u-tokyo.ac.jp/en/): These are computers located on campus. Please note that you need to apply for usage rights in advance.
+ - [Educational Campus-Wide Computing System (ECCS)](/en/eccs/): ECCS) is a facility including computers and other equipment available to the students, faculty, and staff of the University of Tokyo for education and research. It consists of on-campus ChromeOS devices, facilities for using personal devices, and environments that allow remote access to specific software.
  - [UTokyo VPN](/en/utokyo_vpn/): This system allows you to access administrative systems that are restricted to the university network from outside the campus.
- - [High-speed computing and data utilization infrastructure for the university](/research_computing/) (in Japanese)： This is a high-speed computing and data utilization infrastructure provided by the University of Tokyo for the research and learning of faculty and students.
+ - [High-speed computing and data utilization infrastructure for the university](/en/research_computing/)： This is a high-speed computing and data utilization infrastructure provided by the University of Tokyo for the research and learning of faculty and students.
  - [University of Tokyo Online Lecture Search System (UTAS Lite2, UTIL Lite)](https://utelecon-directory.adm.u-tokyo.ac.jp/en/)：This system is used to verify URLs for online classes. For more details, please also refer to the pages “[How to Obtain the Online Class URL (for Students)](/en/oc/url/)” and “[How to Announce Online Class URL (for Faculty Members)](/en/faculty_members/url/)”.
  - [For Faculty and Staff] [UTokyo Portal](https://login.adm.u-tokyo.ac.jp/utokyoportal): This is the university portal site for faculty and staff.
  ### Library and Electronic Journal Resources
  - [The University of Tokyo Library OPAC](https://opac.dl.itc.u-tokyo.ac.jp/opac/opac_search/?lang=1): This is the system used for searching library collections and managing borrowing and reservations.
- - [EZproxy](https://www.lib.u-tokyo.ac.jp/en/library/literacy/user-guide/campus/offcampus/ezproxy): This system allows access to electronic journals contracted by the University of Tokyo from outside the campus. Its use is restricted to university members.
+ - [OpenAthens](https://www.lib.u-tokyo.ac.jp/en/library/literacy/user-guide/campus/offcampus): This system allows access to electronic journals contracted by the University of Tokyo from outside the campus. Its use is restricted to university members.
  - [Literacy](https://www.lib.u-tokyo.ac.jp/en/library/literacy): This is a site that serves as an “entrance” for searching academic information, such as research papers.
  - [TREE (UTokyo REsource Explorer)](https://tokyo.summon.serialssolutions.com/en/): This is a system for members of the University of Tokyo that allows the search of academic information across various databases and electronic journals.
```

[← 一覧へ](<../README.md>)
