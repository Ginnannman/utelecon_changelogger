# Zoom ミーティングに参加する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/zoom/join/`](<https://utelecon.adm.u-tokyo.ac.jp/zoom/join/>) | [`src/pages/zoom/join/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/045708c99ef240e226afdfc92c0c58f30f4133d6/src/pages/zoom/join/index.md>) |
| English | 変更 | [`/en/zoom/join/`](<https://utelecon.adm.u-tokyo.ac.jp/en/zoom/join/>) | [`src/pages/en/zoom/join/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/045708c99ef240e226afdfc92c0c58f30f4133d6/src/pages/en/zoom/join/index.md>) |

## 日本語

```diff
  ### 招待用URLにアクセスして参加する方法
  - ブラウザで招待用URLにアクセスしてください．例えば，東京大学のアカウントで作成したZoomミーティングのURLは，多くの場合https://u-tokyo-ac-jp.zoom.us/j/99999999999?pwd=xxx...のような形をしています．99999999999の部分はミーティングIDの情報を，xxx...の部分はパスコードの情報を，それぞれ表しています．
- - ブラウザ上に「ミーティングを起動」というページが表示されます．
+ - ブラウザ上に「ミーティングに参加」というページが表示されます．
    - Zoomアプリがインストールされている場合，アプリの起動の許可を求めるポップアップが表示されることがあります．その場合は，ポップアップの記述に従いアプリの起動を許可してください．なおアプリ起動後の操作については，「[アプリでの操作](#procedure-app)」のセクションで詳しく説明します．
-   - Zoomアプリがインストールされていない場合は，「Zoomを開きますか？」のダイアログは表示されません．アプリを使わずにZoomミーティングに参加する方法は，「[ブラウザでの操作](#procedure-browser)」のセクションで詳しく後述します．
+   - Zoomアプリがインストールされていない場合は，アプリの起動の許可を求めるポップアップは表示されません．アプリを使わずにZoomミーティングに参加する方法は，「[ブラウザでの操作](#procedure-browser)」のセクションで詳しく後述します．
  #### アプリでの操作
  アプリが起動した後，そのままミーティングに入室できる場合と，追加での操作が必要な場合があります．ここでは，入室時に必要となり得る代表的な追加操作や，入室した後に行う操作について説明します．
  - 「サインインしてこのミーティングに参加」や「Zoomアカウントがこのミーティングに対して承認されていません」という画面が表示されることがあります．この画面が表示された場合は，「サインイン」や「アカウントを切り替える」を押して，UTokyo AccountでZoomにサインインしてください．サインインの方法は「[Zoom サインイン方法](./../signin/)」を参照してください． ![](/_astro/zoom_join_signin_not.webp) ![](/_astro/zoom_join_signin_other.webp)
  - 「ミーティングパスコードを入力」という画面が表示された場合は，パスコードを入力してください．
- - ミーティングに入室した後でオーディオ接続を求められた場合，オーディオの設定を行い，「コンピューターオーディオで参加」を押してください． ![](/_astro/zoom_join_app_audio_via_link.webp)
+ - ミーティングに入室した後でオーディオ接続を求められた場合，オーディオの設定を行い，「コンピュータオーディオで参加」を押してください． ![](/_astro/zoom_join_app_audio.webp)
  #### ブラウザでの操作
  アプリをインストールしていない場合や，アプリがインストールしてあるのに開かない場合は，下の手順に従って，ブラウザからミーティングに参加することも検討してください．
  ⋯
    - 「ミーティングパスコードを入力」という画面が表示された場合は，パスコードを入力してください．
  - ミーティング中に表示される名前と，使用するオーディオとビデオの設定画面が表示されます．サインインしていない場合は，ミーティングで参加者に表示される自身の名前を入力してください．サインインしている場合は，名前が自動で入力されます．ミーティング中に使用するオーディオと，ミュートとビデオのオン/オフを設定し，「参加」を押してください． ![](/_astro/zoom_join_browser.setup.webp)
+ - 入室した際に「コンピューターでオーディオに接続」という画面が表示された場合，「コンピューターでオーディオに接続」を押してください．押した後，手順2で行ったオーディオ設定でZoomに参加できます． ![](/_astro/zoom_join_browser_audio_setup.webp)
  ### ミーティングIDとパスコードをアプリに直接入力して参加する方法
  - Zoomアプリを起動し，「参加」のボタンを押してください． ![](/_astro/zoom_join_app.webp)
```

## English

```diff
  ## How to Join a Meeting
  There are two main methods to join a Zoom meeting: [by accessing the invitation URL](.#procedure-url) or [by entering the meeting ID and passcode directly into the app](.#procedure-id-passward). This section explains the specific steps for each method.
- Note: While the steps described here are primarily for joining from a PC, they are largely the same for smartphones and other devices. If you do not have the Zoom app installed, please install it. For app installation instructions, refer to “[Zoom App Features and Usage](/en/zoom/misc/app/#install)”.
+ Note: While the steps described here are primarily for joining from a PC, they are largely the same for smartphones and other devices. If you do not have the Zoom app installed, please install it. For app installation instructions, refer to “[How to Use the Zoom App and its Features](./../misc/app/#install)”.
  ### Joining a Meeting by Accessing an Invitation URL
- - Open the invitation URL in your browser. For example, a Zoom meeting URL created with a UTokyo account typically looks like https://u-tokyo-ac-jp.zoom.us/j/9999999999?pwd=xxx.... The 9999999999 part represents the meeting ID, and the xxx... part represents the passcode.
- - A page titled “Launch Meeting” will appear in your browser.
-   - If the Zoom app is installed, a dialog box stating “This site is trying to open Zoom Meetings.” will appear at the top of your browser. Click the “Open” button at the bottom. For instructions after launching the app, see the “[Using the App](.#procedure-app)” section. ![](/_astro/zoom_join_page_open.webp)
-   - If the Zoom app is not installed, the “This site is trying to open Zoom Meetings.” dialog box will not appear. How to join a Zoom meeting without the app is detailed later in the “[Using the Browser](.#procedure-browser)” section.
+ - Open the invitation URL in your browser. For example, a Zoom meeting URL created with a UTokyo account typically looks like https://u-tokyo-ac-jp.zoom.us/j/99999999999?pwd=xxx.... The 99999999999 part represents the meeting ID, and the xxx... part represents the passcode.
+ - A page titled “Join meeting” will appear in your browser.
+   - If the Zoom app is installed, a pop-up may appear asking for permission to launch the app. In that case, please follow the instructions in the pop-up to allow the app to launch. For instructions after launching the app, see the “[Using the App](.#procedure-app)” section.
+   - If the Zoom app is not installed, the pop-up will not appear. How to join a Zoom meeting without the app is detailed later in the “[Using the Browser](.#procedure-browser)” section.
  #### Using the App
  After launching the app, you may be able to join the meeting immediately, or additional steps may be required. This section explains the typical additional steps that may be required when joining, as well as actions you can take after joining.
- - You may see a screen that states “This meeting is for authorized participants only”. If this screen appears, click “Sign in to join” and sign in to Zoom with your UTokyo Account. For sign-in instructions, refer to “[Sign-in Methods for Zoom](/en/zoom/signin/)”. ![](/_astro/zoom_join_signin.webp)
+ - You may see a screen that states “Sign in to join this meeting” or “The Zoom account isn’t authorized for this meeting”. If this screen appears, click “Sign in” or “Switch account” and sign in to Zoom with your UTokyo Account. For sign-in instructions, refer to “[Sign-in Methods for Zoom](./../signin/)”. ![](/_astro/zoom_join_signin_not.webp) ![](/_astro/zoom_join_signin_other.webp)
  - If a screen prompting “Enter meeting passcode” appears, enter the passcode.
  - If prompted to connect to audio after joining the meeting, adjust your audio settings and click “Join with computer audio”. ![](/_astro/zoom_join_app_audio.webp)
  #### Using the Browser
  If you haven’t installed the app, or if the app is installed but won’t open, consider joining the meeting from your browser using the steps below.
- - At the bottom of the screen shown below, click “Join from your browser”. ![](/_astro/zoom_join_browser.webp)
-   - You may see a screen that states “Sign in to join this meeting”. If this screen appears, click “sign in” and sign in to Zoom with your UTokyo Account. For sign-in instructions, refer to “[Sign-in Methods for Zoom](/en/zoom/signin/)”. ![](/_astro/zoom_join_browser_signin.webp)
+ - At the bottom of the screen shown below, click “Join from browser”. ![](/_astro/zoom_join_browser.webp)
+   - You may see a screen that states “Sign in to join this meeting”. If this screen appears, click “Sign in” and sign in to Zoom with your UTokyo Account. For sign-in instructions, refer to “[Sign-in Methods for Zoom](./../signin/)”. ![](/_astro/zoom_join_browser_signin.webp)
    - If a screen prompting “Enter meeting passcode” appears, enter the passcode.
  - You will see a screen to configure your display name, audio, and video for the meeting. If you are not signed in, enter the name that you wish to be displayed to participants in the meeting. If you are signed in, your name will be entered automatically. Set your audio device and toggle the mute and video buttons on/off, then click “Join”. ![](/_astro/zoom_join_browser_setup.webp)
  ⋯
  ### Joining a Meeting by Entering the Meeting ID and Passcode
  - Launch the Zoom app and click the “Join” button. ![](/_astro/zoom_join_app.webp)
- - A “Join Meeting” screen will appear. Enter the meeting ID in the “Meeting ID or personal link name” field. If you are not signed in, enter the name that you want displayed to participants in the meeting. When finished, click “Join”. ![](/_astro/zoom_join_app_setup.webp)
+ - A “Join meeting” screen will appear. Enter the meeting ID in the “Meeting ID or personal link name” field. If you are not signed in, enter the name that you want displayed to participants in the meeting. When finished, click “Join”. ![](/_astro/zoom_join_app_setup.webp)
  - After clicking “Join”, you may enter the meeting immediately, or additional steps may be required. If you cannot enter the meeting directly, complete the following steps based on which screen appears.
-   - You may see a screen that states “Sign in to join this meeting”. If this screen appears, click “Sign in to join” and sign in to Zoom with your UTokyo Account. For sign-in instructions, refer to “[Sign-in Methods for Zoom](/en/zoom/signin/)”. ![](/_astro/zoom_join_app_signin.webp)
+   - You may see a screen that states “The Zoom account isn’t authorized for this meeting”. If this screen appears, click “Switch account” and sign in to Zoom with your UTokyo Account. For sign-in instructions, refer to “[Sign-in Methods for Zoom](./../signin/)”. ![](/_astro/zoom_join_signin_other.webp)
    - If a screen prompting “Enter meeting passcode” appears, enter the passcode.
    - If prompted to connect to audio after joining the meeting, adjust your audio settings and click “Join with computer audio”. ![](/_astro/zoom_join_app_audio.webp)
```

[← 一覧へ](<../README.md>)
