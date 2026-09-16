export const SITE_URL = "https://utelecon.adm.u-tokyo.ac.jp";
export const TARGET_REPO = "utelecon/utelecon.github.io";

export const SNAPSHOT_FORMAT = 2;
export const CHANGES_FORMAT = 2;

export const CONTENT_RULES = {
  exclude: ["#sidebar", ".rss_icon"],
  replaceText: [{ selector: ".breadcrumb__separator", text: " > " }],
};

export const CHROME_RULES = {
  exclude: ["main", "#changeLangLink"],
  replaceText: [],
};

export const EXCLUDED_FILE_NAMES = ["rss.xml"];
export const ASSET_DIR = "_astro/";
export const SOURCE_PAGES_DIR = "src/pages";
export const SOURCE_EXTENSIONS = [".md", ".mdx", ".astro", ".html"];

export const LAYOUT_MARKERS = {
  main: "main",
  sidebar: "#sidebar",
  breadcrumbSeparator: ".breadcrumb__separator",
  languageLink: "#changeLangLink",
};

export const LIMITS = {
  snapshotBytes: 256 * 1024 * 1024,
  pages: 20000,
  linesPerPage: 20000,
  lineLength: 20000,
  diffLinesPerBlock: 1500,
  assetsListedInReadme: 50,
  reportBytes: 50 * 1024 * 1024,
};

export const CHECKS = {
  sharedContentMinPages: 5,
  markerRatioWarningDelta: 0.2,
  minPageCountRatio: 0.5,
};

export const DIFF_CONTEXT_LINES = 2;
