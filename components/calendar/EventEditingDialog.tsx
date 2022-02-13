import EventFormFields from "@/components/calendar/EventFormFields";
import { CREATE_CALENDAR_EVENT, UPDATE_CALENDAR_EVENT } from "@/graphql/mutations";
import { CalendarEvent } from "@/graphql/schema";
import {
  CalendarEventCreateInput,
  CalendarEventUpdateInput,
  CalendarEventWhereUniqueInput,
} from "@/prisma/generated";
import { useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { bindPopover } from "material-ui-popup-state/hooks";
import { FC, useEffect, useReducer } from "react";

// TODO: Figure out what to do about non-nullability of fields that are supposed
// to be nullable... https://github.com/MichalLytek/typegraphql-prisma/issues/32
// It's not hugely problematic at the moment, but it's annoying and may cause problems
// in the future. Fields like `archivedAt` need to be able to be updated to null.
// And fields like `notes` can be set to an empty string rather than null, but
// since the database allows such optional string fields to be null (and our types
// are generated accordingly), it's unexpected that TypeGraphQL then proceeds to
// generate a schema that does not allow us to set a nullable field to null.
export type EventData = Omit<
  CalendarEvent,
  | "id"
  | "start"
  | "end"
  | "notes"
  | "sourceId"
  | "calendarSourceId"
  | "canceled"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "schedule"
  | "habit"
  | "task"
> & {
  id?: number;
  start: Date;
  end?: Date;
  notes?: string;
  canceled?: boolean;
  createdAt: Date;
  updatedAt: Date;
};

interface EventEditingDialogProps extends ReturnType<typeof bindPopover> {
  eventData: CalendarEvent | EventData;
}

const initializeEventData = (eventData: CalendarEvent | EventData): EventData => {
  return {
    ...eventData,
    start: new Date(eventData.start),
    end: new Date(eventData.start),
    notes: eventData.notes || "",
    canceled: eventData.canceled || false,
    createdAt: new Date(eventData.createdAt),
    updatedAt: new Date(eventData.updatedAt),
  };
};

const eventDataReducer = (state: EventData, payload: { field: string; value: unknown }) => {
  if (payload.field === "init") return initializeEventData(payload.value as EventData);
  return { ...state, [payload.field]: payload.value };
};

const EventEditingDialog: FC<EventEditingDialogProps> = (props: EventEditingDialogProps) => {
  const { eventData: initialEventData, onClose, anchorEl: _anchorEl, ...dialogProps } = props;
  const [eventData, dispatch] = useReducer(eventDataReducer, initialEventData, initializeEventData);
  const [mutate, { loading }] = useMutation(
    eventData.id ? UPDATE_CALENDAR_EVENT : CREATE_CALENDAR_EVENT
  );
  const handleSave = async () => {
    if (!eventData.start) {
      alert("Start date is required.");
      return;
    }
    const { calendarId, ...commonEventData } = eventData;
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
      },
    } : {
      data: {
        ...commonEventData,
        calendar: { connect: { id: eventData.calendarId } },
      },
    };
    await mutate({
      variables: mutationVars,
      optimisticResponse: eventData.id
        ? {
            updateCalendarEvent: {
              id: eventData.id,
              __typename: "CalendarEvent",
              scheduleId: null,
              ...eventData,
            },
          }
        : {
            createCalendarEvent: {
              id: "tmp-id",
              __typename: "CalendarEvent",
              scheduleId: null,
              ...eventData,
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
