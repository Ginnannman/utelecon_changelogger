# UTokyo Azure CSIRT : UTokyo Azure

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/csirt/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/csirt/>) | [`src/pages/research_computing/utokyo_azure/csirt/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/csirt/index.mdx>) |
| English | 変更 | [`/en/research_computing/utokyo_azure/csirt/`](<https://utelecon.adm.u-tokyo.ac.jp/en/research_computing/utokyo_azure/csirt/>) | [`src/pages/en/research_computing/utokyo_azure/csirt/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/research_computing/utokyo_azure/csirt/index.mdx>) |

## 日本語

```diff
  UTokyo Azure CSIRT は情報基盤センターCERT(ITC-CERT)の下部組織として設置され，本 CSIRT が対応するインシデントは ITC-CERT を通じて UTokyo-CERT にインシデント情報を報告・共有いたします．
  ## 責任分解点
- UTokyo Azure は Microsoft Azure サービスの資源を利用したクラウドサービスなので，その責任分解点は主に IaaS であるか SaaS であるかで２通りに分類されます。
+ UTokyo Azure は Microsoft Azure サービスの資源を利用したクラウドサービスなので，その責任分解点は主に IaaS であるか SaaS であるかで２通りに分類されます．
  - サービスの提供形式により，必ずしもこの形に収まらない場合があります．実際のインシデントが発生した場合は，発生元のリソース等からどちらの責任範囲でありそうかを UTokyo Azure CSIRT が判断します．
  ![](/_astro/01_csirt1.webp)
  ## UTokyo Azure CSIRT に通報があった場合の対応の流れ
- UTokyo Azure CSIRT が一次通報先または通報経路となった場合の対応の流れは大まかに以下の通りになります。
+ UTokyo Azure CSIRT が一次通報先または通報経路となった場合の対応の流れは大まかに以下の通りになります．
  - CSIRT 担当
    - UTokyo Azure に対するインシデント通報の一次受付を行い，CSIRT 責任者に報告します．
  ⋯
  - インシデント責任者
    - UTokyo Azure 上で発生するインシデントを管理する責任者です．
-   - CSIRT 責任者から指示があり次第，CISRT 担当と連携してそのインシデントに対応するべき先を調査特定しインシデント担当者に対応を指示します．
+   - CSIRT 責任者から指示があり次第，CSIRT 担当と連携してそのインシデントに対応するべき先を調査特定しインシデント担当者に対応を指示します．
    - インシデントが Azure 側に起因すると判断した場合は，Microsoft 社に対応を依頼します．
  - インシデント担当者
  ⋯
  ![](/_astro/02_csirt2.webp)
  ## UTokyo Azure CSIRT を経由しない通報
- 通報者は通常，インシデントを受けた場合に送信元のIPアドレスやドメインのインシデント連絡先等を見て通報するため、利用者がどのように Azure サービスを利用していたかによっては，必ずしも UTokyo Azure CSIRT 経由でインシデントの通報を行うとは限らず，部局CERTやサブスクリプション管理者，システムの担当者に直接連絡が行く可能性もあります． その場合は，主には部局CERTに報告を上げて，以後どのように対応するべきかご相談ください．
- その際のお願いとして，UTokyo Azure CSIRT では UTokyo Azure 上で発生したインシデントを把握，記録しておりますので，UTokyo Azure CSIRT の対応は不要と判断した場合でも，UTokyo Azure CISRT にも何らかのご一報をお願いいたします．
+ 通報者は通常，インシデントを受けた場合に送信元のIPアドレスやドメインのインシデント連絡先等を見て通報するため，利用者がどのように Azure サービスを利用していたかによっては，必ずしも UTokyo Azure CSIRT 経由でインシデントの通報を行うとは限らず，部局CERTやサブスクリプション管理者，システムの担当者に直接連絡が行く可能性もあります． その場合は，主には部局CERTに報告を上げて，以後どのように対応するべきかご相談ください．
+ その際のお願いとして，UTokyo Azure CSIRT では UTokyo Azure 上で発生したインシデントを把握，記録しておりますので，UTokyo Azure CSIRT の対応は不要と判断した場合でも，UTokyo Azure CSIRT にも何らかのご一報をお願いいたします．
  ## 問い合わせ・連絡・通報先
  - UTokyo Azure CSIRT 担当： [utokyo-azure-csirt-group@g.ecc.u-tokyo.ac.jp](mailto:utokyo-azure-csirt-group@g.ecc.u-tokyo.ac.jp)
```

## English

```diff
  説明: Table of Contents: UTokyo Azure CSIRT; Boundary of responsibility; Incident Handling; If the inci...
  
- [High-performance computing and data utilization platform](/en/research_computing/) > [UTokyo Azure](/en/research_computing/utokyo_azure/) > UTokyo Azure CSIRT : UTokyo Azure
+ [High-performance computing and data platform](/en/research_computing/) > [UTokyo Azure](/en/research_computing/utokyo_azure/) > UTokyo Azure CSIRT : UTokyo Azure
  # UTokyo Azure CSIRT : UTokyo Azure
  ## UTokyo Azure CSIRT
```

[← 一覧へ](<../README.md>)
