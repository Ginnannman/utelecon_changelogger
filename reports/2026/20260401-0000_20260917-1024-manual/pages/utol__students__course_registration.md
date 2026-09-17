# UTOLでコースを登録する（履修者向け）

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utol/students/course_registration/`](<https://utelecon.adm.u-tokyo.ac.jp/utol/students/course_registration/>) | [`src/pages/utol/students/course_registration/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utol/students/course_registration/index.md>) |
| English | 変更 | [`/en/utol/students/course_registration/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utol/students/course_registration/>) | [`src/pages/en/utol/students/course_registration/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utol/students/course_registration/index.md>) |

## 日本語

```diff
  タイトル: UTOLでコースを登録する（履修者向け） | utelecon
- 説明: 目次: 注意事項; 受講登録を行う手順; UTOL上で受講登録を解除する手順...
+ 説明: 目次: 概要; コースの登録状態の確認方法; コースへの登録・登録解除の操作方法...
  
  [UTOL](/utol/) > [履修者として利用する](/utol/students/) > コース登録
  # UTOLでコースを登録する（履修者向け）
- 2025年3月25日に，[時間割表やコーストップ画面の変更](/notice/2025/0401-utol-change/)を行い，受講状態の表示が変更されました．UTOLでの受講状態が「お気に入り登録」「担当教員登録」「自己登録」のいずれかである場合，時間割表上の各コースの枠下部に，これまで表示されていたUTOL上での登録方法に関する文言の代わりに，『UTAS「履修登録」要確認！』の文言などが表示されます．また，UTASから「履修登録」をしている場合は，各コースの枠下部の文言が表示されなくなりました．
- UTOLではタームやセメスター単位で開講される科目のことを「コース」と呼びます．
- コースの「受講登録」をすると時間割表に表示され，コース内の教材の閲覧などができるようになります．
- ## 注意事項
- コースの受講登録には4種類の状態があり，どの種類の受講登録が行われたかは時間割表上に表示されます． ![時間割表上に受講登録の状態が表示されている](/_astro/type.webp)
- このページでは，便宜上それらを次の二つに分けて説明します．
- - UTAS連携やコースの担当教員による登録：
-   - 履修した科目が自動で登録される「履修登録」
-   - UTAS（学務システム）上から連携される「お気に入り登録」（この登録は，履修登録期間が終了すると削除されます）
-   - 担当教員が手動で登録する「担当教員登録」
- - 学生本人による仮の登録：
-   - UTOLで「受講登録」ボタンを押して行う「自己登録」（この登録は，履修登録期間が終了すると削除されることがあります）
- 履修登録期間が終了すると，「お気に入り登録」は削除されます．さらに，コースの設定によっては，「自己登録」が削除され，新しく自己登録を行うこともできなくなる場合があります．この場合，コースの受講登録を行うには担当教員にコースの設定変更を依頼してください．
- なお，科目の履修登録が必要な場合には，必ずUTAS（学務システム）で履修登録を行ってください．UTOL上で「受講登録」の操作を行っても履修登録には反映されません．
- ## 受講登録を行う手順
- 受講登録を行う手順は，時間割表に表示される[受講登録の状態](#precautions)によって異なります．
- ### UTAS連携やコースの担当教員による登録の場合
- UTAS連携やコースの担当教員による登録は，それぞれ以下の手順で行えます．
- - 「履修登録」：現在履修している科目に対応するコースが自動で受講登録されます．UTAS上で履修登録の操作を行った場合，UTOL上での受講登録はおよそ1時間以内に行われます．
- - 「お気に入り登録」：履修登録期間中にUTASで科目をお気に入り登録すると，およそ1時間以内に受講登録されます．履修が確定するとこの登録は削除されます．
- - 「担当教員登録」：履修していない科目のコースについて，コースの担当教員に依頼して手動で登録してもらうことができます．
- ### 学生本人が仮の登録をする場合
+ 本ページでは，UTOLでコースに登録する方法について説明します．
+ ## 概要
+ UTOLでは，科目のことをコースと呼びます．コース内の授業資料等を利用するには「受講登録」が必要です．
+ 受講登録には，「①UTASで履修登録する」「②履修登録せずに登録する」という2つの方法があります．
+ ![](/_astro/2ways.webp)
+ UTASで履修登録すると，自動的にUTOL上でも受講登録されます．また，UTOL上での操作等により，コースによっては履修登録せずに受講登録だけすることもできます（いわゆる「聴講」）．ただ，この方法では単位がつかないので，単位を取得したい科目は必ずUTASで履修登録してください．
+ 本ページでは，以下の2つを説明します．
+ - [コースの登録状態の確認方法](#registration-status)
+ - [コースへの登録・登録解除の操作方法](#registration-operation)
+ ## コースの登録状態の確認方法
+ ![](/_astro/check_reg.webp)
+ ### ①UTASで履修登録した場合
+ UTOLの時間割画面に表示されます．なお，UTOLの表示だけで履修登録の有無を判断するのは危険です．最終的な確認は必ずUTASの「履修科目控出力」機能で行ってください．
+ UTASでの履修登録がUTOLに反映されるまでには，1時間ほどのタイムラグがあります．また，メンテナンス等で反映が失敗したり遅れたりすることもあります．
+ ### ②履修登録しないで利用している場合
+ UTOLの時間割画面に表示されますが，「履修登録要確認」の文言が表示されます．なお，講習会など，対応する科目がUTASにないコースには「履修登録要確認」が表示されません．
+ この状態になることがあるのは主に以下の3つです．
+ - 自己登録
+ - 担当教員登録
+ - UTASでのお気に入り登録
+ 履修登録せずに利用しているコース（いわゆる「聴講」の状態）では，以下の点に注意してください．
+ - この状態でもコースは利用できますが，正式な履修として認められません（単位がつきません．）
+ - 自己登録・お気に入り登録では利用できないコースや，履修登録期間が終わると利用できなくなるコースがあります．
+ - お気に入り登録は履修登録期限が来ると自動的に削除され，コースを利用できなくなるので，その前に自己登録か担当教員登録に切り替える必要があります．
+ ### ③受講登録していない場合
+ UTOLの時間割画面に表示されません．
+ ## コースへの登録・登録解除の操作方法
+ ### 履修登録して利用する
+ 正式な履修として認められる唯一の方法です．（「お気に入り登録」は履修登録ではありません！）UTASで履修登録を行い，利用してください．なお，以下の点に注意してください．
+ - 履修登録してからUTOLに反映されるまでに1時間ほどのタイムラグがあります．
+ - すぐに利用したい場合は履修登録したうえで以下の「履修登録しないで利用する」の手順を踏む必要があります．その場合，反映されるまでは「履修登録要確認」が表示されますが，反映が完了すると表示されなくなります．
+ - 履修登録を取り消すとUTOLにもそれが自動的に反映されます．
+ ### 履修登録しないで利用する
+ 正式な履修としては認められず，単位は認定されません．「自己登録」「担当教員登録」「お気に入り登録」の3つの方法があります．
+ #### 自己登録
+ 自己登録は，科目の教員が設定で許可している場合のみ利用できます．また，コースの設定によっては履修登録期間の終了後に自己登録が使えなくなることがあります．その場合は[担当教員登録](/utol/lecturers/settings/course_participants/)に切り替える必要があるため，担当教員に問い合わせてください．
+ ##### 登録方法
  担当教員がいわゆる「聴講」を行えるように設定している場合は，学生が自分で受講登録（「自己登録」）を行ってコース内のコンテンツを閲覧できます．「自己登録」が可能なコースの受講登録は以下の手順で行えます．
  - [コース検索](/utol/students/course_search/)で受講登録したいコースを探してください．検索をする際，「受講登録可能なコースのみ」にチェックを付けると「自己登録」が可能なコースのみが表示されます．
-   ![検索結果](/_astro/search.webp)
+   ![検索結果](/_astro/reg1.webp)
  - 検索結果として表示されるコースのタイトルを押すとコース画面が表示されます．コース画面右上の「受講登録」ボタンを押してください．
    - コース画面に「受講登録」ボタンがない場合には，コースの担当教員にコース設定を変更してもらうか，手動での受講登録を行ってもらうよう依頼してください．
-   ![受講登録](/_astro/reg1.webp)
+   ![受講登録](/_astro/reg2.webp)
  - 「受講する場合は、受講登録ボタンを押してください。」というダイアログが表示されるので，「受講登録」ボタンを押してください．
-   ![受講登録確認](/_astro/reg2.webp)
+   ![受講登録確認](/_astro/reg3.webp)
  - 一度UTOLからログアウトして，再度ログインしてください．時間割表を開くと，受講登録したコースが表示されるようになります．
- ## UTOL上で受講登録を解除する手順
- 受講登録を解除する手順は，時間割表に表示される[受講登録の状態](#precautions)によって異なります．
- ### UTAS連携やコースの担当教員によって受講登録されたコースの場合
- UTAS連携やコースの担当教員による登録をしたコースの場合，受講登録の解除はそれぞれ以下の手順で行えます．
- - 「履修登録」：履修登録・修正期間中であれば，UTAS上で履修登録を取り消すとおよそ1時間以内に受講登録が解除されます．それ以外の場合は受講登録を解除することはできません．
- - 「お気に入り登録」：UTAS上でお気に入り登録を外すとおよそ1時間以内に受講登録が解除されます．また，履修登録期間が終わると，「お気に入り登録」はすべて解除されます．
- - 「担当教員登録」：コースの担当教員に受講登録の解除を依頼してください．
- ### 学生本人により仮の登録をしたコースの場合
- 「自己登録」となっているコースでは，以下の手順で受講登録を解除できます．
+ ##### 解除方法
  - 時間割表で受講登録を解除したいコースのコースタイトルを押してください．
  - コーストップ画面の右上に表示されている「受講登録解除」ボタンを押してください．
  ⋯
    ![受講解除確認](/_astro/unreg2.webp)
  - 一度UTOLからログアウトして，再度ログインしてください．時間割表を開くと，受講登録を解除したコースが表示されなくなります．
+ #### 担当教員登録
+ ##### 登録方法
+ 履修していない科目のコースについて，コースの担当教員に依頼して手動で登録してもらうことができます．
+ 必要に応じて，担当教員に[コース参加者登録](/utol/lecturers/settings/course_participants/)のページを案内するとスムーズです．
+ ##### 解除方法
+ 登録方法と同様に，コースの担当教員に受講登録の解除を依頼してください．
+ #### お気に入り登録
+ お気に入り登録を利用できるのは履修登録期間中に限られます．履修登録期間が終了すると削除されるので注意してください．
+ ##### 登録方法
+ UTASで科目をお気に入り登録すると，およそ1時間以内に受講登録されます．履修登録期間が終了するとこの登録は削除されます．
+ ##### 解除方法
+ UTAS上でお気に入り登録を解除すると，およそ1時間以内に受講登録が解除されます．
```

## English

```diff
  There are four types of course registrations, and the timetable displays which type of registration has been made.
  ![The timetable shows whether the course is registered through self-registration, or by its instructor, etc.](/_astro/type.webp)
- For your convenience, the course registrations types will be divided into the following two categories.
+ For your convenience, the course registration types will be divided into the following two categories.
  - Registration by course instructors or through UTAS:
    - “Enrolled registration”: Automatically registers the courses you have taken.
  ⋯
  ### When registered through UTAS or by the course instructors
  Registrations through UTAS or by the course instructors can be made by following the steps below.
- - “Enrolled registration”: You will be automatically registered you for the courses you are currently taking. If enrollment registration for a course on UTAS is made, the registration on UTOL will be completed within one hour.
+ - “Enrolled registration”: You will be automatically registered for the courses you are currently taking. If enrollment registration for a course on UTAS is made, the registration on UTOL will be completed within one hour.
  - “Favorite registration”: If you register for a favorite-listed course on UTAS, you will be enrolled in the course on UTOL within one hour. This registration will be deleted when the enrollment is confirmed.
  - “Registered by instructor”: For courses that students are not currently taking, they can request the instructor to register them for the courses manually.
```

[← 一覧へ](<../README.md>)
