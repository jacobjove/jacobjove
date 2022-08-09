import {
  ALL_DAY_BOX_HEIGHT,
  HALF_HOUR_HEIGHT,
  HOUR_HEIGHT,
  MINUTE_HEIGHT,
  START_HOUR,
} from "@/components/calendar/constants";
import EventBox from "@/components/calendar/EventBox";
import EventSlot from "@/components/calendar/EventSlot";
import TimeLabelsColumn from "@/components/calendar/TimeLabelsColumn";
import DateContext from "@/components/contexts/DateContext";
import { useNewCalendarEventDialog } from "@/components/contexts/NewCalendarEventDialogContext";
import { useUser } from "@/components/contexts/UserContext";
import { Calendar, CalendarEvent } from "@/graphql/generated/models";
import { ID } from "@/graphql/schema/types";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import {
  addMinutes,
  differenceInMinutes,
  isBefore,
  isSameDay,
  setHours,
  setMinutes,
  setSeconds,
} from "date-fns";
import { bindTrigger, PopupState } from "material-ui-popup-state/hooks";
import { Dispatch, FC, useContext, useEffect, useRef } from "react";

const Root = styled("div")(({ theme }) => {
  const dividerColor = theme.palette.divider;
  return {
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
      color: theme.palette.mode === "light" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)",
      minWidth: "3.5rem",
    },
    "& .calendar-slots-column": {
      flexGrow: 1,
      position: "relative",
      cursor: "pointer",
    },
    "& .border-trick-box": {
      borderRight: `1px solid ${dividerColor}`,
      width: "8px",
    },
    "& .calendar-event-slot": {
      display: "flex",
      "&:not(:first-of-type)": {
        borderTop: `1px solid ${dividerColor}`,
      },
    },
    "& .past": {
      background:
        // diagonal gray lines
        `repeating-linear-gradient(-55deg, ${dividerColor}, ${dividerColor} 1px, transparent 1px, transparent 20px)`,
      backgroundOrigin: "content-box",
      opacity: 0.5,
      "&.hovered": {
        backgroundColor: `1px solid ${dividerColor}`,
        cursor: "pointer",
      },
    },
  };
});

type BoundCalendarEvent = Omit<CalendarEvent, "end"> & {
  end: Date;
};

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
  eventEditingDialogState: PopupState;
}

export interface DayViewerProps extends CalendarProps {
  selectedDate: Date;
  setSelectedDate: Dispatch<Date>;
  viewedHourState: [number, Dispatch<number>];
  hidden: boolean;
}

const DayViewer: FC<DayViewerProps> = ({
  selectedDate,
  viewedHourState,
  hidden,
  data,
  loading,
}: DayViewerProps) => {
  const { calendarEvents } = data;
  const date = useContext(DateContext);
  const user = useUser();
  const [viewedHour, setViewedHour] = viewedHourState;

  const { newCalendarEventDialogState, dispatchNewCalendarEventData } = useNewCalendarEventDialog();
  const eventEditingDialogTriggerProps = bindTrigger(newCalendarEventDialogState);

  const scrollableDivRef = useRef<HTMLDivElement>(null);

  const dayStart = zeroToHour(selectedDate, START_HOUR);
  const currentTimeOffsetPx = getTimeOffsetPx(setHours(selectedDate, viewedHour));
  const scrollOffsetPx = currentTimeOffsetPx - HOUR_HEIGHT * 1.5;

  const isPast = isBefore(selectedDate, date) && !isSameDay(selectedDate, date);
  const filteredEvents = calendarEvents
    ?.filter((event) => {
      // TODO: partition events to separate all-day events based on event.end presence
      return (
        isSameDay(event.start, selectedDate) && !event.archivedAt && !event.canceled && event.end
      );
    })
    ?.sort((a, b) => {
      return a.start > b.start ? 1 : -1;
    }) as BoundCalendarEvent[];

  // Group events to account for possible overlap.
  const eventGroups: BoundCalendarEvent[][] = [];
  let currentGroup: BoundCalendarEvent[];
  let lastEnd = new Date(-8640000000000000);
  filteredEvents.forEach((event) => {
    const start = event.start;
    const end = event.end;
    if (!currentGroup || lastEnd < start) {
      currentGroup = [];
      eventGroups.push(currentGroup);
    }
    currentGroup.push(event);
    lastEnd = end > lastEnd ? end : lastEnd;
  });

  // Scroll to the current time whenever it changes.
  useEffect(() => {
    console.log("scrollOffsetPx", scrollOffsetPx);
    const scrollableDiv = scrollableDivRef.current;
    if (!scrollableDiv) console.error(">>>>> NO SCROLLABLE DIV");
    if (scrollableDiv) scrollableDiv.scrollTo({ top: scrollOffsetPx, behavior: "smooth" });
  }, [scrollOffsetPx]);
  return (
    <Root className={`${hidden ? "hidden" : ""}`}>
      {loading ? (
        <Skeleton width="100%" height={HALF_HOUR_HEIGHT * 2 * 24} />
      ) : (
        <>
          {/* All day row */}
          <Box display="flex" position="relative" flex="0 0 auto">
            <div>
              <Box
                className="time-label"
                height={`${ALL_DAY_BOX_HEIGHT}px`}
                sx={{
                  borderBottom: (theme) => `1px solid
                  ${theme.palette.divider}`,
                }}
              >
                All Day
              </Box>
            </div>
            <div className={`calendar-slots-column`}>
              <Box
                height={`${ALL_DAY_BOX_HEIGHT}px`}
                display="flex"
                sx={{
                  borderBottom: (theme) => `1px solid
                  ${theme.palette.divider}`,
                }}
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
            maxHeight={"100vh"}
            className="scrollable no-scrollbar"
            sx={{
              scrollBehavior: "smooth",
              overflowY: "scroll",
              overflowX: "hidden",
              scrollPaddingRight: 0,
              scrollMarginRight: 0,
              // Avoid scrollbar overlap.
              paddingRight: "0.6rem",
              marginRight: "-0.6rem",
            }}
          >
            <TimeLabelsColumn />
            <div className={`calendar-slots-column`}>
              {[...Array(24 * 2)].map((_, i) => {
                const hour = (START_HOUR + i) / 2;
                const minutes = i % 2 === 0 ? 0 : 30;
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
                      onClick={(e) => {
                        // Only trigger if the click was actually on the slot. This check
                        // allows us to avoid stopping propagation on click events for
                        // other elements in the slot.
                        if (e.target === e.currentTarget) {
                          const calendarId = user?.settings.defaultCalendarId;
                          if (!calendarId) throw new Error("No default calendar");
                          dispatchNewCalendarEventData({
                            field: "init",
                            value: {
                              title: "",
                              calendarId,
                              userId: user?.id as ID,
                              start: eventSlotDate,
                              end: addMinutes(eventSlotDate, 29),
                              allDay: false,
                            },
                          });
                          eventEditingDialogTriggerProps.onClick(e);
                        }
                      }}
                    />
                  </Box>
                );
              })}
              {!!eventGroups?.length &&
                eventGroups.map((eventGroup) => {
                  const nOverlappingEvents = eventGroup.length;
                  const widthPercent = 100 / nOverlappingEvents - 1;
                  return eventGroup.map((event, indexInGroup) => {
                    const eventStart = event.start;
                    const eventEnd = event.end;
                    const eventDurationInMinutes = differenceInMinutes(eventEnd, eventStart);
                    const dayStartDiffInMinutes = differenceInMinutes(eventStart, dayStart);
                    const topOffset = `${dayStartDiffInMinutes * MINUTE_HEIGHT + 2}px`; // TODO: fix magic number
                    const height = `${eventDurationInMinutes * MINUTE_HEIGHT}px`;
                    return (
                      <EventBox
                        key={indexInGroup}
                        position="absolute"
                        left={`calc(1px + ${widthPercent * indexInGroup}%)`}
                        top={topOffset}
                        height={height}
                        zIndex={indexInGroup}
                        width={`${widthPercent}%`}
                        event={event}
                      />
                    );
                  });
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
                  zIndex={10}
                />
              )}
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

export function getTimeOffsetPx(date: Date, startHour: number = START_HOUR): number {
  const dayStart = zeroToHour(date, startHour);
  const viewedHourDiffInMinutes = differenceInMinutes(date, dayStart);
  return MINUTE_HEIGHT * viewedHourDiffInMinutes;
}
