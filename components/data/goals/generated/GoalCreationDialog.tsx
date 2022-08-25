import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/goal.fields";
import { GoalFragment } from "@/graphql/generated/fragments/goal.fragment";
import { useCreateGoal, useGoalDataReducer } from "@/graphql/generated/hooks/goal.hooks";
import { GoalCreationInput } from "@/graphql/generated/inputs/goal.inputs";
import { getOptimisticResponseForGoalCreation } from "@/graphql/generated/mutations/goal.mutations";
import Goal from "@/graphql/generated/types/Goal";
import { bindPopover } from "material-ui-popup-state/hooks";

export type GoalCreationDialogProps = ReturnType<typeof bindPopover>;

export default function GoalCreationDialog(props: GoalCreationDialogProps) {
  const [create] = useCreateGoal();
  const dataTuple = useGoalDataReducer();
  return CreationDialog<Goal, GoalCreationInput, { createGoal: GoalFragment }>({
    typeName: "goal",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    getOptimisticResponse: getOptimisticResponseForGoalCreation,
    ...props,
  });
}
