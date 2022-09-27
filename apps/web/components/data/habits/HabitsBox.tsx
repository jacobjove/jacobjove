import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useUser } from "@web/components/contexts/UserContext";
import HabitCreationDialog from "@web/components/data/habits/HabitDialog";
import DataBox, { DataBoxProps } from "@web/components/DataBox";
import Habit from "@web/generated/graphql/types/Habit";
import cronstrue from "cronstrue";
import { bindDialog, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { FC } from "react";

type HabitsBoxProps = Pick<DataBoxProps, "displayTitle"> & {
  habits: Habit[];
  displayTitle?: boolean;
};

const HabitsBox: FC<HabitsBoxProps> = (props: HabitsBoxProps) => {
  const { user } = useUser();
  const { habits, displayTitle } = props;
  const newHabitDialogState = usePopupState({
    variant: "dialog",
    popupId: `new-habit-dialog`,
  });
  return (
    <DataBox title={"Habits"} displayTitle={displayTitle}>
      {habits?.length ? (
        habits.map((habit, _index) => {
          return (
            <Box
              key={habit.id}
              sx={{
                p: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>{habit.name}</Typography>
              {!!habit.cron && <Typography>{cronstrue.toString(habit.cron)}</Typography>}
            </Box>
          );
        })
      ) : (
        <Box textAlign={"center"} my={2}>
          <Typography
            sx={{
              textAlign: "center",
              my: "1rem",
            }}
          >
            {"You don't have any habits yet."}
          </Typography>
        </Box>
      )}
      <Box p={4} textAlign={"center"}>
        <Button variant={"contained"} {...bindTrigger(newHabitDialogState)}>
          {"Create a habit"}
        </Button>
        <HabitCreationDialog
          {...bindDialog(newHabitDialogState)}
          close={newHabitDialogState.close}
        />
      </Box>
    </DataBox>
  );
};

export default HabitsBox;
