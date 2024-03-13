export const SITE_TITLE = "JJ";

type _MenuItem = [string, string];
type MenuItem = [string, string | _MenuItem[]];

export const MENU_ITEMS: MenuItem[] = [
  ["Home", "/"],
  // ["About", "/about"],
  ["CV", "/cv"],
  [
    "Portfolio",
    [
      ["Software", "/portfolio/software"],
      ["Writing", "/portfolio/writing"],
    ],
  ],
  ["Contact", "/contact"],
];
