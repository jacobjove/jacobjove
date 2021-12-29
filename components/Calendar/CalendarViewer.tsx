import DateSelector from "@/components/Calendar/DateSelector";
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
import Toolbar from "@mui/material/Toolbar";
import { FC, useState } from "react";

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
  const [selectedDate, setSelectedDate] = useState(props.date);
  const [calendars, setCalendars] = useState<Calendar[]>([]);
  const handleViewTabChange = (event: React.SyntheticEvent, newValue: 0 | 1 | 2) => {
    setView(newValue === 0 ? "day" : newValue === 1 ? "week" : "month");
  };
  const viewTabIndex = view === "day" ? 0 : view === "week" ? 1 : 2;
  console.log(">>> Rendering calendar with", view, viewTabIndex);
  return (
    <>
      <Toolbar sx={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }}>
        <Grid container spacing={1} alignItems="center" justifyContent={"space-between"}>
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
          <Grid item justifyContent={"center"}>
            <DateSelector date={selectedDate} onDateChange={setSelectedDate} />
          </Grid>
          <Grid item justifyContent={"center"}>
            <Tabs value={viewTabIndex} onChange={handleViewTabChange}>
              <Tab icon={<CalendarViewDayIcon />} label="Day" />
              <Tab icon={<CalendarViewWeekIcon />} label="Week" />
              <Tab icon={<CalendarViewMonthIcon />} label="Month" />
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
      {view === "day" && <DayViewer {...props} selectedDate={selectedDate} />}
      {view === "week" && <WeekViewer {...props} selectedDate={selectedDate} />}
      {view === "month" && <MonthViewer {...props} selectedDate={selectedDate} />}
    </>
  );
};

export default CalendarViewer;
