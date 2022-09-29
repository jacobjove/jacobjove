import { styled } from "@mui/material/styles";
import { DraggedCalendarEvent } from "@web/components/calendar/CalendarEventBox";
import { useUser } from "@web/components/contexts/UserContext";
import { DraggedTask } from "@web/components/data/tasks/TaskRow";
import { CalendarEventFragment } from "@web/generated/graphql/fragments/calendarEvent.fragment";
import { CalendarEventCreationInput } from "@web/generated/graphql/inputs/calendarEvent.inputs";
import { calendarEventCreationInputSchema } from "@web/generated/graphql/schemas/calendarEvent.schemas";
import {
  useCreateCalendarEvent,
  useUpdateCalendarEvent,
} from "@web/generated/hooks/calendarEvent.hooks";
import { useUpdateTask } from "@web/generated/hooks/task.hooks";
import { DEFAULT_EVENT_LENGTH_IN_MINUTES } from "@web/utils/constants";
import { addMinutes, differenceInMinutes } from "date-fns";
import { FC, MouseEventHandler, useState } from "react";
import { useDrop } from "react-dnd";
import { getOptimisticResponseForTaskUpdate } from "../../generated/graphql/mutations/task.mutations";

interface EventSlotProps {
  date: Date;
  view: "day" | "week";
  events?: CalendarEventFragment[];
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
          const userId = user.id;
          const data = {
            title: draggedTask.title,
            start,
            end,
            allDay: false,
            calendarId,
            userId,
            taskId: draggedTask.id,
          };
          const validatedData = await calendarEventCreationInputSchema.validate(data).then(() => {
            return data as CalendarEventCreationInput;
          });
          createCalendarEvent.current?.({
            variables: { data: validatedData },
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
