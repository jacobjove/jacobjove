import "../styles/global.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "typeface-open-sans"; // https://github.com/KyleAMathews/typefaces/tree/master/packages

const SITE_NAME = "Orega";
const DESCRIPTION = "Jacob's personal website";

const theme = createTheme({
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

function App({ Component: Page, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <DefaultSeo
        description={DESCRIPTION}
        openGraph={{
          type: "website",
          url: "https://orega.org/",
          site_name: SITE_NAME,
          description: DESCRIPTION,
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
        twitter={{ handle: "@iacobfred" }}
        // facebook={{
        //   appId: `${process.env.FACEBOOK_APP_ID}`,
        // }}
        titleTemplate={`%s | ${SITE_NAME}`} // https://github.com/garmeeh/next-seo#title-template
        defaultTitle={SITE_NAME} // https://github.com/garmeeh/next-seo#default-title
        additionalMetaTags={[
          {
            httpEquiv: "content-type",
            content: "text/html; charset=utf-8",
          },
          {
            name: "application-name",
            content: SITE_NAME,
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
      <Page {...pageProps} />;
    </ThemeProvider>
  );
}

export default App;
