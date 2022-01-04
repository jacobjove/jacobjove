import { Action, UserAction, UserActionSchedule } from "@/graphql/schema";
import RepeatIcon from "@mui/icons-material/Repeat";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";
import { useDrag } from "react-dnd";

interface ActionChipProps {
  userAction: UserAction & {
    action: Action;
    schedules: UserActionSchedule[];
  };
}

const ActionChip: FC<ActionChipProps> = ({ userAction }: ActionChipProps) => {
  const { data: session } = useSession();
  const schedule = userAction.schedules[0]; // TODO
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "action",
    item: {
      type: "action",
      title: userAction.action.name,
      scheduleId: schedule.id,
      calendarId: session?.user?.settings?.defaultCalendarId,
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <Link href={`/actions/${userAction.action.slug}`} passHref>
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
          label={`${userAction.action.name}`}
          deleteIcon={
            <IconButton title={`every ${schedule.frequency.toLowerCase()}`}>
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
