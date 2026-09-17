# オンライン授業において Zoom の通信量を抑えるには

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/articles/zoom-data-traffic/`](<https://utelecon.adm.u-tokyo.ac.jp/articles/zoom-data-traffic/>) | [`src/pages/articles/zoom-data-traffic/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/articles/zoom-data-traffic/index.md>) |
| English | 変更 | [`/en/articles/zoom-data-traffic/`](<https://utelecon.adm.u-tokyo.ac.jp/en/articles/zoom-data-traffic/>) | [`src/pages/en/articles/zoom-data-traffic/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/articles/zoom-data-traffic/index.md>) |

## 日本語

```diff
  ここで，通信量を抑える工夫ができるところは主に2つあります．教員(送信者)側と学生(受信者)側です．
  - 教員(送信者)側は，ビデオを OFF にする，画面共有の設定を工夫するなどで教員が送信する通信量を抑えられ，それが学生(受信者)の通信量を減らすことにつながります
- - 学生(受信者)側は，相手のビデオを非表示することなどで，受信する通信量を減らすことができます．
+ - 学生(受信者)側は，相手のビデオを非表示にすることなどで，受信する通信量を減らすことができます．
  教員(送信者)側と学生(受信者)側，それぞれの工夫によって通信量を減らすことができるため，立場や環境に応じて対策をとることをおすすめします．
  ## おおよその Zoom 通信量
  ⋯
    - Zoom アプリの「設定(歯車)」→「画面を共有」→(右下の)「詳細」→「画面共有対象を以下に制限する」
    - 1が最小 (1秒に1回画面更新のため多少カクカク)
- ### (Mac、iPhone、Android の場合) 受信者が表示を OFF にすると受信者の通信量が 0 になる
+ ### (Mac，iPhone，Android の場合) 受信者が表示を OFF にすると受信者の通信量が 0 になる
  - 見出しのとおりですが，受信者が表示を OFF にすると Mac, iPhone, Android の場合は通信量が 0 になります
    - 残念ながら発表時（2020年5月29日）は Windows のアプリでは受信者が画面共有の表示を OFF にしても画面共有の通信量は発生していました
  ⋯
  - fps をできるだけ下げる (4でも十分．リアルタイムに変更できます)
    - Zoom アプリの「設定(歯車)」→「画面を共有」→(右下の)「詳細」→「画面共有対象を以下に制限する」から変更可能
-   - 1 が最小 (1秒に1回画面更新のため、多少カクカクした動きになります)
+   - 1 が最小 (1秒に1回画面更新のため，多少カクカクした動きになります)
  ### 音声(影響 小)
  - 話していないときは OFF にする
  ⋯
  - 他者が ON にしている場合，ビデオを最小表示もしくは表示OFFにすることで通信量が抑えられます
  ### 画面共有(影響 小～中)
- - (Mac、iPhone、Android の場合) 資料は別途ダウンロードして，画面共有の表示を OFF にすると通信量を抑えられます（ただ理解の妨げになる可能性が高いので受信者が配慮するよりも送信者に配慮してもらう方が良いかもしれません）
+ - (Mac，iPhone，Android の場合) 資料は別途ダウンロードして，画面共有の表示を OFF にすると通信量を抑えられます（ただ理解の妨げになる可能性が高いので受信者が配慮するよりも送信者に配慮してもらう方が良いかもしれません）
    - Macは最小化することで表示 OFF にできます
-   - iPhone、Android は左→右にスワイプすることで画面共有を表示 OFF にできます
+   - iPhone，Android は左→右にスワイプすることで画面共有を表示 OFF にできます
  ### 音声(影響 小)
  - 基本OFF
  ⋯
  - ビデオ 基本全員OFF (4分教員ON)
  - 画面共有 教員 ON
-   - 説明時，解像度 1920*1080，20fps程度 (平均121kpbs)
-   - 演習時，解像度 3840*2160，7fps 程度 (平均333kpbs)
+   - 説明時，解像度 1920*1080，20fps程度 (平均121kbps)
+   - 演習時，解像度 3840*2160，7fps 程度 (平均333kbps)
  #### 通信量
  ![Zoom の通信量 例1](/_astro/example1.webp)
```

## English

```diff
  # How to Reduce Zoom Traffic During Online Classes
  ## Introduction
- - The network environments used by students and faculty members is diverse. In some cases, it may be necessary to reduce the amount of traffic. This article explains how to reduce Zoom traffic, while also providing some basic information on using Zoom.
+ - The network environments used by students and faculty members are diverse. In some cases, it may be necessary to reduce the amount of traffic. This article explains how to reduce Zoom traffic, while also providing some basic information on using Zoom.
  - This article is written based on information from the presentation “How to Reduce Zoom Traffic During Online Classes” given at the [9th Cyber Symposium for Sharing Distance Learning Measures at Universities and Other Institutions Since April (held online on May 29, 2020)](https://www.nii.ac.jp/event/other/decs/past.html#09).
  ## How to Reduce Zoom Traffic
```

[← 一覧へ](<../README.md>)
