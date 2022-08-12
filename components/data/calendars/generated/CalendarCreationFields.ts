import CreationFields from "@/components/data/CreationFields";
import { CalendarFragment } from "@/graphql/generated/fragments/calendar.fragment";
import { CalendarCreationInput } from "@/graphql/generated/inputs/calendar.inputs";
import { Calendar } from "@/graphql/generated/models/calendar.model";

interface CalendarCreationFieldsProps {
  dataTuple: [CalendarCreationInput, Dispatch<Payload<CalendarCreationInput>>];
}

export default function CalendarCreationFields(props: CalendarCreationFieldsProps) {
  return CreationFields<Calendar, CalendarCreationInput, { createCalendar: CalendarFragment }>({
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
        type: "String",
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
        type: "String",
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
        type: "Boolean",
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
        type: "Boolean",
        required: false,
      },
    ],
    ...props,
  });
}
