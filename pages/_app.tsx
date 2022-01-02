import DateContext from "@/components/DateContext";
import { PageTransitionContextProvider } from "@/components/PageTransitionContext";
import { useApollo } from "@/lib/apollo/apolloClient";
import "@/node_modules/react-grid-layout/css/styles.css";
import "@/node_modules/react-resizable/css/styles.css";
import "@/public/styles/global.css";
import { ApolloProvider } from "@apollo/client";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { createTheme } from "@mui/material";
import { blue, orange } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import TagManager from "react-gtm-module";
import "typeface-open-sans"; // https://github.com/KyleAMathews/typefaces/tree/master/packages

// TODO: https://github.com/vercel/next.js/discussions/15518#discussioncomment-42875
const tagManagerArgs = {
  gtmId: `${process.env.NEXT_PUBLIC_GTM_ID}`, // e.g., 'GTM-XXXXXX'
};

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
    },
  },
  palette: {
    primary: {
      // main: colorName[hue],
      // we have to import the color first to use it
      main: blue[600],
    },
    secondary: {
      main: orange[400],
    },
  },
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [date, setDate] = useState(new Date());
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
          <ThemeProvider theme={theme}>
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
                  <Component {...pageProps} />
                </DateContext.Provider>
              </DndProvider>
            </LocalizationProvider>
          </ThemeProvider>
        </ApolloProvider>
      </PageTransitionContextProvider>
    </SessionProvider>
  );
}
