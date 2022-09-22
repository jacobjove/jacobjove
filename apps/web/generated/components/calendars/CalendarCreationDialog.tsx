import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/calendar.fields";
import { CalendarFragment } from "@web/generated/graphql/fragments/calendar.fragment";
import { CalendarCreationInput } from "@web/generated/graphql/inputs/calendar.inputs";
import Calendar from "@web/generated/graphql/types/Calendar";
import { useCalendarReducer, useCreateCalendar } from "@web/generated/hooks/calendar.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface CalendarCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

export default function CalendarCreationDialog(props: CalendarCreationDialogProps) {
  const [create] = useCreateCalendar();
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
