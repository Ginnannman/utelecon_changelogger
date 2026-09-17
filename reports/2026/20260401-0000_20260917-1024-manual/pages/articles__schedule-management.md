# オンラインツールで予定を管理する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/articles/schedule-management/`](<https://utelecon.adm.u-tokyo.ac.jp/articles/schedule-management/>) | [`src/pages/articles/schedule-management/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/articles/schedule-management/index.md>) |
| English | 変更 | [`/en/articles/schedule-management/`](<https://utelecon.adm.u-tokyo.ac.jp/en/articles/schedule-management/>) | [`src/pages/en/articles/schedule-management/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/articles/schedule-management/index.md>) |

## 日本語

```diff
  - 「カスタムビュー」では自分の好みに合わせて表示をカスタマイズできます．この「カスタムビュー」はデフォルトでは「4日」に設定されていますが，「設定」の中にある「カスタムビューの設定」から「3日」や「2週間」など自分が使いやすいように変更できます．
  #### ③アカウントの変更
- - 複数Googleアカウントを持っている場合、ここをクリックすることでアカウントを変更することができます．
+ - 複数Googleアカウントを持っている場合，ここをクリックすることでアカウントを変更することができます．
  - アカウントを変えると，そのアカウントのカレンダーに切り替わります．
  #### ④マイカレンダー
  ⋯
  - 個人的な予定管理で主に使うのは「予定」，または「タスク」です．
  - 「サイレントモード」や「外出中」は，例えば他の人からの会議の招待などを断りたい時間帯があるときに設定します．
- - 「予約スケジュール枠」は，不特定多数の人に自分の空き時間を知らせたい場合に使います．「予約スケジュール」が設定されると、他の人は設定された予約枠にエントリーして会議などを設定できます．
+ - 「予約スケジュール枠」は，不特定多数の人に自分の空き時間を知らせたい場合に使います．「予約スケジュール」が設定されると，他の人は設定された予約枠にエントリーして会議などを設定できます．
  ##### B. 予定の内容
  - こちらのアイコンそれぞれの右横にある入力欄に予定に必要な情報を書き込みます．
```

## English

```diff
  - If you have more than one Google account, you can change the account by clicking here.
  - When you change the account, the calendar will switch to the calendar of that account.
- #### ④ My Calenders
+ #### ④ My Calendars
  - The “My calendars” column shows the calendars for which you have the “Make changes & manage sharing” access permission enabled in the calendar sharing settings.
  - “Make changes & manage sharing” is the most powerful access permission that can be granted to the calendar sharer, allowing him or her to perform the same operations as the owner of the calendar, such as changing appointments and sharing settings.
  ⋯
  C. More options
  - You can set up more advanced options for your schedule here.
- - When you click on the button, the following window will be displayed. The information that can be entered in “B. Contents of the appointment” can also be entered using the “More options” screen. Please refer to the [“Appointment details”](#appointment-details) below for the details that can be entered in each field. Entering the items found in “B. Contents of the appointment” are generally sufficient to set up a meeting, but some settings can only be entered using the “More options” screen; for example, the guest’s permission settings in “⑦ Adding guests.”
+ - When you click on the button, the following window will be displayed. The information that can be entered in “B. Contents of the appointment” can also be entered using the “More options” screen. Please refer to the [“Appointment details”](#appointment-details) below for the details that can be entered in each field. Entering the items found in “B. Contents of the appointment” is generally sufficient to set up a meeting, but some settings can only be entered using the “More options” screen; for example, the guest’s permission settings in “⑦ Adding guests.”
  ![Screenshot from Google Calendar. A page to edit details of the event is shown.](/_astro/schedule_settings.webp)
  Appointment details
- ① Settings date and time
+ ① Setting date and time
  - This is where you set the date and time of the appointment.
  - You can also set the time zone and set a repeating or all-day schedule.
  ⋯
  ![](/_astro/share_calendar.webp)
  If you have multiple Google accounts and use separate calendars for each account, your events are scattered between different Google calendars, which can be troublesome to coordinate. In such a case, you can integrate the calendars of different accounts into one calendar for better visibility and centralized management of events.
- - Open the Google Calendar of the account you want to share．
+ - Open the Google Calendar of the account you want to share.
  - Go to Settings and select the calendar you want to share.
  - Select “Share with specific people or groups” and click “+Add people and groups”. ![](/_astro/authorization_settings.webp)
```

[← 一覧へ](<../README.md>)
