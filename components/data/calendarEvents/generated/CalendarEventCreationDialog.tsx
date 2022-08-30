import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/calendarEvent.fields";
import { CalendarEventFragment } from "@/graphql/generated/fragments/calendarEvent.fragment";
import {
  useCalendarEventReducer,
  useCreateCalendarEvent,
} from "@/graphql/generated/hooks/calendarEvent.hooks";
import { CalendarEventCreationInput } from "@/graphql/generated/inputs/calendarEvent.inputs";
import CalendarEvent from "@/graphql/generated/types/CalendarEvent";
import { bindPopover } from "material-ui-popup-state/hooks";

export type CalendarEventCreationDialogProps = ReturnType<typeof bindPopover>;

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
