import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/habit.fields";
import { HabitFragment } from "@/graphql/generated/fragments/habit.fragment";
import { useCreateHabit, useHabitDataReducer } from "@/graphql/generated/hooks/habit.hooks";
import { HabitCreationInput } from "@/graphql/generated/inputs/habit.inputs";
import { getOptimisticResponseForHabitCreation } from "@/graphql/generated/mutations/habit.mutations";
import { Habit } from "@/graphql/generated/types/habit.type";
import { bindPopover } from "material-ui-popup-state/hooks";

export type HabitCreationDialogProps = ReturnType<typeof bindPopover>;

export default function HabitCreationDialog(props: HabitCreationDialogProps) {
  const [create] = useCreateHabit();
  const dataTuple = useHabitDataReducer();
  return CreationDialog<Habit, HabitCreationInput, { createHabit: HabitFragment }>({
    typeName: "habit",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    getOptimisticResponse: getOptimisticResponseForHabitCreation,
    ...props,
  });
}
