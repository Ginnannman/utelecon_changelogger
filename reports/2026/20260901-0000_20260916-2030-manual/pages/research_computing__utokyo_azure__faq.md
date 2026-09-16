# FAQ：UTokyo Azure

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/faq/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/faq/>) | [`src/pages/research_computing/utokyo_azure/faq/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/faq/index.mdx>) |
| English | 変更 | [`/en/research_computing/utokyo_azure/faq/`](<https://utelecon.adm.u-tokyo.ac.jp/en/research_computing/utokyo_azure/faq/>) | [`src/pages/en/research_computing/utokyo_azure/faq/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/research_computing/utokyo_azure/faq/index.mdx>) |

## 日本語

```diff
  ヘルプ：サブスクリプションを複数持つことはできますか
  サブスクリプションを複数申請することに制限は設けておりません．管理を分けたい等の必要に応じてご申請ください．ただし，ギフトクレジットは学内の構成員で共有する資産ですので，あからさまに実態とかけはなれた量の申請は行わない等のご配慮をお願いします．
+ ヘルプ：すでに個人で契約しているサブスクリプションを UTokyo Azure に入れることはできますか
+ できません．
+ ヘルプ：申請したサブスクリプションやリソースを研究室のメンバー等で共同利用したい
+ １つのサブスクリプションやリソースを複数の人間で共同利用したい場合は，共同利用させたいユーザーの UTokyo Account を，所有者や共同作成者として権限付加する必要があります．この操作は，付与したいサブスクリプションやリソースに所有者のアカウントで行う必要があります．詳細はこちらの[複数人グループでの利用](/research_computing/utokyo_azure/group/)を参照ください．
+ ヘルプ：サブスクリプションIDを知りたい
+ サブスクリプションIDはサブスクリプションの詳細画面で確認できます．
+ ヘルプ：サブスクリプションを誤って取り消した場合にサービスやデータは復旧できますか
+ 基本は取り消したサブスクリプションの復旧はできないとお考え下さい．サービスの継続利用をお考えの場合，新規申請ページのサブスクリプション管理ページからサブスクリプションの自動停止機能を必ずOFFに切り替えてください．
+ ### 権限（ロール）
  ヘルプ：特権管理者ロールの所有者と共同作成者は何が違うのでしょうか
  所有者は，自身が所有者であるサブスクリプションやリソースに対して他者アカウント（メンバー）に権限（ロール）を付与することができますが，共同作成者にはその権限がありません．それ以外はほぼ所有者と同じ権限が共同作成者には与えられます．
  ⋯
  特権管理者ロールの１つであるアクセス管理者を追加で割り当てると，所有者権限は無い状態で他者のアカウント（メンバー）に権限（ロール）を付与することができるようになります．
  このロールを設定する場合，設定ウィザードに条件パートが追加されますので，できるだけ必要最低限を選択するようにしてください．
- ヘルプ：すでに個人で契約しているサブスクリプションを UTokyo Azure に入れることはできますか
- できません．
- ヘルプ：申請したサブスクリプションやリソースを研究室のメンバー等で共同利用したい
- １つのサブスクリプションやリソースを複数の人間で共同利用したい場合は，共同利用させたいユーザーの UTokyo Account を，所有者や共同作成者として権限付加する必要があります．この操作は，付与したいサブスクリプションやリソースに所有者のアカウントで行う必要があります．詳細はこちらの[複数人グループでの利用](/research_computing/utokyo_azure/group/)を参照ください．
+ ヘルプ：権限を設定しても反映されない，変更時にエラーになる
+ 権限を設定する際に割り当てのタイプで対象（Eligible）を選択した場合，対象者が承認するまで有効になりません．（重要：対象はライセンスが必要なため選択しないでください．） アクティブ（Active）を選択すれば即時有効になります．
+ 対象による権限設定とアクティブによる権限設定は，同じアカウントに対してであってもシステム上別物として扱われてしまうため，既に対象またはアクティブで設定済みのアカウントに，それではないタイプで権限を追加または修正しようとすると，すでにそのアカウントにはロールが設定済みであるとしてエラーになります．もし対象でロール設定がされている場合は，一旦削除してアクティブで設定しなおしてください．
+ 参考：[複数人グループでの利用や権限設定](/research_computing/utokyo_azure/group/)
  ヘルプ：複数人へ一度に所有者ロールを付加したい
  Azure Portal から GUI で行うには，[複数人グループでの利用](/research_computing/utokyo_azure/group/)の手順で，ロールの割り当て手順のメンバーパートでメンバーを選択する際，1人ずつ複数回検索と選択を繰り返すことで，複数人へのロール付加を一度にまとめて行えます．
  ⋯
  - 補足１：所有者ロールではなく共同作成者権限を付加したい場合は，--role に Owner ではなく Contributor と指定してください．
  - 補足２：スコープの書式については[Microsoft Learn のドキュメント](https://learn.microsoft.com/ja-jp/azure/role-based-access-control/scope-overview#scope-format)を参照ください．
- ヘルプ：サブスクリプションIDを知りたい
- サブスクリプションIDはサブスクリプションの詳細画面で確認できます．
- ヘルプ：サブスクリプションを誤って取り消した場合にサービスやデータは復旧できますか
- 基本は取り消したサブスクリプションの復旧はできないとお考え下さい．サービスの継続利用をお考えの場合，新規申請ページのサブスクリプション管理ページからサブスクリプションの自動停止機能を必ずOFFに切り替えてください．
  ### 無料分と無料保証枠
  ヘルプ：無料分とはなんですか
```

## English

```diff
  説明: Table of Contents: FAQ...
  
- [High-performance computing and data utilization platform](/en/research_computing/) > [UTokyo Azure](/en/research_computing/utokyo_azure/) > FAQ
+ [High-performance computing and data platform](/en/research_computing/) > [UTokyo Azure](/en/research_computing/utokyo_azure/) > FAQ
  # FAQ：UTokyo Azure
  ## FAQ
```

[← 一覧へ](<../README.md>)
