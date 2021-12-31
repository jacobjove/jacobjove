import ActionChip from "@/components/actions/ActionChip";
import { Action, UserAction as _UserAction, UserActionSchedule } from "@/graphql/schema";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { FC } from "react";

type UserAction = _UserAction & {
  action: Action;
  schedules: UserActionSchedule[];
};

interface ActionBoxProps {
  userActions: UserAction[];
}

const ActionBox: FC<ActionBoxProps> = (props: ActionBoxProps) => {
  const { userActions } = props;
  return (
    <div>
      {userActions.map((userAction: UserAction) => (
        <ActionChip key={userAction.action.name} userAction={userAction} />
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
