# Googleドライブの基本的な使い方

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/google/drive/basic/`](<https://utelecon.adm.u-tokyo.ac.jp/google/drive/basic/>) | [`src/pages/google/drive/basic.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/google/drive/basic.mdx>) |
| English | 変更 | [`/en/google/drive/basic/`](<https://utelecon.adm.u-tokyo.ac.jp/en/google/drive/basic/>) | [`src/pages/en/google/drive/basic.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/google/drive/basic.md>) |

## 日本語

```diff
  - Googleスプレッドシート：Microsoft Excelに相当
  - Googleスライド：Microsoft PowerPointに相当
- 作成したファイルは，それぞれのGoogleサービス上で編集することができます．ファイル形式の詳細については，[Googleドライブのページの「Googleドライブにおけるファイル形式について」](../#format)を参照してください．
+ 作成したファイルは，それぞれのGoogleサービス上で編集することができます．ファイル形式の詳細については，[Googleドライブのページの「Googleドライブにおけるファイルの形式について」](../#format)を参照してください．
  ### 手順
  - Googleドライブ内で，ファイルの作成場所となるフォルダに移動してください．
  ⋯
  ## ファイルを編集する
  ここでは，Googleドライブ上のファイルを編集する方法を説明します．
- Googleドライブに保存されているファイルのうち，Googleドキュメント等のGoogleサービスのファイルは，そのGoogleサービスを利用して編集することができます．また，WordやExcelなどのMicrosoft Office形式のファイルもGoogleサービスを利用して編集することができますが，完全な互換性があるわけではないため，注意が必要な部分もあります（詳細は[Googleドライブのページの「Googleドライブにおけるファイル形式について」](../#format)を参照してください）．
+ Googleドライブに保存されているファイルのうち，Googleドキュメント等のGoogleサービスのファイルは，そのGoogleサービスを利用して編集することができます．また，WordやExcelなどのMicrosoft Office形式のファイルもGoogleサービスを利用して編集することができますが，完全な互換性があるわけではないため，注意が必要な部分もあります（詳細は[Googleドライブのページの「Googleドライブにおけるファイルの形式について」](../#format)を参照してください）．
  ### 手順
  - Googleドライブ内で，編集したいファイルが存在するフォルダに移動してください．
- - 編集したいファイルのファイル名をダブルクリックしてください．新しいタブにGoogleサービスの画面が表示され，ファイルを編集することができます．
+ - 編集したいファイルをダブルクリックしてください．新しいタブにGoogleサービスの画面が表示され，ファイルを編集することができます．
  ## ファイルをアップロードする
  ここでは，Googleドライブにファイルをアップロードする方法を説明します．
- 画像・動画・音声などを含め，どんなファイルでもアップロードすることができます．ただし，WordやExcelなどMicrosoft Officeのファイルについては，Googleサービスと完全な互換性があるわけではないため，注意が必要な部分があります（詳細は[Googleドライブのページの「Googleドライブにおけるファイル形式について」](../#format)を参照してください）．
+ 画像・動画・音声などを含め，どんなファイルでもアップロードすることができます．ただし，WordやExcelなどMicrosoft Officeのファイルについては，Googleサービスと完全な互換性があるわけではないため，注意が必要な部分があります（詳細は[Googleドライブのページの「Googleドライブにおけるファイルの形式について」](../#format)を参照してください）．
  ### 手順
  - Googleドライブ内で，ファイルをアップロードしたいフォルダに移動してください．
  ⋯
  ## ファイルをダウンロードする
  ここでは，Googleドライブ上のファイルをダウンロードする方法を説明します．
- Googleドキュメント等のGoogleサービスのファイルは，そのファイルの種類ごとに相当するMicrosoft Office形式のファイルに変換してダウンロードされます（詳細は[Googleドライブのページの「Googleドライブにおけるファイル形式について」](../#format)も参照してください）．
+ Googleドキュメント等のGoogleサービスのファイルは，そのファイルの種類ごとに相当するMicrosoft Office形式のファイルに変換してダウンロードされます（詳細は[Googleドライブのページの「Googleドライブにおけるファイルの形式について」](../#format)も参照してください）．
  ### 手順
- - Googleドライブ内で，編集したいファイルが存在するフォルダに移動してください．
+ - Googleドライブ内で，ダウンロードしたいファイルが存在するフォルダに移動してください．
  - ダウンロードしたいファイル（またはフォルダ）を右クリックし，表示されるメニューで「ダウンロード」を選択してください．![](/_astro/file-contextmenu-download.webp)
  - ファイルの選択画面が表示されるので，ダウンロード先のフォルダを選択してください．
  - ファイルがダウンロードされます．
    - フォルダの場合は， .zip 形式で圧縮された状態でダウンロードされます．
- 複数のファイルをまとめてダウンロードすることも可能です．具体的には，フォルダの画面でCtrlキー (Windows) または⌘キー (Mac) を押しながらクリックすると複数のファイルを選択することができ，その状態から右クリックメニューで「ダウンロード」を押すことで，選択していたファイルがダウンロードされます．
+ 複数のファイルをまとめてダウンロードすることも可能です．具体的には，ファイル一覧の画面でCtrlキー (Windows) または⌘キー (Mac) を押しながらクリックすると複数のファイルを選択することができ，その状態から右クリックメニューで「ダウンロード」を押すことで，選択していたファイルがダウンロードされます．
  ### 補足
  他の人にファイルを見てほしい・編集してほしい場合は，ダウンロードしたファイルをメールの添付ファイルなどで渡すのではなく，共有機能を使ってGoogleドライブ上のファイルに直接アクセスしてもらうのが便利です．ファイルを編集すればすぐに共有相手にも反映されますし，複数人で同時に編集を行うこともできるため，メールに関わる煩雑なファイル管理の手間の軽減に役立ちます．共有機能については「[Googleドライブでファイルを共有する](../share/)」のページを参照してください．
  ⋯
    ![](/_astro/move.webp)
  - 画面下部の「移動」を押してください．選択したフォルダにファイルが移動されます．
- 複数のファイルをまとめて移動させることも可能です．具体的には，フォルダの画面でCtrlキー (Windows) または⌘キー (Mac) を押しながらクリックすると複数のファイルを選択することができ，その状態から右クリックメニューで「整理」→「移動」を選ぶことで，選択していたファイルが移動されます．
+ 複数のファイルをまとめて移動させることも可能です．具体的には，フォルダ一覧の画面でCtrlキー (Windows) または⌘キー (Mac) を押しながらクリックすると複数のファイルを選択することができ，その状態から右クリックメニューで「整理」→「移動」を選ぶことで，選択していたファイルが移動されます．
```

## English

```diff
  ## Introduction
  On this page, we will explain the specific operational steps for handling files stored on Google Drive.
- Furthermore, general information on how to use Google Drive can be found in “[Google Drive](../../../google/drive/index.md)” (an English translation is planned). In addition, an introduction on how to share files can be found in “[Share files with Google Drive](../../../google/drive/share.md)” (an English translation is planned). Please refer to these documents for more information.
- To proceed with the following steps, make sure you are already logged into ECCS Cloud Mail and have Google Drive open in your browser. If you have not completed these two steps, please refer to [“Open Google Drive in the browser” on the Google Drive page](../../../google/drive/index.md#access) (an English translation is planned).
+ Furthermore, general information on how to use Google Drive can be found in “[Google Drive](../)”. In addition, an introduction on how to share files can be found in “[Sharing files on Google Drive](../share/)”. Please refer to these documents for more information.
+ To proceed with the following steps, make sure you are already logged into ECCS Cloud Email and have Google Drive open in your browser. If you have not completed these two steps, please refer to [“Opening Google Drive in a Browser” on the Google Drive page](../#access).
  ## How to create files
  Here, we will explain how to create files in Google Drive.
  The main formats of files that can be created in Google Drive are listed below.
- - Google Document: equivalent to Microsoft Word.
- - Google Spreadsheet: equivalent to Microsoft Excel
- - Google Slide: equivalent to Microsoft PowerPoint
- Created files can be edited using the corresponding Google services. For more details regarding the file types, please refer to [“File types in Google Drive” section on the Google Drive page](../../../google/drive/index.md#format) (an English translation is planned).
+ - Google Docs: equivalent to Microsoft Word
+ - Google Sheets: equivalent to Microsoft Excel
+ - Google Slides: equivalent to Microsoft PowerPoint
+ Created files can be edited using the corresponding Google services. For more details regarding the file types, please refer to [“About File Formats in Google Drive” section on the Google Drive page](../#format).
  ### Procedure
  - In Google Drive, please navigate to the folder where you would like to create the file.
  - Please click the “New” button at the top left of the screen.![](/_astro/top-new.webp)
- - A list of file types is displayed. Please select the type of file you wish to create.![](/_astro/new-item.webp)
+ - A list of the file types is displayed. Please select the type of file you wish to create.![](/_astro/new-item.webp)
  - The file will be created and opened in the Google service corresponding to the file type.
    - You can directly edit the file displayed on the screen of the Google service.
  ## How to edit files
  In this section, we will explain how to edit files in Google Drive.
- Files stored in Google Drive, such as Google Docs, can be edited using the corresponding Google service. In addition, you can edit Microsoft Office format files, such as Word or Excel, using the Google services. However, as they are not 100% compatible, there may be some parts that will need your attention (for details, please refer to [“File types in Google Drive” section on the Google Drive page](../../../google/drive/index.md#format) (an English translation is planned)).
+ Files stored in Google Drive, such as Google Docs, can be edited using the corresponding Google service. In addition, you can edit Microsoft Office format files, such as Word or Excel, using the Google services. However, as they are not completely compatible, there may be some parts that will need your attention (for details, please refer to [“About File Formats in Google Drive” section on the Google Drive page](../#format) ).
  ### Procedure
  - In Google Drive, please navigate to the folder where the file you would like to edit is located.
- - Double-click the name of the file you would like to edit. A screen of the corresponding Google service will be displayed in a new tab so that you can edit the file.
+ - Double-click the file you would like to edit. A screen of the corresponding Google service will be displayed in a new tab and you can edit the file.
  ## How to upload files
  Here, we will explain how to upload files to Google Drive.
- Any type of file, including images, videos, audio, etc., can be uploaded to Google Drive. However, regarding Microsoft Office format files such as Word or Excel, as they are not 100% compatible, there may be some parts that will need your attention (for details, please refer to [“File types in Google Drive” section on the Google Drive page](../../../google/drive/index.md#format) (an English translation is planned)).
+ Any type of file, including images, videos, audio, etc., can be uploaded to Google Drive. However, regarding Microsoft Office format files such as Word or Excel, as they are not completely compatible, there may be some parts that will need your attention (for details, please refer to [“About File Formats in Google Drive” section on the Google Drive page](../#format)).
  ### Procedure
  - In Google Drive, please navigate to the folder where you would like to upload your files.
  ⋯
  ## How to download files
  Here, we will explain how to download files from Google Drive.
- Files of Google services such as Google Docs can be downloaded after converting them to the corresponding Microsoft Office format (for details, please refer to [“File types in Google Drive” section on the Google Drive page](../../../google/drive/index.md#format) (an English translation is planned)).
+ Files of Google services such as Google Docs can be downloaded after converting them to the corresponding Microsoft Office format (for details, please refer to [“About File Formats in Google Drive” section on the Google Drive page](../#format))
  ### Procedure
- - In Google Drive, please navigate to the folder containing the file you wish to edit.
+ - In Google Drive, please navigate to the folder containing the file you wish to download.
  - Please right-click the file (or folder) you wish to download and select “Download” in the context menu that appears.![](/_astro/file-contextmenu-download.webp)
  - After a screen for selecting files opens, please choose the download destination folder.
  - The files will be downloaded.
-   - Folders will be downloaded in a compressed .zip format.
+   - Folders will be downloaded in a compressed ‘.zip’ format.
  You can also download multiple files as a file batch. Specifically, on the folder screen, you can select multiple files by holding down the Ctrl key (Windows) or ⌘ key (Mac) and choosing the files. After selecting the files of your choice, click “Download” in the right-click menu that appears. The selected files will be downloaded.
- ### Appendix
- If you wish others to be able to view or edit a file, instead of sending the downloaded files as email attachments, etc., it is more convenient to use the sharing feature by granting direct access to files on the Google Drive to others. With the sharing feature, changes will be immediately shown to your collaborators, and multiple people can edit files simultaneously. The sharing feature helps reduce the hassle of managing files via email. For information about the sharing feature, please refer to the [“Share files on Google Drive”](../../../../google/drive/share/) (an English translation is planned) page.
+ ### Tip: Sharing files instead of downloading
+ If you wish others to be able to view or edit a file, instead of sending the downloaded files as email attachments, etc., it is more convenient to use the sharing feature by granting direct access to files on the Google Drive to others. With the sharing feature, changes will be immediately shown to your collaborators, and multiple people can edit files simultaneously. The sharing feature helps reduce the hassle of managing files via email. For information about the sharing feature, please refer to the [“Sharing Files on Google Drive” page](../share/).
  ## How to create folders
  Here, we will explain how to create folders on Google Drive.
  ⋯
  - In the dialogue box titled “New folder” that is displayed, please enter the name of the folder.![](/_astro/new-folder-dialog.webp)
  - Please click “Create” at the bottom right of the dialogue box. The new folder will be created.
- ## How to move the files
- Here we will explain how to move a file in Google Drive by changing the folder where it is located.
+ ## How to move files
+ Here, we will explain how to move a file in Google Drive by changing the folder where it is located.
  ### Procedure
  - Please right-click the file you wish to move and select “Organize” → ”Move” in the context menu that appears.![](/_astro/file-contextmenu-organize-move.webp)
  ⋯
    ![](/_astro/move.webp)
  - Please click “Move” at the bottom of the display. The file will be moved to the selected folder.
- You can also move multiple files as a file batch. Specifically, on the folder screen, you can select multiple files by holding down the Ctrl key (Windows) or ⌘ key (Mac). After selecting the files of your choice, click “Organize” → ”Move” in the right-click menu that appears. The selected files will be moved to the desired location.
+ You can also move multiple files at once. Specifically, on the folder screen, you can select multiple files by holding down the Ctrl key (Windows) or ⌘ key (Mac). After selecting the files of your choice, click “Organize” → ”Move” in the right-click menu that appears. The selected files will be moved to the desired location.
```

[← 一覧へ](<../README.md>)
