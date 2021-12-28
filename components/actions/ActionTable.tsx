import ActionCard from "@/components/actions/ActionCard";
import { Action, UserAction, UserActionSchedule as _UserActionSchedule } from "@/graphql/schema";
import Box from "@mui/material/Box";
import { FC } from "react";

type UserActionSchedule = _UserActionSchedule & {
  userAction: UserAction & {
    action: Action;
  };
};

interface ActionTableProps {
  userActionSchedules: UserActionSchedule[];
}

const ActionTable: FC<ActionTableProps> = (props: ActionTableProps) => {
  const { userActionSchedules } = props;
  return (
    <Box>
      {userActionSchedules.map((userActionSchedule: UserActionSchedule) => (
        <ActionCard
          key={userActionSchedule.userAction.action.name}
          userActionSchedule={userActionSchedule}
        />
      ))}
    </Box>
  );
};

export default ActionTable;
