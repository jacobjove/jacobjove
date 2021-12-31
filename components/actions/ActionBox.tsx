import ActionChip from "@/components/actions/ActionChip";
import { Action, UserAction, UserActionSchedule as _UserActionSchedule } from "@/graphql/schema";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
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
    <div>
      {userActionSchedules.map((userActionSchedule: UserActionSchedule) => (
        <ActionChip
          key={userActionSchedule.userAction.action.name}
          userActionSchedule={userActionSchedule}
        />
      ))}
      <Link href="/actions" passHref>
        <IconButton component={"a"} color="info" style={{ marginLeft: 3 }}>
          <SearchIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default ActionBox;
