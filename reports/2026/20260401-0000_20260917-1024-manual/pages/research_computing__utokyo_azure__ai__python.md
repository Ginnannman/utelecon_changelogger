# デプロイしたモデルを Python API で利用する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/ai/python/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/ai/python/>) | [`src/pages/research_computing/utokyo_azure/ai/python.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/ai/python.mdx>) |
| English | — | — | — |

## 日本語

```diff
    - Azure AI Foundry の場合は，含まれる機能の中から Azure OpenAI を選択してください．
  ![](/_astro/01_aistudiopython1.webp)
- 参考：[Microsoft Learn:Azure OpenAI in Microsoft Foundry Models API lifecycle](https://learn.microsoft.com/en-us/azure/ai-services/openai/api-version-deprecation)で、現在の API バージョンを確認できます。
+ 参考：[Microsoft Learn:Azure OpenAI in Microsoft Foundry Models API lifecycle](https://learn.microsoft.com/en-us/azure/ai-services/openai/api-version-deprecation)で，現在の API バージョンを確認できます．
  - ご自身の Python 環境で，openai パッケージをインストールしてください．
    - pip install openai 等
  - Python でコーディングします．以下はコーディングの一例で，左が OpenAI クラスを利用した場合，右が Azure 互換の OpenAI を利用した場合です．
-   - クラス名を，Azure OpenAI の場合 OpenAI を、Microsoft Foundry の場合 AzureOpenAI を選択する．
+   - クラス名を，Azure OpenAI の場合 OpenAI を，Microsoft Foundry の場合 AzureOpenAI を選択する．
    - コンストラクター パラメーターとしてapi_versionとazure_endpointsが提供されます．エンドポイントの指定が必要な場合はパラメータを設定してください．
  ![](/_astro/03_aistudiopython3.webp)
```

[← 一覧へ](<../README.md>)
