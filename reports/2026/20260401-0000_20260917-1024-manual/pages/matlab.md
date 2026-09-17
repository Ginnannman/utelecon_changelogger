# UTokyo MATLAB Campus-Wide License

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/matlab/`](<https://utelecon.adm.u-tokyo.ac.jp/matlab/>) | [`src/pages/matlab/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/matlab/index.md>) |
| English | 変更 | [`/en/matlab/`](<https://utelecon.adm.u-tokyo.ac.jp/en/matlab/>) | [`src/pages/en/matlab/index.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/matlab/index.md>) |

## 日本語

```diff
  ## MATLABについて
  [MATLAB](https://jp.mathworks.com/products/matlab.html)は，科学技術計算を目的に開発されたプログラミング言語，およびこれを用いた数値計算・数式処理ソフトウェアです．代数・幾何・解析の各数学処理をはじめ，機械学習や統計分析・データの可視化・制御シミュレーションとそのハードウェアへの実装といった，さまざまな用途に利用できます．コードを書かずにGUIで操作することも可能なため，工学・理学などの専門分野における研究利用はもちろん，プログラミング初学者の基礎教育や，人文科学・社会科学の分野におけるデータ分析でも容易に導入できます．
- 東京大学ではライセンスの包括契約を行っており，すべての構成員は個人の端末から下記の機能を追加の費用負担なく利用できます．提供される機能は大学の状況と契約内容により増減する場合があります．
+ 東京大学ではライセンスの包括契約を行っており，現在はすべてのUTokyo Account利用者が個人の端末から下記の機能を追加の費用負担なく利用できます．提供される機能は大学の状況と契約内容により増減する場合があります．
  - MATLABのインストールと利用
  - MATLAB Onlineの無制限利用
  ⋯
  また，利用の際は「[情報システム本部が管理・運用する外部サービスの利用にあたっての注意事項](/docs/dics-terms/)」も参照してください．
  ## 利用開始の手順
- MATLABの利用にはMathWorksアカウントの作成が必要です．また，包括ライセンスの有効化には[UTokyo Account](/utokyo_account/)，および東京大学から提供されたu-tokyo.ac.jpで終わるメールアドレスが必要です．
- UTokyo Accountをまだ使ったことがなければ，先に「[UTokyo Accountを使い始めるには](/utokyo_account/#procedures)」を参照してください．また，u-tokyo.ac.jpで終わるメールアドレスの一例として，[ECCSクラウドメール](/google/)を利用可能です．
+ 東京大学の包括ライセンスのもとでMATLABを利用する場合は，UTokyo AccountをMathWorksアカウントとして利用します． なお，2024年12月以前に，それまで提供していた形式（UTokyo Accountではなく，u-tokyo.ac.jpで終わる東京大学のメールアドレス）のMathWorksアカウントを作成し，UTokyo MATLAB CWL を利用していた方も，サインインにはUTokyo Accountを利用できます．
+ - MathWorks社の提供する東京大学の[東京大学の包括ライセンス紹介ページ](https://jp.mathworks.com/academia/tah-portal/university-of-tokyo-40790257.html)にアクセスし，ページ中ほどの「サインインして使い始める」を押してください．
+ ![](/_astro/img.webp)
+ - 以下のようなMATLABのサインイン画面が表示されるので，「電子メール」欄にUTokyo Account（例：0123456789@utac.u-tokyo.ac.jp）を入力し，「次へ」を押してください．
+ ![](/_astro/img-1.webp)
+ - 既にUTokyo Accountにサインイン済みの場合を除き，以下のようなUTokyo Accountのサインイン画面が表示されるので，サインインしてください．
+ ![](/_astro/img-5.webp)
  ### まだMathWorksアカウントを作成していない場合
+ UTokyo AccountをMathWorksアカウントとして利用するため，次の手順で初期設定を行ってください．
  - MathWorks社の提供する[東京大学の包括ライセンス紹介ページ](https://jp.mathworks.com/academia/tah-portal/university-of-tokyo-40790257.html)にアクセスし，ページ中ほどの「サインインして使い始める」を押してください．
- - 既にUTokyo Accountにサインイン済みの場合を除き，UTokyo Accountのサインイン画面が表示されるので，サインインしてください．
- - 「Create a MathWorks Account」と書かれたメニューが表示されたら，「Create」を押してください．
- - 画面の指示に従い，[ECCSクラウドメール](/google/)などの，u-tokyo.ac.jpで終わるメールアドレスを使用してMathWorksアカウントを作成してください．
- - 登録したメールアドレス宛てにservice@account.mathworks.comから認証メールが届くので，記載されたリンクにアクセスします．メールの受信が確認できない場合は，迷惑メールに振り分けられていないか確認してください．
- - 「所属する学校の Campus-Wide License がご利用の MathWorks アカウントにリンクされました。」と表示されたら準備は完了です．
- この手順がうまくいかない場合は，MathWorks社のサポート（service@mathworks.co.jp）にメールしてサポートを依頼してください．
- ### すでに作成済みのMathWorksアカウントがある場合
- - お持ちのMathWorksアカウントのメールアドレスを，[ECCSクラウドメール](/google/)などの，u-tokyo.ac.jpで終わるメールアドレスに更新してください．
-   手順
-   - [MathWorksアカウントページ](https://jp.mathworks.com/mwaccount/)にアクセスし，サインインしてください．
-   - ページ上部の「プロファイル > プロファイルの編集」を押してください．
-   - メールアドレスを変更し，「更新」を押してください．
-   - service@account.mathworks.comから認証メールが届くので，そのメール内のリンクにアクセスしてください．
- - MathWorks社の提供する[東京大学の包括ライセンス紹介ページ](https://jp.mathworks.com/academia/tah-portal/university-of-tokyo-40790257.html)にアクセスし，ページ中ほどの「サインインして使い始める」をクリックしてください．
- - 既にUTokyo Accountにサインイン済みの場合を除き，UTokyo Accountのサインイン画面が表示されるので，サインインしてください．
- - 「Sign in to your existing MathWorks Account」と書かれたメニューが表示されたら，「Sign In」をクリックしてください．
- - お持ちのMathWorksアカウントでサインインしてください．
- - 「所属する学校の Campus-Wide License がご利用の MathWorks アカウントにリンクされました。」と表示されたら準備は完了です．
- この手順がうまくいかない場合は，MathWorks社のサポート（service@mathworks.co.jp）にメールしてサポートを依頼してください．
+ ![](/_astro/img.webp)
+ - MATLABのサインイン画面が表示されるので，「電子メール」欄にUTokyo Account（例：0123456789@utac.u-tokyo.ac.jp）を入力し，「アカウントを作成する」を押してください．
+ - 以下のような「アカウントを作成する」という画面が表示されるので，「メールアドレス」欄に再度UTokyo Account（例：0123456789@utac.u-tokyo.ac.jp）を入力し，「次へ」を押してください．
+ ![](/_astro/img-3.webp)
+ - 既にUTokyo Accountにサインイン済みの場合を除き，以下のようなUTokyo Accountのサインイン画面が表示されるので，サインインしてください．
+ ![](/_astro/img-5.webp) 5. 以下のような「メール アドレスの認証」という画面が表示されるので，認証コードを入力してください．認証コードは，[ECCSクラウドメール](/google/#login)のメールボックスに届きます．
+ ![](/_astro/img-6.webp)
+ - 以下のようなMathWorksアカウントを作成する画面が表示されるので，氏名やその他の必要事項を入力してください．これでMathWorks アカウントが作成されます．
+ ![](/_astro/img-9.webp)
+ - 以上の手順で作成したMathWorks アカウントに東京大学の包括ライセンスが適用されているか確認してください．以下のような[「マイアカウント」の画面](https://jp.mathworks.com/mwaccount/)にアクセスし，ソフトウェアライセンスの欄に「40790257 MATLAB (Individual)」と表示されていれば，問題ありません．
+ ![](/_astro/img-11.webp)
+ この手順がうまくいかない場合は，MathWorks社のサポート（[service@mathworks.co.jp](mailto:service@mathworks.co.jp)）にメールしてサポートを依頼してください．
  ## 基本的な利用の方法
  MATLABの機能をすべて使うには，PCにソフトウェア版のインストールを行うことが推奨されますが，PCに十分な処理速度のプロセッサ，および保存領域の余裕があることが必要です．また，インストール時にはインターネット通信が必要となります．
  ⋯
  #### MATLAB Driveへのアクセス
  - [MATLAB Drive オンライン](https://drive.matlab.com/files)にアクセスし，サインインします．
- - PCに[MATLAB Drive Connecter](https://jp.mathworks.com/products/matlab-drive)をインストールすることで，MATLAB Driveのデータを同期したドライブをマウントすることができます．
+ - PCに[MATLAB Drive Connector](https://jp.mathworks.com/products/matlab-drive)をインストールすることで，MATLAB Driveのデータを同期したドライブをマウントすることができます．
  ### 操作方法の学習
  基本の操作から目的別の応用まで，チュートリアル形式で学習可能なオンライントレーニングコースを利用できます．
```

## English

```diff
  Also, please refer to “[Precautions for using external services managed and operated by Division for Information and Communication Systems](/en/docs/dics-terms/)”.
  ## How to start using MATLAB
- To use MATLAB, you need to create a MathWorks account. In addition, you will need a [UTokyo Account](/en/utokyo_account/) and an email address ending with u-tokyo.ac.jp provided by the University of Tokyo to activate the blanket license.
- If you have not used UTokyo Account yet, please refer to [How to start using UTokyo Account](/en/utokyo_account/#procedures). You can also use [ECCS Cloud Email](/en/google/) as an example of an email address ending with u-tokyo.ac.jp.
+ When using MATLAB under the University of Tokyo’s campus-wide license, your UTokyo Account is used as your MathWorks account. Please note that even if you created a MathWorks account before December 2024 using the previously provided format (i.e., a University of Tokyo email address ending with u-tokyo.ac.jp rather than a UTokyo Account), you can still sign in using your UTokyo Account.
+ - Access the [University of Tokyo’s comprehensive license introduction page](https://www.mathworks.com/academia/tah-portal/university-of-tokyo-40790257.html) provided by MathWorks, and click “Sign In to Get Started” located in the middle of the page.
+ ![](/_astro/img-0.webp)
+ - When the MATLAB sign-in screen appears, enter your UTokyo Account (e.g., [0123456789@utac.u-tokyo.ac.jp](mailto:0123456789@utac.u-tokyo.ac.jp)) in the “Email” field, as illustrated below, and then click “Next”.
+ ![](/_astro/img-2.webp)
+ - Unless you are already signed in with your UTokyo Account, the UTokyo Account sign-in page will be displayed. Please sign in accordingly.
  ### If you have not created a MathWorks account yet
- - Access the [University of Tokyo’s comprehensive license introduction page](https://www.mathworks.com/academia/tah-portal/university-of-tokyo-40790257.html) provided by MathWorks, and click “Sign in to get started” in the middle of the page.
- - Unless you have already signed in to your UTokyo Account, the UTokyo Account sign-in page will appear. So please sign in.
- - When the menu labeled “Create a MathWorks Account” appears, click “Create”.
- - Follow the instructions on your screen to create a MathWorks account using an email address ending with u-tokyo.ac.jp, such as [ECCS Cloud Email](/en/google/).
- - You will receive an authentication email from service@account.mathworks.com to your registered email address. If you do not receive the email, check to see if it has not been classified as spam mail.
- - When you see the message “Your school’s Campus-Wide License has been linked to your MathWorks account.” is displayed, you are ready to go.
- If the above procedure does not work, please contact MathWorks technical support desk at service@mathworks.com for assistance.
- ### If you have already created a MathWorks account
- - Update the email address of your MathWorks account to an email address ending with u-tokyo.ac.jp, such as [ECCS Cloud Email](/en/google/).
-   Procedures
-   - Go to your [MathWorks account page](https://www.mathworks.com/mwaccount/) and sign in.
-   - Click on "Profile > Edit Profile" at the top of the page.
-   - Change the email address and click "Update".
-   - Access the link in the authentication email you receive from service@account.mathworks.com.
- - Access the [University of Tokyo’s comprehensive license introduction page](https://www.mathworks.com/academia/tah-portal/university-of-tokyo-40790257.html) provided by MathWorks, and click “Sign in to get started” in the middle of the page.
- - Unless you have already signed in to your UTokyo Account, the UTokyo Account sign-in page will appear.
- - Click “Sign In” when the “Sign in to your existing MathWorks Account” menu appears.
- - Sign in with your existing MathWorks account.
- - When you see “Your school’s Campus-Wide License has been linked to your MathWorks Account” is displayed, you are ready to go.
- If the above procedure does not work, please contact MathWorks technical support desk at service@mathworks.com for assistance.
+ To use your UTokyo Account as a MathWorks account, please complete the initial setup by following the steps below.
+ - Access the [University of Tokyo’s comprehensive license introduction page](https://www.mathworks.com/academia/tah-portal/university-of-tokyo-40790257.html) provided by MathWorks, and click “Sign In to Get Started” located in the middle of the page.
+ ![](/_astro/img-0.webp)
+ - When the MATLAB sign-in screen appears, enter your UTokyo Account (e.g., 0123456789@utac.u-tokyo.ac.jp) in the “Email” field, and click “Create Account.”
+ - The “Create Account” screen, as illustrated below, will be displayed. Enter your UTokyo Account (e.g., 0123456789@utac.u-tokyo.ac.jp) again in the “Email Address” field, and click “Next.”
+ ![](/_astro/img-3.webp)
+ - Unless you are already signed in with your UTokyo Account, the UTokyo Account sign-in page will be displayed. Please sign in accordingly.
+ - When the “Verify Email Address” screen appears, enter the verification code. The verification code will be sent to your mailbox in [ECCS Cloud Email](/en/google/#login).
+ - The “Create MathWorks Account” screen will be displayed. Enter your name and other required information. This will complete the creation of your MathWorks account.
+ - Please confirm that the University of Tokyo campus-wide license has been applied to the MathWorks account created through the above procedure. Access the [MathWorks account page](https://jp.mathworks.com/mwaccount/), and verify that 40790257 MATLAB (Individual) is displayed in the Software Licenses section.
+ If you encounter any issues with this procedure, please contact MathWorks Support([service@mathworks.co.jp](mailto:service@mathworks.co.jp)) for assistance.
  ## How to Use MATLAB Basically
  To use the full functionality of MATLAB, it is recommended to install the software version on your computer, which is required to have a processor with sufficient performance and enough storage space. Internet communication is also required during installation.
  ⋯
  #### Access to MATLAB Drive
  - Access [MATLAB Drive Online](https://drive.matlab.com/files) and sign in.
- - Install [MATLAB Drive Connecter](https://www.mathworks.com/products/matlab-drive.html) in your computer to mount a drive synchronized with MATLAB Drive data.
+ - Install [MATLAB Drive Connector](https://www.mathworks.com/products/matlab-drive.html) in your computer to mount a drive synchronized with MATLAB Drive data.
  ### Learning how to operate
  Online training courses are available in tutorial format, covering everything from basic operation to advanced features for different purposes.
```

[← 一覧へ](<../README.md>)
