# Googleドライブでファイルを共有する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更なし | [`/google/drive/share/`](<https://utelecon.adm.u-tokyo.ac.jp/google/drive/share/>) | [`src/pages/google/drive/share.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/622296c7e37347cfdf4cc523c7c9c43c8fd31a20/src/pages/google/drive/share.mdx>) |
| English | 変更 | [`/en/google/drive/share/`](<https://utelecon.adm.u-tokyo.ac.jp/en/google/drive/share/>) | [`src/pages/en/google/drive/share/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/622296c7e37347cfdf4cc523c7c9c43c8fd31a20/src/pages/en/google/drive/share/index.mdx>) |

## English

```diff
  ## Introduction
  This page explains the specific steps and settings required to share files that are saved on Google Drive with other users.
- For a general explanation of how to use Google Drive, please refer to “[Google Drive](.)”. For information on how to create, edit, upload, and download files, please refer to “[Basic Usage of Google Drive (in Japanese)](../../../google/drive/basic)”.
- Additionally, please refer to “[Recommended Method for Sharing Files on Google Drive(in Japanese)](../../../google/drive/recommendation)”, which explains the recommended methods for sharing files according to different cases, and the page “[Proposal for a New File Sharing Policy Using Cloud Storage (in Japanese)](/articles/share-policy/)”, which explains ways to enhance productivity and security when sharing files.
+ For a general explanation of how to use Google Drive, please refer to “[Google Drive](../)”. For information on how to create, edit, upload, and download files, please refer to “[Basic usage of Google Drive](../basic/)”.
+ Additionally, please refer to “[Recommended Usage for Sharing Files on Google Drive](../recommendation/)”, which explains the recommended methods for sharing files according to different cases, and the page “[Proposal for a New File Sharing Policy Using Cloud Storage (in Japanese)](/articles/share-policy/)”, which explains ways to enhance productivity and security when sharing files.
  ### Introduction Video on How to Use Google Drive
  We also explain the method for sharing files on Google Drive described on this page in a video.
  ⋯
  - Commenter
    - In addition to viewing the file, they can add comments. For Google Docs files, they can also suggest edits but cannot directly edit the file.
- - Editor(referred to as “Contributor” in [Shared Drives](shared_drive))
+ - Editor(referred to as “Contributor” in [“Shared Drives” in Google Drive](../shared_drive/))
    - They can view and edit the file.
- Note: When using the “Shared Drive” feature, there are additional access permissions such as “Content Manager” and “Manager”. For details, please refer to the “[“Shared Drives” in Google Drive](shared_drive)” page.
+ Note: When using the “Shared Drive” feature, there are additional access permissions such as “Content Manager” and “Manager”. For details, please refer to the “[‘Shared Drives’ in Google Drive](../shared_drive/)” page.
  #### Other Settings
  Additional settings can be configured as described below. The specific steps for these settings are outlined in the following steps.
  ⋯
  - The sharing settings screen, labeled “Share [file name]” will open. Confirm that the displayed file name matches the file you want to share before proceeding with the settings.![](/_astro/share.webp)
  #### Procedure for Specifying Individuals to Share With
- Among “[the two methods for specifying the people who can access](#target)”, the procedure for specifying individuals to share with is as follows:
+ Among [the two methods for specifying who can access](#target), the procedure for specifying individuals to share with is as follows:
  - After opening the sharing settings screen as described above, enter the email address of the person you wish to share with in the “Add people, groups and calendar events” field.
    - Generally, specify a Google account (for members of the University of Tokyo, this refers to ECCS Cloud Email accounts ending with @g.ecc.u-tokyo.ac.jp).
    ![](/_astro/share-add.webp)
  - The screen will switch to the sharing settings for that individual. ![](/_astro/share-add-dialog.webp)
- - On the right side, you will see a section labeled “Editor”, which is where you can set the access permissions for the individual. Click this section to set the access permission parameters. For details on the available types of access permissions, refer to “[Access Permissions Details (in Japanese)](#access-level)”.
+ - On the right side, you will see a section labeled “Editor”, which is where you can set the access permissions for the individual. Click this section to set the access permission parameters. For details on the available types of access permissions, refer to “[Types of Access Permission](#access-level)”.
  - If the “Notify people” checkbox is selected, a notification email containing a link to the file will be automatically sent to the recipient. If you uncheck this box, the email will not be sent automatically, and you will need to manually share the link. Toggle this setting based on your needs.
    - When the “Notify people” is selected, the content entered in the “Message” field below it will be included in the notification email. If you have any information you want to convey to the recipient, please enter it here.
  ⋯
  - After opening the sharing settings screen, a list of people you have previously shared with will be displayed in the “People with access” section. Find the person whose access you wish to remove or whose access permission parameters you wish to change.![](/_astro/share-people.webp)
  - To the right of the person’s name or email address, you will see a section labeled “Editor”, “Viewer”, etc. indicating the access permissions granted to that person. Click on this section.![](/_astro/share-people-access.webp)
- - A menu for selecting the access permission parameters will be displayed. Adjust the permissions as needed. For details on the types of access permissions available, refer to “[Access Permissions Details](#access-level)”.
+ - A menu for selecting the access permission parameters will be displayed. Adjust the permissions as needed. For details on the types of access permissions available, refer to “[Types of Access Permission](#access-level)”.
    - There is also a setting to “Add expiration”. If you add an expiration date, the sharing with that person will be automatically removed when the expiration date is reached.
-   - There is also an setting to “Transfer ownership” (for individuals with “Editor” access permissions, outside of [Shared Drives](shared_drive)). Clicking this will transfer the file from your Google Drive to the other person’s Google Drive. Be cautious with this action, as it cannot be undone unless the other person transfers ownership back to you.
+   - There is also an setting to “Transfer ownership” (for individuals with “Editor” access permissions, outside of [“Shared Drives” in Google Drive](../shared_drive/)). Clicking this will transfer the file from your Google Drive to the other person’s Google Drive. Be cautious with this action, as it cannot be undone unless the other person transfers ownership back to you.
    - There is also a setting to “Remove access”. Clicking this will revoke the access of the selected person and terminate the sharing.
    ![](/_astro/share-people-access-menu.webp)
  - Finally, click the “Done” button at the bottom right.
  #### Procedure for Sharing with a Group of Unspecified People
- Among [the two methods for setting the range of people who can access](#target), the procedure for sharing with a group of unspecified people is as follows:
+ Among [the two methods for specifying who can access](#target), the procedure for sharing with a group of unspecified people is as follows:
  - After opening the sharing settings screen, look at the “General access” section. If no settings have been configured, it should display “Restricted”.![](/_astro/share-general.webp)
  - Clicking the “Restricted” text will display a list of settings, allowing you to change the settings.
  ⋯
    - “Anyone with the link”: This setting allows anyone who knows the link to the file or folder to access it.
    ![](/_astro/share-general-menu.webp)
- - When you change the settings, a section labeled “Viewer” will appear on the right. Pressing this section allows you to configure the access permission parameters for the unspecified people with whom the file or folder is shared. For details on the available types of access permissions, please refer to “[Details of Access Permissions](#access-level)”.
+ - When you change the settings, a section labeled “Viewer” will appear on the right. Pressing this section allows you to configure the access permission parameters for the unspecified people with whom the file or folder is shared. For details on the available types of access permissions, please refer to “[Types of Access Permission](#access-level)”.
    ![](/_astro/share-general-gecc-access.webp)![](/_astro/share-general-gecc-access-menu.webp)
  - Press “Copy Link” at the bottom left to copy the link.
  ⋯
    - This setting is only displayed when sharing files, not folders. If you want to prohibit downloading, files must be shared individually.
  These settings are automatically applied as soon as you change them. To return to the sharing settings screen, press the left-facing arrow at the top left.
- Note: If you are using the [“Shared Drive” feature](shared_drive), these settings will be applied to the entire shared drive and cannot be changed for individual files or folders.
+ Note: If you are using the [“Shared Drives” in Google Drive](../shared_drive/), these settings will be applied to the entire shared drive and cannot be changed for individual files or folders.
  Note: For instructions on setting an expiration date for sharing, please refer to the steps outlined in “Settings for sharing with specific individuals” above.
```

[← 一覧へ](<../README.md>)
