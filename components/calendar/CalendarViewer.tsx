import CalendarApiProviderDialog from "@/components/calendar/CalendarApiProviderDialog";
import CalendarLegend from "@/components/calendar/CalendarLegend";
import { eventDataReducer, initializeEventData } from "@/components/calendar/EventEditingDialog";
import DayViewer from "@/components/calendar/views/DayViewer";
import MonthViewer from "@/components/calendar/views/MonthViewer";
import { CalendarData, CalendarProps } from "@/components/calendar/views/props";
import WeekViewer from "@/components/calendar/views/WeekViewer";
import DateContext from "@/components/contexts/DateContext";
import UserContext from "@/components/contexts/UserContext";
import DateSelector from "@/components/dates/DateSelector";
import { calendarEventFragment, calendarFragment } from "@/graphql/fragments";
import { getCalendarScope } from "@/utils/calendar/providers";
import { gql } from "@apollo/client";
import AppleIcon from "@mui/icons-material/Apple";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import Check from "@mui/icons-material/Check";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import GoogleIcon from "@mui/icons-material/Google";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WarningIcon from "@mui/icons-material/Warning";
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
import { bindMenu, bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { FC, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ICON_MAP = {
  google: GoogleIcon,
  apple: AppleIcon,
};

export const fragment = gql`
  fragment CalendarViewer on Query {
    calendars(where: { userId: { equals: $userId } }) {
      ...CalendarFragment
    }
    calendarEvents(where: { calendar: { is: { userId: { equals: $userId } } } }) {
      ...CalendarEventFragment
    }
  }
  ${calendarFragment}
  ${calendarEventFragment}
`;

interface CalendarApiMenuItemProps extends MenuItemProps {
  provider: CalendarProvider;
}

const CalendarApiMenuItem: FC<CalendarApiMenuItemProps> = ({ provider, children, ...props }) => {
  const user = useContext(UserContext);
  const dialogState = usePopupState({ variant: "popover", popupId: `${provider}-calendar-dialog` });
  const Icon = ICON_MAP[provider];
  const iconElement = <Icon sx={{ color: "lightgray" }} />;
  const apiIsEnabled = useMemo(() => {
    const account = user?.accounts?.find((account) => account.provider === provider);
    const integrationIsEnabled = account?.scopes.includes(getCalendarScope(provider));
    const providedCalendars = user?.calendars.filter((calendar) => calendar.provider === provider);
    const connectedCalendars = providedCalendars?.filter((calendar) => calendar.enabled);
    return Boolean(integrationIsEnabled && connectedCalendars?.length);
  }, [user, provider]);
  props.sx = { display: "flex", alignItems: "center", ...props.sx };
  return (
    <>
      <MenuItem {...props} {...bindTrigger(dialogState)}>
        <ListItemIcon title={apiIsEnabled ? "Connected" : "Not connected"}>
          {apiIsEnabled ? <Check /> : <WarningIcon />}
        </ListItemIcon>
        {iconElement}
        {children}
      </MenuItem>
      <CalendarApiProviderDialog provider={provider} {...bindPopover(dialogState)} />
    </>
  );
};

type ViewMode = "day" | "week" | "month";

type CalendarViewerProps = Omit<CalendarProps, "data"> & {
  data: CalendarData;
  defaultView?: ViewMode;
};

const initializeSelectedCalendarIds = (calendarIds: number[]) => calendarIds;

const reducer = (state: number[], action: { type: "add" | "remove" | "init"; value: number[] }) => {
  switch (action.type) {
    case "add":
      return [...new Set([...state, ...action.value])];
    case "remove":
      return state.filter((id) => !action.value.includes(id));
    case "init":
      return initializeSelectedCalendarIds(action.value);
    default:
      throw new Error();
  }
};

const CalendarViewer: FC<CalendarViewerProps> = (props: CalendarViewerProps) => {
  const { loading, data: _data, defaultView, ...rest } = props;
  const user = useContext(UserContext);
  const date = useContext(DateContext);
  // Exclude calendars that are not enabled or have been archived.
  const enabledCalendars = _data.calendars?.filter(
    (calendar) =>
      calendar.enabled &&
      !calendar.archivedAt &&
      user?.accounts?.find(
        (account) =>
          account.provider === calendar.provider &&
          account.scopes.includes(getCalendarScope(calendar.provider))
      )
  );
  const defaultCalendar = enabledCalendars[0]; // TODO

  const [selectedCalendarIds, dispatchCalendarIds] = useReducer(
    reducer,
    [],
    initializeSelectedCalendarIds
  );
  // TODO: is this a good way to make the useEffect only run once?
  const initialCalendarSelectionComplete = useRef(false);
  useEffect(() => {
    if (!initialCalendarSelectionComplete.current && !loading && enabledCalendars?.length) {
      const calendarIdsToSelect = enabledCalendars.map((calendar) => calendar.id);
      dispatchCalendarIds({ type: "init", value: calendarIdsToSelect });
      initialCalendarSelectionComplete.current = true;
    }
  }, [loading, enabledCalendars]);

  // TODO: refactor how data is passed between calendar components?
  const data = {
    ..._data,
    calendarEvents: _data.calendarEvents?.filter((event) =>
      selectedCalendarIds?.includes(event.calendarId)
    ),
  };

  const [fullScreen, setFullScreen] = useState(false);
  const [view, setView] = useState<ViewMode>(defaultView ?? "day");
  const [selectedDate, setSelectedDate] = useState<Date | null>(date);

  const menuState = usePopupState({ variant: "popper", popupId: `calendar-menu` });

  const [initialEventFormData, dispatchInitialEventFormData] = useReducer(
    eventDataReducer,
    {
      start: date,
      allDay: false,
      calendarId: defaultCalendar?.id,
    },
    initializeEventData
  );

  const commonViewProps = {
    ...rest,
    selectedDate: selectedDate || date,
    setSelectedDate,
    initialEventFormData,
    dispatchInitialEventFormData,
    initializeEventFormData: initializeEventData,
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
              zIndex: 1e13,
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
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Typography variant="h4" sx={{ ml: 1, color: "gray" }}>
                {"Integrations"}
              </Typography>
              <MenuList dense>
                <CalendarApiMenuItem provider={"google"}>
                  <Typography ml={"1rem"}>{"Google Calendar"}</Typography>
                </CalendarApiMenuItem>
                <CalendarApiMenuItem provider={"apple"}>
                  <Typography ml={"1rem"}>{"Apple Calendar"}</Typography>
                </CalendarApiMenuItem>
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
      <Box flex={"1 1 auto"} minHeight={0} position="relative">
        <DayViewer loading={loading} data={data} {...commonViewProps} hidden={view != "day"} />
        <WeekViewer loading={loading} data={data} {...commonViewProps} hidden={view != "week"} />
        <MonthViewer loading={loading} data={data} {...commonViewProps} hidden={view != "month"} />
        {/* TODO: After prettifying the legend, change `>= 1` to `> 1` so that the legend is only displayed if there are multiple calendars */}
        {(enabledCalendars?.length || 0) >= 1 && (
          <Box position="absolute" bottom={1} right={1} zIndex={1e14}>
            <CalendarLegend
              calendars={enabledCalendars}
              selectedCalendarIds={selectedCalendarIds}
              dispatchCalendarIds={dispatchCalendarIds}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
  if (fullScreen) return createPortal(renderedComponent, document.body);
  return renderedComponent;
};

export default CalendarViewer;
