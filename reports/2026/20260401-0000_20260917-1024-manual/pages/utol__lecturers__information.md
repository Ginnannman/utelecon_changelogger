# UTOLでお知らせ機能を利用する（教員・TA向け）

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utol/lecturers/information/`](<https://utelecon.adm.u-tokyo.ac.jp/utol/lecturers/information/>) | [`src/pages/utol/lecturers/information/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utol/lecturers/information/index.mdx>) |
| English | 変更 | [`/en/utol/lecturers/information/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utol/lecturers/information/>) | [`src/pages/en/utol/lecturers/information/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utol/lecturers/information/index.mdx>) |

## 日本語

```diff
  #### 催促お知らせのテンプレート
  催促お知らせには，同一の文面を繰り返し使用する場面が多いと予想されるため，テンプレート機能が存在しています．これは，あらかじめ作成しておいた文面を複数の催促お知らせで使用することができる機能です．
- テンプレートは同一コース内でも各参加者ごとに独立しています．たとえば，担当教員が複数存在するコースの場合，ある担当教員が作成したテンプレートを他の担当教員が直接利用することはできません．ただし，他のユーザーが作成したテンプレートを複製して自分自身のテンプレートを複製・改変し，それを自身のテンプレートとすることは可能です．
+ テンプレートは同一コース内でも各参加者ごとに独立しています．たとえば，担当教員が複数存在するコースの場合，ある担当教員が作成したテンプレートを他の担当教員が直接利用することはできません．ただし，他のユーザーが作成したテンプレートを複製・改変し，それを自身のテンプレートとすることは可能です．
  #### 催促お知らせを登録できる期間および条件
  催促お知らせを登録するには，以下の条件を満たしている必要があります．
```

## English

```diff
- タイトル: Using the Information Notices Function in UTOL (for Course Instructors and TAs) | utelecon
+ タイトル: Using the Information Notices Function in UTOL (for Course Instructors / TAs) | utelecon
  説明: Table of Contents: About Information Notices; Register Information Notices; Checking that an Info...
  
  [UTOL](/en/utol/) > [As a Course Instructor or TA](/en/utol/lecturers/) > Information
- # Using the Information Notices Function in UTOL (for Course Instructors and TAs)
+ # Using the Information Notices Function in UTOL (for Course Instructors / TAs)
  ## About Information Notices
  This page provides detailed information on the usage of the information notices function in [UTOL](/en/utol/). This feature allows information to be sent as one-way text messages to all or some of the enrolled students. If you wish to make bidirectional contact with specific enrolled students, please use the “[Message](/en/utol/lecturers/messages/)” function.
  ⋯
        - If you have not yet created labels, click on “Create new display label”, and enter the title for the label.
        - If you wish to assign multiple labels, select another drop-down list displayed after clicking “Add display label”.
-   - Published target: You can select the target audience for information notices. (As for the User group function, please see “[Using User Group Function in UTOL (for course instructors / TAs)](/en/utol/lecturers/settings/user_groups/)”).
+   - Published target: You can select the target audience for information notices. (As for the User group function, please see “[Using user group function in UTOL (for Course Instructors / TAs)](/en/utol/lecturers/settings/user_groups/)”).
  - Click “Confirm” to proceed.
  - Please ensure that the content of the information notices you entered is exactly as you intended. Also, you can use the “Preview” screen to reproduce the display on the page of enrolled students.
  ⋯
      - When it’s completed, you will be redirected to the Manage Information screen. Please check to ensure that the relevant information notice has been deleted.
  ## Checking that an Information Notice has been opened
- This section provides steps to confirm the list of enrolled students who have been opened information notices on UTOL. However, please note that if enrolled students check the content of information notices by [email and LINE notification](#about), those notices will not be shown as being opened.
+ This section provides steps to confirm the list of enrolled students who have opened information notices on UTOL. However, please note that if enrolled students check the content of information notices by [email and LINE notification](#about), those notices will not be shown as being opened.
  - Click “Read receipt” in the relevant information notices of the “Information” section on the Course Top or “Manage information” screen.
    ![](/_astro/check.drawio.webp)
```

[← 一覧へ](<../README.md>)
