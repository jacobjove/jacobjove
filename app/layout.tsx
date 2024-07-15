import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import Locale from 'intl-locale-textinfo-polyfill';
import { Open_Sans } from 'next/font/google';
import getInitColorSchemeScript from '@mui/system/cssVars/getInitColorSchemeScript';
import type { ReactNode } from 'react';
import { LanguageProvider } from '@inlang/paraglide-next';
import { languageTag } from '@paraglide/runtime';
import theme from '@app/theme';
import './global.css';

const openSans = Open_Sans({
  subsets: ['latin'],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  locale = languageTag(),
}: {
  children: ReactNode;
  locale: string;
}) {
  const { direction: dir } = new Locale(locale).textInfo;
  return (
    <LanguageProvider>
      <html lang={locale} dir={dir} className={openSans.className} suppressHydrationWarning>
        <CssBaseline />
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
      </html>
    </LanguageProvider>
  );
}
