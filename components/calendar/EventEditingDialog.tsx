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
import { addMinutes } from "date-fns/esm";
import { bindPopover } from "material-ui-popup-state/hooks";
import { FC, useEffect, useState } from "react";

export type CalendarEventInputData = Omit<
  CalendarEvent,
  "start" | "end" | "id" | "uid" | "createdAt" | "updatedAt"
> & {
  start: string | Date;
  end?: string | Date | null;
  id?: number | undefined;
};

interface EventEditingDialogProps extends ReturnType<typeof bindPopover> {
  eventData: CalendarEventInputData;
}

const EventEditingDialog: FC<EventEditingDialogProps> = (props: EventEditingDialogProps) => {
  const { eventData, onClose, anchorEl: _anchorEl, ...dialogProps } = props;
  const [title, setTitle] = useState(eventData.title ?? "");
  const [start, setStart] = useState<Date | null>(
    eventData.start ? new Date(eventData.start) : new Date()
  );
  const [end, setEnd] = useState<Date | null>(
    eventData.end ? new Date(eventData.end) : start ? addMinutes(start, 29) : null
  );
  const [notes, setNotes] = useState(eventData.notes ?? "");
  const [calendarId, setCalendarId] = useState(eventData.calendarId);

  const [mutate, { loading }] = useMutation(
    eventData.id ? UPDATE_CALENDAR_EVENT : CREATE_CALENDAR_EVENT
  );

  const handleSave = async () => {
    if (!start) {
      alert("Start date is required.");
      return;
    }
    const mutationVars:
      | {
          data: CalendarEventUpdateInput;
          where: CalendarEventWhereUniqueInput;
        }
      | {
          data: CalendarEventCreateInput;
        } = {
      ...(eventData.id
        ? {
            where: { id: eventData.id },
            data: {
              title: { set: title },
              start: { set: start },
              end: { set: end || undefined },
              notes: { set: notes },
              calendar: {
                connect: {
                  id: calendarId,
                },
              },
            },
          }
        : {
            data: {
              title,
              start,
              end: end || undefined,
              notes,
              calendar: {
                connect: {
                  id: calendarId,
                },
              },
            },
          }),
    };
    await mutate({
      variables: mutationVars,
      optimisticResponse: {
        ...(eventData.id
          ? {
              updateCalendarEvent: {
                id: eventData.id,
                __typename: "CalendarEvent",
                title,
                start,
                end,
                notes,
                scheduleId: null,
                calendarId,
              },
            }
          : {
              createCalendarEvent: {
                id: "tmp-id",
                __typename: "CalendarEvent",
                title,
                start,
                end,
                notes,
                scheduleId: null,
                calendarId,
              },
            }),
      },
    });
    onClose();
  };
  useEffect(() => {
    setTitle(eventData.title);
    setStart(eventData.start ? new Date(eventData.start) : null);
    setEnd(eventData.end ? new Date(eventData.end) : null);
    setNotes(eventData.notes ?? "");
    setCalendarId(eventData.calendarId); // TODO
  }, [eventData]);
  return (
    <Dialog fullWidth onClose={onClose} {...dialogProps}>
      <DialogTitle>{eventData.id ? "Modify" : "Create"} calendar event</DialogTitle>
      <DialogContent>
        <EventFormFields
          title={title}
          setTitle={setTitle}
          start={start}
          setStart={setStart}
          end={end}
          setEnd={setEnd}
        />
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
