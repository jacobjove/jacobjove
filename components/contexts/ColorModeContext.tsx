import { PaletteMode } from "@mui/material";
import { createContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ColorModeContext = createContext<{
  set: (mode: PaletteMode) => void;
}>({ set: () => null });

export default ColorModeContext;
