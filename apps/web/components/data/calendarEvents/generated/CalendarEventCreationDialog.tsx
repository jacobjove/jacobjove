import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateCalendarEvent, useCalendarEventReducer } from "@web/graphql/generated/hooks/calendarEvent.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";
import { CalendarEventCreationInput } from "@web/graphql/generated/inputs/calendarEvent.inputs";
import CalendarEvent from "@web/graphql/generated/types/CalendarEvent";
import { CalendarEventFragment } from "@web/graphql/generated/fragments/calendarEvent.fragment";
import fields from "@web/graphql/generated/fields/calendarEvent.fields";

export type CalendarEventCreationDialogProps = ReturnType<typeof bindPopover>;

export default function CalendarEventCreationDialog(props: CalendarEventCreationDialogProps) {
  const [create,] = useCreateCalendarEvent();
  const dataTuple = useCalendarEventReducer();
  return CreationDialog<CalendarEvent, CalendarEventCreationInput, { createCalendarEvent: CalendarEventFragment }>({
    typeName: "calendarEvent",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
