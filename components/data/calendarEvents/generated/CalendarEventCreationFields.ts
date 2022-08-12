import CreationFields from "@/components/data/CreationFields";
import { CalendarEventFragment } from "@/graphql/generated/fragments/calendarEvent.fragment";
import { CalendarEventCreationInput } from "@/graphql/generated/inputs/calendarEvent.inputs";
import { CalendarEvent } from "@/graphql/generated/models/calendarEvent.model";

interface CalendarEventCreationFieldsProps {
  dataTuple: [CalendarEventCreationInput, Dispatch<Payload<CalendarEventCreationInput>>];
}

export default function CalendarEventCreationFields(props: CalendarEventCreationFieldsProps) {
  return CreationFields<
    CalendarEvent,
    CalendarEventCreationInput,
    { createCalendarEvent: CalendarEventFragment }
  >({
    dataTuple: props.dataTuple,
    fields: [
      {
        name: "",
        label: "",
        type: "ID",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "ID",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "ID",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "ID",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "ID",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "DateTime",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "DateTime",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Boolean",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Boolean",
        required: false,
      },
    ],
    ...props,
  });
}
