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

const cssVarsOptions = {
  defaultMode: 'dark',
  colorSchemeSelector: '#__next',
  attribute: 'data-mui-color-scheme',
  colorSchemeStorageKey: 'mui-color-scheme',
  modeStorageKey: 'mui-mode',
} as const;

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
            <CssVarsProvider theme={theme} {...cssVarsOptions}>
              {getInitColorSchemeScript(cssVarsOptions)}
              <main id="__next">{children}</main>
            </CssVarsProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </LanguageProvider>
  );
}
