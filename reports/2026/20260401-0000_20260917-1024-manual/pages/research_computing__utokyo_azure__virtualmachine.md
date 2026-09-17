# 仮想マシン : UTokyo Azure 利用例

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/virtualmachine/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/virtualmachine/>) | [`src/pages/research_computing/utokyo_azure/virtualmachine/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/virtualmachine/index.mdx>) |
| English | — | — | — |

## 日本語

```diff
  タイトル: 仮想マシン : UTokyo Azure 利用例 | utelecon
- 説明: 目次: 概要; １．サービスを選択する; ２．仮想マシンを構成する; ３．仮想マシンを作成する; ４．仮想マシンにログインする; 補足．仮想マシンの一時休止...
+ 説明: 目次: 概要; 補足事項; 仮想マシンの一時休止...
  
  [全学向け高速計算機・データ活用基盤](/research_computing/) > [UTokyo Azure](/research_computing/utokyo_azure/) > 仮想マシン
  # 仮想マシン : UTokyo Azure 利用例
  ## 概要
- 本サービスで多く利用されると思われる，仮想マシンの作成を最低限の構成で行う一例です．詳細な設定，構築方法は以下の Microsoft Lean の記事もご参照ください．
+ 本サービスで多く利用されると思われる，仮想マシンの作成手順です．以下の Microsoft Learn の記事をご参照ください．
  - [クイック スタート:Azure portal で Linux 仮想マシンを作成する](https://learn.microsoft.com/ja-jp/azure/virtual-machines/linux/quick-create-portal?WT.mc_id=UI_empg&tabs=ubuntu)
  - [クイック スタート:Azure Portal で Windows 仮想マシンを作成する](https://learn.microsoft.com/ja-jp/azure/virtual-machines/windows/quick-create-portal?WT.mc_id=UI_empg)
- 参考： [仮想マシンを作ろう -13BのLlama-3モデルをLoRA fine-tuningしたい-](https://utelecon.adm.u-tokyo.ac.jp/events/2025-02-21/slides/5-3_create_VM.pdf) (2025.02.21 UTokyo Azure 説明会資料)
- ## １．サービスを選択する
+ 参考： [仮想マシンを作ろう -13BのLlama-3モデルをLoRA fine-tuningしたい-](/events/2025-02-21/slides/5-3_create_VM.pdf) (2025.02.21 UTokyo Azure 説明会資料)
+ ## 補足事項
  ヘルプ：まだサブスクリプションをお持ちでない場合
  [Azure portal](https://portal.azure.com/)に[UTokyo Account](/utokyo_account/)でログインし，リソースの欄にサブスクリプションがない場合（下図参照），先に以下のURLからサブスクリプションを申請してください．
  ⋯
  ![](/_astro/01_firsttimeusing.webp)
  参考：[サブスクリプションとは](/research_computing/utokyo_azure/faq/subscription/)
- - Azureサービスの一覧の中から仮想マシンを選択します．
-   - 一覧に無い場合、画面上部にある検索欄で検索するか，一覧の右にあるその他のサービスを選択、左側にあるリストからコンピューティングを選択すると，右側に表示されるメイン画面のInfrastructure as a Service(IaaS)の中にあります．
- ![](/_astro/02_selectvm.webp)
- - Virtual Machines のメインページが表示されたら，＋作成をクリックしAzure仮想マシンを選択ます．
- ![](/_astro/03_start.webp)
- 補足：複数マシンによるクラスタ構成を組みたい場合は[スケールセット(VMSS)](https://learn.microsoft.com/ja-jp/azure/virtual-machine-scale-sets/overview)を選択ください．その場合のこの後の構成手順はリンク先をご参照ください．
- ## ２．仮想マシンを構成する
- 補足：説明のない項目は，基本的に初期設定のままで構成することを前提としています．
+ ### 重要
+ OSディスクの種類の選択で，初期選択のPremium SSDを選択すると Standard HDD の約３～５倍のクレジットを消費し，Standard SSDの場合は約２倍のクレジットを消費するため，想定外のクレジット消費が発生し問い合わせるケースが増えております．ディスクに高性能を求める構成でなければStandard HDDをご選択ください．
+ 注意：Standard HDDは 2028 年 9 月に提供が終了される予定で，それまでにStandard SSDかPremium SSDに移行する必要がある旨 Microsoft Azure からアナウンスされています．当面はまだ利用可能ですが，長期利用を検討されている場合はあらかじめご留意ください．
+ ### UTokyo Azure 向け補足
  ヘルプ：UTokyo Account で仮想マシンに ssh ログインさせたい場合
  仮想マシンに UTokyo Account の認証を使ってログインすることができます．手順は以下のURLを参照ください．
  [UTokyo Account で仮想マシンに ssh ログインする](/research_computing/utokyo_azure/virtualmachine/entraid_login/)
- ### 基本パート
- #### プロジェクトの詳細
- - [サブスクリプション](/research_computing/utokyo_azure/faq/subscription/)：事前に申請したサブスクリプションがすでに設定されていますので、通常はそのままで問題ありません．設定が無い場合はサブスクリプションが作成完了しているかどうか確認ください．
- - [リソースグループ](https://learn.microsoft.com/ja-jp/azure/azure-resource-manager/management/manage-resource-groups-portal)：ここでは新規にresource_groupというリソースグループ名で作成し，以下に作成される各リソースをまとめます．まとめられたリソースは，権限の継承や削除などを一括で対応することが可能となります．
- ![](/_astro/04_base1.webp)
- #### インスタンスの詳細
- - 仮想マシン名：仮想マシンをAzure Portal 内で管理する際の名称です．わかりやすい名称を入力してくだささい．ここではtestmachineと入力しています．
- - リージョン：仮想マシンをどの地域（リージョン）にあるデータセンターにデプロイするかを指定します．使いたい機能が特定の国のリージョンにしかない場合は，その国のリージョンを選択ください．海外のパブリッククラウド上での情報管理に不安がある場合は日本国内（Japan East かJapan West）のリージョンを選択することも可能です．
- - 可用性オプション：特段の必要が無ければインフラストラクチャ冗長は必要ありませんを選択してください．
- ヘルプ：可用性ゾーンとは
- 同一リージョン内で，ネットワーク，電源，冷却装置等が独立しているデータセンターの集合で，イメージとしては，隣接している複数のビルそれぞれに独立して構築されているデータセンター（ゾーン）が一つの可用性ゾーンを形成している感じになります．
- 可用性ゾーンは通常3ゾーン以上で構成されていて，ゾーンを複数指定するとそのゾーン間でプライマリバックアップやHAを構成することが可能になります．
- ※ 本利用例の通りに設定した場合は冗長構成はとられず，いずれかのゾーン内に単独で構成されます．
- - イメージ：利用したいＯＳを選択してください．ここでは ubuntu OS を選択しています．
- ヘルプ：WindowsOS を選択した場合
+ ヘルプ：仮想マシン OS に Windows OS のテンプレートを選択した場合
  ページ最下部にマルチテナントをホストする権利を持つ有効な Windows 10/11 ライセンスを所有していますという項目があるのでチェックを入れてください．UTokyo Azure では [UTokyo Microsoft License](/microsoft/) で認証されたOSを利用できます．※Server エディションは適用外です．ご注意ください．
- また，WindowsOS は必要最小スペックが高めですので、VMサイズを選択する際は Windows 10/11 での最小スペックにご注意ください．特に Windows11 を選択する場合は [Microsoft Learn：Azure 仮想マシンでの Windows 11 のサポート](https://learn.microsoft.com/ja-jp/troubleshoot/azure/virtual-machines/windows/windows-11-support-azure-virtual-machines)を事前に参照ください．
- - サイズ：CPUコア数やメモリ量などの組み合わせを選択してください．右側にある金額は，それを選択した際にかかると予想される費用試算（月額）です．その他の選択や利用状況により増減するので、ご参考程度にお考え下さい．
- ![](/_astro/05_base2.webp)
- #### 管理者アカウント
- 認証の種類がSSH公開キーになっていない場合は必ずSSH公開キーを選択してください．安易なパスワードを設定するとすぐに侵入されます。そのような事件が後を絶ちませんので「パスワード」は選択しないで下さい。
- ヘルプ：すでにお使いのSSH公開鍵を使いたい場合
- SSH 公開キーのソースを既存の公開キーを使用に切り替え，SSH公開キー欄に，使いたい公開キーをコピー＆ペーストしてください．
- #### 受信ポートの規則
- - ここでは初期設定のままで進めます．既にご希望がある場合は設定を変更してください．
+ Windows 10 は 2025年10月に公式のサポートは終了しております．互換性等の事情で必須である場合以外は Windows 11 を選択してください．
+ Windows OS は必要最小スペックが高めですので，VMサイズを選択する際は最小スペックにご注意ください．特に Windows 11 を選択する場合は [Microsoft Learn：Azure 仮想マシンでの Windows 11 のサポート](https://learn.microsoft.com/ja-jp/troubleshoot/azure/virtual-machines/windows/windows-11-support-azure-virtual-machines)を事前に参照ください．
+ ヘルプ：最後の確認で「優先する電話番号」という項目がある場合
+ 本サービス契約担当者の電話番号が自動入力されていますので変更しないようお願いします．この項目が表示されない場合はそのまま進めて問題ありません．
+ ### その他
+ ヘルプ：可用性ゾーンとは
+ 同一リージョン内に配置された，ネットワーク・電源・冷却設備などが独立したデータセンター群を指します．概念としては，隣接する複数の建物にそれぞれ独立して構築されたデータセンター（ゾーン）が，1つの可用性ゾーンを構成しているイメージです．
+ 一般的に，可用性ゾーンは3つ以上のゾーンで構成されます．複数のゾーンを指定することで，ゾーン間でプライマリ／バックアップ構成やHA（High Availability：高可用性）構成を実現できます．
  ヘルプ：Bastion サービス（踏み台サーバサービス）を利用する場合
  [Bastion サービス](/research_computing/utokyo_azure/virtualmachine/bastion/) を利用してリモートコンソール接続を行う場合，パブリック受信ポートはなしを選択してください．
  ヘルプ：運用開始後の受信ポート規則について
  ここで選択する受信ポート規則はVM作成直後の接続用の設定なので，運用中に通信するポート規則は仮想マシン作成後，[ネットワークセキュリティグループ](/research_computing/utokyo_azure/virtualmachine/nsg/)機能で改めて設定してください．
- ### ディスクパート
- #### VMディスクの暗号化
- ここでは初期設定のままで進めます．既にご希望がある場合は設定を変更してください．
- #### OSディスク
- - OSディスクサイズ：いくつかのサイズから選択できますので，必要な容量を選択ください．
- - OSディスクの種類：初期選択のPremium SSDは Standard HDD の約３～５倍，Standard SSDは約２倍の費用がかかるので．ディスクに高性能を求める構成でなければSatndard HDDをご選択ください．
- ![](/_astro/06_osdisk.webp)
- ### ネットワーク，管理，監視，詳細，タグの各パート
- - ここでは初期設定のままで進めます．既にご希望がある場合は設定を変更してください．
- ヘルプ：Bastion サービス（踏み台サーバサービス）を利用する場合
- [Bastion サービス](/research_computing/utokyo_azure/virtualmachine/bastion/) を利用し，かつデータ転送用に外部からの接続を許可する必要が無い場合は，パブリック受信ポート はなしを設定してください．
- ヘルプ：運用開始後の受信ポート設定について
- ここで選択する受信ポート規則はVM作成直後の接続用の設定なので，運用中に通信するポート規則は仮想マシン作成後，[ネットワークセキュリティグループ](/research_computing/utokyo_azure/virtualmachine/nsg/)機能で改めて設定してください．
  ヘルプ：定期的に仮想マシンをシャットダウンさせたい場合
  毎日定期であれば，管理パートの自動シャットダウンに条件を入力して下さい．もう少し複雑な操作（平日だけや自動起動も行わせる等）をさせたい場合は，監視サービスを利用してください．
  ヘルプ：一定時間利用をしなかった場合に自動でシャットダウンさせたい場合
  [CPU使用率が一定時間に一定値以下だった場合の構成例](/research_computing/utokyo_azure/virtualmachine/autostop/)を参照ください．
- ### 確認及び作成パート
- 構成内容の検証結果，１時間ごとの予想費用，使用条件及びここまで設定してきた内容の詳細の確認の画面が表示されるので，問題が無ければ画面左下の確認及び作成ボタンをクリックしてください．
- ヘルプ：「優先する電話番号」という項目がある場合
- 本サービス契約担当者の電話番号が自動入力されていますので変更しないようお願いします．この項目が表示されない場合はそのまま進めて問題ありません．
- ![](/_astro/07_confirm1.webp)
- ## ３．仮想マシンを作成する
- 確認及び作成をクリックするとVM作成が実行されます．
- - SSH鍵の新規作成を選択した場合，SSH鍵ペアの秘密鍵をダウンロードするかどうかの選択が表示されるので，ダウンロードしてください．リモートから初期アクセスする際にこの秘密鍵を使ってログインします．作成した仮想マシンにログインするリモート端末の適切な場所に，秘密鍵を事前に配置してください．
- ![](/_astro/08_sshkey.webp)
- デプロイが完了しましたと表示されたら作成終了です．
- ![](/_astro/09_complete.webp)
- ## ４．仮想マシンにログインする
- 以下はパブリックIPに直接 ssh でアクセスする例です．できる限り[Bastion](/research_computing/utokyo_azure/virtualmachine/bastion/)等の機能を使ってアクセスするようにしてください．
- リソースに移動または仮想マシンリソース名のリンクをクリックすると，割り当てられたグローバルIPアドレスが画面右側に表示されていますので，そのIPアドレスに対してご自身の端末からSSHログインを行いログインできたら完了です．
- ![](/_astro/11_ipaddress.webp)
- - ssh -i [ダウンロードした秘密鍵] azureuser@[IPアドレス]
- ![](/_astro/12_sshlogin.webp)
- ログイン成功後は必要に応じて，作業用アカウントの作成や /etc/sudoers の編集などを行ってください．
- ## 補足．仮想マシンの一時休止
+ ## 仮想マシンの一時休止
  仮想マシンはそのままにするとCPU，GPUの利用に課金され続けるので．常時起動が不要な場合，利用しない時間は仮想マシンを止めておきます．
- - 仮想マシンリソースの詳細で上部に、停止ボタンがあるのでクリックする．
+ - 仮想マシンリソースの詳細で上部に，停止ボタンがあるのでクリックする．
  ![](/_astro/13_suspend.webp)
  - 確認のウィンドウが表示されるので，はいをクリックして停止する．
  ![](/_astro/14_confirm.webp)
  - 利用が完全に終了した仮想マシンであれば，仮想マシン自体を削除することでもギフトクレジットの消費は停止します．
- - デプロイしたマシンからhaltやshotdownを実施してもマシンは停止しますが，Azure Portal のリソース上は起動したままの表示になっていますので，改めて起動したい場合は再起動をクリックしてください．
+ - デプロイしたマシンからhaltやshutdownを実施してもマシンは停止しますが，Azure Portal のリソース上は起動したままの表示になっていますので，改めて起動したい場合は再起動をクリックしてください．
  - ストレージは，VMの状態に関わらずストレージサービス自体を停止または削除しない限り常にギフトクレジットを消費し続けます．ご注意ください．
```

[← 一覧へ](<../README.md>)
