import { DraggedTask } from "@/components/actions/TaskRow";
import { DraggedCalendarEvent } from "@/components/calendar/EventBox";
import { calendarEventFragment } from "@/graphql/fragments";
import { CREATE_CALENDAR_EVENT, UPDATE_CALENDAR_EVENT } from "@/graphql/mutations";
import { CalendarEvent } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import { styled } from "@mui/material/styles";
import { addMinutes, differenceInMinutes, parseISO } from "date-fns";
import { useSession } from "next-auth/react";
import { FC, MouseEventHandler, useState } from "react";
import { useDrop } from "react-dnd";

interface EventSlotProps {
  date: Date;
  view: "day" | "week";
  events?: CalendarEvent[];
  defaultCalendarId: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
  past?: boolean;
}

type ItemDroppableOnEventSlot = DraggedCalendarEvent | DraggedTask;

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  flexGrow: 1,
  "&.droppable": {
    backgroundColor: theme.palette.grey[500], // "lightgray",
  },
  "&.hovered": {
    backgroundColor: theme.palette.action, // TODO
    cursor: "pointer",
  },
}));

const DEFAULT_EVENT_LENGTH_IN_MINUTES = 29;

// TODO: https://www.apollographql.com/blog/apollo-client/caching/when-to-use-refetch-queries/

const EventSlot: FC<EventSlotProps> = (props: EventSlotProps) => {
  const { date, view: _view, defaultCalendarId, onClick, past } = props;
  const { data: session } = useSession();
  const [hovered, setHovered] = useState(false);
  const [rescheduleEvent, { loading: loadingUpdateCalendarEvent }] = useMutation<{
    updateCalendarEvent: CalendarEvent;
  }>(UPDATE_CALENDAR_EVENT);
  const [addEvent, { loading: loadingCreateCalendarEvent }] = useMutation<{
    createCalendarEvent: CalendarEvent;
  }>(CREATE_CALENDAR_EVENT, {
    update(cache, { data }) {
      const { createCalendarEvent } = data || {};
      if (createCalendarEvent) {
        cache.modify({
          fields: {
            calendarEvents(existingEvents = []) {
              const newCalendarEventRef = cache.writeFragment({
                data: createCalendarEvent,
                fragment: gql`
                  fragment NewCalendarEvent on CalendarEvent {
                    ...CalendarEventFragment
                  }
                  ${calendarEventFragment}
                `,
                fragmentName: "NewCalendarEvent",
              });
              return [...existingEvents, newCalendarEventRef];
            },
          },
        });
      }
    },
  });
  const loading = loadingCreateCalendarEvent || loadingUpdateCalendarEvent;
  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: ["event", "task"],
      canDrop: () => !loading,
      drop: (item: ItemDroppableOnEventSlot) => {
        if (!session) return;
        if (item.type === "event") {
          const { type: _, ...draggedEvent } = item;
          if (!draggedEvent.start || !draggedEvent.end) return;
          const oldStart = parseISO(draggedEvent.start);
          const oldEnd = parseISO(draggedEvent.end);
          const newStart = date.toISOString();
          const newEnd = addMinutes(date, differenceInMinutes(oldEnd, oldStart)).toISOString();
          if (draggedEvent.id) {
            rescheduleEvent({
              variables: {
                where: {
                  id: draggedEvent.id,
                },
                data: {
                  start: { set: newStart },
                  end: { set: newEnd || undefined },
                },
              },
              optimisticResponse: {
                updateCalendarEvent: {
                  __typename: "CalendarEvent",
                  ...draggedEvent,
                },
              },
            });
          }
        } else if (item.type === "task") {
          const start = date;
          const end = addMinutes(date, DEFAULT_EVENT_LENGTH_IN_MINUTES);
          const { type: _, ...draggedTask } = item;
          const calendarId = draggedTask.calendarId ?? defaultCalendarId; // TODO: user.settings.defaultCalendarId
          const scheduleId = draggedTask.scheduleId ?? null;
          const calendarEventData = {
            title: draggedTask.title,
            start: start.toISOString(),
            end: end.toISOString(),
            allDay: false,
          };
          const calendarEventDataWithConnections = {
            ...calendarEventData,
            calendar: { connect: { id: calendarId } },
            schedule: scheduleId ? { connect: { id: scheduleId } } : undefined,
          };
          const now = new Date().toISOString();
          addEvent({
            variables: {
              data: calendarEventDataWithConnections,
            },
            optimisticResponse: {
              createCalendarEvent: {
                __typename: "CalendarEvent",
                id: -1,
                uid: "tmp-id",
                calendarId,
                scheduleId,
                createdAt: now,
                updatedAt: now,
                archivedAt: null,
                ...calendarEventData,
                allDay: calendarEventData.allDay ?? false,
              },
            },
          });
        }
        // TODO: open event dialog
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
  if (past) {
    classNames.push("past");
  }
  return (
    <Root
      ref={dropRef}
      className={classNames.join(" ")}
      onClick={onClick}
      onMouseOver={(e) => {
        if (e.target === e.currentTarget) {
          setHovered(true);
        }
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
    />
  );
};

export default EventSlot;
