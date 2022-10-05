import { createTheme, PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useUser } from "@web/components/contexts/UserContext";
import { useUpdateUser } from "@web/generated/hooks/user.hooks";
import { setCookie } from "cookies-next";
import { createContext, Dispatch, FC, SetStateAction, useEffect, useMemo, useState } from "react";
import { useCookieData } from "./CookieContext";

const COLOR_MODE_COOKIE_NAME = "colorMode";

// NOTE: It's probably best to stick with "light" as the default color mode,
// to match the prefers-color-scheme default:
// https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
const DEFAULT_COLOR_MODE = "light";

// eslint-disable-next-line @typescript-eslint/no-empty-function
// prettier-ignore
const ColorModeContext = createContext<[PaletteMode, Dispatch<SetStateAction<PaletteMode>>]>(
  [DEFAULT_COLOR_MODE, () => undefined]
);

export default ColorModeContext;

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

export const ColorModeContextProvider: FC = ({ children }) => {
  const { user } = useUser();

  // Read color mode from cookie.
  const { [COLOR_MODE_COOKIE_NAME]: _colorModeFromCookie } = useCookieData();
  let colorModeFromCookie: PaletteMode | undefined;
  if (_colorModeFromCookie && _colorModeFromCookie !== "light" && _colorModeFromCookie !== "dark") {
    console.error(`Invalid color mode from cookie: ${_colorModeFromCookie}`);
    colorModeFromCookie = undefined;
  } else {
    colorModeFromCookie = _colorModeFromCookie as PaletteMode | undefined;
  }

  // Read color mode from browser preferences.
  // NOTE: These values are false during SSR.
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", { noSsr: true });
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)", { noSsr: true });
  const colorModeFromBrowserSettings: PaletteMode | undefined = prefersDarkMode
    ? "dark"
    : prefersLightMode
    ? "light"
    : undefined;

  // Read color mode from user settings.
  const colorModeFromUserSettings = user?.settings?.colorMode as PaletteMode | undefined;

  // Initialize state.
  const initialColorMode =
    colorModeFromUserSettings ??
    colorModeFromCookie ??
    colorModeFromBrowserSettings ??
    DEFAULT_COLOR_MODE;
  const colorModeState = useState<PaletteMode>(initialColorMode);
  const [colorMode, setColorMode] = colorModeState;

  // Initialize theme.
  // TODO: Move theme to its own context provider?
  const theme = useMemo(() => createTheme(getDesignTokens(colorMode)), [colorMode]);

  const [updateUser] = useUpdateUser();

  // Keep the color mode state and cookie in sync with the user's color-mode setting.
  useEffect(() => {
    if (colorModeFromUserSettings) {
      // Update the color mode state whenever the user's color-mode setting changes.
      setColorMode(colorModeFromUserSettings);
      // Update the cookie whenever the user's color-mode setting changes.
      if (colorModeFromCookie !== colorModeFromUserSettings) {
        setCookie(COLOR_MODE_COOKIE_NAME, colorModeFromUserSettings);
      }
    } else if (colorModeFromCookie) {
      setColorMode(colorModeFromCookie);
    } else if (colorModeFromBrowserSettings) {
      setColorMode(colorModeFromBrowserSettings);
      // If the user's settings have loaded but do not include a color-mode setting,
      // then add a color-mode setting based on browser preferences.
      if (user && !user.settings.colorMode) {
        updateUser.current?.({
          variables: {
            where: { id: user.id },
            data: {
              settings: {
                ...user.settings,
                colorMode: colorModeFromBrowserSettings,
              },
            },
          },
        });
      }
    }
  }, [
    // Note: Don't include `colorMode` in the dependency list.
    // If `colorMode` is included as a dependency, any direct changes to the color mode
    // state (e.g., through the `onChange` handler for the color mode selector on the
    // settings page) will be immediately overwritten by this effect.
    setColorMode,
    colorModeFromUserSettings,
    colorModeFromCookie,
    colorModeFromBrowserSettings,
    user,
    updateUser,
  ]);

  return (
    <ColorModeContext.Provider value={colorModeState}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
