import { CalendarEvent } from "@/graphql/schema";
import Box from "@mui/material/Box";
import { FC, useState } from "react";
import { useDrop } from "react-dnd";
import { differenceInMinutes, addMinutes, parseISO } from "date-fns";
import { gql, useMutation } from "@apollo/client";

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

const EventSlot: FC<EventSlotProps> = (props: EventSlotProps) => {
  const { date, events: initialEvents, calendarId } = props;
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents ?? []);
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
        const end = addMinutes(date, 30);
        console.log("Dropped ", item);
        const calendarEventData = {
          title: item.title ?? "Untitled Event",
          scheduleId: item.scheduleId,
          start: start.toISOString(),
          end: end.toISOString(),
        };
        addEvent({
          variables: {
            data: {
              calendar: {
                connect: {
                  id: calendarId,
                },
              },
              ...calendarEventData,
            },
          },
          optimisticResponse: {
            __typename: "Mutation",
            scheduleAction: {
              id: "tmp-id",
              __typename: "CalendarEvent",
              calendarId: calendarId,
              ...calendarEventData,
            },
          },
        });
        setNumEvents(numEvents + 1);
        setEvents(events.concat([{ id: "tmp-id", ...calendarEventData, calendarId }]));
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [date]
  );
  return (
    <Box
      display="flex"
      position="relative"
      flexGrow={1}
      ref={dropRef}
      bgcolor={isOver && canDrop ? "lightgray" : "transparent"}
    >
      {!!events?.length &&
        events.map((event, index) => {
          const widthPercent = 100 / numEvents - 2;
          const width = `${widthPercent}%`;
          const eventStart = parseISO(event.start);
          const eventEnd = parseISO(event.end);
          const topOffset = `${(differenceInMinutes(eventStart, date) / 30) * 100}%`;
          console.log(topOffset);
          const eventDuration = differenceInMinutes(eventEnd, eventStart);
          console.log("duration:", eventDuration);
          return (
            <Box
              key={index}
              position="absolute"
              left={`${widthPercent * index + index + 1}%`}
              top={topOffset}
              height="96%"
              zIndex={index}
              bgcolor={"lightblue"} // calendar.color
              width={width}
              borderRadius={"3px"}
              padding={"0.25rem 0.5rem"}
            >
              {event.title} at {eventStart.toLocaleTimeString()}
            </Box>
          );
        })}
    </Box>
  );
};

export default EventSlot;
