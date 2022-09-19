import { gql } from "@apollo/client";
import AppleIcon from "@mui/icons-material/Apple";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import Check from "@mui/icons-material/Check";
import GoogleIcon from "@mui/icons-material/Google";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WarningIcon from "@mui/icons-material/Warning";
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
import CalendarApiProviderDialog from "@web/components/calendar/CalendarApiProviderDialog";
import { CalendarLegendItems } from "@web/components/calendar/CalendarLegend";
import DayViewer from "@web/components/calendar/views/DayViewer";
import MonthViewer from "@web/components/calendar/views/MonthViewer";
import { CalendarProps } from "@web/components/calendar/views/props";
import WeekViewer from "@web/components/calendar/views/WeekViewer";
import DateContext from "@web/components/contexts/DateContext";
import { useUser } from "@web/components/contexts/UserContext";
import DateSelector from "@web/components/dates/DateSelector";
import FullScreenExpandableComponent from "@web/components/fullscreen/FullScreenExpandableComponent";
import FullScreenToggleButton from "@web/components/fullscreen/FullScreenToggleButton";
import { calendarFragment } from "@web/generated/graphql/fragments/calendar.fragment";
import { calendarEventFragment } from "@web/generated/graphql/fragments/calendarEvent.fragment";
import { providerIsEnabledForUser } from "@web/utils/calendar/providers";
import { getHours } from "date-fns";
import { bindMenu, bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { Dispatch, FC, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";

const ICON_MAP = {
  google: GoogleIcon,
  apple: AppleIcon,
};

export const fragment = gql`
  fragment CalendarViewer on Query {
    calendars {
      ...CalendarFragment
    }
    calendarEvents {
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
  const { user } = useUser();
  const dialogState = usePopupState({
    variant: "popover",
    popupId: `${provider}-calendar-api-dialog`,
  });
  const Icon = ICON_MAP[provider];
  const iconElement = <Icon sx={{ color: "lightgray" }} />;
  const apiIsEnabled = useMemo(() => {
    if (!user) return false;
    const integrationIsEnabled = providerIsEnabledForUser(provider, user);
    const connectedCalendars = user?.calendars?.filter(
      (calendar) => calendar.provider === provider && calendar.enabled
    );
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
  selectedDateState: [Date, Dispatch<Date>];
  defaultView?: ViewMode;
};

const initializeSelectedCalendarIds = (calendarIds: string[]) => calendarIds;

const selectedCalendarIdsReducer = (
  state: string[],
  action: { type: "add" | "remove" | "init"; value: string[] }
) => {
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
  const { defaultView, ...rest } = props;
  const { user } = useUser();
  const date = useContext(DateContext);
  const [selectedDate, setSelectedDate] = props.selectedDateState;
  const viewedHourState = useState<number>(getHours(date));
  const [fullScreen, setFullScreen] = useState(false);
  const [view, setView] = useState<ViewMode>(defaultView ?? "day");

  const eventEditingDialogState = usePopupState({
    variant: "popover",
    popupId: `event-editing-dialog`,
  });

  const menuState = usePopupState({ variant: "popper", popupId: `calendar-menu` });

  // Exclude calendars that are not enabled or have been archived.
  const enabledCalendars = useMemo(() => {
    // prettier-ignore
    return user ? (
      user.calendars?.filter((calendar) => (
        calendar.enabled &&
        !calendar.archivedAt &&
        (!calendar.provider || providerIsEnabledForUser(calendar.provider as CalendarProvider, user))
      ))
    ) : [];
  }, [user]);

  const [selectedCalendarIds, dispatchCalendarIds] = useReducer(
    selectedCalendarIdsReducer,
    [],
    initializeSelectedCalendarIds
  );

  // Note: This is just a way to make sure the initialization logic only runs once. An
  // alternative might be to explicitly check for `enabledCalendars` being undefined
  // (rather than checking for `enabledCalendars?.length` being falsy), since it should
  // only be undefined until the initialization logic runs. (This would need to be tested.)
  const initialCalendarSelectionComplete = useRef(false);

  useEffect(() => {
    if (!initialCalendarSelectionComplete.current && enabledCalendars?.length) {
      const calendarIdsToSelect = enabledCalendars.map((calendar) => calendar.id);
      dispatchCalendarIds({ type: "init", value: calendarIdsToSelect });
      initialCalendarSelectionComplete.current = true;
    }
  }, [enabledCalendars]);

  if (!user) return null;

  const defaultCalendar = enabledCalendars[0]; // TODO
  if (!defaultCalendar) console.error("CalendarViewer: No default calendar!");

  const commonViewProps = {
    ...rest,
    selectedDate: selectedDate || date,
    setSelectedDate,
    eventEditingDialogState,
    // dispatchInitialEventFormData,
    defaultCalendar,
  };
  // console.log("Rendering calendar viewer!");
  return (
    <FullScreenExpandableComponent fullScreenState={[fullScreen, setFullScreen]}>
      <Box display="flex" flexDirection={"column"} height={"100%"} flexGrow={1} maxHeight={"100%"}>
        {!props.collapseMenu && (
          <Box
            flex={"0 0 auto"}
            display="flex"
            width={"100%"}
            maxHeight={"100%"}
            alignItems={"center"}
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
                sx={{ "& button": { px: "5px", py: "3px" } }}
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
                {(enabledCalendars?.length ?? 0) >= 1 && (
                  <div>
                    <Typography variant="h4" sx={{ ml: 1, mt: "0.5rem", color: "gray" }}>
                      {"Calendars"}
                    </Typography>
                    <CalendarLegendItems
                      calendars={enabledCalendars}
                      selectedCalendarIds={selectedCalendarIds}
                      dispatchCalendarIds={dispatchCalendarIds}
                    />
                    <Divider />
                  </div>
                )}
                <MenuItem
                  onClick={() => alert("Not yet implemeneted")}
                  sx={{ textAlign: "center", justifyContent: "center" }}
                >
                  {"Manage calendars"}
                </MenuItem>
              </Menu>
              <FullScreenToggleButton fullScreenState={[fullScreen, setFullScreen]} />
            </Box>
          </Box>
        )}
        <Box flex={"1 1 auto"} minHeight={0} position="relative">
          {view === "day" && (
            <DayViewer
              viewedHourState={viewedHourState}
              {...commonViewProps}
              hidden={view != "day"}
            />
          )}
          {view === "week" && (
            <WeekViewer
              viewedHourState={viewedHourState}
              {...commonViewProps}
              hidden={view != "week"}
            />
          )}
          {view === "month" && <MonthViewer {...commonViewProps} hidden={view != "month"} />}
          {/* TODO: After prettifying the legend, change `>= 1` to `> 1` so that the legend is only displayed if there are multiple calendars */}
          {/* {(enabledCalendars?.length ?? 0) >= 1 && (
          <Box position="absolute" bottom={1} right={1} zIndex={1e14}>
            <CalendarLegend
              calendars={enabledCalendars}
              selectedCalendarIds={selectedCalendarIds}
              dispatchCalendarIds={dispatchCalendarIds}
            />
          </Box>
        )} */}
        </Box>
      </Box>
    </FullScreenExpandableComponent>
  );
};

export default CalendarViewer;
