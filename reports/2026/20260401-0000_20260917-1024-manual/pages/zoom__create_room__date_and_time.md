# Zoom 開催日時の詳細な設定

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/zoom/create_room/date_and_time/`](<https://utelecon.adm.u-tokyo.ac.jp/zoom/create_room/date_and_time/>) | [`src/pages/zoom/create_room/date_and_time/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/zoom/create_room/date_and_time/index.md>) |
| English | 変更 | [`/en/zoom/create_room/date_and_time/`](<https://utelecon.adm.u-tokyo.ac.jp/en/zoom/create_room/date_and_time/>) | [`src/pages/en/zoom/create_room/date_and_time/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/zoom/create_room/date_and_time/index.mdx>) |

## 日本語

```diff
  説明: 目次: 開催日時の3つの設定; 1回限りのミーティングの設定方法; 開催日時と周期を指定して複数回行うミーティングの設定方法; 開催日時を指定せずに複数回行うミーティングの設定方法...
  
- [Zoom](/zoom/) > [ミーティングを作成する](/zoom/create_room/) > 複数回利用できる URL が変わらない会議室を予約する
+ [Zoom](/zoom/) > [ミーティングを作成する](/zoom/create_room/) > Zoom 開催日時の詳細な設定
  # Zoom 開催日時の詳細な設定
  この記事では，Zoomミーティングの開催日時の詳細な設定の種類と，それぞれの種類の特徴について説明します．開催日時の詳細な設定を行うことで，URLを変えずに複数回利用できるミーティングを設定することが可能になります．基本的なZoomミーティングの作成方法については，[Zoomミーティングを作成する](/zoom/create_room/)をご覧ください．
  ⋯
  ## 1回限りのミーティングの設定方法
  開催日時を指定し，1回限りのミーティングを設定する方法を紹介します．
- Web ブラウザで [Zoom のマイページ](https://u-tokyo-ac-jp.zoom.us/meeting)を開き，右上の「ミーティングをスケジュールする」を押してミーティングのスケジュール画面を開いてください．この画面の「定期ミーティング」というチェックボックスをオフのままにしておくと，1回限りのミーティングになります．1回限りのミーティングでは「開催日時」の項目で日付・時刻を指定する必要があります．
+ Web ブラウザで [Zoom のマイページ](https://u-tokyo-ac-jp.zoom.us/meeting)を開き，右上の「ミーティングをスケジュール」を押してミーティングのスケジュール画面を開いてください．この画面の「定期的なミーティング」というチェックボックスをオフのままにしておくと，1回限りのミーティングになります．1回限りのミーティングでは「開催日時」の項目で日付・時刻を指定する必要があります．
  ![](/_astro/schedule_date.webp)
  なお，実際には指定した日時とは異なる日時に会議室を使うことができます．また，指定した終了時刻を過ぎてもミーティングが強制的に終了されることもありません．
  ⋯
  開催日時と周期が指定された複数回行うミーティングを設定する方法を紹介します．
  ミーティングを設定する際に，「定期的なミーティング」にチェックを入れることで，複数回行うミーティングになります．複数回行うミーティングは，「開催日時」で指定した日時を第1回目として，その後開催周期を設定することで，定期的なミーティングとなります．
- まず，「定期的なミーティング」にチェックを入れた後に表示される「再実施」という項目で，ミーティング以降に開催する周期の単位を「毎日」「週ごと」「毎月」から選ぶことができます（「固定時刻なし」を選択すると，後述する開催日時を指定せずに複数回行うミーティングになります）．さらに，「リピート頻度」，「終了日」を指定することでより詳細に設定するともできます．例えば，開催日時を「2024/04/09 08:30 PM」，開催周期の単位を「週ごと」，リピート頻度を「1週数」，実施を「火曜日」，終了日を「2024/10/01」とすれば，2024年の4月9日から10月1日まで毎週火曜日8時30分からのミーティングを設定することができます．
+ まず，「定期的なミーティング」にチェックを入れた後に表示される「頻度」という項目で，ミーティング以降に開催する周期の単位を「日次」「週次」「毎次」から選ぶことができます（「固定期間なし」を選択すると，後述する開催日時を指定せずに複数回行うミーティングになります）．さらに，「繰り返し間隔」，「終了条件」を指定することでより詳細に設定することもできます．例えば，開催日時を「2026/09/03 08:00 AM」，開催周期の単位を「週次」，繰り返し間隔「1週間ごと」，実施を「木曜日」，終了日を「2026/10/15」とすれば，2026年の9月3日から10月15日まで毎週木曜日8時00分からのミーティングを設定することができます．
  ![](/_astro/schedule_recurring_check.webp)
- 開催日時と周期を指定した場合でも，指定された日時以外に会議を行うことができます． もっとも，必ずしも開催周期が固定されていない複数回のミーティングを開きたい場合は次の項目で説明する「固定時刻なし」の設定が適しています．
+ 開催日時と周期を指定した場合でも，指定された日時以外に会議を行うことができます． もっとも，必ずしも開催周期が固定されていない複数回のミーティングを開きたい場合は次の項目で説明する「固定期間なし」の設定が適しています．
  ## 開催日時を指定せずに複数回行うミーティングの設定方法
- 「定期ミーティング」にチェックを入れた後で，「再実施」の項目を「固定時刻なし」と選択することで，開催日時を指定しない会議室を設定することができます．
- 1回限りのミーティングや開催日時・周期を指定して複数回行うミーティングでも，同じURLで複数回ミーティングを行うことはできます．しかし，それぞれ開催可能な期間や回数等に制限があることや，スケジュールした日時以外にミーティングを行う際も事前に指定した日時が表示されて混乱を招くことがあるなど，使いづらい点があります．そのため，開催するミーティングが不定期である場合は，再実施の周期を「固定時刻なし」と設定することが適しています．
+ 「定期的なミーティング」にチェックを入れた後で，「頻度」の項目を「固定期間なし」と選択することで，開催日時を指定しない会議室を設定することができます．
+ 1回限りのミーティングや開催日時・周期を指定して複数回行うミーティングでも，同じURLで複数回ミーティングを行うことはできます．しかし，それぞれ開催可能な期間や回数等に制限があることや，スケジュールした日時以外にミーティングを行う際も事前に指定した日時が表示されて混乱を招くことがあるなど，使いづらい点があります．そのため，開催するミーティングが不定期である場合は，「頻度」の項目を「固定期間なし」と設定することが適しています．
  ![](/_astro/schedule_recurring_no_fixed_time.webp)
```

## English

```diff
- タイトル: Scheduling Recurring Zoom Meetings | utelecon
- 説明: Table of Contents: ...
+ タイトル: Detailed Date and Time Settings for Zoom Meetings | utelecon
+ 説明: Table of Contents: Three Types of Date and Time Settings; How to Set Up a One-time Meeting; How t...
  
- [Zoom](/en/zoom/) > [Scheduling a Meeting](/en/zoom/create_room/) > Scheduling Recurring Meetings
- # Scheduling Recurring Zoom Meetings
- By scheduling recurring meetings, you can use a fixed meeting URL with all 13 class occurrences. Note that the advanced settings of recurring meetings can be configured only in the Zoom Meetings page on your web browser. First, open [the Zoom profile page](https://zoom.us/profile) and sign into your Zoom account. Click “SCHEDULE” in the upper right corner. In the meeting settings page, you will see the option “Recurring meeting”. If this option is selected, you can hold recurring meetings with the same meeting URL.
- Please refer to the following video (Japanese only) for detailed instructions.
- [iframe](https://www.youtube.com/embed/rf_Tw0L5PLs) &#x3C;slot />
+ [Zoom](/en/zoom/) > [Scheduling a Meeting](/en/zoom/create_room/) > Detailed Date and Time Settings for Zoom Meetings
+ # Detailed Date and Time Settings for Zoom Meetings
+ This page explains the different types of detailed date and time settings for Zoom meetings and the features of each type. By configuring the date and time settings, you can set up a meeting that can be held multiple times using the same URL. For basic procedures on how to schedule a Zoom meeting, please refer to [Scheduling a Zoom Meeting](/en/zoom/create_room/).
+ ## Three Types of Date and Time Settings
+ When scheduling a meeting, you can choose whether to set it as a one-time meeting or a meeting that is held multiple times (recurring meeting). Furthermore, for meetings held multiple times, you can select whether or not to specify the date, time, and recurrence pattern.
+ - One-time meeting
+ - A recurring meeting with a specified date, time, and pattern
+ - A recurring meeting with no fixed date or time
+ The following sections explain the features of each setting and how to configure it.
+ ## How to Set Up a One-time Meeting
+ This section explains how to set up a one-time meeting by specifying the date and time.
+ Open [the My Meetings Page in Zoom](https://u-tokyo-ac-jp.zoom.us/meeting) using a web browser, and click “Schedule a Meeting” in the upper right corner to open the meeting schedule screen. If you leave the “Recurring meeting” checkbox unchecked on this screen, it will be a one-time meeting. For a one-time meeting, you only need to decide the date and time in the “When” section.
+ ![](/_astro/schedule_date.webp)
+ In practice, you can use the meeting room at a time that is different from the one you specified. Also, the meeting will not be forcibly terminated even if it continues past the specified end time.
+ In fact, even a one-time meeting can be used to hold multiple meetings using the same URL. However, the URL for a one-time meeting expires 30 days after the specified date. Therefore, if you would like to use the meeting room multiple times, it is better to set it as a recurring meeting as shown below.
+ Note that you can also change a meeting that has already been scheduled from a one-time meeting to a recurring meeting. For details, please refer to [Editing and managing Zoom meetings](/en/zoom/misc/edit_meeting/).
+ ## How to Set Up a Recurring Meeting with a Specified Date, Time, and Recurrence Pattern
+ Here, we introduce how to set up a recurring meeting with a specified date, time, and recurrence pattern.
+ When setting up a meeting, checking the “Recurring meeting” box turns it into a recurring meeting. A recurring meeting takes the date and time specified in the “When” as the first session, and by setting the recurrence pattern thereafter, it becomes a regular scheduled meeting.
+ First, under the “Recurrence” item that appears after checking “Recurring meeting”, you can choose the recurrence unit for subsequent meetings from “Daily”, “Weekly”, or “Monthly”. (If you select “No Fixed Time”, it becomes a recurring meeting without specifying a date and time, as described later.) Furthermore, you can configure more detailed settings by specifying “Repeat every” and “End date”. For example, if you set the date and time to “2026/08/29 05:00 PM”, the recurrence unit to “Weekly”, the repeat frequency to “1 week”, the day to “Sunday”, and the end date to “2026/10/10”, you can set up a meeting every Sunday at 5:30 PM from August 29 to October 10, 2026.
+ ![](/_astro/schedule_recurring_check.webp)
+ Even when you specify a date, time, and recurrence pattern for a meeting, you can still hold the meeting at other times. However, if you wish to hold multiple meetings without a fixed recurrence pattern, the “No Fixed Time” setting explained in the next section is suitable.
+ ## How to Set Up a Recurring Meeting with No Fixed Date or Time
+ After checking “Recurring meeting”, by selecting “No Fixed Time” in the “Recurrence” field, you can set up a meeting room that does not have a specified date and time.
+ Even with a one-time meeting or a recurring meeting with a specified date, time, and recurrence pattern, you can hold multiple meetings using the same URL. However, there are inconvenient aspects: each has limitations on the period and number of times it can be held, and when holding a meeting outside the scheduled time, the pre-specified date and time will still be displayed, which may cause confusion. Therefore, if you plan to hold meetings at irregular intervals, it would be appropriate to set the recurrence to “No Fixed Time.”
+ ![](/_astro/schedule_recurring_no_fixed_time.webp)
```

[← 一覧へ](<../README.md>)
