# UTokyo Slackにおけるワークスペースの作成と運用

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/slack/workspace/`](<https://utelecon.adm.u-tokyo.ac.jp/slack/workspace/>) | [`src/pages/slack/workspace/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/slack/workspace/index.mdx>) |
| English | 変更 | [`/en/slack/workspace/`](<https://utelecon.adm.u-tokyo.ac.jp/en/slack/workspace/>) | [`src/pages/en/slack/workspace/index.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/slack/workspace/index.mdx>) |

## 日本語

```diff
  - 特に申告がなければ，現在の代表責任者のオーナー権限は削除しません．削除が必要であれば，連絡時にその旨をあわせてお知らせください．
  特に，代表責任者の方が退職等により離籍する場合，そのままではワークスペースの管理・運用に責任を持つ方が不在となってしまい，利用の継続に問題が生じますので，必ず事前にこの代表責任者の引き継ぎ手続きを行ってください．
+ #### 代表責任者の引き継ぎができなかった場合
+ 「代表責任者が大学を離れてしまったため引き継ぎが必要だが，すでにUTokyo Accountが失効したため申請できない」旨の相談を多くいただきます．このような場合，次の方針での対応を検討してください．
+ 代表責任者の引き継ぎは，責任の所在と意思を明確にするため，「[新旧両方の代表責任者ご本人による，所定の連絡フォーム（UTokyo Accountによる認証が必要）からの申請](#take-over)」を，例外なく必須としています．この手続きが困難な場合は，新たな代表責任者による管理のもと，新たなワークスペースを作成してご利用いただくようおすすめしています．
+ しかし，教育・研究上，または業務上の理由により，従来のワークスペースを引き続き利用する必要がある場合は，「旧代表責任者の方に、業務引き継ぎのための「業務協力者」に一時的になっていただく」ことを，部局で検討してください．具体的には，離籍前に所属されていた部局の人事担当に必要性を説明の上，「業務協力者」などの形で，再度，一時的に，人事情報システム上に在籍登録をしていただいてください．在籍登録がなされれば，部局の人事担当からご本人に「UTokyo Accountパスワード通知書」を発行していただけるはずです．それを用いて，必ず本来の代表責任者ご本人が，所定の[連絡フォーム](https://forms.office.com/r/pbKNVZzsMS)から引き継ぎの申請を行ってください．なお，これはあくまで例外的な措置のため，一時的な在籍の期間は，1週間など最低限の期間のみにとどめてください．
+ 【ご注意】部局の人事担当から「UTokyo Accountパスワード通知書」を受け取った際，まず初期パスワードの変更が必要な場合があります．初期パスワード変更後，[連絡フォーム](https://forms.office.com/r/pbKNVZzsMS)にアクセス可能になるまで最大30分かかります．その間「アクセス権がありません」などのエラーメッセージが表示されますが，時間をおいて再度試してください．
  #### 「プライマリーオーナー」権限について
  本来，Slackには「オーナー」と「管理者」のほかに，最上位の権限である「プライマリーオーナー」という権限がありますが，UTokyo Slackでは管理の都合上，ワークスペースの利用者に対してはこの権限を付与していません．「UTokyo Slack Primary Owner」という管理用の特別なアカウントがあり，このアカウントがプライマリーオーナー権限を持つようになっています．なお，このアカウントを用いてワークスペース内でメッセージ等の情報を取得したり何か操作を行ったりすることはありません（ただし，管理上特にやむを得ない必要がある場合や代表責任者の申請に基づく操作を行う場合を除きます）．
```

## English

```diff
  - The target users of UTokyo Slack (people who can be a member of a workspace within UTokyo Slack) are all members who have a UTokyo Account.
    - To use UTokyo Slack, it is necessary to enable [Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/) and participate in the annual [Information Security Education](https://univtokyo.sharepoint.com/sites/Security/SitePages/en/Information_Security_Education.aspx).
-   - This service is not available for accounts other than UTokyo Account. If you wish to use Slack with someone who does not have a UTokyo Account (i.e., someone outside the university), you can use the “Connect” feature to collaborate with an external workspace. (However, this is not always recommended, as it is not as easy to use as the regular workspaces.) See “[Using UTokyo Slack with external users with the ‘Connect’ feature](/slack/workspace/connect/)” (in Japanese) for details.
+   - This service is not available for accounts other than UTokyo Account. If you wish to use Slack with someone who does not have a UTokyo Account (i.e., someone outside the university), you can use the “Connect” feature to collaborate with an external workspace. (However, this is not always recommended, as it is not as easy to use as the regular workspaces.) See “[Using UTokyo Slack with external users with the ‘Connect’ feature](/en/slack/workspace/connect/)” for details.
  - Previously, a special procedure called “incorporation (migration)” existed for those who wished to use their existing workspaces on UTokyo Slack, rather than creating a new one within UTokyo Slack. However, the application process for this procedure has been closed as of August 2023, and it will no longer be available going forward. For more details, please refer to [announcement page](/notice/2023/06-slack-migration/) (in Japanese).
  ### Tips for operation
  ⋯
  To apply for creating a new workspace, please fill out the “New workspace creation application form” at the end of this page.
  Due to operational reasons for accepting applications, applicants are required to join the workspace called “UTokyo Slack ワークスペース運用情報交換” (UTokyo Slack workspace operation information exchange) in advance. Please join the workspace by following the procedures on the “[Joining an open workspace in UTokyo Slack](../join/)” page.
- The information required at the time of application are the following:
+ The information required at the time of application is the following:
  - Name, affiliation and job title of the applicant
  - The URL of the workspace
  ⋯
    - The name cannot be identical to another workspace in UTokyo Slack. If the name is a duplicate, we will contact you and ask you to change the name after we receive your application.
  - The usage and/or purpose of the workspace (free description)
- After the application is accepted and the workspace is created, the created workspace will appear on the [“Workspace directory” screen](https://utokyo.enterprise.slack.com/) of the applicant (the person who submitted the application form). Please confirm it when it appears (since it may take some time for the application to be approved, please wait for a while if it does not appear). If there is a problem with the application, an email will be sent to the applicant’s ECCS cloud email, so please check it.
+ After the application is accepted and the workspace is created, the created workspace will appear on the [“Workspace directory” screen](https://utokyo.enterprise.slack.com/) of the applicant (the person who submitted the application form). Please confirm it when it appears (since it may take some time for the application to be approved, please wait for a while if it does not appear). If there is a problem with the application, an email will be sent to the applicant’s ECCS Cloud Email, so please check it.
  ### Inviting members
  Since only the applicant (representative)is a member of the workspace immediately after the workspace is created, it is necessary to invite others to join the workspace to communicate with each other in the workspace. There are several ways to invite people to join a workspace, but this section describes how to invite specific people to join the workspace.
  ⋯
  - Unless specifically requested, the owner role of the current representative will not be removed. If removal is necessary, please indicate so in the Contact Form.
  In particular, if the representative leaves the university due to retirement or other reasons, there will be no one left in charge of the management and operation of the workspace, which will cause problems for continued use of the workspace. Therefore, please be sure to follow these procedures for transferring the representative in advance.
+ #### When the transfer of the representative could not be completed
+ We frequently receive inquiries such as; “The representative has already left the university and a transfer is required, but they can no longer submit an application because their UTokyo Account has expired.” In such cases, please consider the following policy.
+ In order to clearly confirm responsibility and intent, the transfer of the representative **always requires, without exception, [an application submitted via the designated contact form (authentication with a UTokyo Account is required) by both the former and the new representatives themselves](#take-over). If this procedure is difficult, we recommend creating and using a new workspace under the management of a newly appointed representative.
+ However, if it is necessary to continue using the existing workspace for educational, research, or business reasons, please ask the relevant department to consider the option of temporarily appointing the former representative as a “業務協力者” (which means business collaborator) for the purpose of the handover. More specifically, please explain the necessity to the personnel office of the department to which the person belonged before leaving the university, and ask them to temporarily re-register the person in the personnel information system under a status such as “業務協力者.” Once the affiliation is registered, the department’s personnel office should be able to issue a notification slip for UTokyo Account to the person. Using this account, the original representative themselves must submit the transfer request via the designated contact form. Please note that this is an exceptional measure; therefore, the period of temporary affiliation should be kept to the absolute minimum (e.g., about one week).
+ [Notes] When receiving a notification slip for UTokyo Account from the departmental personnel office, the person may first need to change their initial password. After changing the initial password, it may take up to 30 minutes before access to the contact form becomes available. During this time, error messages such as “You don’t have access to this” may be displayed; if so, please wait for a while and try again.
  #### The “Primary Owner” role
  Usually, there is a “Primary Owner” role in Slack, which is the highest level of roles, in addition to the “Owner” and “Administrator”. However, in UTokyo Slack, users of workspaces are not granted this role due to administrative reasons as there is a special administrative account called “UTokyo Slack Primary Owner” which has the primary owner role. This account will not be used to obtain information such as messages or perform any other operations in the workspace (however, this does not apply in cases when there is an inevitable need or when the operation is based on a request from a representative).
```

[← 一覧へ](<../README.md>)
