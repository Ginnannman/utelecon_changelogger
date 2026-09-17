# UTOLでマークアップ機能を利用する

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更なし | [`/utol/markup/`](<https://utelecon.adm.u-tokyo.ac.jp/utol/markup/>) | [`src/pages/utol/markup/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utol/markup/index.mdx>) |
| English | 変更 | [`/en/utol/markup/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utol/markup/>) | [`src/pages/en/utol/markup/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utol/markup/index.mdx>) |

## English

```diff
  - Font: You can choose from “Sans Serif”, “Serif”, or “Monospace”. The default is “Sans Serif”. ![](/_astro/font-family-dropdown.webp) ![](/_astro/font-family-sample.webp)
  - Font size: You can choose from “Small”, “Normal”, “Large”, or “Huge”. The default is “Normal”. ![](/_astro/font-size-dropdown.webp)
- - Bold, Italic, Underline, Strikethrough: You can make the texts bold, italicized, underlined, or crossed out. ![](/_astro/bold.webp)is the bold, ![](/_astro/italic.webp)is the Italic，![](/_astro/underline.webp)is the underline，![](/_astro/strikethrough.webp)is the strikethrough.
+ - Bold, Italic, Underline, Strikethrough: You can make the texts bold, italicized, underlined, or crossed out. ![](/_astro/bold.webp)is the bold, ![](/_astro/italic.webp)is the Italic, ![](/_astro/underline.webp)is the underline, ![](/_astro/strikethrough.webp)is the strikethrough.
  - Text and background color: ![](/_astro/color.webp)is the text color icon and ![](/_astro/background-color.webp)is the text background color icon. 35 colors are available with black being the default color. ![](/_astro/colors.webp)
  - Subscript, Superscript: You can display text smaller and below or above the baseline of the preceding text. ![](/_astro/subscript.webp)is the subscript and ![](/_astro/superscript.webp)is the superscript.
  ⋯
    - There are six levels from Heading 1 to Heading 6.
      ![](/_astro/heading-dropdown.webp)
-     Dropdoen List
+     Dropdown List
      ![](/_astro/heading-sample.webp)
      Examples of how it is displayed
  ⋯
  - Blockquote![](/_astro/quote.webp): You can clarify that the text has been quoted or republished. It will be displayed as shown in the example below. ![](/_astro/quote-sample.webp)
  - Code Block![](/_astro/code.webp): You can display source code or similar content of programming languages in white text on black background for better readability. Coloring (syntax highlighting: coloring the source code corresponding to its meaning) is not supported. ![](/_astro/code-sample.webp)
- - Numbering and Bullet Lists: You can display specified lines as lists. ![](/_astro/ol.webp)is the numbering list, and ![](/_astro/ul.webp)is the bullet list.Lines are displayed as follows:
+ - Numbering and Bullet Lists: You can display specified lines as lists. ![](/_astro/ol.webp) is the numbering list, and ![](/_astro/ul.webp) is the bullet list. Lines are displayed as follows:
    ![](/_astro/ol-sample.webp)
    Example of a numbering list
```

[← 一覧へ](<../README.md>)
