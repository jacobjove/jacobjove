import TaskDialog from "@/components/actions/TaskDialog";
import AppDrawer from "@/components/AppDrawer";
import DeviceContext from "@/components/contexts/DeviceContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NotesIcon from "@mui/icons-material/Notes";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import TodayIcon from "@mui/icons-material/Today";
import Backdrop from "@mui/material/Backdrop";
import useMediaQuery from "@mui/material/useMediaQuery";
import { bindPopover } from "material-ui-popup-state/hooks";
import { parseCookies, setCookie } from "nookies";
// import SpeedDial from "@mui/material/SpeedDial";
// import SpeedDialAction from "@mui/material/SpeedDialAction";
// import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { FC, ReactNode, useContext, useState } from "react";
import CalendarEventDialog from "./calendar/CalendarEventDialog";
import { useNewCalendarEventDialog } from "./contexts/NewCalendarEventDialogContext";
import { useNewTaskDialog } from "./contexts/NewTaskDialogContext";

export interface LayoutProps {
  children: ReactNode;
  scrollable?: boolean;
  inApp?: boolean;
}

const HEADER_HEIGHT_PX = 60;
const FOOTER_HEIGHT_REM = 3;

const DRAWER_EXPANDED_COOKIE_NAME = "drawerExpanded";

const Layout: FC<LayoutProps> = ({ scrollable, children, inApp }: LayoutProps) => {
  const { isDesktop } = useContext(DeviceContext);
  const cookies = parseCookies();
  const drawerExpandedCookieValue = cookies[DRAWER_EXPANDED_COOKIE_NAME];
  const drawerExpanded = drawerExpandedCookieValue
    ? drawerExpandedCookieValue === "true"
    : isDesktop;
  const headerHeight = `${HEADER_HEIGHT_PX}px`;
  const footerHeight = `${FOOTER_HEIGHT_REM}rem`;
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [appDrawerOpen, _setAppDrawerOpen] = useState(drawerExpanded);
  const [speedDialOpen, setSpeedDialOpen] = useState(false);

  const { newTaskDataTuple, newTaskDialogState, newTaskDialogTriggerProps } = useNewTaskDialog();

  const { newCalendarEventDialogState } = useNewCalendarEventDialog();

  const setAppDrawerOpen = (open: boolean) => {
    _setAppDrawerOpen(open);
    setCookie(undefined, DRAWER_EXPANDED_COOKIE_NAME, open.toString());
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
      onClick: newTaskDialogTriggerProps.onClick,
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
  return (
    <>
      <div
        style={{
          height: "100vh",
          maxHeight: "100vh",
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
            height: `calc(100vh - ${headerHeight})`,
            maxHeight: `calc(100vh - ${headerHeight})`,
          }}
        >
          {inApp && (
            <div style={{ position: "sticky", top: 0, maxHeight: "100vh" }}>
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
            {/* <SpeedDial
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
            </SpeedDial> */}
            <TaskDialog {...bindPopover(newTaskDialogState)} />
            <CalendarEventDialog
              mutation={"create"}
              {...bindPopover(newCalendarEventDialogState)}
            />
          </>
        )}
      </div>
      <Footer height={footerHeight} />
    </>
  );
};

export default Layout;
