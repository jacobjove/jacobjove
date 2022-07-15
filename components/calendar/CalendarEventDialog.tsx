import EventFormFields from "@/components/calendar/EventFormFields";
import { CREATE_CALENDAR_EVENT, UPDATE_CALENDAR_EVENT } from "@/graphql/mutations";
import {
  CalendarEventCreateInput,
  CalendarEventUpdateInput,
  CalendarEventWhereUniqueInput,
} from "@/graphql/schema";
import { CalendarEventData } from "@/utils/calendarEvents";
import { useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { bindPopover } from "material-ui-popup-state/hooks";
import { Dispatch, FC } from "react";

interface CalendarEventDialogProps extends ReturnType<typeof bindPopover> {
  calendarEvent: CalendarEventData;
  toggleCompletion?: Dispatch<boolean>;
  dispatchCalendarEventData: Dispatch<{ field: string; value: unknown }>;
}

const CalendarEventDialog: FC<CalendarEventDialogProps> = (props: CalendarEventDialogProps) => {
  const {
    calendarEvent: calendarEventData,
    dispatchCalendarEventData,
    onClose,
    anchorEl: _anchorEl,
    ...dialogProps
  } = props;
  const [mutate, { loading }] = useMutation(
    calendarEventData.id ? UPDATE_CALENDAR_EVENT : CREATE_CALENDAR_EVENT
  );
  const handleSave = async () => {
    if (!calendarEventData.start) {
      alert("Start date is required.");
      return;
    }
    const { calendarId, scheduleId, habitId, taskId, ...commonEventData } = calendarEventData;
    const now = new Date();
    // prettier-ignore
    const mutationVars: {
      data: CalendarEventUpdateInput;
      where: CalendarEventWhereUniqueInput;
    } | {
      data: CalendarEventCreateInput;
    } = calendarEventData.id ? {
      where: { id: calendarEventData.id },
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
      optimisticResponse: calendarEventData.id
        ? {
            updateCalendarEvent: {
              __typename: "CalendarEvent",
              id: calendarEventData.id,
              ...calendarEventData,
              updatedAt: now,
            },
          }
        : {
            createCalendarEvent: {
              __typename: "CalendarEvent",
              id: "tmp-id",
              ...calendarEventData,
              createdAt: now,
              updatedAt: now,
            },
          },
    });
    onClose();
  };
  return (
    <Dialog fullWidth onClose={onClose} {...dialogProps}>
      <DialogTitle>{calendarEventData.id ? "Modify" : "Create"} calendar event</DialogTitle>
      <DialogContent>
        <EventFormFields state={calendarEventData} dispatch={dispatchCalendarEventData} />
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
