import DateSelector from "@/components/Calendar/DateSelector";
import EventCreationDialog from "@/components/Calendar/EventCreationDialog";
import EventSlot from "@/components/Calendar/EventSlot";
import { Calendar, CalendarEvent } from "@/graphql/schema";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import {
  addMinutes,
  differenceInMinutes,
  isSameDay,
  parseISO,
  setHours,
  setMinutes,
  setSeconds,
} from "date-fns";
import { Session } from "next-auth";
import { FC, Fragment, useEffect, useRef, useState } from "react";

// import { google } from 'googleapis';
// const googleCalendarClient = google.calendar('v3');

const START_HOUR = 7;
const END_HOUR = 22;
const NUM_HOURS = END_HOUR - START_HOUR;
const HALF_HOUR_HEIGHT = 48; // Must be divisible by 2.

const Root = styled("div")(() => ({
  "& *": {
    boxSizing: "border-box",
  },
  "& .time-label": {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    paddingRight: "0.5rem",
    fontFamily: "Roboto, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.7rem",
    lineHeight: "1.66",
    whiteSpace: "nowrap",
    color: "rgba(0, 0, 0, 0.6)",
    minWidth: "3.5rem",
  },
  "& .calendar-slots-column": {
    flexGrow: 1,
    position: "relative",
    cursor: "pointer",
    scrollBehavior: "smooth",
  },
  "& .border-trick-box": {
    borderRight: "1px solid rgba(224, 224, 224, 1)",
    width: "0.5rem",
  },
  "& .calendar-event-slot": {
    display: "flex",
    borderTop: "1px solid rgba(224, 224, 224, 1)",
  },
}));

interface CalendarProps {
  date: Date;
  setDate: (date: Date) => void;
  calendars: (Calendar & {
    events: CalendarEvent[];
  })[];
  session: Session;
}

const CalendarViewer: FC<CalendarProps> = (props: CalendarProps) => {
  const { date, setDate, calendars: initialCalendars, session } = props;
  // console.log("user:", session?.user);
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const [selectedDate, setSelectedDate] = useState(date);
  const [calendars, setCalendars] = useState(initialCalendars);
  // const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [eventCreationDialogOpen, setEventCreationDialogOpen] = useState(false);
  const [eventCreationStartTime, setEventCreationStartTime] = useState<Date | null>(date);
  const [eventCreationEndTime, setEventCreationEndTime] = useState<Date | null>(
    eventCreationStartTime ? addMinutes(eventCreationStartTime, 30) : null
  );

  const dayStart = zeroToHour(date, START_HOUR);
  const allDayBoxHeight = HALF_HOUR_HEIGHT * 1.5;
  const currentTimeOffsetPx =
    ((HALF_HOUR_HEIGHT * 2) / 60) * differenceInMinutes(date, dayStart) +
    allDayBoxHeight +
    HALF_HOUR_HEIGHT;

  const primaryCalendar = calendars[0]; // calendars.find((c) => c.isPrimary);

  const events: CalendarEvent[] = [];
  calendars.forEach((calendar) => {
    calendar.events
      // TODO: what about multi-day events?
      .filter((event: CalendarEvent) => isSameDay(parseISO(event.start), selectedDate))
      .forEach((event: CalendarEvent) => {
        console.log(">", event.title, event.start);
        events.push(event);
      });
  });

  useEffect(() => {
    // Scroll to the current time.
    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      // console.log('Scrolling to', currentTimeOffsetPx);
      // console.log('Before', scrollableDiv.scrollTop);
      scrollableDiv.scrollTo({ top: currentTimeOffsetPx, behavior: "smooth" });
      // console.log('After', scrollableDiv.scrollTop);
    }
  }, [currentTimeOffsetPx]);
  useEffect(() => {
    // Update the current time every minute.
    const intervalId = setInterval(function () {
      setDate(new Date());
    }, 1000 * 60);
    // Clean up when the component unmounts.
    return function cleanup() {
      clearInterval(intervalId);
    };
  }, [setDate]);
  // useEffect(() => {
  //   // Set the events to display on the calendar.
  //   console.log("setting events to display on calendar......");
  //   const _events: CalendarEvent[] = [];
  //   calendars.forEach((calendar) => {
  //     calendar.events
  //       // TODO: what about multi-day events?
  //       .filter((event: CalendarEvent) => isSameDay(parseISO(event.start), selectedDate))
  //       .forEach((event: CalendarEvent) => {
  //         console.log(">", event.title, event.start);
  //         _events.push(event);
  //       });
  //   });
  //   setEvents(_events);
  // }, [calendars, selectedDate]);
  if (!session?.user) {
    return (
      <Skeleton
        sx={{ height: "100%", maxHeight: "80vh" }}
        variant="rectangular"
        // width={210}
        // height={118}
      />
    );
  }
  return (
    <Root>
      <Toolbar sx={{ width: "100%", borderBottom: "1px solid rgba(224, 224, 224, 1)" }}>
        <DateSelector date={selectedDate} onDateChange={setSelectedDate} />
        <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
          <Button variant="text">
            <GoogleIcon
              sx={{ color: "lightgray" }}
              onClick={() => {
                console.log("connecting to google calendar...");
              }}
            />
          </Button>
          <Button variant="text">
            <AppleIcon
              sx={{ color: "lightgray" }}
              onClick={() => {
                console.log("connecting to apple calendar...");
              }}
            />
          </Button>
        </Box>
      </Toolbar>
      <Box display="flex">
        <div className="time-labels-column">
          <Box
            className="time-label"
            height={`${HALF_HOUR_HEIGHT * 2}px`}
            borderBottom="1px solid rgba(224, 224, 224, 1)"
          >
            All Day
          </Box>
        </div>
        <div className="calendar-slots-column">
          <Box
            height={`${HALF_HOUR_HEIGHT * 2}px`}
            borderBottom="1px solid rgba(224, 224, 224, 1)"
            display="flex"
          >
            <div className="border-trick-box" />
            <Box flexGrow={1} />
          </Box>
        </div>
      </Box>
      <Box display="flex" maxHeight="60vh" overflow={"scroll"} ref={scrollableDivRef}>
        <div className="time-labels-column">
          <Box height={`${HALF_HOUR_HEIGHT / 2}px`} />
          {[...Array(NUM_HOURS)].map((_, i) => (
            <Fragment key={i}>
              <Box className="time-label" height={`${HALF_HOUR_HEIGHT}px`}>
                {convertHourAndMinutesToTimeString(START_HOUR + i)}
              </Box>
              <Box className="time-label" height={`${HALF_HOUR_HEIGHT}px`}>
                {convertHourAndMinutesToTimeString(START_HOUR + i, 30)}
              </Box>
            </Fragment>
          ))}
        </div>
        <div className="calendar-slots-column">
          <Box height={`${HALF_HOUR_HEIGHT}px`} display="flex">
            <div className="border-trick-box" />
            <Box flexGrow={1} />
          </Box>
          {[...Array(NUM_HOURS)].map((_, i) => {
            return (
              <Fragment key={i}>
                {[...Array(2)].map((_, j) => {
                  const eventSlotDate = setHours(
                    setMinutes(setSeconds(selectedDate, 0), j * 30),
                    START_HOUR + i
                  );
                  const eventSlotEvents = events.filter((event: CalendarEvent) => {
                    const diff = differenceInMinutes(
                      parseISO(event.start),
                      eventSlotDate,
                      // Rounding method options are round, ceil, floor, and trunc (default).
                      // The default rounding method results in diffs that are 1 smaller
                      // than expected; e.g., 29 rather than 30, causing a 2:30 event to be
                      // included in the 2:00 slot.
                      { roundingMethod: "round" } // ceil also works
                    );
                    // console.log("Inspecting event", event.title, event.start, event.end, diff, Math.abs(diff) < 30 && diff > 0);
                    return Math.abs(diff) < 30 && diff >= 0;
                  });
                  return (
                    <Box key={j} className="calendar-event-slot" height={`${HALF_HOUR_HEIGHT}px`}>
                      <Box className="border-trick-box" />
                      <EventSlot
                        date={eventSlotDate}
                        events={eventSlotEvents}
                        calendarId={primaryCalendar?.id}
                        onClick={(e) => {
                          console.log(e);
                          setEventCreationStartTime(eventSlotDate);
                          setEventCreationEndTime(addMinutes(eventSlotDate, 30));
                          setEventCreationDialogOpen(true);
                        }}
                      />
                    </Box>
                  );
                })}
              </Fragment>
            );
          })}
          {isSameDay(date, selectedDate) && (
            <Box
              position="absolute"
              height="1px"
              width="100%"
              bgcolor={"red"}
              top={`${currentTimeOffsetPx}px`}
              zIndex={1000}
            />
          )}
          <EventCreationDialog
            open={eventCreationDialogOpen}
            setOpen={setEventCreationDialogOpen}
            startTime={eventCreationStartTime}
            setStartTime={setEventCreationStartTime}
            endTime={eventCreationEndTime}
            setEndTime={setEventCreationEndTime}
          />
        </div>
      </Box>
    </Root>
  );
};

export default CalendarViewer;

const zeroToHour = (date: Date, hour: number) => {
  return setHours(setMinutes(setSeconds(date, 0), 0), hour);
};

const convertHourAndMinutesToTimeString = (hour: number, minutes = 0) => {
  const suffix = hour >= 12 ? "PM" : "AM";
  return `${((hour + 11) % 12) + 1}:${minutes.toString().padStart(2, "0")} ${suffix}`;
};
