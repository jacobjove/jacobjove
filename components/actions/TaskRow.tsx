import CompletionCheckbox from "@/components/actions/CompletionCheckbox";
import DateContext from "@/components/DateContext";
import { UPDATE_TASK } from "@/graphql/mutations";
import { Task } from "@/graphql/schema";
import { useMutation } from "@apollo/client";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditIcon from "@mui/icons-material/Edit";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RepeatIcon from "@mui/icons-material/Repeat";
import StopIcon from "@mui/icons-material/Stop";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { format, isSameDay, isSameYear, parseISO } from "date-fns";
import { useSession } from "next-auth/react";
import React, { FC, useContext, useState } from "react";
import { useDrag } from "react-dnd";

interface TaskRowProps {
  task: Task;
}

const TaskRow: FC<TaskRowProps> = (props: TaskRowProps) => {
  const { task } = props;
  const { data: session } = useSession();
  const today = useContext(DateContext);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [actionInProgress, setActionInProgress] = useState(false);
  const [expanded, setExpanded] = useState(isMobile ? false : true);
  const completed = Boolean(task.completedAt);
  const [updateTask, { loading }] = useMutation(UPDATE_TASK);
  // const [updateAction, { loading: updateActionLoading }] = useMutation(UPDATE_ACTION);
  // const loading = updateTaskLoading || updateActionLoading;
  const toggleCompletion = (complete: boolean) => {
    if (!session?.user.id) {
      return;
    }
    console.log("toggleCompletion", complete);
    const completedAt = complete ? null : new Date().toISOString();
    if (session?.user.id) {
      updateTask({
        variables: {
          where: { id: task.id },
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
  const getDueDateString = (dueDateISO: string) => {
    const dueDate = parseISO(dueDateISO);
    if (isSameDay(dueDate, today)) {
      return "Today";
    }
    if (isSameYear(dueDate, today)) {
      return format(dueDate, "M/d");
    }
    return dueDate.toLocaleDateString();
  };
  return (
    <TableRow
      sx={{
        "& td, th": { padding: 0 },
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell>
        <CompletionCheckbox
          checked={completed}
          disabled={loading}
          onClick={() => {
            console.log("checkbox click -->", !completed);
            toggleCompletion(!completed);
          }}
        />
      </TableCell>
      <TableCell>
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
            border: "1px solid rgba(0, 0, 0, 0.05)",
            backgroundColor: "rgba(0, 0, 0, 0.08)",
          }}
        >
          <Box display="flex" justifyContent={"space-between"} alignItems="center">
            <Box display="flex" alignItems="center">
              <Typography fontSize="0.9rem">{`${task.title}`}</Typography>
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
          </Box>
        </Box>
      </TableCell>
      <TableCell>
        <Box px="0.25rem">
          {task.dueDate ? (
            getDueDateString(task.dueDate)
          ) : task.habit?.schedules?.length ? (
            <IconButton
              title={`every ${task.habit.schedules[0].frequency.toLowerCase()}`}
              onClick={handleScheduleIconClick}
              style={{ marginLeft: "auto" }}
            >
              <RepeatIcon sx={{ color: "gray", fontSize: "1rem" }} />
            </IconButton>
          ) : null}
        </Box>
      </TableCell>
      <TableCell>
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
        </Box>
      </TableCell>
      <TableCell>
        <IconButton
          title={`Edit ${task.title}`}
          onClick={() => {
            console.log("edit task");
          }}
        >
          <EditIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <DragIndicatorIcon
          sx={{
            "&:hover": { cursor: "grab" },
            color: "gray",
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default TaskRow;
