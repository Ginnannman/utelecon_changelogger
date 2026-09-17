# UTOLでアンケートを作成・編集する（教員・TA向け）

| 言語 | 状態 | 公開ページ | ソース |
|---|---|---|---|
| 日本語 | 変更 | [`/utol/lecturers/surveys/create/`](<https://utelecon.adm.u-tokyo.ac.jp/utol/lecturers/surveys/create/>) | [`src/pages/utol/lecturers/surveys/create.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/utol/lecturers/surveys/create.mdx>) |
| English | 変更 | [`/en/utol/lecturers/surveys/create/`](<https://utelecon.adm.u-tokyo.ac.jp/en/utol/lecturers/surveys/create/>) | [`src/pages/en/utol/lecturers/surveys/create.mdx`](<https://github.com/utelecon/utelecon.github.io/blob/18e2245e0d9b23fb32fa12781b0265e26a44d251/src/pages/en/utol/lecturers/surveys/create.mdx>) |

## 日本語

```diff
  - 回答が終わったら「確認画面に進む」を押して確認画面に進んでください．
  - 回答内容を確認して「提出する」を押して解答内容を送信してください．「新規登録」画面もしくは「編集」画面に移動します．
- 回答シミュレーションで不備が見つかった場合は，後述の「作成したアンケートを編集する」を参考にアンケートを修正してください．
+ 回答シミュレーションで不備が見つかった場合は，後述の「[作成したアンケートを編集する](#update)」を参考にアンケートを修正してください．
  ## 作成したアンケートを編集する
  既に作成したアンケートを編集するには，「コーストップ」画面の「アンケート」欄で対象のアンケートのタイトルを押してください．新規登録時と同様の画面である「編集」画面が表示されます．
  ⋯
    - 表示ラベル
  ### 設問を編集する
- アンケートの各設問を編集できます．設問を編集するには右上の鉛筆マークを押してください．設問の各項目の説明は「新しいアンケートを作成する」内の「手順2：設問の作成」を参照してください．
+ アンケートの各設問を編集できます．設問を編集するには右上の鉛筆マークを押してください．設問の各項目の説明は「新しいアンケートを作成する」内の「[手順2：設問の作成](#question_settings)」を参照してください．
  アンケート全体の設定と同様に，タイミングによって編集できる項目が制限されます．編集できる項目は，以下のとおりです．
  - 回答期間開始前：すべての項目
```

## English

```diff
- タイトル: Create and edit surveys (for Course Instructors / TAs) | utelecon
- 説明: Table of Contents: ...
+ タイトル: Create and edit surveys in UTOL (for Course Instructors / TAs) | utelecon
+ 説明: Table of Contents: Creating a new survey; Editing created surveys; Using survey templates...
  
  [UTOL](/en/utol/) > [As a Course Instructor or TA](/en/utol/lecturers/) > [Surveys](/en/utol/lecturers/surveys/) > Create and Edit
- # Create and edit surveys (for Course Instructors / TAs)
- This page is not translated yet.
- Until the translation is completed, please use the [Japanese version](/utol/lecturers/surveys/create/), or refer to the reference manuals in English. They are available in PDF files from [the download page](https://utol.ecc.u-tokyo.ac.jp/common/support/manual) (you need to log in with your UTokyo Account).
- If you can only see the manuals in Japanese, please change the display language from [the UTOL’s settings page](https://utol.ecc.u-tokyo.ac.jp/common/settings), and access the download page again.
+ # Create and edit surveys in UTOL (for Course Instructors / TAs)
+ This page explains how to create and edit surveys.
+ For information on how to view survey results, please refer to “[Viewing Aggregated Survey Results](../result/)”.
+ ## Creating a new survey
+ ![](/_astro/create-surveys.webp)
+ Clicking on the ![＋](/_astro/add_coursetop.webp) button on the Course Top screen takes you to the “Register a New Survey” screen.
+ Follow steps 1 to 3 below to set up the survey.
+ ### Step 1: Setting up the entire survey
+ ![](/_astro/global-settings.webp)
+ First, enter the setting items for the entire survey. You can edit the settings after you have finished, but depending on the timing, some items may be restricted from editing. For details, please refer to “[Editing created surveys](#update)” at the bottom of this page.
+ - Title: The title of the survey.
+ - Contents: The description of the survey (the [Markup function](../../../markup/) supported).
+ - Response Period: Set the survey response period here.
+   - Set the start and end dates and times.
+   - Once the dates and times of the start or end have passed, they cannot be changed.
+ - Open/Anonymous: If you select “Anonymous”, you cannot see the individual responses or check whether or not responses have been submitted.
+   - This setting cannot be changed once the start date and time has passed.
+ - Modify answer: If you select “Enable”, respondents can revise their answers after submitting the survey.
+   - If the survey setting is “Anonymous”, respondents cannot revise their answers.
+   - This setting cannot be changed after the start date and time.
+ - Disclose survey result: If you select “Disclose”, students can view the aggregated results.
+ - Publication period of result: This is the period during which students can view the aggregated results when the survey results are set to “Disclose.”
+   - This setting can be changed at any time.
+ - Display label: You can assign labels to classify.
+   - When the label is assigned, the following drop-down list will appear on the “Course Top” screen, allowing both enrolled students and course instructors to display content by a label. ![](/_astro/course-top-dropdown.webp)
+   - Select the label you wish to assign from the drop-down list to assign the label. ![](/_astro/configure.webp)
+     - If you have not yet created labels, click on “Create new display label”, and enter the title for the label.
+     - If you wish to assign multiple labels, select another drop-down list displayed after clicking “Add display label”.
+ - Target: You can restrict the persons who can view or respond to surveys.
+ ### Step 2: Creating questions
+ ![](/_astro/create-question-button.webp)
+ Next, click “Create New” in the “Question Settings” field at the bottom of the “Register a New Survey” screen. The “Register a New Survey” screen for questions will be displayed.
+ ![](/_astro/create-question.webp)
+ - First, decide on the format of the questions you want to create. Select the appropriate format from the following seven options according to the content you want to ask.
+   - Single Choice (radio buttons): Select one option from a list.
+   - Multiple Choice (check boxes): Select multiple options from a list.
+   - Text (text box): A single-line text box. Select free text if the text is long or spans multiple lines.
+   - Free Text (text area): A text area that allows multiple lines of text. Suitable for long texts.
+   - List Choice (pull-down menu): Similar to single selection, this format allows you to select one option from multiple options, but a pull-down menu is displayed instead of radio buttons.
+   - Single Choice Table (radio button): This format displays radio buttons in a table, allowing you to select one option per row.
+   - Multiple Choice Table (check box): This format displays checkboxes in a table, allowing you to select multiple options.
+ - Enter the question information (the screenshot below shows the “Single Choice” format). ![](/_astro/create-question-info.webp)
+   - Question Format: Select the question format you decided on in 1. just before.
+   - Required Answer: If you select this option, respondents will be required to answer this question before submitting.
+   - Title: The title of the question.
+   - Contents: The explanation that appears above the question. Markup can be used.
+   - Number of Answers / Question items (columns): Settings for the question options, etc.
+     - The input content varies depending on the question format as follows.
+       - Single Choice, Multiple Choice, List Choice: Enter the number of the answer items (options) and the content of the answer items.
+       - Text, Free Text: No additional input fields are available.
+       - Single Choice Table, Multiple Choice Table: Enter the number and content of question items in the vertical columns, and the number and content of answer items in the horizontal rows.
+     - Note
+       - Reducing the number of answer items will delete the answer item fields from the bottom up. The input in those fields will be erased, so please be careful.
+   - Comment field: When enabled, a free-text input field (text area) will appear. The content entered here can be reviewed by the instructors or TAs as individual responses. Note that this is only available for selection (choice) formats and cannot be used with text or free-text formats.
+   - Image: You can register an image to attach to the question. The format must be gif, jpg, or png.
+   - Display Table/Graph: Set the format for displaying the survey results. This cannot be used for text or free text formats.
+     - Not display: The results of this question will not be displayed on the “Table/Graph” screen.
+     - Number of answers (Table Format): The number of respondents and the percentage will be displayed for each answer option.
+     - Percentage (Pie Graph): In addition to the “Number of answers” table, a pie graph showing the percentages will be displayed.
+     - Total (Bar Graph): In addition to the “Number of answers” table, a bar graph showing the number of respondents will be displayed.
+ - Once you have entered the necessary information, click “Register” at the bottom of the screen to register the question. At this point, only the questions have been registered, and the survey itself has not yet been completed.
+ - If necessary, set branching survey questions (the next question to be displayed).
+   - In case of single choice and list choice formats, you can specify a different question to jump to for each answer choice. This is useful when you want to change the next question to be displayed depending on the respondent’s answer.
+   - For the destination, you can choose from “Next questions,” “End questions,” or another question that is below the one currently being edited.
+     - Next questions: Answering this question will take you to the next question.
+     - End questions: This question will become the last question in the survey.
+     - Question n (n is the question number): Answering this question will display the selected question.
+ - Once you have completed the overall survey settings and question creation, click “Confirm” at the bottom of the “Register a New Survey” screen to review the content, then click “Register” to register the survey.
+ ### Step 3: Simulating survey responses
+ The Answer Simulation function enables you to check the operation of the survey after the survey has been registered. You can check the operations in the responding process on the same screen that enrolled students will see when they respond to the survey.
+ - Clicking on the “Answer simulation” button on either the “Register a New Survey” screen or the “Surveys Edit” screen takes you to the Surveys Answer Simulation screen.
+ - Answer each question.
+ - Click “Confirm” to proceed to the confirmation screen after answering.
+ - Confirm your answers and click “Submit” to send your answers. You will be taken to the “Register a New Survey” or the “Survey Edit” screen.
+ If you find any problems in the Answer Simulation, please refer to “[Editing created surveys](#update)” below to correct the survey.
+ ## Editing created surveys
+ To edit the survey you have already created, click the survey title link in the “Surveys” section of the “Course Top” screen. This will take you to the “Surveys Edit” screen.
+ ### Editing the settings for the entire survey
+ You can edit the settings for the entire survey. For an explanation of each setting item, please refer to “[Step 1: Setting up the entire survey](#general_settings)” in “Creating a new survey”.
+ Unlike when registering a new survey, some items may be restricted from editing depending on the timing. The items that can be edited are as follows.
+ - Before the start of the response period: All items
+ - During the response period: The following 7 items only
+   - Title
+   - Contents
+   - End of response period (extension or reduction)
+   - Disclose survey result
+   - Result disclosure period
+   - Display label
+   - Question settings
+ - After the end of the response period: The following 3 items only
+   - Disclose survey result
+   - Result disclosure period
+   - Display label
+ ### Editing the question settings
+ You can edit each question in the survey. To edit a question, click the pencil icon in the upper-right corner. For an explanation of each question item, please refer to “[Step 2: Creating Questions](#question_settings)” in “Creating a new survey”.
+ As with the settings for the entire survey, the items that can be edited are limited depending on the timing. The items that can be edited are as follows.
+ - Before the start of the response period: All items
+ - During the response period: The following 6 items only
+   - Required Answer
+   - Title
+   - Contents
+   - Answered items (selection formats only)
+   - Comment field
+   - Display Table/Graph
+ - After the end of the response period: “Display Table/Graph” only.
+ After the response period has started, you cannot reorder questions, add or delete questions, or change branching (“Move”) settings.
+ ## Using survey templates
+ With the survey function, you can register the surveys you have created as templates and reuse them in other courses in which you are participating as an instructor, TA, or course designer. Templates registered by different users can also be used within the same course. This is useful when teaching multiple classes with the same content or using surveys from previous years.
+ Please note that the setting items saved as templates include only the survey title (saved as the template title) and the individual questions.
+ ### Registering survey templates
+ To register a template, follow the steps below:
+ - Click the survey title you want to register as a template in the “Surveys” section of the “Course Top” screen.
+ - When the “Surveys Edit” screen appears, click “Register as Template” at the bottom of the page.
+ - The “Confirm registration of survey” screen will appear. Confirm that the template details to be registered are correct, and click “Register”.
+ Please note that the template title will be registered with the same name as the survey title. While it is possible to have duplicate titles across templates, we recommend changing the title to something more distinguishable by following the steps in “Editing and deleting survey templates”.
+ ### Editing and deleting survey templates
+ To edit or delete a template, follow the steps below:
+ - Click “Edit template” in the “Surveys” section of the “Course Top” screen. The “Survey template list” screen will be displayed.
+ - Click the template title you want to edit or delete.
+ - To edit a template: Edit the displayed settings: Only the title and questions can be edited. Other items displayed on the “Register a New Survey” or “Surveys Edit” screens cannot be edited because they are not included in the template.
+ - To delete a template: Click “Delete” in the upper-right corner of the screen.
+ ### Using templates registered by other users
+ You can register templates created by other users as your own templates. To use templates registered by other users using this function, follow the steps below:
+ - Click “Edit template” in the “Surveys” section of the “Course Top” screen. The “Survey template list” screen will be displayed.
+ - Templates created by other users will be displayed with the “Register” button. Click “Register” for the template you want to use.
+ - The “Surveys Register/Edit template” screen will appear. Make any necessary changes, such as changing the title to something easier to understand, and then click “Confirm”.
+ - Confirm the details and click “Register” if there are no errors.
```

[← 一覧へ](<../README.md>)
