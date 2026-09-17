# Googleグループのメールアドレスを差出人に指定してメールを送信する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/google/group/mail_sender/`](<https://utelecon.adm.u-tokyo.ac.jp/google/group/mail_sender/>) | [`src/pages/google/group/mail_sender/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/google/group/mail_sender/index.md>) |
| English | 変更 | [`/en/google/group/mail_sender/`](<https://utelecon.adm.u-tokyo.ac.jp/en/google/group/mail_sender/>) | [`src/pages/en/google/group/mail_sender/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/google/group/mail_sender/index.md>) |

## 日本語

```diff
  ECCSクラウドメール内で作成したGoogleグループをメーリングリストとして用いる際，そのメールアドレスを差出人としてメールを送信することが可能です．そのためには，事前に下記の手順のような設定が必要です．
  ## 手順
- - グループを作成してください．その際，いったん「ウェブ上のすべてのユーザー」に投稿権限を与えてください．
-   - もし投稿権限を「ウェブ上のすべてのユーザー」にしなかった場合，この後の手順リスト6番で受け取るはずのメールが受け取れなくなってしまうため，この操作が必要です．手順リスト6番の操作が済んだら，投稿権限は自由に設定してかまいません． ![](/_astro/groups01.webp) ![](/_astro/groups02a.webp) ![](/_astro/groups03.webp)
- - ECCSクラウドメールの設定画面を開いてください． ![](/_astro/groups04.webp)
- - 設定画面で，「アカウント」タブを開き，「他のメールアドレスを追加」のボタンを押してください． ![](/_astro/groups05.webp)
- - 「名前」に送信時に表示したい名前を，「メールアドレス」にメーリングリストのアドレスをそれぞれ入力して，次のステップに進んでください． ![](/_astro/groups06.webp)
- - 「確認メールの送信」を押してください． ![](/_astro/groups07.webp)
- - メーリングリストに宛てて，確認メールが送信されます．メール本文中のリンクを押すか，確認コードを用いて，あなたがこのメーリングリストのメンバーであることを示してください． ![](/_astro/groups09.webp)
-   - メール本文中のリンクを押す場合は，下記のような画面が表示されるので，指示に従って操作してください ![](/_astro/groups10.webp) ![](/_astro/groups11.webp)
-   - 確認コードを用いる場合は，下記の画面に入力してください． ![](/_astro/groups08.webp)
- - ECCSクラウドメールの設定画面で，「名前」の欄にメーリングリストのアドレスが追加されていることを確認してください． ![](/_astro/groups12.webp)
- - ECCSクラウドメールのメール作成画面で「差出人」の欄を操作し，メーリングリストのアドレスを選択できることを確認してください． ![](/_astro/groups13.webp)
- - この一連の手順の冒頭，Googleグループを作成する際に，「ウェブ上のすべてのユーザー」からの投稿を許可しましたが，必要であればこれを修正してください． ![](/_astro/groups14.webp) ![](/_astro/groups15.webp)
+ - Googleグループを作成してください．その際，いったん「ウェブ上のすべてのユーザー」に投稿権限を与えてください．
+   - もし投稿権限を「ウェブ上のすべてのユーザー」にしなかった場合，この後の手順リスト6番で受け取るはずのメールが受け取れなくなってしまうため，この操作が必要です．手順リスト6番の操作が済んだら，投稿権限は自由に設定してかまいません． ![](/_astro/group01.webp) ![](/_astro/group02.webp) ![](/_astro/group03.webp) ![](/_astro/group04.webp)
+ - ECCSクラウドメールの設定画面を開いてください． ![](/_astro/group05.webp)
+ - 設定画面で，「アカウント」タブを開き，「他のメールアドレスを追加」のボタンを押してください． ![](/_astro/group06.webp)
+ - 「名前」に送信時に表示したい名前を，「メールアドレス」にメーリングリストのアドレスをそれぞれ入力して，次のステップに進んでください． ![](/_astro/group13.webp)
+ - 「確認メールの送信」を押してください． ![](/_astro/group14.webp)
+ - メーリングリストに宛てて，確認メールが送信されます．メール本文中のリンクを押して，あなたがこのメーリングリストのメンバーであることを示してください． ![](/_astro/group07.webp)
+   - メール本文中のリンクを押すと，下記のような画面が表示されるので，指示に従って操作してください． ![](/_astro/group08.webp) ![](/_astro/group09.webp)
+ - ECCSクラウドメールの設定画面で，「名前」の欄にメーリングリストのアドレスが追加されていることを確認してください． ![](/_astro/group10.webp)
+ - ECCSクラウドメールのメール作成画面で「差出人」の欄を操作し，メーリングリストのアドレスを選択できることを確認してください． ![](/_astro/group11.webp)
+ - 手順1で，Googleグループを作成する際に，「ウェブ上のすべてのユーザー」からの投稿を許可しましたが，必要であればこれを修正してください． ![](/_astro/group12.webp)
```

## English

```diff
- タイトル: Sending an email with a group email address as the sender | utelecon
- 説明: Table of Contents: ...
+ タイトル: Sending emails using a Google Group email address as the sender | utelecon
+ 説明: Table of Contents: Overview; Procedure...
  
- [ECCS Cloud Email](/en/google/) > [Google Groups](/en/google/group/) > Sending an email with a group email address as the sender
- # Sending an email with a group email address as the sender
- Please wait for a while until this page is published. In the meantime, the Japanese version of this page might already be available. To switch languages, click the “日本語” button at the top right of the page (for PC users) or tap the “Menu” button at the top left, then select the “日本語” button at the top center (for smartphone users).
+ [ECCS Cloud Email](/en/google/) > [Google Groups](/en/google/group/) > Sending emails using a Google Group email address as the sender
+ # Sending emails using a Google Group email address as the sender
+ ## Overview
+ When using a Google Group created within ECCS Cloud Email as a mailing list, you can send emails using that group’s email address as the sender. To do so, you must configure the following settings in advance.
+ ## Procedure
+ - Create a group. When doing so, temporarily set the permissions to allow posting “Anyone on the web”.
+   - This setting is necessary because if you do not set the posting permission to “Anyone on the web”, you will not be able to receive the email required in Step 6. Once you have completed Step 6, you may change the posting permissions as needed. ![](/_astro/groups01.webp) ![](/_astro/groups02.webp)
+ - Open the ECCS Cloud Email settings page. ![](/_astro/groups04.webp)
+ - On the settings screen, open the “Accounts” tab and click the “Add another email address” button. ![](/_astro/groups05.webp)
+ - Enter the name you wish to display when sending emails in the “Name” field, and the mailing list address in the “Email address” field. Then proceed to the next step. ![](/_astro/groups06.webp)
+ - Press the “Send Verification” button. ![](/_astro/groups07.webp)
+ - A verification email will be sent to the mailing list. Click the link in the email body to confirm that you are a member of this mailing list. ![](/_astro/groups09.webp)
+   - After clicking on the link in the email body, the following screens will be displayed. Please follow the instructions on them. ![](/_astro/groups10.webp) ![](/_astro/groups11.webp)
+ - Return to the ECCS Cloud Email settings page and confirm that the mailing list address has been added to the “Send mail as” section. ![](/_astro/groups12.webp)
+ - Open the email compose window in ECCS Cloud Email. In the “From” field, confirm that you can select the mailing list address as the sender address. ![](/_astro/groups13.webp)
+ - After completing these steps, you may change the Google Group’s posting permissions from “Anyone on the web” to another setting if necessary. ![](/_astro/groups14.webp) ![](/_astro/groups15.webp)
```

[← 一覧へ](<../README.md>)
