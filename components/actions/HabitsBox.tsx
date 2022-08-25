import HabitCreationDialog from "@/components/data/habits/generated/HabitCreationDialog";
import DataBox, { DataBoxProps } from "@/components/DataBox";
import Habit from "@/graphql/generated/types/Habit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { FC } from "react";

type HabitsBoxProps = Pick<DataBoxProps, "displayTitle"> & {
  habits: Habit[];
  displayTitle?: boolean;
};

const HabitsBox: FC<HabitsBoxProps> = (props: HabitsBoxProps) => {
  const { habits, displayTitle } = props;
  const newHabitDialogState = usePopupState({
    variant: "popover",
    popupId: `new-habit-dialog`,
  });
  return (
    <DataBox title={"Habits"} displayTitle={displayTitle}>
      {habits?.length ? (
        habits.map((habit, _index) => {
          return (
            <Box p={"1rem"} key={habit.id}>
              <Typography>{habit.name}</Typography>
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
          <Button variant={"contained"} {...bindTrigger(newHabitDialogState)}>
            {"Create a habit"}
          </Button>
          <HabitCreationDialog {...bindPopover(newHabitDialogState)} />
        </Box>
      )}
    </DataBox>
  );
};

export default HabitsBox;
