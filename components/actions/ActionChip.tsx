import { Action, UserAction, UserActionSchedule } from "@/graphql/schema";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import RepeatIcon from "@mui/icons-material/Repeat";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
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
  const handleScheduleIconClick = () => {
    console.info("You clicked the schedule icon.");
  };
  return (
    <Box
      ref={dragRef}
      sx={{
        opacity,
        position: "relative",
        margin: "0.25rem",
        paddingX: "0.5rem",
        height: "auto",
        maxHeight: "auto",
        borderRadius: "3px",
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography fontSize="0.9rem">
        <Link href={`/actions/${userAction.action.slug}`} passHref>
          <StyledAnchor>{`${userAction.action.name}`}</StyledAnchor>
        </Link>
      </Typography>
      <IconButton
        title={`every ${schedule.frequency.toLowerCase()}`}
        onClick={handleScheduleIconClick}
        style={{ marginLeft: "auto" }}
      >
        <RepeatIcon sx={{ color: "gray", fontSize: "1rem" }} />
      </IconButton>
      <DragIndicatorIcon
        sx={{
          "&:hover": { cursor: "grab" },
          color: "gray",
        }}
      />
    </Box>
  );
};

export default ActionChip;

const StyledAnchor = styled("a")(() => ({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    textDecoration: "none",
  },
}));
