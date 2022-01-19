import ActionDialog from "@/components/actions/ActionDialog";
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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RepeatIcon from "@mui/icons-material/Repeat";
import StopIcon from "@mui/icons-material/Stop";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { format, isSameDay, isSameYear, parseISO } from "date-fns";
import { bindMenu, bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { useSession } from "next-auth/react";
import React, { FC, useContext, useState } from "react";
import { useDrag } from "react-dnd";

interface TaskRowProps {
  task: Task;
  collapsed?: boolean;
}

const TaskRow: FC<TaskRowProps> = (props: TaskRowProps) => {
  const { task, collapsed: _collapsed } = props;
  const completed = Boolean(task.completedAt);
  const collapsed = _collapsed ?? false;
  const { data: session } = useSession();
  const today = useContext(DateContext);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [actionInProgress, setActionInProgress] = useState(false);
  const [subtasksExpanded, setSubtasksExpanded] = useState(isMobile ? false : false);
  const menuState = usePopupState({ variant: "popper", popupId: `task-${task.id}-menu` });
  const dialogState = usePopupState({ variant: "popover", popupId: `task-${task.id}-dialog` });
  const [updateTask, { loading }] = useMutation(UPDATE_TASK);
  const toggleCompletion = (complete: boolean) => {
    if (!session?.user.id) return;
    const completedAt = complete ? new Date().toISOString() : null;
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
              fontSize: "1.33rem",
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
              paddingX: 0,
              height: "auto",
              maxHeight: "auto",
              borderRadius: "3px",
              border: isHabit ? "1px solid rgba(0, 0, 0, 0.05)" : "none",
              backgroundColor: (theme) =>
                isHabit
                  ? `${
                      theme.palette.mode === "light"
                        ? "rgba(0, 0, 0, 0.08)"
                        : "rgba(255, 255, 255, 0.08)"
                    }`
                  : "transparent",
            }}
          >
            <Box display="flex" justifyContent={"space-between"} alignItems="center">
              <Box display="flex" alignItems="center">
                <Button
                  variant="text"
                  sx={{
                    padding: "0 0.25rem",
                    margin: 0,
                    fontSize: "0.8rem",
                    textTransform: "none",
                    minWidth: 0,
                    color: (theme) => (theme.palette.mode === "light" ? "black" : "white"),
                  }}
                  {...bindTrigger(dialogState)}
                >
                  {task.title}
                </Button>
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
            title={`Display actions for ${task.title}`}
            {...bindTrigger(menuState)}
            disableTouchRipple
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            {...bindMenu(menuState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            MenuListProps={{
              "aria-labelledby": "calendar-menu-button-x",
            }}
          >
            <Box px="0.5rem">
              <IconButton
                title={`Edit ${task.title}`}
                onClick={() => {
                  console.log("edit task");
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                title={`Delete task`}
                onClick={() => {
                  const archivedAt = new Date().toISOString();
                  updateTask({
                    variables: {
                      where: { id: task.id },
                      data: {
                        archivedAt: { set: archivedAt },
                      },
                    },
                    optimisticResponse: {
                      updateTask: {
                        __typename: "Task",
                        ...task,
                        archivedAt,
                      },
                    },
                  }).catch((error) => {
                    console.error(error);
                  });
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Menu>
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
      <ActionDialog {...bindPopover(dialogState)} task={task} />
    </>
  );
};

export default TaskRow;
