import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/calendar.fields";
import { CalendarFragment } from "@/graphql/generated/fragments/calendar.fragment";
import {
  useCalendarDataReducer,
  useCreateCalendar,
} from "@/graphql/generated/hooks/calendar.hooks";
import { CalendarCreationInput } from "@/graphql/generated/inputs/calendar.inputs";
import { getOptimisticResponseForCalendarCreation } from "@/graphql/generated/mutations/calendar.mutations";
import Calendar from "@/graphql/generated/types/Calendar";
import { bindPopover } from "material-ui-popup-state/hooks";

export type CalendarCreationDialogProps = ReturnType<typeof bindPopover>;

export default function CalendarCreationDialog(props: CalendarCreationDialogProps) {
  const [create] = useCreateCalendar();
  const dataTuple = useCalendarDataReducer();
  return CreationDialog<Calendar, CalendarCreationInput, { createCalendar: CalendarFragment }>({
    typeName: "calendar",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    getOptimisticResponse: getOptimisticResponseForCalendarCreation,
    ...props,
  });
}
