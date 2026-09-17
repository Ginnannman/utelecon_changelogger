# Googleドキュメント

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/google/document/`](<https://utelecon.adm.u-tokyo.ac.jp/google/document/>) | [`src/pages/google/document/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/google/document/index.md>) |
| English | 変更 | [`/en/google/document/`](<https://utelecon.adm.u-tokyo.ac.jp/en/google/document/>) | [`src/pages/en/google/document/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/google/document/index.mdx>) |

## 日本語

```diff
  このページでは，Googleドキュメントの基本的な使い方について紹介します．
  ## Googleドキュメントとは
- Googleドキュメントはオンラインで文書の作成，編集が行えるサービスです．Googleドライブ上に文章を保存するため，ファイルを共有することで複数人が共同で編集作業を行うこともできます．Googleドライブについての詳細は，[Googleドライブの説明ページ](drive/)を参照してください．
+ Googleドキュメントはオンラインで文書の作成，編集が行えるサービスです．Googleドライブ上に文書を保存するため，ファイルを共有することで複数人が共同で編集作業を行うこともできます．Googleドライブについての詳細は，[Googleドライブの説明ページ](../drive/)を参照してください．
  ### 東京大学のアカウントでの利用
  東京大学では，Google社のサービス「Google Workspace」が，「[ECCSクラウドメール](/google/)」として提供されています．Googleドキュメントもその一部に含まれているため，東京大学の構成員は，ECCSクラウドメールのアカウントでGoogleドキュメントを利用することができます．
  ### ファイルの形式について
- Googleドキュメントのファイルは，[Google独自の形式のファイル](drive/#format)になります．Googleドキュメントは，Microsoft Wordの形式に変換することが可能であり，アップロードしたMicrosoft Office形式のファイルをGoogleのサービス上で編集することも可能です．
+ Googleドキュメントのファイルは，[Google独自の形式のファイル](../drive/#format)になります．Googleドキュメントは，Microsoft Wordの形式に変換することが可能であり，アップロードしたMicrosoft Office形式のファイルをGoogleのサービス上で編集することも可能です．
  ただし，完全な互換性があるわけではなく，Microsoft Word形式のファイルをGoogleドキュメント上で表示・編集した場合，見た目が崩れてしまうことや，非対応の機能に関する情報が消えてしまうことがあるため，注意が必要です．
  ## 利用手順
  ⋯
  スマートフォンやタブレットでGoogleドキュメントを利用する方法については，[Googleドキュメントのスマートフォン・タブレット向けアプリについて](#mobile-app)を参照してください．
  ### ドキュメントの作成
- Googleドキュメントの作成は，Googleドライブ上で行うことができます．[Googleドライブ](https://drive.google.com/drive/)にアクセスし，[ファイルを作成する](drive/basic/#create-file)を参照してドキュメントの作成を行ってください．
- なお，Googleドライブにアクセスした際，ログインしていない場合はログインするよう求められますので，[ECCSクラウドメールのページの「利用開始の手順」](/eccs_cloud_email/#initial-setup)を参照してログインしてください．
+ Googleドキュメントの作成は，Googleドライブ上で行うことができます．[Googleドライブ](https://drive.google.com/drive/)にアクセスし，[ファイルを作成する](../drive/basic/#create-file)を参照してドキュメントの作成を行ってください．
+ なお，Googleドライブにアクセスした際，ログインしていない場合はログインするよう求められますので，[ECCSクラウドメールのページの「利用開始の手順」](/google/#initial-setup)を参照してログインしてください．
  ### ドキュメントの編集
  ここでは，Googleドキュメントを編集する際に役立つ機能を紹介します．
- Googleドキュメントは，Word等の文書作成ソフトウェアと同様のやり方で書き進めます． ![](/_astro/screen.webp)
+ Googleドキュメントは，Word等の文書作成ソフトウェアと同様のやり方で書き進めます． ![](/_astro/docs01.webp)
  #### 見出しの設定
  見出しを設定することで，見出しの見た目を統一させ，文書を階層的に構成することができます．
  見出しにしたい箇所を選択し，「標準テキスト」となっているところをクリックしてください．
- 以下のような選択肢が出てくるので，適当な見出しを選び，見出しの設定をしてください． ![](/_astro/heading.webp)
- ![](/_astro/heading_example.webp)
+ 以下のような選択肢が出てくるので，適当な見出しを選び，見出しの設定をしてください． ![](/_astro/docs02.webp)
+ ![](/_astro/docs03.webp)
  上の例では，「【議事録】」を「見出し2」に，「会議の流れ」「前回までの流れ」「各班進捗報告」「今後の方針」「まとめ」をそれぞれ「見出し3」に設定しました．
- また，Windowsでは「Ctrl+Alt+（1〜6）」，Macでは「⌘＋option＋（1〜6）」のショートカットキーを用いて見出しを設定することもできます.
+ また，Windowsでは「Ctrl+Alt+（1〜6）」，Macでは「⌘＋option＋（1〜6）」のショートカットキーを用いて見出しを設定することもできます．
  #### 番号付きリスト
  番号付けしたい箇所を選択し，ツールバーにある「番号付きリスト」を選択してください．
- もしくはWindowsでは「Ctrl+Shift+7」，Macでは「⌘＋Shift＋7」のショートカットキーを用いて「番号付きリスト」を設定することもできます. ![](/_astro/numbered_list.webp)
+ もしくはWindowsでは「Ctrl+Shift+7」，Macでは「⌘＋Shift＋7」のショートカットキーを用いて「番号付きリスト」を設定することもできます． ![](/_astro/docs04.webp)
  #### 箇条書き
  箇条書きにしたい箇所を選択し，ツールバーにある「箇条書き」を選択してください．
- もしくはWindowsでは「Ctrl+Shift+8」，Macでは「⌘＋Shift＋8」のショートカットキーを用いて「箇条書き」を設定することもできます. ![](/_astro/bulleted_list.webp)
+ もしくはWindowsでは「Ctrl+Shift+8」，Macでは「⌘＋Shift＋8」のショートカットキーを用いて「箇条書き」を設定することもできます． ![](/_astro/docs05.webp)
  一段深い階層の箇条書きを追加する場合は，Enterキーを押して箇条書きを追加したあと，Tabキーを押してください．
- 一段浅い階層の箇条書きを追加する場合は，Shift+Tabキーを押してください． ![](/_astro/list_hierarchy.webp)
+ 一段浅い階層の箇条書きを追加する場合は，Shift+Tabキーを押してください． ![](/_astro/docs06.webp)
+ また，以下のように，インデントオプションからも階層を変更することができます． ![](/_astro/docs07.webp)
  ## ドキュメントの共同編集について
  Googleドキュメントで作成した文書を共有することで，他のユーザーと共同編集を行うことができます．
  共有されたファイルをGoogleドライブ上で直接編集することで，ファイルをダウンロードして編集し再度アップロードする手間を省けるため，資料の共有や編集を生産性高く行うことができます．
- また，複数人で1つのファイルを同時に編集することも可能であるため，会議の議事録を複数人で協力してとるような使い方もできます．文章を共有して同時に編集している場合，他の人のカーソルは色がついた状態で表示されるため，誰がどの場所を編集しているかが分かるようになっています． 共有相手の編集権限（編集可能・閲覧のみなど）もそれぞれ選択できます． ![](/_astro/coedit.webp)
+ また，複数人で1つのファイルを同時に編集することも可能であるため，複数人で協力して会議の議事録をとる，といった使い方もできます．文章を共有して同時に編集している場合，他の人のカーソルは色がついた状態で表示されるため，誰がどの場所を編集しているかが分かるようになっています． 共有相手の編集権限（編集可能・閲覧のみなど）もそれぞれ選択できます． ![](/_astro/docs08.webp)
  ### ドキュメントの共有手順
- ドキュメントの共有方法には，「個別に相手を指定する」方法と「不特定の人をまとめて指定する」方法の2種類があります．編集画面右上の「共有」ボタンを押すと，[Googleドライブの共有手順](drive/share/#procedure)と同様の設定画面が開くため，「[個別に相手を指定して共有したい場合の設定手順](drive/share/#individual)」または「[不特定の人をまとめて指定したい場合の設定手順](drive/share/#procedure-specified)」の手順に従って共有の設定を行ってください．
+ ドキュメントの共有方法には，「個別に相手を指定する」方法と「不特定の人をまとめて指定する」方法の2種類があります．編集画面右上の「共有」ボタンを押すと，[Googleドライブの共有手順](../drive/share/#procedure)と同様の設定画面が開くため，「[個別に相手を指定して共有したい場合の設定手順](../drive/share/#individual)」または「[不特定の人をまとめて指定したい場合の設定手順](../drive/share/#procedure-unspecified)」の手順に従って共有の設定を行ってください．
  ## その他
  ### Googleドキュメントのスマートフォン・タブレット向けアプリについて
```

## English

```diff
  タイトル: Google Docs | utelecon
- 説明: Table of Contents: ...
+ 説明: Table of Contents: Introduction; What is Google Docs?; How to use; About collaborative editing of...
  
  [ECCS Cloud Email](/en/google/) > Google Docs
  # Google Docs
- Please wait for a while until this page is published. In the meantime, the Japanese version of this page might already be available. To switch languages, click the “日本語” button at the top right of the page (for PC users) or tap the “Menu” button at the top left, then select the “日本語” button at the top center (for smartphone users).
+ ## Introduction
+ This page introduces the basic use of Google Docs.
+ ## What is Google Docs?
+ Google Docs is a service that allows you to create and edit documents online. Since documents are saved online on Google Drive, they can be edited collaboratively by all users with access to the file. For more details on Google Drive, please refer to the “[Google Drive](../drive)” page.
+ ### Using Google Docs with a university account
+ At the University of Tokyo, Google’s “Google Workspace” service is provided as part of the “[ECCS Cloud Email](../)”. Since Google Docs is included in this service, members of the university can use Google Docs with their ECCS Cloud Email accounts.
+ ### About file formats
+ Though Google Docs uses [its own proprietary file format](../drive/#format), Google Docs can be converted into Microsoft Word format, and uploaded Microsoft Office format files can be edited on Google services.
+ However, please note that compatibility is not perfect. Viewing or editing a Microsoft Word file in Google Docs may result in layout distortions or the loss of information related to unsupported features.
+ ## How to use
+ This page explains how to use Google Docs on a web browser on a computer.
+ For information on using Google Docs on smartphones and tablets, please refer to the “[About Google Docs apps for smartphones and tablets](#mobile-app)” section.
+ ### Creating a document
+ You can create documents using Google Docs on Google Drive. Please access [Google Drive](https://drive.google.com/drive/) and refer to the “[How to create files](../drive/basic/#create-file)” page to create a document.
+ Please note that if you are not signed in to Google when accessing Google Drive, you will be prompted to sign in. Please refer to the “[Steps to Start Using Your ECCS Cloud Email](../#initial-setup)” section on the ECCS Cloud Email page to sign in.
+ ### Editing a document
+ This section introduces useful features for editing with Google Docs.
+ You can write in Google Docs similarly to how you would in document creation software like Microsoft Word. ![](/_astro/docs09.webp)
+ #### Setting headings
+ By setting headings, you can unify their appearance and structure your document hierarchically.
+ Select the text you want to turn into a heading and click on the “Normal text” menu.
+ A list of options like the following will appear, so choose the appropriate heading level to set it.
+ ![](/_astro/docs10.webp)
+ ![](/_astro/docs10_2.webp)
+ In the example above, “[Meeting Minutes]” is set to “Heading 2”, while “Meeting Agenda”, “Previous progress”, “Progress report from each team”, “Future direction”, and “Summary” are all set to “Heading 3”.
+ You can also set headings using the shortcut keys “Ctrl + Alt + (1-6)” on Windows, or “⌘ + option + (1-6)” on Mac.
+ #### Numbered lists
+ Select the text you want to number, and select the “Numbered list” icon on the toolbar.
+ Alternatively, you can set a “Numbered list” using the shortcut keys “Ctrl + Shift + 7” on Windows, or “⌘ + Shift + 7” on Mac. ![](/_astro/docs11.webp)
+ #### Bulleted lists
+ Select the text you want to write in bullet points, and select the “Bulleted list” icon on the toolbar.
+ Alternatively, you can set a “Bulleted list” using the shortcut keys “Ctrl + Shift + 8” on Windows, or “⌘ + Shift + 8” on Mac. ![](/_astro/docs12.webp)
+ To add a bullet point at a deeper hierarchical level, press the Enter key to add a new bullet, then press the Tab key. To return to a shallower hierarchical level, press the Shift + Tab keys.
+ ![](/_astro/docs13.webp)
+ Also, as shown below, you can change the hierarchical level using the indent options as well. ![](/_astro/docs14.webp)
+ ## About collaborative editing of documents
+ By sharing a document created in Google Docs, you can collaboratively edit it with other users.
+ Directly editing shared files on Google Drive saves you the trouble of downloading, editing, and re-uploading them, allowing you to share and edit materials with high productivity.
+ Furthermore, since multiple people can edit a single file at the same time, you can also use it to collaboratively take meeting minutes. When co-editing a document, each person’s cursor is displayed in a different color, so you can see who is editing which part. You can also assign different access levels (e.g. Editor, Viewer) to each user you share the document with. ![](/_astro/docs15.webp)
+ ### Steps for sharing documents
+ There are two ways to share documents: “sharing with specific individuals” and “sharing with unspecified groups of people”. Clicking the “Share” button in the upper right of the editing screen opens the same settings screen as [the sharing procedure in Google Drive (in Japanese)](/google/drive/share/#procedure). Please configure your sharing settings by following the instructions in “[Settings procedure for sharing with specific individuals (in Japanese)](/google/drive/share/#individual)” or “[Settings procedure for sharing with unspecified groups of people (in Japanese)](/google/drive/share/#procedure-unspecified)”.
+ ## Others
+ ### About Google Docs apps for smartphones and tablets
+ Google Docs is available as an app for smartphones and tablets, allowing you to view, create, and edit documents on your devices (viewing is also possible on a web browser). For detailed usage instructions, please refer to the [Google Docs Help](https://support.google.com/docs/answer/7068618?hl=ja&co=GENIE.Platform%3DAndroid&oco=0) page.
```

[← 一覧へ](<../README.md>)
