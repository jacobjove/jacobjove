import CalendarApiProviderDialog from "@/components/calendar/CalendarApiProviderDialog";
import DayViewer from "@/components/calendar/views/DayViewer";
import MonthViewer from "@/components/calendar/views/MonthViewer";
import { CalendarData, CalendarProps } from "@/components/calendar/views/props";
import WeekViewer from "@/components/calendar/views/WeekViewer";
import DateContext from "@/components/contexts/DateContext";
import UserContext from "@/components/contexts/UserContext";
import DateSelector from "@/components/dates/DateSelector";
import { calendarEventFragment, calendarFragment } from "@/graphql/fragments";
import { Calendar } from "@/graphql/schema";
import { gql } from "@apollo/client";
import AppleIcon from "@mui/icons-material/Apple";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import Check from "@mui/icons-material/Check";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import GoogleIcon from "@mui/icons-material/Google";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import { addMinutes } from "date-fns";
import { bindMenu, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import Image from "next/image";
import { FC, useContext, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type CalendarApiProvider = "google" | "apple";

const ICON_MAP = {
  google: GoogleIcon,
  apple: AppleIcon,
};

const SCOPE_MAP: Record<CalendarApiProvider, string> = {
  google: "https://www.googleapis.com/auth/calendar",
  apple: "",
};

export const fragment = gql`
  fragment CalendarViewer on Query {
    calendars(where: { userId: { equals: $userId } }) {
      ...CalendarFragment
    }
    calendarEvents(
      where: { calendar: { is: { userId: { equals: $userId } } }, start: { gte: $date } }
    ) {
      ...CalendarEventFragment
    }
  }
  ${calendarFragment}
  ${calendarEventFragment}
`;

interface CalendarMenuItemProps extends MenuItemProps {
  calendar: Calendar;
}

const CalendarMenuItem: FC<CalendarMenuItemProps> = ({ calendar, children, ...props }) => {
  const dialogState = usePopupState({
    variant: "popover",
    popupId: `calendar-${calendar.id}-dialog`,
  });
  const Icon = calendar.provider ? ICON_MAP[calendar.provider] : null;
  const iconElement = Icon ? (
    <Icon sx={{ color: "lightgray" }} />
  ) : (
    <Box display="flex" alignItems="center">
      <Image alt="SelfBuilder logo" src="/logo.png" width={24} height={24} />
    </Box>
  );
  const enabled = calendar.enabled;
  return (
    <>
      <MenuItem {...props} {...bindTrigger(dialogState)}>
        <ListItemIcon sx={{ visibility: enabled ? "visible" : "hidden" }}>
          <Check />
        </ListItemIcon>
        {iconElement}
        {children}
      </MenuItem>
      {/* <CalendarApiProviderDialog provider={provider} {...bindMenu(dialogState)} /> */}
    </>
  );
};

interface CalendarApiMenuItemProps extends MenuItemProps {
  provider: CalendarApiProvider;
  enabled: boolean;
}

const CalendarApiMenuItem: FC<CalendarApiMenuItemProps> = ({
  provider,
  enabled,
  children,
  ...props
}) => {
  const dialogState = usePopupState({ variant: "popover", popupId: `${provider}-calendar-dialog` });
  const Icon = ICON_MAP[provider];
  const iconElement = <Icon sx={{ color: "lightgray" }} />;
  return (
    <>
      <MenuItem {...props} {...bindTrigger(dialogState)}>
        <ListItemIcon sx={{ visibility: enabled ? "visible" : "hidden" }}>
          <Check />
        </ListItemIcon>
        {iconElement}
        {children}
      </MenuItem>
      <CalendarApiProviderDialog provider={provider} {...bindMenu(dialogState)} />
    </>
  );
};

type ViewMode = "day" | "week" | "month";

type CalendarViewerProps = Omit<CalendarProps, "data"> & {
  data: CalendarData;
  defaultView?: ViewMode;
};

const CalendarViewer: FC<CalendarViewerProps> = (props: CalendarViewerProps) => {
  const { data, defaultView, ...rest } = props;
  const { calendars } = data;
  const defaultCalendar = calendars[0]; // TODO
  const user = useContext(UserContext);
  const date = useContext(DateContext);
  const [fullScreen, setFullScreen] = useState(false);
  const [view, setView] = useState<ViewMode>(defaultView ?? "day");
  const [selectedDate, setSelectedDate] = useState<Date | null>(date);
  // TODO: refactor
  const apiIsEnabled = useMemo(
    () => (provider: CalendarApiProvider) => {
      return Boolean(
        user?.accounts?.find(
          (account) => account.provider === provider && account.scopes.includes(SCOPE_MAP[provider])
        ) && calendars.find((calendar) => calendar.provider === provider && calendar.enabled)
      );
    },
    [user, calendars]
  );
  // const [selectedCalendarIds, setSelectedCalendarIds] = useState<number[]>(
  //   calendars.map((calendar) => calendar.id)
  // );
  const menuState = usePopupState({ variant: "popper", popupId: `calendar-menu` });
  const [initialEventFormData, setInitialEventFormData] = useState({
    title: "",
    start: date,
    end: date ? addMinutes(date, 29) : null,
    allDay: false,
    notes: "",
    calendarId: defaultCalendar?.id,
  });
  const commonViewProps = {
    ...rest,
    selectedDate: selectedDate || date,
    setSelectedDate,
    initialEventFormData,
    setInitialEventFormData,
    defaultCalendar,
  };
  const renderedComponent = (
    <Box
      display="flex"
      flexDirection={"column"}
      height={"100%"}
      sx={{
        ...(fullScreen
          ? {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: (theme) => theme.palette.background.default,
              padding: "0.5rem",
              zIndex: 1e14,
            }
          : {}),
      }}
    >
      {!props.collapseMenu && (
        <Box
          flex={"0 0 auto"}
          display="flex"
          width={"100%"}
          justifyContent={"space-between"}
          pb="0.12rem"
          sx={{
            borderBottom: (theme) => `1px solid
            ${theme.palette.divider}`,
            display: props.collapseMenu ? "none" : "flex",
          }}
        >
          <Box display="flex" justifyContent={"center"} alignItems={"end"}>
            <ToggleButtonGroup
              exclusive
              value={view}
              onChange={(_, value: ViewMode) => setView(value)}
              size="small"
              color="primary"
              aria-label="text alignment"
            >
              <ToggleButton value="day" aria-label="day view">
                <CalendarViewDayIcon />
              </ToggleButton>
              <ToggleButton value="week" aria-label="week view">
                <CalendarViewWeekIcon />
              </ToggleButton>
              <ToggleButton value="month" aria-label="month view">
                <CalendarViewMonthIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          {view === "day" && (
            <Box display="flex" justifyContent={"center"} alignItems={"center"}>
              <DateSelector date={selectedDate} setDate={setSelectedDate} />
            </Box>
          )}
          <Box
            display={"flex"}
            alignItems={"start"}
            justifyContent={"center"}
            position="relative"
            sx={{
              "& button svg": {
                fontSize: "1.25rem",
              },
            }}
          >
            <IconButton title={`Display calendar menu`} {...bindTrigger(menuState)}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              {...bindMenu(menuState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              keepMounted
            >
              <Typography variant="h4" sx={{ ml: 1, color: "gray" }}>
                {"Integrations"}
              </Typography>
              <MenuList dense>
                <CalendarApiMenuItem provider={"google"} enabled={apiIsEnabled("google")}>
                  <Typography ml={"1rem"}>{"Google Calendar"}</Typography>
                </CalendarApiMenuItem>
                <CalendarApiMenuItem provider={"apple"} enabled={apiIsEnabled("apple")}>
                  <Typography ml={"1rem"}>{"Apple Calendar"}</Typography>
                </CalendarApiMenuItem>
              </MenuList>
              <Divider />
              <Typography variant="h4" sx={{ ml: 1, mt: 1, color: "gray" }}>
                {"Calendars"}
              </Typography>
              <MenuList dense>
                {calendars?.map((calendar) => (
                  <CalendarMenuItem key={calendar.id} calendar={calendar}>
                    <Typography ml={"1rem"}>{calendar.name}</Typography>
                  </CalendarMenuItem>
                ))}
              </MenuList>
              <Divider />
              <MenuItem
                onClick={() => alert("Not yet implemeneted")}
                sx={{ textAlign: "center", justifyContent: "center" }}
              >
                {"Manage calendars"}
              </MenuItem>
            </Menu>
            <IconButton
              title={!fullScreen ? `Expand to full screen` : `Exit full screen`}
              onClick={() => setFullScreen(!fullScreen)}
            >
              {!fullScreen ? <ZoomOutMapIcon /> : <CloseFullscreenIcon />}
            </IconButton>
          </Box>
        </Box>
      )}
      <Box flex={"1 1 auto"} minHeight={0}>
        <DayViewer data={data} {...commonViewProps} hidden={view != "day"} />
        <WeekViewer data={data} {...commonViewProps} hidden={view != "week"} />
        <MonthViewer data={data} {...commonViewProps} hidden={view != "month"} />
      </Box>
    </Box>
  );
  if (fullScreen) return createPortal(renderedComponent, document.body);
  return renderedComponent;
};

export default CalendarViewer;
