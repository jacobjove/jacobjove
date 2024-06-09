// import { dir } from 'i18next';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import Locale from 'intl-locale-textinfo-polyfill';
import { unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Open_Sans } from 'next/font/google';
import getInitColorSchemeScript from '@mui/system/cssVars/getInitColorSchemeScript';
import { getStaticParams } from '@i18n';
import theme from '@app/theme';
import '../global.css';

// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({
  subsets: ['latin'],
});

export async function generateStaticParams() {
  return getStaticParams();
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  locale = 'en',
}: {
  children: React.ReactNode;
  locale: string;
}) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  const { direction: dir } = new Locale(locale).textInfo;
  return (
    <html lang={locale} dir={dir} className={openSans.className} suppressHydrationWarning>
      <CssBaseline />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>
          <AppRouterCacheProvider options={{ key: 'mui', prepend: true, enableCssLayer: true }}>
            <CssVarsProvider theme={theme} defaultMode="dark">
              {getInitColorSchemeScript({
                // These properties are normally set when importing from @mui/material,
                // but we have to set manually because we are importing from @mui/system.
                attribute: 'data-mui-color-scheme',
                modeStorageKey: 'mui-mode',
                colorSchemeStorageKey: 'mui-color-scheme',
                // All options that you pass to CssVarsProvider you should also pass here.
                defaultMode: 'dark',
              })}
              {children}
            </CssVarsProvider>
          </AppRouterCacheProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
