import CompletionCheckbox from "@/components/actions/CompletionCheckbox";
import DateContext from "@/components/DateContext";
import { UPDATE_TASK } from "@/graphql/mutations";
import { Task } from "@/graphql/schema";
import { useMutation } from "@apollo/client";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  collapsed?: boolean;
}

const TaskRow: FC<TaskRowProps> = (props: TaskRowProps) => {
  const { task, collapsed: _collapsed } = props;
  const collapsed = _collapsed ?? false;
  const { data: session } = useSession();
  const today = useContext(DateContext);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [actionInProgress, setActionInProgress] = useState(false);
  const [subtasksExpanded, setSubtasksExpanded] = useState(isMobile ? false : false);
  const completed = Boolean(task.completedAt);
  const [updateTask, { loading }] = useMutation(UPDATE_TASK);
  const toggleCompletion = (complete: boolean) => {
    if (!session?.user.id) {
      return;
    }
    const completedAt = complete ? new Date().toISOString() : null;
    if (session?.user.id) {
      updateTask({
        variables: {
          where: { id: task.id },
          data: {
            completedAt: { set: completedAt },
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
  const isHabit = Boolean(task.habit);
  return (
    <>
      <TableRow
        sx={{
          // TODO: A CSS transition would be nice here...
          display: collapsed ? "none" : "table-row",
          "& td, th": {
            padding: 0,
            "& svg": {
              fontSize: "1.2rem",
              color: "#808080",
              "&:hover": {
                color: "#666666",
              },
            },
            "& button:hover svg": {
              color: "#666666",
            },
          },
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell sx={{ visibility: task.parentId ? "hidden" : "visible" }}>
          <CompletionCheckbox
            checked={completed}
            disabled={loading || Boolean(task.parentId)}
            onClick={() => {
              toggleCompletion(!completed);
            }}
          />
        </TableCell>
        <TableCell>
          {task.subtasks?.length ? (
            <IconButton
              title={`${subtasksExpanded ? "Collapse" : "Expand"}`}
              sx={{
                backgroundColor: "transparent",
                backgroundOrigin: "content-box",
              }}
              onClick={() => {
                setSubtasksExpanded(!subtasksExpanded);
              }}
            >
              {subtasksExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          ) : task.parentId ? (
            <CompletionCheckbox
              checked={completed}
              disabled={loading}
              onClick={() => {
                toggleCompletion(!completed);
              }}
            />
          ) : null}
        </TableCell>
        <TableCell>
          <Box
            ref={dragRef}
            sx={{
              opacity,
              position: "relative",
              margin: "0.25rem",
              paddingX: isHabit ? "0.5rem" : 0,
              height: "auto",
              maxHeight: "auto",
              borderRadius: "3px",
              border: isHabit ? "1px solid rgba(0, 0, 0, 0.05)" : "none",
              backgroundColor: isHabit ? "rgba(0, 0, 0, 0.08)" : "transparent",
            }}
          >
            <Box display="flex" justifyContent={"space-between"} alignItems="center">
              <Box display="flex" alignItems="center">
                <Typography fontSize="0.8rem">{`${task.title}`}</Typography>
              </Box>
            </Box>
          </Box>
        </TableCell>
        <TableCell>
          <Box px="0.25rem" display="flex" justifyContent={"center"}>
            {task.dueDate ? (
              <Typography component="span" fontSize="0.8rem">
                {getDueDateString(task.dueDate)}
              </Typography>
            ) : task.habit?.schedules?.length ? (
              <IconButton
                title={`every ${task.habit.schedules[0].frequency.toLowerCase()}`}
                onClick={handleScheduleIconClick}
              >
                <RepeatIcon sx={{ color: "gray" }} />
              </IconButton>
            ) : null}
          </Box>
        </TableCell>
        <TableCell>
          <Box display="flex" alignItems="center" mx="auto" px="0.5rem">
            {(!actionInProgress && (
              <IconButton
                title={`Begin ${task.title}`}
                color="success"
                onClick={() => {
                  setActionInProgress(true);
                }}
              >
                <PlayArrowIcon style={{ fontSize: "1.5rem" }} />
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
          <IconButton
            title={`Delete task`}
            onClick={() => {
              console.log("delete task");
            }}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
        <TableCell>
          <Box display="flex" alignItems={"center"} height="100%">
            <DragIndicatorIcon
              sx={{
                "&:hover": { cursor: "grab" },
                color: "gray",
              }}
            />
          </Box>
        </TableCell>
      </TableRow>
      {!collapsed &&
        task.subtasks?.map((subtask) => {
          return <TaskRow key={subtask.id} task={subtask} collapsed={!subtasksExpanded} />;
        })}
    </>
  );
};

export default TaskRow;
