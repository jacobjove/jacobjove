import { ApolloProvider, NormalizedCacheObject } from "@apollo/client";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ColorModeContextProvider } from "@web/components/contexts/ColorModeContext";
import { DateContextProvider } from "@web/components/contexts/DateContext";
import DeviceContext, { DeviceContextData } from "@web/components/contexts/DeviceContext";
import { NewCalendarEventDialogContextProvider } from "@web/components/contexts/NewCalendarEventDialogContext";
import { NewTaskDialogContextProvider } from "@web/components/contexts/NewTaskDialogContext";
import { PageTransitionContextProvider } from "@web/components/contexts/PageTransitionContext";
import { UserContextProvider } from "@web/components/contexts/UserContext";
import { useApollo } from "@web/lib/apollo";
import SEO from "@web/next-seo.config";
import "@web/public/styles/global.css";
import { NextPage } from "next";
import { Session } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { FC, ReactElement, useEffect, useState } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
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

export type PageWithAuth = NextPage & {
  auth?: boolean;
};

interface PageProps {
  session?: Session | null;
  __APOLLO_STATE__?: NormalizedCacheObject;
}

function App({ Component, pageProps: { session, ...pageProps } }: AppProps<PageProps>) {
  const apolloClient = useApollo(pageProps);

  const isMobileWidth = useMediaQuery("(max-width: 600px)");
  const [isLandscape, setIsLandscape] = useState<boolean>();
  const [deviceContextData, setDeviceContextData] = useState<DeviceContextData>(
    {} as DeviceContextData
  );

  useEffect(() => {
    const handleOrientationChange = function (e: Event) {
      const newOrientation = window.screen.orientation?.type;
      if (newOrientation) {
        setIsLandscape(newOrientation.toString().includes("landscape"));
      } else {
        console.error("Could not determine orientation:", newOrientation, e);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("orientationchange", handleOrientationChange);
    }
    return function cleanup() {
      window?.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.userAgent) {
      const selectorsFromUserAgent = getSelectorsByUserAgent(navigator.userAgent);
      setDeviceContextData({
        ...selectorsFromUserAgent,
        isMobileWidth,
        isLandscape,
      });
    }
  }, [isMobileWidth, isLandscape]);

  // useEffect(() => {
  //   TagManager.initialize(tagManagerArgs);
  // }, []);

  return (
    <SessionProvider>
      <ApolloProvider client={apolloClient}>
        <UserContextProvider session={session}>
          <NewTaskDialogContextProvider>
            <NewCalendarEventDialogContextProvider>
              <DeviceContext.Provider value={deviceContextData}>
                <ColorModeContextProvider>
                  <PageTransitionContextProvider>
                    <CssBaseline />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DndProvider
                        backend={deviceContextData.isMobile ? TouchBackend : HTML5Backend}
                        options={deviceContextData.isMobile ? { delayTouchStart: 200 } : {}}
                      >
                        <DateContextProvider>
                          <>
                            <Head>
                              {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
                              <meta
                                name="viewport"
                                content="width=device-width, initial-scale=1, maximum-scale=1"
                              />
                            </Head>
                            <DefaultSeo {...SEO} />
                            <Script id="google-tag-manager" strategy="afterInteractive">
                              {GOOGLE_TAG_MANAGER_SCRIPT}
                            </Script>
                            {(Component as PageWithAuth).auth ? (
                              <Auth>
                                <Component {...pageProps} />
                              </Auth>
                            ) : (
                              <Component {...pageProps} />
                            )}
                          </>
                        </DateContextProvider>
                      </DndProvider>
                    </LocalizationProvider>
                  </PageTransitionContextProvider>
                </ColorModeContextProvider>
              </DeviceContext.Provider>
            </NewCalendarEventDialogContextProvider>
          </NewTaskDialogContextProvider>
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
