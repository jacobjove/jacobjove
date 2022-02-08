import ColorModeContext from "@/components/contexts/ColorModeContext";
import DateContext from "@/components/contexts/DateContext";
import DeviceContext, { DeviceContextData } from "@/components/contexts/DeviceContext";
import { PageTransitionContextProvider } from "@/components/contexts/PageTransitionContext";
import UserContext, { UserSettings } from "@/components/contexts/UserContext";
import { GET_USER } from "@/graphql/queries";
import { User } from "@/graphql/schema";
import { useApollo } from "@/lib/apollo/apolloClient";
import "@/node_modules/react-grid-layout/css/styles.css";
import "@/node_modules/react-resizable/css/styles.css";
import "@/public/styles/global.css";
import { ApolloProvider, useQuery } from "@apollo/client";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { createTheme, PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import isObject from "lodash/isObject";
import { NextPage } from "next";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { FC, ReactElement, useEffect, useMemo, useState } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import TagManager from "react-gtm-module";
import "typeface-open-sans"; // https://github.com/KyleAMathews/typefaces/tree/master/packages

const DEFAULT_COLOR_MODE = "light";

// TODO: https://github.com/vercel/next.js/discussions/15518#discussioncomment-42875
const tagManagerArgs = {
  gtmId: `${process.env.NEXT_PUBLIC_GTM_ID}`, // e.g., 'GTM-XXXXXX'
};

const getDesignTokens = (mode: PaletteMode) => {
  const dividerColor = mode === "light" ? "rgb(224, 224, 224)" : "rgba(81, 81, 81, 0.6)";
  return {
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: `1px solid ${dividerColor}`,
          },
        },
      },
    },
    palette: {
      mode,
      primary: {
        main: "#42a5f5",
        light: "#80d6ff",
        dark: "#0077c2",
        contrastText: "#fff",
      },
      secondary: {
        main: "#757575",
        light: "#a4a4a4",
        dark: "#494949",
        contrastText: mode === "light" ? "#fff" : "#000",
      },
      divider: dividerColor,
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
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
  };
};

export type PageWithAuth = NextPage & {
  auth?: boolean;
};

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const { data, loading: _loading } = useQuery<{ user: User }>(GET_USER, {
    client: apolloClient,
    skip: !session?.user?.id,
    variables: { userId: session?.user?.id },
  });

  // TODO: Is this correct usage of memoization?
  const user = useMemo(() => {
    const rawUser = data?.user;
    if (!rawUser) return null;
    let settings: UserSettings = {};
    if (rawUser?.settings) {
      if (isObject(rawUser.settings)) {
        console.log("Ara? user.settings is already an object...");
        settings = rawUser.settings;
      } else {
        settings = JSON.parse(rawUser.settings);
      }
    }
    return { ...rawUser, settings };
  }, [data]);

  const [date, setDate] = useState(new Date());

  const [mode, setMode] = useState<PaletteMode>(user?.settings?.colorMode ?? DEFAULT_COLOR_MODE);
  const colorMode = useMemo(() => ({ set: (mode: PaletteMode) => setMode(mode) }), []);

  const isMobileWidth = useMediaQuery("(max-width: 600px)");
  const [isLandscape, setIsLandscape] = useState<boolean>();
  const [deviceContextData, setDeviceContextData] = useState<DeviceContextData>({});
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    // Update the current time every minute.
    const intervalId = setInterval(function () {
      setDate(new Date());
    }, 1000 * 60);
    return function cleanup() {
      clearInterval(intervalId);
    };
  }, [setDate]);

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

  useEffect(() => {
    if (user?.settings?.colorMode) {
      console.log("user?.settings?.colorMode changed");
      setMode(user?.settings?.colorMode);
    }
    // TODO: Otherwise, read from operating system preferences.
  }, [user?.settings?.colorMode]);

  console.log("App.render");

  return (
    <SessionProvider session={session}>
      <UserContext.Provider value={user ?? null}>
        <DeviceContext.Provider value={deviceContextData}>
          <PageTransitionContextProvider>
            <ApolloProvider client={apolloClient}>
              <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <LocalizationProvider dateAdapter={DateAdapter}>
                    <DndProvider backend={deviceContextData.isMobile ? TouchBackend : HTML5Backend}>
                      <DateContext.Provider value={date}>
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
                      </DateContext.Provider>
                    </DndProvider>
                  </LocalizationProvider>
                </ThemeProvider>
              </ColorModeContext.Provider>
            </ApolloProvider>
          </PageTransitionContextProvider>
        </DeviceContext.Provider>
      </UserContext.Provider>
    </SessionProvider>
  );
}

interface AuthProps {
  children: ReactElement;
}

const Auth: FC<AuthProps> = ({ children }: AuthProps) => {
  const { data: session, status } = useSession({ required: true });
  const loadingAuth = status === "loading";
  const isAuthenticated = !!session?.user;

  // Require authentication.
  useEffect(() => {
    // Do nothing while loading.
    if (loadingAuth) return;
    // If not authenticated, force log in.
    if (!isAuthenticated) signIn();
  }, [isAuthenticated, loadingAuth]);

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
