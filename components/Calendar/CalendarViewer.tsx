import DayViewer from "@/components/Calendar/views/DayViewer";
import MonthViewer from "@/components/Calendar/views/MonthViewer";
import { CalendarProps } from "@/components/Calendar/views/props";
import WeekViewer from "@/components/Calendar/views/WeekViewer";
import { Calendar } from "@/graphql/schema";
import AppleIcon from "@mui/icons-material/Apple";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import GoogleIcon from "@mui/icons-material/Google";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FC, useState } from "react";

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

const CalendarViewer: FC<CalendarProps> = (props: CalendarProps) => {
  const [view, setView] = useState<ViewMode>("day");
  const [selectedDate, setSelectedDate] = useState<Date | null>(props.date);
  const [calendars, setCalendars] = useState<Calendar[]>([]);
  const handleViewTabChange = (event: React.SyntheticEvent, newValue: 0 | 1 | 2) => {
    setView(newValue === 0 ? "day" : newValue === 1 ? "week" : "month");
  };
  const viewTabIndex = view === "day" ? 0 : view === "week" ? 1 : 2;
  const isMobile = useMediaQuery("(max-width: 600px)");
  console.log(props.collapseViewMenu);
  return (
    <>
      <Grid
        container
        spacing={1}
        alignItems="end"
        justifyContent={"space-between"}
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
              {...(isMobile ? { title: "Day" } : { label: "Day" })}
              sx={{ padding: "0.5rem 0.75rem 0.35rem", minWidth: "auto", minHeight: "auto" }}
            />
            <Tab
              icon={<CalendarViewWeekIcon />}
              iconPosition="start"
              {...(isMobile ? { title: "Week" } : { label: "Week" })}
              sx={{ padding: "0.5rem 0.75rem 0.35rem", minWidth: "auto", minHeight: "auto" }}
            />
            <Tab
              icon={<CalendarViewMonthIcon />}
              iconPosition="start"
              {...(isMobile ? { title: "Month" } : { label: "Month" })}
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
        </Grid>
      </Grid>
      <div>
        <DayViewer
          {...props}
          selectedDate={selectedDate || props.date}
          setSelectedDate={setSelectedDate}
          hidden={view != "day"}
        />
        <WeekViewer
          {...props}
          selectedDate={selectedDate || props.date}
          setSelectedDate={setSelectedDate}
          hidden={view != "week"}
        />
        <MonthViewer
          {...props}
          selectedDate={selectedDate || props.date}
          setSelectedDate={setSelectedDate}
          hidden={view != "month"}
        />
      </div>
    </>
  );
};

export default CalendarViewer;
