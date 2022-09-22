import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/goal.fields";
import { GoalFragment } from "@web/generated/graphql/fragments/goal.fragment";
import { GoalCreationInput } from "@web/generated/graphql/inputs/goal.inputs";
import Goal from "@web/generated/graphql/types/Goal";
import { useCreateGoal, useGoalReducer } from "@web/generated/hooks/goal.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface GoalCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

export default function GoalCreationDialog(props: GoalCreationDialogProps) {
  const [create] = useCreateGoal();
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
