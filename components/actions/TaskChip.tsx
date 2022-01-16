import CompletionCheckbox from "@/components/actions/CompletionCheckbox";
import { UPDATE_TASK } from "@/graphql/mutations";
import { Task } from "@/graphql/schema";
import { useMutation } from "@apollo/client";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditIcon from "@mui/icons-material/Edit";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSession } from "next-auth/react";
import React, { FC, useState } from "react";
import { useDrag } from "react-dnd";

interface TaskChipProps {
  task: Task;
}

const TaskChip: FC<TaskChipProps> = (props: TaskChipProps) => {
  const { task } = props;
  const { data: session } = useSession();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [actionInProgress, setActionInProgress] = useState(false);
  const [expanded, setExpanded] = useState(isMobile ? false : true);
  const completed = Boolean(task.completedAt);
  const [updateTask, { loading }] = useMutation(UPDATE_TASK);
  const toggleCompletion = (complete: boolean) => {
    if (!session?.user.id) {
      return;
    }
    const completedAt = complete ? null : new Date().toISOString();
    if (session?.user.id) {
      updateTask({
        variables: {
          data: {
            completedAt,
          },
        },
        optimisticResponse: {
          __typename: "Mutation",
          updateTask: {
            __typename: "Task",
            ...task,
            completedAt,
          },
        },
      }).catch((error) => {
        console.error(error);
      });
    }
  };
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "task",
    item: {
      type: "action",
      title: task.title,
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
        // paddingX: "0.5rem",
        height: "auto",
        maxHeight: "auto",
        borderRadius: "3px",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        backgroundColor: "rgba(0, 0, 0, 0.08)",
      }}
    >
      <Box display="flex" justifyContent={"space-between"} alignItems="center">
        <Box display="flex" alignItems="center">
          <CompletionCheckbox
            checked={completed}
            disabled={loading}
            onClick={() => {
              console.log("checkbox click -->", !completed);
              toggleCompletion(!completed);
            }}
          />
          <Typography fontSize="0.9rem">
            {`${task.title}`}
            {/* <Link href={`/app/users/${session.user.name}`} passHref>
              <StyledAnchor>{`${task.title}`}</StyledAnchor>
            </Link> */}
          </Typography>
          {/* {!!task.actions?.length && (
            <IconButton
              title={`${expanded ? "Collapse routine" : "Expand routine"}`}
              sx={{
                marginLeft: "0.33rem",
                backgroundColor: USE_CIRCLE_ICONS ? "white" : "transparent",
                backgroundOrigin: "content-box",
              }}
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          )} */}
        </Box>
        <Box display="flex" alignItems="center" marginLeft="auto">
          {(!actionInProgress && (
            <IconButton
              title={`Begin ${task.title}`}
              onClick={() => {
                setActionInProgress(true);
              }}
            >
              <PlayArrowIcon />
            </IconButton>
          )) || (
            <IconButton
              title="Stop action"
              onClick={() => {
                setActionInProgress(false);
              }}
            >
              <StopIcon />
            </IconButton>
          )}
          <IconButton
            title={`Edit ${task.title}`}
            onClick={() => {
              console.log("edit task");
            }}
          >
            <EditIcon />
          </IconButton>
          <DragIndicatorIcon
            sx={{
              "&:hover": { cursor: "grab" },
              color: "gray",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TaskChip;
