# クラウドメールアカウントでのYouTubeライブ配信方法

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/google/youtube/live/`](<https://utelecon.adm.u-tokyo.ac.jp/google/youtube/live/>) | [`src/pages/google/youtube/live/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/41648565847ebc9bd14160a8b1090829b1803beb/src/pages/google/youtube/live/index.mdx>) |
| English | 変更 | [`/en/google/youtube/live/`](<https://utelecon.adm.u-tokyo.ac.jp/en/google/youtube/live/>) | [`src/pages/en/google/youtube/live/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/41648565847ebc9bd14160a8b1090829b1803beb/src/pages/en/google/youtube/live/index.mdx>) |

## 日本語

```diff
  [ECCSクラウドメール](/google/) > [YouTube](/google/youtube/) > YouTube ライブ
  # クラウドメールアカウントでのYouTubeライブ配信方法
- ［お断り］このページの内容の一部は，相当古い時点の情報に基づいています．最新の状態とは異なる可能性があるため，注意してください．
  2020年3月10日 公開
  このページでは，ECCSクラウドメールアカウントでYouTubeのライブ配信機能を利用する方法，特にライブ配信機能の有効化と配信について紹介します．学内の各種行事等でライブ配信が必要な場合にご活用ください．
```

## English

```diff
- タイトル: Broadcast live on YouTube using your ECCS Cloud Email account | utelecon
- 説明: Table of Contents: ...
+ タイトル: Live Streaming on YouTube Using your ECCS Cloud Email Account | utelecon
+ 説明: Table of Contents: Important Notes; Live Stream Setup; References...
  
  [ECCS Cloud Email](/en/google/) > YouTube Live
- # Broadcast live on YouTube using your ECCS Cloud Email account
- Please wait for a while until this page is published. In the meantime, the Japanese version of this page might already be available. To switch languages, click the “日本語” button at the top right of the page (for PC users) or tap the “Menu” button at the top left, then select the “日本語” button at the top center (for smartphone users).
+ # Live Streaming on YouTube Using your ECCS Cloud Email Account
+ Published September 23, 2026
+ This page explains how to use YouTube Live with an ECCS Cloud Email account, focusing on how to enable live streaming and start a live stream. Please refer to this guide when you need to live stream university events.
+ If you want to stream a Zoom meeting or webinar on YouTube, please refer to “[Stream Zoom Meetings or Webinars on YouTube](./streaming/zoom/)”. For instructions on configuring visibility settings (such as restricting access exclusively to the University of Tokyo members), refer to “[Set YouTube Video Visibility (in Japanese)](/google/youtube/sharing/)”.
+ When live streaming, pay close attention to whether the visibility is set to “Public” or “Unlisted”. If set to “Public”, anyone can view the stream on YouTube. If set to “Unlisted”, only people with the unique URL generated for that specific stream will be able to view it. If you do not want the stream to be publicly available, please use “Unlisted”.
+ ## Important Notes
+ - The URL for an unlisted live stream changes every time you stream. Please share the link with the intended viewers once the stream has started.
+ - To prepare for unforeseen circumstances, we recommend enabling live streaming on multiple accounts in advance.
+ - Make sure you select the correct visibility setting, “Public” or “Unlisted,”, when starting your live stream.
+ - We recommend conducting a test stream one to two weeks prior to the actual event, using the same location, equipment, and environment as the actual event.
+ - Viewers may experience playback issues depending on their individual network connection or device. Additionally, if an outage occurs within YouTube’s streaming system, the service may become unavailable.
+ ## Live Stream Setup
+ The environment used to test the procedures on this page is as follows:
+ - Operating system：macOS 26.6.2 (25G83)
+ - Web browser：Google Chrome 153.0.8010.37 (Official Build) (arm64)
+ ### How to Enable Live Streaming
+ It may take approximately 24 hours after creating a YouTube channel before live streaming becomes available, so please allow sufficient time.
+ You must create a YouTube channel using your ECCS Cloud Email account in advance. For instructions on creating a channel, see “[Create a Channel (in Japanese)](/google/youtube/#create-channel)”. Once the channel has been created, enable live streaming by following the steps below:
+ - Open the YouTube home page and click the ”+ Create” button in the upper right corner of the screen. ![](/_astro/create-channel.drawio.webp)
+ - Select “Go live”. ![](/_astro/create-live-start.drawio.webp)
+ - When the “Request access to streaming” screen appears, click the “Request” button. ![](/_astro/request-live-streaming.webp)
+ - [Vertify your YouTube account](https://support.google.com/youtube/answer/171664).
+   - Click the “Verify” button. ![](/_astro/verify-account-0.drawio.webp)
+   - Check the icon on the right side of the screen to confirm that you are signed into the account you want to use for live streaming.
+   - Select a verification method. You can choose either an automated voice message or a text message (SMS). ![](/_astro/verify-account-1.drawio.webp)
+   - Make sure the correct country for your phone number is selected, then enter your phone number. ![](/_astro/verify-account-2.drawio.webp)
+   - Enter the 6-digit code you received. ![](/_astro/verify-account-3.drawio.webp)
+   - Once your account has been successfully verified, return to the original page. ![](/_astro/verify-account-4.drawio.webp)
+ - Wait approximately 24 hours for live streaming to be activated. ![](/_astro/live-wait.webp)
+ ### Starting a Live Stream
+ Proceed with the following steps after live streaming has been enabled.
+ - Open the YouTube home page, click the ”+ Create” button in the upper right corner of the screen, and select “Go live”. ![](/_astro/start-live.drawio.webp)
+ - Click “Webcam”. ![](/_astro/live-studio.drawio.webp)
+ - Enter the live stream details.
+   - Stream Title ![](/_astro/live-name.drawio.webp)
+   - Audience and Age Restriction
+     - Set audience and age restrictions as needed. For “Is this video made for kids?”, you should normally select “No, it’s not made for kids”. ![](/_astro/live-age.drawio.webp)
+ - Select whether to enable or disable live chat.
+   - Under “Customization”, you can enable or disable live chat.
+   - Live chat is enabled by default. If needed, clear the checkbox to disable it. ![](/_astro/live-chat.drawio.webp)
+ - Select the visibility setting.
+   - Select the appropriate setting from “Public”, “Unlisted”, or “Private”.
+   - Please note that setting it to “Public” makes the stream visible to anyone on YouTube.
+   - Setting it to “Unlisted” allows anyone with the live stream URL to watch it.
+   * The following instructions assume that “Unlisted” is selected. ![](/_astro/live-public.drawio.webp)
+ - Set up your camera and microphone, then check the stream preview.
+   - Select your camera under “Video” and your microphone under “Audio”.
+     - You can choose USB cameras and microphones in addition to built-in ones.
+   - Check the camera preview, camera and microphone settings, and visibility setting (“Privacy”), then click “Go Live”. ![](/_astro/live-start.drawio.webp)
+ - The live stream will begin.
+   - The live video feed will be displayed. ![](/_astro/live.drawio.webp)
+   - Click the arrow button in the upper right corner of the screen to display the sharing URL for the unlisted stream. ![](/_astro/live-share.drawio.webp)
+     - Copy the URL and share it with intended viewers by email or another method. ![](/_astro/live-share-url.drawio.webp)
+ - To end the stream, click “End Stream” in the upper right corner of the screen. ![](/_astro/live-end.drawio.webp)
+ ## References
+ When live streaming, please refer to the following official YouTube Help resources as needed.
+ - Get started with live streaming：[https://support.google.com/youtube/answer/2474026](https://support.google.com/youtube/answer/2474026)
+ - Create a YouTube live stream with an encoder：[https://support.google.com/youtube/answer/9227510](https://support.google.com/youtube/answer/9227510)
```

[← 一覧へ](<../README.md>)
