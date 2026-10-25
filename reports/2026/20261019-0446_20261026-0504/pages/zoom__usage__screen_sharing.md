# 画面共有

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/zoom/usage/screen_sharing/`](<https://utelecon.adm.u-tokyo.ac.jp/zoom/usage/screen_sharing/>) | [`src/pages/zoom/usage/screen_sharing/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/b8d968c4567728c2d7eea38f166f9c4fef58af2b/src/pages/zoom/usage/screen_sharing/index.md>) |
| English | 変更 | [`/en/zoom/usage/screen_sharing/`](<https://utelecon.adm.u-tokyo.ac.jp/en/zoom/usage/screen_sharing/>) | [`src/pages/en/zoom/usage/screen_sharing/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/b8d968c4567728c2d7eea38f166f9c4fef58af2b/src/pages/en/zoom/usage/screen_sharing/index.md>) |

## 日本語

```diff
  - 【詳細】 以下の操作ができます. クリックすると選択画面が表れます.
    ![詳細メニュー](/_astro/6_shosai.webp)
-   - 教員（ホスト）のみ利用可能なメニュー
-     - 【ブレイクアウト ルーム】：ブレイクアウトルームを開始/終了することができます.
-     - 【他のユーザーの注釈を有効にする】：参加者が注釈ツールを用いて共有画面に注釈を付けることを許可できます.
-     - 【注釈者の名前を非表示】：参加者が共有画面に注釈を付けた際，その参加者の名前を画面に表示しない状態にできます.
+   - 特定の権限を持つユーザーのみが利用できるメニュー
+     - 【ブレイクアウト ルーム】（ホスト・共同ホストのみ）：ブレイクアウトルームを開始/終了することができます.
+     - 【他のユーザーの注釈を有効にする】（画面共有者のみ）：参加者が注釈ツールを用いて共有画面に注釈を付けることを許可できます.
+     - 【注釈者の名前を非表示】（画面共有者のみ）：参加者が共有画面に注釈を付けた際，その参加者の名前を画面に表示しない状態にできます.
  ## （教員向け）画面共有に関する設定や留意点
  ここでは，画面共有に関する設定と，授業で画面共有機能を使用する際の留意点について説明します.
```

## English

```diff
  説明: Table of Contents: Start screen sharing; Stop screen sharing; Screen sharing controls; (For teach...
  
- [Zoom](/en/zoom/) > [Usages in Meeting](/en/zoom/usage/) > Screen Sharing
+ [Zoom](/en/zoom/) > [Usage in Zoom Meeting](/en/zoom/usage/) > Screen Sharing
  # Screen Sharing in Zoom
- Zoom’s screen sharing enables you to share your screen with others. You can share the screen you are viewing on your PC or mobile device with all participants. If you open a Word or Power Point file on the shared screen, you can make your presentation showing the document to the participants.
+ Zoom’s screen sharing enables you to share your screen with others. You can share the screen you are viewing on your PC or mobile device with all participants. If you open a Word or PowerPoint file on the shared screen, you can make your presentation showing the document to the participants.
  ## Start screen sharing
- - Click “Share Screen” in the meeting controls.
-   ![Zoom menu "Share Screen"](/_astro/01.webp)
+ - Click “Share” in the meeting controls.
+   ![Zoom menu "Share"](/_astro/1_menu.webp)
  - You will be given various options for sharing.
-   In the “Basic” tab, choose to share your entire desktop or specific application window.
-   ![Select from "Basic" tab](/_astro/02.webp)
-   - [Desktop] Share your full desktop.
-   - [Individual application] Share an individual application you have opened on your computer such as Word, PowerPoint, web browser, etc. It is useful when you only want to share an individual file from a specific location.
- - Check the option at the bottom of the window if necessary. (You can also set it up during screen sharing from the “More” in the meeting controls.) ![Check the option if necessary](/_astro/03.webp)
-   - [Share Sound] If checked, you can share the sound played on your computer during screen sharing.
-   - [Optimize for video clip] If checked, participants can see the optimized form of video clips played in full screen during screen sharing.
- - Select the screen you want to share and click the blue “Share” button at the bottom right corner.
-   ![ The "Share Screen" button starts screen sharing](/_astro/04.webp)
+   In the sharing window, select the content you want to share. ![Sharing window](/_astro/2_share2.webp)
+   - [Screens] Share your full desktop.
+   - [Windows] Share a specific application window, such as Word, PowerPoint, or a web browser. Other windows on your desktop will not be shared.
+   - [Files] Select files available through Zoom or supported file services.
+   - [Other] Share other types of content, such as a browser tab, a portion of your screen, or a video file, depending on the available options.
+ - Check the option at the right of the window if necessary. ![Check the option if necessary](/_astro/3_shareoption.webp)
+   - [Share sound] If checked, you can share the sound played on your computer during screen sharing.
+   - [Optimize for video sharing] If checked, participants can see the optimized form of video clips played in full screen during screen sharing. In some cases, ordinary text and images are distorted, so you should turn this off unless you are sharing your video.
+ - Select the screen you want to share and click the blue “Share” button at the bottom-right corner. Then, sharing starts, and participants can see your shared window.
  ## Stop screen sharing
- To end the screen sharing, click “Stop Share” at the bottom of the screen sharing controls. This will bring you back to your regular Zoom view.
- ![Stop screen sharing](/_astro/05.webp)
+ To end the screen sharing, click “Stop share” at the bottom of the screen sharing controls. This will bring you back to your regular Zoom view.
+ ![Stop screen sharing](/_astro/4_menu.webp)
  ## Screen sharing controls
  Screen sharing controls are displayed at either the top or bottom of the screen during screen sharing. The following explains how the controls work.
- ![Screen sharing controls](/_astro/06.webp)
+ ![Screen sharing controls](/_astro/5_menu.webp)
  - [Annotate] You can annotate the shared screen with the set of annotation tools provided. Tools include a text tool to type text onto the screen, a hand-drawing tool, a stamp tool, and a spotlight tool for highlighting the location of your cursor.
  - [More] Click to display advanced options.
-   ![Advanced Options](/_astro/07.webp)
-   - Advanced options available only for teachers (hosts).
-     - Disable Annotation for Others: You can prevent participants from annotating the shared screen using the annotation tools.
-     - Show Names of Annotators: Participants’ names appear next to their annotations on the shared screen.
-     - Start breakout rooms.
-     - End Meeting.
+   ![Advanced Options](/_astro/6_more.webp)
+   - Advanced options
+     - [Breakout rooms] (hosts and co-hosts only): You can start and end breakout sessions.
+     - [Enable annotation for others](screen sharers only): You can allow participants to annotate the shared screen using the annotation tools.
+     - [Hide names of annotators](screen sharers only): When a participant adds annotations to the shared screen, you can set it so that the participant’s name does not appear on the screen.
  ## (For teachers) Settings and notes for screen sharing
  Settings and notes for screen sharing are summarized as follows.
  ⋯
  When you share your desktop, your personal information may be revealed unintentionally. To prevent such a situation, you can share the screen by window.
  ### Displaying meeting controls during screen sharing
- The meeting controls may be hidden at the top or bottom of the window during screen sharing. To display the controls, hover the mouse cursor over the green “You are screen sharing” notification, which is next to “Stop Share” of the in-meeting menu .
+ The meeting controls may be hidden at the top or bottom of the window during screen sharing. Move your cursor to the green bar displayed to the left of “Stop share” to display it again.
  ### Stop student’s full screen display
- During screen sharing, the student’s PC screen is basically full screen, and the student cannot move to other windows. If the student double-clicks on the Zoom screen, the screen is no longer full-screen, which is easier to move to other windows.
+ During screen sharing, the student’s PC screen is basically full screen, and the student cannot move to other windows. If the student double-clicks on the Zoom screen or press Esc, the screen is no longer full-screen, which is easier to move to other windows.
  If you want the students to use other windows other than Zoom while the teacher’s screen sharing, it is better to instruct them to double-click the Zoom screen.
  ### Screen sharing controls
  #### Setting up who can annotate
- You can prevent participants from annotating by selecting “Disable Annotation for Others” from “More” of the meeting controls.
+ You can allow participants to annotate by selecting “Enable annotation for others” from “More” of the meeting controls.
  #### Displaying names of annotators
- By selecting “Show/Hide Names of Annotators” from “More” of the meeting controls, participants’ names will appear/disappear next to their annotations on the shared screen.
- ![Show names of annotators](/_astro/08.webp)
+ By selecting “Show/Hide names of annotators” from “More” of the meeting controls, participants’ names will appear/disappear next to their annotations on the shared screen.
+ ![Show names of annotators](/_astro/7_more.webp)
  ### Configuring screen sharing settings
- - Hit the small green ^ button in the “Share Screen” button and select “Advanced Sharing Options” from the drop-down menu.
-   ![Advanced Sharing Options](/_astro/09.webp)
- - “Advanced Sharing Options” window will open.
-   ![Advanced Sharing Options](/_astro/10.webp)
+ - Hit the small green ”^” button in the “Share” button and select “Host tools for share” from the drop-down menu.
+   ![Host tools for share](/_astro/8_hosttool.webp)
+ - “Share” window will open.
+   ![Share setting window](/_astro/5_share2.webp)
+ #### Allowing participants to share their screens
+ Use the “Share screen” toggle to allow or prevent participants from sharing their screens.
  #### Settings for sharing multiple screens simultaneously.
- - In “Advanced Sharing Options” under “How many participants can share at the same time?”, you can choose between “One participant can share at a time” and “Multiple participants can share simultaneously (dual monitors recommended).)”.
-   Hitting the small green ^ button in the “Share Screen” button will also lead you to the setting.
- - If “Multiple participants can share simultaneously (dual monitors recommended)” is selected, “Who can share?” and “Who can start sharing when someone else is sharing?” will be disabled. It suggests that the setting change is applied.
+ - Under “How many participants can share at a time?”, you can choose between “One participant can share at a time” and “Multiple participants can share simultaneously”.
  - When multiple screens are sharing simultaneously, participants using dual monitors will see the two most recently shared screens on each monitor.
    This feature is useful when you want to compare multiple documents at the same time.
-   You can set it as default by checking “Use Dual Monitors” in “Settings” →“General” of the Zoom application. ![Using Dual Monitors](/_astro/11.webp)
+   You can set it as default by checking “Dual window” in “Settings” →“Meetings & webinars” of the Zoom application. ![Using Dual Monitors](/_astro/10_dualwindow.webp)
  - Participants using a single monitor will see the most recently shared screen.
-   Participants can select “View Options” to change the screen they are viewing.
+   Participants can select “View options” to change the screen they are viewing.
  ※Note
- If you select “Multiple participants can share simultaneously (dual monitors recommended)”, the option “Optimize screen sharing for video clips” will not be available when sharing the screen.
+ If you select “Multiple participants can share simultaneously”, the option “Optimize for video sharing” which is available on the right side of the “Share” window, will not be available when sharing the screen.
  Also, when multiple participants are sharing their screens at the same time, the person sharing the screen can only see his own screen.
- #### Setting up who can share screen
- If “One participant can share at a time” is selected, you can choose between “Only host” and “All participants” under “Who can share?” in “Advanced Sharing Options”.
- For “Host Only”, non-teaching participants are prohibited from screen sharing.
- You can also go to “Security” in the meeting controls and check/uncheck the “(Allow participants to Share screen” checkbox from the drop-down menu. ![Setting up who can share screen](/_astro/12.webp)
  #### Starting a new share when someone is sharing.
- If the setting is “Only one participant can share at a time”, you can select “Host only” or “All participants” under “Who can start sharing when someone else is sharing?” in “Advanced Sharing Options”.
+ If the setting is “One participant can share at a time”, you can select “Host only” or “All participants” under “Who can override sharing”.
  If you choose “All participants”, everyone can start a new share when someone is sharing.
  ### Screen Annotation
- Click “Annotate” from the screen sharing controls to annotate the shared screen with a set of annotation tools. ![Screen sharing menu "Add a comment"](/_astro/13.webp)
+ You can annotate the shared screen using the horizontal or vertical annotation toolbar that appears when you click “Annotate” in the screen sharing controls. ![Screen sharing menu "Add a comment"](/_astro/11_annotate.webp)
  - [Mouse] Deactivate annotation tools and switch to your mouse pointer.
  - [Select] Select, move, or resize your annotations.
- - [Text] Insert text. Text format can be changed from “Format”. ![“Annotate” Text](/_astro/14.webp)
- - [Draw] Insert lines, arrows, and shapes. ![“Annotate” Draw](/_astro/16.webp)
+ - [Text] Insert text. Text format can be changed from “Format”. ![“Annotate” Text](/_astro/12_text.webp)
+ - [Draw] Insert lines, arrows, and shapes. ![“Annotate” Draw](/_astro/13_draw.webp) ![“Annotate” Draw](/_astro/14_draw.webp)
  - [Stamp] Insert predefined icons like a check mark or star.
- !["Annotate" Stamp ](/_astro/18.webp)
- - [Spotlight] Turn your cursor into a spotlight or arrow. Display your mouse pointer to all participants when your mouse is within the area being shared. Use this to point out parts of the screen to other participants. !["Annotate" spotlight](/_astro/20.webp)
+ !["Annotate" Stamp ](/_astro/15_stamp.webp) !["Annotate" Stamp ](/_astro/16_stamp.webp)
+ - [Spotlight/Arrow] Turn your cursor into a spotlight or arrow. Display your mouse pointer to all participants when your mouse is within the area being shared. Use this to point out parts of the screen to other participants. !["Annotate" spotlight](/_astro/17_spotlight.webp)
  - [Eraser] Click and drag to erase parts of your annotation.
- - [Format] Change the formatting options of annotations tools like color, line width, and font. !["Annotate" Format](/_astro/21.webp)
+ - [Format] Change the formatting options of annotations tools like color, line width, and font. !["Annotate" Format](/_astro/18_color.webp)
  - [Undo] Undo your latest annotation.
  - [Redo] Redo your latest annotation that you undid.
  - [Clear] Delete all annotations.
-   !["Annotate" Clear](/_astro/22.webp)
-   - Clear All Drawings: Clear all annotations on the shared screen.
-   - Clear My Drawings: Clear all your annotations.
-   - Clear Viewers’ Drawings: (Teachers only) Clear all participants’ annotations.
- - [Save] Save all annotations on the screen as a screenshot. The screenshot is saved to the local recording location.
+   !["Annotate" Clear](/_astro/19_erase.webp)
+   - Clear all drawings: Clear all annotations on the shared screen.
+   - Clear my drawings: Clear all your annotations.
+   - Clear viewer’s drawings: (Teachers only) Clear all participants’ annotations.
+ - [Save] Save all annotations on the screen as a screenshot. You can choose the file type as PDF or PNG, and the screenshot is saved to the local recording location.
  ## Participants’ controls
  Participants can annotate the shared screen and change the screen settings during sharing on their own devices.
- Click the ”∨” mark next to “View Options” at the top of the sharing screen, to the right of the green “You are viewing xxxx’s screen” field, and open the pulldown.
- ![Participants’ controls](/_astro/23.webp)
+ Click the ”…” at the top of the sharing screen, to the right of “xxxx’s screen” field, and open the pulldown.
+ ![Participants’ controls](/_astro/22_viewer.webp)
  ### Annotation on a shared screen
- Click “Annotate” from the screen sharing controls to annotate the shared screen with a set of annotation tools. Details are explained in “Screen Annotation” above.
+ The annotation tools appear when a viewer clicks the circular pen icon in the lower-left corner of the shared screen. Details are explained in [Screen Annotation](#Screen-Annotation) above.
  However, if “Disable Annotation for Others” is enabled, no annotations can be added.
  ### Screen settings during sharing
- You can choose the window size when screen sharing from the list of “Fullscreen mode”, “Maximize window”, and “Maintain current size”.
- If “Side-by-side Mode” is selected, the shared screen will appear on the left while the speaker on the right. You can adjust the relative space devoted to the shared screen by dragging the vertical gray bar. To set it as default, go to “Settings”,“Share Screen”, and select “Side-by-side Mode” in the Zoom application.
- ![Screen settings during sharing](/_astro/24.webp)
+ Click the “^” button next to the “Share” menu in Zoom. In the selection screen that appears, select “Share settings” to display the “Share screen” tab. Here, you can configure the window size for the shared screen, settings for your own window when sharing, and the behavior of the share button.
+ If “See shared content in side-by-side mode” is selected, the shared screen will appear on the left while the speaker appears on the right. You can adjust the relative space devoted to the shared screen by dragging the vertical gray bar. To set it as the default, go to “Settings”, “Share screen”, and select “See shared content in side-by-side mode” in the Zoom application.
+ ![Screen settings during sharing](/_astro/20_sharesetting.webp) ![Screen settings during sharing](/_astro/21_shareformat.webp)
```

[← 一覧へ](<../README.md>)
