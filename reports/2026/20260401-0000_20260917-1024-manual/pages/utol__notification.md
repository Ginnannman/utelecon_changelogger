# UTOLからの通知を設定する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utol/notification/`](<https://utelecon.adm.u-tokyo.ac.jp/utol/notification/>) | [`src/pages/utol/notification/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utol/notification/index.mdx>) |
| English | 変更 | [`/en/utol/notification/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utol/notification/>) | [`src/pages/en/utol/notification/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utol/notification/index.mdx>) |

## 日本語

```diff
      お知らせ内容: お知らせ内容です。
  ### 送信先の比較
- 通知の送信先は複数選択でき，それぞれの通信先ごとに異なった設定が可能です．
+ 通知の送信先は複数選択でき，それぞれの送信先ごとに異なった設定が可能です．
  - 例：「メールには1日1回まとめて通知・Slackには即時通知」
  以下に，簡単な送信先の比較表を示します．
  ⋯
  - 一覧表示が「UTOL 通知」のみに絞り込まれるので，「詳細を表示」を押してください． ![](/_astro/slack-ws-search-result.webp)
  - ワークスペースの説明を確認し，「参加してSlackを起動する」を押してください． ![](/_astro/slack-ws-detail.webp)
- - 参加が完了すると，ワークスペースの画面が表示されます．「UTokyo Slack」タイトルの直下にあるワークスペース一覧を開き，「UTOL 通知」が含まれていることを確認してください． ![ワークスペース一覧](/_astro/slack-ws-list.webp)
+ - 参加が完了すると，ワークスペースの画面が表示されます．画面左上，ワークスペース名が表示されているプルダウンリストを開き，図のように展開されるリストの中に「UTOL 通知」が含まれていることを確認してください． ![ワークスペース一覧](/_astro/slack-ws-list.webp)
  #### 手順2：UTOL上でSlack通知を有効化する
  - UTOLを開き，画面上端のメニューから「Settings」の画面を開いてください．
```

## English

```diff
  タイトル: Settings in UTOL to receive notifications | utelecon
- 説明: Table of Contents: ...
+ 説明: Table of Contents: Overview; Enabling notification settings (initial setting); Set notification s...
  
  [UTOL](/en/utol/) > Notifications
  # Settings in UTOL to receive notifications
- This page is not translated yet.
- Until the translation is completed, please refer to the reference manuals in English. They are available in PDF files from [the download page](https://utol.ecc.u-tokyo.ac.jp/common/support/manual) (you need to log in with your UTokyo Account).
- If you can only see the manuals in Japanese, please change the display language from [the UTOL’s settings page](https://utol.ecc.u-tokyo.ac.jp/common/settings), and access the download page again.
+ ## Overview
+ UTOL has a feature that allows you to send (forward) notifications to external services such as email, LINE, UTokyo Slack, etc. By setting up notifications to services you use regularly, you will be able to stay informed immediately when assignments or announcements are added.
+ There are two types of notifications that can be sent: “Updates information” and “Information/Message Notifications”.
+ ### Updates information
+ - This notifies you when there are updates to courses you are registered for.
+ - Only the title of the update will be sent. You can view details by accessing UTOL through the link attached to the notification.
+ - Notifications can be received via Email, LINE, and Slack.
+ - The following are considered as “Updates”.
+   - Enrolled students: when instructors add assignments, information, and messages.
+   - Instructors: when enrolled students submit assignments.
+ - Notifications include the following information:
+   - Day and period
+   - Course title
+   - Course instructor name
+   - Update Contents
+   - URL of the updates (Slack only)
+ A sample text of an update notification is shown below
+     Day,Period: Mon 1
+     Course: (Course Title)
+     Faculty: (Faculty Name)
+     Updated Contents:
+     The notifications (Title of Notification) was added.(2025/10/22 20:01)
+     https://utol.ecc.u-tokyo.ac.jp/lms/course?idnumber=XXXX
+ ### Information/Message Notifications
+ - This notifies you of Information/Message contents sent from courses you are registered for.
+ - These notifications can be received via email and LINE (Slack is not supported).
+ - Notices include the following information.
+   - URL of the course
+   - Day and period
+   - Course title
+   - Sender
+   - Message content
+ A sample text of an information notice and message is shown below
+     https://utol.ecc.u-tokyo.ac.jp/lms/course?idnumber=XXXX
+     Course Name：(Course Name)
+     Sender Name: (Sender Name)
+     Description ：It is description.
+     Attachment：No
+ ### Comparison of notification destinations
+ You can select multiple destinations for notifications and configure different settings for each service.
+ - Example: “Redirecting all information once a day for email. Instant transfer for Slack.”
+ A brief comparison of the available destinations is shown below.
+ | Destination | Updates information | Information/Message Notifications | Details of destination |
+ | Email | ◯ | ◯ | Any email addresses |
+ | LINE | △ (※1) | ◯ | Individual chat room with “東京大学UTOL” (LINE official account) |
+ | UTokyo Slack | ◯ | × | Direct messages with UTOL通知” (Slack App) |
+ ※1. When forwarding to LINE, the “Instant transfer” of update information for assignments, course materials, quizzes, surveys, and forums are not available. Only the “Redirecting all information once a day” option is available (you can also select “Do not forward”).
+ ## Enabling notification settings (initial setting)
+ This section explains the initial setup procedures to enable notifications to be sent for each destination.
+ ### To receive via email
+ - Open the “Settings” screen from the menu at the top of the screen.
+   ![](/_astro/personal-setting-open-desktop.webp)![](/_astro/personal-setting-open-mobile.webp)
+ - In the “Email” section, select an email address or enter the email address where you would like to receive notifications.
+   - “Linked e-mail address”
+     - For students: The email address registered as “E-MAIL 1” in UTAS will be displayed.
+       - You can confirm this email address in UTAS by accessing “Student Info” > “View University Registry Information” > “Student Personal Information” > “Current Address Information”.
+     - For faculty: The email address registered in the Personnel Information System will be displayed.
+   - “Manually registered e-mail address”
+     - You can register any email address manually.
+ - Scroll down to the bottom of the screen, then click the “Proceed to the Confirmation Screen/Confirm” button. ![](/_astro/notification-range-all.webp)
+ - When the “Confirm Personal Setting” screen opens, review the settings and click the “Submit/Register” button. ![](/_astro/personal-setting-confirm.webp)
+ - The “Complete personal setting” screen will appear. If you received a message stating “Settings have been completed. A confirmation Email has been sent to the email address you set. Please check whether or not the e-mail addresses you set is correct if the emails are not received even after a while.”, your setup was successful.
+ - Please make sure that the confirmation email has been received by the email address you specified.
+   If you do not receive the confirmation email
+   - Please check that the email address you entered is correct.
+   - Please check your spam mail folder as the email may have been filtered as spam.
+     - In addition, if you are using an email filter, please also check that the sender’s email address of no-reply@utol-mail.ecc.u-tokyo.ac.jp is not being blocked.
+ - Follow the steps under “[Set notification scope](#notification-range)” to set the notification destinations and content.
+   - If you do not complete this setting, no notification will be sent by default.
+ ### To receive via LINE
+ Please note that when you use LINE notification, various information related to the notification may be collected and used by LY Corporation. For more details, please refer to [Precautions for Using the LINE Notification Function in UTOL](./line-caution/)
+ .
+ If you set LINE as a notification destination, the notification will be sent to a chat room linked with the “東京大学UTOL” account.
+ To complete the following steps, a mobile device with the LINE App installed is required.
+ - Open the “Settings” screen from the menu at the top of the screen.
+   ![](/_astro/personal-setting-open-desktop.webp)![](/_astro/personal-setting-open-mobile.webp)
+ - In the “LINE” section, either scan the QR code using the LINE App or tap the “Add Friend” button.
+   - If you tap the “Add Friend” button on the mobile device with the LINE App installed, the LINE App will open automatically.
+   - If you are using a PC or other devices, please scan the QR code on the screen with the LINE App on your device.
+     ![](/_astro/line-add-friend-button.webp)![](/_astro/line-add-friend-qr.webp)
+ - “Add Friend” screen will open. Tap the “Add as friend” button. ![](/_astro/line-add-friend.webp)
+ - Once the friend has been added, a “Chat” button will appear. Tap the button. ![](/_astro/line-talk-button.webp)
+ - A message from “東京大学UTOL” will be sent. When you open the link in the message, log in to UTOL as instructed. ![](/_astro/line-link.drawio.webp)
+   If you see the message “Unable to link with LINE”
+   Tap the message that says “If your link has expired, please click here to request a new one” to obtain a new link.
+   ![](/_astro/line-reissue.webp)
+ - Please make sure the message “LINE is now linked with 東京大学UTOL.” has been displayed. ![](/_astro/line-integration-success.webp)
+ - Follow the steps under “[Set notification scope](#notification-range)” to set the notification destinations and content.
+   - If you do not complete this setting, no notification will be sent by default.
+ ### To receive via UTokyo Slack
+ - You must meet the requirements for using UTokyo Slack in advance.
+   - For more details, please refer to the [UTokyo Slack page](/en/slack/).
+ - If you use Slack, you will not be able to receive the contents of the “Notification” and “Message” (Information/Message Notification).
+ - Notification will be sent via direct message from “UTOL通知” (Slack App). You can view these direct messages by opening the “UTOL通知” in the Apps menu. ![](/_astro/slack-app-list.webp)
+ #### Step1: Join the “UTOL通知” workspace
+ - Open the “Workspaces at UTokyo Slack” and follow Procedures 1 to 5 in [Joining an open workspace in UTokyo Slack](/en/slack/join/#procedure)”.
+ - Type “UTOL” or “UTOL通知” (Note: include a half-width space) in the search box at the top, and select “UTOL 通知” from the search results. ![](/_astro/slack-ws-search.webp)
+ - Once the list is narrowed down to “UTOL 通知”, then click the “View details” ![](/_astro/slack-ws-search-result.webp)
+ - Review the workspace description, and click “Join and launch Slack”. ![](/_astro/slack-ws-detail.webp)
+ - After joining Slack, the workspace screen will appear. Open the drop-down list that shows the workspace name in the top left and confirm that “UTOL通知” appears in the list of workspaces. ![](/_astro/slack-ws-list.webp)
+ #### Step2: Enable Slack notification in UTOL
+ - Open UTOL and then click to open the “Settings” in the top menu.
+   ![](/_astro/personal-setting-open-desktop.webp)![](/_astro/personal-setting-open-mobile.webp)
+ - Click the “Connect UTokyo Slack” (in blue) button in the “UTokyo Slack” section. ![](/_astro/slack-start.webp)
+ - Confirm that it has changed to “Disconnect UTokyo Slack” (in blue). ![](/_astro/slack-stop.webp)
+ - Follow the steps under “[Set notification scope](#notification-range)” to set the notification destinations and content.
+   - If you do not complete this setting, no notification will be sent by default.
+ ## Set notification scope
+ This section explains how to configure the notification scope (specifying which destination to send to, what type of notifications to send, and how frequently to send them) for each destination.
+ Settings can be configured separately for [Updates information](#update-notification-range) (title only), and [Information/Message Notifications](#message-notification-range) (information and message content). However, setup options available differ between the two.
+ - Updates information: destination, type, and frequency
+ - Information/Message Notifications: destination only
+ ### Update information
+ This section explains how to configure the destinations, type, and frequency of the update notifications. The available settings are as follows.
+ - Destination
+   - You can configure settings individually for “Email”, “LINE”, and “UTokyo Slack”.
+ - Type
+   - You can select from seven types of notifications: “Message”, “Information”, “Report”, “Material”, “Test”, “Survey”, and “Forum”.
+ - Frequency
+   - You can choose one from the following options: “Do not forward”, “Instant transfer”, and “Redirecting all information once a day”.
+     - However, if LINE is selected as the destination, “Instant transfer” is not available for sending update information related to “Report”, “Material”, “Test”, “Survey”, and “Forum”.
+ In addition to [the overall UTOL common updates notification settings](#update-notification-range-all), you can also [configure updates notification individually for each course](#update-notification-range-per-course). This is useful if you “prefer to receive updates notification via Slack for specific important courses only”.
+ The following explains both [the common (overall UTOL) settings](#update-notification-range-all) and [per-course notification settings](#update-notification-range-per-course).
+ #### Overall UTOL settings
+ - Open the “Settings” screen from the menu at the top of the screen.
+   ![](/_astro/personal-setting-open-desktop.webp)![](/_astro/personal-setting-open-mobile.webp)
+ - Move to the “Updates information” > “Update information email/UTokyo Slack/LINE forwarding settings” ![](/_astro/notification-range-all.webp)
+   - “Updates information”
+     - Select whether or not to send updates notification.
+   - “Updates information Email/LINE/Slack Forwarding settings”
+     - Select the frequency for each destination and type of updates notification from the dropdown list.
+ - After making your selection, click “Proceed to the Confirmation Screen/Confirm”.
+ - When the “Personal Settings” confirmation screen appears, review your settings, and click “Submit/Register”. ![](/_astro/personal-setting-confirm.webp)
+ - The “Personal Settings Completed” screen will appear. If you have received a message “Settings have been completed” or “Settings have been completed. Confirmation Email is sent to Email address you set. Please check whether e-mail addresses you set is correct if mails are not sent even after a while.”, your setup was successful.
+ #### Settings for each course
+ Warning: If you modify [the overall UTOL settings](#update-notification-range-all) after configuring individual course settings, the change will overwrite your course-specific preferences for the affected items.
+ - Open the “Course Top” screen for the desired course.
+ - Click the relevant link under the “Updates information email/LINE/UTokyo Slack forwarding settings” (in blue) at the top right of the screen. ![](/_astro/notification-range-per-course-open.webp)
+ - Select your preferred sending frequency for each type of updates notification and destination from the dropdown list. ![](/_astro/notification-range-per-course-mail.webp)
+ - Once you have made your selection, click “Proceed to the Confirmation Screen”.
+ - Review your settings, click “Submit”. ![](/_astro/notification-range-per-course-mail-confirm.webp)
+ - The “Complete personal setting” will appear. If you see the “Settings have been completed” message, your setup was successful.
+ ### Information/Message Notifications
+ This section explains how to set where “Information/Message Notifications” are sent.
+ - Open the “Settings” screen from the menu at the top of the screen.
+   ![](/_astro/personal-setting-open-desktop.webp)![](/_astro/personal-setting-open-mobile.webp)
+ - In the “Information/Message Notification” section, select your preferred receiving method from the dropdown list. ![](/_astro/notification-range-message.webp)
+ - Scroll down to the bottom of the screen, click “Proceed to the Confirmation Screen/Confirm”.
+ - When the “Personal Settings” confirmation screen appears, review your settings, and click “Submit/Register”. ![](/_astro/personal-setting-confirm.webp)
+ - The “Personal Settings Completed” screen will appear. If you have received a message “Settings have been completed” or “Settings have been completed. Confirmation Email is sent to Email address you set. Please check whether e-mail addresses you set is correct if mails are not sent even after a while.”, your setup was successful.
+ ## Stop receiving notifications
+ This section explains how to cancel (stop) receiving notifications from UTOL.
+ (For all cases) Open the “Settings” screen from the menu at the top of the screen.
+ ![](/_astro/personal-setting-open-desktop.webp)![](/_astro/personal-setting-open-mobile.webp)
+ ### Email
+ - Select “Do not forward” in the “Email” section.
+ - Scroll down to the bottom of the screen, click “Proceed to the Confirmation Screen/Confirm”.
+ - When the “Personal Settings” confirmation screen appears, review your settings, and click “Submit”. ![](/_astro/personal-setting-confirm.webp)
+ - The “Personal Settings Completed” screen will appear. If you have received a message “Settings have been completed” or “Settings have been completed. Confirmation Email is sent to Email address you set. Please check whether e-mail addresses you set is correct if mails are not sent even after a while.”, your setup was successful.
+ ### LINE
+ If you block “東京大学 UTOL” or remove it from your friends list, notifications will automatically be disabled.
+ #### Blocking
+ - Open the LINE App, and go to the chat room with “東京大学 UTOL”.
+ - Tap the icon in the upper right corner and select “Block”.
+ ![](/_astro/line-block.webp)
+ #### Removing from your friends list
+ - Open the LINE App and go to your “Friends list”.
+ - Look for “東京大学 UTOL” under the “official account” tab, or search for it in the search window, then press and hold the “東京大学 UTOL”.
+ - Select “Delete” from the menu.
+ ![](/_astro/line-delete.webp)
+ ### UTokyo Slack
+ - Click “Disconnect UTokyo Slack” (in blue) under the “UTokyo Slack”. ![](/_astro/slack-stop.webp)
+ - Confirm that it has changed to “Connect UTokyo Slack” (in blue). ![](/_astro/slack-start.webp)
```

[← 一覧へ](<../README.md>)
