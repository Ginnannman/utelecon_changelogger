# Zoom 画面共有の許可と制限

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更なし | [`/zoom/usage/screen_sharing/security/`](<https://utelecon.adm.u-tokyo.ac.jp/zoom/usage/screen_sharing/security/>) | [`src/pages/zoom/usage/screen_sharing/security/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/b8d968c4567728c2d7eea38f166f9c4fef58af2b/src/pages/zoom/usage/screen_sharing/security/index.md>) |
| English | 変更 | [`/en/zoom/usage/screen_sharing/security/`](<https://utelecon.adm.u-tokyo.ac.jp/en/zoom/usage/screen_sharing/security/>) | [`src/pages/en/zoom/usage/screen_sharing/security/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/b8d968c4567728c2d7eea38f166f9c4fef58af2b/src/pages/en/zoom/usage/screen_sharing/security/index.md>) |

## English

```diff
  説明: Table of Contents: Introduction; Granting screen-sharing capability to all participants (Changing...
  
- [Zoom](/en/zoom/) > [Usages in Meeting](/en/zoom/usage/) > [Screen Sharing](/en/zoom/usage/screen_sharing/) > Granting and limiting
+ [Zoom](/en/zoom/) > [Usage in Zoom Meeting](/en/zoom/usage/) > [Screen Sharing](/en/zoom/usage/screen_sharing/) > Granting and limiting
  # Zoom Granting and limiting screen-sharing capabilities
  ## Introduction
- Zoom’s [screen-sharing](../) feature allows you to display your screen or part of your screen on the other participants’ screens. However, since the default setting only allows the host to share their screens, you need to change the settings to enable participants other than the host to share their screens.
+ Zoom’s [screen-sharing](./../) feature allows you to display your screen or part of your screen on the other participants’ screens. However, since the default setting only allows the host to share their screens, you need to change the settings to enable participants other than the host to share their screens.
  This page explains how a host grants screen-sharing capability either by allowing all the other participants or only certain participants to do so. In addition, the latter half explains the relevant settings about granting access so that all participants are able to use the compulsory switching of the shared screen to all participants.
  ## Granting screen-sharing capability to all participants (Changing the security setting)
  The default setting allows only the host to share screens during meetings, but the host can change the settings to grant screen-sharing capability to all participants so that they may share their screens. This is convenient when there are many participants who need to share their screens.
- - Press “Security” in the control toolbar at the bottom of the screen.
- - Press “Share Screen” ![](/_astro/img1.webp)
- If you repeat step 1 again and see a checkmark next to the “Share Screen”, it means that the changed setting has been validated.
+ - Click the ”^” button next to “Share” in the meeting controls.
+ - Select “Host tools for share”.
+ - Turn on “Share screen” to allow participants to share their screens. ![](/_astro/1_share.webp)
  ### Granting screen-sharing capability to all participants by default
  If you provide screen-sharing access during a meeting, the screen-sharing capability is only valid for the meeting in progress. However, there is a way to extend its validity not only to the meeting in progress but also to all meetings that you host.
- - Sign in to Zoom according to the steps in “[Sign-in Methods for Zoom](../../../signin/#browser)”.
- - Press “Settings” in the menu on the left side of the screen. ![](/_astro/img2.webp)
- - If the settings screen are similar to those in the picture, scroll to “Screen sharing” under “In Meeting (Basic)”. ![](/_astro/img3.webp)
- - Ensure that the switch on the right of “Screen sharing” is blue and turned on, and change the setting in “Who can share?” to “All Participants”. ![](/_astro/img4.webp)
+ - Sign in to Zoom according to the steps in “[Signing in from the UTokyo Zoom Webpage](./../../../signin/#browser)”.
+ - Open the [Zoom web portal](https://zoom.us/profile/setting).
+ - Go to Settings and select the Meeting tab. ![](/_astro/2_setting.webp)
+ - Once you confirm that the settings screen shown in the image is displayed, click “In-Meeting (Basic)”. ![](/_astro/3_setting.webp)
+ - Ensure that the switch on the right of “Allow participants to share documents in meetings” is turned on, and change the setting in “Who can share documents when someone else is sharing” to “All Participants (exclude anonymous users)”.
+ - Click “Save”. ![](/_astro/4_setting.webp)
  ## Granting screen-sharing capability to specific participants (add co-hosts)
  In meetings you host, if you wish to grant screen-sharing capability to specific participants only, adding them as co-hosts is a useful approach. Since the participants being added as co-hosts gain the authority to perform some of the operations that originally only the host is able to perform, they will be able to share their screen. This setting is particularly useful in lectures attended by multiple faculty members or TAs.
- Please refer to “[Host and Co-host Controls in a Zoom Meeting](../../../misc/management_roles/)” on how to add co-hosts and the actions that a co-host can perform.
+ Please refer to “[Host and Co-host Controls in a Zoom Meeting](./../../../misc/management_roles/)” on how to add co-hosts and the actions that a co-host can perform.
  ## (Relevant setting) Granting permission to all participants to forcibly switch shared screens
  During a meeting where multiple participants are allowed to share their screens, the default setting only allows the host to forcibly share a new screen without waiting for the other participant’s screen sharing to end. On the contrary, participants other than the host must wait for the ongoing screen sharing to end before they can start sharing their screen. However, by changing the settings, the hosts can permit the other participants to also be able to forcibly switch the shared screens. This setting can be convenient for smoothly transitioning between presenters during a meeting, but it is important to be aware that it could also enable malicious disruptions. The detailed setting steps are as follows:
- - Press the “^” icon on the right of “Share screen” on the control toolbar at the bottom of the screen.
- - Press “Advanced Sharing Options” ![](/_astro/img5.webp)
+ - Click the ”^” button next to “Share” in the meeting controls.
+ - Select “Host tools for share”.
  - When the dialog for “Advanced Sharing Options” appears, make the following selections to allow all participants to forcibly switch to screen sharing.
-   - “How many participants can share at the same time?”: “One participant can share at a time”
-   - “Who can share?”: “All participants”
-   - “Who can start sharing when someone else is sharing”: “All participants”
-   ![](/_astro/img6.webp)
+   - “Share screen”: On.
+   - “How many participants can share at a time”: One participant can share at a time.
+   - “Who can override sharing”: All participants.
+     ![](/_astro/5_share2.webp)
  ### Granting permission to all participants to forcibly switch the shared screen by default
  You can grant permission to all participants to forcibly switch to screen sharing not only in specific meetings in progress but also in all meetings you host.
- - Sign in to Zoom according to the steps in “[Signing in from the UTokyo Zoom Webpage](../../../signin/#browser)” .
- - Press “Settings” in the menu on the left side of the screen. ![](/_astro/img2.webp)
- - If the settings screen is similar to that in the picture, scroll to “Screen Sharing” under “In Meeting (Basic)”. ![](/_astro/img3.webp)
+ - Sign in to Zoom according to the steps in “[Sign-in Methods for Zoom](./../../../signin/#browser)”.
+ - Open the [Zoom web portal](https://zoom.us/profile/setting).
+ - Go to Settings and select the Meeting tab. ![](/_astro/2_setting.webp)
+ - Once you confirm that the settings screen shown in the image is displayed, click “In-Meeting (Basic)”. ![](/_astro/3_setting.webp)
  - For the options within “Screen sharing”, make the following selections accordingly and press “Save” to allow all participants to be able to forcibly switch the shared screen.
-   - “How many participants can share at the same time?”: “One participant can share at a time”
-   - “Who can share?”: “All participants”
-   - “Who can start sharing when someone else is sharing”: “All participants”
-   ![](/_astro/img9.webp)
+   - “Allow participants to share documents in meetings”: On.
+   - “Who can share documents when someone else is sharing”: “All participants (exclude anonymous users)”
+   - “Who can create and share new documents in meeting”: “All participants (exclude anonymous users)”
+ - Click “Save”. ![](/_astro/6_setting.webp)
```

[← 一覧へ](<../README.md>)
