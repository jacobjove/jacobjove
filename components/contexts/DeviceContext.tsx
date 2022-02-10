import { createContext } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";

export interface DeviceContextData extends ReturnType<typeof getSelectorsByUserAgent> {
  isMobileWidth?: boolean;
  isLandscape?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const DeviceContext = createContext<DeviceContextData>({});

export default DeviceContext;
