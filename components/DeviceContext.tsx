import { createContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const DeviceContext = createContext<{
  isMobile: boolean;
}>({ isMobile: true });

export default DeviceContext;
