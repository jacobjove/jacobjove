import { AuthProvider, useAuth } from "@/components/contexts/AuthContext";
import { ColorModeContextProvider } from "@/components/contexts/ColorModeContext";
import { DateContextProvider } from "@/components/contexts/DateContext";
import DeviceContext, { DeviceContextData } from "@/components/contexts/DeviceContext";
import { NewCalendarEventDialogContextProvider } from "@/components/contexts/NewCalendarEventDialogContext";
import { NewTaskDialogContextProvider } from "@/components/contexts/NewTaskDialogContext";
import { PageTransitionContextProvider } from "@/components/contexts/PageTransitionContext";
import { UserContextProvider } from "@/components/contexts/UserContext";
import { USE_FIREBASE } from "@/config";
import { useApollo } from "@/lib/apollo";
import "@/node_modules/react-grid-layout/css/styles.css";
import "@/node_modules/react-resizable/css/styles.css";
import "@/public/styles/global.css";
import initAuth from "@/utils/auth/init";
import { ApolloProvider } from "@apollo/client";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NextPage } from "next";
import { SessionProvider, signIn, signOut } from "next-auth/react";
import { withAuthUser } from "next-firebase-auth";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { FC, ReactElement, useEffect, useState } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import TagManager from "react-gtm-module";
import "typeface-open-sans"; // https://github.com/KyleAMathews/typefaces/tree/master/packages

USE_FIREBASE && initAuth();

// TODO: https://github.com/vercel/next.js/discussions/15518#discussioncomment-42875
const tagManagerArgs = {
  gtmId: `${process.env.NEXT_PUBLIC_GTM_ID}`, // e.g., 'GTM-XXXXXX'
};

export type PageWithAuth = NextPage & {
  auth?: boolean;
};

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const apolloClient = useApollo(pageProps);

  const isMobileWidth = useMediaQuery("(max-width: 600px)");
  const [isLandscape, setIsLandscape] = useState<boolean>();
  const [deviceContextData, setDeviceContextData] = useState<DeviceContextData>({});

  useEffect(() => {
    const handleOrientationChange = function (e: Event) {
      setIsLandscape((e.target as ScreenOrientation).type.toString().includes("landscape"));
    };
    if (typeof window !== "undefined") {
      window.screen.orientation.addEventListener("change", handleOrientationChange);
    }
    return function cleanup() {
      window.screen.orientation.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.userAgent) {
      setDeviceContextData({
        ...getSelectorsByUserAgent(navigator.userAgent),
        isMobileWidth,
        isLandscape,
      });
    }
  }, [isMobileWidth, isLandscape]);

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <SessionProvider>
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <UserContextProvider>
            <NewTaskDialogContextProvider>
              <NewCalendarEventDialogContextProvider>
                <DeviceContext.Provider value={deviceContextData}>
                  <ColorModeContextProvider>
                    <PageTransitionContextProvider>
                      <CssBaseline />
                      <LocalizationProvider dateAdapter={DateAdapter}>
                        <DndProvider
                          backend={deviceContextData.isMobile ? TouchBackend : HTML5Backend}
                        >
                          <DateContextProvider>
                            <DefaultSeo
                              description={
                                "Build good habits, break bad habits, and be your best self."
                              }
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
                            {(Component as PageWithAuth).auth ? (
                              <Auth>
                                <Component {...pageProps} />
                              </Auth>
                            ) : (
                              <Component {...pageProps} />
                            )}
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
      </AuthProvider>
    </SessionProvider>
  );
}

export default USE_FIREBASE ? withAuthUser()(App) : App;

interface AuthProps {
  children: ReactElement;
}

const Auth: FC<AuthProps> = ({ children }: AuthProps) => {
  const { token, loading: loadingAuth } = useAuth();
  const isAuthenticated = !!token;
  const hasError = !!token?.error;

  // Require authentication.
  useEffect(() => {
    // Do nothing while loading.
    if (loadingAuth) return;
    // Sign out if there's an auth error (probably an expired refresh token).
    if (hasError) signOut();
    // If not authenticated, force log in.
    if (!isAuthenticated || hasError) signIn();
  }, [isAuthenticated, loadingAuth, hasError]);

  if (isAuthenticated) return children;

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {"Loading..."}
    </div>
  );
};
