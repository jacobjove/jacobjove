import { Action, UserAction, UserActionSchedule } from "@/graphql/schema";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
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
        <Link href={`/actions/${userActionSchedule.userAction.action.slug}`} passHref>
          <Typography component="a">{userActionSchedule.userAction.action.name}</Typography>
        </Link>{" "}
        <Typography component="small">
          every {userActionSchedule.frequency.toLowerCase()}
        </Typography>
        <IconButton
          title={`Update schedule`}
          onClick={() => {
            console.log("modify schedule...");
          }}
        >
          <RepeatIcon sx={{ color: "lightgray", fontSize: "1rem" }} />
        </IconButton>
      </CardContent>
    </StyledCard>
  );
};

export default ActionCard;
