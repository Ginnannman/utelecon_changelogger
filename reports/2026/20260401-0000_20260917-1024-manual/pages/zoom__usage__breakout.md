# ブレイクアウトルーム機能の使い方

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/zoom/usage/breakout/`](<https://utelecon.adm.u-tokyo.ac.jp/zoom/usage/breakout/>) | [`src/pages/zoom/usage/breakout/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/zoom/usage/breakout/index.mdx>) |
| English | 変更 | [`/en/zoom/usage/breakout/`](<https://utelecon.adm.u-tokyo.ac.jp/en/zoom/usage/breakout/>) | [`src/pages/en/zoom/usage/breakout/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/zoom/usage/breakout/index.mdx>) |

## 日本語

```diff
  ### 追加の参加者を割り当てる
  ブレイクアウトセッション開始後にミーティングに参加した人がいる場合，その人は「未割り当て」の状態でメインミーティングにとどまります．その人をいずれかのブレイクアウトルームに追加で割り当てるときは，個別に手動で割り当てる必要があります．
- 遅れてメインミーティグに入室した参加者がいる場合は，ミーティング画面下部の「ブレイクアウトルーム」（ブレイクアウトルームのボタンが表示されていない場合は，「詳細」）の右上に赤文字でその人数が表示されます．ブレイクアウトルーム実施中は，遅れてきた参加者が未割り当てのままになっていないか，注意してください．
+ 遅れてメインミーティングに入室した参加者がいる場合は，ミーティング画面下部の「ブレイクアウトルーム」（ブレイクアウトルームのボタンが表示されていない場合は，「詳細」）の右上に赤文字でその人数が表示されます．ブレイクアウトルーム実施中は，遅れてきた参加者が未割り当てのままになっていないか，注意してください．
  ![](/_astro/zoom_breakout_host_unassigned_badge.webp)
  未割り当ての参加者がいる状態で，ミーティング画面下部の「ブレイクアウトルーム」を選択すると，以下のような画面が表示されます．「未割り当て」の状態にある参加者にカーソルを合わせて，「割り当て先」を押してください．すると，現在開いているブレイクアウトルームの一覧が表示されます．参加させたいブレイクアウトルームを選択すると，割り当てが完了します． ![](/_astro/zoom_breakout_host_allocate_unassigned_participants.webp)
```

## English

```diff
  # How to use Breakout Rooms
  ## What are Breakout Rooms?
- The Breakout Room feature allows the host of the main Zoom meeting to divide participants into several smaller groups and assign them to separate rooms (breakout rooms). This enables simultaneous small-group sessions (breakout sessions) to take place. Participants in each breakout room can use the video, audio, chat, and screen sharing functions, just like in the main meeting. However, since each breakout room is independent, the contents of one room is not shared with the others. For example, this feature can be used for group work during a class or as a question room during a lab session.
+ The Breakout Room feature allows the host of the main Zoom meeting to divide participants into several smaller groups and assign them to separate rooms (breakout rooms). This enables simultaneous small-group sessions (breakout sessions) to take place. Participants in each breakout room can use the video, audio, chat, and screen sharing functions, just like in the main meeting. However, since each breakout room is independent, the contents of one room are not shared with the others. For example, this feature can be used for group work during a class or as a question room during a lab session.
  To use the breakout room feature, the meeting host or co-host creates the rooms, assigns participants to them, and the participants enter their respective rooms.
  In meetings created with a UTokyo Zoom account, a maximum of 100 breakout rooms can be created.
  ⋯
  Please note that after the breakout session starts, an “Unassigned” item may appear on the host’s or co-host’s screen. Participants whose names are here remain in the main meeting without being assigned to any room. To assign them, hover over their name, click the “Assign to” which appears, and select the room for the unassigned participant to join.
  ##### Tip 1 for Manual Assignment
- The participant list for manual assignment is sorted by name. Therefore, having participants set their names according to their group (e.g.by adding a number or group name to the beginning of their name) can make it easier to find them. Participants can change their own names, or the host can change them. For details, see the [“Usages in Zoom Meeting”](/en/zoom/usage/) page.
+ The participant list for manual assignment is sorted by name. Therefore, having participants set their names according to their group (e.g., by adding a number or group name to the beginning of their name) can make it easier to find them. Participants can change their own names, or the host can change them. For details, see the [“Usages in Zoom Meeting”](/en/zoom/usage/) page.
  ![](/_astro/zoom_breakout_allocation_assign_number.webp)
  ##### Tip 2 for Manual Assignment
  ⋯
  - Finally, click “Share” The screen share will begin.
  ### Assigning Additional Participants
- If someone joins the meeting after the breakout session has started, they remains in the main meeting as “Unassigned”. To add them to a breakout room, you must assign them manually.
+ If someone joins the meeting after the breakout session has started, they remain in the main meeting as “Unassigned”. To add them to a breakout room, you must assign them manually.
  If participants join the main meeting late, their number is displayed in red text at the top right of the “Breakout rooms” button at the bottom of the meeting screen (if the button isn’t visible, click on “More” to display it). During a breakout session, be careful to check if latecomers remain unassigned.
  ![](/_astro/zoom_breakout_host_unassigned_badge.webp)
  ⋯
  Previously saved breakout room assignments can be reused when creating a new meeting. To do this, “Allow host to assign participants to breakout rooms when scheduling” must be enabled on the Zoom web portal. For how to enable this, see [“Loading a Pre-assigned Allocation”](#start-assignment-preloading).
  The steps to pre-assign using a previously saved assignment are as follows:
- - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](/zoom/signin/#browser) page.
+ - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](/en/zoom/signin/#browser) page.
  - Open “Upcoming” in the “Meetings” section. Schedule a new meeting by clicking “Schedule a Meeting”, or for an existing meeting, hover over it and click “Edit”, then “Edit Entire Series”.
  - Under the “Time Zone” item, ensure “Recurring meeting” is checked.
  ⋯
  - A list of currently open breakout rooms will be displayed. Select “Join” next to the room you want to join, and then click “Yes”. ![](/_astro/zoom_breakout_participants_join.webp)
  ### Recording in a Breakout Room
- During a breakout session, the host’s cloud recording (saving the recording to the Zoom cloud) only records the main meeting. However, with local recording (saving the recording to an individual’s PC, etc.), the breakout room where a participant that is recording is located becomes the recording target. Therefore, if you want to record a meeting within a breakout room, you must use local recording. To do this, someone from the participant in each breakout room must be designated as the recorder, and the host must either make those people co-hosts or give them permission to record. Recording breakout rooms is useful if you want to review the discussion later. For details on how to give participants recording permission and recording procedures, see [“Recording Zoom Meeting”](/en/zoom/usage/recording/).
+ During a breakout session, the host’s cloud recording (saving the recording to the Zoom cloud) only records the main meeting. However, with local recording (saving the recording to an individual’s PC, etc.), the breakout room where a participant that is recording is located becomes the recording target. Therefore, if you want to record a meeting within a breakout room, you must use local recording. To do this, someone from the participants in each breakout room must be designated as the recorder, and the host must either make those people co-hosts or give them permission to record. Recording breakout rooms is useful if you want to review the discussion later. For details on how to give participants recording permission and recording procedures, see [“Recording Zoom Meeting”](/en/zoom/usage/recording/).
  ![](/_astro/zoom_breakout_participants_recording_co_host.webp)
  - (Actions for the participant in charge of recording) After joining each breakout room, select “Record” at the bottom of the meeting screen (if not visible, click “More” to display it). Local recording will start automatically.
```

[← 一覧へ](<../README.md>)
