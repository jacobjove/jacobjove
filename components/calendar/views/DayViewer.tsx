import EventEditingDialog from "@/components/calendar/EventEditingDialog";
import EventSlot from "@/components/calendar/EventSlot";
import { ViewerProps } from "@/components/calendar/views/props";
import DateContext from "@/components/DateContext";
import DateSelector from "@/components/dates/DateSelector";
import { CalendarEvent } from "@/graphql/schema";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  addMinutes,
  differenceInMinutes,
  isBefore,
  isSameDay,
  parseISO,
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

const TIME_MARKER_JUT_PX = 8;

const Root = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
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
    width: `${TIME_MARKER_JUT_PX}px`,
  },
  "& .calendar-event-slot": {
    display: "flex",
    borderTop: "1px solid rgba(224, 224, 224, 1)",
  },
  "& .past": {
    background:
      "repeating-linear-gradient(-55deg, rgba(224, 224, 224, 0.9), rgba(224, 224, 224, 0.9) 1px, transparent 1px, transparent 20px)",
    // backgroundImage:
    //   "linear-gradient(to right, rgba(224, 224, 224, 1), rgba(224, 224, 224, 0.9), rgba(224, 224, 224, 0.7), rgba(224, 224, 224, 0))",
    opacity: 0.5,
    "&.hovered": {
      backgroundColor: "rgba(224, 224, 224, 1)",
      cursor: "pointer",
    },
    "& .event": {
      border: "1px solid lightgray",
    },
  },
}));

const DayViewer: FC<ViewerProps> = (props: ViewerProps) => {
  const {
    selectedDate,
    setSelectedDate,
    initialEventFormData,
    setInitialEventFormData,
    defaultCalendar,
    includeDateSelector,
    hidden,
    data,
  } = props;
  const { calendarEvents } = data;
  const date = useContext(DateContext);
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  const [eventDialogOpen, setEventEditingDialogOpen] = useState(false);

  const dayStart = zeroToHour(date, START_HOUR);
  const allDayBoxHeight = HALF_HOUR_HEIGHT;
  const currentTimeOffsetPx =
    (HOUR_HEIGHT / 60) * differenceInMinutes(date, dayStart) + HALF_HOUR_HEIGHT;

  // TODO: create default calendar when user is created; ensure a user has 1+ calendars.
  const primaryCalendarId = defaultCalendar?.id ?? calendarEvents?.[0]?.calendarId; // calendars.find((c) => c.isPrimary);

  const isPast = isBefore(selectedDate, date) && !isSameDay(selectedDate, date);

  useEffect(() => {
    // Scroll to the current time.
    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) {
      scrollableDiv.scrollTo({
        top: currentTimeOffsetPx - HOUR_HEIGHT * 1.5,
        behavior: "smooth",
      });
    }
  }, [currentTimeOffsetPx]);
  return (
    <Root className={`${hidden ? "hidden" : ""}`}>
      {includeDateSelector && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderBottom="1px solid rgba(224, 224, 224, 1)"
        >
          <DateSelector
            date={selectedDate}
            setDate={setSelectedDate}
            onDateChange={setSelectedDate}
          />
        </Box>
      )}
      <Box display="flex" position="relative" flex="0 0 auto">
        <div className="time-labels-column">
          <Box
            className="time-label"
            height={`${allDayBoxHeight}px`}
            borderBottom="1px solid rgba(224, 224, 224, 1)"
          >
            All Day
          </Box>
        </div>
        <div className={`calendar-slots-column`}>
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
      <Box
        display="flex"
        ref={scrollableDivRef}
        position="relative"
        sx={{
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
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
        <div className={`calendar-slots-column`}>
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
                    <Box key={j} className="calendar-event-slot" height={`${HALF_HOUR_HEIGHT}px`}>
                      <Box className="border-trick-box" />
                      <EventSlot
                        date={eventSlotDate}
                        past={isPast}
                        view="day"
                        events={eventSlotEvents}
                        defaultCalendarId={primaryCalendarId}
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
                              calendarId: initialEventFormData.calendarId ?? primaryCalendarId,
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
          {selectedDate < new Date() && isSameDay(date, selectedDate) && (
            <Box
              className="past"
              position="absolute"
              width="100%"
              borderBottom={`1px solid red`}
              top={0}
              height={`${currentTimeOffsetPx}px`}
              maxHeight={"100%"}
              left={`${TIME_MARKER_JUT_PX}px`}
              zIndex={1}
            />
          )}
          <EventEditingDialog
            open={eventDialogOpen}
            setOpen={setEventEditingDialogOpen}
            event={initialEventFormData}
          />
        </div>
      </Box>
    </Root>
  );
};

export default DayViewer;

const zeroToHour = (date: Date, hour: number) => {
  return setHours(setMinutes(setSeconds(date, 0), 0), hour);
};

const convertHourAndMinutesToTimeString = (hour: number, minutes = 0) => {
  const suffix = hour >= 12 ? "PM" : "AM";
  return `${((hour + 11) % 12) + 1}:${minutes.toString().padStart(2, "0")} ${suffix}`;
};
