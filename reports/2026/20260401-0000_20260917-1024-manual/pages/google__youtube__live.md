# クラウドメールアカウントでのYouTubeライブ配信方法

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/google/youtube/live/`](<https://utelecon.adm.u-tokyo.ac.jp/google/youtube/live/>) | [`src/pages/google/youtube/live/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/google/youtube/live/index.mdx>) |
| English | 変更なし | [`/en/google/youtube/live/`](<https://utelecon.adm.u-tokyo.ac.jp/en/google/youtube/live/>) | [`src/pages/en/google/youtube/live/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/google/youtube/live/index.mdx>) |

## 日本語

```diff
  説明: 目次: 利用上の注意点; ライブ配信の設定; 参考ページ...
  
- [ECCSクラウドメール](/google/) > YouTube ライブ
+ [ECCSクラウドメール](/google/) > [YouTube](/google/youtube/) > YouTube ライブ
  # クラウドメールアカウントでのYouTubeライブ配信方法
  ［お断り］このページの内容の一部は，相当古い時点の情報に基づいています．最新の状態とは異なる可能性があるため，注意してください．
  2020年3月10日 公開
  このページでは，ECCSクラウドメールアカウントでYouTubeのライブ配信機能を利用する方法，特にライブ配信機能の有効化と配信について紹介します．学内の各種行事等でライブ配信が必要な場合にご活用ください．
+ ZoomミーティングやウェビナーをYouTubeで配信したい場合は，「[ZoomミーティングやウェビナーをYouTubeでストリーミング配信する](./streaming/zoom/)」を参照してください．また，配信の公開範囲（東大構成員限定での公開など）の設定方法については「[YouTube動画の公開範囲を設定する](../sharing/)」を参照してください．
  ライブ配信時には配信範囲を「公開」「限定公開」にするかの設定にご注意ください．「公開」と設定した場合にはYouTubeを通じて任意の人が配信を閲覧可能になります．「限定公開」と設定した場合には，当該配信専用に生成されるURLを知っている人のみが閲覧できます．一般に公開したくない配信の場合は「限定公開」をご利用ください．
  ## 利用上の注意点
  ⋯
  ### ライブ配信の有効化⼿順
  YouTubeチャンネルを作成してからライブ配信ができるようになるまで24時間程度かかるため，時間に余裕をもって行ってください．
- - ECCSクラウドメールアカウントでYouTubeにログインしてください． ![](/_astro/home.webp)
- - YouTubeチャンネルの作成を⾏います．右上のカメラアイコンを押してください． ![](/_astro/create-channel.drawio.webp)
- - 「始める」を押してください． ![](/_astro/create-channel-start.drawio.webp)
- - チャンネル名を設定してください．ここでは「自分の名前を使う」を選択しています． ![](/_astro/create-channel-name.drawio.webp)
- - 詳細情報を⼊⼒します．
-   - 「SET UP LATER」を押して先に進むこともできます．
-   - これでチャンネルの作成が完了します．
-   ![](/_astro/create-channel-detail.drawio.webp)
- - ホーム画⾯を開き，再度カメラアイコンを押してください． ![](/_astro/home-camera.drawio.webp)
- - 「ライブ配信を開始」を選択してください． ![](/_astro/start-live-1.drawio.webp)
- - アカウントを確認します．
-   a. 確認⽅法を選択してください．電話⾳声もしくはSMSによる通知を選べます． ![](/_astro/verify-account-1.drawio.webp) b. 電話番号を⼊⼒してください． ![](/_astro/verify-account-2.drawio.webp) c. 受け取った６桁のコードを⼊⼒してください． ![](/_astro/verify-account-3.drawio.webp) d. アカウントの確認が成功したら，「次へ」を押してください． ![](/_astro/verify-account-4.drawio.webp)
- - 再度ホーム画面を開き，「ライブ配信の開始」を選択してください． ![](/_astro/start-live-2.drawio.webp)
- - ライブ配信が有効化されるまで待ちます．
-   - ここまでの⼿続きから有効化されるまで24時間程度かかります．
-   ![](/_astro/live-wait.webp)
+ あらかじめ，ECCSクラウドメールアカウントでYouTubeのチャンネルを作成しておく必要があります．チャンネルの作成手順については「[チャンネルを作成する](../#create-channel)」を参照してください．チャンネルを作成したら，以下の手順でライブ配信を有効化してください．
+ - ホーム画⾯を開き，画面右上の「+作成」ボタンを押してください． ![](/_astro/create-channel.drawio.webp)
+ - 「ライブ配信を開始」を選択してください． ![](/_astro/create-live-start.drawio.webp)
+ - 「ライブ配信へのアクセスのリクエスト」の画面が出てくるので，「リクエスト」ボタンを押してください． ![](/_astro/request-live-streaming.webp)
+ - [アカウントの確認](https://support.google.com/youtube/answer/171664)を行います．
+   - 「確認」ボタンを押してください． ![](/_astro/verify-account-0.drawio.webp)
+   - 画面右側のアイコンから，開いている画面がライブ配信をしたいアカウントのものであることを確認してください．
+   - 確認⽅法を選択してください．電話⾳声もしくはSMSによる通知を選べます． ![](/_astro/verify-account-1.drawio.webp)
+   - 国が入力する電話番号のものになっているのを確認した上で，電話番号を入力してください． ![](/_astro/verify-account-2.drawio.webp)
+   - 受け取った６桁のコードを⼊力してください． ![](/_astro/verify-account-3.drawio.webp)
+   - アカウントの確認が成功したら，元のページに戻ってください． ![](/_astro/verify-account-4.drawio.webp)
+ - ライブ配信が有効化されるまで24時間程度待ってください． ![](/_astro/live-wait.webp)
  ### ライブ配信の開始
  [ライブ配信の有効化](#enable-live)が完了した後に実施してください．
- - ホーム画面を開き，「ライブ配信の開始」を選択してください． ![](/_astro/start-live-2.drawio.webp)
- - ライブ配信の情報を⼊⼒します．
-   a. 配信タイトル ![](/_astro/live-name.drawio.webp) b. 公開種別の選択
+ - ホーム画面を開き，画面右上の「+作成」ボタンを押して，「ライブ配信の開始」を選択してください． ![](/_astro/start-live.drawio.webp)
+ - 「ウェブカメラ」を押してください． ![](/_astro/live-studio.drawio.webp)
+ - ライブ配信の情報を⼊力します．
+   - 配信タイトル ![](/_astro/live-name.drawio.webp)
+   - 視聴対象と年齢制限
+     - 必要に応じて視聴対象と年齢制限を設定してください．「この動画は子ども向けですか？」は，通常は「いいえ、子ども向けではありません」を選択してください． ![](/_astro/live-age.drawio.webp)
+ - チャットの有効・無効を選択します．
+   - 「カスタマイズ」には視聴者からのチャットを有効化するか否かの項⽬があります．
+   - 初期状態は有効になっていますので，必要に応じてチェックボックスを外して無効にしてください． ![](/_astro/live-chat.drawio.webp)
+ - 公開種別を選択します．
    - 「公開」「限定公開」「⾮公開」から適切なものを選択してください．
    - 「公開」にするとYouTubeで⼀般に公開されて配信されますのでご注意ください．
-   - 「限定公開」ですとライブURLを知っている⼈のみが視聴できます．
-   * 以後は「限定公開」を想定し説明します．
-   ![](/_astro/live-public.drawio.webp)
-   c. 視聴対象と年齢制限 ![](/_astro/live-age.drawio.webp) d. カメラ・マイクの選択
-   - 内臓カメラ・マイク以外に，USBカメラ・マイクも選択できます．
-   ![](/_astro/live-camera.drawio.webp) e. チャット許可・不可の選択（「詳細設定」内）
-   - 詳細設定には視聴者からのチャットを許可するか否かの項⽬があります．
-   - 初期状態は許可になっていますので，必要に応じて不可にしてください．
-   - 前の画⾯に戻り「次へ」を押してください．
-   ![](/_astro/live-chat.drawio.webp)
- - カメラ画像・設定を確認し，「ライブ配信を開始」を押してください． ![](/_astro/live-start.drawio.webp)
+   - 「限定公開」にするとライブURLを知っている⼈のみが視聴できます．
+   * 以後は「限定公開」を想定し説明します． ![](/_astro/live-public.drawio.webp)
+ - カメラとマイクを設定し，ストリームのプレビューを確認します．
+   - 「動画」からカメラを選択し，「音声」からマイクを選択してください．
+     - 内蔵カメラ・マイク以外に，USBカメラ・マイクも選択できます．
+   - カメラ画像，カメラとマイク設定，公開種別（「プライバシー」）を確認し，「ライブ配信を開始」を押してください． ![](/_astro/live-start.drawio.webp)
  - 配信が開始されます．
-   - 配信中の映像が表⽰されます．
-   ![](/_astro/live.drawio.webp)
-   - 「限定公開」⽤のURLは画⾯下部の⽮印を押すと表⽰できます．
-     - URLをコピーし，視聴して欲しい⼈にメール等で共有してください．
-     ![](/_astro/share-url.drawio.webp)
- - 配信を終了するには，配信画⾯下部の「ライブ配信を終了」を押してください． ![](/_astro/live-end.drawio.webp)
+   - 配信中の映像が表⽰されます． ![](/_astro/live.drawio.webp)
+   - 「限定公開」⽤のURLは画⾯右上部の⽮印を押すと表⽰できます． ![](/_astro/live-share.drawio.webp)
+     - URLをコピーし，視聴して欲しい⼈にメール等で共有してください． ![](/_astro/live-share-url.drawio.webp)
+ - 配信を終了するには，画⾯右上部の「ライブ配信を終了」を押してください． ![](/_astro/live-end.drawio.webp)
  ## 参考ページ
  ライブ配信を行うにあたってはYouTubeの公式ヘルプページにある下記の情報を適宜ご参照ください．
```

[← 一覧へ](<../README.md>)
