import { createContext, useContext } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";

export interface DeviceContextData extends ReturnType<typeof getSelectorsByUserAgent> {
  isMobileWidth?: boolean;
  isLandscape?: boolean;
}

const DeviceContext = createContext<DeviceContextData>({});

export default DeviceContext;

export const useDeviceData = () => {
  return useContext(DeviceContext);
};
