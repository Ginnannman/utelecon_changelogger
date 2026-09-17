# コマンドラインインターフェースでリソースを利用する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/research_computing/utokyo_azure/virtualmachine/azcli/`](<https://utelecon.adm.u-tokyo.ac.jp/research_computing/utokyo_azure/virtualmachine/azcli/>) | [`src/pages/research_computing/utokyo_azure/virtualmachine/azcli.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/research_computing/utokyo_azure/virtualmachine/azcli.mdx>) |
| English | — | — | — |

## 日本語

```diff
  # コマンドラインインターフェースでリソースを利用する
  ## 概要
- Microsoft Azure には、リソースへのリモートからのアクセスや操作をターミナルコマンドラインから行うことができる Azure CLI というサービスが用意されています． このページでは，Azure CLI を利用する準備手順を説明します．
+ Microsoft Azure には，リソースへのリモートからのアクセスや操作をターミナルコマンドラインから行うことができる Azure CLI というサービスが用意されています． このページでは，Azure CLI を利用する準備手順を説明します．
  ## Azure CLI のインストール
  - Azure CLI は，さまざまなOSプラットフォームでパッケージマネージャーから容易にインストールすることができるようになっています．以下のリンクからご自身の環境にあう方法でインストールしてください．
    ※ 以下のリンクはいずれも Microsoft Learn のドキュメントへの外部リンクです．
    - [Windows Powershell](https://learn.microsoft.com/ja-jp/cli/azure/install-azure-cli-windows?pivots=winget)
-   - [Mac OS](https://learn.microsoft.com/ja-jp/cli/azure/install-azure-cli-macos)
+   - [macOS](https://learn.microsoft.com/ja-jp/cli/azure/install-azure-cli-macos)
    - [Debian 系 Linux(ubuntu等)](https://learn.microsoft.com/ja-jp/cli/azure/install-azure-cli-linux?pivots=apt)
    - [Redhat 系 Linux(CentOS等)](https://learn.microsoft.com/ja-jp/cli/azure/install-azure-cli-linux?pivots=dnf)
  ⋯
  - ターミナルを立ち上げ，az login --use-device-codeを実行する．
  - 別途ブラウザを立ち上げて，前項のコマンド実行で出力された URL にアクセスする．
- - デバイスコードの入力を促されるので、同じく出力されたコードを入力する．
+ - デバイスコードの入力を促されるので，同じく出力されたコードを入力する．
  - UTokyo Account のログイン画面に遷移するので，以降は通常の手順の2.以降と同じ手順を行う．
  ![](/_astro/03_azcli3.webp)
```

[← 一覧へ](<../README.md>)
