import { Action, Schedule as _Schedule } from "@/graphql/schema";
import { FC } from "react";
import Box from "@mui/material/Box";
import ActionCard from "@/components/actions/ActionCard";

type Schedule = _Schedule & {
  action: Action;
};

interface ActionTableProps {
  actions: Schedule[];
}

const ActionTable: FC<ActionTableProps> = (props: ActionTableProps) => {
  const { actions } = props;
  return (
    <Box>
      {actions.map((schedule: Schedule) => (
        <ActionCard key={schedule.action.name} schedule={schedule} />
      ))}
    </Box>
  );
};

export default ActionTable;
