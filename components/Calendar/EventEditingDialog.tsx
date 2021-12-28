import EventFormFields from "@/components/Calendar/EventFormFields";
import { CalendarEvent } from "@/graphql/schema";
import {
  CalendarEventCreateInput,
  CalendarEventUpdateInput,
  CalendarEventWhereUniqueInput,
} from "@/prisma/generated";
import { gql, useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { addMinutes } from "date-fns/esm";
import { FC, useEffect, useState } from "react";

const CREATE_CALENDAR_EVENT = gql`
  mutation CreateCalendarEvent($data: CalendarEventCreateInput!) {
    createCalendarEvent(data: $data) {
      scheduleId
      calendarId
      title
      start
      end
    }
  }
`;

const MODIFY_CALENDAR_EVENT = gql`
  mutation UpdateCalendarEvent(
    $data: CalendarEventUpdateInput!
    $where: CalendarEventWhereUniqueInput!
  ) {
    updateCalendarEvent(data: $data, where: $where) {
      scheduleId
      calendarId
      title
      start
      end
    }
  }
`;

interface EventEditingDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  // event: {}
  event: Omit<CalendarEvent, "start" | "end" | "id" | "uid" | "createdAt"> & {
    start: Date | string;
    end?: Date | string | null;
    id?: number | undefined;
  };
  refetch: () => void;
}

const EventEditingDialog: FC<EventEditingDialogProps> = (props: EventEditingDialogProps) => {
  const { open, setOpen, event, refetch } = props;
  const [title, setTitle] = useState(event.title ?? "");
  const [start, setStart] = useState<Date | null>(event.start ? new Date(event.start) : new Date());
  const [end, setEnd] = useState<Date | null>(
    event.end ? new Date(event.end) : start ? addMinutes(start, 29) : null
  );
  const [notes, setNotes] = useState(event.notes ?? "");
  const [calendarId, setCalendarId] = useState(event.calendarId ?? 1);

  const [mutate, { data, loading, error }] = useMutation(
    event.id ? MODIFY_CALENDAR_EVENT : CREATE_CALENDAR_EVENT
    // {
    //   refetchQueries: [
    //     GET_CALENDAR_EVENTS, // DocumentNode object parsed with gql
    //     "GetCalendarEvents", // Query name
    //   ],
    // }
  );

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = async () => {
    if (!start) {
      return; // TODO: show error
    }
    if (event.id) {
      const mutationVars: {
        data: CalendarEventUpdateInput;
        where: CalendarEventWhereUniqueInput;
      } = {
        where: { id: event.id },
        data: {
          title: { set: title },
          start: { set: start },
          end: { set: end || undefined },
          // end,
          notes: { set: notes },
          calendar: {
            connect: {
              id: calendarId,
            },
          },
        },
      };
      await mutate({
        variables: mutationVars,
        optimisticResponse: {
          // __typename: "Mutation",
          updateCalendarEvent: {
            id: event.id,
            __typename: "CalendarEvent",
            title,
            start,
            end,
            notes,
            scheduleId: null,
            calendarId,
          },
        },
      });
    } else {
      const mutationVars: {
        data: CalendarEventCreateInput;
      } = {
        data: {
          title,
          start,
          end: end || undefined,
          // end,
          notes,
          calendar: {
            connect: {
              id: calendarId,
            },
          },
        },
      };
      await mutate({
        variables: mutationVars,
        optimisticResponse: {
          // __typename: "Mutation",
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
        },
      });
    }
    console.log("Refetching...");
    await refetch();
    console.log("...Refetched.");
    setOpen(false);
  };
  useEffect(() => {
    setTitle(event.title);
    setStart(event.start ? new Date(event.start) : null);
    setEnd(event.end ? new Date(event.end) : null);
    setNotes(event.notes ?? "");
    setCalendarId(event.calendarId ?? 1); // TODO
  }, [event]);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{event.id ? "Modify" : "Create"} calendar event</DialogTitle>
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
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventEditingDialog;
