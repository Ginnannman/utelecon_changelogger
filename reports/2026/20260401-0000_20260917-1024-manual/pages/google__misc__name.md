# ECCSクラウドメールで名前（姓・名）を変更する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/google/misc/name/`](<https://utelecon.adm.u-tokyo.ac.jp/google/misc/name/>) | [`src/pages/google/misc/name/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/google/misc/name/index.mdx>) |
| English | 変更 | [`/en/google/misc/name/`](<https://utelecon.adm.u-tokyo.ac.jp/en/google/misc/name/>) | [`src/pages/en/google/misc/name/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/google/misc/name/index.mdx>) |

## 日本語

```diff
- タイトル: ECCSクラウドメールで姓・名を変更する | utelecon
- 説明: 目次: 概要; プロフィールの姓・名を変更する手順; 「プロフィールの姓名」と「システム管理上の姓名」について; 参考ページ...
+ タイトル: ECCSクラウドメールで名前（姓・名）を変更する | utelecon
+ 説明: 目次: 概要; プロフィールの名前（姓・名）を変更する手順; 「プロフィールの名前（姓・名）」と「システム管理上の名前（姓・名）」; 参考ページ...
  
- [ECCSクラウドメール](/google/) > [関連情報](/google/misc/) > 姓名の変更
- # ECCSクラウドメールで姓・名を変更する
+ [ECCSクラウドメール](/google/) > [関連情報](/google/misc/) > 名前（姓・名）の変更
+ # ECCSクラウドメールで名前（姓・名）を変更する
  ［お断り］このページの内容の一部は，相当古い時点の情報に基づいています．最新の状態とは異なる可能性があるため，注意してください．
  ## 概要
- - ECCSクラウドメールのアカウントにおける「プロフィールの姓名」は，システムからの自動連携で作成されていますが，自分で変更することができます．
- - 一部のシステムでは，プロフィールの姓名ではなく，[「システム管理上の姓名」が表示されてしまうケース](#system-name-issue)があります．なお，「システム管理上の姓名」をユーザが変更することはできません．
- ## プロフィールの姓・名を変更する手順
+ - ECCSクラウドメールのアカウントにおける「プロフィールの名前（姓・名）」（画面上の「名前」）は，システムからの自動連携で作成されていますが，自分で変更することができます．
+ - 一部のシステムでは，「プロフィールの名前（姓・名）」ではなく，[「システム管理上の名前（姓・名）」が表示されてしまうケース](#system-name-issue)があります．なお，「システム管理上の名前（姓・名）」をユーザが変更することはできません．
+ ## プロフィールの名前（姓・名）を変更する手順
  - ブラウザで，[ECCSクラウドメールにログイン](/google/#login)してください．
  - 右上のアイコンをクリックしてメニューを開き，「Googleアカウントを管理」をクリックしてください． ![](/_astro/open-setting.webp)
- - 「個人情報」タブを開いてください．
-   ![](/_astro/settings-personal-info.webp)![](/_astro/settings-personal-info-2.webp)
- - 「基本情報」欄内にある「名前」をクリックしてください． ![](/_astro/settings-profile.webp)
+ - 「個人情報」タブを開いてください． ![](/_astro/settings-personal-info.webp)
+ - 「個人情報」内の「名前」をクリックしてください． ![](/_astro/settings-profiles.webp)
+ - 「名前」と「ニックネーム」という項目が表示されます．「名前」をクリックしてください． ![](/_astro/settings-profiles-detail.webp)
  - 名前（姓・名）を入力して，「保存」をクリックしてください． ![](/_astro/input-name.webp)
- ## 「プロフィールの姓名」と「システム管理上の姓名」について
- ECCSクラウドメールのアカウントでは，利用者が変更できる「プロフィールの姓名」と，予めシステムの処理により登録されている「システム管理上の姓名」の2つの姓名があります．
- ### プロフィールの姓名
- - Google Chatを利用する際や，ファイルやGoogleカレンダーの共有を行う場合に，相手に通知される姓名です．
+ ## 「プロフィールの名前（姓・名）」と「システム管理上の名前（姓・名）」
+ ECCSクラウドメールのアカウントでは，利用者が変更できる「プロフィールの名前（姓・名）」と，予めシステムの処理により登録されている「システム管理上の名前（姓・名）」の2種類の名前（姓・名）があります．
+ ### プロフィールの名前（姓・名）
+ - 「プロフィールの名前（姓・名）」は，Google Chatを利用する際や，ファイルやGoogleカレンダーの共有を行う場合に，相手に通知される名前（姓・名）です．
  - 利用者自身で[変更する](#edit-name)ことができます．
- ### システム管理上の姓名
- - ECCSクラウドメールのユーザを作成する際，システムの一連の処理の中で自動的に設定される姓名です.
- - 利用者側の操作により，姓名を変更することはできません.
- #### システム管理上の姓名が表示されるケースについて
- 一部のシステムを使用する際，表示される姓名が見覚えのない「システム管理上の姓名」になってしまうケースの存在が確認されています．
- 2022年5月の時点では，Google Chatでのみ，このような問題が確認されています．Google Chatの場合，自分の画面では「システム管理上の姓名」が表示されますが，相手の画面では「プロフィールの姓名」が表示されます．自分の画面と相手の画面で表示される姓名が異なるため紛らわしいですが，想定された挙動ですので，ご理解ください.
+ #### ニックネーム
+ - 「ニックネーム」は，「プロフィールの名前（姓・名）」とは別に設定できる呼び名です．設定しても単独では表示されず，「プロフィールの名前（姓・名）」と組み合わせて表示されます．
+ - 「名前」の設定画面にある「ニックネーム」の項目から，変更することができます．
+ - ただし，ニックネームは「プロフィールの名前（姓・名）」を置き換えるものではありません．相手に表示される名前（姓・名）を変えたい場合は，ニックネームではなく，[「プロフィールの名前（姓・名）」を変更](#edit-name)してください．
+ ### システム管理上の名前（姓・名）
+ - ECCSクラウドメールのユーザを作成する際，システムの一連の処理の中で自動的に設定される名前（姓・名）です．
+ - 利用者側の操作により，名前（姓・名）を変更することはできません．
+ #### システム管理上の名前（姓・名）が表示されるケース
+ 一部のシステムを使用する際，表示される名前（姓・名）が見覚えのない「システム管理上の名前（姓・名）」になってしまうケースの存在が確認されています．
+ 2022年5月の時点では，Google Chatでのみ，このような問題が確認されています．Google Chatの場合，自分の画面では「システム管理上の名前（姓・名）」が表示されますが，相手の画面では「プロフィールの名前（姓・名）」が表示されます．自分と相手で表示が異なり紛らわしいものの，相手には正しく「プロフィールの名前（姓・名）」で表示されるため実害はありません．
+ なお，2026年7月時点では，一部の環境でこの現象が再現しないことを確認しています．現在は改善されている可能性がありますが，すべての環境で解消したことを確認できているわけではありません．
  ![](/_astro/chat-system-name.webp)
  ## 参考ページ
```

## English

```diff
- タイトル: Changing your first and last name in your ECCS Cloud Email account | utelecon
- 説明: Table of Contents: ...
+ タイトル: Changing your first and last name in ECCS Cloud Email | utelecon
+ 説明: Table of Contents: Overview; How to change your profile name; “Profile name” and the “system-mana...
  
  [ECCS Cloud Email](/en/google/) > [Additional information](/en/google/misc/) > Changing your first and last name
- # Changing your first and last name in your ECCS Cloud Email account
- Please wait for a while until this page is published. In the meantime, the Japanese version of this page might already be available. To switch languages, click the “日本語” button at the top right of the page (for PC users) or tap the “Menu” button at the top left, then select the “日本語” button at the top center (for smartphone users).
+ # Changing your first and last name in ECCS Cloud Email
+ Note: Some of the information on this page is based on information from some time ago and may not reflect the current situation.
+ ## Overview
+ - The “profile name” of your ECCS Cloud Email account (shown as “Name” on the screen) is automatically set based on information provided by the system, but you can change it yourself.
+ - In some systems, the [“system-managed name” may be displayed instead of your profile name](#system-name-issue). Note that users cannot change their “system-managed name”.
+ ## How to change your profile name
+ - [Log in to ECCS Cloud Email](../../#login) from your browser.
+ - Click the icon at the top right to open the menu, then click “Manage your Google Account”. ![](/_astro/open-setting.webp)
+ - Open the “Personal info” tab. ![](/_astro/settings-personal-info.webp)
+ - Under “Personal info”, click “Name”. ![](/_astro/settings-profiles.webp)
+ - The items “Name” and “Nickname” appear. Click “Name”. ![](/_astro/settings-profiles-detail.webp)
+ - Enter your name (first and last), then click “Save”. ![](/_astro/input-name.webp)
+ ## “Profile name” and the “system-managed name”
+ ECCS Cloud Email accounts have two names: the “profile name”, which users can change themselves, and the “system-managed name”, which is registered in advance by the system.
+ ### Profile name
+ - This is the name shown to others when you use Google Chat or share files or a Google Calendar.
+ - You can [change it](#edit-name) yourself.
+ #### Nickname
+ - A “nickname” is a name you can set separately from your “profile name”. Even if you set one, it is not displayed on its own; it is always shown together with your “profile name”.
+ - You can change it under “Nickname” item on the “Name” settings screen.
+ - However, a nickname does not replace your “profile name”. If you want to change the name shown to others, [change your “profile name”](#edit-name) rather than the nickname.
+ ### System-managed name
+ - This is the name automatically set by the system when an ECCS Cloud Email user account is created.
+ - Users cannot change this name themselves.
+ #### Cases where the system-managed name is displayed
+ In some systems, the “system-managed name” may be displayed instead of your profile name.
+ As of May 2022, this issue has only been confirmed in Google Chat. In Google Chat, your own screen displays your “system-managed name”, while the other person’s screen displays your “profile name”. Although it may be confusing that the name differs between your screen and the other person’s screen, this does not cause any practical problems because the other person sees your correct “profile name”.
+ Note that, as of July 2026, we have confirmed that this behavior does not occur in some environments. The issue may have been addressed, but we have not confirmed that it has been resolved in all environments.
+ ![](/_astro/chat-system-name.webp)
+ (The screenshot above was taken around 2022, when this behavior was confirmed. It shows the interface of that time, in Japanese.)
+ ## Related pages
+ - [Google Account Help: How do I change information like my Google Account photo or name?](https://support.google.com/accounts/answer/27442)
```

[← 一覧へ](<../README.md>)
