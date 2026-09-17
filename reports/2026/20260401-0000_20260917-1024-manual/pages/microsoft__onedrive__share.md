# OneDriveでファイルを共有する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/microsoft/onedrive/share/`](<https://utelecon.adm.u-tokyo.ac.jp/microsoft/onedrive/share/>) | [`src/pages/microsoft/onedrive/share.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/microsoft/onedrive/share.mdx>) |
| English | 変更 | [`/en/microsoft/onedrive/share/`](<https://utelecon.adm.u-tokyo.ac.jp/en/microsoft/onedrive/share/>) | [`src/pages/en/microsoft/onedrive/share.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/microsoft/onedrive/share.mdx>) |

## 日本語

```diff
  [UTokyo Microsoft License](/microsoft/) > [OneDrive](/microsoft/onedrive/) > ファイルを共有する
  # OneDriveでファイルを共有する
+ 2026年8月11日現在，UTokyo AccountではOneDrive / SharePointで，UTokyo Account以外のユーザー（メールアドレス）を指定して共有リンクを発行することができません．学外者にファイルを共有する必要がある場合は，当面，[ECCSクラウドメールで利用できるGoogleドライブ](/google/drive/)や，[NII FileSender](/filesender/)，部課・部局内で利用できるファイル共有サービスをご利用ください．
  ## はじめに
  このページでは，OneDriveに保存されたファイルを他人に共有する際の具体的な操作手順や設定内容について説明します．
  ⋯
        - @mail.u-tokyo.ac.jpで終わるメールアドレスを入力してMicrosoftアカウントを指定することもできます．
      - メールアドレスを指定する：共有相手のもつメールアドレスや，学外のMicrosoftアカウントを指定すると，共有相手がリンクにアクセスした際，メールアドレスにワンタイムパスコードが送信され，確認画面にパスコードを入力するよう要求されます．
+       2026年7月14日現在，東京大学のOneDriveでこの方法が利用できなくなっています．当座は別の方法を検討してください．
    - 複数人を選択することができます．また，共有相手が異なる複数の共有リンクを作成することができます．
    - 有効期限やパスワードを設定することはできません．
  #### アクセス権の種類
- アクセス権は，以下の3種類の中から選ぶことができます．
+ アクセス権は，以下の4種類の中から選ぶことができます．
  - 表示可能
    - ファイルを閲覧することはできますが，編集はできません．
  ⋯
  - 編集可能
    - ファイルの閲覧と編集の両方が可能です．
+ - ダウンロードできません
+   - ファイルの閲覧は可能ですが, ローカルPCなどへのダウンロードはできません．
  #### 「既存のアクセス権を持つユーザー」に対するリンク
  OneDriveには，「ユーザーの範囲」と「アクセス権の種類」を指定して作成する上記のリンクのほかに，すでに作成された共有リンクの共有対象者全員（「既存のアクセス権を持つユーザー」）がアクセスできるリンクが存在します．
```

## English

```diff
- タイトル: Share Files on OneDrive | utelecon
- 説明: Table of Contents: ...
+ タイトル: Sharing Files on OneDrive | utelecon
+ 説明: Table of Contents: Introduction; Sharing Files and Folders; Receiving Files...
  
- [UTokyo Microsoft License](/en/microsoft/) > [OneDrive](/en/microsoft/onedrive/) > Share Files
- # Share Files on OneDrive
- Please wait for a while until this page is published. In the meantime, the Japanese version of this page might already be available. To switch languages, click the “日本語” button at the top right of the page (for PC users) or tap the “Menu” button at the top left, then select the “日本語” button at the top center (for smartphone users).
+ [UTokyo Microsoft License](/en/microsoft/) > [OneDrive](/en/microsoft/onedrive/) > Sharing Files
+ # Sharing Files on OneDrive
+ As of August 11, 2026, users with UTokyo Accounts cannot create a sharing link on OneDrive or SharePoint that is restricted to a user (email address) other than a UTokyo Account. If you need to share files with external users, please use [Google Drive available with ECCS Cloud Email](/en/google/drive/), [NII FileSender](/en/filesender/), or a file sharing service available within your department.
+ ## Introduction
+ This page explains the specific procedures and settings for sharing files stored on OneDrive with others.
+ General information on using OneDrive can be found in “[OneDrive](../)”, and instructions on how to create, edit, upload, and download files can be found in “[Basic Usage of OneDrive](../basic/)”. Please refer to these pages as well.
+ In addition, please refer as necessary to “[Recommended Usage for Sharing Files on OneDrive](../recommendation/)”, which explains the ways recommended for sharing files according to different cases, and the “[Guideline For Sharing New Files on Cloud](/articles/share-policy/) (in Japanese)”, which describes ways to improve productivity and security as a proposed file sharing policy.
+ ## Sharing Files and Folders
+ You can share files with others by creating a shared link for a file or folder on OneDrive. In other words, by sending the shared link you created to the person you want to share the file with, that person can view or edit the file via the shared link.
+ In particular, if you create a shared link for a folder, all files and folders contained in that folder can be accessed via the link.
+ ### Types of Shared Links That Can Be Created
+ In OneDrive, you can create several different shared links according to combinations of the “range of users” to be shared with and the type of “access rights”.
+ #### Range of Users
+ You can choose the range of users to be shared with from the following three types.
+ - Anyone
+   - Anyone can access the file via this link. They do not need to be signed in to a Microsoft account when accessing the file.
+   - You must set an expiration date for this link. After the expiration date of the shared link has passed, the file can no longer be accessed via this link.
+     - At the University of Tokyo, the maximum expiration date that can be set is 60 days later.
+     - You cannot create multiple shared links with different expiration dates.
+   - You can set a password for the shared link. For a shared link with a password, the file cannot be accessed unless the correct password is entered.
+     - You cannot create multiple shared links with different passwords.
+     - A shared link that requires a password and a shared link that does not require a password can exist at the same time. For example, even if you create a new shared link that requires a password while a shared link that does not require a password already exists, the latter remains valid.
+ - People in The University of Tokyo
+   - Only users who are signed in to Microsoft with their UTokyo Account can access the file via this link.
+   - You cannot set an expiration date or password.
+ - People you choose
+   - Only the people you specify can access the file via this link.
+   - You can specify the people to share with by either of the following methods.
+     - Specify an internal Microsoft account: If you specify the internal Microsoft account of the person you want to share with, that person will be asked to sign in to their Microsoft account when they access the link. You can search for Microsoft accounts by entering a name or an email address in the form of a UTokyo Account, which consists of a 10-digit Common ID followed by @utac.u-tokyo.ac.jp.
+       - You can also specify a Microsoft account by entering an email address ending in @mail.u-tokyo.ac.jp.
+     - Specify an email address: If you specify the email address of the person you want to share with or an external Microsoft account, a one-time passcode will be sent to that email address when that person accesses the link, and they will be asked to enter the passcode on the confirmation screen.
+       As of July 14, 2026, this method is no longer available on the University of Tokyo’s OneDrive. Please consider alternative methods for now.
+   - You can choose multiple people. You can also create multiple shared links with different recipients.
+   - You cannot set an expiration date or password.
+ #### Types of Access Rights
+ You can choose the access rights from the following four types.
+ - Can view
+   - Users can view the file, but cannot edit it.
+   - For shared links whose access right is “Can view”, you can also block downloading. With such a link, users can only view the file and cannot save the file locally.
+     - A shared link that blocks download and a shared link that does not block download can exist at the same time. For example, even if you create a new shared link that blocks download while a shared link that does not block download already exists, the latter remains valid.
+ - Can review (Word documents only)
+   - In addition to viewing the file, users can suggest edits and add comments (Review mode). They cannot edit the file directly.
+ - Can edit
+   - Users can both view and edit the file.
+ - Can’t download
+   - Users can view but cannot download.
+ #### Link for “Only people with existing access”
+ In addition to the links described above, which are created by specifying the “range of users” and the “type of access rights”, OneDrive also has a link that can be accessed by all people who are already included in existing shared links (“Only people with existing access”).
+ - The people who can access the file via a link for “Only people with existing access” are as follows.
+   - The owner of the file
+   - People who have accessed the file via a currently valid shared link
+   - People who have been granted access from the “Manage access” screen
+ - If a user accesses a file via a link for “Only people with existing access”, the user’s access rights follow the access rights of the shared link that has already been created for that user. Therefore, creating this link does not change users’ access rights.
+   - For example, suppose a user has accessed a file via a shared link whose range of users is “People in The University of Tokyo” and whose access right is “Can view”. If this user accesses the file using a link for “Only people with existing access”, the user cannot edit the file.
+ ### Procedures
+ #### Creating a New Shared Link
+ The procedure for creating a new shared link is as follows.
+ - Right-click the file you want to share, and click “Share”.![](/_astro/share-create-link-1.webp)
+   - If you click “Copy link” instead of “Share”, a link for [“People with existing access”](#existing-access), rather than a shared link, will be created automatically. Therefore, we recommend creating links via “Share” instead of “Copy link”.
+ - Click the gear icon at the top of the screen.![](/_astro/share-create-link-2.webp)
+ - Change the settings of the shared link to be created as necessary. For details on each setting item, see “[Types of Shared Links That Can Be Created](#link-type)”.![](/_astro/share-create-link-3.webp)
+   - “Share the link with”: You can set the range of users to be shared with.
+     - If you select “People with existing access”, you can obtain a link that can be accessed by all people who are already included in existing shared links. For details, see [Link for “People with existing access”](#existing-access).
+   - “More settings”: You can set the type of access rights.
+   If you want to set an expiration date
+   - If the range of users to be shared with is “Anyone”, you can set an expiration date for the shared link. Set the expiration date from “Set expiration date” under “More settings”.
+   If you want to set a password
+   - If the range of users to be shared with is “Anyone”, you can set a password for the shared link. Enter the password from “Set password” under “More settings”.
+   If you want to block downloading
+   - If the type of access rights is “Can view”, you can prevent the recipients from downloading the file. Turn on the checkbox labeled “Block download” under “More settings”.
+ - Click the “Apply” button.
+ - If you selected “People you choose” as the range of users to be shared with, specify the recipients in the field labeled “Add a name, group, or email”.![](/_astro/share-create-link-4.webp)
+   - If you specify an internal Microsoft account: Enter a name or an email address in the form of a UTokyo Account, which consists of a 10-digit Common ID followed by @utac.u-tokyo.ac.jp, in the field above to search for the account.
+     - You can also specify a Microsoft account by entering an email address ending in @mail.u-tokyo.ac.jp.
+   - If you specify an email address or an external Microsoft account: Enter the email address directly in the field above.
+ - Click the “Copy link” button. A new shared link will be created and copied to the clipboard.
+ #### Checking, Editing, and Deleting Shared Links
+ The procedure for checking, editing, and deleting shared links that have already been created is as follows.
+ - Right-click the file you want to share, and click “Manage access”.![](/_astro/share-edit-link-1.webp)
+ - Click the “Links” tab.![](/_astro/share-edit-link-2.webp)
+ - From this screen, you can check the list of shared links that have already been created, and edit or delete them.![](/_astro/share-edit-link-3.webp)
+   - If you want to change the range of users or the type of access rights
+     - You cannot change the range of users to be shared with or the type of access rights. If you want to change the range of users or the type of access rights, you need to delete the shared link and then create a new shared link with different permissions. However, if the range of users to be shared with is “People you choose”, you can exceptionally change the type of access rights.
+   - If you want to change the expiration date of a shared link
+     - To change the expiration date of a shared link, click the gear icon on the right side of the shared link, and set a new expiration date from “Settings”.
+   - If you want to change the users to be shared with
+     - For a shared link whose range of users to be shared with is “People you choose”, you can add new target users or remove users while keeping the URL of the link unchanged.
+     - To add a target user, click the gear icon on the right side of the shared link, and enter the Microsoft account of the user you want to add in the field labeled “Specify who this link works for”.
+     - To remove a target user, click the gear icon on the right side of the shared link, and click the “×” icon to the right of the user displayed at the bottom of the section labeled “This link works for”.
+   - If you want to delete a shared link
+     - To delete a shared link, click the trash icon on the right side of the shared link, and then click the “Delete” button. When you delete a shared link, the link becomes invalid, and the file can no longer be accessed via that link.
+   - If you want to delete all shared links at once
+     - To delete all shared links at once, click “Stop sharing” at the top of the screen, and then click the “Stop sharing” button. This deletes all shared links, and users other than the owner will no longer be able to access the file.
+ ## Receiving Files
+ In OneDrive, you can receive files from others by creating a file request link for a folder in advance and asking others to upload files. A person who receives a file request link can upload files to the link creator’s folder by accessing the link.
+ File request links have the following characteristics.
+ - A person who accesses a folder via a file request link cannot view or edit other folders contained in the folder.
+ - Anyone who knows the link can upload files via a file request link. You cannot create a link that limits the range of target users.
+ - The names of files uploaded via a file request link will have a string identifying the uploader added to the beginning of the original file name.
+   - If the uploader is signed in to a Microsoft account, the name associated with that account is added to the beginning of the file name. Otherwise, the full name that the uploader is asked to enter when uploading is added to the beginning of the file name.
+ ### Procedures
+ #### Creating a New File Request Link
+ The procedure for creating a new file request link is as follows.
+ - Right-click the folder you want to specify as the upload destination, and click “Request files”.![](/_astro/share-request-1.webp)
+ - If necessary, enter a description in the text field, and then click “Next”.![](/_astro/share-request-2.webp)
+   - The description you enter will be displayed when the recipient accesses the file request link.
+ - Click the “Copy link” button. A new file request link will be created and copied to the clipboard.![](/_astro/share-request-3.webp)
+ #### Checking and Deleting File Request Links
+ The procedure for checking and deleting file request links that have already been created is as follows.
+ - Right-click the folder for which you created the file request link, and click “Manage access”.![](/_astro/share-edit-request-1.webp)
+ - Click the “Links” tab.![](/_astro/share-edit-request-2.webp)
+ - From this screen, you can check and delete file request links that have already been created.![](/_astro/share-edit-request-3.webp)
+   - If you want to delete a file request link
+     - To delete a file request link, click the trash icon on the right side of the file request link, and then click the “Delete” button. When you delete a file request link, the link becomes invalid, and files can no longer be uploaded via that link.
```

[← 一覧へ](<../README.md>)
