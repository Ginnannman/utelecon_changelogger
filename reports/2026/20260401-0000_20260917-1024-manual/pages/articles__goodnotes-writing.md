# GoodNotes 5 で板書をする

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/articles/goodnotes-writing/`](<https://utelecon.adm.u-tokyo.ac.jp/articles/goodnotes-writing/>) | [`src/pages/articles/goodnotes-writing/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/articles/goodnotes-writing/index.mdx>) |
| English | 変更 | [`/en/articles/goodnotes-writing/`](<https://utelecon.adm.u-tokyo.ac.jp/en/articles/goodnotes-writing/>) | [`src/pages/en/articles/goodnotes-writing/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/articles/goodnotes-writing/index.mdx>) |

## 日本語

```diff
  
  # GoodNotes 5 で板書をする
+ ［お断り］このページの内容の一部は，相当古い時点の情報に基づいています．最新の状態とは異なる可能性があるため，注意してください．
  ## この記事のハイライト
  - この記事では，GoodNotes 5を用いて画面上で板書を行う方法について紹介しています．
  ⋯
      - iPad：iPadOS 12.0 以降
      - iPhoneまたはiPod touch：iOS 12.0 以降
-     - Mac：MacOS 10.15 以降
+     - Mac：macOS 10.15 以降
      - Windowsには対応していません
    - 必須またはオプションのアクセサリ
  ⋯
  ![](/_astro/pic20.webp)
  描画した文字や図形を選択して移動したり，文字・図形の拡大や消去をすることが可能なツールです．
- （例）下の画像は，シェイプツールで作成した楕円（だえん）を移動させるために、なげなわツールで楕円を選択している様子です．
+ （例）下の画像は，シェイプツールで作成した楕円（だえん）を移動させるために，なげなわツールで楕円を選択している様子です．
  ![](/_astro/pic21.webp)
  ### 画像ツール
  ⋯
  タッチした位置にポインタを表示させるツールです．
  タッチ操作を追尾してポインタが動くタイプと，タッチ操作を始めてから画面からApple Pencilを離すまでのポインタの軌跡が表示されるタイプの2種類があります．
- ↓タッチ操作を追尾してポインタが動くタイプ
- ![](/_astro/pic35.webp)
- ↓タッチ操作を始めてから画面からApple Pencilを離すまでのポインタの軌跡が表示されるタイプ
- ![](/_astro/pic36.webp)
+ ↓タッチ操作を追尾してポインタが動くタイプ ![](/_astro/pic35.webp)
+ ↓タッチ操作を始めてから画面からApple Pencilを離すまでのポインタの軌跡が表示されるタイプ ![](/_astro/pic36.webp)
  ## 授業での使用方法
  ### 準備
  #### ホワイトボードとしての準備
- 何も書かれていない状態のページにリアルタイムで書き込みをしていくことで，対面授業におけるホワイドボードや黒板での板書をGoodNotes 5で再現できます．
+ 何も書かれていない状態のページにリアルタイムで書き込みをしていくことで，対面授業におけるホワイトボードや黒板での板書をGoodNotes 5で再現できます．
  以下では，新しいノートの作成方法を説明します．
  - GoodNotes 5を開き，画面下の「書類」を選択します．
- - 新しいノートを作成したいフォルダに移動して，「新規…」をタップします．![](/_astro/pic52.webp)
- - 表示されたメニューから「ノート」をタップします．![](/_astro/pic53.webp)
- - 表紙の有無や，用紙の色やサイズ，縦・横の向き，けい線の種類等を選択し，「作成」をタップします．![](/_astro/pic54.webp)
+ - 新しいノートを作成したいフォルダに移動して，「新規…」をタップします．![](pic52.jpeg)
+ - 表示されたメニューから「ノート」をタップします．![](pic53.jpeg)
+ - 表紙の有無や，用紙の色やサイズ，縦・横の向き，けい線の種類等を選択し，「作成」をタップします．![](pic54.jpeg)
  - 白紙のノートが作成されます．
  #### 事前に用意しておいたPowerPointやPDFを読み込む
  ⋯
  - iPad上でGoogle ドライブを起動します．
    - アプリケーションは，[App Store](https://apps.apple.com/jp/app/google-%E3%83%89%E3%83%A9%E3%82%A4%E3%83%96-%E5%AE%89%E5%85%A8%E3%81%AA%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3-%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B8/id507874739)からインストールすることができます．
- - Google ドライブ上で開きたいファイル（PDF，Power Point，またはWordのファイル）があるフォルダまで移動し，開きたいファイルのファイル名の横に表示されている「・・・」をタップします．![](/_astro/pic41.webp)
- - 表示されたメニューから「アプリで開く」をタップします．![](/_astro/pic42.webp)
- - 「エクスポートの準備中」と表示されるので，準備が完了するまで待ちます．![](/_astro/pic43.webp)
- - 表示されたメニューから「GoodNotesで開く」をタップします．![](/_astro/pic44.webp)
+ - Google ドライブ上で開きたいファイル（PDF，Power Point，またはWordのファイル）があるフォルダまで移動し，開きたいファイルのファイル名の横に表示されている「・・・」をタップします．![](pic41.jpeg)
+ - 表示されたメニューから「アプリで開く」をタップします．![](pic42.jpeg)
+ - 「エクスポートの準備中」と表示されるので，準備が完了するまで待ちます．![](pic43.jpeg)
+ - 表示されたメニューから「GoodNotesで開く」をタップします．![](pic44.jpeg)
  - 自動でGoodNotes 5が起動し，「GoodNotesに読み込む」という画面が表示されます．GoodNotes 5内での保存場所を選択し，「新規ファイルとして読み込む」をタップしてください．
  （注）GoodNotes 5で別のファイルを開いていた場合は，「新規書類として読み込む」の他に「現在の書類に読み込む」という選択肢が表示されます．現在GoodNotes 5で開いている書類と事前作成資料を結合したい場合は，「現在の書類に読み込む」を選択してください．
  ⋯
  受講している学生とリアルタイムで板書を共有する最も簡単な方法は，GoodNotes 5を利用している画面をそのままZoomで画面共有することです．
  一般的なZoomの使い方については，「[Zoom](/zoom/)」を参考にしてください．
- - iPadでZoomの会議室を開き，メニューバーから「共有」をタップしてから，「画面」を選択してください．![](/_astro/pic37.webp)
- - 「ブロードキャストを開始」をタップします．![](/_astro/pic38.webp)
- - 「画面を共有しています」と表示されます．![](/_astro/pic39.webp)
- - iPadで開くアプリをZoomからGoodNotes 5に切り替えると，GoodNotes 5の画面が共有されます．画面共有中は画面右上に赤いマークが表示されます．![](/_astro/pic40.webp)
+ - iPadでZoomの会議室を開き，メニューバーから「共有」をタップしてから，「画面」を選択してください．![](pic37.jpeg)
+ - 「ブロードキャストを開始」をタップします．![](pic38.jpeg)
+ - 「画面を共有しています」と表示されます．![](pic39.jpeg)
+ - iPadで開くアプリをZoomからGoodNotes 5に切り替えると，GoodNotes 5の画面が共有されます．画面共有中は画面右上に赤いマークが表示されます．![](pic40.jpeg)
  本記事では詳述しませんが，「AirPlay（またはそのミラーリングソフト）」を用いた画面共有等の方法を用いることで，Macや一部のWindowsPCからiPadの画面を共有することも可能です．
  ### 板書をする
  ⋯
  ### Tips: GoodNotes 5でとった板書を書き出して資料化する
  板書をPDFや画像ファイル（.jpeg）に書き出すことで，授業後の復習用資料として板書内容を学生に共有することが可能です．以下では，資料化のための手順を記載します．
- - 「共有」をタップし，続いて表示される「すべてを書き出す」または「このページを書き出す」をタップします．「すべてを書き出す」を選択すると，全ページを資料化できます．「このページを書き出す」を選択すると，表示中のページのみを資料化することができます．![](/_astro/pic56.webp)
- - PDF・イメージ（.jpeg）・GoodNotesファイルの中から，書き出したいファイル形式を選択します．「ファイル名」にファイル名を記入し，「書き出す」をタップします．![](/_astro/pic57.webp)
- - 書き出したファイルを保存または共有するためのアプリケーションを選択します．書き出したファイルは，Googleドライブに保存したり，Slackやメールで添付送信をしたりすることができます．本記事ではGoogle ドライブに保存する場合の手順を紹介します．![](/_astro/pic58.webp)
- - Googleドライブ内の保存先フォルダを指定して，「ここに保存」をタップします．![](/_astro/pic59.webp)
- - 「アップロード」をタップします．![](/_astro/pic60.webp)
+ - 「共有」をタップし，続いて表示される「すべてを書き出す」または「このページを書き出す」をタップします．「すべてを書き出す」を選択すると，全ページを資料化できます．「このページを書き出す」を選択すると，表示中のページのみを資料化することができます．![](pic56.jpeg)
+ - PDF・イメージ（.jpeg）・GoodNotesファイルの中から，書き出したいファイル形式を選択します．「ファイル名」にファイル名を記入し，「書き出す」をタップします．![](pic57.jpeg)
+ - 書き出したファイルを保存または共有するためのアプリケーションを選択します．書き出したファイルは，Googleドライブに保存したり，Slackやメールで添付送信をしたりすることができます．本記事ではGoogle ドライブに保存する場合の手順を紹介します．![](pic58.png)
+ - Googleドライブ内の保存先フォルダを指定して，「ここに保存」をタップします．![](pic59.jpeg)
+ - 「アップロード」をタップします．![](pic60.jpeg)
```

## English

```diff
  
  # Writing on GoodNotes 5
+ Note: Some of the information on this page is based on information from some time ago and may not reflect the current situation.
  ## Highlights
  - This article introduces how to write on GoodNotes 5 as a digital whiteboard.
  ⋯
      - iPad：iPadOS 12.0 and later
      - iPhone or iPod touch：iOS 12.0 and later
-     - Mac：MacOS 10.15 and later
+     - Mac：macOS 10.15 and later
      - The app is incompatible with Windows OS
    - Required or optional accessories
  ⋯
      - Purchase GoodNotes 5 application with 980 yen.
      - Using either of the following styluses is recommended for iPads.
-       - Apple Pencil (1st generation) 10,800 yen (tax excluded) Apple Pencil (2nd generation) 14,500 yen (tax excluded)
+       - Apple Pencil (1st generation) 10,800 yen (tax excluded)
        - Apple Pencil (2nd generation) 14,500 yen (tax excluded)
      - (Not recommended) If you are using an iPhone, you can use a stylus (about 100 yen to 5,000 yen), and if you are using a Mac, you can use a pen tablet (about 5,000 to 20,000 yen).
  ⋯
  ![](/_astro/pic18.webp)
  Shape Tool allows you to draw geometric shapes on the page.
- When the tool is used to draw an eclipse, circle, rectangle, triangle or any other shapes, it will automatically correct the shape to a close match, as shown in the image below.
+ When the tool is used to draw an ellipse, circle, rectangle, triangle or any other shapes, it will automatically correct the shape to a close match, as shown in the image below.
  ![](/_astro/pic19.webp)
  ### Lasso Tool
  ⋯
  The following section explains how to create a new notebook.
  - Open GoodNotes 5 and select “Documents” at the bottom of the screen.
- - Navigate to the folder where you want to create a new notebook, and tap “New…”. ![](/_astro/pic52.webp)
- - Tap “Notebook” from the menu that appears. ![](/_astro/pic53.webp)
- - Select whether or not you want a cover, and choose the paper size, color, layout, and borderline type, etc.. Tap “Create” when you are done. ![](/_astro/pic54.webp)
+ - Navigate to the folder where you want to create a new notebook, and tap “New…”. ![](pic52.jpeg)
+ - Tap “Notebook” from the menu that appears. ![](pic53.jpeg)
+ - Select whether or not you want a cover, and choose the paper size, color, layout, and borderline type, etc.. Tap “Create” when you are done. ![](pic54.jpeg)
  - A blank notebook will be created.
  #### Importing Pre-prepared PowerPoint or PDF Files
  In GoodNotes 5, you can import PowerPoint, Word, PDF, and various image files, and write on them.
  The following section explains how to import files saved on Google Drive into GoodNotes 5.
- - Save the file you want to import into GoodNotes 5 to your Google Drive. For instructions, see “[Basic usage of Google Drive](/articles/google-drive/)”.
+ - Save the file you want to import into GoodNotes 5 to your Google Drive. For instructions, see “[Basic usage of Google Drive](/en/articles/google-drive/)”.
  - Open Google Drive on your iPad.
    - You can install Google Drive from [App Store](https://apps.apple.com/jp/app/google-%E3%83%89%E3%83%A9%E3%82%A4%E3%83%96-%E5%AE%89%E5%85%A8%E3%81%AA%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3-%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B8/id507874739).
- - Navigate to the folder that contains the file you want to open in Google Drive (PDF, Power Point, or Word file), and tap the ”…” button next to the file name of the file. ![](/_astro/pic41.webp)
+ - Navigate to the folder that contains the file you want to open in Google Drive (PDF, Power Point, or Word file), and tap the ”…” button next to the file name of the file. ![](pic41.jpeg)
  - Tap “Open in” from the menu that appears．![](/_astro/pic42.webp)
- - The message “Preparing to export” will be displayed. Wait until the download is ready. ![](/_astro/pic43.webp)
- - Tap “Open in GoodNotes” from the menu that appears. ![](/_astro/pic44.webp)
+ - The message “Preparing to export” will be displayed. Wait until the download is ready. ![](pic43.jpeg)
+ - Tap “Open in GoodNotes” from the menu that appears. ![](pic44.jpeg)
  - GoodNotes 5 will open automatically with the screen “Import to GoodNotes” appearing. Select the location where you want to save the file in GoodNotes 5, and tap “Import as New Document”.
  (Note) If you have opened another file in GoodNotes 5, you will see the option “Import into Current Document” in addition to “Import as New Document”. If you want to combine the document currently opened in GoodNotes 5 with a premade document, select “Import into Current Document”.
  ⋯
  The simplest way to share the handwriting with students in real time is to share the GoodNotes 5 screen with Zoom.
  For general information on how to use Zoom, please refer to “[Zoom](/en/zoom/)”.
- - Join the Zoom meeting with your iPad. Tap “Share Content” from the menu bar and select ”Screen”. ![](/_astro/pic37.webp)
- - Tap “Start BroadCast”. ![](/_astro/pic38.webp)
- - The message “You are sharing your screen” will be displayed. ![](/_astro/pic39.webp)
- - When you switch the application from Zoom to GoodNotes 5, the screen of GoodNotes 5 will be shared. A red mark will appear in the upper right corner of the screen while the screen is being shared. ![](/_astro/pic40.webp)
+ - Join the Zoom meeting with your iPad. Tap “Share Content” from the menu bar and select ”Screen”. ![](pic37.jpeg)
+ - Tap “Start BroadCast”. ![](pic38.jpeg)
+ - The message “You are sharing your screen” will be displayed. ![](pic39.jpeg)
+ - When you switch the application from Zoom to GoodNotes 5, the screen of GoodNotes 5 will be shared. A red mark will appear in the upper right corner of the screen while the screen is being shared. ![](pic40.jpeg)
  Although not described in detail in this article, it is also possible to share the iPad screen from a Mac or Windows PC by using a method such as screen sharing using “AirPlay (or its screen mirroring software)”.
  ### Writing
  ⋯
  - [Professor Tadashi Shiraishi: Law I](/good-practice/interview/shiraishi/)
    - Professor Shiraishi’s class was a large class with about 400 students. He used GoodNotes 5 for handwriting during the lecture. After the lecture, images of the handwriting were uploaded to Scrapbox (now: Cosense).
- - [Professor Norikazu Saito: Numerical Mathematics I / Computational Mathmatics](/good-practice/interview/saito/)
+ - [Professor Norikazu Saito: Numerical Mathematics I / Computational Mathematics](/good-practice/interview/saito/)
    - Professor Saito’s class was a medium-sized lecture with about 70 students. He used GoodNotes 5 for handwriting during the lecture, and shared the images of the handwriting as PDF files with the students after the lecture.
  The following are some of the tips shared by the professors.
- ### Tips: Converting the Handwriting in Goodnotes 5 Into Documents
+ ### Tips: Converting the Handwriting in GoodNotes 5 Into Documents
  By exporting the notes to PDF or image files (.jpeg), you can share the notes with your students as a review material after the class. The following is a description of the procedure for creating a document.
  - Tap “Share and Export”, and then tap “Export All” or “Export This Page”. If you select “Export All”, all pages will be documented. If you select “Export This page”, you can export only the page you are viewing as a document.
-   ![](/_astro/pic56.webp)
+ ![](pic56.jpeg)
  - Select the file format you want to export from among PDF, image (.jpeg), and GoodNotes files. Enter a file name in the “FILENAME” field, and tap “Export”.
-   ![](/_astro/pic57.webp)
+ ![](pic57.jpeg)
  - Tap the application you want to open the exported file. You can save the exported file to Google Drive, or send it as an attachment via Slack or email. In this article, we will show you how to save the file to Google Drive.
-   ![](/_astro/pic58.webp)
+ ![](pic58.jpeg)
  - Select the destination folder in Google Drive, and tap “Save here”.
-   ![](/_astro/pic59.webp)
+ ![](pic59.jpeg)
  - Tap “Upload”.
-   ![](/_astro/pic60.webp)
+ ![](pic60.jpeg)
```

[← 一覧へ](<../README.md>)
