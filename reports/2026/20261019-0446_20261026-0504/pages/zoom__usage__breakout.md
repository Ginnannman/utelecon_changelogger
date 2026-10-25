# ブレイクアウトルーム機能の使い方

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/zoom/usage/breakout/`](<https://utelecon.adm.u-tokyo.ac.jp/zoom/usage/breakout/>) | [`src/pages/zoom/usage/breakout/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/b8d968c4567728c2d7eea38f166f9c4fef58af2b/src/pages/zoom/usage/breakout/index.mdx>) |
| English | 変更 | [`/en/zoom/usage/breakout/`](<https://utelecon.adm.u-tokyo.ac.jp/en/zoom/usage/breakout/>) | [`src/pages/en/zoom/usage/breakout/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/b8d968c4567728c2d7eea38f166f9c4fef58af2b/src/pages/en/zoom/usage/breakout/index.mdx>) |

## 日本語

```diff
  タイトル: ブレイクアウトルーム機能の使い方 | utelecon
- 説明: 目次: ブレイクアウトルームとは; ホストとしてブレイクアウトルーム機能の有効化; ホストによるブレイクアウトセッションの開始; ブレイクアウトセッション実施中のホスト側の操作; ブレイクアウト...
+ 説明: 目次: ブレイクアウトルームとは; ホストとしてのブレイクアウトルーム機能の有効化; ホストによるブレイクアウトセッションの開始; ブレイクアウトセッション実施中のホスト側の操作; ブレイクアウ...
  
  [Zoom](/zoom/) > [ミーティング中の操作方法](/zoom/usage/) > ブレイクアウトルーム機能の使い方
  ⋯
  東京大学のZoomアカウントで作成されたミーティングでは，最大で100個のブレイクアウトルームを作成できます．
  このページでは，ブレイクアウトセッションの実施方法と関連する機能についてまとめています．まず，ホスト向けにブレイクアウトルームの利用条件及びミーティング内でブレイクアウトルームを作成する方法を説明します．そして，ブレイクアウトセッション実行中にホストと参加者がそれぞれ実行できる機能についても解説します．
- ## ホストとしてブレイクアウトルーム機能の有効化
+ ## ホストとしてのブレイクアウトルーム機能の有効化
  ホストとしてブレイクアウトルームを作成し管理するためには，必ず事前に，Zoomウェブポータル上でブレイクアウトルーム機能を有効化しておく必要があります．
  ブレイクアウトルーム機能を有効にする手順は以下の通りです．
- - Zoomウェブポータルにサインインしてください．詳細は[「Zoom サインイン方法」のページの「ブラウザからサインインする方法」の項](/zoom/signin/#browser)を参照してください．
- - 「設定」から「ミーティング」というタブの中にある「ミーティング内（詳細）」に移動し，「ブレイクアウト ルーム - ミーティング」のトグルを押してオンにしてください．
+ - Zoomウェブポータルにサインインしてください．詳細は[「Zoom サインイン方法」のページの「ブラウザからサインインする方法」の項](./../../signin/#browser)を参照してください．
+ - ウェブポータルのトップ画面の右上の「プロフィール」から「設定」を開いてください． ![](/_astro/zoom_breakout_workplace_settings.webp)
+ - 「ミーティング」から「ミーティング内（詳細）」に移動し，「ブレイクアウトルーム - ミーティング」のトグルを押してオンにしてください．
  - ブレイクアウトルームに関連する機能について，必要な項目をオンにしてください．
  - 「保存」を押して変更を保存してください．
  ⋯
  各項目の詳細な説明は以下の場所に記載されています．
  - 「スケジューリング時に参加者をブレイクアウトルームに割り当てる」：「[事前に設定した割り当てを読み込む](#start-assignment-preloading)」を参照
- - 「参加者に向けてメッセージを配信する」及び「音声をブレイクアウトルームに配信する」：「[全ての参加者にメッセージまたは音声を配信する](#host-massage)」を参照
+ - 「参加者に向けてメッセージを配信する」及び「音声をブレイクアウトルームに配信する」：「[全ての参加者にメッセージまたは音声を配信する](#host-message)」を参照
  - 「ブレイクアウトルームの作成，名前変更，削除」：「[ルームに関する調整](#start-coordination-room)」を参照
  ## ホストによるブレイクアウトセッションの開始
  ⋯
  この章では，ホストによるブレイクアウトルーム機能の利用方法を，「ブレイクアウトルームの作成」，「ブレイクアウトルームへの割り当て」，「オプションの設定」，「ブレイクアウトルームの調整」の4段階で説明します．
  ### ブレイクアウトルームの作成
- ブレイクアウトセッションを開始するためには，まず最初に必要なブレイクアウトルームの数を入力し，各ルームに参加者を割り当てる方法を選んでください．ブレイクアウトルームの数は後で変更もできます．
+ ブレイクアウトセッションを開始するためには，まず最初に必要なブレイクアウトルームの数を入力し，各ルームに参加者を割り当てる方法を選んでください．ブレイクアウトルームの数は後で変更もできます．（事前の設定が必要です．「[ルームに関する調整](#start-coordination-room)」を参照）
  ブレイクアウトルームを実際に作成する手順は以下の通りです．
- - 画面下部の「ブレイクアウトルーム」（図中赤枠）を選択してください． ![](/_astro/zoom_breakout_icon_breakout_room.webp)
+ - ミーティング画面下部にある「ブレイクアウトルーム」（表示されていない場合は「詳細」を押すと出てきます）を押してください． ![](/_astro/zoom_breakout_icon_breakout_room.webp)
  - 次に，作成するブレイクアウトルームの数と，参加者をどのように割り当てるかを選択してください．
    - 参加者の割り当て方法については下の「[ブレイクアウトルームへの割り当て](#start-assignment)」で詳細を説明します．
  ⋯
  なお，ホストが割り当てを行うときは，割り当てる対象は参加者と共同ホストのみであり，ホスト自身を割り当てることはできません．また，共同ホストが割り当てを行うときは，割り当てを行っている共同ホスト自身とホストを割り当てることができません．
  #### 自動で割り当てる
- この割り当て方法を選んだ場合，参加者はホストが指定した数のブレイクアウトルームに自動的に割り当てられます．割り当てられる方法はランダムであり，それぞれのルームで人数が均等になるように分けられます．また，「割り当て時に共同ホストを含める」にチェックを入れると，共同ホストも他の参加者と同様に自動で割り当てられます．主に，一度きりのメンバーでのグループワークのときの利用が考えられます．
+ この割り当て方法を選んだ場合，参加者はホストが指定した数のブレイクアウトルームに自動的に割り当てられます．割り当てられる方法はランダムであり，それぞれのルームで人数が均等になるように分けられます．また，「共同ホストをブレイクアウトルームに含める」にチェックを入れると，共同ホストも他の参加者と同様に自動で割り当てられます．主に，一度きりのメンバーでのグループワークのときの利用が考えられます．
  ![](/_astro/zoom_breakout_allocate_co_host.webp)![](/_astro/zoom_breakout_allocate_randomly.webp)
  #### 手動で割り当てる / 参加者によるルーム選択を許可する
  ⋯
  - 対象のルームにカーソルを合わせて，「割り当て」を選んでください．
  - まだ割り当てられていない参加者の一覧が横に出るので，そのルームに割り当てたい参加者にチェックをつけて選択してください．
- - 1,2の操作を全てのルームについて行ってください．
+ - 1，2の操作を全てのルームについて行ってください．
  - 割り当てたい参加者が全員ブレイクアウトルームに割り当てられていることを確認してください．
  - 「すべてのルームを開く」を押すと，ブレイクアウトセッションが開始されます．
  ⋯
  なお，ブレイクアウトセッションの開始後，ホストや共同ホストの画面には「未割り当て」という項目が表示されることがあります．ここに名前がある参加者はどのルームにも振り分けられずメインミーティングに残っていることになります．割り当てを行いたい場合は，名前の横にカーソルを合わせると出てくる「割り当て先」を押し，未割り当ての参加者を参加させるルームを選択してください．
  ##### 手動で割り当てを行うときの工夫①
- 手動で割り当てるときの参加者一覧は名前でソートされて表示されます．そのため，参加者の名前をグループに応じた名前に設定する（番号やグループ名を名前の頭に挿入する）ことで，参加者の検索を簡単に行えます．名前の変更は，参加者が自身で行うことも，ホストが行うことも可能です．詳細は，[「Zoom ミーティング中の操作方法」のページ](/zoom/usage/)を参照してください．
+ 手動で割り当てるときの参加者一覧は名前でソートされて表示されます．そのため，参加者の名前をグループに応じた名前に設定する（番号やグループ名を名前の頭に挿入する）ことで，参加者の検索を簡単に行えます．名前の変更は，参加者が自身で行うことも，ホストが行うことも可能です．詳細は，[「Zoomミーティング中の操作方法」のページ](./../)を参照してください．
  ![](/_astro/zoom_breakout_allocation_assign_number.webp)
  ##### 手動で割り当てを行うときの工夫②
- 必要な数ちょうどのルームを作ると，全参加者を割り当てたかどうかを確認するためには，ルームの横に出る参加者数の合計を計算しなければなりません．作る必要があるルーム数に加えて1つ余分にルームを作ることで，より簡単に参加者の割り当て漏れを防ぐことができます．割り当てが完了した後に余分なルームに対して割り当てを試みると，「すべての参加者がブレイクアウトルームに割り当てられました．」とメッセージが表示されるので，確認が容易です．
+ 必要な数ちょうどのルームを作ると，全参加者を割り当てたかどうかを確認するためには，ルームの横に出る参加者数の合計を計算しなければなりません．作る必要があるルーム数に加えて1つ余分にルームを作ることで，より簡単に参加者の割り当て漏れを防ぐことができます．割り当てが完了した後に余分なルームに対して割り当てを試みると，「すべての参加者がブレイクアウトルームに割り当てられました。」とメッセージが表示されるので，確認が容易です．
  ![](/_astro/zoom_breakout_allocation_extra_room.webp)
  #### 事前に設定した割り当てを読み込む
  ブレイクアウトルームへの参加者の割り当ては，それぞれのミーティングにおいて毎回実施する必要があります．しかし，あらかじめ参加者が判明している場合は，Zoomウェブポータル上において，手動で割り当てを行う，または割り当てを記入したCSVファイルを取り込むことで，事前に参加者をルームに割り当てたミーティングを作成することが可能です．この機能を利用することで，例えば，授業前に，既に決まっている学生の班分けに基づいたブレイクアウトルームを準備できます．
  この割り当て方法を利用するには，Zoomウェブポータル上でブレイクアウトルーム機能とともに，「スケジューリング時に参加者をブレイクアウトルームに割り当てる」が有効化されている必要があります．有効化の手順は以下の通りです．
- - Zoomウェブポータルにサインインしてください．詳細は[「Zoom サインイン方法」のページの「ブラウザからサインインする方法」の項](/zoom/signin/#browser)を参照してください．
- - 「設定」から「ミーティング内（詳細）」に移動してください．
+ - Zoomウェブポータルにサインインしてください．詳細は[「Zoom サインイン方法」のページの「ブラウザからサインインする方法」の項](./../../signin/#browser)を参照してください．
+ - ウェブポータルのトップ画面の右上の「プロフィール」から「設定」を開いてください． ![](/_astro/zoom_breakout_workplace_settings.webp)
+ - 「ミーティング」から「ミーティング内（詳細）」に移動してください．
  - 「ブレイクアウトルーム」の下にある「スケジューリング時に参加者をブレイクアウトルームに割り当てる」をオンにしてください．
  Zoomウェブポータル上で割り当てが読み込まれたミーティングを作成する手順は以下の通りです．
- - Zoomウェブポータルにサインインしてください．詳細は[「Zoom サインイン方法」のページの「ブラウザからサインインする方法」の項](/zoom/signin/#browser)を参照してください．
- - 「ミーティング」内の「予定されているミーティング」を開いてください．
- - 割り当てが読み込まれたミーティングを新しく作成する場合は「ミーティングをスケジュール」を，すでに予定されているミーティングに割り当てを読み込む場合は「編集」を押してください．
- ![](/_astro/zoom_breakout_allocation_preloading_choose_meeting.webp)
- - 「オプション」で「表示」を押すと，オプション一覧が表示されます．その中から「ブレイクアウトルーム事前割り当て」をオンにすると，「ルームを作成」と「CSVからのインポート」が選択可能になります．手動で割り当てを行う場合は「ルーム作成」，割り当てを記入したCSVを利用する場合は「CSVからのインポート」を選択してください． ![](/_astro/zoom_breakout_allocation_preloading_check.webp)
+ - Zoomウェブポータルにサインインしてください．詳細は[「Zoom サインイン方法」のページの「ブラウザからサインインする方法」の項](./../../signin/#browser)を参照してください．
+ - 右上の「Zoom製品」から「ミーティング」をクリックし，「予定されているミーティング」を開いてください． ![](/_astro/zoom_breakout_zoom_product_meeting.webp)
+ - 割り当てが読み込まれたミーティングを新しく作成する場合は「ミーティングをスケジュール」を，すでに予定されているミーティングに割り当てを読み込む場合は「編集」を押してください． ![](/_astro/zoom_breakout_allocation_preloading_choose_meeting.webp)
+ - 「オプション」で「表示」を押すと，オプション一覧が表示されます．その中から「ブレークアウトルーム事前割り当て」をオンにすると，「ルームを作成」と「CSVからのインポート」が選択可能になります．手動で割り当てを行う場合は「ルームを作成」，割り当てを記入したCSVを利用する場合は「CSVからのインポート」を選択してください． ![](/_astro/zoom_breakout_allocation_preloading_check.webp)
  CSVファイルには，参加者が当日使用するZoomアカウントのメールアドレスとその人が割り当てられるブレイクアウトルームの名前が記入されている必要があります．東京大学のZoomアカウントを利用する場合は，メールアドレスとしてUTokyo Account（数字10桁の共通ID＋@utac.u-tokyo.ac.jp）を使います．詳細は，「[CSVファイルを用いてZoomのブレイクアウトルーム参加者を事前に割り当てる](https://www.sodan.ecc.u-tokyo.ac.jp/hack/zoom-pre-assign-breakout-rooms-with-csv/)」をご覧ください．
  定期的なミーティングでは，「ルームを作成」と「CSVからのインポート」に加えて，以前のミーティングで保存した割り当てを利用して参加者をブレイクアウトルームに事前に割り当てることも可能です．この方法については，後述する「[参加者の割り当てを保存する](#host-save-allocation)」で説明します．
  ⋯
  表示されたオプションのうち，必要な機能を設定して有効化します．
  ![](/_astro/zoom_breakout_option_list.webp)
- それぞれのオプション機能を，ミーティングのどのタイミングで影響するかとその目的で分けて説明します．なお，ルームを開いた後は「参加者によるルーム選択を許可する」以外のオプション項目は設定できないので，ご注意ください．
+ それぞれのオプション機能を，ミーティングのどのタイミングで影響するかとその目的で分けて説明します．なお，ルームを開いた後は「参加者によるルーム選択を許可する」と「参加者がメインセッションにいつでも戻ることを許可する」以外のオプション項目は設定できないので，ご注意ください．
  #### ブレイクアウトセッション開始時の設定
  ##### 参加者をブレイクアウトルームに自動的に移動させる
- この節では，「割り当て済みの全参加者を自動的にブレイクアウトルームに移動する」について説明します．この機能を利用すると，ブレイクアウトルームを開いたときに参加者がルームに移動するタイミングを制御できます．
- 「割り当て済みの全参加者を自動的にブレイクアウトルームに移動する」がオフになっている場合は，ホストがブレイクアウトルームを開いた後，参加者は「参加する」を押してからブレイクアウトルームに入室するため，参加者の移動タイミングに少しばらつきが生じます．
- 「割り当て済みの全参加者を自動的にブレイクアウトルームに移動する」がオンになっている場合，ホストが「すべてのルームを開く」を押してブレイクアウトセッションを開始した時点で，全参加者が割り当てられたルームに自動的に移動します．参加者のブレイクアウトルームへの移動漏れを防ぎたいときや，グループワークを行うときに有用です．
- ##### セッションの終了時間を設定する
- この節では，「ブレイクアウトルームは次の時間後に自動的に閉じます．」について説明します．この機能を利用すると，ブレイクアウトセッションを開始してから終了するまでの時間を設定できます．
- セッションの終了時間が設定されていない場合，ブレイクアウトセッションを終了させるには，ホストあるいは共同ホストがブレイクアウトルームを閉じるしか方法はなく，一度開いたルームは閉じなければ開かれたままです．
- ルームを決まった時間だけ開いておきたい場合は，「ブレイクアウトルームは次の時間後に自動的に閉じます．」をオンにして，ブレイクアウトルームを開いておく時間を入力します．設定した時間が経つと，自動的にブレイクアウトセッションが終了します．
- 一方で，セッションの終了時間は設定するものの，延長する可能性がある場合は，「時間切れ時に自分に通知」をオンにしてください．ブレイクアウトセッションの終了時間が来ると，ホストと共同ホストは通知を受け取ります．その際，「ブレイクアウトルームを開いたままにする」かもしくは「今すぐ閉じる」を選ぶことができます．そのため，ブレイクアウトルームがいつの間にか閉じてしまうのを防ぎ，延長することもできるようになります．
+ この機能を利用すると，ブレイクアウトルームを開いたときに参加者がルームに移動するタイミングを制御できます．
+ 「ブレイクアウトルームが開いたら、割り当て済みの参加者を自動的にブレイクアウトルームへ移動します。」がオフになっている場合は，ホストがブレイクアウトルームを開いた後，参加者は「参加する」を押してからブレイクアウトルームに入室するため，参加者の移動タイミングに少しばらつきが生じます．
+ 「ブレイクアウトルームが開いたら、割り当て済みの参加者を自動的にブレイクアウトルームへ移動します。」がオンになっている場合，ホストが「すべてのルームを開く」を押してブレイクアウトセッションを開始した時点で，全参加者が割り当てられたルームに自動的に移動します．参加者のブレイクアウトルームへの移動漏れを防ぎたいときや，グループワークを行うときに有用です．
+ ##### セッションを閉じる時間を設定する
+ この機能を利用すると，ブレイクアウトセッションを開始してから閉じるまでの時間を設定できます．
+ セッションを閉じる時間が設定されていない場合，ブレイクアウトセッションを閉じるには，ホストあるいは共同ホストがブレイクアウトルームを閉じるしか方法はなく，一度開いたルームは閉じなければ開かれたままです．
+ ルームを決まった時間だけ開いておきたい場合は，「xx後にブレイクアウトルームを自動で閉じる 分」をオンにして，ブレイクアウトルームを開いておく時間を入力します．設定した時間が経つと，自動的にブレイクアウトセッションが閉じます．
+ 一方で，セッションを閉じる時間は設定するものの，延長する可能性がある場合は，「時間切れ時に自分に通知」をオンにしてください．ブレイクアウトセッションを閉じる時間が来ると，ホストと共同ホストは通知を受け取ります．その際，「ブレイクアウトルームを開いたままにする」かもしくは「今すぐ閉じる」を選ぶことができます．そのため，ブレイクアウトルームがいつの間にか閉じてしまうのを防ぎ，延長することもできるようになります．
  #### ブレイクアウトセッション中の設定
  ##### 別のルームもしくはメインミーティングへの移動を参加者に許可する
- 通常，ブレイクアウトセッション開始時に参加者はホストによって割り当てられたルームに移動し，終了までそのルームから他のルームへ移動することができません．同様に，ブレイクアウトセッションの進行中には，メインミーティングに戻れません．
+ 通常，ブレイクアウトセッション開始時に参加者はホストによって割り当てられたルームに移動し，閉じるまでそのルームから他のルームへ移動することができません．同様に，ブレイクアウトセッションの進行中には，メインミーティングに戻れません．
  「参加者によるルーム選択を許可する」をオンにすると，参加者が自身でブレイクアウトルームを選び，そのルームに参加することが可能になります．なお，これはブレイクアウトルーム作成時に，参加者の割り当て方法で「参加者によるルーム選択を許可する」を選んでいると自動でオンになります．例えば，演習中に質問用のブレイクアウトルームを作るときに，これを設定すると，学生がそのルームに自由に移動することができるようになります．ただし，このオプションを選択しただけでは，参加者がメインミーティングに自由に戻ることはできません．
- また，「いつでもメイン セッションに戻ることを参加者に許可する」をオンにすると，参加者は任意のタイミングでブレイクアウトルームから退出してメインミーティングに戻ることができるようになります．例えば，グループワークが終わった時点で参加者が自由にメインミーティングに戻ることが可能になります．ただし，このオプションを選択しただけでは，参加者が自由にルームを移動することはできません．
+ また，「参加者がメインセッションにいつでも戻ることを許可する」をオンにすると，参加者は任意のタイミングでブレイクアウトルームから退出してメインミーティングに戻ることができるようになります．例えば，グループワークが終わった時点で参加者が自由にメインミーティングに戻ることが可能になります．ただし，このオプションを選択しただけでは，参加者が自由にルームを移動することはできません．
  ##### 特定の参加者を強制的にメインミーティングに呼び戻す
  ホストは，ブレイクアウトルームにいる任意の参加者に，メインミーティングに戻るように求めることができます．このとき，その呼びかけに対して参加者が「後で」か「参加」を選ぶため，時間差が生じます．
- 「ブレイクアウトルーム内の選択された参加者全員をメインミーティングに自動的に移動させる」を選択しておけば，参加者をメインミーティングに強制的に呼び戻すことが可能になります．例えば，グループワーク中に参加者に提出物のフィードバックをするなど，ホストのいるメインミーティングに参加者を一人ずつ呼び出して会話をしたい際に使えます．
- #### ブレイクアウトセッション終了時の設定
+ 「ブレイクアウトルーム内の選択された参加者全員をメインセッションに自動的に移動させる」を選択しておけば，参加者をメインミーティングに強制的に呼び戻すことが可能になります．例えば，グループワーク中に参加者に提出物のフィードバックをするなど，ホストのいるメインミーティングに参加者を一人ずつ呼び出して会話をしたい際に使えます．
+ #### ブレイクアウトセッションを閉じる時の設定
  ##### 強制的にメインミーティングに戻されるまで猶予を設ける
- 何も設定されていない場合，ホストの操作によってブレイクアウトルームが閉じられるか，予定された終了時間がきた時点で，参加者は直ちにメインミーティングに戻されます．
- 「ブレイクアウトルームを閉じた後のカウントダウン」をオンにして，時間を入力することで，終了時間が来てからブレイクアウトルームが閉じるまでに猶予を設けることができます．例えば，グループワークで意見を集約させる時間として利用できます．
+ 何も設定されていない場合，ホストの操作によってブレイクアウトルームが閉じられるか，予定された時間がきた時点で，参加者は直ちにメインミーティングに戻されます．
+ 「ブレイクアウトルームを閉じた後のカウントダウン」をオンにして，時間を入力することで，閉じる時間が来てから実際にブレイクアウトルームが閉じるまでに猶予を設けることができます．例えば，グループワークで意見を集約させる時間として利用できます．
  ### ブレイクアウトルームの調整
  ブレイクアウトルームについて参加者の割り当てやオプションなどの設定を行った後，ブレイクアウトルームを開く前に最終調整を行うことが可能です．ブレイクアウトルームの名称や数の変更，参加者の再配置ができます．
  ⋯
  割り当て済みのブレイクアウトルームについて，ルーム名の変更や，ルームの削除，新たな空のルームの追加，そして全てのルームの再作成（やり直し）が可能です．
  この機能を利用するには，Zoomウェブポータル上でブレイクアウトルーム機能とともに，「ブレイクアウトルームの作成，名前変更，削除（削除はルームに予約がない場合）」が有効化されている必要があります．有効化する手順は以下の通りです．
- - Zoomウェブポータルにサインインしてください．詳細は[「Zoom サインイン方法」のページの「ブラウザからサインインする方法」の項](/zoom/signin/#browser)を参照してください．
- - 「設定」から「ミーティング内（詳細）」に移動してください．
+ - Zoomウェブポータルにサインインしてください．詳細は[「Zoom サインイン方法」のページの「ブラウザからサインインする方法」の項](./../../signin/#browser)を参照してください．
+ - ウェブポータルのトップ画面の右上の「プロフィール」から「設定」を開いてください． ![](/_astro/zoom_breakout_workplace_settings.webp)
+ - 「ミーティング」から「ミーティング内（詳細）」に移動してください．
  - 「ブレイクアウトルーム」の下にある「ブレイクアウトルームの作成，名前変更，削除（削除はルームに予約がない場合）」をオンにしてください．
  ルームに関する調整の方法は次の通りです．
  ⋯
  ![](/_astro/zoom_breakout_host_answer_help.webp)
  ### 全ての参加者にメッセージまたは音声を配信する
- それぞれのブレイクアウトルームでのミーティングは独立しています．そのため，ブレイクアウトルームにいる参加者に向けてチャット機能でメッセージを届けることも，音声を届けることもできません．代わりに，配信という機能によって，ホストから全ての参加者に向けて文字か音声の形式で指示を送ることができます．例えば，終了時間を改めてリマインドするときに使うことができます．なお，配信される音声は，マイクで拾われる音であり，パソコンから再生される音を配信したいときは，後述する画面共有を用いてください．
+ それぞれのブレイクアウトルームでのミーティングは独立しています．そのため，ブレイクアウトルームにいる参加者に向けてチャット機能でメッセージを届けることも，音声を届けることもできません．代わりに，配信という機能によって，ホストから全ての参加者に向けて文字か音声の形式で指示を送ることができます．例えば，閉じる時間を改めてリマインドするときに使うことができます．なお，配信される音声は，マイクで拾われる音であり，パソコンから再生される音を配信したいときは，後述する画面共有を用いてください．
  この機能を利用するには，Zoomウェブポータル上の設定でブレイクアウトルーム機能とともに，「参加者に向けてメッセージを配信する」と「音声をブレイクアウトルームに配信する」の項目が有効化されている必要があります．これらを有効化する手順は以下の通りです．
- - Zoomウェブポータルにサインインしてください．詳細は[「Zoom サインイン方法」のページの「ブラウザからサインインする方法」の項](/zoom/signin/#browser)を参照してください．
- - 「設定」から「ミーティング内（詳細）」に移動してください．
+ - Zoomウェブポータルにサインインしてください．詳細は[「Zoom サインイン方法」のページの「ブラウザからサインインする方法」の項](./../../signin/#browser)を参照してください．
+ - ウェブポータルのトップ画面の右上の「プロフィール」から「設定」を開いてください． ![](/_astro/zoom_breakout_workplace_settings.webp)
+ - 「ミーティング」から「ミーティング内（詳細）」に移動してください．
  - 「ブレイクアウトルーム」の下にある「参加者に向けてメッセージを配信する」や「音声をブレイクアウトルームに配信する」をオンにしてください．
  メッセージまたは音声を配信する手順は以下の通りです．
  ⋯
  - 出てきたウィンドウの「配信」を押した後，「メッセージを配信」か「音声を配信」を選んでください．
  - どちらかの場合に沿って操作してください．
-   - 「メッセージを配信」する場合：送りたいメッセージを入力した後に，「配信」を押してください．送信されたメッセージは各ブレイクアウトルームで10秒間表示された後に消えます． ![](/_astro/zoom_breakout_host_deliver_text_message.webp)
-   - 「音声を配信」する場合：ミュートが解除されていることを確認した後，音声配信アイコン（図中左赤枠のアイコン）を押してください．「現在、すべてのルームに配信しています」と表示されたら，正しく配信することができています．音声の配信を停止するときは，停止アイコン（図中青枠）を押してください． ![](/_astro/zoom_breakout_host_deliver_voice_message.webp)
+   - 「メッセージを配信」する場合：送りたいメッセージを入力した後に，送信ボタンを押してください．送信されたメッセージは各ブレイクアウトルームで10秒間表示された後に消えます．
+     ![](/_astro/zoom_breakout_host_deliver_text_message.webp)![](/_astro/zoom_breakout_host_deliver_text_message_hello.webp)
+   - 「音声を配信」する場合：ミュートが解除されていることを確認した後，音声配信アイコン（図中左赤枠のアイコン）を押してください．「現在、すべてのルームに配信しています」と表示されたら，正しく配信することができています．音声の配信を停止するときは，停止アイコン（図中青枠）を押してください．
+     ![](/_astro/zoom_breakout_host_deliver_voice_message_start.webp)![](/_astro/zoom_breakout_host_deliver_voice_message_stop.webp)
  ### ブレイクアウトルームに画面共有する
- 通常のミーティングと同様，全てのブレイクアウトルームに対して，ホストの画面と端末の音声を共有できます．ブレイクアウトルームへの画面共有では，ホストが喋っているマイク音声は共有されません．画面共有の詳しい方法及び設定については，[「画面共有」のページ](/zoom/usage/screen_sharing/)を参照してください．
+ 通常のミーティングと同様，全てのブレイクアウトルームに対して，ホストの画面と端末の音声を共有できます．ブレイクアウトルームへの画面共有では，ホストが話しているマイク音声は共有されません．画面共有の詳しい方法及び設定については，[「画面共有」のページ](./../screen_sharing/)を参照してください．
  ブレイクアウトルームに画面共有を行う手順は以下の通りです．
- - 通常の画面共有を行う手順と同様に，ミーティング画面下部の「画面共有」を押し，共有したい画面を選択してください．
+ - 通常の画面共有を行う手順と同様に，ミーティング画面下部の「共有」を押し，共有したい画面を選択してください．
  - ウィンドウの「オプション」欄にある「ブレイクアウトルームに共有」をオンにしてください．端末の音声も共有する場合は，「サウンドを共有」もオンにしてください． ![](/_astro/zoom_breakout_host_share_screen.webp)
  - 最後に「共有」を押してください．画面共有が開始されます．
  ### 追加の参加者を割り当てる
  ブレイクアウトセッション開始後にミーティングに参加した人がいる場合，その人は「未割り当て」の状態でメインミーティングにとどまります．その人をいずれかのブレイクアウトルームに追加で割り当てるときは，個別に手動で割り当てる必要があります．
- 遅れてメインミーティングに入室した参加者がいる場合は，ミーティング画面下部の「ブレイクアウトルーム」（ブレイクアウトルームのボタンが表示されていない場合は，「詳細」）の右上に赤文字でその人数が表示されます．ブレイクアウトルーム実施中は，遅れてきた参加者が未割り当てのままになっていないか，注意してください．
- ![](/_astro/zoom_breakout_host_unassigned_badge.webp)
+ 遅れてメインミーティングに入室した参加者がいる場合は，ミーティング画面下部の「ブレイクアウトルーム」（ブレイクアウトルームのボタンが表示されていない場合は，「詳細」）の右上に赤文字でその人数が表示されます．ブレイクアウトルーム実施中は，遅れてきた参加者が未割り当てのままになっていないか，注意してください． ![](/_astro/zoom_breakout_host_unassigned_badge.webp)
  未割り当ての参加者がいる状態で，ミーティング画面下部の「ブレイクアウトルーム」を選択すると，以下のような画面が表示されます．「未割り当て」の状態にある参加者にカーソルを合わせて，「割り当て先」を押してください．すると，現在開いているブレイクアウトルームの一覧が表示されます．参加させたいブレイクアウトルームを選択すると，割り当てが完了します． ![](/_astro/zoom_breakout_host_allocate_unassigned_participants.webp)
  ### 参加者の割り当てを保存する
  ⋯
  以前に保存したブレイクアウトルームの割り当ては，ミーティングを新しく作成する際に再利用できます．このためには，「スケジューリング時に参加者をブレイクアウトルームに割り当てる」がZoomウェブポータル上で有効化されている必要があります．有効化の方法は，「[事前に設定した割り当てを読み込む](#start-assignment-preloading)」を参照してください．
  前もって保存した割り当てを用いて，事前に割り当てを行う手順は以下の通りです．
- - Zoomウェブポータルにサインインしてください．詳細は[「Zoom サインイン方法」のページの「ブラウザからサインインする方法」の項](/zoom/signin/#browser)を参照してください．
- - 「ミーティング」内の「予定されているミーティング」を開いてください．新たにミーティングを予定する場合は「ミーティングをスケジュール」を，すでに作成してある場合はそのミーティングにカーソルを置いて「編集」「シリーズ全体を編集」を押してください．
+ - Zoomウェブポータルにサインインしてください．詳細は[「Zoom サインイン方法」のページの「ブラウザからサインインする方法」の項](./../../signin/#browser)を参照してください．
+ - 右上の「Zoom製品」から「ミーティング」をクリックし，「予定されているミーティング」を開いてください．新たにミーティングを予定する場合は「ミーティングをスケジュール」を，すでに作成してある場合はそのミーティングにカーソルを置いて「編集」「シリーズ全体を編集」を押してください． ![](/_astro/zoom_breakout_zoom_product_meeting.webp)
  - 「タイムゾーン」の項目で「定期的なミーティング」がオンになっていることを確認してください．
- - 「オプション」を表示を押すと，オプション一覧が表示されます．その中から「ブレイクアウトルーム事前割り当て」をオンにしてください．「ルームを作成」と「CSVからのインポート」に加えて，保存した割り当てが選択可能になります．
- ![](/_astro/zoom_breakout_host_apply_saved_allocation.webp)
- - 保存されている割り当ての中から，利用したいものを選択してください．割り当てを保存したときに，「上記のブレイクアウトルーム情報を、今後も定期的なミーティング開催時に適用します」をオンにしていると，自動的にその割り当てが選択された状態になります．
+ - 「オプション」の「表示」を押すと，オプション一覧が表示されます．その中から「ブレークアウトルーム事前割り当て」をオンにしてください．「ルームを作成」と「CSVからのインポート」に加えて，保存した割り当てが選択可能になります． ![](/_astro/zoom_breakout_host_apply_regular_meeting.webp) ![](/_astro/zoom_breakout_host_apply_saved_allocation.webp)
+ - 保存されている割り当ての中から，利用したいものを選択してください．Zoomアプリで割り当てを保存したときに，「上記のブレイクアウトルーム情報を、今後も定期的なミーティング開催時に適用します」をオンにしていると，自動的にその割り当てが選択された状態になります． ![](/_astro/zoom_breakout_host_apply_saved_allocation_check.webp)
  - 「保存」を押して，変更を保存してください．
  保存された割り当ては，手順5で選択した後に編集もしくは削除することができます． ![](/_astro/zoom_breakout_host_manage_saved_allocation.webp)
- ### ブレイクアウトセッションを手動で停止する
- ホストはブレイクアウトセッションを任意のタイミングで停止することが可能です．オプションで設定したブレイクアウトセッションの終了時間より前であっても停止できます．ブレイクアウトルームを停止する手順は以下の通りです．
+ ### ブレイクアウトセッションを手動で閉じる
+ ホストはブレイクアウトセッションを任意のタイミングで閉じることが可能です．オプションで設定したブレイクアウトセッションを閉じる時間より前であっても閉じることができます．ブレイクアウトルームを閉じる手順は以下の通りです．
  - ミーティング画面下部にある「ブレイクアウトルーム」を選択してください．
  - 表示された画面右下の「すべてのルームを閉じる」を押してください．
  ⋯
  参加者はブレイクアウトセッションがホストによって開始されると，ホストの割り当てた（もしくは任意の）ブレイクアウトルームに参加します．
  ホストが割り当てたブレイクアウトルームに参加する場合，強制的にそのブレイクアウトルームに移動させられるか，もしくはブレイクアウトルームへの参加確認のウィンドウが表示され，その中の「参加する」を押す，のいずれかの手順でブレイクアウトルームに入室することになります．
- 加えて，ホストが「参加者によるルーム選択を許可」している場合は，次の手順でブレイクアウトルームに移動することができます．
+ 加えて，ホストが「参加者によるルーム選択を許可する」に設定している場合は，次の手順でブレイクアウトルームに移動することができます．
  - ミーティング画面下部より，「ブレイクアウトルーム」を選択してください．
  - 現在開かれているブレイクアウトルームの一覧が表示されるので，参加したいルームの横にある「参加」を選択し，「はい」を押してください． ![](/_astro/zoom_breakout_participants_join.webp)
  ### ブレイクアウトルーム内のレコーディング
- ブレイクアウトセッションの実施中は，ホストによるクラウドレコーディング（Zoomのクラウドに録画を保存する方法）ではメインミーティングしか録画されません．一方で，ローカルレコーディング（各自のPC等に録画を保存する方法）であれば，録画している参加者のいるブレイクアウトルームがレコーディング対象になります．したがって，ブレイクアウトルーム内の会議を録画したい場合は，ローカルレコーディングを使用して録画を行うことになります．このためには，各ブレイクアウトルームの参加者の中からレコーディング担当者を決め，ホストがその人たちを共同ホストに指定する，もしくはレコーディングをする権限を与える必要があります．議論を後で見返したい場合などは，ブレイクアウトルームのレコーディングが有効です． 参加者にレコーディングの権限を与える方法や，レコーディングの手順についての詳細は，「[Zoom レコーディング機能の使い方](/zoom/usage/recording/)」を参照してください．
- ![](/_astro/zoom_breakout_participants_recording_co_host.webp)
- - （録画を担当する参加者側の操作）各ブレイクアウトルームに参加後，ミーティング画面下部の「レコーディング」を選択してください．すると，自動的にローカルへのレコーディングがスタートします．
+ 議論を後で見返したい場合などは，ブレイクアウトルームのレコーディングが有効です．ブレイクアウトセッションの実施中は，ホストによるクラウドレコーディング（Zoomのクラウドに録画を保存する方法）ではメインミーティングしか録画されません．一方で，ローカルレコーディング（各自のPC等に録画を保存する方法）であれば，録画している参加者のいるブレイクアウトルームがレコーディング対象になります．したがって，ブレイクアウトルーム内の会議を録画したい場合は，ローカルレコーディングを使用して録画を行うことになります．このためには，各ブレイクアウトルームの参加者の中からレコーディング担当者を決め，ホストがその人たちを共同ホストに指定する，もしくはレコーディングをする権限を与える必要があります． 参加者にレコーディングの権限を与える方法や，レコーディングの手順についての詳細は，「[レコーディング機能の使い方](./../recording/)」を参照してください． ![](/_astro/zoom_breakout_participants_recording_co_host.webp)
+ 録画を担当する参加者側の操作：各ブレイクアウトルームに参加後，ミーティング画面下部の「レコーディング」を選択してください（表示されていない場合は「詳細」の中にあります）．すると，自動的にローカルへのレコーディングがスタートします．
  ### ヘルプを求める
  ブレイクアウトルームで何らかの問題が起こった場合，参加者はホストにヘルプを求め，ブレイクアウトルームに参加するように要求できます．チャットでホスト宛にメッセージを送信することも可能ですが，見逃されてしまう可能性があります．そのため，ホストを呼びたいときは，ヘルプを送信した方が良いでしょう．
  ヘルプの求め方は次の通りです．
- - ミーティング画面下部より，「ブレイクアウトルーム」を選択し，「ヘルプを求める」（表示されていない場合は「ブレイクアウトルーム」を選択すると出てきます）を押してください． ![](/_astro/zoom_breakout_participants_help_button.webp)
+ - ミーティング画面下部より，「詳細」を選択し，「ヘルプを求める」を押してください． ![](/_astro/zoom_breakout_participants_help_button.webp)
  - 下図のようなウィンドウが出てくるので，「ホストを招待」を押してください．すると，ホストに送信元のブレイクアウトルームに参加するように通知が届きます． ![](/_astro/zoom_breakout_participants_help_window.webp)
  ## ブレイクアウトセッション実施時の注意点
  ### 各グループの進捗状況の把握
- ブレイクアウトルームの実施中は，ホストが全てのルームを一括で監視することはできないため，各ブレイクアウトルームの会議の進捗状況を把握することが難しくなります．そのため，ミーティングとは別の共有ドキュメントを使用する手法が有効です．GoogleドキュメントやGoogleスライド，もしくはホワイトボードツールを利用して，参加者が会議の議事録や成果をリアルタイムで記入することで，ホストは間接的に進捗を把握できます．具体的な実用例については，「[オンラインのグループディスカッションでワークシートを活用する](/articles/group-discussion-worksheet/)」を参照してください．もし，うまくブレイクアウトルームでの会議が機能していないようであれば，「[オンラインのグループディスカッションで生じやすい問題とその対策案](/articles/group-discussion/)」を参考に，適宜必要な工夫を実行してください．
+ ブレイクアウトルームの実施中は，ホストが全てのルームを一括で監視することはできないため，各ブレイクアウトルームの会議の進捗状況を把握することが難しくなります．そのため，ミーティングとは別の共有ドキュメントを使用する手法が有効です．GoogleドキュメントやGoogleスライド，もしくはホワイトボードツールを利用して，参加者が会議の議事録や成果をリアルタイムで記入することで，ホストは間接的に進捗を把握できます．具体的な実用例については，「[オンラインのグループディスカッションでワークシートを活用する](./../../../../articles/group-discussion-worksheet/)」を参照してください．もし，うまくブレイクアウトルームでの会議が機能していないようであれば，「[オンラインのグループディスカッションで生じやすい問題とその対策案](./../../../../articles/group-discussion/)」を参考に，適宜必要な工夫を実行してください．
  ### チャットの履歴
- ブレイクアウトルームを実施中に「全員宛て」でチャットを送信した場合，そのメッセージは同じブレイクアウトルームにいる参加者のみに届くため，他のルームにいる参加者はそのメッセージを受け取りません．なお，チャットは本人が送受信したメッセージのみが履歴として残ります．そのため，ブレイクアウトルーム中に送信したチャットが，メインミーティングに戻った後で他のブレイクアウトルームにいた参加者に知られることはありません．
+ ブレイクアウトルームで「全員宛て」に送ったチャットは，同じルームの参加者にだけ届きます．また，チャットの履歴は本人が送受信したものだけが残るため，メインミーティングに戻ったあとに，他のルームのチャットが見えることはありません．
```

## English

```diff
  説明: Table of Contents: What are Breakout Rooms?; Enable the Breakout Room Feature as a Host; Start a ...
  
- [Zoom](/en/zoom/) > [Usages in Meeting](/en/zoom/usage/) > How to use Breakout Rooms
+ [Zoom](/en/zoom/) > [Usage in Zoom Meeting](/en/zoom/usage/) > How to use Breakout Rooms
  # How to use Breakout Rooms
  ## What are Breakout Rooms?
  ⋯
  To create and manage breakout rooms as a host, you must first enable the breakout room feature on the Zoom web portal beforehand.
  The steps required to enable the breakout room feature are as follows:
- - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](/en/zoom/signin/#browser) page.
- - Go to “Settings”, then from the “Meeting” tab navigate to “In Meeting (Advanced)” and turn on the toggle for “Breakout room”.
+ - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](./../../signin/#browser) page.
+ - Click your profile picture in the top right of Workplace, then select “Settings”. ![](/_astro/zoom_breakout_workplace_settings.webp)
+ - From the “Meeting” tab, navigate to “In Meeting (Advanced)” and turn on the toggle for “Breakout room”.
  - Turn on the necessary items for features related to the breakout rooms.
  - Click “Save” to save the changes.
  ![](/_astro/zoom_breakout_activation.webp)
  Detailed explanations for each item are located in the following places:
- - “Allow host to assign participants to breakout rooms when scheduling”: See [“Loading a Pre-assigned Allocation”](#start-assignment-preloading).
- - “Broadcast message to participants” and “Broadcast voice to breakout rooms”: See [“Broadcasting a Message or Voice to All Participants”](#host-massage).
- - “Allow host to create, rename, and delete breakout rooms”: See [“Adjustments for Rooms”](#start-coordination-room).
+ - “Assign participants to breakout rooms when scheduling”: See [“Loading a Pre-assigned Allocation”](#start-assignment-preloading).
+ - “Broadcast message to participants” and “Broadcast voice to breakout rooms”: See [“Broadcasting a Message or Voice to All Participants”](#host-message).
+ - “Create, rename, and delete breakout rooms”: See [“Adjustments for Rooms”](#start-coordination-room).
  ## Start a Breakout Session as a Host
  The host starts a breakout session by creating breakout rooms and assigning participants to them. Room options and names are also configured when starting the session.
  This chapter explains how a host uses the breakout room feature in four steps: “Create Breakout Rooms”, “Assign Participants to Breakout Rooms”, “Set Options”, and “Adjust Breakout Rooms”.
  ### Create Breakout Rooms
- To start a breakout session, first enter the number of breakout rooms needed and choose how to assign participants to each room. The number of rooms can be changed later.
+ To start a breakout session, first enter the number of breakout rooms needed and choose how to assign participants to each room. The number of rooms can be changed later. (You need to configure another setting before configuring this one. Please see “[Adjustments for Rooms](#start-coordination-room)”.)
  The steps to create breakout rooms are as follows:
- - Select “Breakout Rooms” at the bottom of the screen (red box in the figure). ![](/_astro/zoom_breakout_icon_breakout_room.webp)
+ - Select “Breakout rooms” from the “More” menu at the bottom of the screen (red box in the figure). ![](/_astro/zoom_breakout_icon_breakout_room.webp)
  - Next, select the number of breakout rooms to create and how to assign participants.
    - The assignment methods are explained in detail in [“Assign Participants to Breakout Rooms”](#start-assignment) below.
  ⋯
  When creating breakout rooms, choose how to assign participants. The three basic methods are “Assign automatically”, “Assign manually”, and “Let participants choose room”. In addition, you can load a pre-assignment that was set up on the Zoom web portal before the meeting.
  Regardless of the assignment method, you can move a specific participant to another room or swap them with someone else after the initial assignment.
- Note that when a host makes the assignments, only the participants and co-hosts can be assigned; the host cannot assign themselves. When the co-host makes the assignments, they cannot assign themselves or the host.
+ Note that when a host makes the assignments, only the participants and co-hosts can be assigned; the host cannot assign themselves. When a co-host makes the assignments, they cannot assign themselves or the host.
  #### Assign Automatically
- If you choose this assignment method, the participants are automatically assigned randomly to the number of breakout rooms specified by the host, and the participants are divided as evenly as possible among the rooms. If you check “Include co-host(s) to breakout rooms”, the co-hosts will also be assigned automatically like the other participants. This is primarily useful for group work with a one-time group of members.
+ If you choose this assignment method, the participants are assigned randomly to the number of breakout rooms specified by the host, and the participants are divided as evenly as possible among the rooms. If you check “Include co-host(s) to breakout rooms”, the co-hosts will also be assigned automatically like the other participants. This is primarily useful for group work with a one-time group of members.
  ![](/_astro/zoom_breakout_allocate_co_host.webp)![](/_astro/zoom_breakout_allocate_randomly.webp)
  #### Assign Manually / Let Participants Choose Room
  If you choose these assignment methods, the specified number of empty breakout rooms will be created. This is mainly useful for group work with fixed members.
- With “Assign manually”, the host or co-host assigns participants manually. With “Let participants choose room”, the participants select the room they want to join themselves. However, as described later, even if you choose “Assign manually”, you can also enable the “Let participants choose room” in the options, allowing the participants to select their own rooms after being assigned. Also, even if you choose “Let participants choose room”, the host or co-host can still assign participants manually.
+ With “Assign manually”, the host or co-host assigns participants manually. With “Let participants choose room”, the participants select the room they want to join themselves. However, as described later, even if you choose “Assign manually”, you can also enable “Let participants choose room” in the options, allowing the participants to select their own rooms after being assigned. Also, even if you choose “Let participants choose room”, the host or co-host can still assign participants manually.
  ![](/_astro/zoom_breakout_allocate_empty-room.webp)
  The steps to manually assign participants to rooms are as follows. If you would like to keep specific participants in the main meeting, start the breakout session without assigning them to any room, leaving them as “Unassigned”.
  ⋯
  - Click “Open all rooms” to start the breakout session.
  ![](/_astro/zoom_breakout_allocate_manually.webp)
- Please note that after the breakout session starts, an “Unassigned” item may appear on the host’s or co-host’s screen. Participants whose names are here remain in the main meeting without being assigned to any room. To assign them, hover over their name, click the “Assign to” which appears, and select the room for the unassigned participant to join.
+ Please note that after the breakout session starts, an “Unassigned” item may appear on the host’s or co-host’s screen. Participants whose names are here remain in the main meeting without being assigned to any room. To assign them, hover over their name, click “Assign” which appears, and select the room for the unassigned participant to join.
  ##### Tip 1 for Manual Assignment
- The participant list for manual assignment is sorted by name. Therefore, having participants set their names according to their group (e.g., by adding a number or group name to the beginning of their name) can make it easier to find them. Participants can change their own names, or the host can change them. For details, see the [“Usages in Zoom Meeting”](/en/zoom/usage/) page.
+ The participant list for manual assignment is sorted by name. Therefore, having participants set their names according to their group (e.g., by adding a number or group name to the beginning of their name) can make it easier to find them. Participants can change their own names, or the host can change them. For details, see the [“Usage in Zoom Meeting”](./../) page.
  ![](/_astro/zoom_breakout_allocation_assign_number.webp)
  ##### Tip 2 for Manual Assignment
  ⋯
  #### Loading a Pre-assigned Allocation
  Participant assignments for breakout rooms must be done for each meeting. However, if the participants are known in advance, you can create a meeting with pre-assigned rooms from the Zoom web portal, either by assigning them manually or by importing a CSV file with the assignments. This feature allows you, for example, to prepare breakout rooms based on pre-determined student groups before a class.
- To use this assignment method, “Allow host to assign participants to breakout rooms when scheduling” must be enabled along with the breakout room feature on the Zoom web portal. The steps to enable it are as follows:
- - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](/en/zoom/signin/#browser) page.
- - Go to “Settings” and then to “In Meeting (Advanced)”.
+ To use this assignment method, “Assign participants to breakout rooms when scheduling” must be enabled along with the breakout room feature on the Zoom web portal. The steps to enable it are as follows:
+ - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](./../../signin/#browser) page.
+ - Click your profile picture in the top right of Workplace, then select “Settings”. ![](/_astro/zoom_breakout_workplace_settings.webp)
+ - From the “Meeting” tab, navigate to “In Meeting (Advanced)”.
  - Under “Breakout room”, turn on “Assign participants to breakout rooms when scheduling”.
  The steps to create a meeting with a pre-set assignment on the Zoom web portal are as follows:
- - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](/en/zoom/signin/#browser) page.
+ - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](./../../signin/#browser) page.
+ - Click “Meetings” under “Zoom Products” in the upper right corner. ![](/_astro/zoom_breakout_zoom_product_meeting.webp)
  - Open “Upcoming” in the “Meetings” section.
- - Click “Schedule a Meeting” to create a new meeting with pre-set assignments, or click “Edit” for an already scheduled meeting to load assignments into it.
- ![](/_astro/zoom_breakout_allocation_preloading_choose_meeting.webp)
- - In “Options” click “Show” to display the options list. From there, enable “Breakout Room pre-assign” This will make “Create Rooms” and “Import from CSV” available. Choose “Create Rooms” for manual assignment or “Import from CSV” to use a CSV file with assignments. ![](/_astro/zoom_breakout_allocation_preloading_check.webp)
+ - Click “Schedule a Meeting” to create a new meeting with pre-set assignments, or click “Edit” for an already scheduled meeting to load assignments into it. ![](/_astro/zoom_breakout_allocation_preloading_choose_meeting.webp)
+ - In “Options” click “Show” to display the options list. From there, enable “Breakout Room pre-assign”. This will make “Create Rooms” and “Import from CSV” available. Choose “Create Rooms” for manual assignment or “Import from CSV” to use a CSV file with assignments. ![](/_astro/zoom_breakout_allocation_preloading_check.webp)
  The CSV file must contain the email address of the Zoom account the participant will use that day and the name of the breakout room they are assigned to. When using a UTokyo Zoom account, use the UTokyo Account (10-digit Common ID @utac.u-tokyo.ac.jp) as an email address. For details, see [“Pre-assigning participants to breakout rooms using a CSV file (in Japanese)”](https://www.sodan.ecc.u-tokyo.ac.jp/hack/zoom-pre-assign-breakout-rooms-with-csv/).
- For recurring meetings, in addition to “Create Rooms” and “Import from CSV”, you can also pre-assign participants to breakout rooms using an assignment saved from a previous meeting. This method is explained later in [“Save Participant Assignments”](#host-save-allocation)
- ### Setting Options
+ For recurring meetings, in addition to “Create Rooms” and “Import from CSV”, you can also pre-assign participants to breakout rooms using an assignment saved from a previous meeting. This method is explained later in [“Save Participant Assignments”](#host-save-allocation).
+ ### Set Options
  After creating breakout rooms and assigning participants, you can set the options for the entire upcoming breakout session. You can configure settings such as allowing participants to move between rooms and setting a time for the rooms to be open.
  Click “Options” (Windows) or the gear icon (macOS) in the bottom left of the participant assignment window to display the breakout room options.
  ⋯
  Set and enable the necessary functions from the displayed options.
  ![](/_astro/zoom_breakout_option_list.webp)
- Each option is explained below, categorized by when it takes effect during the meeting and its purpose. Please note that after the rooms are opened, only the “Allow participants to choose room” option can be changed.
+ Each option is explained below, categorized by when it takes effect during the meeting and its purpose. Please note that after the rooms are opened, only the “Allow participants to choose room” and “Allow participants to return to the main session at any time” option can be changed.
  #### Settings at the Start of a Breakout Session
  ##### Move participants to breakout rooms automatically
  This section explains “Automatically move all assigned participants into breakout rooms”. This feature allows you to control when participants move into the rooms after you open them.
- If the “Automatically move all assigned participants into breakout rooms” is off, the participants must click “Join” to enter the rooms once the host opens the breakout rooms. This can cause delays and disruptions when the participants move to the rooms.
- If the “Automatically move all assigned participants into breakout rooms” is on, all participants are automatically moved to their assigned rooms as soon as the host clicks the “Open all rooms” to start the session. This is useful when you want to prevent participants from failing to move or when conducting group work.
+ If “Automatically move all assigned participants into breakout rooms when breakout rooms are opened” is off, the participants must click “Join” to enter the rooms once the host opens the breakout rooms. Participants may move into the rooms at slightly different times.
+ If “Automatically move all assigned participants into breakout rooms when breakout rooms are opened” is on, all participants are automatically moved to their assigned rooms as soon as the host clicks “Open all rooms” to start the session. This is useful when you want to prevent participants from failing to move or when conducting group work.
  ##### Set the session end time
- This section explains the “Auto close breakout rooms after () minutes”. This feature allows you to set the duration of the breakout session from start to finish.
+ This section explains “Auto close breakout rooms after () minutes”. This feature allows you to set the duration of the breakout session from start to finish.
  If no end time is set, the only way to end the session is for the host or co-host to close the breakout rooms manually; once opened, the rooms remain open until closed.
- If you want the rooms to be open only for a specific amount of time, turn on the “Auto close breakout rooms after () minutes” and enter the duration. The breakout session will end automatically after the set time has passed.
- If you set an end time but may need to extend it, turn on the “Notify me when the time is up”. When the session time expires, the host and co-hosts will receive a notification. At that point, they can choose to “Keep breakout rooms open” or “Close now”. This prevents the rooms from closing unexpectedly and allows for extensions.
+ If you want the rooms to be open only for a specific amount of time, turn on “Auto close breakout rooms after () minutes” and enter the duration. The breakout session will end automatically after the set time has passed.
+ If you set an end time but may need to extend it, turn on “Notify me when the time is up”. When the session time expires, the host and co-hosts will receive a notification. At that point, they can choose to “Keep breakout rooms open” or “Close now”. This prevents the rooms from closing unexpectedly and allows for extensions.
  #### Settings During a Breakout Session
  ##### Allow participants to move to another room or the main meeting
  Normally, when a breakout session starts, participants move to the room assigned by the host and cannot move to another room until the session ends. Similarly, they cannot return to the main meeting while the session is in progress.
- Turning on the “Allow participants to choose room” allows participants to select and join a breakout room themselves. This is automatically turned on if you selected “Allow participants to choose room” as the assignment method when creating the rooms. For example, if you create a breakout room for questions during a lab session, enabling this allows students to freely move into that room. However, this option alone does not allow participants to freely return to the main meeting.
- Turning on the “Allow participants to return to the main session at any time” allows participants to leave their breakout room and return to the main meeting at any time. For example, this allows participants to freely return to the main meeting once their group work is finished. However, this option alone does not allow participants to move freely between rooms.
+ Turning on “Allow participants to choose room” allows participants to select and join a breakout room themselves. This is automatically turned on if you selected “Allow participants to choose room” as the assignment method when creating the rooms. For example, if you create a breakout room for questions during a lab session, enabling this allows students to freely move into that room. However, this option alone does not allow participants to freely return to the main meeting.
+ Turning on “Allow participants to return to the main session at any time” allows participants to leave their breakout room and return to the main meeting at any time. For example, this allows participants to freely return to the main meeting once their group work is finished. However, this option alone does not allow participants to move freely between rooms.
  ##### Forcibly recall specific participants to the main meeting
  The host can request any participant in a breakout room to return to the main meeting. In this case, the participant can choose “Later” or “Join”, which may cause a time lag.
  ⋯
  ##### Provide a grace period before being forced back to the main meeting
  If no setting is configured, participants are immediately returned to the main meeting as soon as the breakout rooms are closed by the host or the scheduled end time is reached.
- By turning on the “Countdown after closing breakout room” and entering a time, you can create a grace period between the end time and when the breakout rooms actually close. This can be used, for example, as time to summarize opinions in group work.
- ### Adjusting Breakout Rooms
+ By turning on “Countdown after closing breakout room” and entering a time, you can create a grace period between the end time and when the breakout rooms actually close. This can be used, for example, as time to summarize opinions in group work.
+ ### Adjust Breakout Rooms
  After configuring participant assignments and options for the breakout rooms, you can make final adjustments before opening them. You can change the name and number of breakout rooms and reassign participants.
  #### Adjustments for Rooms
  For assigned breakout rooms, you can rename or delete rooms, add new empty rooms, or recreate all rooms from scratch.
  To use this function, “Create, rename, or delete breakout rooms when rooms are open” must be enabled along with the breakout room feature on the Zoom web portal. The steps to enable it are as follows:
- - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](/en/zoom/signin/#browser) page.
- - Go to “Settings” and then to “In Meeting (Advanced)”.
- - Under “Breakout room,” turn on “Create, rename, or delete breakout rooms when rooms are open”.
+ - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](./../../signin/#browser) page.
+ - Click your profile picture in the top right of Workplace, then select “Settings”. ![](/_astro/zoom_breakout_workplace_settings.webp)
+ - From the “Meeting” tab, navigate to “In Meeting (Advanced)”.
+ - Under “Breakout room”, turn on “Create, rename, or delete breakout rooms when rooms are open”.
  The methods for adjusting rooms are as follows:
  - To rename or delete a room: Hover over the target room and click either “Rename” or “Delete room” that appears, then make the change or delete the room.
  - To add an empty room: Click “Add room” at the bottom of the window. You have to manually assign participants to the newly created room.
- - To recreate all rooms: Click on the “Recreate”. The same screen as in the “Create Breakout Rooms” chapter will appear. Then, follow the steps from “Create Breakout Rooms” onward (“Create Breakout Rooms”, “Assign Participants to Breakout Rooms”, “Setting Options”). ![](/_astro/zoom_breakout_coordination_window.webp)
+ - To recreate all rooms: Click “Recreate”. The same screen as in the “Create Breakout Rooms” chapter will appear. Then, follow the steps from “Create Breakout Rooms” onward (“Create Breakout Rooms”, “Assign Participants to Breakout Rooms”, “Setting Options”). ![](/_astro/zoom_breakout_coordination_window.webp)
  #### Adjustments for Participants
  You can move a participant to another room or exchange them with another participant. Hover over the target participant’s name, and “Move to” and “Exchange” will appear. Click one of them and select the destination or the person to swap with to execute the move or exchange.
- ![](/_astro/zoom_breakout_coordination_move_participants.webp) ![](/_astro/zoom_breakout_coordination_exchange_participants.webp)
+ ![](/_astro/zoom_breakout_coordination_move_participants.webp)![](/_astro/zoom_breakout_coordination_exchange_participants.webp)
  ### Start the Breakout Session
  Once the final adjustments for rooms and participants are complete and everything for the breakout rooms is set up, open them to start the session. Click “Open all rooms” in the bottom right. Participants will then enter their respective breakout rooms and can begin their meetings.
  ⋯
  To return to the main meeting, click “Leave Room” in the bottom right of the meeting screen, then “Leave breakout room”.
  #### Respond to Help Requests
- If any issues arise in a breakout room, participants can ask the host for help by joining their room. The host can then respond to that request and join the breakout room.
+ If any issues arise in a breakout room, participants can ask the host to join their room. The host can then respond to that request and join the breakout room.
  When the host receives a help request, a screen like the one below will appear, showing who is asking for help and from which breakout room. To respond to the request, click “Join breakout room” to enter that room.
  ![](/_astro/zoom_breakout_host_answer_help.webp)
  ### Broadcasting a Message or Voice to All Participants
- The meetings in each breakout room are independent of each other. Therefore, you cannot send messages using the chat function or broadcast audio to the participants in the breakout rooms. Instead, a broadcast function allows the host to send instructions to all participants either in a text or voice format. For example, you can use this to remind everyone of the end time. Note that the broadcasted audio is what your microphone picks up; if you want to broadcast audio playing from your computer, use the screen sharing feature described later.
+ The meetings in each breakout room are independent of each other. Therefore, you cannot send messages using the chat function or broadcast audio to the participants in the breakout rooms. Instead, a broadcast function allows the host to send instructions to all participants either in a text or voice format. For example, you can use this to remind everyone of the end time. Note that the broadcast audio is what your microphone picks up; if you want to broadcast audio playing from your computer, use the screen sharing feature described later.
  To use this feature, “Broadcast message to participants” and “Broadcast voice to breakout rooms” must be enabled along with the breakout room feature in your Zoom web portal settings. The steps to enable them are as follows:
- - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](/en/zoom/signin/#browser) page.
- - Go to “Settings” and then to “In Meeting (Advanced)”.
+ - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](./../../signin/#browser) page.
+ - Click your profile picture in the top right of Workplace, then select “Settings”. ![](/_astro/zoom_breakout_workplace_settings.webp)
+ - From the “Meeting” tab, navigate to “In Meeting (Advanced)”.
  - Under “Breakout room”, turn on “Broadcast message to participants” and “Broadcast voice to breakout rooms”.
  The steps to broadcast a message or voice are as follows:
  - Click “Breakout Rooms”.
- - In the window that appears, click “Broadcast” and then choose either “Broadcast a message” or “Broadcast voice”.
+ - In the window that appears, click “Broadcast” and then choose either “Broadcast message” or “Broadcast voice”.
  - Follow the steps for your choice:
    - To broadcast a message: Type the message you want to send and then click the broadcast icon (the icon in the red box in the figure). The sent message will be displayed in each breakout room for 10 seconds and then disappear. ![](/_astro/zoom_breakout_host_deliver_text_message.webp)
-   - To broadcast voice: After confirming you are unmuted, click the broadcast voice icon (the icon in the left red box in the figure). When “Currently broadcasting to all rooms” is displayed, you are broadcasting correctly. To stop broadcasting, click the stop icon (in the blue box). ![](/_astro/zoom_breakout_host_deliver_voice_message.webp)
+   - To broadcast voice: After confirming you are unmuted, click the broadcast voice icon (the icon in the left red box in the figure). When “Currently broadcasting to all rooms” is displayed, you are broadcasting correctly. To stop broadcasting, click the stop icon (in the red box).
+   ![](/_astro/zoom_breakout_host_deliver_voice_message_start.webp)![](/_astro/zoom_breakout_host_deliver_voice_message_stop.webp)
  ### Sharing Screen to the Breakout Rooms
- The host can share their screen and computer audio to all breakout rooms similar to a regular meeting. When sharing your screen to breakout rooms, the audio from the host’s microphone is not shared. For detailed methods and settings for screen sharing, please refer to the [“Screen Sharing in Zoom”](/en/zoom/usage/screen_sharing/) page.
+ The host can share their screen and computer audio to all breakout rooms similar to a regular meeting. When sharing your screen to breakout rooms, the audio from the host’s microphone is not shared. For detailed methods and settings for screen sharing, please refer to the [“Screen Sharing in Zoom”](./../screen_sharing/) page.
  The steps to share your screen to the breakout rooms are as follows:
  - Similar to the regular screen share, click “Share” at the bottom of the meeting screen and select the screen you want to share.
- - In the window’s “Layouts and options” section, check “Share to breakout rooms”. If you also want to share computer audio, check “Share sound”. ![](/_astro/zoom_breakout_host_share_screen.webp)
- - Finally, click “Share” The screen share will begin.
+ - In the window’s “Share options” section, check “Share to breakout rooms”. If you also want to share computer audio, check “Share sound”. ![](/_astro/zoom_breakout_host_share_screen.webp)
+ - Finally, click “Share”. The screen share will begin.
  ### Assigning Additional Participants
  If someone joins the meeting after the breakout session has started, they remain in the main meeting as “Unassigned”. To add them to a breakout room, you must assign them manually.
  ⋯
  In a standard meeting, you need to assign participants to breakout rooms every time. However, for recurring meetings, you can save the current breakout room assignment for future use. Up to 10 different assignments can be saved per user. The steps to save a participant assignment are as follows:
  - Select “Breakout rooms” at the bottom of the meeting screen.
- - From the ”…” at the bottom of the window that is displayed, click “Save Breakout Rooms”. ![](/_astro/zoom_breakout_host_save_allocation_button.webp)
+ - From the ”…” at the bottom of the window that is displayed, click “Save breakout rooms”. ![](/_astro/zoom_breakout_host_save_allocation_button.webp)
    - If ”…” is not displayed, check to see if the meeting is a recurring meeting and not a recurring meeting with “No Fixed Time”.
  - Give the current assignment a name and click “Save”. ![](/_astro/zoom_breakout_host_save_allocation_naming.webp)
    - You cannot save if the name is a duplicate.
- Previously saved breakout room assignments can be reused when creating a new meeting. To do this, “Allow host to assign participants to breakout rooms when scheduling” must be enabled on the Zoom web portal. For how to enable this, see [“Loading a Pre-assigned Allocation”](#start-assignment-preloading).
+ Previously saved breakout room assignments can be reused when creating a new meeting. To do this, “Assign participants to breakout rooms when scheduling” must be enabled on the Zoom web portal. For how to enable this, see [“Loading a Pre-assigned Allocation”](#start-assignment-preloading).
  The steps to pre-assign using a previously saved assignment are as follows:
- - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](/en/zoom/signin/#browser) page.
- - Open “Upcoming” in the “Meetings” section. Schedule a new meeting by clicking “Schedule a Meeting”, or for an existing meeting, hover over it and click “Edit”, then “Edit Entire Series”.
+ - Sign in to the Zoom web portal. For details, refer to the [“Signing in from the UTokyo Zoom Webpage” section on the “Sign-in Methods for Zoom”](./../../signin/#browser) page.
+ - Click “Meetings” under “Zoom Products” in the upper right corner, and open “Upcoming”. ![](/_astro/zoom_breakout_zoom_product_meeting.webp)
+ - Schedule a new meeting by clicking “Schedule a Meeting”, or for an existing meeting, hover over it and click “Edit”, then “Edit Entire Series”.
  - Under the “Time Zone” item, ensure “Recurring meeting” is checked.
  - Click “Show” next to “Options” to display the options list. From there, check “Breakout Room pre-assign”. In addition to “Create Rooms” and “Import from CSV”, your saved assignments will be selectable.
- ![](/_astro/zoom_breakout_host_apply_saved_allocation.webp)
- - Select the saved assignment you want to use. If you checked “Attach these breakout rooms to this meeting ID for future use” when you saved the assignment, it will be automatically selected.
+ ![](/_astro/zoom_breakout_host_apply_saved_allocation_time.webp) ![](/_astro/zoom_breakout_host_apply_saved_allocation_options.webp)
+ - Select the saved assignment you want to use. If you checked “Attach these breakout rooms to this meeting ID for future use” when you saved the assignment in the Zoom app, it will be automatically selected. ![](/_astro/zoom_breakout_host_apply_saved_allocation_check.webp)
  - Click “Save” to save the changes.
  The saved assignment can be edited or deleted after being selected in step 5. ![](/_astro/zoom_breakout_host_manage_saved_allocation.webp)
- ### Manually Stopping Breakout Sessions
- A host can stop the breakout session at any time, even before the end time set in the options. The steps to stop the breakout rooms are as follows:
+ ### Manually Closing Breakout Sessions
+ A host can close the breakout session at any time, even before the end time set in the options. The steps to close the breakout rooms are as follows:
  - Select “Breakout rooms” at the bottom of the meeting screen.
  - Click “Close all rooms” in the bottom right of the window that appears.
  ⋯
  When the host starts a breakout session, participants join the breakout room they were assigned to (or one of their choice).
  When joining a host-assigned breakout room, you will either be forcibly moved to that room, or a window will appear asking if you want to join the breakout room. Click “Join” to enter.
- In addition, if the host has enabled “Let participants choose rooms,” you can move to a breakout room with the following steps:
- - From the bottom of the meeting screen, select “Breakout Rooms”.
+ In addition, if the host has enabled “Allow participants to choose room”, you can move to a breakout room with the following steps:
+ - From the bottom of the meeting screen, select “Breakout rooms”.
  - A list of currently open breakout rooms will be displayed. Select “Join” next to the room you want to join, and then click “Yes”. ![](/_astro/zoom_breakout_participants_join.webp)
  ### Recording in a Breakout Room
- During a breakout session, the host’s cloud recording (saving the recording to the Zoom cloud) only records the main meeting. However, with local recording (saving the recording to an individual’s PC, etc.), the breakout room where a participant that is recording is located becomes the recording target. Therefore, if you want to record a meeting within a breakout room, you must use local recording. To do this, someone from the participants in each breakout room must be designated as the recorder, and the host must either make those people co-hosts or give them permission to record. Recording breakout rooms is useful if you want to review the discussion later. For details on how to give participants recording permission and recording procedures, see [“Recording Zoom Meeting”](/en/zoom/usage/recording/).
+ During a breakout session, the host’s cloud recording (saving the recording to the Zoom cloud) only records the main meeting.
+ However, with local recording (saving the recording to an individual’s PC, etc.), the breakout room where a participant who is recording is located becomes the recording target. Therefore, if you want to record a meeting within a breakout room, you must use local recording. To do this, someone from the participants in each breakout room must be designated as the recorder, and the host must either make those people co-hosts or give them permission to record. Recording breakout rooms is useful if you want to review the discussion later.
+ For details on how to give participants recording permission and recording procedures, see [“How to use the recording feature”](./../recording/).
  ![](/_astro/zoom_breakout_participants_recording_co_host.webp)
- - (Actions for the participant in charge of recording) After joining each breakout room, select “Record” at the bottom of the meeting screen (if not visible, click “More” to display it). Local recording will start automatically.
+ (Actions for the participant in charge of recording) After joining each breakout room, select “Record” at the bottom of the meeting screen (if not visible, click “More” to display it). Local recording will start automatically.
  ### Asking for Help
  If a problem occurs in a breakout room, a participant can ask the host for help and request that they join the breakout room. It is also possible to send a chat message to the host, but this might be missed. Therefore, when you want to call the host, it is better to send a help request.
  The way to ask for help is as follows:
- - From the bottom of the meeting screen, click “Ask for help” (if not visible, select “More” to display it). ![](/_astro/zoom_breakout_participants_help_button.webp)
+ - Select “More” from the bottom of the meeting screen, then click “Ask for help”. ![](/_astro/zoom_breakout_participants_help_button.webp)
  - A window like the one below will appear. Click “Invite host”. A notification will then be sent to the host to join the breakout room from which the request was sent. ![](/_astro/zoom_breakout_participants_help_window.webp)
  ## Important Points During Breakout Sessions
  ### Grasp the Progress of Each Group
- During a breakout session, it is difficult for the host to grasp the progress of each breakout room’s meeting, as they cannot monitor all rooms at once. Therefore, using a shared document separate from the meeting is an effective method. By using Google Docs, Google Slides, or a whiteboard tool for participants to record meeting minutes and outcomes in real time, the host can indirectly grasp the progress. For specific practical examples, refer to [“Utilizing Worksheets in Online Group Discussions”](/en/articles/group-discussion-worksheet/). If the meetings in the breakout rooms are not functioning well, refer to [“Problems That Tend to Arise in Online Group Discussions and Suggested Solutions”](/en/articles/group-discussion/) and implement necessary adjustments as needed.
+ During a breakout session, it is difficult for the host to grasp the progress of each breakout room’s meeting, as they cannot monitor all rooms at once. Therefore, using a shared document separate from the meeting is an effective method. By using Google Docs, Google Slides, or a whiteboard tool for participants to record meeting minutes and outcomes in real time, the host can indirectly grasp the progress. For specific practical examples, refer to [“Utilizing Worksheets in Online Group Discussions”](./../../../../en/articles/group-discussion-worksheet/). If the meetings in the breakout rooms are not functioning well, refer to [“Problems That Tend to Arise in Online Group Discussions and Suggested Solutions”](./../../../../en/articles/group-discussion/) and implement necessary adjustments as needed.
  ### Chat History
- During a breakout session, if you send a chat message to “Everyone”, the message will only reach participants in the same breakout room. The participants in other rooms will not receive it. Note that chat history saves only the messages you send and receive. Therefore, chats sent during a breakout room will not be known to participants who were in other breakout rooms after returning to the main meeting.
+ During a breakout session, if you send a chat message to “Everyone”, the message will only reach participants in the same breakout room. Note that chat history saves only the messages you send and receive. Therefore, chats sent during a breakout room will not be known to participants who were in other breakout rooms after returning to the main meeting.
```

[← 一覧へ](<../README.md>)
