import createEmotionServer from "@emotion/server/create-instance";
import { createEmotionCache } from "@web/utils/emotion";
import BaseDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";

// https://nextjs.org/docs/advanced-features/custom-document

class Document extends BaseDocument {
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
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body className="no-scrollbar" style={{ width: "100%", margin: "0", padding: "0" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// https://github.com/mui/material-ui/blob/master/examples/nextjs-with-typescript/pages/_document.tsx
Document.getInitialProps = async (ctx: DocumentContext) => {
  // Render app and page and get the context of the page with collected side effects.
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      // TODO: add app type
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await BaseDocument.getInitialProps(ctx);

  // Prevent emotion from rendering invalid HTML.
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
};

export default Document;
