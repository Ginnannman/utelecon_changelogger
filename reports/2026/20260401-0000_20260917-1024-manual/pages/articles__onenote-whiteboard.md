# OneNoteで板書する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/articles/onenote-whiteboard/`](<https://utelecon.adm.u-tokyo.ac.jp/articles/onenote-whiteboard/>) | [`src/pages/articles/onenote-whiteboard/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/articles/onenote-whiteboard/index.mdx>) |
| English | 変更 | [`/en/articles/onenote-whiteboard/`](<https://utelecon.adm.u-tokyo.ac.jp/en/articles/onenote-whiteboard/>) | [`src/pages/en/articles/onenote-whiteboard/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/articles/onenote-whiteboard/index.mdx>) |

## 日本語

```diff
  
  # OneNoteで板書する
+ ［お断り］このページの内容の一部は，相当古い時点の情報に基づいています．最新の状態とは異なる可能性があるため，注意してください．
  ## 本記事のハイライト
  - この記事はOneNoteを用いた板書方法について書かれています．
  - OneNoteの主な使用場面
-   - 授業中のリアルタイムでの板書（ホワイドボード，ノートとして）
+   - 授業中のリアルタイムでの板書（ホワイトボード，ノートとして）
    - 別に用意しておいたPDF，PowerPointなどの資料を読み込み，それに書き込む形で板書
    - 授業資料・板書のページを予め作成する
  ⋯
  OneNoteはMicrosoft社が提供するアプリケーションの一つで，電子ノートとしての機能を備えています．授業ではリアルタイムの板書や，読み込んだスライドや文書（PDF，Power Point，Wordなどに対応）への手書きでの書き込みなどに用いることができます．
  本記事では主にタブレットとタッチペンを用いて板書をする，資料に書き込む方法について紹介します．
- ![](/_astro/pic01.webp)
+ ![](pic01.PNG)
  ### 仕様表
  - 提供元
  ⋯
  ペンや蛍光ペンで描画した文字や線を消すことができます．こちらのツールも実際の消しゴムと同じような感覚で使用できます．
  消しゴムのアイコンをクリックすると，ペンや蛍光ペンから消しゴムに切り替わります．消しゴムのアイコンをさらにタッチすることで消しゴムの大きさ(消す範囲の広さ)を変更できます．また，「ストローク」は触れたストローク(一筆分)のみを消去することができます．
- 以下は消しゴムの大きさの切り替えををする様子です．
+ 以下は消しゴムの大きさの切り替えをする様子です．
  【消しゴムの大きさの切り替え】
  ![消しゴムの大きさの切り替え](/_astro/pic07.webp)
  ⋯
  ### 準備
  #### ホワイトボードとしての準備
- 何も書かれていない状態のページにリアルタイムで書き込みをしていくことで，対面授業におけるホワイドボードや黒板での板書をOneNote上で再現できます．この場合，基本的に初期状態のまま始めることが出来ます．ペンの太さや用紙のスタイルなどで変更を加えたい場合は，これまで紹介した方法を参考に授業前に変更しておくとスムーズです．
+ 何も書かれていない状態のページにリアルタイムで書き込みをしていくことで，対面授業におけるホワイトボードや黒板での板書をOneNote上で再現できます．この場合，基本的に初期状態のまま始めることが出来ます．ペンの太さや用紙のスタイルなどで変更を加えたい場合は，これまで紹介した方法を参考に授業前に変更しておくとスムーズです．
  #### 事前に用意しておいたPowerPointやPDFを読み込む
  OneNoteではPowerPointなどで作成したファイル(PDF化した状態で)を読み込んで，そこに書き込みを加えていくことができます．ファイルのインポートは，上で紹介したPDFの挿入方法を参考にしてください．事前に用意しておいた資料を読み込んでおき，授業で書き込みをすると以下の画像のようになります．
- 【用意しておいた資料を読み込み，書き込みをした例】
- ![](/_astro/pic27.webp)
+ 【用意しておいた資料を読み込み，書き込みをした例】 ![](/_astro/pic27.webp)
  #### 事前にOneNoteのページを作成しておく
  OneNoteを用いて予め授業資料を作っておくことも可能です．板書が多い場合などは授業前に大枠を書いておくと，授業中の板書の負担が減ります．また，これまでに紹介したツールなどを用いてイラストや図表などを多く用いた資料も作ることができます．
  ⋯
  Zoomでの画面共有の方法は，uteleconの「[画面共有](/zoom/usage/screen_sharing/)」を参考にしてください．
  以下の画像はZoomを用いてOneNoteの画面共有を行った様子です．
- 【Zoomを用いた画面共有】
- ![](/_astro/pic28.webp)
+ 【Zoomを用いた画面共有】 ![](/_astro/pic28.webp)
  本記事では詳述しませんが，OneNoteをiPadを使用している場合は，「AirPlay（またはその他のミラーリングソフト）」を用いた画面共有を行うこともできます．
  ### 板書をする
  ⋯
  この方法で配布することのメリットとしては，一度リンクを共有すれば，以降の授業で加えていった板書や後から加えた変更が，リンクをその都度共有しなくとも受講生側に反映される（更新を促す必要はあり）ことが挙げられます．また，授業前にリンクを共有しておけば，受講生は板書に追いつけなくなったときに流れてしまった部分を見ることができます．
  リンクを共有する方法については以下の画像をご参照ください．
- 【リンクの送信の方法】
- ![](/_astro/pic29.webp)
- 【公開範囲・編集の許可】
- ![](/_astro/pic30.webp)
+ 【リンクの送信の方法】 ![](/_astro/pic29.webp)
+ 【公開範囲・編集の許可】 ![](/_astro/pic30.webp)
  #### PDFとして配布する
  OneNoteの画面はPDFとして配布することも可能です．
  PDFで配布することのメリットは，受講生が扱い慣れていることが多いため，管理や使用が楽な点にあります．
  以下の画像の「ページのコピーを送信」から共有，または保存すると，PDF化されます．
- 【PDF化して配布】
- ![](/_astro/pic31.webp)
+ 【PDF化して配布】 ![](/_astro/pic31.webp)
  ## グッドプラクティス・応用例の紹介
  - [入江薫 先生：数理統計I，Ⅱ](/good-practice/interview/irie/)
```

## English

```diff
  
  # Writing on OneNote
+ Note: Some of the information on this page is based on information from some time ago and may not reflect the current situation.
  ## Highlights
  - This article is about how to write on OneNote.
  ⋯
  OneNote is one of the applications provided by Microsoft, and it is equipped with the function of a digital notebook. It can be used in class for real-time writing on the board, and for handwriting on imported slides and documents such as PDF, PowerPoint, Word and other supported formats.
  In this article, we will mainly introduce how to use a tablet and a stylus to write on the board and documents.
- ![](/_astro/pic01.webp)
+ ![](pic01.PNG)
  ### Specifications
  - Source
  ⋯
    - Device and OS (For details, please refer to the [Official site](https://www.microsoft.com/en-us/microsoft-365/microsoft-365-and-office-resources).)
      - Windows (PC, Tablet, Phone, etc.)
-     - iOS (Mac, iPad, iPhone, etc.)
+     - iOS and macOS (Mac, iPad, iPhone, etc.)
      - Android (Smartphone)
      - Web
  ⋯
  In the desktop version, select “Paper Size” from the View tab to set the page size and orientation.
  Please refer to the following image for how to set the page size using the desktop version on a Windows PC.
- - Select the "View" tab. ![Select View Tab](/_astro/pic20.webp)
- - After selecting the View tab, select "Paper Size". ![Select the View tab and then select 'Paper size'](/_astro/pic21.webp)
+ - Select the “View” tab.
+   ![](/_astro/pic20.webp)
+ - After selecting the View tab, select “Paper Size”.
+   ![](/_astro/pic21.webp)
  ### Setting up Notebook Sections and Pages
  Pages are where you actually write your notes, and Notebook Sections are the categories you use to manage your pages.
  ⋯
  #### Import PowerPoint or PDF Files You Have Prepared in Advance
  In OneNote, you can import PowerPoint or PDF files and write on them. To import files, please refer to the procedure described above. The following image shows how to write on a prepared document in class.
- [An example of reading and writing on a prepared document]
- ![](/_astro/pic27.webp)
+ [An example of reading and writing on a prepared document] ![](/_astro/pic27.webp)
  #### Create a OneNote Page in Advance
  It is possible to create class materials in advance using OneNote. If you have a lot of notes to write on the board, you can write a rough outline before the class to reduce the burden of writing in class. It is also possible to create materials with many illustrations and diagrams by using the tools introduced so far.
  ⋯
  Please refer to “[Screen Sharing](/en/zoom/usage/screen_sharing/)” of utelecon on how to screen share via Zoom.
  The following image shows the Zoom screen sharing of OneNote.
- [Zoom-based screen sharing]
- ![](/_astro/pic28.webp)
+ [Zoom-based screen sharing] ![](/_astro/pic28.webp)
  If you are using OneNote with an iPad, you can also use “AirPlay (or other mirroring software)” for screen sharing, although it is not described in detail in this article.
  ### Writing on the Board
  ⋯
  One advantage of this method is that once the link is shared, the students will be able to see the notes and changes made in subsequent lessons without having to share the link each time (although they will still need to be reminded to update). Also, if you share the links before class, students can see the parts that were lost when they cannot keep up with the board.
  See the image below for instructions on how to share a link.
- [How to send a link]
- ![](/_astro/pic29.webp)
- [Publication scope and editing permissions]
- ![](/_astro/pic30.webp)
+ [How to send a link] ![](/_astro/pic29.webp)
+ [Publication scope and editing permissions] ![](/_astro/pic30.webp)
  #### Distributing as PDF
  OneNote screens can also be exported and distributed as PDFs.
  The advantage of distributing them as PDFs is that they are easier to manage and use, as students are likely to be familiar with them.
  You can share or save a PDF by clicking on “Send a copy of the page” in the image below.
- [Distribute as PDF]
- ![](/_astro/pic31.webp)
+ [Distribute as PDF] ![](/_astro/pic31.webp)
  ## Examples of Good Practices and Application
  - [Professor Kaoru Irie: Mathematical Statistics I, II (Japanese Only)](/good-practice/interview/irie/)
```

[← 一覧へ](<../README.md>)
