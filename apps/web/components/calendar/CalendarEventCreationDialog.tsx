import { CalendarEventData } from "@web/generated/reducers/calendarEvent.reducer";
import { Payload } from "@web/utils/data/reduction";
import { bindPopover } from "material-ui-popup-state/hooks";
import { Dispatch, FC } from "react";
import CalendarEventDialog from "./CalendarEventDialog";

interface CalendarEventDialogProps extends ReturnType<typeof bindPopover> {
  calendarEventDataTuple: [CalendarEventData, Dispatch<Payload<CalendarEventData>>];
}

const CalendarEventCreationDialog: FC<CalendarEventDialogProps> = (
  props: CalendarEventDialogProps
) => {
  // console.log("Rendering CalendarEventCreationDialog");
  return <CalendarEventDialog mutation={"create"} {...props} />;
};

export default CalendarEventCreationDialog;
