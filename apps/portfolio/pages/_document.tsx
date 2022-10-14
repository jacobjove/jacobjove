import { EmotionCache } from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";
import { createEmotionCache } from "@utils/emotion";
import { AppType } from "next/dist/shared/lib/utils";
import BaseDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { Children } from "react";
import i18nextConfig from "../next-i18next.config";

// https://nextjs.org/docs/advanced-features/custom-document

class Document extends BaseDocument {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
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
      enhanceApp: (App: AppType | React.ComponentType<{ emotionCache: EmotionCache }>) =>
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
    styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};

export default Document;
