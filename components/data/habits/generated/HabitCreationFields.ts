import CreationFields from "@/components/data/CreationFields";
import { HabitFragment } from "@/graphql/generated/fragments/habit.fragment";
import { HabitCreationInput } from "@/graphql/generated/inputs/habit.inputs";
import { Habit } from "@/graphql/generated/models/habit.model";

interface HabitCreationFieldsProps {
  dataTuple: [HabitCreationInput, Dispatch<Payload<HabitCreationInput>>];
}

export default function HabitCreationFields(props: HabitCreationFieldsProps) {
  return CreationFields<Habit, HabitCreationInput, { createHabit: HabitFragment }>({
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
        type: "Number",
        required: false,
      },
    ],
    ...props,
  });
}
