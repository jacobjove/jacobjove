import { ColorModeContextProvider } from "@/components/contexts/ColorModeContext";
import { DateContextProvider } from "@/components/contexts/DateContext";
import DeviceContext, { DeviceContextData } from "@/components/contexts/DeviceContext";
import { NewCalendarEventDialogContextProvider } from "@/components/contexts/NewCalendarEventDialogContext";
import { NewTaskDialogContextProvider } from "@/components/contexts/NewTaskDialogContext";
import { PageTransitionContextProvider } from "@/components/contexts/PageTransitionContext";
import { UserContextProvider } from "@/components/contexts/UserContext";
import { useApollo } from "@/lib/apollo";
import SEO from "@/next-seo.config";
import "@/node_modules/react-grid-layout/css/styles.css";
import "@/node_modules/react-resizable/css/styles.css";
import "@/public/styles/global.css";
import { ApolloProvider } from "@apollo/client";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { NextPage } from "next";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { FC, ReactElement, useEffect, useState } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import TagManager from "react-gtm-module";
import "typeface-open-sans"; // https://github.com/KyleAMathews/typefaces/tree/master/packages

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
                      >
                        <DateContextProvider>
                          <DefaultSeo {...SEO} />
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
