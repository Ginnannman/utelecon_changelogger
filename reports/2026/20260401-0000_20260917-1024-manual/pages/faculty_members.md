# 東京大学における情報システムの準備について（教員向け）

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/faculty_members/`](<https://utelecon.adm.u-tokyo.ac.jp/faculty_members/>) | [`src/pages/faculty_members/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/faculty_members/index.mdx>) |
| English | 変更 | [`/en/faculty_members/`](<https://utelecon.adm.u-tokyo.ac.jp/en/faculty_members/>) | [`src/pages/en/faculty_members/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/faculty_members/index.mdx>) |

## 日本語

```diff
  
  # 東京大学における情報システムの準備について（教員向け）
- 2026/3/16 15:30から，説明会「[東京大学における情報システムとコミュニケーションツール](/events/2026-03-16/)」を開催します．本ページとあわせてご参照ください．
+ 2026/9/9 に，説明会「[東京大学における情報システムとコミュニケーションツール](/events/2026-09-09/)」を開催しました．説明会の資料と動画をリンク先のページで提供していますので，本ページとあわせてご参照ください．
  ## 基本的なご案内
  東京大学で授業を行う際には，授業形態が対面型かオンライン型かにかかわらず，さまざまな情報システムを使うことになります．このページでは，そのために必要なアカウントの初期設定と，授業で使われる主なシステムについて説明します．
  職員の方は[東京大学における情報システムの準備について（職員向け）](/staff_members/)をご参照ください．
- アカウントの初期設定では、以下の3つを行う必要があります．
+ アカウントの初期設定では，以下の3つを行う必要があります．
  - パスワードを初期パスワードから変更する
  - 多要素認証を設定する
- - 情報セキュリティ教育を受講し、テストに合格する
+ - 情報セキュリティ教育を受講し，テストに合格する
  詳細については，後述の説明をご参照ください．
  ### 授業形態とその取り扱いについて
  ⋯
  - パスワードの更新が求められるので，パスワード通知書の初期パスワードを「現在のパスワード」に入力し，新しく設定するパスワードを「新しいパスワード」と「パスワードの確認入力」に入力してください．
    - パスワードは英大文字，英小文字，数字，記号の4種類のうち3種類以上を使い，文字数を12文字以上64文字以下に設定する必要があります． ただし，財務会計システム・予算執行管理システムでは，パスワードが32文字までしか入力できないため，このシステムを利用する場合にはパスワードを32文字以下に設定することを推奨しております．
- - サインインに成功したら「情報を表示」ボタンを押してください．多要素認証の利用状況（「利用していません」）や情報セキュリティ教育の受講状況（「受講していません」）が表示されるので、多要素認証の有効化、情報セキュリティ教育の受講へと進んでください．
+ - サインインに成功したら「情報を表示」ボタンを押してください．多要素認証の利用状況（「利用していません」）や情報セキュリティ教育の受講状況（「受講していません」）が表示されるので，多要素認証の有効化，情報セキュリティ教育の受講へと進んでください．
  この手順がうまくいかないときのヘルプ
  - 初期パスワードを変更したのに，「これに対するアクセス権がありません」または「You don’t have access to this」というエラー（エラーコード 53003）が表示される場合：パスワードの変更後，実際にシステムを利用できるようになるまで，少し時間がかかる（最大30分）場合があります．しばらくお待ちいただき，再度操作をお試しください．
  ⋯
  これらを確認して，それでもうまくいかなければ，[サポート窓口](/support/)に相談してください．
  ### 【推奨】UTokyo Account本人確認サービスの事前連携
- ご自身のマイナンバーカードをUTokyo Accountと[あらかじめひも付けておく](/utokyo_account/ident-myna/link/)ことで，UTokyo Accountでサインインできなくなったときなどに本人確認に利用できます．詳しくは，[UTokyo Account本人確認サービスの説明](/utokyo_account/ident-myna/)を参照してください．（なお[UTokyo Account本人確認サービスの事前連携](/utokyo_account/ident-myna/link/)には物理的なマイナンバーカード[1](#user-content-fn-1)やその暗証番号，マイナンバーカードの読み取りに対応したスマートフォンが必要です．これらが手元にない場合は，一旦この手順を飛ばしても問題ありません．）
+ [UTokyo Account本人確認サービス](/utokyo_account/ident-myna/)で，ご自身のマイナンバーカードをUTokyo Accountとあらかじめひも付けておく（事前連携を行う）ことで，UTokyo Accountでサインインできなくなったときなどの本人確認が便利になります．ただし，[UTokyo Account本人確認サービスの事前連携](/utokyo_account/ident-myna/link/)には物理的なマイナンバーカード[1](#user-content-fn-1)やその暗証番号，マイナンバーカードの読み取りに対応したスマートフォンが必要です．事前連携が難しい状況の場合，この作業を飛ばしても問題ありません．（後日，連携することも可能です．また事前連携をしていなくてもサービスは全て利用できます．）
+ ひも付ける手順については，「[UTokyo Account本人確認サービスの事前連携について](/utokyo_account/ident-myna/link/)」を参照してください．
  Footnotes
- - 2025年9月現在，いわゆる[スマートフォンのマイナンバーカード](https://www.digital.go.jp/policies/mynumber/smartphone-certification)（Androidのスマホ用電子証明書やiPhoneのマイナンバーカード）は利用できません． [↩](#user-content-fnref-1)
+ - マイナンバー通知書や通知カードは利用できません．また2025年9月現在，いわゆる[スマートフォンのマイナンバーカード](https://www.digital.go.jp/policies/mynumber/smartphone-certification)（Androidのスマホ用電子証明書やiPhoneのマイナンバーカード）は利用できません． [↩](#user-content-fnref-1)
  ## 学務システム「UTAS」を使う
  「[UTAS](https://utas.adm.u-tokyo.ac.jp/campusweb/campusportal.do)」は，東京大学の学務システムです．シラバスの入力や成績の報告などに使われます．具体的な操作については，授業を開講する部局の学務・教務担当からの案内・指示を確認してください．また，UTASにログインして上部のメニューで「その他」を押すと表示される「ダウンロードセンター」からマニュアルをダウンロードすることもできます．
  ⋯
  [UTokyo Portal](https://login.adm.u-tokyo.ac.jp/utokyoportal)は教職員向けの学内ポータルサイトです．業務に必要な手続きや資料の確認を行えるほか，様々な「やりたいこと」に対応したマニュアルを便利帳としてトップページの下部に掲載しています．また各種通知につきましてもこのページに掲載されますので，ご確認ください．
  ### その他
- - [ECCS端末](/eccs/)
-   - キャンパス内に設置されているパソコンです．プログラミング環境や統計・3DCGなどの各種ソフトウェアが導入されており，自分でインストール作業をしなくても使うことができます．利用には事前に手続きが必要です．
- - [EZproxy](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus/ezproxy)
+ - [教育用計算機システム(ECCS)](/eccs/)
+   - 東京大学の学生や教職員が，教育や研究のために利用できる，コンピュータなどを含む設備です．学内に設置されているChromeOSデバイスや持込デバイス利用のための設備，特定のソフトウェアをリモートで利用できる環境などから構成されます．事前の予約等により，授業で利用することも可能です．
+ - [OpenAthens](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus)
    - 東京大学が契約している学内者限定の電子ジャーナルにキャンパス外からアクセスするためのシステムです（教職員だけでなく学生も利用することができます）．
  - [UTokyo VPN](/utokyo_vpn/)
  ⋯
  ここでは，授業の録画を行い，それを共有する方法を説明します（授業の録画は，機器や回線のトラブルあるいは体調不良などで授業に出席できなかった学生が授業を受けるための手段となるだけでなく，そうでない学生にとっても，復習のために見返すことができる，一時停止をするなど自分のペースで学ぶことができる，といった点において役立つと考えられます）．
  - Zoomには，録画を行う「レコーディング」機能があります．特に「クラウド レコーディング」機能では，動画をZoomのクラウド上に保存し，それをそのまま公開することができます．公開の際に閲覧可能な範囲を東京大学のアカウントに限定することも可能です．
-   - 詳細は「[（Zoom 教員編）クラウドに録画する](/zoom/how/faculty_members/recording_cloud/)」をご覧ください．
+   - 詳細は「[Zoom レコーディング機能の使い方](/zoom/usage/recording/)」をご覧ください．
  - Zoomで録画した動画について，一部を削除するなどの編集をした上で公開したい場合は，GoogleドライブやYouTubeにアップロードすることが一般的と思われます．この場合も，閲覧可能な範囲を東京大学のアカウントに限定することができます．
    - これらの機能についての詳細は「[Googleドライブ](/google/drive/)」や「[YouTubeのコンテンツを学内構成員限定で公開する](https://www.sodan.ecc.u-tokyo.ac.jp/hack/youtube-utokyo-only/)」をご覧ください．
  ⋯
    - 出席の登録にはログインが必要ですが，「ワンタイムパスワード」を学生間でやり取りして実際には出席していない学生が登録してしまうことがシステム上は避けられません．
  - Zoomのレポート機能：Zoomの会議室に入っていた参加者の一覧を閲覧・ダウンロードできる機能です．
-   - 操作方法などを「[（Zoom 教員編）出席管理を行う](/zoom/how/faculty_members/attendance/)」のページで説明しています．
+   - 操作方法などを「[（Zoom 教員編）出席管理を行う](/zoom/misc/report/)」のページで説明しています．
    - 東京大学のZoomアカウントでサインインしている参加者については，実際に本人が参加していたと判断できると考えられます．
    - Zoomにサインインしていない参加者については，名前を参加者自身で設定できるため，誰が参加していたのか確実に分かるわけではありません．
```

## English

```diff
  
  # Getting Ready for ICT Systems at UTokyo (for Faculty Members)
- An information session titled “[Information Session on ICT Systems and Tools for UTokyo Members (Conducted in Japanese)](/events/2026-03-16/)” will be held on March 16, 2026 at 3:30 PM. Please refer to this page as well.
+ An information session titled “[Information Session on ICT Systems and Tools for UTokyo Members (Conducted in Japanese)](/events/2026-09-09/)” was held on September 9, 2026. Materials and recordings of the session are provided on the linked page. Please refer to this page as well.
  ## Basic Information
  When conducting classes at UTokyo, various information systems will be used regardless of whether the class format is face-to-face or online. This page explains the initial setup of the necessary accounts and the main systems used in classes.
- If you are a staff member, please see the “[Getting Ready for ICT Systems at the UTokyo (for Staff Members)](/en/staff_members/)” page.
+ If you are a staff member, please see the “[Getting Ready for ICT Systems at UTokyo (for Staff Members)](/en/staff_members/)” page.
  In the initial setup of your account, you need to do three things.
  - Change your password from the initial password
  ⋯
  “[The Tools Usage Guideline for Online Class Since S Semester 2021](/en/docs/guideline/)” is the established guideline for online classes. Please also check your department’s policy on conducting online classes because each department may have its own policy.
  ### Troubleshooting: Technical Support Desk
- If you have any problems or need advice on using information systems, please consult the [Technical Support Desk](/en/support/). The Technical Support Desk provides consultation services through three tools: chat, online call, email form, and on-site. The Technical Support Desk will respond quickly through the collaboration of student staff “Common Supporters” and faculty members.
+ If you have any problems or need advice on using information systems, please consult the [Technical Support Desk](/en/support/). The Technical Support Desk provides consultation services through four tools: chat, online call, email form, and on-site. The Technical Support Desk will respond quickly through the collaboration of student staff “Common Supporters” and faculty members.
  ## Overall view of the UTokyo system
  UTokyo provides various information systems such as Microsoft, Google, and so on. In order to use these various systems, you need to sign in using a university-wide account called UTokyo Account. The following figure shows an overview of the UTokyo information systems.
  ⋯
  If the issue is still not resolved, please consult the [Technical Support Desk](/en/support/).
  ### [Recommended] Pre-linking the UTokyo Account Identity Verification Service
- By [linking your Individual Number Card (My Number Card) to your UTokyo Account in advance](/en/utokyo_account/ident-myna/link/), you can use it for identity verification when you are unable to sign in to your UTokyo Account. For details, please see the [UTokyo Account Identity Verification Service page](/en/utokyo_account/ident-myna/). (Note that [pre-linking the UTokyo Account Identity Verification Service](/en/utokyo_account/ident-myna/link/) requires a physical Individual Number Card ([My Number Card](https://www.digital.go.jp/en/policies/mynumber))[1](#user-content-fn-1), its PIN, and a smartphone capable of reading the card. If you do not have these at hand, you may skip this step for now.)
+ By pre-linking your Individual Number Card (My Number Card) to your UTokyo Account in advance using the [UTokyo Account Identity Verification Service](/en/utokyo_account/ident-myna/), you can conveniently verify your identity in situations such as when you are unable to sign in to your account. However, [pre-linking for the UTokyo Account Identity Verification Service](/en/utokyo_account/ident-myna/link/) requires a physical Individual Number Card[1](#user-content-fn-1), its PIN, and a smartphone capable of reading the card. If it is difficult to complete the pre-linking at this time, you may skip this step. (It is possible to link them at a later date, and all services are available even without pre-linking.)
+ For the procedure to link your card, please refer to “[How to set up the UTokyo Account Identity Verification Service](/en/utokyo_account/ident-myna/link/)”.
  Footnotes
- - As of September 2025, the so-called [smartphone-based My Number Card](https://www.digital.go.jp/en/policies/mynumber/smartphone-certification) (Android smartphone digital certificates and iPhone My Number Cards) cannot be used. [↩](#user-content-fnref-1)
+ - Individual Number Notice or Notification Cards cannot be used. Additionally, as of September 2025, the so-called [smartphone-based My Number Card](https://www.digital.go.jp/en/policies/mynumber/smartphone-certification) (Android smartphone electronic certificates or iPhone My Number Cards) cannot be used. [↩](#user-content-fnref-1)
  ## Using the Academic Affairs System “UTAS”
  [UTAS](https://utas.adm.u-tokyo.ac.jp/campusweb/campusportal.do?locale=en_US) is UTokyo’s academic affairs system, which is used to input syllabi and grades. For information on how to use UTAS, please check the academic affairs office of your faculty/graduate school, or log in to UTAS, then click “Other” in the menu at the top of the screen and download the manual from the “Download Center”.
  ⋯
  - Information notices: This feature allows instructors to contact students. Depending on the student’s settings, the message will be sent by email, LINE, or [UTokyo Slack](/en/slack/).
  - Messages: This feature allows course participants to contact each other. By default, messages from other participants are sent to the email address registered in the staff directory, but this can be changed from “Settings” in the upper right corner.
- - Course Materials: This feature allows you to distribute class materials. For more details on how to use this feature, please see the “[Using the Course Materials function in UTOL](/en/utol/lecturers/materials/)” page.
- - Assignments: This feature allows you to upload reports and other assignments online. For more details on how to use this feature, please see the “[Using the Assignment function in UTOL](/en/utol/lecturers/assignments/)” page.
- - Quizzes: This feature allows you to conduct online tests. It enables you to set a time limit for answering questions or to automatically grade multiple-choice questions. For more details on how to use this feature, please see the “[Using the Quiz function in UTOL](/en/utol/lecturers/quizzes/)” page.
+ - Course Materials: This feature allows you to distribute class materials. For more details on how to use this feature, please see the “[Using the Course Materials function in UTOL (for Course Instructors / TAs)](/en/utol/lecturers/materials/)” page.
+ - Assignments: This feature allows you to upload reports and other assignments online. For more details on how to use this feature, please see the “[Using assignment function in UTOL (for Course Instructors / TAs)](/en/utol/lecturers/assignments/)” page.
+ - Quizzes: This feature allows you to conduct online tests. It enables you to set a time limit for answering questions or to automatically grade multiple-choice questions. For more details on how to use this feature, please see the “[Using Quiz function in UTOL (for Course Instructors / TAs)](/en/utol/lecturers/quizzes/)” page.
  - Surveys: This feature allows you to take surveys from students.
- - Manage Attendance: This feature allows you to manage attendance by sending a “one-time password” to attendees via Zoom or other means and asking them to enter it. For more details on how to use this feature, please see the “[Using the Attendance function in UTOL](/en/utol/lecturers/attendances/)” page.
+ - Manage Attendance: This feature allows you to manage attendance by sending a “one-time password” to attendees via Zoom or other means and asking them to enter it. For more details on how to use this feature, please see the “[Using the Attendance Function in UTOL (for Course Instructors / TAs)](/en/utol/lecturers/attendances/)” page.
  - Forums: This is a “bulletin board” feature that allows students and instructors to exchange opinions and ideas.
  UTOL’s functions are similar to other ICT class support tools, but what is noteworthy is that the system is linked to UTokyo Account and UTAS for course registration, making it quite easy to pass information to “only students of UTokyo” or to “only students enrolled in the course”. Furthermore, because UTOL is popular among students, it is highly recommended that it be used for distributing lecture materials and collecting/returning assignments.
  ⋯
  Zoom is a simultaneous interactive web conferencing system and is one of the most frequently used tools in online classes. There are other conferencing systems that perform similar functions, but if there are no particular reasons, we recommend you use Zoom as it is a familiar tool for students.
  ### Signing in to Zoom
- UTokyo has a license agreement with Zoom, and allowing you to hold meetings with a maximum capacity of 300 participants and for a 30-hour duration by signing in with your account.
+ UTokyo has a license agreement with Zoom, allowing you to hold meetings with a maximum capacity of 300 participants and for a 30-hour duration by signing in with your account.
  - Go to the [UTokyo Zoom page](https://u-tokyo-ac-jp.zoom.us/) (please note that this is a Zoom sign-in page for UTokyo members only and is not the regular Zoom sign-in page).
  - A page labeled “UTokyo Zoom” will appear. Click the “Config” button on this page.
  ⋯
  ### ECCS Cloud Email (Google Workspace)
  This is an account for using Google’s services (Google Workspace) as a UTokyo member.
- With this account, you can use various services including Gmail, which allows you to use your UTokyo email address (xxxx@g.ecc.u-tokyo.ac.jp) Google Drive (an online storage service), Google Docs (a document creation service), Google Sheets (a spreadsheet service), Google Forms (a form creation service), YouTube, (a video streaming service), and Google Meet (a web conferencing service). It also allows you to restrict the sharing to UTokyo members only (limited access), which is a feature not available to regular Google accounts.
+ With this account, you can use various services including Gmail, which allows you to use your UTokyo email address (xxxx@g.ecc.u-tokyo.ac.jp) Google Drive (an online storage service), Google Docs (a document creation service), Google Sheets (a spreadsheet service), Google Forms (a form creation service), YouTube (a video streaming service), and Google Meet (a web conferencing service). It also allows you to restrict the sharing to UTokyo members only (limited access), which is a feature not available to regular Google accounts.
  For further details on how to use this feature, please see the [ECCS Cloud Email (Google Workspace)](/en/google/) page.
  ### UTokyo Microsoft License
  ⋯
  [UTokyo Portal](https://login.adm.u-tokyo.ac.jp/utokyoportal) is an internal portal site for faculty and staff. In addition to allowing you to check necessary procedures and documents, UTokyo Portal provides manuals for various ‘things you want to do’ as a handy guide at the bottom of the top page. Various notifications will also be posted on this page, so please check them regularly.
  ### Other Systems
- - [ECCS Terminals](/en/eccs/)
-   - A programming environment and software for various purposes, such as statistics and 3DCG, are already installed and can be used without going through the installation procedure. Prior approval is required to use the system.
- - [EZproxy](https://www.lib.u-tokyo.ac.jp/en/library/literacy/user-guide/campus/offcampus/ezproxy)
+ - [Educational Campus-Wide Computing System (ECCS)](/en/eccs/)
+   - ECCS is a facility including computers and other equipment available to the students, faculty, and staff of the University of Tokyo for education and research. It consists of on-campus ChromeOS devices, facilities for using personal devices, and environments that allow remote access to specific software. It can also be used for classes through prior reservation.
+ - [OpenAthens](https://www.lib.u-tokyo.ac.jp/en/library/literacy/user-guide/campus/offcampus)
    - UTokyo has contracted this service to provide off-campus access to UTokyo members-only e-journals (available to students as well as faculty and staff).
  - [UTokyo VPN](/en/utokyo_vpn/)
  ⋯
  This section explains how to record and share a class (Recording a class is not only for students who could not attend the class because of equipment/connection issues or illness. It is useful for all students because they can watch it for review or pause it to learn at their own pace).
  - Zoom has a recording function called “Record”. Notably, the “Cloud Recording” feature enables you to save videos to the Zoom Cloud for sharing with others later. When sharing a video, you can also restrict access to UTokyo members.
-   - For details, please see “[(Zoom for Faculty Members) Cloud Recording](/en/zoom/how/faculty_members/recording_cloud/)”.
+   - For details, please see “[Recording Zoom Meeting](/en/zoom/usage/recording/)”.
  - Uploading recordings of Zoom videos to Google Drive or YouTube after editing them, such as deleting part of them, is a common method of sharing them. In such cases, you can also restrict access to UTokyo members.
    - For further details of these procedures, please see “[Google Drive](/faculty_members/how/google/share_video/)” (in Japanese) or “[Restricting YouTube Content to University Members Only](https://www.sodan.ecc.u-tokyo.ac.jp/en/hack/youtube-utokyo-only-en/)”.
  ⋯
  In this section, we will explain how to record student attendance in online classes.
  - UTOL’s attendance management function: This is a feature that allows you to manage attendance by sending a “one-time password” to attendees via Zoom or other means and asking them to enter it.
-   - For more information on how to use the feature, please see “[Using the Attendance Function in UTOL](/en/utol/lecturers/attendances/)”.
+   - For more information on how to use the feature, please see “[Using the Attendance Function in UTOL (for Course Instructors / TAs)](/en/utol/lecturers/attendances/)”.
    - Note that the system requires students to log in to register their attendance, but the system cannot prevent absent students from registering attendance using the “one-time password” obtained from other students.
  - Zoom’s reporting feature: This is a feature that allows you to view and download the list of Zoom meeting participants.
-   - For more information on how to use this feature, please see “[(Zoom for Faculty members) Managing Attendance](/en/zoom/how/faculty_members/attendance/)”.
+   - For more information on how to use this feature, please see “[Managing Attendance in Zoom](/en/zoom/misc/report/)”.
    - For participants who were signed in with their UTokyo Zoom account, we can assume that they attended the class.
  Additionally, because of the nature of online classes, students may not always be listening to the class even if they are connected to the Zoom meeting room, so in addition to taking attendance, it may be a good idea to check the students’ understanding of the class content through reaction papers, quizzes, and other means. (You can use the survey feature of UTOL, Google Forms, Microsoft Forms, and others). Because online classes tend to have more assignments, it is suggested to take students’ workload into consideration and have these reaction papers and quizzes completed during the class time.
```

[← 一覧へ](<../README.md>)
