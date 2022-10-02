import "../styles/global.scss";
import { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "typeface-open-sans"; // https://github.com/KyleAMathews/typefaces/tree/master/packages
import { NextIntlProvider } from "next-intl";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache } from "@utils/emotion";
import SEO from "../next-seo.config";
import { SessionProvider } from "next-auth/react";
import { PageTransitionContextProvider } from "@components/PageTransitionContext";

// Create the client-side emotion cache to be used for the user's whole browser session.
const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#546e7a",
      light: "#819ca9",
      dark: "#29434e",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#979797",
      light: "#c8c8c8",
      dark: "#696969",
    },
    action: {
      selectedOpacity: 0.33,
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.4rem",
    },
    h3: {
      fontSize: "1.2rem",
    },
    h4: {
      fontSize: "1.1rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.0rem",
      fontWeight: 500,
      fontStyle: "italic",
    },
    body1: {
      fontStyle: "normal",
      fontWeight: 400,
    },
    body2: {
      fontStyle: "normal",
    },
  },
});

interface PageProps {
  messages: Record<string, string>;
}

interface CustomAppProps extends AppProps<PageProps> {
  emotionCache?: EmotionCache;
}

function App({
  Component: Page,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <PageTransitionContextProvider>
            <CssBaseline />
            <Head>
              <meta charSet="UTF-8" />
              {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
              <meta
                name="viewport"
                content="initial-scale=1, minimum-scale=1, maximum-scale=1, width=device-width, user-scalable=no"
              />
            </Head>
            <DefaultSeo {...SEO} />
            <NextIntlProvider messages={pageProps.messages}>
              <Page {...pageProps} />
            </NextIntlProvider>
          </PageTransitionContextProvider>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}

export default App;
