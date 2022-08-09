import DataBox, { DataBoxProps } from "@/components/DataBox";
import { Habit } from "@/graphql/schema/generated/models/habit.model";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FC } from "react";

type HabitsBoxProps = Pick<DataBoxProps, "displayTitle"> & {
  habits: Habit[];
  displayTitle?: boolean;
};

const HabitsBox: FC<HabitsBoxProps> = (props: HabitsBoxProps) => {
  const { habits, displayTitle } = props;
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
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          {"You don't have any habits yet."}
        </Typography>
      )}
    </DataBox>
  );
};

export default HabitsBox;
