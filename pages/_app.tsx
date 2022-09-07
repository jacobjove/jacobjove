import "../styles/global.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

const SITE_NAME = "Orega";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <DefaultSeo
        description={"Jacob's portfolio"}
        openGraph={{
          type: "website",
          url: "https://orega.org/",
          site_name: SITE_NAME,
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
      <Component {...pageProps} />;
    </>
  );
}

export default App;
