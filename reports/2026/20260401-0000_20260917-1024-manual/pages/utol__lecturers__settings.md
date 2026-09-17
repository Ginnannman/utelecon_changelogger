# UTOLでコース設定を行う（教員・TA向け）

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utol/lecturers/settings/`](<https://utelecon.adm.u-tokyo.ac.jp/utol/lecturers/settings/>) | [`src/pages/utol/lecturers/settings/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utol/lecturers/settings/index.mdx>) |
| English | 変更 | [`/en/utol/lecturers/settings/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utol/lecturers/settings/>) | [`src/pages/en/utol/lecturers/settings/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utol/lecturers/settings/index.md>) |

## 日本語

```diff
  - 利用したいLTIツールの「利用する」列にチェックを入れてください．
    表示されていない外部ツールを利用したい場合
-   「LTI利用設定」に表示されていない，LTI v1.3に対応する外部ツールのライセンスをお持ちで，利用を希望される方は，UTOL担当までメールでご連絡下さい．その際には，当該ツール及びそのライセンス，利用を希望する範囲（特定の学部・コースのみでの利用か，全学での利用を希望か）等をお伝え下さい．
+   「LTI利用設定」に表示されていない，LTI v1.3に対応する外部ツールのライセンスをお持ちで，利用を希望される方は，UTOL担当(lms-support@itc.u-tokyo.ac.jp)宛にご連絡下さい．その際には，当該ツール及びそのライセンス，利用を希望する範囲（特定の学部・コースのみでの利用か，全学での利用を希望か）等をお伝え下さい．
  - 「確認画面へ進む」ボタンを押し，内容を確認したら「登録する」ボタンを押してください．
  - コーストップを開くと，追加したLTIツールのアイコンが表示されます．
```

## English

```diff
- タイトル: Configuring Course Settings in UTokyo LMS (UTOL, for Course Instructors/TAs) | utelecon
+ タイトル: Configuring Course Settings in UTokyo LMS (UTOL, for Course Instructors / TAs) | utelecon
  説明: Table of Contents: Within-course settings; Collaboration with Other Courses...
  
  [UTOL](/en/utol/) > [As a Course Instructor or TA](/en/utol/lecturers/) > Course settings
- # Configuring Course Settings in UTokyo LMS (UTOL, for Course Instructors/TAs)
+ # Configuring Course Settings in UTokyo LMS (UTOL, for Course Instructors / TAs)
  This page describes the settings related to the entire course in UTOL, including the course summary and participant management.
  In addition, it covers the methods for integrating with other courses, such as course groups and content reuse.
  ⋯
  - Click the Confirm button, review the details, and then click Register.
  #### Self-Registration and Student Range Settings
- This section describes the settings related to Self-registration, which allows users to use the course content without registering for the course on UTAS (so-called auditing), and Enrolled student range setting. Note that self-registration is also necessary if you want participants to register themselves for [courses created through request](#course-application).
+ This section describes the settings related to Self-registration, which allows users to use the course content without registering for the course on UTAS (so-called auditing), and Enrolled student range setting. Note that self-registration is also necessary if you want participants to register themselves for [courses created through request](../#course-application).
  First, in the Self-registration settings, you can choose whether or not to allow users to register themselves as enrolled student, by clicking the Register for Enrollment button on UTOL. The default setting is Permit.
  Next, in the Enrolled student range setting, and among those who are registered as enrolled students, you can choose the range of people who can use the content (such as those downloading course materials and/or submitting assignments).
  ⋯
  - Check the Use column for the desired LTI tools.
    When an external tool is not displayed
-   If you have a license for an LTI v1.3-compliant external tool that is not shown in the LTI Usage Settings and wish to use it, please contact the UTOL team via email. Please inform us of the tool, its license, and the scope of use you wish to request (i.e., whether you wish to use the tool only for a specific department or course, or for the entire university).
+ If you have a license for an LTI v1.3-compliant external tool that is not shown in the LTI Usage Settings and wish to use it, please contact the UTOL team (lms-support@itc.u-tokyo.ac.jp). Please inform us of the tool, its license, and the scope of use you wish to request (i.e., whether you wish to use the tool only for a specific department or course, or for the entire university).
  - Click the Confirm button, review the details, and then click Register.
  - When you access the course top, the icons for the added LTI tools will be displayed.
```

[← 一覧へ](<../README.md>)
