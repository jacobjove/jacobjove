import EventFormFields from "@/components/calendar/EventFormFields";
import { DEFAULT_EVENT_LENGTH_IN_MINUTES } from "@/components/calendar/EventSlot";
import { CREATE_CALENDAR_EVENT, UPDATE_CALENDAR_EVENT } from "@/graphql/mutations";
import {
  CalendarEvent,
  CalendarEventCreateInput,
  CalendarEventUpdateInput,
  CalendarEventWhereUniqueInput,
} from "@/graphql/schema";
import { useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { addMinutes } from "date-fns";
import { bindPopover } from "material-ui-popup-state/hooks";
import { FC, useEffect, useReducer } from "react";

export type EventData = Omit<CalendarEvent, "id"> & { id?: string };

export type InitialEventData = Pick<EventData, "start" | "calendarId"> & Partial<EventData>;

export const initializeEventData = (eventData: InitialEventData): EventData => {
  // prettier-ignore
  if (!eventData.calendarId) throw new Error("Calendar ID not specified.");
  const now = new Date();
  return {
    taskId: null,
    scheduleId: null,
    archivedAt: null,
    remoteId: null,
    habitId: null,
    createdAt: now,
    updatedAt: now,
    ...eventData,
    title: eventData.title || "",
    end:
      eventData.end ??
      (!eventData.allDay
        ? addMinutes(new Date(eventData.start), DEFAULT_EVENT_LENGTH_IN_MINUTES)
        : undefined),
    allDay: eventData.allDay ?? false,
    notes: eventData.notes || "",
    canceled: eventData.canceled || false,
  };
};

export const eventDataReducer = (state: EventData, payload: { field: string; value: unknown }) => {
  if (payload.field === "init") return initializeEventData(payload.value as InitialEventData);
  return { ...state, [payload.field]: payload.value };
};

interface EventEditingDialogProps extends ReturnType<typeof bindPopover> {
  eventData: InitialEventData;
}

const EventEditingDialog: FC<EventEditingDialogProps> = (props: EventEditingDialogProps) => {
  const { eventData: initialEventData, onClose, anchorEl: _anchorEl, ...dialogProps } = props;
  const [eventData, dispatch] = useReducer(
    eventDataReducer,
    initializeEventData(initialEventData),
    initializeEventData
  );
  const [mutate, { loading }] = useMutation(
    eventData.id ? UPDATE_CALENDAR_EVENT : CREATE_CALENDAR_EVENT
  );
  const handleSave = async () => {
    if (!eventData.start) {
      alert("Start date is required.");
      return;
    }
    const { calendarId, scheduleId, habitId, taskId, ...commonEventData } = eventData;
    const now = new Date();
    // prettier-ignore
    const mutationVars: {
      data: CalendarEventUpdateInput;
      where: CalendarEventWhereUniqueInput;
    } | {
      data: CalendarEventCreateInput;
    } = eventData.id ? {
      where: { id: eventData.id },
      data: {
        ...Object.fromEntries(
          Object.entries(commonEventData).map(([key, value]) => [key, { set: value }])
        ),
        calendar: { connect: { id: calendarId } },
        ...(!!scheduleId && { schedule: { connect: { id: scheduleId } } }),
        ...(!!habitId && { habit: { connect: { id: habitId } } }),
        ...(!!taskId && { task: { connect: { id: taskId } } }),
        updatedAt: { set: now },
      },
    } : {
      data: {
        ...commonEventData,
        createdAt: now,
        calendar: { connect: { id: calendarId } },
        schedule: scheduleId ? { connect: { id: scheduleId } } : undefined,
        habit: habitId ? { connect: { id: habitId } } : undefined,
        task: taskId ? { connect: { id: taskId } } : undefined,
      },
    };
    await mutate({
      variables: mutationVars,
      optimisticResponse: eventData.id
        ? {
            updateCalendarEvent: {
              __typename: "CalendarEvent",
              id: eventData.id,
              ...eventData,
              updatedAt: now,
            },
          }
        : {
            createCalendarEvent: {
              __typename: "CalendarEvent",
              id: "tmp-id",
              ...eventData,
              createdAt: now,
              updatedAt: now,
            },
          },
    });
    onClose();
  };
  useEffect(() => {
    dispatch({ field: "init", value: initialEventData });
  }, [initialEventData]);
  return (
    <Dialog fullWidth onClose={onClose} {...dialogProps}>
      <DialogTitle>{eventData.id ? "Modify" : "Create"} calendar event</DialogTitle>
      <DialogContent>
        <EventFormFields state={eventData} dispatch={dispatch} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventEditingDialog;
