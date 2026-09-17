# Zoomミーティングで参加時に認証を求める

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更なし | [`/zoom/create_room/auth/`](<https://utelecon.adm.u-tokyo.ac.jp/zoom/create_room/auth/>) | [`src/pages/zoom/create_room/auth/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/zoom/create_room/auth/index.md>) |
| English | 変更 | [`/en/zoom/create_room/auth/`](<https://utelecon.adm.u-tokyo.ac.jp/en/zoom/create_room/auth/>) | [`src/pages/en/zoom/create_room/auth/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/zoom/create_room/auth/index.md>) |

## English

```diff
  # Requiring Authentication to Join a Zoom Meeting
  Authentication profiles allow hosts to restrict Zoom meeting participants to users whose email address matches a certain domain. If the option “大学アカウントでサインイン(Sign in with university account)” is selected, participants will be asked to sign in with their UTokyo Zoom account to join the meeting.
- In the case that participants are not used to signing in with their UTokyo account (especially at the beginning of a semester), it is recommended to turn off such settings. See also “[Restricting access to the Zoom conference room for classes (Japanese only)](/en/faculty_members/zoom_access_control/)” for more information about the settings.
+ In the case that participants are not used to signing in with their UTokyo account (especially at the beginning of a semester), it is recommended to turn off such settings. See also “[Restricting access to the Zoom conference room for classes](/en/faculty_members/zoom_access_control/)” for more information about the settings.
  If you continue with the old settings after the [System Change for Spring 2021](/en/change2021s/), it is possible that participants who have correctly signed into the UTokyo Zoom account fail to join the meeting. Please read the instructions on this page and confirm your settings.
  ## Setting up Individual Meetings
```

[← 一覧へ](<../README.md>)
