import DayViewer from "@/components/calendar/views/DayViewer";
import MonthViewer from "@/components/calendar/views/MonthViewer";
import { CalendarProps } from "@/components/calendar/views/props";
import WeekViewer from "@/components/calendar/views/WeekViewer";
import DateContext from "@/components/DateContext";
import { calendarEventFragment } from "@/graphql/fragments";
import { Calendar } from "@/graphql/schema";
import { gql } from "@apollo/client";
import AppleIcon from "@mui/icons-material/Apple";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import GoogleIcon from "@mui/icons-material/Google";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FC, useContext, useState } from "react";

// TODO?  https://mui.com/components/tabs/#unstyled
// import TabsUnstyled from '@mui/base/TabsUnstyled';
// import TabsListUnstyled from '@mui/base/TabUnstyled';
// import TabUnstyled from '@mui/base/TabUnstyled';
// import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';

// import { google } from 'googleapis';
// const googleCalendarClient = google.calendar('v3');

const START_HOUR = 7;
const END_HOUR = 23;
const NUM_HOURS = END_HOUR - START_HOUR;
const HALF_HOUR_HEIGHT = 48; // Must be divisible by 2.
const HOUR_HEIGHT = HALF_HOUR_HEIGHT * 2;

type ViewMode = "day" | "week" | "month";

export const fragment = gql`
  fragment CalendarViewer on Query {
    calendars(where: { userId: { equals: $userId } }) {
      id
    }
    calendarEvents(where: { calendar: { is: { userId: { equals: $userId } } } }) {
      ...CalendarEventFragment
    }
  }
  ${calendarEventFragment}
`;

const CalendarViewer: FC<CalendarProps> = (props: CalendarProps) => {
  const { data, ...rest } = props;
  const date = useContext(DateContext);
  const [view, setView] = useState<ViewMode>("day");
  const [selectedDate, setSelectedDate] = useState<Date | null>(date);
  const [calendars, setCalendars] = useState<Calendar[]>([]);
  const handleViewTabChange = (event: React.SyntheticEvent, newValue: 0 | 1 | 2) => {
    console.log("handleViewTabChange", newValue);
    setView(newValue === 0 ? "day" : newValue === 1 ? "week" : "month");
  };
  const viewTabIndex = view === "day" ? 0 : view === "week" ? 1 : 2;
  const isMobile = useMediaQuery("(max-width: 600px)");
  console.log(`Rendering calendar viewer with ${view} view ...`);
  const displayCalendarViewLabels = !isMobile && false;
  console.log("displayCalendarViewLabels", displayCalendarViewLabels);
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
          <Grid item justifyContent={"center"}>
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
          <Grid item justifyContent={"center"}>
            <IconButton
              title={`Connect Google Calendar`}
              onClick={() => {
                console.log("connecting to google calendar...");
              }}
            >
              <GoogleIcon sx={{ color: "lightgray", fontSize: "1rem" }} />
            </IconButton>
            <IconButton
              title={`Connect Apple Calendar`}
              onClick={() => {
                console.log("connecting to apple calendar...");
              }}
            >
              <AppleIcon sx={{ color: "lightgray", fontSize: "1.1rem" }} />
            </IconButton>
            <Button
              component="span"
              title={`Expand to full screen`}
              sx={{ marginLeft: "1rem", padding: 0, minWidth: 0, color: "gray" }}
              onClick={() => {
                console.log("Expanding calendar widget to full screen...");
              }}
            >
              <ZoomOutMapIcon sx={{ fontSize: "1.1rem" }} />
            </Button>
          </Grid>
        </Grid>
      )}
      <Box flex={"1 1 auto"} minHeight={0}>
        <DayViewer
          data={data}
          {...rest}
          selectedDate={selectedDate || date}
          setSelectedDate={setSelectedDate}
          hidden={view != "day"}
        />
        <WeekViewer
          data={data}
          {...rest}
          selectedDate={selectedDate || date}
          setSelectedDate={setSelectedDate}
          hidden={view != "week"}
        />
        <MonthViewer
          data={data}
          {...rest}
          selectedDate={selectedDate || date}
          setSelectedDate={setSelectedDate}
          hidden={view != "month"}
        />
      </Box>
    </Box>
  );
};

export default CalendarViewer;
