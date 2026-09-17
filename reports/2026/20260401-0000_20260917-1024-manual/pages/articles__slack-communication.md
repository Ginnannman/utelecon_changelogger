# Slackで学生とコミュニケーションを取る方法

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/articles/slack-communication/`](<https://utelecon.adm.u-tokyo.ac.jp/articles/slack-communication/>) | [`src/pages/articles/slack-communication/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/articles/slack-communication/index.mdx>) |
| English | 変更 | [`/en/articles/slack-communication/`](<https://utelecon.adm.u-tokyo.ac.jp/en/articles/slack-communication/>) | [`src/pages/en/articles/slack-communication/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/articles/slack-communication/index.mdx>) |

## 日本語

```diff
  - （教員）授業に関連して学生に向けて指示を出したい
  - （教員）学生とコミュニケーションをとりたい
- - （教員）グループ発表準備のために授業外で学生同士にコミュニケーションをとってほしい
+ - （教員）グループ発表準備のために授業外で学生同士でコミュニケーションをとってほしい
  - （学生）履修生やゼミのメンバーとコミュニケーションをとりたい
  ### こんなことはできません
  ⋯
  - ブラウザで以下の画面が立ち上がります．「Googleで続行する」を押し，ECCSアカウント（または個人のメールアドレス）でサインインします． ![](/_astro/Pic2.webp)
  - ページ下部の「別のワークスペースを作成する」を押します． ![](/_astro/Pic3.webp)
- - ワークスペース（例：授業名）を設定します．「社名またはチーム名」はワークスペースの名前になります．授業で使用する場合，ワークスペース名はどの授業か一目で分かる名前にしましょう．ここでは「〇〇ゼミ」というワークスペースとします. ![](/_astro/Pic4.webp)
+ - ワークスペース（例：授業名）を設定します．「社名またはチーム名」はワークスペースの名前になります．授業で使用する場合，ワークスペース名はどの授業か一目で分かる名前にしましょう．ここでは「〇〇ゼミ」というワークスペースとします． ![](/_astro/Pic4.webp)
  - 「チームで今取り組んでいること」はワークスペースの中に設置する「チャンネル」の名前になります．授業で使う場合は「基本情報」などのチャンネルを設定しておくと便利です（本記事[『授業でのチャンネル活用術』](#for_teachers)参照）．ここでは「課題についての質問」チャンネルを作成します． ![](/_astro/Pic5.webp)
  - 次に先ほど決めたチャンネルの利用者を尋ねる「メールを一番送信する相手は誰ですか」という画面が出てきます.ワークスペースに招待する人のメールアドレスを入力する場面ですが，この工程は後ほど行うのでスキップします． ![](/_astro/Pic6.webp)
  ⋯
    - ＃発表グループ1／＃発表グループ2／＃発表グループ3
  - メッセージの送信方法
-   メッセージの送信は各チャンネルの飛行機マーク（上図②）で送信します．必要に応じて太字やイタリックで強調したり、ファイルの添付（クリップマークからファイルを選択）を行うことも可能です．
+   メッセージの送信は各チャンネルの飛行機マーク（上図②）で送信します．必要に応じて太字やイタリックで強調したり，ファイルの添付（クリップマークからファイルを選択）を行うことも可能です．
  ### 授業でのチャンネル活用術【教員編】
  #### 授業の連絡や気軽にアンケートを取る（#全体連絡）
  ⋯
  ※授業でワークスペースを活用する際は，受講者と運用ルールなどを事前に共有すると良いでしょう．特にメールアドレスなど個人情報の取り扱いにはくれぐれも注意してください（[Slack ヘルプ：メールの表示を管理](https://slack.com/intl/ja-jp/help/articles/228020667-%E3%83%A1%E3%83%BC%E3%83%AB%E3%81%AE%E8%A1%A8%E7%A4%BA%E3%82%92%E7%AE%A1%E7%90%86)）．
  ### グッドプラクティス・応用例の紹介
- - [斎藤宣一先生 計算数理Ⅰ](/good-practice/interview/saito/)
+ - [齊藤宣一先生 計算数理Ⅰ](/good-practice/interview/saito/)
    - オンデマンド形式の授業でSlackを使用．Slack上で授業内容に関する質問を募り，Slack上で回答を促しました．対面のときよりも質問が盛んだったようです．Slackでは発言を取り消したり修正したりすることができるので，心理的な負担が少ないとのことでした．
  - [白石忠志先生 法Ⅰ](/good-practice/interview/shiraishi/)
```

## English

```diff
  #### Share Materials Within Groups (#group-01, 02, 03, …)
  - You can share texts and documents within groups by setting up channels for each group.
- - By setting up the channels as public channels, teachers and students of other groups can view the progress of each group (even if they are have not joined the channel).
+ - By setting up the channels as public channels, teachers and students of other groups can view the progress of each group (even if they have not joined the channel).
  - Private channels for teachers and group members only can also be created.
  #### Contact Students Individually (Direct Message)
  ⋯
  ### Good Practices and Examples of Applications
  - [Prof. Saito, Computational Mathematics I (in Japanese)](/good-practice/interview/saito/)
-   - Slack was used in an Prof. Saito’s on-demand style class. He called for questions regarding class content and answered them on Slack. Students seemed to be more active in asking questions online than face-to-face. He believes that Slack reduces the psychological burden to ask questions because users can edit or delete their messages.
+   - Slack was used in Prof. Saito’s on-demand style class. He called for questions regarding class content and answered them on Slack. Students seemed to be more active in asking questions online than face-to-face. He believes that Slack reduces the psychological burden to ask questions because users can edit or delete their messages.
  - [Prof. Shiraishi, Law I (in Japanese)](/good-practice/interview/shiraishi/)
    - Since use of Slack was optional, only about 10% of the students actually joined Slack. However, many questions and consultations were received via DM. Prof. Shiraishi believes that being able to communicate privately was a factor for students to ask questions easily.
```

[← 一覧へ](<../README.md>)
