import { Breakpoint, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { setCookie } from "cookies-next";
import { createContext, FC, useContext, useEffect, useReducer } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
import { useCookieData } from "./CookieContext";

export interface SelectorsFromUserAgent extends ReturnType<typeof getSelectorsByUserAgent> {
  browserName: string;
  browserVersion: string;
  deviceType: string;
  engineName: string;
  engineVersion: string;
  fullBrowserVersion: string;
  isAndroid: boolean;
  isBrowser: boolean;
  isChrome: boolean;
  isChromium: boolean;
  isConsole: boolean;
  isDesktop: boolean;
  isEdge: boolean;
  isEdgeChromium: boolean;
  isElectron: boolean;
  isFirefox: boolean;
  isIE: boolean;
  isIOS: boolean;
  isIOS13: boolean;
  isIPad13: boolean;
  isIPhone13: boolean;
  isIPod13: boolean;
  isLegacyEdge: boolean;
  isMacOS: boolean;
  isMobile: boolean;
  isMobileOnly: boolean;
  isMobileSafari: boolean;
  isOpera: boolean;
  isSafari: boolean;
  isSamsungBrowser: boolean;
  isSmartTV: boolean;
  isTablet: boolean;
  isWearable: boolean;
  isWinPhone: boolean;
  isWindows: boolean;
  mobileModel: string;
  mobileVendor: string;
  osName: string;
  osVersion: string;
}

export interface DeviceContextData extends SelectorsFromUserAgent {
  isLandscape?: boolean;
  width?: Breakpoint;
}

const DeviceContext = createContext<DeviceContextData>({} as DeviceContextData);

export default DeviceContext;

const DEVICE_CONTEXT_COOKIE_NAME = "deviceContext";

export function deviceDataReducer(state: DeviceContextData, payload: Partial<DeviceContextData>) {
  // Return a new object with the updated values.
  return { ...state, ...payload };
}

export const DeviceContextProvider: FC = ({ children }) => {
  const theme = useTheme();

  const { [DEVICE_CONTEXT_COOKIE_NAME]: deviceJsonData } = useCookieData();
  const deviceDataFromCookie = deviceJsonData ? JSON.parse(deviceJsonData) : {};

  // Note: These are all false during SSR.
  // https://mui.com/material-ui/react-use-media-query/
  const xs = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  const sm = useMediaQuery(theme.breakpoints.up("sm"), { noSsr: true });
  const md = useMediaQuery(theme.breakpoints.up("md"), { noSsr: true });
  const lg = useMediaQuery(theme.breakpoints.up("lg"), { noSsr: true });
  const xl = useMediaQuery(theme.breakpoints.up("xl"), { noSsr: true });
  const width = xl ? "xl" : lg ? "lg" : md ? "md" : sm ? "sm" : xs ? "xs" : undefined;

  const [deviceData, dispatchDeviceData] = useReducer(deviceDataReducer, deviceDataFromCookie);

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
    if (typeof window === "undefined") return;
    if (navigator.userAgent && width) {
      const selectorsFromUserAgent = getSelectorsByUserAgent(navigator.userAgent);
      const deviceContextData = {
        ...selectorsFromUserAgent,
        width,
      };
      dispatchDeviceData(deviceContextData);
      console.log("Setting device data cookie:", deviceContextData);
      setCookie(DEVICE_CONTEXT_COOKIE_NAME, JSON.stringify(deviceContextData));
    }
  }, [width]);

  return <DeviceContext.Provider value={deviceData}>{children}</DeviceContext.Provider>;
};

export const useDeviceData = () => {
  return useContext(DeviceContext);
};
