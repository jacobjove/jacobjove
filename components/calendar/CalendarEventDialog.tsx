import EventFormFields from "@/components/calendar/EventFormFields";
import { useUser } from "@/components/contexts/UserContext";
import { CalendarEventFragment } from "@/graphql/generated/fragments/calendarEvent.fragment";
import {
  useCalendarEventDataReducer,
  useCreateCalendarEvent,
  useUpdateCalendarEvent,
} from "@/graphql/generated/hooks/calendarEvent.hooks";
import {
  getOptimisticResponseForCalendarEventCreation,
  getOptimisticResponseForCalendarEventUpdate,
} from "@/graphql/generated/mutations/calendarEvent.mutations";
import { CalendarEventData } from "@/graphql/generated/reducers/calendarEvent.reducer";
import { ID } from "@/graphql/schema/types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { bindPopover } from "material-ui-popup-state/hooks";
import { FC } from "react";

type CalendarEventDialogProps = ReturnType<typeof bindPopover> & {
  mutation: "create" | "update";
  data?: CalendarEventData;
};

const CalendarEventDialog: FC<CalendarEventDialogProps> = (props: CalendarEventDialogProps) => {
  console.log("Rendering CalendarEventDialog");
  const user = useUser();
  const { onClose, data, anchorEl: _anchorEl, mutation, ...dialogProps } = props;
  const calendarEventDataTuple = useCalendarEventDataReducer(
    data ?? {
      title: "",
      start: new Date(),
      calendarId: "",
      userId: user?.id as ID,
    }
  );
  const [calendarEventData] = calendarEventDataTuple;
  const [create, { loading: createLoading }] = useCreateCalendarEvent();
  const [update, { loading: updateLoading }] = useUpdateCalendarEvent();
  const loading = createLoading || updateLoading;
  const handleSave = async () => {
    if (!calendarEventData.start) {
      alert("Start date is required.");
      return;
    }
    if (!calendarEventData.userId) {
      alert("User ID is required.");
      console.log(calendarEventData);
      return;
    }
    const data = calendarEventData;
    mutation === "create"
      ? await create.current?.({
          variables: { data },
          optimisticResponse: getOptimisticResponseForCalendarEventCreation(data),
        })
      : await update.current?.({
          variables: {
            where: { id: calendarEventData.id },
            data,
          },
          optimisticResponse: getOptimisticResponseForCalendarEventUpdate(
            data as CalendarEventFragment,
            data
          ),
        });
    onClose();
  };
  return (
    <Dialog
      fullWidth
      onClose={onClose}
      {...dialogProps}
      onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && !loading) handleSave();
      }}
    >
      <DialogTitle>{calendarEventData.id ? "Modify" : "Create"} calendar event</DialogTitle>
      <DialogContent>
        <EventFormFields dataTuple={calendarEventDataTuple} />
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

export default CalendarEventDialog;
