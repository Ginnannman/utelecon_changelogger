# 部局導入ChromeOS端末の管理代行サービス

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/google/misc/ceu/`](<https://utelecon.adm.u-tokyo.ac.jp/google/misc/ceu/>) | [`src/pages/google/misc/ceu/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/google/misc/ceu/index.md>) |
| English | 変更なし | [`/en/google/misc/ceu/`](<https://utelecon.adm.u-tokyo.ac.jp/en/google/misc/ceu/>) | [`src/pages/en/google/misc/ceu/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/google/misc/ceu/index.mdx>) |

## 日本語

```diff
      - ループ検出機能，指定機器以外の接続を制限する機能が必要です．
      - 集中管理するChromeOS端末専用のネットワークが必要です．
-       - UTokyo-WiFiなどの利用者個人のアカウントで接続する無線LANは利用できません．
+       - UTokyo Wi-Fiなどの利用者個人のアカウントで接続する無線LANは利用できません．
      - 有線・無線は問いません．
- - 情報基盤センターがDHCPサーバ，ファイアウォール機能を提供します．
+ - DHCPサーバ，ファイアウォール機能は全学セキュリティファイアウォールを利用します．
  - 初期設定時や故障機器交換時は，情報基盤センターが設定をおこないます．
  - 障害やインシデント発生時には，部局と情報基盤センターで共同で対処します．
  ⋯
    - ループ検出機能等の必要機能がついたスイッチングハブ: ポート単価1万円程度
  - すでに使用している端末でChromeOS端末の管理代行サービスを利用することは可能ですが，ChromeOS端末には[自動更新期限](https://support.google.com/chrome/a/answer/6220366?hl=ja)が設定されており，その期間を過ぎると集中管理の対象になりません．
- - ECCS2021の一部として導入しているChromebox端末は以下のようなハイエンド機です．ECCS2021のChromebox端末と同等以上の使い勝手を求める場合は，以下の性能以上の端末を導入することをお勧めします．
-   - 主記憶: 8GB
-   - CPU: intel core i5以上
-   - SSD: 64GB以上
  ### その他
- - 集中管理する端末に，ECCS2021のChromebox端末とは別のポリシー(利用可能なアプリケーションを制限する等)を適用することは可能ですが，オプション設定となり，利用負担金が増額となります．
+ - 集中管理する端末に，[ECCSのChromeOSデバイス](/eccs/chromeos/)とは別のポリシー(利用可能なアプリケーションを制限する等)を適用することは可能ですが，オプション設定となり，利用負担金が増額となります．
    - 端末を制限した管理コンソールを提供する方法が見つかっていないので，設定項目等をお伝えいただいた上で，情報基盤センターが管理コンソールで設定する形になります．
  - もしすでに部局等でGoogle Workspace for Educationを契約している場合には，本サービスを利用せずにChromeOS端末を集中管理することはもちろん可能です．部局等でのGoogle WorkspaceのテナントにCEUライセンスを追加してください．
    - ただし，大学内の組織が，大学全体の契約とは別のGoogle Workspace for Educationを新たに契約するのは難しいようです．
- - 以前行っていたmacOSマシンの管理代行サービスは，教育用計算機システムの更新時期と導入時期をあわせる必要がある，1台あたりの部局負担額が大きい，などの問題があったため，現在はおこなっていません．
```

[← 一覧へ](<../README.md>)
