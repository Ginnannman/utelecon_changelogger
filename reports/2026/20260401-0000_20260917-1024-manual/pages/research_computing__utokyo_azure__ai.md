# AI サービス

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/ai/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/ai/>) | [`src/pages/research_computing/utokyo_azure/ai/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/ai/index.mdx>) |
| English | — | — | — |

## 日本語

```diff
  タイトル: AI サービス | utelecon
- 説明: 目次: Microsoft Foundry; Azure Machine Learning; Azure OpenAI; デプロイしたモデルのクォータを管理する; デプロイしたモデルを Pyth...
+ 説明: 目次: UTokyo Azure の主要な AI サービス; 補足...
  
  [全学向け高速計算機・データ活用基盤](/research_computing/) > [UTokyo Azure](/research_computing/utokyo_azure/) > AI サービス
  # AI サービス
- ## [Microsoft Foundry](/research_computing/utokyo_azure/ai/azureai/)
- ## [Azure Machine Learning](/research_computing/utokyo_azure/ai/aml/)
- ## [Azure OpenAI](/research_computing/utokyo_azure/ai/openai/)
- ## [デプロイしたモデルのクォータを管理する](/research_computing/utokyo_azure/ai/quota/)
- ## [デプロイしたモデルを Python API から利用する](/research_computing/utokyo_azure/ai/python/)
+ ## UTokyo Azure の主要な AI サービス
+ ### Azure Machine Learning
+ [Azure Machine Learning](./aml/)では，GPT などの既存モデル（生成AI）を Azure 経由で Web ブラウザや Python プログラムから利用することができます．ChatGPT のような利用も可能です．
+ ### Microsoft Foundry
+ - [Microsoft Foundry](./azureai/)は，Azure における AI サービスの総合プラットフォームで，OpenAI 社によるものだけでなく Llama や Mistral，最近では Claude や Grok など様々なモデルが選択可能です．
+ - OpenAI のモデルも含め，通常はこちらからご利用ください．
+ [Azure OpenAI](/research_computing/utokyo_azure/ai/openai/) サービスは，Microsoft Foundry サービス開始以降 Foundry に統合され，初期手順に少し違いがある以外は最終的に Foundry ポータル上でデプロイして利用する形となるため，OpenAI 利用の場合も通常は Microsoft Foundry からデプロイしてください．
+ ## 補足
+ ### デプロイしたモデルのクォータを管理する
+ クォータの確認方法や増量したい場合の手順は，[クォータの管理](./quota/)のページをご確認ください．
+ ### デプロイしたモデルを Python API から利用する
+ - Python から API にアクセスさせたい場合の利用方法は「[デプロイしたモデルを Python API で利用する](./python/)」をご確認ください．
+ - Foundry 以降は，Foundry ポータルの各モデル説明に利用手順の詳細がありますので，ここの記載ではうまくいかなかったり，さらなる詳細が知りたい等の場合は，各モデルのドキュメントを参照ください．
```

[← 一覧へ](<../README.md>)
