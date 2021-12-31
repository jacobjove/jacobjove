import { Action, UserAction, UserActionSchedule } from "@/graphql/schema";
import RepeatIcon from "@mui/icons-material/Repeat";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { FC } from "react";
import { useDrag } from "react-dnd";

interface ActionChipProps {
  userActionSchedule: UserActionSchedule & {
    userAction: UserAction & {
      action: Action;
    };
  };
}

const ActionChip: FC<ActionChipProps> = ({ userActionSchedule }: ActionChipProps) => {
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
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <Link href={`/actions/${userActionSchedule.userAction.action.slug}`} passHref>
      <StyledAnchor>
        <Chip
          ref={dragRef}
          sx={{
            opacity,
            cursor: "grab",
            position: "relative",
            // paddingRight: "2rem",
            margin: "0.15rem",
            paddingX: "0.3rem",
            paddingY: "0.3rem",
            height: "auto",
            maxHeight: "auto",
            borderRadius: "3px",
          }}
          label={`${userActionSchedule.userAction.action.name}`}
          deleteIcon={
            <IconButton title={`every ${userActionSchedule.frequency.toLowerCase()}`}>
              <RepeatIcon sx={{ color: "gray", fontSize: "1rem" }} />
            </IconButton>
          }
          onDelete={handleDelete}
        />
      </StyledAnchor>
    </Link>
  );
};

export default ActionChip;

const StyledAnchor = styled("a")(() => ({
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },
}));
