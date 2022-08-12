import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/calendarEvent.fields";
import { CalendarEventFragment } from "@/graphql/generated/fragments/calendarEvent.fragment";
import {
  useCalendarEventDataReducer,
  useCreateCalendarEvent,
} from "@/graphql/generated/hooks/calendarEvent.hooks";
import { CalendarEventCreationInput } from "@/graphql/generated/inputs/calendarEvent.inputs";
import { CalendarEvent } from "@/graphql/generated/models/calendarEvent.model";
import { getOptimisticResponseForCalendarEventCreation } from "@/graphql/generated/mutations/calendarEvent.mutations";
import { bindPopover } from "material-ui-popup-state/hooks";

export type CalendarEventCreationDialogProps = ReturnType<typeof bindPopover>;

export default function CalendarEventCreationDialog(props: CalendarEventCreationDialogProps) {
  const [create] = useCreateCalendarEvent();
  const dataTuple = useCalendarEventDataReducer();
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
    getOptimisticResponse: getOptimisticResponseForCalendarEventCreation,
    ...props,
  });
}
