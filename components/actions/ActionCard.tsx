import { Action, UserAction, UserActionSchedule } from "@/graphql/schema";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { FC } from "react";
import { useDrag } from "react-dnd";

interface ActionCardProps {
  userActionSchedule: UserActionSchedule & {
    userAction: UserAction & {
      action: Action;
    };
  };
}

const StyledCard = styled(Card)(() => ({
  margin: "1rem 0.1rem",
}));

const ActionCard: FC<ActionCardProps> = ({ userActionSchedule }: ActionCardProps) => {
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "action",
    item: {
      title: userActionSchedule.userAction.action.name,
      scheduleId: userActionSchedule.id,
      calendarId: 1, // TODO: get calendar id from userActionSchedule
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));
  return (
    <StyledCard ref={dragRef} sx={{ opacity }}>
      <CardContent>
        <Link href={`/actions/${userActionSchedule.userAction.action.slug}`}>
          <a>{userActionSchedule.userAction.action.name}</a>
        </Link>{" "}
        <small>every {userActionSchedule.frequency.toLowerCase()}</small>
      </CardContent>
    </StyledCard>
  );
};

export default ActionCard;
