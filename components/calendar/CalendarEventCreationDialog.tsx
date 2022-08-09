import { CalendarEventData } from "@/graphql/generated/reducers/calendarEvent.reducer";
import { Payload } from "@/utils/data";
import { bindPopover } from "material-ui-popup-state/hooks";
import { Dispatch, FC } from "react";
import CalendarEventDialog from "./CalendarEventDialog";

interface CalendarEventDialogProps extends ReturnType<typeof bindPopover> {
  calendarEvent: CalendarEventData;
  dispatchCalendarEventData: Dispatch<Payload<CalendarEventData>>;
}

const CalendarEventCreationDialog: FC<CalendarEventDialogProps> = (
  props: CalendarEventDialogProps
) => {
  return <CalendarEventDialog mutation={"create"} {...props} />;
};

export default CalendarEventCreationDialog;
