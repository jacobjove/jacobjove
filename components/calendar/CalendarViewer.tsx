import DayViewer from "@/components/calendar/views/DayViewer";
import MonthViewer from "@/components/calendar/views/MonthViewer";
import { CalendarData, CalendarProps } from "@/components/calendar/views/props";
import WeekViewer from "@/components/calendar/views/WeekViewer";
import DateContext from "@/components/DateContext";
import { calendarEventFragment, calendarFragment } from "@/graphql/fragments";
import { gql } from "@apollo/client";
import AppleIcon from "@mui/icons-material/Apple";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import GoogleIcon from "@mui/icons-material/Google";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import useMediaQuery from "@mui/material/useMediaQuery";
import { addMinutes } from "date-fns";
import Link from "next/link";
import { FC, useContext, useState } from "react";

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

type ViewMode = "day" | "week" | "month";

type CalendarViewerProps = Omit<CalendarProps, "data"> & {
  data: CalendarData;
  defaultView?: ViewMode;
};

const CalendarViewer: FC<CalendarViewerProps> = (props: CalendarViewerProps) => {
  const { data, defaultView, ...rest } = props;
  const { calendars } = data;
  const defaultCalendar = calendars[0]; // TODO
  const date = useContext(DateContext);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [view, setView] = useState<ViewMode>(defaultView ?? "day");
  const [selectedDate, setSelectedDate] = useState<Date | null>(date);
  const [selectedCalendarIds, setSelectedCalendarIds] = useState<number[]>(
    calendars.map((calendar) => calendar.id)
  );
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [initialEventFormData, setInitialEventFormData] = useState({
    title: "",
    start: date,
    end: date ? addMinutes(date, 29) : null,
    allDay: false,
    notes: "",
    calendarId: defaultCalendar?.id,
  });

  const handleViewTabChange = (event: React.SyntheticEvent, newValue: 0 | 1 | 2) => {
    setView(newValue === 0 ? "day" : newValue === 1 ? "week" : "month");
  };
  const viewTabIndex = view === "day" ? 0 : view === "week" ? 1 : 2;
  const displayCalendarViewLabels = !isMobile && false;
  const commonViewProps = {
    ...rest,
    selectedDate: selectedDate || date,
    setSelectedDate,
    initialEventFormData,
    setInitialEventFormData,
    defaultCalendar,
  };
  return (
    <Box display="flex" flexDirection={"column"} height={"100%"}>
      {!props.collapseViewMenu && (
        <Grid
          container
          flex={"0 0 auto"}
          justifyContent={"space-between"}
          width={"100%"}
          sx={{
            borderBottom: "1px solid rgba(224, 224, 224, 1)",
            display: props.collapseViewMenu ? "none" : "flex",
          }}
        >
          <Grid item justifyContent={"center"} alignItems={"end"} display={"flex"}>
            <Tabs value={viewTabIndex} onChange={handleViewTabChange} sx={{ minHeight: "auto" }}>
              <Tab
                icon={<CalendarViewDayIcon />}
                iconPosition="start"
                {...(!displayCalendarViewLabels ? { title: "Day" } : { label: "Day" })}
                sx={{ padding: "0.5rem 0.75rem 0.35rem", minWidth: "auto", minHeight: "auto" }}
              />
              <Tab
                icon={<CalendarViewWeekIcon />}
                iconPosition="start"
                {...(!displayCalendarViewLabels ? { title: "Week" } : { label: "Week" })}
                sx={{ padding: "0.5rem 0.75rem 0.35rem", minWidth: "auto", minHeight: "auto" }}
              />
              <Tab
                icon={<CalendarViewMonthIcon />}
                iconPosition="start"
                {...(!displayCalendarViewLabels ? { title: "Month" } : { label: "Month" })}
                sx={{ padding: "0.5rem 0.75rem 0.35rem", minWidth: "auto", minHeight: "auto" }}
              />
            </Tabs>
          </Grid>
          <Grid
            item
            display={"flex"}
            alignItems={"start"}
            justifyContent={"center"}
            position="relative"
            right="-0.6rem"
            sx={{
              "& button svg": {
                fontSize: "1.25rem",
              },
            }}
          >
            <IconButton
              title={`Display calendar menu`}
              id="calendar-menu-button-x"
              onClick={(e) => {
                setMenuAnchorEl(e.currentTarget);
                setMenuOpen(true);
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={menuOpen}
              onClose={() => {
                setMenuOpen(false);
              }}
              MenuListProps={{
                "aria-labelledby": "calendar-menu-button-x",
              }}
              keepMounted
            >
              <Link href="/app/routines">
                <a>
                  <MenuItem>
                    <IconButton
                      title={`Connect Google Calendar`}
                      onClick={() => {
                        console.log("connecting to google calendar...");
                      }}
                    >
                      <GoogleIcon sx={{ color: "lightgray" }} />
                    </IconButton>
                  </MenuItem>
                </a>
              </Link>
              <MenuItem>
                <IconButton
                  title={`Connect Apple Calendar`}
                  onClick={() => {
                    console.log("connecting to apple calendar...");
                  }}
                >
                  <AppleIcon sx={{ color: "lightgray" }} />
                </IconButton>
              </MenuItem>
              {calendars?.map((calendar) => (
                <MenuItem key={calendar.id}>
                  <Button
                    title={`Connect ${calendar.name}`}
                    onClick={() => {
                      console.log("connecting to calendar...");
                    }}
                  >
                    {calendar.name} {calendar.id}
                  </Button>
                </MenuItem>
              ))}
              <MenuItem
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Close
              </MenuItem>
            </Menu>
            <IconButton
              title={`Expand to full screen`}
              onClick={() => {
                console.log("Expanding calendar widget to full screen...");
              }}
            >
              <ZoomOutMapIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}
      <Box flex={"1 1 auto"} minHeight={0}>
        <DayViewer data={data} {...commonViewProps} hidden={view != "day"} />
        <WeekViewer data={data} {...commonViewProps} hidden={view != "week"} />
        <MonthViewer data={data} {...commonViewProps} hidden={view != "month"} />
      </Box>
    </Box>
  );
};

export default CalendarViewer;
