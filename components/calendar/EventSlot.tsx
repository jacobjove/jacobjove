import { DraggedTask } from "@/components/actions/TaskRow";
import { DraggedCalendarEvent } from "@/components/calendar/CalendarEventBox";
import { useUser } from "@/components/contexts/UserContext";
import {
  useCreateCalendarEvent,
  useUpdateCalendarEvent,
} from "@/generated/hooks/calendarEvent.hooks";
import { CalendarEvent } from "@/generated/models/calendarEvent.model";
import { getOptimisticResponseForCalendarEventCreation } from "@/generated/mutations/calendarEvent.mutations";
import { DEFAULT_EVENT_LENGTH_IN_MINUTES } from "@/utils/calendarEvents";
import { styled } from "@mui/material/styles";
import { addMinutes, differenceInMinutes } from "date-fns";
import { FC, MouseEventHandler, useState } from "react";
import { useDrop } from "react-dnd";

interface EventSlotProps {
  date: Date;
  view: "day" | "week";
  events?: CalendarEvent[];
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
    backgroundColor: theme.palette.grey[600], // TODO
    cursor: "pointer",
  },
}));

// TODO: https://www.apollographql.com/blog/apollo-client/caching/when-to-use-refetch-queries/

const EventSlot: FC<EventSlotProps> = (props: EventSlotProps) => {
  const { date, view: _view, onClick, past } = props;
  const user = useUser();
  const [hovered, setHovered] = useState(false);
  const [updateCalendarEvent, { loading: loadingUpdateCalendarEvent }] = useUpdateCalendarEvent();
  const [createCalendarEvent, { loading: loadingCreateCalendarEvent }] = useCreateCalendarEvent();
  const loading = loadingCreateCalendarEvent || loadingUpdateCalendarEvent;
  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: ["event", "task"],
      canDrop: () => !loading,
      drop: (item: ItemDroppableOnEventSlot) => {
        if (!user) return;
        if (item.type === "event") {
          const { type: _, ...draggedEvent } = item;
          if (!draggedEvent.start || !draggedEvent.end) return;
          const oldStart = draggedEvent.start;
          const oldEnd = draggedEvent.end;
          const newStart = date;
          const newEnd = addMinutes(date, differenceInMinutes(oldEnd, oldStart));
          if (draggedEvent.id) {
            updateCalendarEvent.current?.({
              variables: {
                where: { id: draggedEvent.id },
                data: {
                  start: newStart,
                  end: newEnd || undefined,
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
          const calendarId = draggedTask.calendarId ?? user.settings.defaultCalendarId;
          if (!calendarId) throw new Error("No calendar ID");
          const scheduleId = draggedTask.scheduleId ?? null;
          const userId = user.id;
          const data = {
            title: draggedTask.title,
            start,
            end,
            allDay: false,
            calendarId,
            scheduleId,
            userId,
          };
          createCalendarEvent.current?.({
            variables: { data },
            optimisticResponse: getOptimisticResponseForCalendarEventCreation(data),
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
