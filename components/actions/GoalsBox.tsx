import GoalCreationDialog from "@/components/data/goals/generated/GoalCreationDialog";
import DataBox, { DataBoxProps } from "@/components/DataBox";
import { Goal } from "@/graphql/generated/models/goal.model";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { FC } from "react";

type GoalsBoxProps = Pick<DataBoxProps, "displayTitle"> & {
  goals: Goal[];
};

const GoalsBox: FC<GoalsBoxProps> = (props: GoalsBoxProps) => {
  const { goals, displayTitle } = props;
  const newGoalDialogState = usePopupState({
    variant: "popover",
    popupId: `new-goal-dialog`,
  });
  return (
    <DataBox title={"Goals"} displayTitle={displayTitle}>
      {goals?.length ? (
        goals.map((goal, _index) => {
          return (
            <Box p={"1rem"} key={goal.id}>
              <Typography>{goal.id}</Typography>
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
            {"You don't have any goals yet."}
          </Typography>
          <Button variant={"contained"} {...bindTrigger(newGoalDialogState)}>
            {"Create a goal"}
          </Button>
          <GoalCreationDialog {...bindPopover(newGoalDialogState)} />
        </Box>
      )}
    </DataBox>
  );
};

export default GoalsBox;
