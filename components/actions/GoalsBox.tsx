import DataBox, { DataBoxProps } from "@/components/DataBox";
import { Goal } from "@/generated/models/goal.model";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FC } from "react";

type GoalsBoxProps = Pick<DataBoxProps, "displayTitle"> & {
  goals: Goal[];
};

const GoalsBox: FC<GoalsBoxProps> = (props: GoalsBoxProps) => {
  const { goals, displayTitle } = props;
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
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          {"You don't have any goals yet."}
        </Typography>
      )}
    </DataBox>
  );
};

export default GoalsBox;
