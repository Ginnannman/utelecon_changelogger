# UTOLでメッセージ機能を利用する（教員・TA向け）

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utol/lecturers/messages/`](<https://utelecon.adm.u-tokyo.ac.jp/utol/lecturers/messages/>) | [`src/pages/utol/lecturers/messages/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utol/lecturers/messages/index.mdx>) |
| English | 変更 | [`/en/utol/lecturers/messages/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utol/lecturers/messages/>) | [`src/pages/en/utol/lecturers/messages/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utol/lecturers/messages/index.mdx>) |

## 日本語

```diff
  タイトル: UTOLでメッセージ機能を利用する（教員・TA向け） | utelecon
- 説明: 目次: ...
+ 説明: 目次: 概要; メッセージの送信; 自分宛のメッセージの確認・返信; 履修者間のメッセージのやり取りの確認; メッセージ機能の有効化・無効化...
  
  [UTOL](/utol/) > [教員・TAとして利用する](/utol/lecturers/) > メッセージ
  # UTOLでメッセージ機能を利用する（教員・TA向け）
- このページは準備中です．
- 公開されるまでの間，UTOL上の[ダウンロードページ](https://utol.ecc.u-tokyo.ac.jp/common/support/manual)からPDF形式で入手できるマニュアルをご利用ください（UTokyo Accountでのログインが必要です）．
+ ## 概要
+ UTOLのコース参加者（担当教員やTA，履修者）は他のコース参加者にメッセージを送ることができます．メッセージ機能は，履修者が担当教員に質問する，履修者同士でのグループワークのやり取りに使うなど，授業内外でのコミュニケーションに便利です．
+ なお，メッセージ機能はデフォルトでは有効化されていますが，設定により無効化することもできます．メッセージ機能の有効化・無効化をする方法に関しては「[メッセージ機能の有効化・無効化](#enable_disable_function)」を参照してください．
+ また履修者からのメッセージ，他の担当教員およびTAが返信したメッセージについて，メールやLINEで通知を受信することができます．詳細は「[UTOLからの通知を設定する](../../notification/)」を参照してください．
+ ## メッセージの送信
+ - コーストップ画面のメッセージ欄の![](/_astro/add_coursetop.webp)ボタンをクリックしてください． ![](/_astro/coursetop_send.webp)
+ - 以下の画像のようなメッセージ投稿画面に，以下の必要事項を入力してください．なお，送信前に[更新]ボタンをクリックすると，入力した内容が消えてしまう可能性がありますのでご注意ください． ![](/_astro/message_first.webp)
+   - タイトル
+   - 本文
+     - マークアップ機能を利用できます．マークアップ機能の使い方についての詳細は「[UTOLでマークアップ機能を利用する](https://utelecon.adm.u-tokyo.ac.jp/utol/markup/)」を参照してください．
+   - 添付ファイル
+     - [参照]ボタンをクリックしてファイルを選択したあと，[追加]ボタンをクリックすることでファイルを添付できます．
+     - 緊急時や大量送信の場合は，ファイルの添付を控えてください．
+   - 宛先：メッセージを送りたい相手に応じて，教員・TA（コース管理者）の宛先と学生の宛先を別々に指定してください．
+     - 教員・TA（コース管理者）の宛先を指定する
+       - 「すべての担当教員およびTA」，「すべての担当教員」のどちらかを選択してください．
+     - 学生の宛先を指定する
+       - 宛先一覧から，左端のボックスにチェックを入れることで学生を選択してください．なお，一番上のボックスにチェックを入れると，すべての学生を選択することができます．
+ - 画面下部の「送信」ボタンをクリックしてください．
+ - 送信が完了すると，メッセージ投稿画面に遷移します． ![](/_astro/message_send.webp)
+ ## 自分宛のメッセージの確認・返信
+ - コーストップ画面のメッセージ欄の部分を確認してください．
+   - 未読のメッセージがあると，メッセージ欄ステータス列に「未読」と表示されます．
+   - メッセージ欄にメッセージの一覧が表示されない場合は，コーストップ画面上部のボタンが「編集ページ」になっているか確認してください．（「閲覧ページ」の状態ではメッセージ欄は表示されますが，実際に受け取ったメッセージは表示されず，メッセージの一覧は常に空となります．） ![](/_astro/coursetop_edit.webp)
+   - 「コース内のメッセージ一覧」をクリックすると，自分が送信者または受信者であるメッセージの一覧を表示することができます．
+ - 確認したいメッセージのタイトルをクリックしてください．メッセージ投稿画面に遷移します．
+   ![コーストップ画面のメッセージ欄](/_astro/coursetop_send_back.webp) ![メッセージ一覧画面](/_astro/message_list.webp)
+   ![メッセージ投稿画面](/_astro/message_send_back.webp)
+   - この時点でメッセージのステータスは「未読」から「既読」になります．
+   - 「メッセージ投稿画面」では，更新ボタンをクリックすることで，画面を更新することができます．画面を開いている間に他のユーザーがメッセージを投稿していた場合にクリックすると，その内容が表示されます．
+ ## 履修者間のメッセージのやり取りの確認
+ 担当教員は履修者間のメッセージのやり取りを確認することができます．ただし，返信したり，削除したりすることはできません．またTAは確認もできません．
+ - コーストップ画面の左上にある3本線のメニューを開き，その中から「その他」をクリックしてください． ![](/_astro/menu_others.webp)
+ - 「その他」のメニューの中から，「履修者間のメッセージ一覧」をクリックしてください． ![](/_astro/others_student_message.webp)
+ - 履修者間のメッセージ一覧が表示されます．確認したいメッセージのタイトルをクリックすると，メッセージ投稿画面に遷移します． ![](/_astro/student_message.webp)
+ ## メッセージ機能の有効化・無効化
+ 担当教員はそのコースのメッセージ機能の有効化・無効化をすることができます．なおTAにはその権限がありません．
+ - コーストップ画面の左上にある3本線のメニューを開き，その中から「コース設定」をクリックしてください． ![](/_astro/course_setting1.webp)
+ - 「コース設定」のメニューの中から，再び「コース設定」をクリックしてください． ![](/_astro/course_setting2.webp)
+ - コース設定の編集画面が表示されます．その中の「メッセージ利用」のチェックを，有効化する場合は入れ，無効化する場合は外し，ページ下部の「確認画面に進む」をクリックしてください． ![](/_astro/course_setting_edit.webp)
+ - 登録内容確認の画面が表示されます．「メッセージ利用」の項において，有効化する場合は「教員・TA・履修者でメッセージをやり取りする」，無効化する場合は「教員・TA・履修者でメッセージをやり取りしない」になっていることを確認し，ページ下部の「登録する」をクリックしてください．
```

## English

```diff
  タイトル: Using the message function in UTOL (for Course Instructors / TAs) | utelecon
- 説明: Table of Contents: ...
+ 説明: Table of Contents: Overview; Sending a message; Check and reply to received messages; Check messa...
  
  [UTOL](/en/utol/) > [As a Course Instructor or TA](/en/utol/lecturers/) > Messages
  # Using the message function in UTOL (for Course Instructors / TAs)
- This page is not translated yet.
- Until the translation is completed, please refer to the reference manuals in English. They are available in PDF files from [the download page](https://utol.ecc.u-tokyo.ac.jp/common/support/manual) (you need to log in with your UTokyo Account).
- If you can only see the manuals in Japanese, please change the display language from [the UTOL’s settings page](https://utol.ecc.u-tokyo.ac.jp/common/settings), and access the download page again.
+ ## Overview
+ UTOL course participants (course instructors, TAs, and enrolled students) can send messages to one another. The message function is useful for communication, both inside and outside of class, allowing students to ask instructors questions or exchange messages among students during group work.
+ The message function is enabled by default, but it can be disabled in the Course Settings. For instructions on how to enable or disable the message function, please refer to “[Enabling and disabling the message function](#enable_disable_function)”.
+ Notifications for messages from students, as well as replies from other course instructors or TAs, can be received via email or LINE. For details, please refer to “[Settings in UTOL to receive notifications](../../notification/)”.
+ ## Sending a message
+ - Click the ![](/_astro/add_coursetop.webp) button in the Message column on the Course Top screen. ![](/_astro/coursetop_send.drawio.webp)
+ - Enter the required information in the Send Message screen shown in the image below. Please note that clicking the “Update” button before sending may cause the entered information to be lost. ![](/_astro/message_first.drawio.webp)
+   - Title
+   - Main text
+     - The markup function is available. For details on how to use the markup function, please refer to “[Using markup function in UTOL](../../markup/)”.
+   - Attachments
+     - To attach a file, click the “Reference” button, select a file, and click the “Add” button.
+     - Please refrain from using attachments when in an emergency or when sending messages to a large number of recipients.
+   - Address: Specify the addresses for course instructors / TAs (/ course administrators) and students separately, depending on to whom you intend to send the message.
+     - Specify the addresses for course instructors / TAs (/ course administrators).
+       - Select either “All instructors and TA” or “All instructors”.
+     - Specify the student addresses.
+       - Select students by checking the checkbox on the left side of the Address list. You can select all students by checking the top checkbox.
+ - Click the “Send” button at the bottom of the screen.
+ - Once the message has been sent, the Send Message screen will appear. ![](/_astro/message_send.webp)
+ ## Check and reply to received messages
+ - Check the Message section on the Course Top screen.
+   - When there are unread messages, “Unread” will appear in the Message Status column.
+   - If the list of messages is not displayed in the Message section, please check whether the button at the top of the Course Top screen is set to “Screen for editing”. (When it is set to “Screen for viewing”, the Message section appears, but received messages are not shown, and the list of messages remains empty.) ![](/_astro/coursetop_edit.drawio.webp)
+   - Clicking the “Messages in this course” button displays a list of messages that you have either sent or received.
+ - Clicking a message title you want to view opens the Send Message screen.
+   ![Message section on the Course Top screen](/_astro/coursetop_send_back.drawio.webp) ![Message list screen](/_astro/message_list.drawio.webp)
+   ![Send Message screen](/_astro/message_send_back.webp)
+   - At this point, the status changes from “Unread” to “Already read”.
+   - Clicking the “Update” button on the “Send Message” screen refreshes the page. If other users have posted messages while the screen was open, those messages will appear after the refresh.
+ ## Check message exchanges among enrolled students
+ Course instructors can view message exchanges among enrolled students. However, they cannot reply to or delete any messages. TAs cannot view them.
+ - Click the three-line menu icon at the upper left of the Course Top screen and click “Other”. ![](/_astro/menu_others.drawio.webp)
+ - Click “List of messages between students” in the “Other” menu. ![](/_astro/others_student_message.drawio.webp)
+ - The list of messages between students will be displayed. Clicking a message title you want to view opens the Message screen. ![](/_astro/student_message.webp)
+ ## Enabling and disabling the message function
+ Course instructors can enable or disable the message function for the course. However, TAs do not have this authority.
+ - Click the three-line menu icon at the upper left of the Course Top screen and click “Course settings”. ![](/_astro/course_setting1.drawio.webp)
+ - Click the “Course settings” in the “Course settings” menu. ![](/_astro/course_setting2.drawio.webp)
+ - The course edit screen will appear. Check the “Message Usage” checkbox to enable it, or uncheck it to disable it, then click “Confirm” at the bottom of the page. ![](/_astro/course_setting_edit.drawio.webp)
+ - A confirmation screen will appear. Under “Message Usage”, confirm that it shows “Messages are exchanged among faculty, TAs, and students.” if you want to enable it, or “No message exchange among faculty, TAs, and students.” if you want to disable it. Then click “Register” at the bottom of the page.
```

[← 一覧へ](<../README.md>)
