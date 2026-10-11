# FAQ：UTokyo Azure

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/faq/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/faq/>) | [`src/pages/research_computing/utokyo_azure/faq/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/7863cea4b1fcef7da4d36022e61aefeab8a144e5/src/pages/research_computing/utokyo_azure/faq/index.mdx>) |
| English | 変更 | [`/en/research_computing/utokyo_azure/faq/`](<https://utelecon.adm.u-tokyo.ac.jp/en/research_computing/utokyo_azure/faq/>) | [`src/pages/en/research_computing/utokyo_azure/faq/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/7863cea4b1fcef7da4d36022e61aefeab8a144e5/src/pages/en/research_computing/utokyo_azure/faq/index.mdx>) |

## 日本語

```diff
  ギフトクレジットによる利用はMicrosoftの仕様で一部サービスが制限されていること，利用者に公平にギフトを配分する仕組みを東大独自に導入していること等により，通常の利用とは主に以下のような違いがあります．
  - Marketplace（サードパーティが提供するサービス）は利用することができません．仮想マシンのイメージやAIサービスのサーバレスAPI等で多くあります．
- - Microsoft のギフト管理が通常の料金管理と独立しているため，Azure Portal のコスト・予算管理関係の機能が利用できません．無料分や使用した料金に関しては[UTokyo Azure 新規利用申請ページ](http://azure.itc.u-tokyo.ac.jp/)の管理ページを参照ください．
+ - Microsoft のギフト管理が通常の料金管理と独立しているため，Azure Portal のコスト・予算管理関係の機能が利用できません．無料分や使用した料金に関しては[UTokyo Azure サブスクリプション管理サイト](http://azure.itc.u-tokyo.ac.jp/)の使用量ページを参照ください．
  - 使用料は従量課金一択になります．予約プランや節約プラン等の割引プランは利用できません．
- - [UTokyo Azure 新規利用申請ページ](http://azure.itc.u-tokyo.ac.jp/)から申請したサブスクリプションでのみ利用可能です．その他の方法で作成されたサブスクリプションは UTokyo Azure では利用できません．
+ - [UTokyo Azure サブスクリプション管理サイト](http://azure.itc.u-tokyo.ac.jp/)から申請したサブスクリプションでのみ利用可能です．その他の方法で作成されたサブスクリプションは UTokyo Azure では利用できません．
  - 無料保証枠の約90%を利用した時点でサブスクリプションを自動停止する機能を UTokyo Azure 独自に提供しています．
  ヘルプ：いつまで使い続けられますか
  ⋯
  ### 利用者
  ヘルプ：このサービスは誰が利用できますか
- 東大の構成員なら誰でも使えますが, UTokyo Account をお持ちの方が [UTokyo Azure 新規利用申請ページ（学内ネットワークからのアクセスに限定）](http://azure.itc.u-tokyo.ac.jp/)より利用申請を行い，[サブスクリプション](/research_computing/utokyo_azure/faq/subscription/)を開設する必要があります. 共同利用したいユーザーには，開設したサブスクリプションに後から他のユーザの権限を追加(利用権利を与える)ことも可能です
+ 東大の構成員なら誰でも使えますが, UTokyo Account をお持ちの方が [UTokyo Azure サブスクリプション管理サイト（学内ネットワークからのアクセスに限定）](http://azure.itc.u-tokyo.ac.jp/)より利用申請を行い，[サブスクリプション](/research_computing/utokyo_azure/faq/subscription/)を開設する必要があります. 共同利用したいユーザーには，開設したサブスクリプションに後から他のユーザの権限を追加(利用権利を与える)ことも可能です
  ヘルプ：学生は利用できますか
  学生を Azure 上に作成した仮想マシンの利用者にすることは問題無く可能です．後からサブスクリプション等のメンバーにすることも可能です．ただし，無料分を超えた利用料の支払いが必要なため，サブスクリプションの申請は教職員に限られます．
  ヘルプ：学外の人と共同利用することはできないのでしょうか．
- Azure Portal や UTokyo Azure 新規利用申請ページへのログインは UTokyo Account で認証するため，これらの利用はすでに UTokyo Account を保有している人に限られます．
+ Azure Portal や UTokyo Azure サブスクリプション管理サイトへのログインは UTokyo Account で認証するため，これらの利用はすでに UTokyo Account を保有している人に限られます．
  ただし，例えば作成した仮想マシン上で動かしている OS へのログイン認証は UTokyo Account の権限に依存しないため，学外の共同研究者を OS にアカウント登録して利用させるといったことは可能です．
  ### サブスクリプション
  ⋯
  サブスクリプションIDはサブスクリプションの詳細画面で確認できます．
  ヘルプ：サブスクリプションを誤って取り消した場合にサービスやデータは復旧できますか
- 基本は取り消したサブスクリプションの復旧はできないとお考え下さい．サービスの継続利用をお考えの場合，新規申請ページのサブスクリプション管理ページからサブスクリプションの自動停止機能を必ずOFFに切り替えてください．
+ 基本は取り消したサブスクリプションの復旧はできないとお考えください．サービスの継続利用をお考えの場合，サブスクリプション管理サイトからサブスクリプションの自動停止機能を必ずOFFに切り替えてください．
  ### 権限（ロール）
  ヘルプ：特権管理者ロールの所有者と共同作成者は何が違うのでしょうか
  ⋯
  ある月の利用料のうち，ギフトクレジットから支払いされ無料となる分の金額で, 月末に全ユーザの利用料を元に計算されます．各利用者は無料分を超過した分の利用料を自身の研究費等から支払わなければなりません．
  具体的には，およそ半期毎に各月の超過分・余剰分を集計して通算の超過額を計算します．この時に超過した額を情報基盤センターより請求する予定です．詳細は [UTokyo Azure 説明会資料](/events/2025-02-21/slides/3_application_guidelines.pdf)をご参照ください．
- 無料分の額は毎月末に，その月の大学全体の利用料やサブスクリプションの数を加味して公平になるように計算されます．各月の使用料は [UTokyo Azure 新規利用申請ページの管理ページ](http://azure.itc.u-tokyo.ac.jp/list)から確認できます．
+ 無料分の額は毎月末に，その月の大学全体の利用料やサブスクリプションの数を加味して公平になるように計算されます．各月の使用料は [UTokyo Azure サブスクリプション管理サイトの使用量ページ](http://azure.itc.u-tokyo.ac.jp/list/usage)から確認できます．
  ヘルプ：無料保証枠とはなんですか
  毎月の無料分は月末に計算されるので，その月に使用した分の全額あるいは何割が無料になるのかが月末になるまでわかりません．これは確実に無料の範囲内で UTokyo Azure を使いたい利用者にとっては不安かもしれません．
  そこで月初めに，この額までは必ず無料になるという最低保証額を公表しています．これが無料保証枠です．月末に集計される無料分よりは少ない額になります．
- 無料保証枠は [UTokyo Azure 新規利用申請ページの管理ページ](http://azure.itc.u-tokyo.ac.jp/list)から確認できます．
+ 無料保証枠は [UTokyo Azure サブスクリプション管理サイトの使用量ページ](http://azure.itc.u-tokyo.ac.jp/list/usage)から確認できます．
  ヘルプ：無料分や無料保証枠の計算方法を知りたい
  計算方法の詳細は[UTokyo Azure 学内者限定情報発信サイト](https://sites.google.com/g.ecc.u-tokyo.ac.jp/utokyo-azure-internal/)にあります UTokyo Azure 利用料金規則 を参照ください．
+ ヘルプ：「重み」が反映されない，または自分の計算と合わないのですが
+ 重みには，サブスクリプションに有効に登録されている，ユニークかつ有効なアカウントが反映されます．ロールは Active で設定してください．
+ 同じアカウントが同一サブスクリプション内に複数のロールで登録されている場合重複排除されます．別のサブスクリプションに登録されている場合はそれぞれ有効です．
+ 重みの再集計は毎月1日のとあるタイミングで実施されます．ロール設定直後は反映されませんので，翌月までお待ちください．
  ヘルプ：自分の無料保証枠がどのくらい残っているか，あとどのくらい無料で使えるかを知りたい
- 所有者権限のアカウントのみ：[UTokyo Azure 新規利用申請ページの管理ページ](http://azure.itc.u-tokyo.ac.jp/list)から，ご自身のサブスクリプションが今どの程度利用されているかが表示されます．また，無料分全体を利用者全体でどの程度消費したかをグラフで表示しています．これらの情報の更新は１日単位です．
+ 所有者権限のアカウントのみ：[UTokyo Azure サブスクリプション管理サイトの使用量ページ](http://azure.itc.u-tokyo.ac.jp/list/usage)から，ご自身のサブスクリプションが今どの程度利用されているかが表示されます．また，無料分全体を利用者全体でどの程度消費したかをグラフで表示しています．これらの情報の更新は１日単位です．
  また，UTokyo Azure 独自機能として，無料保証枠の 50%, 75%, 90%, 100%, のそれぞれに達した際に，所有者の登録メールアドレス宛に通知メールを送信します．これらの情報もご活用ください．
  ヘルプ：特定のリソースのギフトクレジット消費量を知りたい
- 所有者権限のアカウントのみ：[UTokyo Azure 新規利用申請ページの管理ページ](http://azure.itc.u-tokyo.ac.jp/list)の最後の方に，リソース単位での詳細情報が表形式で表示されますので，そのうちの Cost の項目を参照ください．表示される金額はその日に消費された量ですので，トータルで知りたい場合は，同じリソースの Cost について知りたい期間分合計してください．
+ 所有者権限のアカウントのみ：[UTokyo Azure サブスクリプション管理サイトの使用量ページ](http://azure.itc.u-tokyo.ac.jp/list/usage)の最後の方にサブスクリプションの使用量内訳をCSVでダウンロードというリンクがありますので，そこをクリックすると，利用開始からのすべての詳細情報がCSV形式でダウンロードされます．そのCSVファイルを開き Cost の項目を参照ください．1行はそのサービスをその日に消費した量ですので，トータルで知りたい場合は，同じリソースの Cost について知りたい期間分の行を合計してください．
  ヘルプ：複数人でサブスクリプションを共有していて，自分が消費した分を知りたい
  消費量を確認できる最小単位はサブスクリプションまでで，ユーザーアカウント単位では確認できません．ただし，特定のリソースを自分だけが使っているという場合は，リソース単位での確認は可能です．詳細はFAQ：[特定のリソースのギフトクレジット消費量を知りたい](/research_computing/utokyo_azure/faq/#:~:text=%E3%83%98%E3%83%AB%E3%83%97%EF%BC%9A%E7%89%B9%E5%AE%9A%E3%81%AE%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E3%81%AE%E3%82%AE%E3%83%95%E3%83%88%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E6%B6%88%E8%B2%BB%E9%87%8F%E3%82%92%E7%9F%A5%E3%82%8A%E3%81%9F%E3%81%84)をご参照ください．
+ ヘルプ：どういう条件で請求が発生するのかがわからない
+ [UTokyo Azure サブスクリプション管理サイトの使用量ページ](https://azure.itc.u-tokyo.ac.jp/list/usage)に表示される各サブスクリプションの使用量で，請求額欄に$0.0以外の金額が表示された場合，10月または4月にその金額の日本円換算分が請求されます．詳細は[請求の確認方法](/research_computing/utokyo_azure/faq/usage/)のページを参照ください．
  ヘルプ：管理ページでの金額表示が米ドルなのですが
  Microsoft のギフトクレジットの取り扱い仕様により米ドルで管理されるため表示も米ドルになります．申請者へ超過分の請求が発生した場合は，財務会計システムによってその時の変換レートで変換され日本円で請求されます．
  ⋯
  ヘルプ：利用したいサービスを使うと，どのくらいギフトクレジットを消費するのか予め確認したい
  Microsoft Azure に[料金計算ツール](/research_computing/utokyo_azure/support/calculator/)が用意されていますので，こちらをご活用ください．
- ヘルプ：想定していたよりギフトクレジットの使用料が多く，原因を調べて対応したい
- [UTokyo Azure 新規申請ページの管理画面](https://azure.itc.u-tokyo.ac.jp/list)の一番下に，使用料の内訳詳細が表になっていますので，こちらから各リソースが日毎に消費した使用料が確認いただけます．
- Cost の項で降順にすると，使用料の多い内訳が上に来ますので，そのリソースについて想定通りに設定されているか等を確認ください．
+ ヘルプ：想定していたよりギフトクレジットの使用量が多く，原因を調べて対応したい
+ [UTokyo Azure サブスクリプション管理サイトの使用量ページ](https://azure.itc.u-tokyo.ac.jp/list/usage)にサブスクリプションの使用量内訳をCSVでダウンロードというリンクがありますので，そこをクリックすると，利用開始からのすべての詳細情報がCSV形式でダウンロードされます．そのCSVファイルに使用量の内訳詳細が表になっていますので，こちらから各リソースが日毎に消費した使用量が確認いただけます．
+ Cost の項で降順にすると，使用量の多い内訳が上に来ますので，そのリソースについて想定通りに設定されているか等を確認ください．
  ヘルプ：仮想マシンを Windows OS で使いたい
  UTokyo Azure では，Windows OS を [UTokyo Microsoft License](/microsoft/) にて認証された状態で利用できます．仮想マシンを構成する際に，「マルチテナントをホストする権利を持つ有効な Windows 10/11 のライセンスを所有しています」にチェックを入れてください．
```

## English

```diff
  Assigning the Access Administrator role allows a user to grant roles to other accounts (members) without possessing owner privileges.
  When configuring this role, a “Conditions” section is added to the setup wizard; please ensure you select only the minimum necessary settings.
- ヘルプ：Role settings are not applied, or an error occurs when changing role settings.
+ Help: Role settings are not applied, or an error occurs when changing role settings.
  If you select Eligible as the assignment type when configuring permissions, the assignment will not take effect until the recipient approves it. (Important: Please do not select Eligible, as it requires a license.) Selecting Active makes the assignment effective immediately.
  The system treats permission settings configured as Eligible and those configured as Active as distinct entities, even for the same account. Consequently, if you attempt to add or modify permissions for an account that already has an Eligible or Active setting using the other type, an error will occur indicating that a role is already assigned to the account. If a role is currently set to Eligible, please remove it first and then reconfigure it as Active.
  ⋯
  Help: I want to know how to calculate the Free Tier and Guaranteed Free Tier
  For details on the calculation method, please refer to the UTokyo Azure Usage Fee Policy of the [UTokyo Azure：UTokyo Member-only Site](https://sites.google.com/g.ecc.u-tokyo.ac.jp/utokyo-azure-internal-en).
+ Help: The “weight” setting is not being reflected, or the figures do not match my own calculations.
+ Weight settings are based on individual accounts that are actively registered and valid within a subscription. Please set the role to “Active.”
+ If the same account is registered to multiple roles within the same subscription, duplicates are excluded from the weight calculation. If the same account is registered across different subscriptions, it is treated as valid within each respective subscription.
+ The recalculation of “weight” settings takes place at a specific time on the first day of each month. Changes are not reflected immediately after configuring a role, so please wait until the following month.
  Help: I would like to know how much Guaranteed Free Tier use is left and how much I can use for free.
  Owner only: The [UTokyo Azure New User Application Management Page](http://azure.itc.u-tokyo.ac.jp/list) will show you how much your subscription has used so far. It also shows a graph of how much of the free credits have been used by all users overall. This information is updated daily.
```

[← 一覧へ](<../README.md>)
