import createCache from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";
import BaseDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";

// https://nextjs.org/docs/advanced-features/custom-document

class Document extends BaseDocument {
  static async getInitialProps(ctx: DocumentContext) {
    // https://github.com/mui-org/material-ui/blob/7e7f40fff30ab0c2ec7a0003055a6508e11bcbb7/examples/nextjs/pages/_document.js
    // Synchronizes server & client CSS for initial SSR

    // Render app and page and get the context of the page with collected side effects.
    const originalRenderPage = ctx.renderPage;

    const cache = createCache({ key: "css" });
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line react/display-name
        enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
      });

    const initialProps = await BaseDocument.getInitialProps(ctx);

    // This is important. It prevents emotion from rendering invalid HTML.
    // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Note: See next-seo.config.ts for additional head tags. */}
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional"
          />
        </Head>
        <body className="no-scrollbar" style={{ width: "100%", margin: "0", padding: "0" }}>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default Document;
