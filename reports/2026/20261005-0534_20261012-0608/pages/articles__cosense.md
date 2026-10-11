# Cosenseの基本的な使い方

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/articles/cosense/`](<https://utelecon.adm.u-tokyo.ac.jp/articles/cosense/>) | [`src/pages/articles/cosense/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/7863cea4b1fcef7da4d36022e61aefeab8a144e5/src/pages/articles/cosense/index.md>) |
| English | 変更 | [`/en/articles/cosense/`](<https://utelecon.adm.u-tokyo.ac.jp/en/articles/cosense/>) | [`src/pages/en/articles/cosense/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/7863cea4b1fcef7da4d36022e61aefeab8a144e5/src/pages/en/articles/cosense/index.md>) |

## 日本語

```diff
  ![](/_astro/26.webp)
  文字列を選択することで，太字・斜体・取り消し線などの装飾を追加することも可能です．
- 例えば，文字列を選択して出てきたウィンドウから「strong」を選択すると，文字を太字にすることができます．
- ![](/_astro/28.webp)
+ 例えば，文字列を選択して出てきたウィンドウから「strong」を選択すると，文字を太字にすることができます． ![](/_astro/28.webp)
  ![](/_astro/29.webp)
  ### ページから別のページにジャンプする
```

## English

```diff
  ![](/_astro/26.webp)
  You can also add decorations such as bold, italic, strikethrough and others. by selecting the text.
- For example, if you select a string of text and choose “strong” from the window that comes up, you can make the text bold.
- ![](/_astro/28.webp)
+ For example, if you select a string of text and choose “strong” from the window that comes up, you can make the text bold. ![](/_astro/28.webp)
  ![](/_astro/29.webp)
  ### Jumping From One Page to Another
  If you want to structure pages (relate pages to each other), you can use the link function or the hashtag function. You can automatically generate links by enclosing the string you want to link with [ ], and hashtags by prefixing the string with #.
- Links and hashtags are displayed in blue and pink respectively.
- ![](/_astro/11.webp)
+ Links and hashtags are displayed in blue and pink respectively. ![](/_astro/11.webp)
  Clicking on a link or a hashtag string will take you to a page titled with the respective string.
  If you click on the “Link” string in the previous image, you will be taken to a new page with the title “Link”. From here, you can create a new page by typing the text.
```

[← 一覧へ](<../README.md>)
