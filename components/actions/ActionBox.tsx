import ActionChip from "@/components/actions/ActionChip";
import { Action, UserAction, UserActionSchedule as _UserActionSchedule } from "@/graphql/schema";
import Box from "@mui/material/Box";
import { FC } from "react";

type UserActionSchedule = _UserActionSchedule & {
  userAction: UserAction & {
    action: Action;
  };
};

interface ActionBoxProps {
  userActionSchedules: UserActionSchedule[];
}

const ActionBox: FC<ActionBoxProps> = (props: ActionBoxProps) => {
  const { userActionSchedules } = props;
  return (
    <Box>
      {userActionSchedules.map((userActionSchedule: UserActionSchedule) => (
        <ActionChip
          key={userActionSchedule.userAction.action.name}
          userActionSchedule={userActionSchedule}
        />
      ))}
    </Box>
  );
};

export default ActionBox;
