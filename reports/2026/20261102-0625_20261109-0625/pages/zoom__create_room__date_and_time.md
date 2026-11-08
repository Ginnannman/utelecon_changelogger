# Zoom開催日時の詳細な設定

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/zoom/create_room/date_and_time/`](<https://utelecon.adm.u-tokyo.ac.jp/zoom/create_room/date_and_time/>) | [`src/pages/zoom/create_room/date_and_time/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/045708c99ef240e226afdfc92c0c58f30f4133d6/src/pages/zoom/create_room/date_and_time/index.md>) |
| English | 変更 | [`/en/zoom/create_room/date_and_time/`](<https://utelecon.adm.u-tokyo.ac.jp/en/zoom/create_room/date_and_time/>) | [`src/pages/en/zoom/create_room/date_and_time/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/045708c99ef240e226afdfc92c0c58f30f4133d6/src/pages/en/zoom/create_room/date_and_time/index.mdx>) |

## 日本語

```diff
- タイトル: Zoom 開催日時の詳細な設定 | utelecon
+ タイトル: Zoom開催日時の詳細な設定 | utelecon
  説明: 目次: 開催日時の3つの設定; 1回限りのミーティングの設定方法; 開催日時と周期を指定して複数回行うミーティングの設定方法; 開催日時を指定せずに複数回行うミーティングの設定方法...
  
- [Zoom](/zoom/) > [ミーティングを作成する](/zoom/create_room/) > Zoom 開催日時の詳細な設定
- # Zoom 開催日時の詳細な設定
- この記事では，Zoomミーティングの開催日時の詳細な設定の種類と，それぞれの種類の特徴について説明します．開催日時の詳細な設定を行うことで，URLを変えずに複数回利用できるミーティングを設定することが可能になります．基本的なZoomミーティングの作成方法については，[Zoomミーティングを作成する](/zoom/create_room/)をご覧ください．
+ [Zoom](/zoom/) > [ミーティングを作成する](/zoom/create_room/) > Zoom開催日時の詳細な設定
+ # Zoom開催日時の詳細な設定
+ この記事では，Zoomミーティングの開催日時の詳細な設定の種類と，それぞれの種類の特徴について説明します．開催日時の詳細な設定を行い，複数回ミーティングを開催する設定にすると，URLの失効や，日時の表示の面で使いやすくなります．基本的なZoomミーティングの作成方法については，[Zoomミーティングを作成する](./../)をご覧ください．
  ## 開催日時の3つの設定
- ミーティングをスケジュールする際には，1回限りのミーティングとするか，複数回行うミーティングとするかを選ぶことができます．また，複数回行うミーティングでは，そのミーティングの開催日時・周期を指定するかどうかも選ぶことができます．
+ ミーティングをスケジュールする際には，1回限りのミーティングにするか，複数回行うミーティングにするかを選ぶことができます．また，複数回行うミーティングでは，そのミーティングの開催日時・周期を指定するかどうかも選ぶことができます．
  - 1回限りのミーティング
  - 開催日時と周期を指定して複数回行うミーティング
- - 開催日時を指定せず複数回行うミーティング
+ - 開催日時を指定せずに複数回行うミーティング
  以下では，それぞれの設定の特徴と設定方法を説明します．
  ## 1回限りのミーティングの設定方法
  開催日時を指定し，1回限りのミーティングを設定する方法を紹介します．
- Web ブラウザで [Zoom のマイページ](https://u-tokyo-ac-jp.zoom.us/meeting)を開き，右上の「ミーティングをスケジュール」を押してミーティングのスケジュール画面を開いてください．この画面の「定期的なミーティング」というチェックボックスをオフのままにしておくと，1回限りのミーティングになります．1回限りのミーティングでは「開催日時」の項目で日付・時刻を指定する必要があります．
- ![](/_astro/schedule_date.webp)
- なお，実際には指定した日時とは異なる日時に会議室を使うことができます．また，指定した終了時刻を過ぎてもミーティングが強制的に終了されることもありません．
- 加えて，1回限りのミーティングであっても，実際には1つのURLを使って複数回ミーティングを開催することができます．しかし，1回限りのミーティングのURLは指定された日付から30日後に失効します．そのため，会議室を複数回使用したい場合は以降で紹介する複数回行うミーティングに設定する方が良いでしょう．
- なお，一度スケジュールしたミーティングを，1回限りのミーティングから複数回行うミーティングに変更することもできます．詳しくは，[ミーティングの編集と管理](/zoom/misc/edit_meeting/)をご覧ください．
+ - Webブラウザで [Zoomの「ミーティング」のページ](https://u-tokyo-ac-jp.zoom.us/meeting)を開き，右上の「ミーティングをスケジュール」を押してミーティングのスケジュール画面を開いてください． ![](/_astro/meeting_schedule.webp)
+ - この画面の「定期的なミーティング」というチェックボックスをオフのままにしておくと，1回限りのミーティングになります．1回限りのミーティングでは「開催日時」の項目で日付・時刻を指定する必要があります． ![](/_astro/schedule_date.webp)
+ なお，実際には指定した日時とは異なる日時にミーティングを使うことができます．また，指定した終了時刻を過ぎてもミーティングが強制的に終了されることはありません．
+ 加えて，1回限りのミーティングであっても，実際には1つのURLを使って複数回ミーティングを開催することができます．しかし，1回限りのミーティングのURLは，予定日（その後に開始した場合は，最後に開始した日）から30日後に失効します．そのため，ミーティングを複数回使用したい場合は以降で紹介する複数回行うミーティングに設定する方が良いでしょう．
+ また，一度スケジュールしたミーティングを，1回限りのミーティングから複数回行うミーティングに変更することもできます．詳しくは，[Zoomミーティングの編集と管理](./../../misc/edit_meeting/)をご覧ください．
  ## 開催日時と周期を指定して複数回行うミーティングの設定方法
  開催日時と周期が指定された複数回行うミーティングを設定する方法を紹介します．
  ミーティングを設定する際に，「定期的なミーティング」にチェックを入れることで，複数回行うミーティングになります．複数回行うミーティングは，「開催日時」で指定した日時を第1回目として，その後開催周期を設定することで，定期的なミーティングとなります．
- まず，「定期的なミーティング」にチェックを入れた後に表示される「頻度」という項目で，ミーティング以降に開催する周期の単位を「日次」「週次」「毎次」から選ぶことができます（「固定期間なし」を選択すると，後述する開催日時を指定せずに複数回行うミーティングになります）．さらに，「繰り返し間隔」，「終了条件」を指定することでより詳細に設定することもできます．例えば，開催日時を「2026/09/03 08:00 AM」，開催周期の単位を「週次」，繰り返し間隔「1週間ごと」，実施を「木曜日」，終了日を「2026/10/15」とすれば，2026年の9月3日から10月15日まで毎週木曜日8時00分からのミーティングを設定することができます．
+ まず，「定期的なミーティング」にチェックを入れた後に表示される「頻度」という項目で，開催周期の単位を「日次」「週次」「月次」から選ぶことができます（「固定期間なし」を選択すると，後述する開催日時を指定せずに複数回行うミーティングになります）．さらに，「繰り返し間隔」，「終了条件」を指定することでより詳細に設定することもできます．例えば，開催日時を「11/01/2026 3:00 PM」，開催周期の単位を「週次」，繰り返し間隔「1週間ごと」，実施を「日曜日」，終了日を「12/13/2026」とすれば，2026年11月1日から12月13日まで毎週日曜日15時00分からのミーティングを設定することができます．
  ![](/_astro/schedule_recurring_check.webp)
- 開催日時と周期を指定した場合でも，指定された日時以外に会議を行うことができます． もっとも，必ずしも開催周期が固定されていない複数回のミーティングを開きたい場合は次の項目で説明する「固定期間なし」の設定が適しています．
+ 開催日時と周期を指定した場合でも，指定された日時以外にミーティングを行うことができます．もっとも，必ずしも開催周期が固定されていない複数回のミーティングを開きたい場合は次の項目で説明する「固定期間なし」の設定が適しています．
  ## 開催日時を指定せずに複数回行うミーティングの設定方法
- 「定期的なミーティング」にチェックを入れた後で，「頻度」の項目を「固定期間なし」と選択することで，開催日時を指定しない会議室を設定することができます．
- 1回限りのミーティングや開催日時・周期を指定して複数回行うミーティングでも，同じURLで複数回ミーティングを行うことはできます．しかし，それぞれ開催可能な期間や回数等に制限があることや，スケジュールした日時以外にミーティングを行う際も事前に指定した日時が表示されて混乱を招くことがあるなど，使いづらい点があります．そのため，開催するミーティングが不定期である場合は，「頻度」の項目を「固定期間なし」と設定することが適しています．
+ 「定期的なミーティング」にチェックを入れた後で，「頻度」の項目を「固定期間なし」と選択することで，開催日時を指定しないミーティングを設定することができます．
+ 1回限りのミーティングや開催日時・周期を指定して複数回行うミーティングでも，同じURLで複数回ミーティングを行うことはできます．しかし，それぞれ開催可能な期間や回数等に制限があることや，スケジュールした日時以外にミーティングを行う際に事前に指定した日時が表示されて混乱を招くことがあるなど，使いづらい点があります．そのため，開催するミーティングが不定期である場合は，「頻度」の項目を「固定期間なし」と設定することが適しています．
  ![](/_astro/schedule_recurring_no_fixed_time.webp)
```

## English

```diff
  [Zoom](/en/zoom/) > [Scheduling a Meeting](/en/zoom/create_room/) > Detailed Date and Time Settings for Zoom Meetings
  # Detailed Date and Time Settings for Zoom Meetings
- This page explains the different types of detailed date and time settings for Zoom meetings and the features of each type. By configuring the date and time settings, you can set up a meeting that can be held multiple times using the same URL. For basic procedures on how to schedule a Zoom meeting, please refer to [Scheduling a Zoom Meeting](/en/zoom/create_room/).
+ This page explains the different types of detailed date and time settings for Zoom meetings and the features of each type. Configuring detailed date and time settings, or setting up a recurring meeting, can make a meeting easier to reuse, both in terms of URL expiration and how the date and time are displayed. For basic procedures on how to schedule a Zoom meeting, please refer to [Scheduling a Zoom Meeting](./../).
  ## Three Types of Date and Time Settings
  When scheduling a meeting, you can choose whether to set it as a one-time meeting or a meeting that is held multiple times (recurring meeting). Furthermore, for meetings held multiple times, you can select whether or not to specify the date, time, and recurrence pattern.
- - One-time meeting
- - A recurring meeting with a specified date, time, and pattern
+ - A one-time meeting
+ - A recurring meeting with a specified date, time, and recurrence pattern
  - A recurring meeting with no fixed date or time
  The following sections explain the features of each setting and how to configure it.
  ## How to Set Up a One-time Meeting
  This section explains how to set up a one-time meeting by specifying the date and time.
- Open [the My Meetings Page in Zoom](https://u-tokyo-ac-jp.zoom.us/meeting) using a web browser, and click “Schedule a Meeting” in the upper right corner to open the meeting schedule screen. If you leave the “Recurring meeting” checkbox unchecked on this screen, it will be a one-time meeting. For a one-time meeting, you only need to decide the date and time in the “When” section.
- ![](/_astro/schedule_date.webp)
- In practice, you can use the meeting room at a time that is different from the one you specified. Also, the meeting will not be forcibly terminated even if it continues past the specified end time.
- In fact, even a one-time meeting can be used to hold multiple meetings using the same URL. However, the URL for a one-time meeting expires 30 days after the specified date. Therefore, if you would like to use the meeting room multiple times, it is better to set it as a recurring meeting as shown below.
- Note that you can also change a meeting that has already been scheduled from a one-time meeting to a recurring meeting. For details, please refer to [Editing and managing Zoom meetings](/en/zoom/misc/edit_meeting/).
+ - Open [Zoom’s “Meetings” page](https://u-tokyo-ac-jp.zoom.us/meeting) in your web browser, and click “Schedule a Meeting” in the upper right corner to open the meeting schedule screen. ![](/_astro/meeting_schedule.webp)
+ - If you leave the “Recurring meeting” checkbox unchecked on this screen, it will be a one-time meeting. For a one-time meeting, you only need to decide the date and time in the “When” field. ![](/_astro/schedule_date.webp)
+ Note that you can start the meeting at a time different from the one specified. Also, the meeting will not be forcibly terminated even if it continues past the specified end time.
+ In fact, even a one-time meeting can be used to hold multiple meetings using the same URL. However, the URL for a one-time meeting expires 30 days after the scheduled date (or after the date it was last started, if that is later). Therefore, if you would like to use the same meeting URL multiple times, it is better to set it as a recurring meeting as shown below.
+ Note that you can also change a meeting that has already been scheduled from a one-time meeting to a recurring meeting. For details, please refer to [Editing and Managing Zoom Meetings](./../../misc/edit_meeting/).
  ## How to Set Up a Recurring Meeting with a Specified Date, Time, and Recurrence Pattern
- Here, we introduce how to set up a recurring meeting with a specified date, time, and recurrence pattern.
- When setting up a meeting, checking the “Recurring meeting” box turns it into a recurring meeting. A recurring meeting takes the date and time specified in the “When” as the first session, and by setting the recurrence pattern thereafter, it becomes a regular scheduled meeting.
- First, under the “Recurrence” item that appears after checking “Recurring meeting”, you can choose the recurrence unit for subsequent meetings from “Daily”, “Weekly”, or “Monthly”. (If you select “No Fixed Time”, it becomes a recurring meeting without specifying a date and time, as described later.) Furthermore, you can configure more detailed settings by specifying “Repeat every” and “End date”. For example, if you set the date and time to “2026/08/29 05:00 PM”, the recurrence unit to “Weekly”, the repeat frequency to “1 week”, the day to “Sunday”, and the end date to “2026/10/10”, you can set up a meeting every Sunday at 5:30 PM from August 29 to October 10, 2026.
+ This section explains a recurring meeting with a specified date, time, and recurrence pattern.
+ When setting up a meeting, checking the “Recurring meeting” box turns it into a recurring meeting. A recurring meeting takes the date and time specified in the “When” field as the first session, and by also setting a recurrence pattern, you can make it a regularly scheduled meeting.
+ First, under the “Recurrence” field that appears after checking “Recurring meeting”, you can choose the recurrence unit for subsequent meetings from “Daily”, “Weekly”, or “Monthly”. (If you select “No Fixed Time”, it becomes a recurring meeting without specifying a date and time, as described later.) Furthermore, you can configure more detailed settings by specifying “Repeat every” and “End date”. For example, if you set the date and time to “11/02/2026 5:00 PM”, the recurrence unit to “Weekly”, the “Repeat every” to “1 week”, the day to “Monday”, and the end date to “12/14/2026”, you can set up a meeting every Monday at 5:00 PM from November 2 to December 14, 2026.
  ![](/_astro/schedule_recurring_check.webp)
  Even when you specify a date, time, and recurrence pattern for a meeting, you can still hold the meeting at other times. However, if you wish to hold multiple meetings without a fixed recurrence pattern, the “No Fixed Time” setting explained in the next section is suitable.
  ## How to Set Up a Recurring Meeting with No Fixed Date or Time
- After checking “Recurring meeting”, by selecting “No Fixed Time” in the “Recurrence” field, you can set up a meeting room that does not have a specified date and time.
- Even with a one-time meeting or a recurring meeting with a specified date, time, and recurrence pattern, you can hold multiple meetings using the same URL. However, there are inconvenient aspects: each has limitations on the period and number of times it can be held, and when holding a meeting outside the scheduled time, the pre-specified date and time will still be displayed, which may cause confusion. Therefore, if you plan to hold meetings at irregular intervals, it would be appropriate to set the recurrence to “No Fixed Time.”
+ After checking “Recurring meeting”, by selecting “No Fixed Time” in the “Recurrence” field, you can set up a meeting that does not have a specified date and time.
+ Even with a one-time meeting or a recurring meeting with a specified date, time, and recurrence pattern, you can hold multiple meetings using the same URL. However, there are inconvenient aspects: each has limitations on the period and number of times it can be held, and when holding a meeting outside the scheduled time, the pre-specified date and time will still be displayed, which may cause confusion. Therefore, if you plan to hold meetings at irregular intervals, it would be appropriate to set the recurrence to “No Fixed Time”.
  ![](/_astro/schedule_recurring_no_fixed_time.webp)
```

[← 一覧へ](<../README.md>)
