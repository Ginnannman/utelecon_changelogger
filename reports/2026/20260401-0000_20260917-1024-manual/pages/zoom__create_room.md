# Zoomミーティングを作成する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/zoom/create_room/`](<https://utelecon.adm.u-tokyo.ac.jp/zoom/create_room/>) | [`src/pages/zoom/create_room/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/zoom/create_room/index.md>) |
| English | 変更 | [`/en/zoom/create_room/`](<https://utelecon.adm.u-tokyo.ac.jp/en/zoom/create_room/>) | [`src/pages/en/zoom/create_room/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/zoom/create_room/index.md>) |

## 日本語

```diff
  詳しくは，「[授業におけるZoom会議室の入室制限](/faculty_members/zoom_access_control/)」のページを参考にしてください．タイトルには「授業における」とあり，特に授業に用いる場合を想定しておすすめの設定を紹介する記事ですが，一般的な会議等にも応用可能な内容です．
  - 「パスコード」
-   - オンにすると，ミーティングへの参加時に，ミーティングIDに加えてパスコードの入力が必要となります．パスコードとミーティングIDの両方をを当てずっぽうで探り当てることは非常に難しいため，無関係な第三者がミーティングに参加してしまう危険性が格段に下がります．デフォルトではオンになっていますので，特段の理由がない限りそのままオンにしてください．自分で好きな文字列をパスコードに指定することも，自動生成された文字列を使用することもできます．
+   - オンにすると，ミーティングへの参加時に，ミーティングIDに加えてパスコードの入力が必要となります．パスコードとミーティングIDの両方を当てずっぽうで探り当てることは非常に難しいため，無関係な第三者がミーティングに参加してしまう危険性が格段に下がります．デフォルトではオンになっていますので，特段の理由がない限りそのままオンにしてください．自分で好きな文字列をパスコードに指定することも，自動生成された文字列を使用することもできます．
    - デフォルトの設定において，ミーティングへの招待リンクにはミーティングIDの情報とパスコードの情報の両方が含まれています．このため，パスコード機能をオンにしても，参加者に招待リンクさえ知らせれば，別途パスコードを知らせる手間はかかりません．ただし，招待リンクに加えてミーティングIDとパスコードを知らせておくことが有効な場合もあります（詳しくは[授業URLの連絡方法についてのお知らせ](/faculty_members/url/#use-online-class-info-in-general)もご覧ください）．もし，招待リンクにパスコードの情報を埋め込みたくない場合，設定ページから変更できます．詳しくは，下の「[よく使われている機能の設定方法](#popular_functions)」のセクションを参照してください．
  - 「待合室（待機室）」
```

## English

```diff
  - Pre-Assign Breakout Rooms
    - By using the breakout room feature, you can split participants from the main meeting room into multiple breakout rooms. This feature allows you to pre-assign participants to specific rooms in advance.
-   - For more details, please refer to “[Zoom’s Breakout Room Feature (in Japanese)](/zoom/usage/breakout/)”.
+   - For more details, please refer to “[How to use Breakout Rooms](/en/zoom/usage/breakout/)”.
  - Automatically Record the Meeting
    - This feature automatically starts recording as soon as the meeting begins. You can choose to save the recording either on your local computer (your PC) or on the cloud. Even if this option is turned off, you can manually start recording during the meeting.
  ⋯
    - An “Alternative Host” is a user who can start the meeting on behalf of the host. You can designate an alternative host using this field.
    - However, only users with a UTokyo Account can be designated. To assign someone, enter their UTokyo Account (10-digit Common ID + @utac.u-tokyo.ac.jp).
-   - For more details, please refer to the section on “Alternative Host” in “[Host and Co-host Controls in a Zoom Meeting(in Japanese)](/zoom/misc/management_roles/#alt_host)”.
+   - For more details, please refer to the section on “Alternative Host” in “[Host and Co-host Controls in a Zoom Meeting](/zoom/misc/management_roles/#alt_host)” (in Japanese).
  ## How to Set Up Commonly Used Features
  By selecting “Settings” in the side menu of your Zoom profile page, you will open the “My Settings” page. Features such as “Breakout Rooms” (to divide participants into separate rooms) and “Screen Sharing” (to share your screen with other participants) are not included in the meeting creation settings and must be configured from this separate “My Settings” page. Please note that settings made in “My Settings” will apply to all meetings you create.
  ⋯
    - For more details, please refer to “[Screen Sharing in Zoom](/en/zoom/usage/screen_sharing/)”.
  - Breakout Rooms - Meeting
-   - For an explanation of Breakout Rooms, please refer to “[Zoom’s Breakout Room Feature (in Japanese)](/zoom/usage/breakout/)”.
+   - For an explanation of Breakout Rooms, please refer to “[How to use Breakout Rooms](/en/zoom/usage/breakout/)”.
  - Auto-Generated Captions
    - When enabled, the content spoken by participants is automatically transcribed and displayed as captions on the Zoom screen.
```

[← 一覧へ](<../README.md>)
