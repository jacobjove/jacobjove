import ActionChip from "@/components/actions/ActionChip";
import { UserAction as _UserAction, UserActionSchedule } from "@/graphql/schema";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { FC } from "react";

type UserAction = _UserAction & {
  schedules: UserActionSchedule[];
};

export interface ActionBoxProps {
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
        <IconButton component={"a"} color="info" style={{ marginLeft: 3 }} title="Explore actions">
          <SearchIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default ActionBox;
