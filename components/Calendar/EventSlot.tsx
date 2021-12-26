import { CalendarEvent } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { addMinutes, differenceInMinutes, parseISO } from "date-fns";
import { ComponentProps, FC, MouseEventHandler, useState } from "react";
import { useDrop } from "react-dnd";

interface EventSlotProps {
  date: Date;
  events?: CalendarEvent[];
  calendarId: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
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
  "&.hovered": {
    backgroundColor: "whitesmoke",
    cursor: "pointer",
  },
  "& .event": {
    position: "absolute",
    border: "1px solid white",
    borderRadius: "3px",
    padding: "0.25rem 0.5rem",
    maxWidth: "92%",
  },
}));

const DEFAULT_EVENT_LENGTH_IN_MINUTES = 29;

const EventSlot: FC<EventSlotProps> = (props: EventSlotProps) => {
  const { date, events: initialEvents, calendarId, onClick } = props;
  const [hovered, setHovered] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents ?? []);
  // const [events, setEvents] = useState<Partial<CalendarEvent>[]>(initialEvents ?? []);
  const [numEvents, setNumEvents] = useState(events?.length ?? 0);
  const [addEvent, { data, loading, error }] = useMutation(SCHEDULE_ACTION);
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
        const end = addMinutes(date, DEFAULT_EVENT_LENGTH_IN_MINUTES);
        const scheduleId = item.scheduleId ?? null;
        const calendarEventData = {
          title: item.title ?? "Untitled Event",
          start: start.toISOString(),
          end: end.toISOString(),
        };
        const tmpEvent: CalendarEvent = {
          id: "tmp-id",
          calendarId,
          scheduleId,
          createdAt: new Date(),
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
  const classNames = [];
  if (isOver && canDrop) {
    classNames.push("droppable");
  }
  if (hovered) {
    classNames.push("hovered");
  }
  return (
    <Root
      ref={dropRef}
      className={classNames.join(" ")}
      onClick={onClick}
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
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
          // const width = `100%`;
          const width = `${widthPercent}%`;
          const topOffset = `${(differenceInMinutes(eventStart, date) / 30) * 100}%`;
          const height = `${(eventDuration / 30) * 100}%`;
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
    </Root>
  );
};

export default EventSlot;

interface EventBoxProps extends ComponentProps<typeof Box> {
  event: CalendarEvent;
}

const EventBox: FC<EventBoxProps> = (props: EventBoxProps) => {
  const { event, ...rest } = props;
  const [hovered, setHovered] = useState(false);
  return (
    <Box
      className="event"
      {...rest}
      sx={{
        bgcolor: "rgb(100, 181, 246)", // or calendar.color
        filter: hovered ? "brightness(1.1)" : null,
      }}
      onMouseOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("clicked event: ", event);
      }}
    >
      {event.title}
    </Box>
  );
};
