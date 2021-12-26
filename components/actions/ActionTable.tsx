import ActionCard from "@/components/actions/ActionCard";
import { Action, ActionSchedule as _ActionSchedule, Schedule } from "@/graphql/schema";
import Box from "@mui/material/Box";
import { FC } from "react";

type ActionSchedule = _ActionSchedule & {
  action: Action;
  schedule: Schedule;
};

interface ActionTableProps {
  actionSchedules: ActionSchedule[];
}

const ActionTable: FC<ActionTableProps> = (props: ActionTableProps) => {
  const { actionSchedules } = props;
  return (
    <Box>
      {actionSchedules.map((actionSchedule: ActionSchedule) => (
        <ActionCard key={actionSchedule.action.name} actionSchedule={actionSchedule} />
      ))}
    </Box>
  );
};

export default ActionTable;
