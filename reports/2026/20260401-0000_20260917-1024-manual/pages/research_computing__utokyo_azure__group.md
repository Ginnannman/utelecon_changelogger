# 複数人グループでの利用や権限設定

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/group/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/group/>) | [`src/pages/research_computing/utokyo_azure/group/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/group/index.mdx>) |
| English | 変更 | [`/en/research_computing/utokyo_azure/group/`](<https://utelecon.adm.u-tokyo.ac.jp/en/research_computing/utokyo_azure/group/>) | [`src/pages/en/research_computing/utokyo_azure/group/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/research_computing/utokyo_azure/group/index.mdx>) |

## 日本語

```diff
- タイトル: 複数人グループでの利用 | utelecon
+ タイトル: 複数人グループでの利用や権限設定 | utelecon
  説明: 目次: 推奨されるロール割り当て; 所有者と共同作成者の違い; ロールの割り当て手順...
  
- [全学向け高速計算機・データ活用基盤](/research_computing/) > [UTokyo Azure](/research_computing/utokyo_azure/) > 複数人グループでの利用
- # 複数人グループでの利用
- サブスクリプションやリソース(スコープ)を研究室のメンバーや共同研究者で共有したい場合は，代表者がサブスクリプションを申請し，そのサブスクリプションにメンバーを適切な権限（ロール）で追加することで共有することが可能になります．その際，どのリソースに，誰を，どのロールで割り当てるかで共有者ができることが変わってきます．
+ [全学向け高速計算機・データ活用基盤](/research_computing/) > [UTokyo Azure](/research_computing/utokyo_azure/) > 複数人グループでの利用や権限設定
+ # 複数人グループでの利用や権限設定
+ サブスクリプションやリソース(スコープ)を学生や研究室のメンバー，共同研究者等で共有したい場合は，代表者がサブスクリプションを申請し，そのサブスクリプションにメンバーを適切な権限（ロール）で追加することで共有することが可能になります．その際，どのリソースに，誰を，どのロールで割り当てるかで共有者ができることが変わってきます．
  参考：[所有者の追加](/events/2025-02-21/slides/5-1_add_owner.pdf) (2025.02.21 UTokyo Azure 説明会資料)
  ## 推奨されるロール割り当て
  ⋯
  - 割り当てのタイプパート
    - 選択されたロール：ロールパートで選択したロールであることを確認してください．
-   - 割り当てのタイプ：アクティブを選択してください．※ライセンスの都合上対象は現時点では選択しないようお願いします．
-   - Assingment Duration：Permanentを選択してください．※ライセンスの都合上Time boundは現時点では選択しないようお願いします．
+   - 割り当てのタイプ：アクティブを選択してください．※重要
+   - 割り当て期間：永続的に割り当てる場合はPermanentを，一定期間のみ割り当てる場合はTime boundを選択してください．
+ 重要：割り当てのタイプで対象（おすすめ）を選択しないでください．この選択は別途ライセンスが必要となること，かつアクティブを選んだ際のロールとは別ものとして扱われ，対象で設定したロールを後日アクティブとして更新した場合に不具合の原因となります．
+ ・サブスクリプションやリソースのIAMを確認し，後から追加したユーザーの「状態」が「アクティブな○○」ではない登録がある場合は，一旦そのユーザーを削除して改めて再登録してください．その際割り当てのタイプでアクティブを必ず選択してください．
  ![](/_astro/06_addrole6.webp)
  - レビューと割り当てパート
```

## English

```diff
  説明: Table of Contents: Recommended role assignments; Role assignment steps...
  
- [High-performance computing and data utilization platform](/en/research_computing/) > [UTokyo Azure](/en/research_computing/utokyo_azure/) > Group Use
+ [High-performance computing and data platform](/en/research_computing/) > [UTokyo Azure](/en/research_computing/utokyo_azure/) > Group Use
  # Group Use
  If you want to share subscriptions or resources (scopes) with laboratory members or collaborators, the representative must apply for the subscription and add the collaborators to the subscription with appropriate roles. At that time, what the sharer can do depends on which scope and role they are assigned to.
  ⋯
    - (Only if assigned to a subscription) You can view the Free tier, Guaranteed free tier, current usage, etc. on the subscription management page on the UTokyo Azure New application page.
    - You can assign a shared member role to a subscription, resource group, etc.
- - Contributer：
+ - Contributor：
    - Other than the two privileges mentioned above, the user has the same privileges as the owner.
  ## Role assignment steps
  ⋯
  Help: Can’t find the account I want to select
  The user must have a UTokyo Account. The search string can be a name or email address registered to a UTokyo Account. Please make sure the search string is correct. Alternatively, if the user may not yet have a UTokyo Account, please ask the user to check their UTokyo Account registration status.
- - （Owner role step only）Conditions section
+ - (Owner role step only) Conditions section
    - What user can do：
      - Typically you would select Allow user to assign all roles except privileged administrator roles Owner, UAA, RBAC (Recommended).
  ⋯
    - Selected role：Make sure this is the role you selected in the Role section.
    - Assignment type：Please select Active. Do not select Target .
-   - Assingment Duration：Please select Permanent. Do not select Time bound.
+   - Assignment Duration：Please select Permanent. Do not select Time bound.
  ![](/_astro/05_addrole_e5.webp)
  - Review + assign section
```

[← 一覧へ](<../README.md>)
