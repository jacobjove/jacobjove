import { DraggedCalendarEvent } from "@/components/calendar/CalendarEventBox";
import { useUser } from "@/components/contexts/UserContext";
import { DraggedTask } from "@/components/data/tasks/TaskRow";
import {
  useCreateCalendarEvent,
  useUpdateCalendarEvent,
} from "@/graphql/generated/hooks/calendarEvent.hooks";
import { useUpdateTask } from "@/graphql/generated/hooks/task.hooks";
import { CalendarEventCreationInput } from "@/graphql/generated/inputs/calendarEvent.inputs";
import { getOptimisticResponseForCalendarEventCreation } from "@/graphql/generated/mutations/calendarEvent.mutations";
import { getOptimisticResponseForTaskUpdate } from "@/graphql/generated/mutations/task.mutations";
import { calendarEventCreationInputSchema } from "@/graphql/generated/schemas/calendarEvent.schemas";
import CalendarEvent from "@/graphql/generated/types/CalendarEvent";
import { DEFAULT_EVENT_LENGTH_IN_MINUTES } from "@/utils/constants";
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
  const { user } = useUser();
  const [hovered, setHovered] = useState(false);
  const [updateCalendarEvent, { loading: loadingUpdateCalendarEvent }] = useUpdateCalendarEvent();
  const [createCalendarEvent, { loading: loadingCreateCalendarEvent }] = useCreateCalendarEvent();
  const [updateTask, { loading: loadingUpdateTask }] = useUpdateTask();
  const loading = loadingCreateCalendarEvent || loadingUpdateCalendarEvent || loadingUpdateTask;
  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: ["event", "task"],
      canDrop: () => !loading,
      drop: async (item: ItemDroppableOnEventSlot) => {
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
          const { type: _type, index: _index, ...draggedTask } = item;
          const calendarId = user.settings.defaultCalendarId;
          const scheduleId = null;
          const userId = user.id;
          const data = {
            title: draggedTask.title,
            start,
            end,
            allDay: false,
            calendarId,
            scheduleId,
            userId,
            taskId: draggedTask.id,
          };
          const validatedData = await calendarEventCreationInputSchema.validate(data).then(() => {
            return data as CalendarEventCreationInput;
          });
          createCalendarEvent.current?.({
            variables: { data: validatedData },
            optimisticResponse: getOptimisticResponseForCalendarEventCreation(validatedData),
          });
          updateTask.current?.({
            variables: {
              where: { id: draggedTask.id },
              data: { plannedStartDate: start },
            },
            optimisticResponse: getOptimisticResponseForTaskUpdate(draggedTask, {
              plannedStartDate: start,
            }),
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
  // console.log("Rendering EventSlot", date);
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
