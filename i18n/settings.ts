// Can be imported from a shared config
export const locales = ['en', 'jp', 'ko'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const LOCALES: Record<Locale, { flag: string; name: string }> = {
  en: {
    flag: '🇺🇸',
    name: 'English (US)',
  },
  jp: {
    flag: '🇯🇵',
    name: '日本語',
  },
  ko: {
    flag: '🇰🇷',
    name: '한국어',
  },
};
