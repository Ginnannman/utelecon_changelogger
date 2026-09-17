# Google Meet

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/google/meet/`](<https://utelecon.adm.u-tokyo.ac.jp/google/meet/>) | [`src/pages/google/meet/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/google/meet/index.md>) |
| English | 変更 | [`/en/google/meet/`](<https://utelecon.adm.u-tokyo.ac.jp/en/google/meet/>) | [`src/pages/en/google/meet/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/google/meet/index.md>) |

## 日本語

```diff
  タイトル: Google Meet | utelecon
- 説明: 目次: はじめに; 利用の流れ (ミーティング編); ECCSクラウドメール (G Suite for Education)の有効化; ECCSクラウドメールのアカウント(xxx@g.ecc.u...
+ 説明: 目次: はじめに; Google Meetとは; 利用手順; その他...
  
  [ECCSクラウドメール](/google/) > Meet
  # Google Meet
  ## はじめに
- - GoogleアプリのスイートG Suite for Educationの一部として提供されているWeb会議システムです
- - PCではアプリをインストールせずWebブラウザで使います(スマホ用にはアプリもあります)
- - Chrome，Firefox，Safari，Edgeなど最近のほとんどのブラウザに対応しています
- - 複数の会議に同時に参加できます，複数の会議を同時に開催できます
- - 東京大学で使用されているEducationアカウントには全員ミュートや参加者の画面共有権限の制限の機能があります．Educationアカウント以外にはこれらの機能は付属していません．
- - Googleアカウント + ブラウザだけで完結する手軽さと，複数会議を同時に開催できることから少人数のグループをたくさん作るような形態に向いています
- - 100人までのミーティングを作成可能
- ## 利用の流れ (ミーティング編)
- ミーティングは，参加者全員が発言や画面の共有が出来る形態の会議です．参加者は100人まで．1-1のミーティングをすぐに行う場合や，参加者のわかっている少人数授業やゼミなどに適しています．
+ このページでは，Google Meetの基本的な使い方について紹介します．
+ ## Google Meetとは
+ Google Meetは，Google社が提供するWeb会議システムです．会議や通話を行うことができます．
+ - パソコンにアプリをインストールする必要がなく，Webブラウザから利用できます．
+   - スマートフォン・タブレット用にはアプリもあります．
+ - Chrome，Firefox，Safari，Edgeなど，最近のほとんどのブラウザに対応しています．
+ - 複数の会議に同時に参加でき，複数の会議を同時に開催できます．
+ - Googleアカウント + ブラウザだけで完結する手軽さと，複数会議を同時に開催できることから，少人数のグループをたくさん作るような形態に向いています．
+ - （デフォルトの場合）100人までのミーティングを作成可能です．
+ ### 東京大学のアカウントでの利用
+ 東京大学では，Google社の「Google Workspace」が「[ECCSクラウドメール](/google/)」として提供されています．Google Meetもその一部に含まれているため，東京大学の構成員は，ECCSクラウドメールのアカウントでGoogle Meetを利用することができます．
+ ## 利用手順
+ ここでは，パソコンのブラウザ上でGoogle Meetを利用して「会議」を行う手順を説明します．
+ 「会議」は，ミーティング，少人数授業，ゼミなどに適しています．なお，Google Meetには電話番号等の連絡先を用いた「通話」の機能もありますが，今回は取り扱いません．
+ また，スマートフォンやタブレットでの利用方法については，[Google Meetのスマートフォン・タブレット向けアプリについて](#mobile-app)を参照してください．
+ 以下の手順では，Google MeetなどのGoogleサービスにアクセスします．その際，ログインしていない場合はログインするよう求められますので，[ECCSクラウドメールのページの「利用開始の手順」](/google/#initial-setup)を参照してログインしてください．
+ ### 利用の流れ
  - 開催者
-   - (初期設定) [ECCSクラウドメール](https://www.ecc.u-tokyo.ac.jp/announcement/2016/02/08_2116.html) (本学でのG Suite for Education契約の名称) を有効化
-   - ECCSクラウドメールのアカウント(xxx@g.ecc.u-tokyo.ac.jp)でGoogleに[サインイン](#signin)
-   - [会議を作成](#create_meeting)して，会議室の情報（URLなど）を周知
+   - [会議を作成](#create_meeting)して，会議室の情報（URL）を周知
    - URLにアクセスして[会議へ参加](#join_meeting)
-   - [ミーティング](#do_meeting)を行う
+   - [会議を行う](#do_meeting)
  - 参加者
-   - 会議室の情報（URLなど）をメールなどを用いて入手
+   - 会議室の情報（URL）をメールなどを用いて入手
    - URLにアクセスして[会議へ参加](#join_meeting)
-   - [ミーティング](#do_meeting)を行う
- - Meetに関する[ヘルプ](https://support.google.com/meet/)
- ## ECCSクラウドメール (G Suite for Education)の有効化
- もし開催者がまだ，[「ECCSクラウドメール」 (G Suite for Education)](https://www.ecc.u-tokyo.ac.jp/announcement/2016/02/08_2116.html) を有効化していなければ，[UTokyo Account 利用者メニュー](https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet) から行ってください ([手順についての詳細](https://hwb.ecc.u-tokyo.ac.jp/wp/literacy/email/initialize/))．xxxx@g.ecc.u-tokyo.ac.jp というメールアドレスを使える人は，すでに有効化されています．
- 有効化したら，有効化の設定を行ってから実際に使えるようになるまで，最大1時間程度を見込んでください(毎時00分に，それ以前の有効化がGoogleに伝搬・反映されます)．
- ## ECCSクラウドメールのアカウント(xxx@g.ecc.u-tokyo.ac.jp)でGoogleにログイン
- - 適当なGoogleのサービス ([Gmail](https://mail.google.com/)，[カレンダー](https://calendar.google.com/)など) にアクセスし，ECCSクラウドメールのアカウント(xxxx@g.ecc.u-tokyo.ac.jp) でサインインしてください．
-   - すでに他の(例えば個人の)Googleアカウントでサインインしている場合は，アカウントを切り替えたり，アカウントを追加して，ECCSクラウドメールのアカウント(xxxx@g.ecc.u-tokyo.ac.jp) でサインインしてください．
-   - サインインするアカウントを選択する画面が現れたらxxxx@g.ecc.u-tokyo.ac.jpを選んでサインインしてください．xxxx@g.ecc.u-tokyo.ac.jpがなければ「アカウントを追加」してください
-   - ページ上部の「ログイン」または”Sign in”ボタンが現れたらそれを押してxxxx@g.ecc.u-tokyo.ac.jpでサインインしてください．
- - 以下は「ECCSクラウドメール(xxxx@g.ecc.u-tokyo.ac.jp)でのサインイン」を強制するためのリンクです
-   - [Gmail](https://mail.google.com/a/g.ecc.u-tokyo.ac.jp)
-   - [カレンダー](https://calendar.google.com/a/g.ecc.u-tokyo.ac.jp)
- ## 会議の作成
- Googleアプリであるため，Googleカレンダー，GmailなどGoogleアプリ経由での予約が簡単にできます．
- ### 方法1: Meetのトップページ経由
- - [動画](https://youtu.be/rysK8GiH3KM)
- - ECCSクラウドメールアカウント(xxxx@g.ecc.u-tokyo.ac.jp)にサインインした状態で，Gmailなど適当なサービスでGoogleアプリアイコンからMeetを選び，[meetのトップページ](https://meet.google.com/)を表示
- - 「ミーティングに参加または開始」ボタンを押す．
- - 会議名を聞かれるが空欄でよい(空欄にしないと，偶然同じ名前の会議があったらそこへ参加してしまうかも知れない)
- - カメラやマイクへのアクセス許可を求める窓が出てきたら，「許可」
- - 「今すぐ参加」を押して会議を開く
- - 「参加に必要な情報をコピー」してURL (https://meet.google.com/xxx-xxxx-xxx) を参加者へ知らせる
- ### 方法2: Gmail経由
- - [動画](https://youtu.be/3xfHobXsj2Q)
- - [Gmail](https://mail.google.com/a/g.ecc.u-tokyo.ac.jp)を表示
- - 「会議を新規作成」ボタンを押す
- - 会議URLが書かれたウィンドウが現れるのでURLをコピーして参加者に教える．授業に使うならばこのURLをUTOLなどに書き込む
- - もしくは「招待状を送信」すればURLが書かれたメールが自動的に作られる; メールで参加者にURLを教える場合に有効
- ### 方法3: カレンダー経由
- - [動画](https://youtu.be/VQs4Ps6Zsz0)
- - [Googleカレンダー](https://calendar.google.com/a/g.ecc.u-tokyo.ac.jp)を表示
- - 適当な場所を左クリックしてイベントを作成し，表示される窓で「Google Meetのビデオ会議を追加」ボタンを押し，保存
- - イベントをもう一度開いて「会議のリンクをクリップボードにコピー」し，それを参加者に教える．授業に使うならばこのURLをUTOLなどに書き込む
- - もしくはカレンダーのイベントそのものを参加者と共有すればカレンダー経由でURLを教えることが可能．Googleカレンダーを共有している人同士(研究室のメンバーなど)での会議に有用です
- ## 会議への参加(join)
- - 会議の開催者から，会議のURLを(メール，カレンダー，UTOL経由などで)受け取る
- - URLをブラウザで開いて会議に参加します．このとき
-   - 参加者が，ECCSクラウドメールのアカウント(xxx@g.ecc.u-tokyo.ac.jp) でGoogleにログインしていれば，直ちに会議に参加できます
-   - そうでない場合，開催者の画面に，許可・不許可を促す画面が現れ，許可されれば会議に参加できます．一定時間許可がないと参加できずエラーになります
-   - したがって，非常に多数の，不特定多数の人数が参加する会議に対しては，参加者にECCSクラウドメールのアカウントでログインすることを必須とすることが現実的です．従ってこの場合，会議に参加できるのは東京大学の教職員・学生(+ 少数の，明示的に許可する参加者)ということになります
- ## 会議中の操作
- ### 資料(画面)の表示
- 会議中に右下隅「今すぐ表示」を押すと，画面を参加者に送信できます．画面全体を送信することも特定のウィンドウだけを送信することも出来ます．プレゼンテーションや講義資料などを表示するのに使います．
- ### 録画
- 会議中に右下隅のメニューから「ミーティングを録画」を選ぶと，画像と音声を録画できます．録画が終了すると，動画ファイルがGoogle Driveに保存されます．
+   - [会議を行う](#do_meeting)
+ ### 会議の作成
+ 会議の作成は，Google Meetのトップページに加え，Gmail，Googleカレンダーなど，他のGoogleサービスからも行えます．ここでは三つの方法を紹介します．
+ #### 方法1: Google Meetのトップページ経由
+ - 以下のリンクから，Google Meetにアクセスしてください． [Google Meet](https://meet.google.com)
+ - 右上のアイコンをクリックし，ECCSクラウドメールアカウント（xxxx@g.ecc.u-tokyo.ac.jp）にログインされていることを確認してください．
+   - 別のアカウントでログインされている場合，アカウント一覧からECCSクラウドメールアカウントを選択してください．
+ - 「新しい会議を作成」ボタンを押し，「次回以降の会議を作成」を選択してください．
+ - 「参加に必要な情報」として会議室のURL (https://meet.google.com/xxx-xxxx-xxx) が表示されるので，コピーし，参加者へ共有してください．
+ #### 方法2: Gmail経由
+ - 以下のリンクから，Gmailにアクセスしてください． [Gmail（ECCSクラウドメール）](https://mail.google.com/a/g.ecc.u-tokyo.ac.jp)
+ - 左側の「Meet」タブを開いてください．
+ - 「新しい会議を作成」ボタンを押してください．
+ - 会議室のURLが書かれたウィンドウが現れるので，以下のいずれかの方法で参加者に共有してください．
+   - 別の場所（UTOLなど）で共有する場合：URLをコピーし，参加者へ共有してください．
+   - メールで共有する場合：「招待状を送信」ボタンを押し，「メールで共有」を選択してください．URLが記載されたメールが自動で作成されるので，必要に応じて編集し，送信して参加者へ共有してください．
+ #### 方法3: カレンダー経由
+ カレンダー経由で会議の作成を行うと，同時に会議の時間をGoogleカレンダーに反映させることが可能です．
+ - 以下のリンクから，Googleカレンダーにアクセスしてください． [Googleカレンダー（ECCSクラウドメールアカウント）](https://calendar.google.com/a/g.ecc.u-tokyo.ac.jp)
+ - カレンダー上で会議を行いたい時間帯をクリックしてください．
+ - イベントの作成ウィンドウが開くので，ウィンドウ内のイベントの時間を会議の予定時間に調整し，「Google Meetのビデオ会議を追加」ボタンを押してください．
+ - 会議室のURLが生成されるので，右側のコピーボタンを押してください．
+ - コピーされたURLを参加者へ共有してください．
+   - もしくは，上で作成したイベントを参加者と共有することもできます．この場合，参加者はカレンダー上のイベント経由でURLにアクセスできます．Googleカレンダーを共有している人同士（例：研究室のメンバーなど）での会議に有用です．
+ ### 会議への参加
+ - 開催者から，会議のURLを（UTOL，メール，カレンダー経由などで）受け取ってください．
+ - URLをブラウザで開いて会議に参加してください．このとき，
+   - 参加者が，ECCSクラウドメールのアカウント（xxx@g.ecc.u-tokyo.ac.jp）でログインしていれば，直ちに会議に参加できます．
+   - そうでない場合，開催者の画面に，参加の許可・不許可を選択する画面が現れます．開催者が許可すれば会議に参加できます．一定時間許可がないと参加できず，エラーになります．
+   - したがって，多人数が参加する会議に対しては，参加者にECCSクラウドメールのアカウントでログインするよう求めることが現実的です．従ってこの場合，会議に参加できるのは東京大学の教職員・学生（+ 少数の，明示的に許可する参加者）ということになります．
+ ### 会議中の操作
+ #### 画面の共有
+ 会議中に下側の四角形 + 矢印アイコン（「画面を共有」）を押すと，画面を参加者に共有できます．画面全体を共有することも，特定のウィンドウだけを共有することもできます．プレゼンテーションや講義資料などを表示するのに使います．
+ #### 録画
+ 会議中に下側の三点アイコン（「その他のオプション」）を押し，表示された一覧から「録画を管理する」を選んで「録画を開始」を押すと，画像と音声を録画できます．録画が終了すると，録画ファイルがGoogle Driveに保存されます．
+ ## その他
+ ### Google Meetのスマートフォン・タブレット向けアプリについて
+ Google Meetには，スマートフォン・タブレット向けアプリがあり，スマートフォン・タブレットで会議・通話を行うことができます．詳細な利用手順については[Google Meetのヘルプ](https://support.google.com/meet/answer/12389066?hl=ja)を参照してください．
```

## English

```diff
- タイトル: Google Hangouts Meet | utelecon
- 説明: Table of Contents: Introduction; Video Conference; Live Broadcasting...
+ タイトル: Google Meet | utelecon
+ 説明: Table of Contents: Introduction; What is Google Meet?; Usage Procedures; Miscellaneous...
  
  [ECCS Cloud Email](/en/google/) > Meet
- # Google Hangouts Meet
+ # Google Meet
  ## Introduction
- - Any UTokyo account holder (i.e., student or teacher) can use [Google Hangout Meet](https://workspace.google.com/intl/en/products/meet/) as follows.
-   - Video Conference: interactive video communication, audio communication, showing handouts on screens. If one starts the conference, others join to the session. Organizers need to have UTokyo account, while attendees do not need an UTokyo account.
-   - Live Broadcast: Organizers can send video clips, voice and handouts to the other participants. However, participants cannot send files to organizers.
-   - Record Broadcasting: Organizers record their video clip in advance and share the clip on Google drive or broadcast on YouTube.
- - You need a valid [G Suite for Education (本学では「ECCS Cloud Mail」)](https://www.ecc.u-tokyo.ac.jp/announcement/2016/02/08_2116.html).
- - Necessary items:
-   - PC + www browser.
-   - If you share one PC with many people or if you snapshot the speaker, we strongly recommend to use External USB camera and microphone.
-   - There is a dedicated app for smartphone users (organizers are recommended to use PC.).
-   - You can watch anywhere as long as you can connect to the internet.
- - [Need help?](https://support.google.com/meet/)
- ## Video Conference
- Video conference enables organizers and participants to share video clip, voice and handouts (data) interactively. this function is called “Meeting”in Hangouts Meet.
- ### Organize a Video Conference
- One should be the organizer at the conference. The organizers arrange the meeting as follows.
- - Organizers need to have valid [ECCS Cloud Mail (G Suite for Education)](https://www.ecc.u-tokyo.ac.jp/announcement/2016/02/08_2116.html) account. Please create the account [here](https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet) ([details](https://hwb.ecc.u-tokyo.ac.jp/wp/literacy/email/initialize/)). If you already have the university’s mail address (i.e., xxxx@g.ecc.u-tokyo.ac.jp ), you can use ECCS Cloud Mail. Student organizers must take [Online Training Session](https://www.ecc.u-tokyo.ac.jp/onlineseminar.html).
- - If you obtain valid ECCS Cloud Mail account, please be wait for one hour until the server register for your account.
- - After you obtain valid ECCS Cloud Mail account, access to the top page of [meet](https://meet.google.com/) Please click “login” on the top or click “Sign in” on ECCS Cloud Mail account (xxxx@g.ecc.u-tokyo.ac.jp) .
- - After you log in, the screen appears ” participate or start the meeting”. You can set the meeting here.
-   > [![](/_astro/meet_start.webp)](img/meet_start.png)
-   - Caution 1: if the screen shows “You’re not logged in with an account that can start a meeting,” please switch to a G suite account (xxxx@g.ecc.u-tokyo.ac.jp) on top right.
-     > [![](/_astro/meet_no_login.webp)](img/meet_no_login.png)
-   - Caution 2: If the screen shows ” this account can participate in the meeting only” then you check your account. You may log in your private account (i.e. xxxx@gmail.com). Please switch your account to G Suite account (xxxx@g.ecc.u-tokyo.ac.jp).” You can switch account on top right button (See below) or you re-enter G Suite account.
-     > [![](/_astro/meet_participate_only.webp)](img/meet_participate_only.png)
- - Click “participate or start the meeting”. You permit to access to camera and microphone and then you are ready to start the meeting.
-   > [![](/_astro/meet_ready2.webp)](https://www.ecc.u-tokyo.ac.jp/files/2020/03/04/meet_ready2.png)
- - After you click “start the meeting”, you can see this screen below. Fill in the meeting name, if needed (no name is fine). Click “continue”.
-   > [![](/_astro/meet_name.webp)](img/meet_name.png)
- - You see the screen above. You notify URL (e.g. https://meet.google.com/xxx-xxxx-xxx) to your participants by email. You can copy the URL and paste directly onto the email.
-   > [![](/_astro/meet_copy.webp)](img/meet_copy.png)
- ### Join a meeting
- - Participants acquire URL from organizers (see below) and click on it.
-   > [![](/_astro/meet_mail3.webp)](https://www.ecc.u-tokyo.ac.jp/files/2020/03/04/meet_mail3.png)
- - Click URL and participate in the meeting.
-   - If participants log into ECCS Cloud Mail account (xxx@g.ecc.u-tokyo.ac.jp) , you immediately join the meeting.
-   - Otherwise, you need the organizer’s permission. After you are allowed to enter the meeting by the organizer, you join the meeting. However, if the organizer do not permit for a long time, your screen shows an error message. Please try again.
-   - To skip the organizer’s permission step, all participants are recommended to enter by ECCS Cloud mail. By doing so, those who enter the meeting are only UTokyo students / teachers plus someone who are allowed to join the meeting by the organizer.
- ### Share the handouts on screens
- At the meeting, click “share now” on the bottom right. You can share the screen with the participants. You can choose full-screen mode or a given window. This enable us to share the presentation screen or handouts.
- ### Recording
- At the meeting, click “record the meeting” and then you can record the screen and voice. The recording data are available on Google drive.
- ## Live Broadcasting
- Live broadcasting can send the participants to video clip, voice and handouts and hence, live broadcasting is one direction media (one organizer to many participants). Comparing to the video conference, live broadcasting is applicable to send information to many participants. This is called “live streaming” in this Hangout Meet. However, the participants on live streaming cannot send video clips, voices and so on. In addition, the image may have 15 second delay from organizers to the participants.
- ### Organize live broadcasting
- Organizers should prepare for broadcasting as follows.
- - Organizers need to have valid [ECCS Cloud Mail (G Suite for Education)](https://www.ecc.u-tokyo.ac.jp/announcement/2016/02/08_2116.html). Please create the account [here](https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet).([details](https://hwb.ecc.u-tokyo.ac.jp/wp/literacy/email/initialize/)). If you already have the university’s mail address (i.e., xxxx@g.ecc.u-tokyo.ac.jp ), you can use ECCS Cloud Mail. Student organizers must take [Online Training Session](https://www.ecc.u-tokyo.ac.jp/onlineseminar.html).
- - If you obtain valid ECCS Cloud Mail account, please wait for one hour until the server register for your account.
- - After you obtain valid ECCS Cloud Mail account, go on to [Google Calendar](https://calendar.google.com/) page.
-   - Caution 1: If you see the screen below, please log into Google account by ECCS Cloud Mail (xxxx@g.ecc.u-tokyo.ac.jp).
-     > ![](/_astro/login_menu.webp)
-   - Caution 2: If you use your private account, please log out your account and then you log into ECCS Cloud Mail account (xxxx@g.ecc.u-tokyo.ac.jp) . If you success to enter your ECCS account, you can see the mark on the right top (See below).
-     > ![](/_astro/login_calendar.webp)
-     Details are [here](https://support.google.com/meet/answer/9308681).
- - Please left-click the given day of Google calendar to schedule the event (you can broadcast independently of the event day and even if you schedule the event, the broadcasting do not start automatically).
-   > ![](/_astro/create_event.webp)
- - Select “other options”.
-   > ![](/_astro/create_event.webp)
- - Select “add video conference”.
-   > ![](/_astro/add_video_conf.webp)
- - “Add video conference” -> 「Hangouts Meet」
-   > ![](/_astro/add_hangouts_meet.webp)
- - Click ![](/_astro/downarrow.webp) -> “Add live stream”
-   > ![](/_astro/add_live_stream.webp)
- - Click “Save”. You are read preparing the meeting.
- - Start broadcasting: open your calendar and click ” Join Hangouts Meet.”
-   > ![](/_astro/join_hangouts_meet.webp)
- - “Join Meeting”
-   > ![](/_astro/join_meeting.webp)
- - Here you see “This meeting is scheduled to live stream by the organizer” on the screen. If you want to start immediately, select “start live streaming”.
-   > ![](/_astro/ask_streaing.webp)
- - In case the live stream do not start, close the browser and click “start live streaming”.
-   > ![](/_astro/streaming_start.webp)
- - Direction to attendees: Click ![](/_astro/downarrow.webp) button for “copy streaming information”.
-   > ![](/_astro/streaming_start.webp)
-   By doing so, URL has been copied onto the clipboard. You now can paste on the information in the given email. You can use UTOL to let students know the URL. Switch on “Mail and LINE notification” on “nofitication”, and then only class participants will obtain URL.
- - Only ECCS Cloud Mail holders (e.g. xxxx@g.ecc.u-tokyo.ac.jp) can see live streaming. Below is an example of the invitation (HTML version).
-           Invitation of Live streaming: 「◯◯◯◯◯」
-           
-           If you want to watch or hear this class, log into ECCS Cloud Mail account(xxxx@g.ecc.u-tokyo.ac.jp) on Google and click the link below.
-           https://stream.meet.google.com/stream/e91f3dd7-xxxx-xxxx-xxxx-7d47c54c1660
-     
-           Caution 1: Those who do not use ECCS
-           <a href="https://www.ecc.u-tokyo.ac.jp/announcement/2016/02/08_2116.html" target="_blank">
-             https://www.ecc.u-tokyo.ac.jp/announcement/2016/02/08_2116.html
-           </a>please access to be activate the account (You need to wait for updating account up to 1 hour).
-           
-           Caution 2: Student(or not lecture)organizers must take ECCS online training.
-           (<a href="https://www.ecc.u-tokyo.ac.jp/onlineseminar.html" target="_blank">
-             https://www.ecc.u-tokyo.ac.jp/onlineseminar.html</a>)
-           
- ### Watch Live streaming
- - To watch live streaming, you obtain URL from the organizer and just click URL.
- - If you did not activate yet your [ECCS Cloud Mail (G Suite for Education)](https://www.ecc.u-tokyo.ac.jp/announcement/2016/02/08_2116.html), you can do it at [UTokyo Account User Menu](https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet) ([details](https://hwb.ecc.u-tokyo.ac.jp/wp/literacy/email/initialize/)). The service is already validated for “xxxx@g.ecc.u-tokyo.ac.jp” email address users. Student organizers must take [Online Training Session](https://www.ecc.u-tokyo.ac.jp/onlineseminar.html).
- - If you obtain valid ECCS Cloud Mail account, please wait for one hour until the server register for your account.
+ This page introduces the basic usage of Google Meet.
+ ## What is Google Meet?
+ Google Meet is a web conferencing system provided by Google. It allows you to hold online meetings and calls.
+ - You do not need to install any apps on your computer; you can use it directly from your web browser.
+   - Dedicated apps are available for smartphones and tablets.
+ - It supports most modern browsers, including Chrome, Firefox, Safari, and Edge.
+ - You can join and host multiple meetings at the same time.
+ - Google Meet is well-suited for organizing many small group sessions, because it only requires a Google Account and a browser, and allows simultaneous meetings.
+ - (By default) You can create meetings with up to 100 participants.
+ ### Using Google Meet with a UTokyo Account
+ At the University of Tokyo, Google Workspace is provided as “[ECCS Cloud Email](/en/google/)”. UTokyo members can use Google Meet with their ECCS Cloud Email accounts because it is included in this suite.
+ ## Usage Procedures
+ This section explains the steps to hold a “meeting” using Google Meet in a web browser.
+ “Meetings” are suitable for general conferences, small group classes, and seminars. Please note that Google Meet also has a “call” feature using contact information such as phone numbers, but this guide will not cover it.
+ For instructions on how to use Meet on smartphones and tablets, please refer to [About the Google Meet App for Smartphones and Tablets](#mobile-app).
+ In the following steps, you will access Google services like Google Meet. If you are not logged in with your ECCS Cloud Email account, you will be prompted to do so. Please refer to the [Steps to Start Using Your ECCS Cloud Email](/en/google/#initial-setup) and log in.
+ ### Overall Flow
+ - Organizers
+   - [Create a meeting](#create_meeting) and share the meeting information (URL).
+   - Access the URL to [join the meeting](#join_meeting).
+   - [Conduct the meeting](#do_meeting).
+ - Participants
+   - Obtain the meeting information (URL) via email or other tools.
+   - Access the URL to [join the meeting](#join_meeting).
+   - [Conduct the meeting](#do_meeting).
+ ### Creating a Meeting
+ You can create a meeting not only from the Google Meet top page but also from other Google services such as Gmail and Google Calendar. Here are three methods.
+ #### Method 1: Via the Google Meet Top Page
+ - Access Google Meet from the link below. [Google Meet](https://meet.google.com)
+ - Click the icon in the top right corner and confirm that you are signed in with your ECCS Cloud Email account (xxxx@g.ecc.u-tokyo.ac.jp).
+   - If you are signed in with a different account, select your ECCS Cloud Email account from the account list.
+ - Click the “New meeting” button and select “Create a meeting for later”.
+ - The meeting URL (https://meet.google.com/xxx-xxxx-xxx) will be displayed as “Here’s your joining info”. Copy and share it with the participants.
+ #### Method 2: Via Gmail
+ - Access Gmail from the link below. [Gmail (ECCS Cloud Email)](https://mail.google.com/a/g.ecc.u-tokyo.ac.jp)
+ - Open the “Meet” tab on the left side.
+ - Click the “New meeting” button.
+ - A window containing the meeting URL will appear. Share it with participants using one of the following methods:
+   - To share elsewhere (e.g., UTOL): Copy and share the URL with participants.
+   - To share via email: Click the “Send invite” button and select “Share via email”. An email containing the URL will be automatically generated. Edit the email if needed, then send it to the participants.
+ #### Method 3: Via Google Calendar
+ Creating a meeting via Google Calendar allows you to schedule the meeting directly.
+ - Access Google Calendar from the link below. [Google Calendar (ECCS Cloud Email Account)](https://calendar.google.com/a/g.ecc.u-tokyo.ac.jp)
+ - Click the desired time slot for the meeting on the calendar.
+ - An event creation window will open. Adjust the event time to match the meeting schedule, and click the “Add Google Meet video conferencing” button.
+ - A meeting URL will be generated. Click the copy button on the right side.
+ - Share the copied URL with the participants.
+   - Alternatively, you can share the created event with the participants. In this case, participants can access the URL via the event on their calendar. This is useful for meetings among people who share Google Calendars (e.g., lab members).
+ ### Joining a Meeting
+ - Receive the meeting URL from the organizer (via UTOL, email, Google Calendar, etc.).
+ - Open the URL in your browser to join the meeting. At this time:
+   - If participants are logged in with their ECCS Cloud Email accounts (xxx@g.ecc.u-tokyo.ac.jp), they can join the meeting immediately.
+   - If not, a prompt asking for permission to admit will appear on the organizer’s screen. Participants can join once the organizer admits them. If the organizer does not admit them for a certain period, an error will occur.
+   - Therefore, for meetings with many participants, it is practical to require participants to log in with their ECCS Cloud Email accounts. In this case, only UTokyo faculty, staff, and students (+ a small number of explicitly permitted participants) will be able to join.
+ ### Operations During a Meeting
+ #### Screen Sharing
+ During the meeting, click the rectangle with an arrow icon (“Present now”) at the bottom to share your screen with the participants. You can share your entire screen or a specific window. This is used to display presentations or lecture materials.
+ #### Recording
+ During the meeting, click the three-dot icon (“More options”) at the bottom, select “Manage recording” from the displayed list, and click “Start recording”. This will record both video and audio. Once the recording is stopped, the recording file will be saved to Google Drive.
+ ## Miscellaneous
+ ### About the Google Meet App for Smartphones and Tablets
+ Google Meet has dedicated apps for smartphones and tablets. These apps allow you to hold meetings and calls on mobile devices. For detailed usage instructions, please refer to the [Google Meet Help](https://support.google.com/meet/answer/12389066?hl=en).
```

[← 一覧へ](<../README.md>)
