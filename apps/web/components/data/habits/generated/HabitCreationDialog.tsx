import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/habit.fields";
import { HabitFragment } from "@web/generated/graphql/fragments/habit.fragment";
import { HabitCreationInput } from "@web/generated/graphql/inputs/habit.inputs";
import Habit from "@web/generated/graphql/types/Habit";
import { useCreateHabit, useHabitReducer } from "@web/generated/hooks/habit.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";

export type HabitCreationDialogProps = ReturnType<typeof bindPopover>;

export default function HabitCreationDialog(props: HabitCreationDialogProps) {
  const [create] = useCreateHabit();
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
