import CreationFields from "@/components/data/CreationFields";
import { GoalFragment } from "@/graphql/generated/fragments/goal.fragment";
import { GoalCreationInput } from "@/graphql/generated/inputs/goal.inputs";
import { Goal } from "@/graphql/generated/models/goal.model";

interface GoalCreationFieldsProps {
  dataTuple: [GoalCreationInput, Dispatch<Payload<GoalCreationInput>>];
}

export default function GoalCreationFields(props: GoalCreationFieldsProps) {
  return CreationFields<Goal, GoalCreationInput, { createGoal: GoalFragment }>({
    dataTuple: props.dataTuple,
    fields: [
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
    ],
    ...props,
  });
}
