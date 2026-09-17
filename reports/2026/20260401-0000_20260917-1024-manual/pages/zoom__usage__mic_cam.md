# Zoomでのオーディオとビデオの使い方

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/zoom/usage/mic_cam/`](<https://utelecon.adm.u-tokyo.ac.jp/zoom/usage/mic_cam/>) | [`src/pages/zoom/usage/mic_cam/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/zoom/usage/mic_cam/index.mdx>) |
| English | 変更 | [`/en/zoom/usage/mic_cam/`](<https://utelecon.adm.u-tokyo.ac.jp/en/zoom/usage/mic_cam/>) | [`src/pages/en/zoom/usage/mic_cam/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/zoom/usage/mic_cam/index.mdx>) |

## 日本語

```diff
    - Windowsの場合：「設定」→「プライバシー」または「プライバシーとセキュリティ」→「カメラ」に移動して， 「このデバイスのカメラへのアクセスを許可する」および「デスクトップ アプリがカメラにアクセスできるようにする」をオンにしてください．
    - macOSの場合：「システム設定」→「プライバシーとセキュリティ」→「カメラ」に移動して，「Zoom」をオンにしてください．
-   - iOSの場合：「設定」→「プライバシーとセキュリティ」→「マイク」に移動して，「Zoom」をオンにしてください．
+   - iOSの場合：「設定」→「プライバシーとセキュリティ」→「カメラ」に移動して，「Zoom」をオンにしてください．
    - Android（Android 13が搭載されたPixel 6aで確認）の場合： 「設定」→「アプリ」→「Zoom」に移動し，「権限」から「カメラ」に移動し，カメラの権限を許可してください．
  - 同じカメラを使用する別のアプリケーションが起動している：同じカメラを使用するアプリケーションが複数起動している場合，ビデオが正常に表示されない可能性があります．同じカメラを使用するアプリケーションは終了してください．
```

## English

```diff
  - Muting other participants：To mute a specific participant, click on the icon labeled “Participants” on your PC, select the name of the participant you want to mute from the list of participants that appears, and click “Mute”.
    - For smartphones, press the name of the participant you want to mute, then press “Mute” in the display that appears.
- - Unmuting other participants：To unmute a specific participant, click the “Participants” tab on your PC, place the cursor over the name of the participant you want to unmute, and click “Ask to unmute”. When you ask to a participant to unmute, a screen will appear on the participant’s screen asking them to choose whether to unmute or remain muted.
+ - Unmuting other participants：To unmute a specific participant, click the “Participants” tab on your PC, place the cursor over the name of the participant you want to unmute, and click “Ask to unmute”. When you ask a participant to unmute, a screen will appear on the participant’s screen asking them to choose whether to unmute or remain muted.
    - For smartphones, tap the name of the participant you want to unmute, then tap “Ask to unmute” in the display that appears.
  You can also use the host tool to set whether or not to allow participants to use the video function or to be able to unmute themselves. The host tools icon is displayed at the bottom of the screen on a PC, and on a smartphone, you can access it by tapping “More” ➝ “Host tools” at the bottom of the screen.
  ⋯
    - For Windows：Go to Settings → Privacy or Privacy & Security → Camera, then turn on “Allow this device to access the camera” and “Allow desktop apps to access the camera.”
    - For macOS：Go to System Settings → Privacy & Security → Camera and turn on Zoom.
-   - For iOS：Go to Settings → Privacy and Security → Microphone, then turn on Zoom.
+   - For iOS：Go to Settings → Privacy and Security → Camera, then turn on Zoom.
    - For Android (confirmed on Pixel 6a running Android 13)：Go to Settings → Apps → Zoom, then navigate to Permissions → Camera and grant camera permission.
  - Multiple applications using the same camera are running simultaneously, causing interference：If you have multiple applications using the same camera running at the same time, they may interfere with each other. Please close any other applications using the same camera.
```

[← 一覧へ](<../README.md>)
