# Azure OpenAI : UTokyo Azure 利用例

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/ai/openai/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/ai/openai/>) | [`src/pages/research_computing/utokyo_azure/ai/openai.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/ai/openai.mdx>) |
| English | — | — | — |

## 日本語

```diff
  参考：[OpenAIのサービスを利用しよう](/events/2025-02-21/slides/5-2_OpenAI.pdf) (2025.02.21 UTokyo Azure 説明会資料)
  ## 注意(2026年1月現在)
- Azure OpenAI を新規に利用する場合は、[Microsoft Foundry](/research_computing/utokyo_azure/ai/azureai/) ポータルからデプロイしてください．現在はこちらの手順を実施しても，最終的に Microsoft Foundry ポータルにデプロイする手順になります．
+ Azure OpenAI を新規に利用する場合は，[Microsoft Foundry](/research_computing/utokyo_azure/ai/azureai/) ポータルからデプロイしてください．現在はこちらの手順を実施しても，最終的に Microsoft Foundry ポータルにデプロイする手順になります．
  ## １．サービスを選択する
  ヘルプ：まだサブスクリプションをお持ちでない場合
  ⋯
  参考：[サブスクリプションとは](/research_computing/utokyo_azure/faq/subscription/)
  - Azureサービスの一覧の中からAzure OpenAIを選択します．
-   - 一覧に無い場合、一覧の右にあるその他のサービスを選択、左側にあるリストからAI + Machine Learningを選択すると， 右側に表示されるメイン画面のAzure AI サービス + APIの中にあります．
+   - 一覧に無い場合，一覧の右にあるその他のサービスを選択，左側にあるリストからAI + Machine Learningを選択すると， 右側に表示されるメイン画面のAzure AI サービス + APIの中にあります．
  ![](/_astro/01_openai1.webp)
  - Azure OpenAI のメインページが表示されたら，画面左上にある＋作成またはメイン画面にあるAzure OpenAI の作成をクリックします．
  ⋯
  ### 基本パート
  #### プロジェクトの詳細
- - サブスクリプション：事前に申請したサブスクリプションがすでに設定されていますので、通常はそのままで問題ありません．設定が無い場合はサブスクリプションが作成完了しているかどうか確認ください．
+ - サブスクリプション：事前に申請したサブスクリプションがすでに設定されていますので，通常はそのままで問題ありません．設定が無い場合はサブスクリプションが作成完了しているかどうか確認ください．
  - [リソースグループ](https://learn.microsoft.com/ja-jp/azure/azure-resource-manager/management/manage-resource-groups-portal)：ここでは新規にopenai_resource_groupというリソースグループ名で作成し，以下に作成される各リソースをまとめます．まとめられたリソースは，権限の継承や削除などを一括で対応することが可能となります．
  #### インスタンスの詳細
```

[← 一覧へ](<../README.md>)
