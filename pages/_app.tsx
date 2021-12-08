import { PageTransitionContextProvider } from "@/components/PageTransitionContext";
import apolloClient from "@/lib/apollo/client/apollo";
import { ApolloProvider } from "@apollo/client";
import { createTheme } from "@mui/material";
import { blue, orange } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
  // const apolloClient = useApollo(pageProps.initialApolloState)
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <SessionProvider session={session}>
      <PageTransitionContextProvider>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <DndProvider backend={HTML5Backend}>
              <DefaultSeo
                description={"Build good habits, break bad habits, and be your best self."}
                openGraph={{
                  type: "website",
                  url: "https://www.habitbuilder.com/",
                  site_name: "HabitBuilder",
                  // description: "History, modularized.",
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
                titleTemplate="%s | HabitBuilder" // https://github.com/garmeeh/next-seo#title-template
                defaultTitle="HabitBuilder" // https://github.com/garmeeh/next-seo#default-title
                additionalMetaTags={[
                  {
                    httpEquiv: "content-type",
                    content: "text/html; charset=utf-8",
                  },
                  {
                    name: "application-name",
                    content: "HabitBuilder",
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
            </DndProvider>
          </ThemeProvider>
        </ApolloProvider>
      </PageTransitionContextProvider>
    </SessionProvider>
  );
}
