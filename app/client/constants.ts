export const SITE_TITLE = 'JTJ';

type MenuItem = [string, string, string | [string, string, string][]];

export const MENU_ITEMS: MenuItem[] = [
  [
    'about',
    'About',
    [
      ['about', 'About Jacob', '/about'],
      ['cv', 'CV', '/cv'],
    ],
  ],
  [
    'portfolio',
    'Portfolio',
    [
      ['software', 'Software', '/portfolio/software'],
      ['writing', 'Writing', '/portfolio/writing'],
    ],
  ],
  ['blog', 'Blog', '/blog'],
  ['contact', 'Contact', '/contact'],
];
