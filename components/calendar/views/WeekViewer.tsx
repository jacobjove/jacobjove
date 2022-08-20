import CalendarCell from "@/components/calendar/CalendarCell";
import {
  ALL_DAY_BOX_HEIGHT,
  HALF_HOUR_HEIGHT,
  HOUR_HEIGHT,
  START_HOUR,
  TIME_LABEL_COLUMN_WIDTH,
} from "@/components/calendar/constants";
import EventSlot from "@/components/calendar/EventSlot";
import TimeLabelsColumn from "@/components/calendar/TimeLabelsColumn";
import { getTimeOffsetPx } from "@/components/calendar/views/DayViewer";
import DateContext from "@/components/contexts/DateContext";
import { useNewCalendarEventDialog } from "@/components/contexts/NewCalendarEventDialogContext";
import { useUser } from "@/components/contexts/UserContext";
import { Calendar, CalendarEvent } from "@/graphql/generated/models";
import { ID } from "@/graphql/schema/types";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  addMinutes,
  differenceInMinutes,
  getDay,
  isSameDay,
  setDay,
  setHours,
  setMinutes,
  setSeconds,
} from "date-fns";
import { bindTrigger } from "material-ui-popup-state/hooks";
import { Dispatch, FC, Fragment, useContext, useEffect, useRef } from "react";

const Root = styled("div")(({ theme }) => {
  const borderDef = `1px solid ${theme.palette.divider}`;
  return {
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
      color: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)",
      width: "3.5rem",
    },
    "& .calendar-slots-column": {
      flexGrow: 1,
      position: "relative",
      cursor: "pointer",
      scrollBehavior: "smooth",
      "&:not(:first-of-type)": {
        borderLeft: borderDef,
      },
    },
    "& .border-trick-box": {
      borderRight: borderDef,
      width: "0.5rem",
    },
    "& .calendar-event-slot": {
      display: "flex",
      borderTop: borderDef,
      height: `${HALF_HOUR_HEIGHT}px`,
    },
  };
});

export type CalendarData = {
  calendars: Calendar[];
  calendarEvents: CalendarEvent[];
};

export interface CalendarProps {
  collapseMenu?: boolean;
  data: CalendarData;
  loading?: boolean;
  error?: Error;
  includeDateSelector?: boolean;
}

export interface WeekViewerProps extends CalendarProps {
  selectedDate: Date;
  setSelectedDate: Dispatch<Date>;
  viewedHourState: [number, Dispatch<number>];
  defaultCalendar: Calendar;
  hidden: boolean;
}

const WeekViewer: FC<WeekViewerProps> = ({
  selectedDate,
  viewedHourState,
  hidden,
  data,
}: // loading,
WeekViewerProps) => {
  const { calendarEvents } = data;
  const date = useContext(DateContext);
  const [viewedHour, _] = viewedHourState;
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();

  const { newCalendarEventDialogState, newCalendarEventDataTuple } = useNewCalendarEventDialog();
  const [, dispatchNewCalendarEventData] = newCalendarEventDataTuple;

  const eventEditingDialogTriggerProps = bindTrigger(newCalendarEventDialogState);

  const selectedDayIndex = getDay(selectedDate);

  const currentTimeOffsetPx = getTimeOffsetPx(setHours(selectedDate, viewedHour));
  const scrollOffsetPx = currentTimeOffsetPx - HOUR_HEIGHT * 1.5;

  useEffect(() => {
    const scrollableDiv = scrollableDivRef.current;
    if (scrollableDiv) scrollableDiv.scrollTo({ top: scrollOffsetPx, behavior: "smooth" });
  }, [scrollOffsetPx]);

  const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayHeaderHeight = `${HALF_HOUR_HEIGHT}px`;
  return (
    <Root className={`${hidden ? "hidden" : ""}`}>
      {/* Day headers */}
      <Box display="flex">
        <Box
          width={TIME_LABEL_COLUMN_WIDTH}
          height={dayHeaderHeight}
          sx={{
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        />
        <div className="calendar-slots-column">
          <Box
            height={dayHeaderHeight}
            display="flex"
            sx={{
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box flexGrow={1} display="flex">
              {DAYS_OF_WEEK.map((day, i) => {
                const dayDate = setDay(selectedDate, i);
                return (
                  <CalendarCell key={i} className="day-header-cell">
                    <Box
                      height="100%"
                      display="flex"
                      flexDirection={"column"}
                      alignItems="center"
                      justifyContent={"center"}
                    >
                      <Typography fontSize="0.7rem">{day}</Typography>
                      <Typography
                        fontSize="0.9rem"
                        fontWeight={600}
                        height="1.5rem"
                        width="1.5rem"
                        border={isSameDay(dayDate, date) ? "1px solid gray" : "none"}
                        borderRadius={"50%"}
                        sx={{
                          color: (theme) =>
                            isSameDay(dayDate, selectedDate)
                              ? theme.palette.primary.main
                              : theme.palette.primary.contrastText,
                        }}
                      >
                        {dayDate.getDate()}
                      </Typography>
                    </Box>
                  </CalendarCell>
                );
              })}
            </Box>
          </Box>
        </div>
      </Box>
      {/* All day boxes */}
      <Box
        display="flex"
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <div style={{ width: TIME_LABEL_COLUMN_WIDTH }}>
          <Box className="time-label" height={`${ALL_DAY_BOX_HEIGHT}px`}>
            All Day
          </Box>
        </div>
        <div className="calendar-slots-column">
          <Box height={`${ALL_DAY_BOX_HEIGHT}px`} display="flex">
            <Box flexGrow={1} display="flex">
              {DAYS_OF_WEEK.map((day, i) => {
                return (
                  <CalendarCell key={i} className="all-day-cell">
                    <div></div>
                  </CalendarCell>
                );
              })}
            </Box>
          </Box>
        </div>
      </Box>
      {/* Time slots */}
      <Box
        display="flex"
        ref={scrollableDivRef}
        position="relative"
        maxHeight={"100%"}
        className="scrollable no-scrollbar"
        sx={{
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <TimeLabelsColumn />
        <Box display="flex" flexGrow={1}>
          {DAYS_OF_WEEK.map((_, dayIndex) => {
            return (
              <div key={dayIndex} className="calendar-slots-column">
                <Box height={`${HALF_HOUR_HEIGHT}px`} display="flex">
                  <Box flexGrow={1} />
                </Box>
                {[...Array(24)].map((_, i) => {
                  return (
                    <Fragment key={i}>
                      {[...Array(2)].map((_, j) => {
                        const eventSlotDate = setDay(
                          setHours(setMinutes(setSeconds(selectedDate, 0), j * 30), START_HOUR + i),
                          selectedDate.getDay() + dayIndex - selectedDayIndex
                        );
                        const eventSlotEvents = calendarEvents.filter((event: CalendarEvent) => {
                          const diff = differenceInMinutes(
                            event.start,
                            eventSlotDate,
                            // Rounding method options are round, ceil, floor, and trunc (default).
                            // The default rounding method results in diffs that are 1 smaller
                            // than expected; e.g., 29 rather than 30, causing a 2:30 event to be
                            // included in the 2:00 slot.
                            { roundingMethod: "round" } // ceil also works
                          );
                          return Math.abs(diff) < 30 && diff >= 0;
                        });
                        return (
                          <Box key={j} className="calendar-event-slot">
                            <EventSlot
                              date={eventSlotDate}
                              view="week"
                              events={eventSlotEvents}
                              onClick={(e) => {
                                // Only trigger if the click was actually on the slot. This check
                                // allows us to avoid stopping propagation on click events for
                                // other elements in the slot.
                                if (e.target === e.currentTarget) {
                                  const userId = user?.id as ID;
                                  const calendarId = user?.settings.defaultCalendarId;
                                  if (!calendarId) throw new Error("No default calendar id");
                                  dispatchNewCalendarEventData({
                                    field: "init",
                                    value: {
                                      title: "",
                                      calendarId: user?.settings.defaultCalendarId as ID,
                                      start: eventSlotDate,
                                      end: addMinutes(eventSlotDate, 29),
                                      allDay: false,
                                      userId,
                                    },
                                  });
                                  eventEditingDialogTriggerProps.onClick(e);
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
        </Box>
      </Box>
    </Root>
  );
};

export default WeekViewer;

const zeroToHour = (date: Date, hour: number) => {
  return setHours(setMinutes(setSeconds(date, 0), 0), hour);
};
