import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateCalendar, useCalendarReducer } from "@web/graphql/generated/hooks/calendar.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";
import { CalendarCreationInput } from "@web/graphql/generated/inputs/calendar.inputs";
import Calendar from "@web/graphql/generated/types/Calendar";
import { CalendarFragment } from "@web/graphql/generated/fragments/calendar.fragment";
import fields from "@web/graphql/generated/fields/calendar.fields";

export type CalendarCreationDialogProps = ReturnType<typeof bindPopover>;

export default function CalendarCreationDialog(props: CalendarCreationDialogProps) {
  const [create,] = useCreateCalendar();
  const dataTuple = useCalendarReducer();
  return CreationDialog<Calendar, CalendarCreationInput, { createCalendar: CalendarFragment }>({
    typeName: "calendar",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
