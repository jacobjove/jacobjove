import { HALF_HOUR_HEIGHT, HOUR_HEIGHT, START_HOUR } from "@/components/calendar/constants";
import EventBox from "@/components/calendar/EventBox";
import EventEditingDialog from "@/components/calendar/EventEditingDialog";
import EventSlot from "@/components/calendar/EventSlot";
import TimeLabelsColumn from "@/components/calendar/TimeLabelsColumn";
import { ViewerProps } from "@/components/calendar/views/props";
import DateContext from "@/components/DateContext";
import DateSelector from "@/components/dates/DateSelector";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
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
import { FC, useContext, useEffect, useRef, useState } from "react";

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
    paddingRight: "0.25rem",
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
    width: "8px",
  },
  "& .calendar-event-slot": {
    display: "flex",
    "&:not(:first-of-type)": {
      borderTop: "1px solid rgba(224, 224, 224, 1)",
    },
  },
  "& .past": {
    background:
      // diagonal gray lines
      "repeating-linear-gradient(-55deg, rgb(224, 224, 224), rgb(224, 224, 224) 1px, transparent 1px, transparent 20px)",
    backgroundOrigin: "content-box",
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

const DayViewer: FC<ViewerProps> = ({
  selectedDate,
  setSelectedDate,
  initialEventFormData,
  setInitialEventFormData,
  defaultCalendar,
  includeDateSelector,
  hidden,
  data,
  loading,
}: ViewerProps) => {
  const { calendarEvents } = data;
  const date = useContext(DateContext);
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const [eventDialogOpen, setEventEditingDialogOpen] = useState(false);

  const dayStart = zeroToHour(date, START_HOUR);
  const allDayBoxHeight = HALF_HOUR_HEIGHT;
  const currentTimeDiffInMinutes = differenceInMinutes(date, dayStart);
  console.log(currentTimeDiffInMinutes, `${currentTimeDiffInMinutes / 60} hours`);
  const minuteHeight = HALF_HOUR_HEIGHT / 30;
  const currentTimeOffsetPx = minuteHeight * currentTimeDiffInMinutes;

  // TODO: create default calendar when user is created; ensure a user has 1+ calendars.
  const primaryCalendarId = defaultCalendar?.id ?? calendarEvents?.[0]?.calendarId; // calendars.find((c) => c.isPrimary);

  const isPast = isBefore(selectedDate, date) && !isSameDay(selectedDate, date);
  const filteredEvents = calendarEvents?.filter((event) => {
    return isSameDay(parseISO(event.start), selectedDate) && !event.archivedAt;
  });
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
      {loading ? (
        <Skeleton width="100%" height={HALF_HOUR_HEIGHT * 2 * 24} />
      ) : (
        <>
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
          {/* All day row */}
          <Box display="flex" position="relative" flex="0 0 auto">
            <div>
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
            <TimeLabelsColumn />
            <div className={`calendar-slots-column`}>
              {[...Array(24 * 2)].map((_, i) => {
                let hour, minutes;
                if (i % 2 === 0) {
                  hour = START_HOUR + i;
                  minutes = 0;
                } else {
                  hour = START_HOUR + i - 1;
                  minutes = 30;
                }
                const eventSlotDate = setHours(
                  setMinutes(setSeconds(selectedDate, 0), minutes),
                  hour
                );
                return (
                  <Box key={i} className="calendar-event-slot" height={`${HALF_HOUR_HEIGHT}px`}>
                    <EventSlot
                      date={eventSlotDate}
                      past={isPast}
                      view="day"
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
              {!!filteredEvents?.length &&
                filteredEvents.map((event, index) => {
                  if (!event.start || !event.end) {
                    console.error("Event missing start or end time: ", event);
                    return null;
                  }
                  console.log();
                  const eventStart = parseISO(event.start);
                  const eventEnd = parseISO(event.end);
                  const eventDurationInMinutes = differenceInMinutes(eventEnd, eventStart);
                  // Calculate styles.
                  const widthPercent = 100; // / numEvents - 2;
                  // const width = `100%`;
                  const width = `${widthPercent}%`;
                  const differenceFromDayStartInMinutes = differenceInMinutes(eventStart, dayStart);
                  const totalMinutesInDay = 24 * 60;
                  const topOffset = `${
                    (differenceFromDayStartInMinutes / totalMinutesInDay) * 100
                  }%`;
                  console.log(
                    differenceFromDayStartInMinutes,
                    differenceFromDayStartInMinutes / 60,
                    topOffset
                  );
                  const height = `${(eventDurationInMinutes / totalMinutesInDay) * 100}%`;
                  return null;
                  return (
                    <EventBox
                      key={index}
                      left={`${widthPercent * index + index}%`}
                      top={topOffset}
                      height={height}
                      zIndex={index}
                      width={width}
                      event={event}
                    />
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
                  paddingTop="2px"
                  paddingLeft="2px"
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
        </>
      )}
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
