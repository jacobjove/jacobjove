import Box from "@mui/material/Box";
import CreationDialog from "@web/components/data/CreationDialog";
import Cron from "@web/components/fields/cron";
import TitleAndDescriptionFields from "@web/components/fields/TitleAndDescriptionFields";
import fields from "@web/generated/graphql/fields/habit.fields";
import { HabitFragment } from "@web/generated/graphql/fragments/habit.fragment";
import { HabitCreationInput } from "@web/generated/graphql/inputs/habit.inputs";
import Habit from "@web/generated/graphql/types/Habit";
import { useCreateHabit, useHabitReducer } from "@web/generated/hooks/habit.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";
import { useState } from "react";

export interface HabitCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
}

export default function HabitCreationDialog(props: HabitCreationDialogProps) {
  const [create] = useCreateHabit();
  const dataTuple = useHabitReducer();
  const [habitData, dispatchHabitData] = dataTuple;
  const editingState = useState(true);
  // console.log("fields", fields);
  return (
    <CreationDialog<Habit, HabitCreationInput, { createHabit: HabitFragment }>
      typeName="habit"
      dataTuple={dataTuple}
      create={create}
      fields={fields}
      {...props}
    >
      <Box pt={2}>
        <TitleAndDescriptionFields
          titleConfig={{ name: "name", label: "Habit name" }}
          descriptionConfig={{ name: "description", label: "Description" }}
          dataTuple={dataTuple}
          editingState={editingState}
        />
        <Cron
          value={habitData.cron || ""}
          setValue={(value: string) => dispatchHabitData({ field: "cron", value })}
        />
      </Box>
    </CreationDialog>
  );
}
