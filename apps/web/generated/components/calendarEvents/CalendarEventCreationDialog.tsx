import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/calendarEvent.fields";
import { CalendarEventFragment } from "@web/generated/graphql/fragments/calendarEvent.fragment";
import { CalendarEventCreationInput } from "@web/generated/graphql/inputs/calendarEvent.inputs";
import CalendarEvent from "@web/generated/graphql/types/CalendarEvent";
import {
  useCalendarEventReducer,
  useCreateCalendarEvent,
} from "@web/generated/hooks/calendarEvent.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface CalendarEventCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

export default function CalendarEventCreationDialog(props: CalendarEventCreationDialogProps) {
  const [create] = useCreateCalendarEvent();
  const dataTuple = useCalendarEventReducer();
  return CreationDialog<
    CalendarEvent,
    CalendarEventCreationInput,
    { createCalendarEvent: CalendarEventFragment }
  >({
    typeName: "calendarEvent",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
