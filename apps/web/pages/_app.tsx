import { ApolloProvider } from "@apollo/client";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ColorModeContextProvider } from "@web/components/contexts/ColorModeContext";
import { DateContextProvider } from "@web/components/contexts/DateContext";
import DeviceContext, { DeviceContextData } from "@web/components/contexts/DeviceContext";
import { NewCalendarEventDialogContextProvider } from "@web/components/contexts/NewCalendarEventDialogContext";
import { PageTransitionContextProvider } from "@web/components/contexts/PageTransitionContext";
import { UserContextProvider } from "@web/components/contexts/UserContext";
import { useApollo } from "@web/lib/apollo";
import SEO from "@web/next-seo.config";
import "@web/public/styles/global.css";
import { PageProps } from "@web/types/page";
import { createEmotionCache } from "@web/utils/emotion";
import { setCookie } from "cookies-next";
import { NextPage } from "next";
import { Session } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { FC, ReactElement, useEffect, useReducer } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
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

const DEVICE_CONTEXT_COOKIE_NAME = "device-context";

export function deviceDataReducer(state: DeviceContextData, payload: Partial<DeviceContextData>) {
  if (payload.field === "init") return payload as DeviceContextData;
  return { ...state, ...payload };
}

function App({
  Component: Page,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  const apolloClient = useApollo(pageProps);

  const serverSideCookies = pageProps.cookies ?? {};

  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  const [deviceData, dispatchDeviceData] = useReducer(
    deviceDataReducer,
    serverSideCookies[DEVICE_CONTEXT_COOKIE_NAME]
      ? JSON.parse(serverSideCookies[DEVICE_CONTEXT_COOKIE_NAME])
      : ({} as DeviceContextData)
  );

  useEffect(() => {
    const handleOrientationChange = function (e: Event) {
      const newOrientation = window.screen.orientation?.type;
      if (newOrientation) {
        dispatchDeviceData({ isLandscape: newOrientation.toString().includes("landscape") });
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
      const deviceContextData = {
        ...selectorsFromUserAgent,
        width: xl ? "xl" : lg ? "lg" : md ? "md" : sm ? "sm" : "xs",
      };
      dispatchDeviceData(deviceContextData);
      setCookie(DEVICE_CONTEXT_COOKIE_NAME, JSON.stringify(deviceContextData));
    }
  }, [xl, lg, md, sm, xs]);

  return (
    <SessionProvider>
      <ApolloProvider client={apolloClient}>
        <UserContextProvider session={session}>
          <NewCalendarEventDialogContextProvider>
            <DeviceContext.Provider value={deviceData}>
              <CacheProvider value={emotionCache}>
                <ColorModeContextProvider>
                  <PageTransitionContextProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DndProvider
                        backend={deviceData.isMobile ? TouchBackend : HTML5Backend}
                        options={deviceData.isMobile ? { delayTouchStart: 200 } : {}}
                      >
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
                            <Auth session={session}>
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
            </DeviceContext.Provider>
          </NewCalendarEventDialogContextProvider>
        </UserContextProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default App;

interface AuthProps {
  children: ReactElement;
  session: Session | null | undefined;
}

const Auth: FC<AuthProps> = ({ children, session: sessionFromProps }: AuthProps) => {
  const { data: session, status } = useSession({ required: true });
  const authenticated = sessionFromProps || status === "authenticated";
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
