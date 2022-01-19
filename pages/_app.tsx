import ColorModeContext from "@/components/ColorModeContext";
import DateContext from "@/components/DateContext";
import { PageTransitionContextProvider } from "@/components/PageTransitionContext";
import { useApollo } from "@/lib/apollo/apolloClient";
import "@/node_modules/react-grid-layout/css/styles.css";
import "@/node_modules/react-resizable/css/styles.css";
import "@/public/styles/global.css";
import { ApolloProvider } from "@apollo/client";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { createTheme, PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NextPage } from "next";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { FC, ReactElement, useEffect, useMemo, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import TagManager from "react-gtm-module";
import "typeface-open-sans"; // https://github.com/KyleAMathews/typefaces/tree/master/packages

// TODO: https://github.com/vercel/next.js/discussions/15518#discussioncomment-42875
const tagManagerArgs = {
  gtmId: `${process.env.NEXT_PUBLIC_GTM_ID}`, // e.g., 'GTM-XXXXXX'
};

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: "#42a5f5",
      light: "#80d6ff",
      dark: "#0077c2",
      contrastText: "#fff",
      // ...(mode === 'dark' && {
      //   main: amber[300],
      // }),
    },
    secondary: {
      main: "#9e9e9e",
      light: "#cfcfcf",
      dark: "#707070",
      // ...(mode === 'dark' && {
      //   main: amber[300],
      // }),
    },
    // ...(mode === 'dark' && {
    //   background: {
    //     default: deepOrange[900],
    //     paper: deepOrange[900],
    //   },
    // }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
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

export type ComponentWithAuth = NextPage & {
  auth?: boolean;
};

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<PaletteMode>("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  useEffect(() => {
    // Update the current time every minute.
    const intervalId = setInterval(function () {
      setDate(new Date());
    }, 1000 * 60);
    // Clean up when the component unmounts.
    return function cleanup() {
      clearInterval(intervalId);
    };
  }, [setDate]);
  return (
    <SessionProvider session={session}>
      <PageTransitionContextProvider>
        <ApolloProvider client={apolloClient}>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
                  <DateContext.Provider value={date}>
                    <DefaultSeo
                      description={"Build good habits, break bad habits, and be your best self."}
                      openGraph={{
                        type: "website",
                        url: "https://www.habitbuilder.com/",
                        site_name: "SelfBuilder",
                        // images: [
                        //   {
                        //     url: 'https://www.example.ie/og-image.jpg',
                        //     width: 800,
                        //     height: 600,
                        //     alt: 'Og Image Alt',
                        //   },
                        //   {
                        //     url: 'https://www.example.ie/og-image-2.jpg',
                        //     width: 800,
                        //     height: 600,
                        //     alt: 'Og Image Alt 2',
                        //   },
                        // ],
                      }}
                      twitter={{ handle: "@habitbuilder" }}
                      facebook={{
                        appId: `${process.env.FACEBOOK_APP_ID}`,
                      }}
                      titleTemplate="%s | SelfBuilder" // https://github.com/garmeeh/next-seo#title-template
                      defaultTitle="SelfBuilder" // https://github.com/garmeeh/next-seo#default-title
                      additionalMetaTags={[
                        {
                          httpEquiv: "content-type",
                          content: "text/html; charset=utf-8",
                        },
                        {
                          name: "application-name",
                          content: "SelfBuilder",
                        },
                      ]}
                      additionalLinkTags={
                        [
                          // {
                          //   rel: 'icon',
                          //   href: '/static/favicon.ico',
                          // }
                        ]
                      }
                    />
                    {(Component as ComponentWithAuth).auth ? (
                      <Auth>
                        <Component {...pageProps} />
                      </Auth>
                    ) : (
                      <Component {...pageProps} />
                    )}
                  </DateContext.Provider>
                </DndProvider>
              </LocalizationProvider>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </ApolloProvider>
      </PageTransitionContextProvider>
    </SessionProvider>
  );
}

const Auth: FC<{ children: ReactElement }> = ({ children }: { children: ReactElement }) => {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!isUser) signIn(); // If not authenticated, force log in
  }, [isUser, status]);
  if (isUser) {
    return children;
  }
  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
};
