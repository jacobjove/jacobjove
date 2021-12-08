import { CalendarEvent } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { addMinutes, differenceInMinutes, parseISO } from "date-fns";
import { FC, useState } from "react";
import { useDrop } from "react-dnd";

interface EventSlotProps {
  date: Date;
  events?: CalendarEvent[];
  calendarId: string;
}

const SCHEDULE_ACTION = gql`
  mutation ScheduleAction($data: CalendarEventCreateInput!) {
    createCalendarEvent(data: $data) {
      scheduleId
      calendarId
      title
      start
      end
    }
  }
`;

const Root = styled("div")(() => ({
  display: "flex",
  position: "relative",
  flexGrow: 1,
  "&.droppable": {
    backgroundColor: "lightgray",
  },
  "&:hover": {
    backgroundColor: "whitesmoke",
    cursor: "pointer",
  },
  "& .event": {
    position: "absolute",
    border: "1px solid white",
    borderRadius: "3px",
    padding: "0.25rem 0.5rem",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  },
}));

const EventSlot: FC<EventSlotProps> = (props: EventSlotProps) => {
  const { date, events: initialEvents, calendarId } = props;
  const [events, setEvents] = useState<Partial<CalendarEvent>[]>(initialEvents ?? []);
  const [numEvents, setNumEvents] = useState(events?.length ?? 0);
  const [addEvent, { data, loading, error }] = useMutation(SCHEDULE_ACTION);
  const openEventCreationDialog = () => {
    console.log("open event creation dialog");
  };
  if (data) {
    console.log("data: ", data);
  }
  if (error) {
    console.log("error: ", error);
  }
  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: "action",
      canDrop: () => !loading,
      drop: (item: Partial<CalendarEvent>) => {
        const start = date;
        const end = addMinutes(date, 30);
        const scheduleId = item.scheduleId ?? null;
        const calendarEventData = {
          title: item.title ?? "Untitled Event",
          start: start.toISOString(),
          end: end.toISOString(),
        };
        const tmpEvent = {
          id: "tmp-id",
          calendarId,
          scheduleId,
          ...calendarEventData,
        };
        addEvent({
          variables: {
            data: {
              calendar: {
                connect: {
                  id: calendarId,
                },
              },
              schedule: scheduleId
                ? {
                    connect: { id: scheduleId },
                  }
                : undefined,
              ...calendarEventData,
            },
          },
          optimisticResponse: {
            __typename: "Mutation",
            createCalendarEvent: {
              ...tmpEvent,
              __typename: "CalendarEvent",
            },
          },
        });
        setNumEvents(numEvents + 1);
        setEvents(events.concat([tmpEvent]));
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [date]
  );
  return (
    <Root
      ref={dropRef}
      className={isOver && canDrop ? "droppable" : ""}
      onClick={openEventCreationDialog}
    >
      {!!events?.length &&
        events.map((event, index) => {
          if (!event.start || !event.end) {
            console.error("Event missing start or end time: ", event);
            return null;
          }
          const eventStart = parseISO(event.start);
          const eventEnd = parseISO(event.end);
          const eventDuration = differenceInMinutes(eventEnd, eventStart);
          // Calculate styles.
          const widthPercent = 100 / numEvents - 2;
          const width = `${widthPercent}%`;
          const topOffset = `${(differenceInMinutes(eventStart, date) / 30) * 100}%`;
          const height = `${(eventDuration / 30) * 100}%`;
          return (
            <Box
              key={index}
              className="event"
              left={`${widthPercent * index + index}%`}
              top={topOffset}
              height={height}
              zIndex={index}
              bgcolor={"rgb(100, 181, 246)"} // or calendar.color
              width={width}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("clicked event: ", event.title);
              }}
            >
              {event.title}
            </Box>
          );
        })}
    </Root>
  );
};

export default EventSlot;
