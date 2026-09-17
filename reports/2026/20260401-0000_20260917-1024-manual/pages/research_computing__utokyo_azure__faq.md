# FAQ：UTokyo Azure

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/faq/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/faq/>) | [`src/pages/research_computing/utokyo_azure/faq/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/faq/index.mdx>) |
| English | 変更 | [`/en/research_computing/utokyo_azure/faq/`](<https://utelecon.adm.u-tokyo.ac.jp/en/research_computing/utokyo_azure/faq/>) | [`src/pages/en/research_computing/utokyo_azure/faq/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/research_computing/utokyo_azure/faq/index.mdx>) |

## 日本語

```diff
  ヘルプ：学生は利用できますか
  学生を Azure 上に作成した仮想マシンの利用者にすることは問題無く可能です．後からサブスクリプション等のメンバーにすることも可能です．ただし，無料分を超えた利用料の支払いが必要なため，サブスクリプションの申請は教職員に限られます．
- ヘルプ：学外の人と共同利用することはできないのでしょうか。
+ ヘルプ：学外の人と共同利用することはできないのでしょうか．
  Azure Portal や UTokyo Azure 新規利用申請ページへのログインは UTokyo Account で認証するため，これらの利用はすでに UTokyo Account を保有している人に限られます．
  ただし，例えば作成した仮想マシン上で動かしている OS へのログイン認証は UTokyo Account の権限に依存しないため，学外の共同研究者を OS にアカウント登録して利用させるといったことは可能です．
  ⋯
  ヘルプ：サブスクリプションを複数持つことはできますか
  サブスクリプションを複数申請することに制限は設けておりません．管理を分けたい等の必要に応じてご申請ください．ただし，ギフトクレジットは学内の構成員で共有する資産ですので，あからさまに実態とかけはなれた量の申請は行わない等のご配慮をお願いします．
- ヘルプ：特権管理者ロールの所有者と共同作成者は何が違うのでしょうか
- 所有者は，自身が所有者であるサブスクリプションやリソースに対して他者アカウント（メンバー）に権限（ロール）を付与することができますが，共同作成者にはその権限がありません．それ以外はほぼ所有者と同じ権限が共同作成者には与えられます．
- 注意点として、所有者の権限にはさらに段階があり，サブスクリプションの申請者はすべてのロールを割り当てることができる所有者の権限が設定されます．
  ヘルプ：すでに個人で契約しているサブスクリプションを UTokyo Azure に入れることはできますか
  できません．
  ヘルプ：申請したサブスクリプションやリソースを研究室のメンバー等で共同利用したい
  １つのサブスクリプションやリソースを複数の人間で共同利用したい場合は，共同利用させたいユーザーの UTokyo Account を，所有者や共同作成者として権限付加する必要があります．この操作は，付与したいサブスクリプションやリソースに所有者のアカウントで行う必要があります．詳細はこちらの[複数人グループでの利用](/research_computing/utokyo_azure/group/)を参照ください．
+ ヘルプ：サブスクリプションIDを知りたい
+ サブスクリプションIDはサブスクリプションの詳細画面で確認できます．
+ ヘルプ：サブスクリプションを誤って取り消した場合にサービスやデータは復旧できますか
+ 基本は取り消したサブスクリプションの復旧はできないとお考え下さい．サービスの継続利用をお考えの場合，新規申請ページのサブスクリプション管理ページからサブスクリプションの自動停止機能を必ずOFFに切り替えてください．
+ ### 権限（ロール）
+ ヘルプ：特権管理者ロールの所有者と共同作成者は何が違うのでしょうか
+ 所有者は，自身が所有者であるサブスクリプションやリソースに対して他者アカウント（メンバー）に権限（ロール）を付与することができますが，共同作成者にはその権限がありません．それ以外はほぼ所有者と同じ権限が共同作成者には与えられます．
+ 注意点として，所有者の権限にはさらに段階があり，サブスクリプションの申請者はすべてのロールを割り当てることができる所有者の権限が設定されます．
+ ヘルプ：共同作成者にもロール割り当てを許可したい
+ 特権管理者ロールの１つであるアクセス管理者を追加で割り当てると，所有者権限は無い状態で他者のアカウント（メンバー）に権限（ロール）を付与することができるようになります．
+ このロールを設定する場合，設定ウィザードに条件パートが追加されますので，できるだけ必要最低限を選択するようにしてください．
+ ヘルプ：権限を設定しても反映されない，変更時にエラーになる
+ 権限を設定する際に割り当てのタイプで対象（Eligible）を選択した場合，対象者が承認するまで有効になりません．（重要：対象はライセンスが必要なため選択しないでください．） アクティブ（Active）を選択すれば即時有効になります．
+ 対象による権限設定とアクティブによる権限設定は，同じアカウントに対してであってもシステム上別物として扱われてしまうため，既に対象またはアクティブで設定済みのアカウントに，それではないタイプで権限を追加または修正しようとすると，すでにそのアカウントにはロールが設定済みであるとしてエラーになります．もし対象でロール設定がされている場合は，一旦削除してアクティブで設定しなおしてください．
+ 参考：[複数人グループでの利用や権限設定](/research_computing/utokyo_azure/group/)
  ヘルプ：複数人へ一度に所有者ロールを付加したい
  Azure Portal から GUI で行うには，[複数人グループでの利用](/research_computing/utokyo_azure/group/)の手順で，ロールの割り当て手順のメンバーパートでメンバーを選択する際，1人ずつ複数回検索と選択を繰り返すことで，複数人へのロール付加を一度にまとめて行えます．
- Azure Cli を利用してコマンドラインから行うには，以下の手順でロールを付加できます．Linux 環境を想定していますが，Azure Cli がインストールされた環境であれば同じようなことが可能です．
- - [コマンドラインインターフェースでリソースを利用する](/research_computing/utokyo_azure/virtualmachine/azcli/)を参考に，Linux 環境に Azure Cli をインストールし，ロールを割り当てたいサブスクリプションに対して既に所有者(Owner)権限がある UTokyo Account で認証してください．
+ Azure CLI を利用してコマンドラインから行うには，以下の手順でロールを付加できます．Linux 環境を想定していますが，Azure CLI がインストールされた環境であれば同じようなことが可能です．
+ - [コマンドラインインターフェースでリソースを利用する](/research_computing/utokyo_azure/virtualmachine/azcli/)を参考に，Linux 環境に Azure CLI をインストールし，ロールを割り当てたいサブスクリプションに対して既に所有者(Owner)権限がある UTokyo Account で認証してください．
  - ロールを付加したい UTokyo Account を箇条書きにしたテキストファイルを用意してください．
  - 右のコマンドを実行してください． for i in `cat [作成したファイル名]` ; do az role assignment create --role "Owner" --scope [割り当てたいサブスクリプションやリソース等のスコープ] --assignee $i ; done
  - 補足１：所有者ロールではなく共同作成者権限を付加したい場合は，--role に Owner ではなく Contributor と指定してください．
  - 補足２：スコープの書式については[Microsoft Learn のドキュメント](https://learn.microsoft.com/ja-jp/azure/role-based-access-control/scope-overview#scope-format)を参照ください．
- ヘルプ：サブスクリプションIDを知りたい
- サブスクリプションIDはサブスクリプションの詳細画面で確認できます．
- ヘルプ：サブスクリプションを誤って取り消した場合にサービスやデータは復旧できますか
- 基本は取り消したサブスクリプションの復旧はできないとお考え下さい．サービスの継続利用をお考えの場合，新規申請ページのサブスクリプション管理ページからサブスクリプションの自動停止機能を必ずOFFに切り替えてください．
  ### 無料分と無料保証枠
  ヘルプ：無料分とはなんですか
  ある月の利用料のうち，ギフトクレジットから支払いされ無料となる分の金額で, 月末に全ユーザの利用料を元に計算されます．各利用者は無料分を超過した分の利用料を自身の研究費等から支払わなければなりません．
  具体的には，およそ半期毎に各月の超過分・余剰分を集計して通算の超過額を計算します．この時に超過した額を情報基盤センターより請求する予定です．詳細は [UTokyo Azure 説明会資料](/events/2025-02-21/slides/3_application_guidelines.pdf)をご参照ください．
- 無料分の額は毎月末に、その月の大学全体の利用料やサブスクリプションの数を加味して公平になるように計算されます．各月の使用料は [UTokyo Azure 新規利用申請ページの管理ページ](http://azure.itc.u-tokyo.ac.jp/list)から確認できます．
+ 無料分の額は毎月末に，その月の大学全体の利用料やサブスクリプションの数を加味して公平になるように計算されます．各月の使用料は [UTokyo Azure 新規利用申請ページの管理ページ](http://azure.itc.u-tokyo.ac.jp/list)から確認できます．
  ヘルプ：無料保証枠とはなんですか
  毎月の無料分は月末に計算されるので，その月に使用した分の全額あるいは何割が無料になるのかが月末になるまでわかりません．これは確実に無料の範囲内で UTokyo Azure を使いたい利用者にとっては不安かもしれません．
- そこで月初めに、この額までは必ず無料になるという最低保証額を公表しています．これが無料保証枠です．月末に集計される無料分よりは少ない額になります．
+ そこで月初めに，この額までは必ず無料になるという最低保証額を公表しています．これが無料保証枠です．月末に集計される無料分よりは少ない額になります．
  無料保証枠は [UTokyo Azure 新規利用申請ページの管理ページ](http://azure.itc.u-tokyo.ac.jp/list)から確認できます．
  ヘルプ：無料分や無料保証枠の計算方法を知りたい
  ⋯
  Cost の項で降順にすると，使用料の多い内訳が上に来ますので，そのリソースについて想定通りに設定されているか等を確認ください．
  ヘルプ：仮想マシンを Windows OS で使いたい
- UTokyo Azure では、Windows OS を [UTokyo Microsoft License](/microsoft/) にて認証された状態で利用できます．仮想マシンを構成する際に，「マルチテナントをホストする権利を持つ有効な Windows 10/11 ライセンスを所有しています」にチェックを入れてください．
+ UTokyo Azure では，Windows OS を [UTokyo Microsoft License](/microsoft/) にて認証された状態で利用できます．仮想マシンを構成する際に，「マルチテナントをホストする権利を持つ有効な Windows 10/11 のライセンスを所有しています」にチェックを入れてください．
+ Windows 10 は 2025年10月に公式のサポートは終了しております．互換性等の事情で必須である場合以外は Windows 11 を選択してください．
  Windows Server は対象外です．Server テンプレートをご利用になりたい場合は別途ライセンスを購入ください．
  ヘルプ：仮想マシンで Windows 11 は使えますか
  ⋯
  クォータリクエストは様々な手順から進めることができるようになっていて，その一部の手順では想定した通りに進まない，リンクがエラーになる等の不具合の問い合わせをいただいております．そのような場面に遭遇した場合は，どの手順でどのような不具合になったかを UTokyo Azure サービス担当にご連絡ください．その上で，以下の代替手順にてクォータのリクエストを進めてください．
  - [VMサイズのクォータ要求でエラー表示が出る場合の代替手順](https://univtokyo.sharepoint.com/:b:/t/Teams.azure.adm/EZQGpSZd0rBGg02rzaYJabgB26SajE7VYwNiJlLBGemJOg?e=QZAldo)：要UTokyoAccount認証
+ ヘルプ：外部テナント（External Entra ID）を利用できますでしょうか
+ UTokyo Azure に紐づいた外部テナントは作成しないでください．仮に作成してもサブスクリプションの作成権限は得られないので意味はありません．また，仮に何らかの方法でサブスクリプションの作成ができた場合も，そのサブスクリプションは UTokyo Azure に紐づかないので，利用料は満額ユーザーに請求されます．
```

## English

```diff
  説明: Table of Contents: FAQ...
  
- [High-performance computing and data utilization platform](/en/research_computing/) > [UTokyo Azure](/en/research_computing/utokyo_azure/) > FAQ
+ [High-performance computing and data platform](/en/research_computing/) > [UTokyo Azure](/en/research_computing/utokyo_azure/) > FAQ
  # FAQ：UTokyo Azure
  ## FAQ
  ⋯
  Help: Can I have multiple subscriptions?
  There is no limit to applying for multiple subscriptions. Please apply as many as necessary. However, please keep in mind that gift credits are assets shared among members of the university.
- Help: What is the difference between the Owner and Contributor in Privileged administrator roles?
- Owner is Grants full access to manage all resources, including the ability to assign roles in Azure RBAC. Contributor is Grants full access to manage all resources, but does not allow you to assign roles in Azure RBAC, manage assignments in Azure Blueprints, or share image galleries.
  Help: Can I register a subscription created under a different contract to UTokyo Azure?
  No．
  Help: I would like to share the subscriptions and resources I applied for with members of my laboratory, etc.
  If you want to share a subscription or resource with multiple people, you need to grant permission to the UTokyo Account of the members you want to share with as an Owner or Contributor. This operation must be performed by a member with the Owner role.
+ Help: I want to know my subscription ID
+ You can check your subscription ID on the subscription details screen.
+ Help: Can I recover my service and data if I accidentally cancel my subscription?
+ Subscriptions and data cannot be restored. If you wish to continue using the service for a certain period of time or longer, please be sure to turn off the Auto Suspension function from the subscription management page on the UTokyo Azure:New application page.
+ ### Role
+ Help: What is the difference between the Owner and Contributor in Privileged administrator roles?
+ Owner is Grants full access to manage all resources, including the ability to assign roles in Azure RBAC. Contributor is Grants full access to manage all resources, but does not allow you to assign roles in Azure RBAC, manage assignments in Azure Blueprints, or share image galleries.
+ Help: I would like to grant the authority to assign roles to Contributors as well.
+ Assigning the Access Administrator role allows a user to grant roles to other accounts (members) without possessing owner privileges.
+ When configuring this role, a “Conditions” section is added to the setup wizard; please ensure you select only the minimum necessary settings.
+ ヘルプ：Role settings are not applied, or an error occurs when changing role settings.
+ If you select Eligible as the assignment type when configuring permissions, the assignment will not take effect until the recipient approves it. (Important: Please do not select Eligible, as it requires a license.) Selecting Active makes the assignment effective immediately.
+ The system treats permission settings configured as Eligible and those configured as Active as distinct entities, even for the same account. Consequently, if you attempt to add or modify permissions for an account that already has an Eligible or Active setting using the other type, an error will occur indicating that a role is already assigned to the account. If a role is currently set to Eligible, please remove it first and then reconfigure it as Active.
+ Reference: [Groups Use](/en/research_computing/utokyo_azure/group/)
  Help: I want to know how to apply roles to multiple people at once.
  If you want to set it up using the GUI from the Azure Portal, in the procedure for [Group Use](/en/research_computing/utokyo_azure/group/), when selecting members in the Member section of the Role assignment steps, you can add roles to multiple people at once by repeating the searching and selecting all members one by one.
- If you’re using Azure Cli from the command line, you can add a role using the following steps. This assumes a Linux environment, but the steps are roughly the same for other environments where Azure Cli installed.
+ If you’re using Azure CLI from the command line, you can add a role using the following steps. This assumes a Linux environment, but the steps are roughly the same for other environments where Azure CLI is installed.
  - Refer to [How to install the Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) to install Azure CLI in your Linux environment and authenticate with a UTokyo Account that already has Owner privileges for the subscription to which you want to assign a role.
  - Prepare a text file that lists the UTokyo Accounts to which you want to add roles.
  ⋯
  - Note 1: If you want to add a contributor role, specify Contributor for --role.
  - Note 2: For information on scope format, please refer to the [Microsoft Learn documentation](https://learn.microsoft.com/en-us/azure/role-based-access-control/scope-overview#scope-format).
- Help: I want to know my subscription ID
- You can check your subscription ID on the subscription details screen.
- Help: Can I recover my service and data if I accidentally cancel my subscription?
- Subscriptions and data cannot be restored. If you wish to continue using the service for a certain period of time or longer, please be sure to turn off the Auto Suspension function from the subscription management page on the Utokyo Azure:New application page.
  ### Free Tier and Guaranteed Free Tier
  Help: What is the Free Tier?
  ⋯
  Help: Can I use a virtual machine with a Windows OS?
  Yes. You can use the [UTokyo Microsoft License](/en/microsoft/) with UTokyo Azure. When configuring a virtual machine, check “I confirm I have an eligible Windows 10/11 license with multi-tenant hosting rights.”
+ Official support for Windows 10 ended in October 2025. Unless there are special circumstances, please use Windows 11.
  Help: Can I use a virtual machine with a Windows 11?
- Yes. please see the following link for more information:
+ Yes. Please see the following link for more information:
  - [Microsoft Learn:Windows 11 support on Azure virtual machines](https://learn.microsoft.com/en-us/troubleshoot/azure/virtual-machines/windows/windows-11-support-azure-virtual-machines)
  Help: Why do errors sometimes occur when proceeding with the steps to request a VM size quota?
- A VM size quota request can be made through various steps, and we have received inquiries from users about problems such as some steps not proceeding as expected or links leading to errors.If you encounter such a situation, please contact the UTokyo Azure service staff and tell them which step caused the problem.Then, proceed with the quota request using the alternative steps below.
- - [（Japanese）VMサイズのクォータ要求でエラー表示が出る場合の代替手順](https://univtokyo.sharepoint.com/:b:/t/Teams.azure.adm/EZQGpSZd0rBGg02rzaYJabgB26SajE7VYwNiJlLBGemJOg?e=QZAldo)
+ A VM size quota request can be made through various steps, and we have received inquiries from users about problems such as some steps not proceeding as expected or links leading to errors. If you encounter such a situation, please contact the UTokyo Azure service staff and tell them which step caused the problem. Then, proceed with the quota request using the alternative steps below.
+ - [(Japanese) VMサイズのクォータ要求でエラー表示が出る場合の代替手順](https://univtokyo.sharepoint.com/:b:/t/Teams.azure.adm/EZQGpSZd0rBGg02rzaYJabgB26SajE7VYwNiJlLBGemJOg?e=QZAldo)
  - Authentication with a UTokyo Account is required to access this document
+ Help: Can I use an external tenant (External Entra ID)?
+ Do not create an external tenant linked to UTokyo Azure. Even if you are able to create one, you will not be given the authority to create subscriptions in that external tenant, so it will be pointless. Also, even if you manage to create a subscription somehow, that subscription will not be linked to UTokyo Azure, and the full usage fee will be charged to the user.
```

[← 一覧へ](<../README.md>)
