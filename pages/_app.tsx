import MDXProvider from "@components/MDXProvider";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createEmotionCache } from "@utils/emotion";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation as withI18n, SSRConfig } from "next-i18next";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import "typeface-open-sans"; // https://github.com/KyleAMathews/typefaces/tree/master/packages
import nextI18NextConfig from "../next-i18next.config.js";
import SEO from "../next-seo.config";
import "../styles/global.css";

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

interface PageProps extends SSRConfig {
  session?: Session | null;
}

export interface CustomAppProps extends AppProps<PageProps> {
  emotionCache?: EmotionCache;
}

function App({
  Component: Page,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <MDXProvider>
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
            <Page {...pageProps} />
          </MDXProvider>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}

export default withI18n<CustomAppProps>(App, nextI18NextConfig);
