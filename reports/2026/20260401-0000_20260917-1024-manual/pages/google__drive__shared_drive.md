# Googleドライブの「共有ドライブ」機能について

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更なし | [`/google/drive/shared_drive/`](<https://utelecon.adm.u-tokyo.ac.jp/google/drive/shared_drive/>) | [`src/pages/google/drive/shared_drive.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/google/drive/shared_drive.md>) |
| English | 変更 | [`/en/google/drive/shared_drive/`](<https://utelecon.adm.u-tokyo.ac.jp/en/google/drive/shared_drive/>) | [`src/pages/en/google/drive/shared_drive.md`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/google/drive/shared_drive.md>) |

## English

```diff
    - The access level is the same as that for “My Drive” (scenarios other than shared drives).
  - Commenter
-   - Commenters can read files and add comments. In addition, in the case of Google Documents, they are allowed to make editing suggestions. However, direct editing of files is not allowed.
+   - Commenters can read files and add comments. In addition, in the case of Google Docs, they are allowed to make editing suggestions. However, direct editing of files is not allowed.
    - The access level is the same as for “My Drive” (scenarios other than shared drives).
  - Contributor
  ⋯
  - Do not grant “Manager” access authorization to users outside of ECCS Cloud Email.
    - Granting access authorization other than “Manager” is acceptable.
- These rules will be checked regularly, and the following actions will be taken for shared drives found to be in violate of these rules.
+ These rules will be checked regularly, and the following actions will be taken for shared drives found to be in violation of these rules.
  - Shared drives without a manager may be deleted.
  - For shared drives where users other than ECCS Cloud Email have “Manager” access authorization, we will notify the Manager via email of the rule violation and request corrective action. If no corrective action is taken, the system will change the access authorization of users other than ECCS Cloud Email from “Manager” to “Content Manager.”
```

[← 一覧へ](<../README.md>)
