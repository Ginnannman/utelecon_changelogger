# UTOLを教員・TAとして利用する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utol/lecturers/`](<https://utelecon.adm.u-tokyo.ac.jp/utol/lecturers/>) | [`src/pages/utol/lecturers/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utol/lecturers/index.mdx>) |
| English | 変更 | [`/en/utol/lecturers/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utol/lecturers/>) | [`src/pages/en/utol/lecturers/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utol/lecturers/index.mdx>) |

## 日本語

```diff
  ### 出席
  出席機能を利用すると，履修者に対して授業に出席したという報告を求めることができます．利用方法の詳細については「[UTOLで出席機能を利用する（教員・TA向け）](attendances/)」を参照してください．
+ ### 外部ツールとの連携
+ 外部ツールとの連携機能を利用すると，ZoomやSlack，MATLAB Graderといった外部ツールをコースと連携させることができます．利用方法の詳細については「[UTOLで外部ツールとの連携機能を利用する（教員・TA向け）](integrations/)」を参照してください．
  ## コースの設定を行う
  ここでは，コース全体に関わる設定を行う方法を説明します．
  ⋯
      - 自己登録に関する設定
      - 履修者範囲設定
-     - コースの参加者を追加・削除する機能（詳細は「[UTOLでコース参加者登録を行う（教員・TA向け）](settings/course_participants/)」を参照）
+     - コースの参加者を追加・削除する機能（詳細は「[UTOLのコース参加者を管理する（確認・登録など）（教員・TA向け）](settings/course_participants/)」を参照）
      - コースの参加者をグループ分けする機能（詳細は「[UTOLでユーザグループ機能を利用する（教員・TA向け）](settings/user_groups/)」を参照）
      - 担当教員の表示・非表示設定
```

## English

```diff
  The course materials function allows you to publish files such as class materials to enrolled students. Please refer to “[Using course material function in UTOL (for Course Instructors / TAs)](materials/)” for more details on how to use the function.
  ### Quizzes
- The quiz function allows you to give questions to enrolled students and have them submit answers. In addition, it is possible for you to grade the submitted answers or make comments as feedback. Please refer to “[Using quiz function in UTOL (for Course Instructors / TAs)](quizzes/)” for more details on how to use the function.
+ The quiz function allows you to give questions to enrolled students and have them submit answers. In addition, it is possible for you to grade the submitted answers or make comments as feedback. Please refer to “[Using Quiz function in UTOL (for Course Instructors / TAs)](quizzes/)” for more details on how to use the function.
  ### Surveys
  The survey function allows you to conduct surveys of the enrolled students and view the results. Please refer to “[Using survey function in UTOL (for Course Instructors / TAs)](surveys/)” for more details on how to use the function.
  ### Forums
- The forum function enables the exchange of opinions through text messages between you and the enrolled students, as well as among the enrolled students. Unlike the [Message function](#messages), which allows only enrolled students you are exchanging to be able to view messages, the forum function enables to make messages open to all enrolled students. Please refer to “[Using forum function in UTOL (for Course Instructors / TAs)](forums/)” for more details on how to use the function.
+ The forum function enables the exchange of opinions through text messages between you and the enrolled students, as well as among the enrolled students. Unlike the [Message function](#messages), which allows only enrolled students you are exchanging with to be able to view messages, the forum function enables you to make messages open to all enrolled students. Please refer to “[Using forum function in UTOL (for Course Instructors / TAs)](forums/)” for more details on how to use the function.
  ### Attendance Management
  The attendance management function allows you to request enrolled students to report their attendance for classes. Please refer to “[Using attendance management in UTOL (for Course Instructors / TAs)](attendances/)” for more details on how to use the function.
+ ### Integrations with external tools
+ The integration function allows you to link external tools such as Zoom, Slack, and MATLAB Grader with your course. Please refer to “[Using integrations with external tools in UTOL (for Course Instructors / TAs)](integrations/)” for more details on how to use the function.
  ## Course Settings
  This section explains how to configure the settings for the entire course.
  ⋯
  ## Requests to Create Courses
  Basically, courses on the UTOL are automatically created based on the information of courses registered through the online system for academic affairs, “UTAS”. If you would like to create a new course that is not linked to UTAS, course instructors or staff members must apply using the form below. (Signing in with UTokyo Account is required when applying)
- [Request form to Creating Courses](https://forms.office.com/Pages/ResponsePage.aspx?id=T6978HAr10eaAgh1yvlMhAV1xFVIiWBKstSDeuZIIuFUMk1RVDFDVU1GOVJMU1BHS0RXNDYxTFpGNSQlQCN0PWcu)
+ [Request form to Create Courses](https://forms.office.com/Pages/ResponsePage.aspx?id=T6978HAr10eaAgh1yvlMhAV1xFVIiWBKstSDeuZIIuFUMk1RVDFDVU1GOVJMU1BHS0RXNDYxTFpGNSQlQCN0PWcu)
```

[← 一覧へ](<../README.md>)
