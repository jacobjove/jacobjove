import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateHabit, useHabitReducer } from "@web/graphql/generated/hooks/habit.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";
import { HabitCreationInput } from "@web/graphql/generated/inputs/habit.inputs";
import Habit from "@web/graphql/generated/types/Habit";
import { HabitFragment } from "@web/graphql/generated/fragments/habit.fragment";
import fields from "@web/graphql/generated/fields/habit.fields";

export type HabitCreationDialogProps = ReturnType<typeof bindPopover>;

export default function HabitCreationDialog(props: HabitCreationDialogProps) {
  const [create,] = useCreateHabit();
  const dataTuple = useHabitReducer();
  return CreationDialog<Habit, HabitCreationInput, { createHabit: HabitFragment }>({
    typeName: "habit",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
