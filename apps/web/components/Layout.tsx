import NotesIcon from "@mui/icons-material/Notes";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import TodayIcon from "@mui/icons-material/Today";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppDrawer from "@web/components/AppDrawer";
import CalendarEventDialog from "@web/components/calendar/CalendarEventDialog";
import { useDeviceData } from "@web/components/contexts/DeviceContext";
import { useNewCalendarEventDialog } from "@web/components/contexts/NewCalendarEventDialogContext";
import Footer from "@web/components/Footer";
import Header from "@web/components/Header";
import { setCookie } from "cookies-next";
import { bindDialog } from "material-ui-popup-state/hooks";

import { FC, ReactNode, useState } from "react";
import { useCookieData } from "./contexts/CookieContext";

export interface LayoutProps {
  children: ReactNode;
  scrollable?: boolean;
  inApp?: boolean;
}

const HEADER_HEIGHT_PX = 60;
const FOOTER_HEIGHT_REM = 3;

const DRAWER_EXPANDED_COOKIE_NAME = "drawerExpanded";

const Layout: FC<LayoutProps> = ({ scrollable, children, inApp }: LayoutProps) => {
  const { isDesktop } = useDeviceData();
  const { [DRAWER_EXPANDED_COOKIE_NAME]: drawerExpandedCookieValue } = useCookieData();
  const drawerExpanded = drawerExpandedCookieValue
    ? drawerExpandedCookieValue === "true"
    : !!isDesktop;
  const headerHeight = `${HEADER_HEIGHT_PX}px`;
  const footerHeight = `${FOOTER_HEIGHT_REM}rem`;
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [appDrawerOpen, _setAppDrawerOpen] = useState(drawerExpanded);
  const [speedDialOpen, setSpeedDialOpen] = useState(false);

  const { newCalendarEventDialogState } = useNewCalendarEventDialog();

  const setAppDrawerOpen = (open: boolean) => {
    _setAppDrawerOpen(open);
    setCookie(DRAWER_EXPANDED_COOKIE_NAME, open.toString());
  };

  const handleSpeedDialOpen = () => {
    // console.log("handleSpeedDialOpen");
    setSpeedDialOpen(true);
  };
  const handleSpeedDialClose = () => {
    // console.log("handleSpeedDialClose");
    setSpeedDialOpen(false);
  };
  const speedDialActions = [
    {
      icon: <TaskAltIcon />,
      name: "Task",
      onClick: () => {
        alert("This functionality is not yet implemented.");
      },
    },
    {
      icon: <TodayIcon />,
      name: "Calendar event",
      onClick: () => {
        alert("This functionality is not yet implemented.");
      },
    },
    {
      icon: <NotesIcon />,
      name: "Note",
      onClick: () => {
        alert("This functionality is not yet implemented.");
      },
    },
  ];
  const useSpeedDial = false;
  return (
    <>
      <div
        style={{
          height: "100%",
          maxHeight: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Header heightInPx={HEADER_HEIGHT_PX} />
        <Backdrop open={isMobile && speedDialOpen} />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexGrow: 1,
            height: `calc(100% - ${headerHeight})`,
            maxHeight: `calc(100% - ${headerHeight})`,
          }}
        >
          {inApp && (
            <div style={{ position: "sticky", top: 0, maxHeight: "100%" }}>
              {/* Note: AppDrawer uses absolute positioning. */}
              <AppDrawer open={appDrawerOpen} setOpen={setAppDrawerOpen} />
            </div>
          )}
          <div
            className="no-scrollbar"
            style={{
              position: "relative",
              flexGrow: 1,
              flexShrink: 1,
              height: "100%",
              maxHeight: "100%",
              overflowY: scrollable ? "scroll" : "hidden",
            }}
          >
            {children}
          </div>
        </div>
        {inApp && (
          <>
            {useSpeedDial && (
              <SpeedDial
                ariaLabel="Dashboard speed dial"
                sx={{
                  position: "sticky",
                  bottom: 16,
                  right: 0,
                  marginRight: "16px",
                  alignItems: "end",
                }}
                icon={<SpeedDialIcon />}
                onClose={handleSpeedDialClose}
                onOpen={handleSpeedDialOpen}
              >
                {speedDialActions.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen // TODO: on mobile only?
                    onClick={action.onClick}
                  />
                ))}
              </SpeedDial>
            )}
            {newCalendarEventDialogState && (
              <CalendarEventDialog
                mutation={"create"}
                {...bindDialog(newCalendarEventDialogState)}
                close={newCalendarEventDialogState.close}
              />
            )}
          </>
        )}
      </div>
      <Footer height={footerHeight} />
    </>
  );
};

export default Layout;
