# 授業におけるZoom会議室の入室制限

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/faculty_members/zoom_access_control/`](<https://utelecon.adm.u-tokyo.ac.jp/faculty_members/zoom_access_control/>) | [`src/pages/faculty_members/zoom_access_control.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/faculty_members/zoom_access_control.md>) |
| English | 変更 | [`/en/faculty_members/zoom_access_control/`](<https://utelecon.adm.u-tokyo.ac.jp/en/faculty_members/zoom_access_control/>) | [`src/pages/en/faculty_members/zoom_access_control.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/faculty_members/zoom_access_control.md>) |

## 日本語

```diff
    - ③待機室には誰が行く必要があるのでしょうか？：「全員」
  - (D) 非推奨：東京大学のアカウントでサインインしていないと一切会議室に入れないようにする
-   - ②参加時に認証を求める：「大学アカウントでサインイン」を選択した上で，その下のドメインが *.u-tokyo.ac.jp と表示されていることを確認（[詳細](/zoom/auth/)）
+   - ②参加時に認証を求める：「大学アカウントでサインイン」を選択した上で，その下のドメインが *.u-tokyo.ac.jp と表示されていることを確認（[詳細](/zoom/create_room/auth/)）
```

## English

```diff
    - (1) Waiting Room: On
    - (2) Require authentication to join: Off
-   - (3) Who should go in the waiting room?: Select “Users who are not in your account and not part of your whitelisted domains” and input ‘*.u-tokyo.ac.jp’ in the field appears.
+   - (3) Who should go in the waiting room?: Select “Users who are not in your account and not part of your whitelisted domains” and input ‘*.u-tokyo.ac.jp’ in the field that appears.
  - Method C (Not recommended): Place all participants first in the Waiting Room
    - (1) Waiting Room: On
  ⋯
    - (3) Who should go in the waiting room?: “Everyone”
  - Method D (Not recommended): Only admit participants signed in with university accounts into the meeting room
-   - (2) Require authentication to join: Turn on this option and select ”大学アカウントでサインイン”(Sign in with university account) , and confirm that the domain showing up below is ‘*.u-tokyo.ac.jp’.（[Details](/en/zoom/auth/)）
+   - (2) Require authentication to join: Turn on this option and select “大学アカウントでサインイン” (Sign in with university account), and confirm that the domain showing up below is ‘*.u-tokyo.ac.jp’. ([Details](/en/zoom/create_room/auth/))
```

[← 一覧へ](<../README.md>)
