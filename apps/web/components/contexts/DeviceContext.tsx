import { createContext, useContext } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";

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

export interface DeviceContextData extends Partial<SelectorsFromUserAgent> {
  isMobileWidth?: boolean;
  isLandscape?: boolean;
}

const DeviceContext = createContext<DeviceContextData>({});

export default DeviceContext;

export const useDeviceData = () => {
  return useContext(DeviceContext);
};
