import { ApolloProvider } from "@apollo/client";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ColorModeContextProvider } from "@web/components/contexts/ColorModeContext";
import { CookieContextProvider } from "@web/components/contexts/CookieContext";
import { DateContextProvider } from "@web/components/contexts/DateContext";
import { DeviceContextProvider } from "@web/components/contexts/DeviceContext";
import { DndProvider } from "@web/components/contexts/DndContext";
import { PageTransitionContextProvider } from "@web/components/contexts/PageTransitionContext";
import { UserContextProvider } from "@web/components/contexts/UserContext";
import { useApollo } from "@web/lib/apollo";
import SEO from "@web/next-seo.config";
import "@web/public/styles/global.css";
import { PageProps } from "@web/types/page";
import { createEmotionCache } from "@web/utils/emotion";
import { NextPage } from "next";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { FC, ReactElement, useEffect } from "react";
import "react-grid-layout/css/styles.css"; // TODO
import "react-resizable/css/styles.css"; // TODO
import "typeface-open-sans"; // https://github.com/KyleAMathews/typefaces/tree/master/packages

// TODO: https://morganfeeney.com/how-to/integrate-google-tag-manager-with-next-js

// https://tagmanager.google.com/#/container/accounts/6056934818/containers/93489699/workspaces/2
const GOOGLE_TAG_MANAGER_SCRIPT = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
`;

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type PageWithAuth = NextPage & {
  auth?: boolean;
};

interface CustomAppProps extends AppProps<PageProps> {
  emotionCache?: EmotionCache;
}

function App({
  Component: Page,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, cookies = {}, ...pageProps },
}: CustomAppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <SessionProvider {...(session && { session })}>
      <ApolloProvider client={apolloClient}>
        <UserContextProvider>
          <CookieContextProvider value={cookies}>
            <DeviceContextProvider>
              <CacheProvider value={emotionCache}>
                <ColorModeContextProvider>
                  <PageTransitionContextProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DndProvider>
                        <DateContextProvider>
                          <CssBaseline />
                          <Head>
                            {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
                            <meta
                              name="viewport"
                              content="initial-scale=1, minimum-scale=1, maximum-scale=1, width=device-width, user-scalable=no"
                            />
                          </Head>
                          <DefaultSeo {...SEO} />
                          <Script id="google-tag-manager" strategy="afterInteractive">
                            {GOOGLE_TAG_MANAGER_SCRIPT}
                          </Script>
                          {(Page as PageWithAuth).auth ? (
                            <Auth>
                              <Page {...pageProps} />
                            </Auth>
                          ) : (
                            <Page {...pageProps} />
                          )}
                        </DateContextProvider>
                      </DndProvider>
                    </LocalizationProvider>
                  </PageTransitionContextProvider>
                </ColorModeContextProvider>
              </CacheProvider>
            </DeviceContextProvider>
          </CookieContextProvider>
        </UserContextProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default App;

interface AuthProps {
  children: ReactElement;
}

const Auth: FC<AuthProps> = ({ children }: AuthProps) => {
  const { data: session, status } = useSession({ required: true });
  const authenticated = status === "authenticated";
  const loading = status === "loading";
  const hasError = !!session?.error;

  // Require authentication.
  useEffect(() => {
    // Do nothing while loading.
    if (!loading) {
      // Sign out if there's an auth error (probably an expired refresh token).
      if (hasError) signOut();
      // If not authenticated, force log in.
      if (!authenticated || hasError) signIn();
    }
  }, [authenticated, loading, hasError]);

  if (authenticated) return children;

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {"Loading..."}
    </div>
  );
};
