import UserContext from "@/components/contexts/UserContext";
import { createTheme, PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, FC, useContext, useEffect, useMemo, useState } from "react";

const DEFAULT_COLOR_MODE = "light";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ColorModeContext = createContext<{
  set: (mode: PaletteMode) => void;
}>({ set: () => null });

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
  const user = useContext(UserContext);

  const [mode, setMode] = useState<PaletteMode>(user?.settings?.colorMode ?? DEFAULT_COLOR_MODE);
  const colorMode = useMemo(() => ({ set: (mode: PaletteMode) => setMode(mode) }), []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    if (user?.settings?.colorMode) setMode(user?.settings?.colorMode);
    // TODO: Otherwise, read from operating system preferences.
  }, [user?.settings?.colorMode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
