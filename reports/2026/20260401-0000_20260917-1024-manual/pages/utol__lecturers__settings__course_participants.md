# UTOLのコース参加者を管理する（確認・登録など）（教員・TA向け）

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utol/lecturers/settings/course_participants/`](<https://utelecon.adm.u-tokyo.ac.jp/utol/lecturers/settings/course_participants/>) | [`src/pages/utol/lecturers/settings/course_participants/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utol/lecturers/settings/course_participants/index.md>) |
| English | 変更 | [`/en/utol/lecturers/settings/course_participants/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utol/lecturers/settings/course_participants/>) | [`src/pages/en/utol/lecturers/settings/course_participants/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utol/lecturers/settings/course_participants/index.md>) |

## 日本語

```diff
  - 操作したいコースを開いた状態で，左上の「![三本線のボタン](/_astro/hamburger.webp)」アイコンを押してください．
  - 「コース設定」から「コース参加者登録」を選択してください． ![](/_astro/menu.webp)
+ ### 一覧をExcelファイルでダウンロードする方法
+ - 操作したいコースを開いた状態で，左上の「![三本線のボタン](/_astro/hamburger.webp)」アイコンを押してください．
+ - 「コース設定」から「コース参加者登録」を選択してください． ![](/_astro/menu.webp)
+ - 「参加者一覧ダウンロード」欄の「ダウンロード」ボタンを押してください． ![](/_astro/download.webp)
+ - Excelファイルのパスワードを設定するよう求められるので，任意のパスワードを決めて入力し，もう一度「ダウンロード」ボタンを押してください．Excelファイル（.xlsx 形式）がダウンロードされます．（このパスワードはExcelファイルで一覧を確認する際に必要になります．） ![](/_astro/set-password.webp)
  ## コース参加者を登録する
  コース参加者の登録方法には以下の2種類があります．
```

## English

```diff
- タイトル: Managing Course Participants on UTOL (Confirmation, Registration, etc.) (for Course Instructors・TAs) | utelecon
+ タイトル: Managing Course Participants on UTOL (Confirmation, Registration, etc.) (for Course Instructors / TAs) | utelecon
  説明: Table of Contents: Function Overview; Confirming Information of the Course Participants; Register...
  
  [UTOL](/en/utol/) > [As a Course Instructor or TA](/en/utol/lecturers/) > [Course settings](/en/utol/lecturers/settings/) > Managing course participants
- # Managing Course Participants on UTOL (Confirmation, Registration, etc.) (for Course Instructors・TAs)
+ # Managing Course Participants on UTOL (Confirmation, Registration, etc.) (for Course Instructors / TAs)
  ## Function Overview
  The “Registering course participants” function allows you to manage course participants (users, such as instructors, TAs, enrolled students, etc. who participate in a course through UTOL).
  ⋯
  The following information can be viewed in the “Course participant list”.
  - Authority: The user’s authority will be displayed as one of the following four types: “Course Instructor”, “TA”, “Course Designer”, or “Enrolled Student”. If the user has both TA and enrolled student authorities, it will be displayed as “TA and enrolled student”.
- - Category: The user’s UTokyo Account indicates whether they are a student, a faculty member or a staff member. If the user’s UTokyo Account has both student, and faculty or staff member status, it will be displayed as “Student/Faculty and staff.” Please note that this display does not reflect whether the user participates in the course as a student, a faculty member or a staff member.
+ - Category: The user’s UTokyo Account indicates whether they are a student, a faculty member or a staff member. If the user’s UTokyo Account has both student and faculty or staff member status, it will be displayed as “Student/Faculty and staff.” Please note that this display does not reflect whether the user participates in the course as a student, a faculty member or a staff member.
  - Student ID/(User ID): If the user has a student ID number, this number will be displayed. If the user does not have a student ID number, a Common ID (the first 10-digit numerical part of the UTokyo Account) will be displayed.
  - Course Title: The course titles that enrolled students have registered for will be displayed. If the [course group function](../course_group/) is applied, you can confirm the course titles students have registered for.
  ⋯
  ### How to check the list
  “Course participants list” can be viewed by following the steps below.
- - Click the icon “![Icon with three horizontal lines](/_astro/hamburger.webp)” in the upper right corner while the course you would like to operate is being displayed.
+ - Click the icon “![Icon with three horizontal lines](/_astro/hamburger.webp)” in the upper left corner while the course you would like to operate is being displayed.
  - Select “Register course participants” in the “Course settings” ![](/_astro/menu.webp)
+ ### How to download the list as an Excel file
+ - Click the icon "![Icon with three horizontal lines](/_astro/hamburger.webp)" in the upper left while keeping opened the course you would like to operate.
+ - Select “Register Course participants” in the “Course settings”. ![](/_astro/menu.webp)
+ - Click the “Download” button in the “Download Course participants list” field. ![](/_astro/download.webp)
+ - You will be prompted to set a password for the Excel file. Enter a password of your choice, then click the “Download” button again. The Excel file (.xlsx format) will be downloaded. (This password will be required when viewing the list in the Excel file.) ![](/_astro/set-password.webp)
  ## Registering Course Participants
  There are two kinds of methods for registering course participants, as follows,
  ⋯
  - [Deleting in batches](#delete-in-bulk): This method deletes multiple course participants at once.
  ### Deleting individually
- - Click the“![Icon with three horizontal lines](/_astro/hamburger.webp)” in the upper right while keeping opened the course you would like to operate.
+ - Click the “![Icon with three horizontal lines](/_astro/hamburger.webp)” in the upper left while keeping opened the course you would like to operate.
  - Select “Register Course participants” in the “Course settings”.
    ![](/_astro/menu.webp)
```

[← 一覧へ](<../README.md>)
