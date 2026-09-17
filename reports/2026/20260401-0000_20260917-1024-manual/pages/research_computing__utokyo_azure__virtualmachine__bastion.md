# 仮想マシンにアクセスする

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/virtualmachine/bastion/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/virtualmachine/bastion/>) | [`src/pages/research_computing/utokyo_azure/virtualmachine/bastion.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/virtualmachine/bastion.mdx>) |
| English | — | — | — |

## 日本語

```diff
  以下は，Bastion を利用した仮想マシンへのアクセス方法について説明します．
  ## １．Bastion 概要
- Bastion は Azure Portal に構成され、Web ブラウザ上で仮想マシンの操作が可能になるアクセスを提供します．
+ Bastion は Azure Portal に構成され，Web ブラウザ上で仮想マシンの操作が可能になるアクセスを提供します．
  - Azure Portal 内に踏み台サーバとして構成され，仮想マシンへのアクセスは Bastion 経由で行う形になります．（下図参照）
  - ssh や RDP によるリモート接続のために，仮想マシンにパブリックアクセス用の IP を設定する必要がなくなるので，これらプロトコルの脆弱性を突いた不正アクセスの懸念が無くなります．
- - 端末から Azure Portal 間は，強固な認証を経たブラウザによる https (TLS) 接続内を通信するので、より安全に仮想マシンへのリモートアクセスが可能になります．
+ - 端末から Azure Portal 間は，強固な認証を経たブラウザによる https (TLS) 接続内を通信するので，より安全に仮想マシンへのリモートアクセスが可能になります．
  - Bastion サービスは有料なのでギフトを消費します．1時間でおよそ 0.2 ドルから 0.5 ドル 程度で，5GB/月以上のデータ送受信には別途通信料がかかります．詳細は以下の URL を参照ください．
    - [Azure Bastion の価格](https://azure.microsoft.com/ja-jp/pricing/details/azure-bastion/)
  ⋯
  - 基本パート
    - インスタンス詳細 の名前が空欄なので，適当な名前を入力．
-   - インスタンス詳細 のレベルが Standard ではない場合は Standard に変更する。（通常は初期値で Standard）
+   - インスタンス詳細 のレベルが Standard ではない場合は Standard に変更する．（通常は初期値で Standard）
  - 詳細設定パート
    - ネイティブクライアントサポート にチェックを入れる．
```

[← 一覧へ](<../README.md>)
