# Googleグループ

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/google/group/`](<https://utelecon.adm.u-tokyo.ac.jp/google/group/>) | [`src/pages/google/group/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/google/group/index.mdx>) |
| English | 変更 | [`/en/google/group/`](<https://utelecon.adm.u-tokyo.ac.jp/en/google/group/>) | [`src/pages/en/google/group/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/google/group/index.mdx>) |

## 日本語

```diff
  ### 基本操作
  Webブラウザから利用する際は，Googleのサイトでログインした状態で右上の3x3のマスが並んだアイコンを押して表示されるメニューで「グループ」を選択してください．
- ![](/_astro/launch.webp)
+ ![](/_astro/googlegroup.webp)
  もし見つからない場合は，以下のリンクを押して下さい．
  [Googleグループ](https://groups.google.com/)
  ⋯
  「グループ」は，Googleグループのデフォルトの画面で，自身が所属しているグループが表示されます．画面左側の「グループ」を選択することによっても表示されます．
  ![](/_astro/my-groups.webp)
- スクショ内の番号をつけたアイコンには，それぞれ以下の機能があります．
+ スクリーンショット内の番号をつけたアイコンには，それぞれ以下の機能があります．
  - ①グループの作成
    - 新規のGoogleグループを作成することができます．
  ⋯
    - ECCSクラウドメール利用者向けのGoogleグループにおいて，グループ設定でユーザを限定する項目は以下のように設定すると良いです．
      - グループのメンバー向けの機能であれば「グループメンバー」
-     - 管理的な機能であれば「グループのオーナー」もしくは「グループのマネージャー」
-   - 問い合わせ対応用のグループなどでグループメンバー以外の投稿が必要な場合であっても，「組織全体」や「ウェブ上のすべてのユーザー」に変更するのは「投稿できるユーザー」のみにするなど，必要最小限の設定に留めてください． ![](/_astro/create-group2.webp)
+     - 管理的な機能であれば「グループのオーナー」もしくは「グループマネージャー」
+   - 問い合わせ対応用のグループなどでグループメンバー以外の投稿が必要な場合であっても，「組織全体」や「ウェブ上のすべてのユーザー」に変更するのは「投稿できるユーザー」のみにするなど，必要最小限の設定に留めてください． ![](/_astro/create-group-2.webp)
  - 「グループ メンバー」にグループに追加したいメンバーのメールアドレスを入力してください．
    - グループの管理の役割を割り当てたい場合は，「グループ マネージャー」や「グループのオーナー」として追加してください．
-   - 「登録」では，メッセージの配信方法を選択できます．選択肢の詳細については，[グループ](#group)の②グループの登録設定の変更をご覧ください． ![](/_astro/create-group3.webp)
+   - 「登録」では，メッセージの配信方法を選択できます．選択肢の詳細については，[グループ](#group)の②グループの登録設定の変更をご覧ください． ![](/_astro/group04.webp)
  - 「グループを作成」を選択すると，グループが作成されます．
  ### メーリングリストとして使う
  ⋯
  - 送信先のグループに参加している必要がある場合：グループの設定で「投稿できるユーザー」が「グループメンバー」になっている場合です．多くのグループで当てはまります．
  - 送信先のグループに参加しなくても良い場合：グループの設定で「投稿できるユーザー」が「ウェブ上のすべてのユーザー」になっている場合です．例えば，問い合わせ対応用のGoogleグループでは，この設定になっていることがあります．
- 送信先のグループに参加している必要がある場合で，既存のグループに参加する場合は，グループの管理者に自分のメールアドレスを伝え招待してもらってください．「すべてのグループ」での検索結果では，グループへの参加をリクエストができないことがあります．自分でグループを作成する場合は，[グループを作成する](#create-group)を参照してください．
+ 送信先のグループに参加している必要がある場合で，既存のグループに参加する場合は，グループの管理者に自分のメールアドレスを伝え招待してもらってください．「すべてのグループ」での検索結果では，グループへの参加をリクエストできないことがあります．自分でグループを作成する場合は，[グループを作成する](#create-group)を参照してください．
  ### Googleグループのメールアドレスを使ってメールを送信する
  Googleグループに割り当てられたメールアドレスを利用して，メールを送信することができます．これにより，複数人で一つのアドレスを共有して利用するような使い方ができます．設定方法は，「[Googleグループのメールアドレスを差出人に指定してメールを送信する](./mail_sender/)」を参照してください．
```

## English

```diff
  If membership in the destination group is required and you wish to join an existing group, please provide your email address to the group administrator and ask to be invited. Please note that in some cases, you may not be able to request to join a group from the search results in “All Groups”. If you wish to create your own group, please refer to [Create a Group](#create-group).
  ### Sending emails using a Google Group email address
- You can send emails using the email address assigned to a Google Group. This allows multiple people to share and use a single email address. For instructions on how to configure this, please refer to “[Sending an email with a group email address as the sender (in Japanese)](/google/group/mail_sender/)”.
+ You can send emails using the email address assigned to a Google Group. This allows multiple people to share and use a single email address. For instructions on how to configure this, please refer to “[Sending emails using a Google Group email address as the sender](./mail_sender/)”.
  ### Use as a collaborative inbox
  By using the collaborative inbox feature of Google Groups, you can label conversations and assign them to group members. This can be useful for help desks and similar applications.
  ⋯
  ## Integration with other Google services
  In other Google services, by specifying a Google Group email address as a recipient for sharing, you can collectively grant permissions to all members of that group.
- - For Google Drive: See [How to Set the Access Range (Sharing files in Google Drive) (in Japanese)](/google/drive/share/#target)
+ - For Google Drive: See [How to Set the Access Range (Sharing files in Google Drive)](./drive/share/#target)
  - For Google Calendar: See [Share your calendar - Computer - Google Calendar Help](https://support.google.com/calendar/answer/37082?hl=en)
```

[← 一覧へ](<../README.md>)
