import { getRequestConfig } from 'next-intl/server';
import { locales } from './settings';
import { notFound } from '@navigation';

export function getStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
