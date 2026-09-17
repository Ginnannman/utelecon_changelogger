# UTokyo Slackの詳細な仕様や設定について

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/slack/details/`](<https://utelecon.adm.u-tokyo.ac.jp/slack/details/>) | [`src/pages/slack/details.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/slack/details.mdx>) |
| English | 変更 | [`/en/slack/details/`](<https://utelecon.adm.u-tokyo.ac.jp/en/slack/details/>) | [`src/pages/en/slack/details.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/slack/details.mdx>) |

## 日本語

```diff
  なお，カスタム絵文字の削除は，自身が追加したものについて，ワークスペース画面左上のメニュー「ツールと設定」にある「ワークスペースをカスタマイズする」で開く画面から行えます．
  ## プロフィールについて
- UTokyo Slackを利用する際には，プロフィールを適切に設定することをおすすめします．特に，プロフィール内の「表示名」の項目は，通常メッセージなどにあなたの名前として表示される情報ですが，システムの仕様上，初期状態では共通ID（UTokyo Accountの先頭10桁の数字のみの部分)になってしまっていますので，他の人に分かるような名前を設定すると良いでしょう．
+ UTokyo Slackを利用する際には，プロフィールを適切に設定することをおすすめします．特に，プロフィール内の「表示名」の項目は，通常メッセージなどにあなたの名前として表示される情報ですが，システムの仕様上，初期状態では共通ID（UTokyo Accountの先頭10桁の数字のみの部分）になってしまっていますので，他の人に分かるような名前を設定すると良いでしょう．
  プロフィールを変更する手順は以下の通りです（PCで利用している場合）．
  - 画面左下にある人のマークを押してください．
```

## English

```diff
  - The “[custom profile fields](https://slack.com/help/articles/212281478-Customize-member-profiles)” feature, which is related to profiles, is also unavailable, as it can only be set for UTokyo Slack as a whole and cannot be set for individual workspaces.
  ## For students who become faculty members & faculty/staff members who become students
- Previously, UTokyo Accounts were managed and assigned separately for students and faculty/staff members. If you become a faculty member from a student or a faculty member from a student, your UTokyo Account was changed to a different one, which requires “re-connection” of a previous account.
+ Previously, UTokyo Accounts were managed and assigned separately for students and faculty/staff members. If you became a faculty/staff member from a student, or a student from a faculty/staff member, your UTokyo Account changed to a different one, which required “re-connection” of a previous account.
  After 27 February 2024, UTokyo Account will no longer be changed when your affiliation status changes within the university, so you can continue to use the same account in UTokyo Slack.
- *For more details on the handling of UTokyo Account can be found [“Notice on Account Revocation due to Graduation, Resignation or Change of Affiliation”](/en/systems/leave/).
+ *For more details on the handling of UTokyo Account, see [“Notice on Account Revocation due to Graduation, Resignation or Change of Affiliation”](/en/systems/leave/).
  ## ”Guest” feature
  (*This section is for those in charge of workspace management and operation.)
  Although Slack provides a paid “Guest” feature, it is not available on UTokyo Slack for the following reasons.
  - For members outside the university (those who do not have a UTokyo Account), the guest feature is not available because the “Multi-Channel Guest”, a type of guest, is charged a fee. Although “Single-Channel Guest”, a different type of guest, is not a fee-charging feature, the entire guest function including Single-Channel Guest is not available because it is not possible to enable only the Single-Channel Guests.
-   - If you wish to use Slack with someone from outside the university, you can use the “Connect” feature to collaborate with an external workspace. (However, this is not always recommended, as it is not as easy to use as the regular workspace.) See “[Using UTokyo Slack with external users with the “Connect” feature](/slack/workspace/connect/)” (in Japanese) for details.
+   - If you wish to use Slack with someone from outside the university, you can use the “Connect” feature to collaborate with an external workspace. (However, this is not always recommended, as it is not as easy to use as the regular workspace.) See “[Using UTokyo Slack with external users with the “Connect” feature](/en/slack/workspace/connect/)” for details.
  - For members inside the university (those who have a UTokyo Account), we ask them to use it as a regular member as they cannot join more than one workspace as a guest.
    - If you wish to allow someone from inside the university to join only a specific channel, it is possible to use the “Connect” feature to share the channel to an external workspace (other than UTokyo Slack), and have them join from the external workspace side.
  ## ”Multi-workspace channel”
  ### What is a “multi-workspace channel”?
- “Multi-workspace channel” is a feature that allows multiple workspaces to work together within UTokyo Slack, creating a shared channel among workspaces. Normally, a Slack channel belongs to a single workspace, but by sharing a channel using the “multi-workspace channel” feature, it becomes as if a single channel exists as a common space in multiple workspaces. This allows members in different workspaces to communicate across workspaces. While similar to the “[Connect](/slack/workspace/connect/)” feature (in Japanese), when sharing a channel among workspaces in UTokyo Slack, please make sure to use the “multi-workspace channels” feature instead of “Connect” feature.
+ “Multi-workspace channel” is a feature that allows multiple workspaces to work together within UTokyo Slack, creating a shared channel among workspaces. Normally, a Slack channel belongs to a single workspace, but by sharing a channel using the “multi-workspace channel” feature, it becomes as if a single channel exists as a common space in multiple workspaces. This allows members in different workspaces to communicate across workspaces. While similar to the “[Connect](/en/slack/workspace/connect/)” feature, when sharing a channel among workspaces in UTokyo Slack, please make sure to use the “multi-workspace channels” feature instead of “Connect” feature.
  Certain specifications of the “multi-workspace channel” feature affect the use of the entire UTokyo Slack. Once a channel is set as a multi-workspace channel, a channel with the same name will no longer be available in all UTokyo Slack workspaces. For this reason, we have established certain operation rules for UTokyo Slack, and we ask you to use them in a constrained manner.
  Please note that due to the above specification, even workspaces that do not use the “multi-workspace channel” feature may not be able to use a specific channel name (causing an error when creating or renaming a channel). We would like to operate in a way that strikes a balance between the overall UTokyo Slack workspace usage and the needs of those who require the “multi-workspace channel” feature. We appreciate your understanding. If there is a problem caused by the unavailability of a channel name, please contact us via the [contact form](https://forms.office.com/r/pbKNVZzsMS) from the workspace owner/administrator to adjust it accordingly.
```

[← 一覧へ](<../README.md>)
