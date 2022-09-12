import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateGoal, useGoalReducer } from "@web/graphql/generated/hooks/goal.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";
import { GoalCreationInput } from "@web/graphql/generated/inputs/goal.inputs";
import Goal from "@web/graphql/generated/types/Goal";
import { GoalFragment } from "@web/graphql/generated/fragments/goal.fragment";
import fields from "@web/graphql/generated/fields/goal.fields";

export type GoalCreationDialogProps = ReturnType<typeof bindPopover>;

export default function GoalCreationDialog(props: GoalCreationDialogProps) {
  const [create,] = useCreateGoal();
  const dataTuple = useGoalReducer();
  return CreationDialog<Goal, GoalCreationInput, { createGoal: GoalFragment }>({
    typeName: "goal",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
