# 料金計算ツール

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/support/calculator/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/support/calculator/>) | [`src/pages/research_computing/utokyo_azure/support/calculator.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/support/calculator.mdx>) |
| English | 変更 | [`/en/research_computing/utokyo_azure/support/calculator/`](<https://utelecon.adm.u-tokyo.ac.jp/en/research_computing/utokyo_azure/support/calculator/>) | [`src/pages/en/research_computing/utokyo_azure/support/calculator.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/research_computing/utokyo_azure/support/calculator.mdx>) |

## 日本語

```diff
  どのサービスの計算でも共通となる注意点は以下の通りです．
  - 支払方法が選択できる場合，UTokyo Azure では従量課金しか利用できないので，従量課金以外は選択しないでください．
- - 全体の最後でサポート及びライセンスの入力がありますが．通常は以下が初期値となっていてそのままで問題ありません．もし違う選択になっていましたら選択しなおしてください．
+ - 全体の最後でサポート及びライセンスの入力がありますが，通常は以下が初期値となっていてそのままで問題ありません．もし違う選択になっていましたら選択しなおしてください．
    - サポート：Basic
    - プログラムおよびオファーを選択：
```

## English

```diff
  説明: Table of Contents: Preparation; Usage procedure; Points to note...
  
- [High-performance computing and data utilization platform](/en/research_computing/) > [UTokyo Azure](/en/research_computing/utokyo_azure/) > [Microsoft Azure Support request](/en/research_computing/utokyo_azure/support/) > Pricing calculator
+ [High-performance computing and data platform](/en/research_computing/) > [UTokyo Azure](/en/research_computing/utokyo_azure/) > [Microsoft Azure Support request](/en/research_computing/utokyo_azure/support/) > Pricing calculator
  # Pricing calculator
  Microsoft Azure provides a fee calculation tool that allows you to estimate the cost of using each service. This tool can be used to estimate in advance to avoid exceeding the Guaranteed Free Tier when using a service, and to investigate the cause of higher than expected charges when using a service. This article explains the procedure and points to note when using the Pricing calculator for UTokyo Azure services.
  ⋯
    - Support：Basic
    - Select your program/offer：
-     - If you have carried out the Preparation steps：Enterprise Agreement(EA)
-     - If you have skip the Preparation steps：Microsoft Customer Agreement(MCA)
+     - If you have carried out the Preparation steps: Enterprise Agreement(EA)
+     - If you have skipped the Preparation steps: Microsoft Customer Agreement(MCA)
  - There are cases where you cannot search by service name (e.g. Azure AI Foundry). In that case, try searching by keyword instead of the service name.
```

[← 一覧へ](<../README.md>)
