import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EventFormFields from "@web/components/calendar/EventFormFields";
import { CalendarEventFragment } from "@web/generated/graphql/fragments/calendarEvent.fragment";
import { CalendarEventCreationInput } from "@web/generated/graphql/inputs/calendarEvent.inputs";
import { getOptimisticResponseForCalendarEventUpdate } from "@web/generated/graphql/mutations/calendarEvent.mutations";
import { calendarEventCreationInputSchema } from "@web/generated/graphql/schemas/calendarEvent.schemas";
import {
  useCalendarEventReducer,
  useCreateCalendarEvent,
  useUpdateCalendarEvent,
} from "@web/generated/hooks/calendarEvent.hooks";
import { CalendarEventData } from "@web/generated/reducers/calendarEvent.reducer";
import { bindDialog } from "material-ui-popup-state/hooks";
import { FC } from "react";

interface CalendarEventDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  mutation: "create" | "update";
  data?: CalendarEventData;
}

const CalendarEventDialog: FC<CalendarEventDialogProps> = (props: CalendarEventDialogProps) => {
  const { close, onClose, data, mutation, ...dialogProps } = props;
  const calendarEventDataTuple = useCalendarEventReducer(data ?? { start: new Date() });
  const [calendarEventData] = calendarEventDataTuple;
  const [create, { loading: createLoading }] = useCreateCalendarEvent();
  const [update, { loading: updateLoading }] = useUpdateCalendarEvent();
  const loading = createLoading || updateLoading;
  const handleSave = async () => {
    // if (!calendarEventData.start) {
    //   alert("Start date is required.");
    //   return;
    // }
    // if (!calendarEventData.userId) {
    //   alert("User ID is required.");
    //   console.log(calendarEventData);
    //   return;
    // }
    if (mutation === "create") {
      await calendarEventCreationInputSchema
        .validate(calendarEventData, { strict: true })
        .then(async () => {
          const data = calendarEventData as CalendarEventCreationInput;
          return create.current?.({
            variables: { data },
          });
        });
    } else {
      const data = calendarEventData;
      await update.current?.({
        variables: {
          where: { id: calendarEventData.id },
          data,
        },
        optimisticResponse: getOptimisticResponseForCalendarEventUpdate(
          data as CalendarEventFragment,
          data
        ),
      });
    }
    close();
  };
  // console.log("Rendering CalendarEventDialog!");
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
