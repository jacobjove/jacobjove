import { FC } from "react";
import { DndProvider as _DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { useDeviceData } from "./DeviceContext";

export const DndProvider: FC = ({ children }) => {
  const { isMobile } = useDeviceData();
  return (
    <_DndProvider
      backend={isMobile ? TouchBackend : HTML5Backend}
      options={isMobile ? { delayTouchStart: 200 } : {}}
    >
      {children}
    </_DndProvider>
  );
};
