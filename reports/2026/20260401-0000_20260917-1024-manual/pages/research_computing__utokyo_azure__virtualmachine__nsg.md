# 通信を制御する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/virtualmachine/nsg/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/virtualmachine/nsg/>) | [`src/pages/research_computing/utokyo_azure/virtualmachine/nsg.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/virtualmachine/nsg.mdx>) |
| English | — | — | — |

## 日本語

```diff
  [全学向け高速計算機・データ活用基盤](/research_computing/) > [UTokyo Azure](/research_computing/utokyo_azure/) > [仮想マシン](/research_computing/utokyo_azure/virtualmachine/) > 通信を制御する
  # 通信を制御する
- Microsoft Azure には、ネットワークインターフェースリソースレベルで、Windows OS であればパーソナルファイアウォール、Linux であれば iptables や ufw，firewalld のような通信制御の仕組みがあり，適切に設定することによってよりセキュアに通信することができます。
+ Microsoft Azure には，ネットワークインターフェースリソースレベルで，Windows OS であればパーソナルファイアウォール，Linux であれば iptables や ufw，firewalld のような通信制御の仕組みがあり，適切に設定することによってよりセキュアに通信することができます．
  以下は Microsoft Azure のネットワークセキュリティグループについて説明します．
  ## １．ネットワークセキュリティグループ（NSG） 概要
  ⋯
    - My IP Address：Portal にアクセスしている端末のIPが入力されます．
    - Service Tag：サービスタグで指定します．指定できるサービスタグ一覧は[こちら](https://learn.microsoft.com/ja-jp/azure/virtual-network/service-tags-overview)
-   - Application security group：別途設定した、[アプリケーションセキュリティグループ](https://learn.microsoft.com/ja-jp/azure/virtual-network/application-security-groups)を指定できます．
+   - Application security group：別途設定した，[アプリケーションセキュリティグループ](https://learn.microsoft.com/ja-jp/azure/virtual-network/application-security-groups)を指定できます．
  #### ソースポート範囲
  - 選択したソースの種類によってこの項目は変化します．具体的な範囲を設定します．
  ⋯
  - サービスでCustomにした場合は，ここで具体的なプロトコルを選択します．
  #### アクション
- - ここまで設定した規則の内容で、通信を許可するか拒否するかを選択します．
+ - ここまで設定した規則の内容で，通信を許可するか拒否するかを選択します．
  #### 優先度
  - 設定した規則の優先度を数字で指定します．小さい数字ほど優先度が高くなります．
```

[← 一覧へ](<../README.md>)
