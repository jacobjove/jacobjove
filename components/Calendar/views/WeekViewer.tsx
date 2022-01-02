import EventEditingDialog from "@/components/calendar/EventEditingDialog";
import EventSlot from "@/components/calendar/EventSlot";
import { ViewerProps } from "@/components/calendar/views/props";
import DateContext from "@/components/DateContext";
import { CalendarEvent } from "@/graphql/schema";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import {
  addMinutes,
  differenceInMinutes,
  getDay,
  parseISO,
  setDay,
  setHours,
  setMinutes,
  setSeconds,
} from "date-fns";
import { FC, Fragment, useContext, useEffect, useRef, useState } from "react";

const START_HOUR = 7;
const END_HOUR = 23;
const NUM_HOURS = END_HOUR - START_HOUR;
const HALF_HOUR_HEIGHT = 48; // Must be divisible by 2.
const HOUR_HEIGHT = HALF_HOUR_HEIGHT * 2;

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

const WeekViewer: FC<ViewerProps> = (props: ViewerProps) => {
  const { selectedDate, hidden, data: calendarEvents, session } = props;
  const date = useContext(DateContext);
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const [eventDialogOpen, setEventEditingDialogOpen] = useState(false);
  const [initialEventFormData, setInitialEventFormData] = useState({
    title: "",
    start: date,
    end: date ? addMinutes(date, 29) : null,
    allDay: false,
    notes: "",
    calendarId: calendarEvents[0]?.calendarId ?? 1, // TODO: Get this from the user's default calendar.
  });
  const selectedDayIndex = getDay(selectedDate);
  const dayStart = zeroToHour(date, START_HOUR);
  const allDayBoxHeight = HALF_HOUR_HEIGHT;
  const currentTimeOffsetPx =
    (HOUR_HEIGHT / 60) * differenceInMinutes(date, dayStart) + HALF_HOUR_HEIGHT;

  // TODO: create default calendar when user is created; ensure a user has 1+ calendars.
  const primaryCalendarId = calendarEvents?.[0]?.calendarId; // calendars.find((c) => c.isPrimary);

  useEffect(() => {
    // Scroll to the current time.
    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      // console.log('Scrolling to', currentTimeOffsetPx);
      // console.log('Before', scrollableDiv.scrollTop);
      scrollableDiv.scrollTo({ top: currentTimeOffsetPx - HOUR_HEIGHT, behavior: "smooth" });
      // console.log('After', scrollableDiv.scrollTop);
    }
  }, [currentTimeOffsetPx]);
  if (!session?.user) {
    return <Skeleton sx={{ height: "100%", maxHeight: "80vh" }} variant="rectangular" />;
  }
  const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <Root className={`${hidden ? "hidden" : ""}`}>
      <Box display="flex">
        <div className="time-labels-column">
          <Box
            className="time-label"
            height={`1.5rem`}
            borderBottom="1px solid rgba(224, 224, 224, 1)"
          />
        </div>
        <div className="calendar-slots-column">
          <Box height={`1.5rem`} borderBottom="1px solid rgba(224, 224, 224, 1)" display="flex">
            <div className="border-trick-box" />
            <Box flexGrow={1} display="flex">
              {DAYS_OF_WEEK.map((day, i) => {
                return (
                  <Box key={i} flexGrow={1} textAlign={"center"}>
                    <Typography fontSize="0.9rem">{day}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </div>
      </Box>
      <Box display="flex">
        <div className="time-labels-column">
          <Box
            className="time-label"
            height={`${allDayBoxHeight}px`}
            borderBottom="1px solid rgba(224, 224, 224, 1)"
          >
            All Day
          </Box>
        </div>
        <div className="calendar-slots-column">
          <Box
            height={`${allDayBoxHeight}px`}
            borderBottom="1px solid rgba(224, 224, 224, 1)"
            display="flex"
          >
            <div className="border-trick-box" />
            <Box flexGrow={1} />
          </Box>
        </div>
      </Box>
      <Box display="flex" maxHeight="90vh" overflow={"scroll"} ref={scrollableDivRef}>
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
        <Box display="flex" flexGrow={1}>
          {DAYS_OF_WEEK.map((_, dayIndex) => {
            return (
              <div key={dayIndex} className="calendar-slots-column">
                <Box height={`${HALF_HOUR_HEIGHT}px`} display="flex">
                  <div className="border-trick-box" />
                  <Box flexGrow={1} />
                </Box>
                {[...Array(NUM_HOURS)].map((_, i) => {
                  return (
                    <Fragment key={i}>
                      {[...Array(2)].map((_, j) => {
                        // console.log(">>>>>", "day", dayIndex, "hour", i, "min", j * 30);
                        // console.log(selectedDate.getDay() + dayIndex - selectedDayIndex);
                        const eventSlotDate = setDay(
                          setHours(setMinutes(setSeconds(selectedDate, 0), j * 30), START_HOUR + i),
                          selectedDate.getDay() + dayIndex - selectedDayIndex
                        );
                        const eventSlotEvents = calendarEvents.filter((event: CalendarEvent) => {
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
                          <Box
                            key={j}
                            className="calendar-event-slot"
                            height={`${HALF_HOUR_HEIGHT}px`}
                          >
                            <Box className="border-trick-box" />
                            <EventSlot
                              date={eventSlotDate}
                              view="week"
                              events={eventSlotEvents}
                              calendarId={primaryCalendarId}
                              onClick={(e) => {
                                // Only trigger if the click was actually on the slot. This check
                                // allows us to avoid stopping propagation on click events for
                                // other elements in the slot.
                                if (e.target === e.currentTarget) {
                                  setInitialEventFormData({
                                    title: initialEventFormData.title ?? "",
                                    start: eventSlotDate,
                                    end: addMinutes(eventSlotDate, 29),
                                    allDay: false,
                                    notes: initialEventFormData.notes ?? "",
                                    calendarId:
                                      initialEventFormData.calendarId ?? primaryCalendarId,
                                  });
                                  setEventEditingDialogOpen(true);
                                }
                              }}
                            />
                          </Box>
                        );
                      })}
                    </Fragment>
                  );
                })}
              </div>
            );
          })}
          <EventEditingDialog
            open={eventDialogOpen}
            setOpen={setEventEditingDialogOpen}
            event={initialEventFormData}
          />
        </Box>
      </Box>
    </Root>
  );
};

export default WeekViewer;

const zeroToHour = (date: Date, hour: number) => {
  return setHours(setMinutes(setSeconds(date, 0), 0), hour);
};

const convertHourAndMinutesToTimeString = (hour: number, minutes = 0) => {
  const suffix = hour >= 12 ? "PM" : "AM";
  return `${((hour + 11) % 12) + 1}:${minutes.toString().padStart(2, "0")} ${suffix}`;
};
