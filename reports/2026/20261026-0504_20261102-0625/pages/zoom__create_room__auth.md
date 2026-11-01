# Zoomミーティングで参加時に認証を求める

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/zoom/create_room/auth/`](<https://utelecon.adm.u-tokyo.ac.jp/zoom/create_room/auth/>) | [`src/pages/zoom/create_room/auth/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/1cdef038ec713cd321a0ef53b8add1c87c637a73/src/pages/zoom/create_room/auth/index.mdx>) |
| English | 変更 | [`/en/zoom/create_room/auth/`](<https://utelecon.adm.u-tokyo.ac.jp/en/zoom/create_room/auth/>) | [`src/pages/en/zoom/create_room/auth/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/1cdef038ec713cd321a0ef53b8add1c87c637a73/src/pages/en/zoom/create_room/auth/index.mdx>) |

## 日本語

```diff
  タイトル: Zoomミーティングで参加時に認証を求める | utelecon
- 説明: 目次: 個々のミーティングで設定する; デフォルトの設定を変更する...
+ 説明: 目次: 個々のミーティングで設定する; デフォルトのドメイン設定を確認する...
  
  [Zoom](/zoom/) > [ミーティングを作成する](/zoom/create_room/) > 参加時に認証を求める
  # Zoomミーティングで参加時に認証を求める
- Zoomでは，ミーティングに参加できるユーザを制限することができます．特に「大学アカウントでサインイン」の設定を行うと，ミーティング参加時に東京大学のZoomアカウントでのサインインが必要になります．
- ただし，大学のアカウントでのサインインに参加者が慣れていない場合（特に，授業の学期開始当初）は，設定をオフにすることを推奨します．設定に関する考え方については，「[授業におけるZoom会議室の入室制限](/faculty_members/zoom_access_control/)」もご覧ください．
- [2021年春のシステム変更](/change2021s/)後，古い設定をそのまま利用していると，東京大学のアカウントに正しくサインインしているユーザが会議室に入れないことがありますので，このページの説明を読み設定内容を必ず確認してください．
+ Zoomでは，ミーティングに参加できるユーザーを制限できます．「大学アカウントでサインイン」の設定を行うと，参加時に東京大学のZoomアカウントでのサインインが必要になり，サインインしていない人（学外のゲストなど）は入室できません．．
+ ただし，大学のアカウントでのサインインに参加者が慣れていない場合（特に，学期開始当初の授業）は，設定をオフにすることを推奨します．設定に関する考え方については，「[授業におけるZoom会議室の入室制限](./../../../faculty_members/zoom_access_control/)」もご覧ください．
  ## 個々のミーティングで設定する
- - Web ブラウザで[Zoomの「ミーティング」のページ](https://u-tokyo-ac-jp.zoom.us/meeting#/upcoming)へ移動します． ![](/_astro/meeting_1.webp)
- - ミーティングの設定画面を開きます．
-   - 新しくミーティングを作成する場合は，「ミーティングをスケジューリング」を押します．
-   - 以前に作成したミーティングの設定を確認・変更する場合は，一覧に表示されているミーティングにマウスを重ねると右側に「編集」ボタンが表示されるので，このボタンを押します． ![](/_astro/meeting_2.webp)
- - 「セキュリティ」の中にある「参加時に認証を求める」から設定を行います．オンにした上で「大学アカウントでサインイン」を選択すると，東京大学の Zoom アカウントでサインインしないと入室できないようになります．オンにする場合は，「大学アカウントでサインイン」の下に表示されるドメインが *.u-tokyo.ac.jp であることを確認してください（異なる場合は「編集」を押して *.u-tokyo.ac.jp に変更してください）． ![](/_astro/meeting_3.webp)
- [2021年春のシステム変更](/change2021s/)後，東京大学のZoomアカウントは @utac.u-tokyo.ac.jp に変更されました．このため，これまでドメインの設定を g.ecc.u-tokyo.ac.jp としていた場合，そのままの設定では東京大学のアカウントに正しくサインインしているユーザが会議室に入れなくなります．必ず上記の通り *.u-tokyo.ac.jp に変更してください．
- ## デフォルトの設定を変更する
+ - Webブラウザで[Zoomの「ミーティング」のページ](https://u-tokyo-ac-jp.zoom.us/meeting#/upcoming)へ移動してください． ![](/_astro/zoom_auth_meeting_page.webp)
+ - ミーティングの設定画面を開いてください．
+   - 新しくミーティングを作成する場合は，「ミーティングをスケジュール」を押してください．
+   - 以前に作成したミーティングの設定を確認・変更する場合は，一覧に表示されているミーティングにマウスを重ねると右側に「編集」ボタンが表示されるので，このボタンを押してください． ![](/_astro/zoom_auth_meeting_edit.webp)
+ - 「セキュリティ」の中の「参加時に認証を求める」をオンにし，「大学アカウントでサインイン」を選択してください．
+   - 東京大学のZoomアカウントでサインインしないと入室できなくなります．
+   - 「大学アカウントでサインイン」の下に表示されるドメインが*.u-tokyo.ac.jpであることを確認してください．異なる場合は「編集」を押して*.u-tokyo.ac.jpに変更してください． ![](/_astro/zoom_auth_meeting_security.webp)
+ ## デフォルトのドメイン設定を確認する
  新しく作成するミーティングのデフォルトの設定を変更することもできます．
- - Web ブラウザで[Zoomの設定ページ](https://u-tokyo-ac-jp.zoom.us/profile/setting)へ移動します． ![](/_astro/1.webp)
- - 「ミーティング認証オプション：大学アカウントでサインイン (Default) 」の編集ボタンをクリックします． ![](/_astro/setting_2.webp)
- - 「以下の指定ドメインでZoomにサインインします」が*.u-tokyo.ac.jpとなっていることを確認してください．なっていなければ*.u-tokyo.ac.jpを入力し保存してください． ![](/_astro/setting_3.webp)
+ - Webブラウザで[Zoomの設定ページ](https://u-tokyo-ac-jp.zoom.us/profile/setting)へ移動してください． ![](/_astro/zoom_auth_settings_page.webp)
+ - 「ミーティング」から「セキュリティ」を開き，「ミーティング認証オプション：大学アカウントでサインイン(デフォルト)」の編集ボタンを押してください． ![](/_astro/zoom_auth_settings_univ_account.webp)
+ - 「ドメインを指定」が*.u-tokyo.ac.jpとなっていることを確認してください．なっていなければ*.u-tokyo.ac.jpを入力し保存してください． ![](/_astro/zoom_auth_settings_univ_domain.webp)
```

## English

```diff
  タイトル: Requiring Authentication to Join a Zoom Meeting | utelecon
- 説明: Table of Contents: Setting up Individual Meetings; Changing the Default Settings...
+ 説明: Table of Contents: Setting Up Individual Meetings; Checking the Default Domain Settings...
  
  [Zoom](/en/zoom/) > [Scheduling a Meeting](/en/zoom/create_room/) > Requiring Authentication
  # Requiring Authentication to Join a Zoom Meeting
- Authentication profiles allow hosts to restrict Zoom meeting participants to users whose email address matches a certain domain. If the option “大学アカウントでサインイン(Sign in with university account)” is selected, participants will be asked to sign in with their UTokyo Zoom account to join the meeting.
- In the case that participants are not used to signing in with their UTokyo account (especially at the beginning of a semester), it is recommended to turn off such settings. See also “[Restricting access to the Zoom conference room for classes](/en/faculty_members/zoom_access_control/)” for more information about the settings.
- If you continue with the old settings after the [System Change for Spring 2021](/en/change2021s/), it is possible that participants who have correctly signed into the UTokyo Zoom account fail to join the meeting. Please read the instructions on this page and confirm your settings.
- ## Setting up Individual Meetings
- - Open the [Zoom “Meetings” page](https://u-tokyo-ac-jp.zoom.us/meeting#/upcoming) on your web browser. ![](/_astro/meeting_1.webp)
+ Authentication profiles allow hosts to restrict Zoom meeting participants to users whose email address matches a certain domain. If the option “大学アカウントでサインイン” (“Sign in with university account”) is selected, participants will be asked to sign in with their UTokyo Zoom account to join the meeting.
+ If participants are not used to signing in with their UTokyo account (especially at the beginning of a semester), we recommend turning this setting off. See also “[Restricting Access to Zoom Meeting Rooms for Online Classes](./../../../faculty_members/zoom_access_control/)” for more information about the settings.
+ ## Setting Up Individual Meetings
+ - Open the [Zoom “Meetings” page](https://u-tokyo-ac-jp.zoom.us/meeting#/upcoming) in your web browser. ![](/_astro/zoom_auth_meeting_page.webp)
  - Go to the meeting settings page.
    - To create a new meeting, click “Schedule a Meeting”.
-   - To check or modify the settings of previously scheduled meetings, hover your mouse over the meeting in the list and click the “Edit” button on the right side. ![](/_astro/meeting_2.webp)
- - Configure the settings under “Require authentication to join” in “Security”. If you turn it on and select “大学アカウントでサインイン(Sign in with university account)”, only participants who have signed in to their UTokyo Zoom account are able to join the meeting. Additionally, please check that the domain shown under “大学アカウントでサインイン(Sign in with university account)” is set to *.u-tokyo.ac.jp (if not, click “Edit” and change it to *.u-tokyo.ac.jp). ![](/_astro/meeting_3.webp)
- After the [System Change for Spring 2021](/en/change2021s/), the domain of UTokyo Zoom accounts is changed to @utac.u-tokyo.ac.jp. If you previously set the domain as @g.ecc.u-tokyo.ac.jp, participants who have correctly signed into the UTokyo Zoom account may not be able to join the meeting. Please make sure to change the domain to *.u-tokyo.ac.jp following the procedure above.
- ## Changing the Default Settings
+   - To check or modify the settings of previously scheduled meetings, hover your mouse over the meeting in the list and click the “Edit” button on the right side. ![](/_astro/zoom_auth_meeting_edit.webp)
+ - Under “Security”, turn on “Require authentication to join” and select “大学アカウントでサインイン” (“Sign in with university account”).
+   - Only participants who have signed in with their UTokyo Zoom account can join the meeting.
+   - Check that the domain shown under “大学アカウントでサインイン” (“Sign in with university account”) is *.u-tokyo.ac.jp. If not, click “Edit” and change it. ![](/_astro/zoom_auth_meeting_security.webp)
+ ## Checking the Default Domain Settings
  It is also possible to change the default settings for newly scheduled meetings.
- - Open the [Zoom “Settings” page](https://u-tokyo-ac-jp.zoom.us/meeting#/upcoming) on your web browser. ![](/_astro/setting_1.webp)
- - Click the “Edit” button under “Meeting Authentication Options-大学アカウントでサインイン (Default) (Sign in with university account (Default))” ![](/_astro/setting_2.webp)
- - Check that the domain is set to *.u-tokyo.ac.jp in the field of “Sign in to Zoom with the following specified domains”. If not, please change it to *.u-tokyo.ac.jp and save your settings. ![](/_astro/setting_3.webp)
+ - Open the [Zoom “Settings” page](https://u-tokyo-ac-jp.zoom.us/profile/setting) in your web browser. ![](/_astro/zoom_auth_settings_page.webp)
+ - Go to ‘Meetings’, then open ‘Security’. Then click the “Edit” button under “Meeting Authentication Options-大学アカウントでサインイン (Default)” (“Sign in with university account (Default)”). ![](/_astro/zoom_auth_settings_univ_account.webp)
+ - Check that the domain is set to *.u-tokyo.ac.jp in the field of “Specify the domains”. If not, please change it to *.u-tokyo.ac.jp and save your settings. ![](/_astro/zoom_auth_settings_univ_domain.webp)
```

[← 一覧へ](<../README.md>)
