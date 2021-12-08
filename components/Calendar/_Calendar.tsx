import Box from "@mui/material/Box";
import React, { FC, Fragment } from "react";
import { styled } from "@mui/material/styles";

import DateSelector from "@/components/Calendar/DateSelector";
import Toolbar from "@mui/material/Toolbar";
import { Calendar, CalendarEvent } from "@/graphql/schema";
import { parseISO, setHours, setMinutes, setSeconds, differenceInMinutes } from "date-fns";
import EventSlot from "@/components/Calendar/EventSlot";

const START_HOUR = 7;
const END_HOUR = 20;
const NUM_HOURS = END_HOUR - START_HOUR;

const HOUR_HEIGHT = 48; // Must be divisible by 2.

const convertHourAndMinutesToTimeString = (hour: number, minutes = 0) => {
  const suffix = hour >= 12 ? "PM" : "AM";
  return `${((hour + 11) % 12) + 1}:${minutes.toString().padStart(2, "0")} ${suffix}`;
};

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
  },
  "& .calendar-slots-column": {
    flexGrow: 1,
    position: "relative",
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
  calendars: (Calendar & {
    events: CalendarEvent[];
  })[];
  onDateChange: (date: Date) => void;
}

const CalendarViewer: FC<CalendarProps> = (props: CalendarProps) => {
  const { date, calendars, onDateChange } = props;
  console.log("date", date, typeof date);
  const primaryCalendar = calendars[0]; // calendars.find((c) => c.isPrimary);

  // const calendarStart = setHours(setMinutes(setSeconds(date, 0), 0), START_HOUR);
  // const diff = date.getTime() - START_HOUR * 60 * 60 * 1000;
  // console.log("diff:", diff);
  // console.log("calendarStart:", calendarStart);

  const events: CalendarEvent[] = [];
  props.calendars.forEach((calendar) => {
    calendar.events.forEach((event: CalendarEvent) => {
      events.push(event);
    });
  });
  return (
    <Root>
      <Toolbar sx={{ width: "100%", borderBottom: "1px solid rgba(224, 224, 224, 1)" }}>
        <DateSelector date={date} onDateChange={onDateChange} />
      </Toolbar>
      <Box display="flex">
        <div className="time-labels-column">
          <Box
            className="time-label"
            height={`${HOUR_HEIGHT * 2}px`}
            borderBottom="1px solid rgba(224, 224, 224, 1)"
          >
            All Day
          </Box>
          <Box height={`${HOUR_HEIGHT / 2}px`} />
          {[...Array(NUM_HOURS)].map((_, i) => (
            <Fragment key={i}>
              <Box className="time-label" height={`${HOUR_HEIGHT}px`}>
                {convertHourAndMinutesToTimeString(START_HOUR + i)}
              </Box>
              <Box className="time-label" height={`${HOUR_HEIGHT}px`}>
                {convertHourAndMinutesToTimeString(START_HOUR + i, 30)}
              </Box>
            </Fragment>
          ))}
        </div>
        <div className="calendar-slots-column">
          <Box
            height={`${HOUR_HEIGHT * 2}px`}
            borderBottom="1px solid rgba(224, 224, 224, 1)"
            display="flex"
          >
            <Box className="border-trick-box" />
            <Box flexGrow={1} />
          </Box>
          <Box height={`${HOUR_HEIGHT}px`} display="flex">
            <Box className="border-trick-box" />
            <Box flexGrow={1} />
          </Box>
          {[...Array(NUM_HOURS)].map((_, i) => {
            return (
              <Fragment key={i}>
                {[...Array(2)].map((_, j) => {
                  const eventSlotDate = setHours(
                    setMinutes(setSeconds(date, 0), j * 30),
                    START_HOUR + i
                  );
                  const eventSlotEvents = events.filter((event) => {
                    const diff = differenceInMinutes(parseISO(event.start), eventSlotDate);
                    return Math.abs(diff) < 30 && diff > 0;
                  });
                  return (
                    <Box key={j} className="calendar-event-slot" height={`${HOUR_HEIGHT}px`}>
                      <Box className="border-trick-box" />
                      <EventSlot
                        date={eventSlotDate}
                        events={eventSlotEvents}
                        calendarId={primaryCalendar.id}
                      />
                    </Box>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      </Box>
    </Root>
  );
};

export default CalendarViewer;
