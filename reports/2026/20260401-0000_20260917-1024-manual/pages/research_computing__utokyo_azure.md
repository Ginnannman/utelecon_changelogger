# UTokyo Azure

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/>) | [`src/pages/research_computing/utokyo_azure/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/index.mdx>) |
| English | 変更 | [`/en/research_computing/utokyo_azure/`](<https://utelecon.adm.u-tokyo.ac.jp/en/research_computing/utokyo_azure/>) | [`src/pages/en/research_computing/utokyo_azure/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/research_computing/utokyo_azure/index.mdx>) |

## 日本語

```diff
  タイトル: UTokyo Azure | utelecon
- 説明: 目次: UTokyo Azure とは; 基本方針・目標; 運用規定など; 使ってみる; 主なサービス・利用法; ストレージ (データの置き場) について; 複数人グループでの利用; Azure...
+ 説明: 目次: UTokyo Azure とは; 基本方針・目標; 運用規定など; 使ってみる; 主なサービス・利用法; ストレージ (データの置き場) について; 複数人グループでの利用や権限設定; ...
  
  [全学向け高速計算機・データ活用基盤](/research_computing/) > UTokyo Azure
  ⋯
  運用は情報基盤センター，情報システム部，情報システム本部が共同で行います．提供にあたっての基本方針・目標は以下のとおりです．
  - 利用開始までの敷居を低く，タイムラグを短くし，初めての方を含めて多くの人に利用してもらい，本サービスがなければ必要になってしまう計算機の調達の費用や時間をなくし，本学の研究の加速に貢献する．
- - 研究・教育目的で、分野を限定せずに広く利用可能とする
+ - 研究・教育目的で，分野を限定せずに広く利用可能とする
    - 注：事務業務目的でも動作・機能などを検証する目的であれば利用可能です．検証後本格利用に移行する際は，本サービスではなく別途 Microsoft Azure を個別に契約してください．
  - 運用側で利用可能なサービスを取捨選択し，狭く限定することなく Azure で利用可能なサービスを広く利用可能とする．
  ⋯
  - 運用規定，ギフトクレジットの量，利用料金が発生する場合やその際の料金の計算規則などについては，[学内者限定情報の発信サイト](https://sites.google.com/g.ecc.u-tokyo.ac.jp/utokyo-azure-internal/) （東大のGoogleアカウント --- [ECCSクラウドメール](/google/) --- でのサインインが必要です）にて提供していますのでご覧ください
  ## 使ってみる
+ 重要：[AI for Science萌芽的挑戦研究創出事業（SPReAD)](https://www.mext.go.jp/aifors_spread/)での利用をご検討されている場合は，Microsoft が提供する SPReAD 向けパッケージのご利用をご検討ください．詳細は以下の資料をご参照下さい． リンク：[AI for Sciense への Microsoft の取り組み](https://univtokyo.sharepoint.com/:b:/t/Teams.azure.adm/IQAOCz0SZ1dDRakJZZoMvzZtAYqpwaZuhHoM_8HSAkdEFaM?e=TJk4Hf)（要 UTokyo Account）
  重要：本サービスはギフトクレジットが提供される5年間という年限があるサービスとなります．その後の継続については未定なので，長期利用をご検討される場合はその点にご注意ください．詳細は[学内者限定情報の発信サイト](https://sites.google.com/g.ecc.u-tokyo.ac.jp/utokyo-azure-internal/)等もご参照ください．
  - まず[UTokyo Azure新規利用申請ページ（学内ネットワークからのアクセスに限定）](http://azure.itc.u-tokyo.ac.jp/)から利用申請をして下さい．
-   - 申請ができるのは、利用料金が発生したときに支払いについて責任を持てる教職員に限られます．学生で利用したい人は適切な立場の人（指導教員など）にご相談下さい．
+   - 申請ができるのは，利用料金が発生したときに支払いについて責任を持てる教職員に限られます．学生で利用したい人は適切な立場の人（指導教員など）にご相談下さい．
  - 申請をするとあなたの UTokyo Account に紐付いた，本サービス用の[サブスクリプション](/research_computing/utokyo_azure/faq/subscription/)が割り当てられます．
- 重要：割り当てられたサブスクリプションには、UTokyo Azure 独自の機能として無料保証枠の90%を使い切った時点でサブスクリプションを自動停止するという機能があり、初期設定では有効になっております。
- 無料保証枠内で利用を確実に止めたい利用者への機能となりますが、停止されると即時にサブスクリプションが取り消され、復旧ができなくなりリソースへのアクセスも不可になります。
- データ等のリソースを取り消されたくない場合は、サブスクリプションを作成後忘れずに[UTokyo Azure新規利用申請ページの管理ページ](https://azure.itc.u-tokyo.ac.jp/list)から当該サブスクリプションの自動停止機能を無効に設定変更してください。
+ 重要：割り当てられたサブスクリプションには，UTokyo Azure 独自の機能として無料保証枠の90%を使い切った時点でサブスクリプションを自動停止するという機能があり，初期設定では有効になっております．
+ 無料保証枠内で利用を確実に止めたい利用者への機能となりますが，停止されると即時にサブスクリプションが取り消され，復旧ができなくなりリソースへのアクセスも不可になります．
+ データ等のリソースを取り消されたくない場合は，サブスクリプションを作成後忘れずに[UTokyo Azure新規利用申請ページの管理ページ](https://azure.itc.u-tokyo.ac.jp/list)から当該サブスクリプションの自動停止機能を無効に設定変更してください．
+ 無料分や無料保証枠，自動停止の詳細については以下の資料もご一読ください．
+ - [利用料金負担の可能性について](/events/2025-02-21/slides/2_possible_billing.pdf)
+ - [サブスクリプションとは](/research_computing/utokyo_azure/faq/subscription/)
+ - [UTokyo Azure 利用料金規則（学内のみアクセス可）](https://drive.google.com/file/d/129vmaJJmDqkUK0iOMOlkICYMWMw_ZiZL/view)
  - サブスクリプションができましたら[Azure Portal](https://portal.azure.com/) (ログインアカウントは[UTokyo Account](/utokyo_account/))へログインして使って下さい．
    - サブスクリプションを作成していなくても上記ポータルへのログインは可能です．どのようなサービスが使えるかなどは申請前でも確認することが可能です．
  参考：[利用申請の流れと注意点](/events/2025-02-21/slides/3_application_guidelines.pdf) (2025.02.21 UTokyo Azure 説明会資料)
  ## 主なサービス・利用法
- - 研究・教育でよく現れる利用シーンを想定して、Azure をあまり使ったことがないというユーザー向けにクイックスタートできる手順を説明しています．
+ - 研究・教育でよく現れる利用シーンを想定して，Azure をあまり使ったことがないというユーザー向けにクイックスタートできる手順を説明しています．
  - できるだけ初期設定を変えずに利用する手順となりますので．本格的な利用の際は各設定項目をご自身の利用にあった設定に変更してください．
  - 利用例は順次追加や更新を行う予定です．
  - 参考：[UTokyo Azure 説明会](/events/2025-02-21/)
  ### 仮想マシン
- #### [仮想マシン](/research_computing/utokyo_azure/virtualmachine/)
- - 定番である各 Linux ディストリビューションをはじめ，[UTokyo Microsoft License](/microsoft/) によって Windows OS を仮想環境で利用することができます．
+ [仮想マシン](./virtualmachine/)を用いることで，定番である各 Linux ディストリビューションをはじめ，[UTokyo Microsoft License](/microsoft/) によって Windows OS を仮想環境で利用することができます．
  ### AI サービス
- #### [Azure Machine Learning](/research_computing/utokyo_azure/ai/aml/)
- - GPT などの既存モデル（生成AI）を Azure 経由で Web ブラウザや Python プログラムから利用することができます．ChatGPT のような利用も可能です．
- #### [Microsoft Foundry](/research_computing/utokyo_azure/ai/azureai/)
- - Azure における AI サービスの総合プラットフォームで、OpenAI 社によるものだけでなく LLama や Mistral など様々なモデルが選択可能です
- - OpenAI のモデルも含め，通常はこちらからご利用ください．
- #### [Azure OpenAI](/research_computing/utokyo_azure/ai/openai/)
- - ChatGPT のようなブラウザ上で AI とチャットをするサービスや、それをプログラムから呼び出す API を利用可能です．
- - OpenAI 社が提供する GPT シリーズのモデルのみを Azure で利用したい場合、この手順が簡単です．
-   - Foundry 以降は Azure OpenAI も順次統合され，初期手順に少し違いがある以外，最終的には Foundry ポータルでデプロイして利用する形となるため，OpenAI 利用の場合も通常は Microsoft Foundry からデプロイしてください．過去に調整したモデルとのAPI互換性などが問題になる場合はこちらをご利用ください．
+ [AI サービス](./ai/)の利用例を紹介しています．
  ## ストレージ (データの置き場) について
  #### [Azure Blob Storage](/research_computing/utokyo_azure/storage/)
  ⋯
  #### [Azure Files](/research_computing/utokyo_azure/storage/filesystem/)
  - NFS や SMB 等のネットワークファイルシステムとしてアクセスできるストレージです．古くからあるファイルシステムなので様々な環境からアクセスが可能です．
- ## 複数人グループでの利用
- 一つのサブスクリプションやリソースを複数人で共有するためには，そのサブスクリプションまたはリソースに共有者の UTokyo Account を必要な権限で付与します．詳細は以下を参照ください．
+ ## 複数人グループでの利用や権限設定
+ 一つのサブスクリプションやリソースを複数人で共有するためには，そのサブスクリプションまたはリソースに共有者の UTokyo Account を必要な権限で付与します．学生に利用させたいがどのように追加すれば良いか等，詳細は以下を参照ください．
  - [複数人グループでの利用](/research_computing/utokyo_azure/group/)
  ## Azure を学習する
  ⋯
  - 特に多い（多そうな）問い合わせはこちらにまとめてあります．
  ### UTokyo Slack
- - UTokyo Azure ユーザー向けのコミュニティワークスペースを開設しました．登録は自由に行っていただけますので，ぜひ登録いただきユーザー間での情報共有等にご活用ください。
+ - UTokyo Azure ユーザー向けのコミュニティワークスペースを開設しました．登録は自由に行っていただけますので，ぜひ登録いただきユーザー間での情報共有等にご活用ください．
    - help-utokyo-azure：質疑応答
    - information-exchange：情報交換
  ⋯
    - [UTokyo Slackに自由に参加できるワークスペースの中から選んで参加する](/slack/join/)のページの内容を参考に，UTokyo Azure Users Community への参加をご選択ください．
  ### [Microsoft Copilot](/notice/2024/03-microsoft-copilot)
- - UTokyo Account でログインすることで組織アカウントとしての利用が可能で，複雑な質問でなければ高い正確性で回答が得られま す．
+ - UTokyo Account でログインすることで組織アカウントとしての利用が可能で，複雑な質問でなければ高い正確性で回答が得られます．
  - 本学における生成系AIの利用についての注意条項（リンク先）をご一読いただいた上で利用ください．
- - 注意： 組織アカウントの利用が可能なのはリンク先で説明されているものになります．Azure Portal にアイコンがある Azure for Copilot は対象外なのでご注意ください．
+ - 注意： 組織アカウントの利用が可能なのはリンク先で説明されている MS365 for Copilot になります．Azure Portal にアイコンがある Azure for Copilot は対象外なのでご注意ください．
  ### [Microsoft サポート](https://portal.azure.com/#view/Microsoft_Azure_Support/HelpAndSupportBlade/~/overview)
- - Microsoft の担当者に問い合わせができます．特にクォータ要求に関する問い合わせはこちらから問い合わせください．
  - 技術的な問い合わせには Microsoft Azure 関連のドキュメントや FAQ，コミュニティへの導線が示されます．正確な回答を得るためには，問い合わせ内容や選択肢をできるだけ具体的にかつ正確に入力，選択ください．
  - サポートリクエストを起票できる条件や起票手順は以下を参照ください．
  ⋯
  - [utelecon のサポート窓口](/support/) 経由での問い合わせを受け付けています．
  - 東大 UTokyo Azure サポート担当連絡先： [utokyo-azure-group@g.ecc.u-tokyo.ac.jp](mailto:utokyo-azure-group@g.ecc.u-tokyo.ac.jp)
- ## 引用・謝辞・成果の登録
+ ## 引用・謝辞・成果の登録及び公開
  ### UTokyo Azure の引用
  UTokyo Azure を利用して得られた研究成果を含む論文もしくは，UTokyo Azure に関連する論文を執筆される際は，以下の論文を引用ください．
  ⋯
  - [BibTex：J-STAGE](https://www.jstage.jst.go.jp/AF06S010ShoshJkuDld?sryCd=jacn&noVol=29&noIssue=1&kijiCd=29_0030&kijiLangKrke=en&kijiToolIdHkwtsh=AT0073&request_locale=EN)
  ### 謝辞の記載
- UTokyo Azureを利用して得られた研究成果を論文や学会等で発表する際には、以下の例文を参考に謝辞を記載いただきますようお願いいたします。
+ UTokyo Azureを利用して得られた研究成果を論文や学会等で発表する際には，以下の例文を参考に謝辞を記載いただきますようお願いいたします．
      （日）：本研究成果（の一部）は、UTokyo Azure （https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/） を利用して得られたものです。 
      
      （英）：In this research work, we used the UTokyo Azure (https://utelecon.adm.u-tokyo.ac.jp/en/research_computing/utokyo_azure/). 
  ### UTokyo Azure 研究成果登録フォーム
- UTokyo Azure では，UTokyo Azure のサービスを利用して得られた研究成果を含む論文，学会および研究会発表，受賞情報等の情報を収集しております．下記フォームより研究成果の登録をお願いいたします．登録にかかる時間は1～2分程度で，登録いただいた研究成果は utelecon の UTokyo Azure ページ上に掲載させていただきます．
+ UTokyo Azure では，UTokyo Azure のサービスを利用して得られた研究成果を含む論文，学会および研究会発表，受賞情報等の情報を収集し，公開しております．下記フォームより研究成果の登録をお願いいたします．登録にかかる時間は1～2分程度で，登録いただいた研究成果は utelecon の UTokyo Azure ページ上に掲載させていただきます．
  - [フォームへのリンク](https://forms.office.com/Pages/ResponsePage.aspx?id=T6978HAr10eaAgh1yvlMhN9LM82wpplHtTAZ4J-tYCxURDE4Q0VIR0JZWE4ySlBEUUs1MFNGQzQ0VyQlQCN0PWcu)
    - ご記入いただいた氏名，担当者メールアドレス等の個人情報は，登録内容の確認時にのみ使用し他の目的には一切利用いたしません．
+ ### UTokyo Azure 研究成果の公開
+ - [UTokyo Azure : Research Achievement](/research_computing/utokyo_azure/researchachievement/)
```

## English

```diff
  説明: Table of Contents: About UTokyo Azure; Operation Policies and Goals; Terms of Use and Related Inf...
  
- [High-performance computing and data utilization platform](/en/research_computing/) > UTokyo Azure
+ [High-performance computing and data platform](/en/research_computing/) > UTokyo Azure
  # UTokyo Azure
  ## About UTokyo Azure
  ⋯
  as well as
  - Browser-based computing environment such as Jupyter Notebook
- - Services that use Openai AI systems via a browser, and services that use it in API
+ - Services that use OpenAI AI systems via a browser, and services that use it in API
  Furthermore, a wide variety of CPUs and GPUs with various processor models and memory capacities is available, making the service applicable to a diverse range of purposes and fields.
  - Reference: [Information Session UTokyo Azure](/en/events/2025-04-18/slides/1_introduction.pdf) (April 18, 2025:Information Session Slide)
  ⋯
  - Since the gift credits are limited, the total consumption of gift credits across the university will be controlled by setting a target value, within which usage will be free. If usage exceeds the established target, users may be charged based on the amount of the excess.
  ## Terms of Use and Related Information
- - Terms of use, the amount of gift credits, cases where usage fees may apply, and the rules for calculating charges for each user are provided on the [internal information site](https://sites.google.com/g.ecc.u-tokyo.ac.jp/utokyo-azure-internal-en/) (accessible with a University of Tokyo Google account --- [ECCS Cloud Mail](/en/google/) --- sign-in required). Please refer to this site for more information.
+ - Terms of use, the amount of gift credits, cases where usage fees may apply, and the rules for calculating charges for each user are provided on the [internal information site](https://sites.google.com/g.ecc.u-tokyo.ac.jp/utokyo-azure-internal-en/) (accessible with a University of Tokyo Google account --- [ECCS Cloud Email](/en/google/) --- sign-in required). Please refer to this site for more information.
  ## Getting Started
  Important：This service will be available for up to five years while the gift credits are provided. There is no decision regarding its continuation after that, so please keep this in mind when considering long-term use. For more information: [UTokyo Azure:UTokyo Member-only Site](https://sites.google.com/g.ecc.u-tokyo.ac.jp/utokyo-azure-internal-en/)
  ⋯
    - You can log in to the portal even without an active subscription.
    - This allows you to check which services are available before applying.
- - Reference: [UTokyo Azure Worklow of Application](/en/events/2025-04-18/slides/3_how_to_apply.pdf) (April 18, 2025:Information Session Slide)
+ - Reference: [UTokyo Azure Workflow of Application](/en/events/2025-04-18/slides/3_how_to_apply.pdf) (April 18, 2025:Information Session Slide)
  ## Frequently Used Services and How to Use Them
  ### Virtual Machine
  ⋯
  ## Events
  | Date | Event |
- | 2026.02.13 | [Workshop: UTokyo Azure Day（Conducted in English）](/en/events/2026-02-13/) |
- | 2025.04.18 | [Information Session on UTokyo Azure（Conducted in English)](/en/events/2025-04-18/) |
+ | 2026.02.13 | [Workshop: UTokyo Azure Day (Conducted in English)](/en/events/2026-02-13/) |
+ | 2025.04.18 | [Information Session on UTokyo Azure (Conducted in English)](/en/events/2025-04-18/) |
  | 2025.02.21 | [Information Session on UTokyo Azure (Conducted in Japanese)](/events/2025-02-21/) |
  ## FAQ & Support
  ⋯
  - How to Join > [Joining an open workspace in UTokyo Slack](/en/slack/join/)
  #### [Microsoft Copilot](/notice/2024/03-microsoft-copilot/)
- - [URL](https://copilot.microsoft.com/)：Please log in using your [UTokyo Account](/utokyo_account/).
+ - [URL](https://copilot.microsoft.com/)：Please log in using your [UTokyo Account](/en/utokyo_account/).
  #### [Microsoft Support](https://portal.azure.com/#view/Microsoft_Azure_Support/HelpAndSupportBlade/~/overview)
  - This is where you can contact a Microsoft representative. If you have any questions, especially regarding quota requests, please contact us here.
  ⋯
  - Inquiries can be made through [utelecon technical support desk](/en/support/).
  - UTokyo Azure Support Team in UTokyo: [utokyo-azure-group@g.ecc.u-tokyo.ac.jp](mailto:utokyo-azure-group@g.ecc.u-tokyo.ac.jp)
- ## Citation / Aknowledgement / Research Achievement Registration
+ ## Citation / Acknowledgment / Research Achievement Registration
  ### citing UTokyo Azure
  When writing a paper that includes research results obtained using the UTokyo Azure platform or a paper related to the UTokyo Azure platform, please cite the following paper.
  ⋯
  - [RIS：J-STAGE](https://www.jstage.jst.go.jp/AF06S010ShoshJkuDld?sryCd=jacn&noVol=29&noIssue=1&kijiCd=29_0030&kijiLangKrke=en&kijiToolIdHkwtsh=AT0072&request_locale=EN)
  - [BibTex：J-STAGE](https://www.jstage.jst.go.jp/AF06S010ShoshJkuDld?sryCd=jacn&noVol=29&noIssue=1&kijiCd=29_0030&kijiLangKrke=en&kijiToolIdHkwtsh=AT0073&request_locale=EN)
- ### aknowledgement
- In publishing reports on the outcome of research using UTokyo Azure, please add the following example as an aknowledgement at the end of such papers.
+ ### acknowledgment
+ In publishing reports on the outcome of research using UTokyo Azure, please add the following example as an acknowledgment at the end of such papers.
  - In this research work, we used the UTokyo Azure ([https://utelecon.adm.u-tokyo.ac.jp/en/research_computing/utokyo_azure/](https://utelecon.adm.u-tokyo.ac.jp/en/research_computing/utokyo_azure/)).
  ### Research Achievement Registration Form
- We are collecting information on research outputs obtained using UTokyo Azure, including papers, conference and workshop presentations, awards, and related information.Please register your research outputs using the form below. It takes about 1-2 minutes to complete the registration. The registered research achievements will be posted on the page of the utelecon.
+ We are collecting information on research outputs obtained using UTokyo Azure, including papers, conference and workshop presentations, awards, and related information. Please register your research outputs using the form below. It takes about 1-2 minutes to complete the registration. The registered research achievements will be posted on the page of the utelecon.
  - [Link to the Form](https://forms.office.com/Pages/ResponsePage.aspx?id=T6978HAr10eaAgh1yvlMhBEMyX31D-ROnamqk3rQW6JUODdMOVQ5Q0pFVDVOTkJRTVAzSkFWVEhEQy4u)
    - The personal information you provide, such as your name and contact email address, will only be used to verify the registration details and will not be used for any other purpose.
```

[← 一覧へ](<../README.md>)
