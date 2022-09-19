import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RepeatIcon from "@mui/icons-material/Repeat";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import CompletionCheckbox from "@web/components/actions/CompletionCheckbox";
import { useDeviceData } from "@web/components/contexts/DeviceContext";
import { useUser } from "@web/components/contexts/UserContext";
import TaskDialog from "@web/components/data/tasks/TaskDialog";
import { useUpdateTask } from "@web/generated/hooks/task.hooks";
import { TaskFragment } from "@web/graphql/generated/fragments/task.fragment";
import { getOptimisticResponseForTaskUpdate } from "@web/graphql/generated/mutations/task.mutations";
import cronstrue from "cronstrue";
import { format, isPast, isSameDay, isSameYear, isToday } from "date-fns";
import { bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { FC, RefObject, useMemo, useState } from "react";
import CompletionTallyChart from "../../habits/CompletionTallyChart";
import DraggableTaskRow from "./DraggableTaskRow";

const TASK_TITLE_FONT_SIZE_REM = 0.9;

export interface TaskRowProps {
  task: TaskFragment;
  asSubtask?: boolean;
  collapsed?: boolean;
  dndRef?: RefObject<HTMLTableRowElement>;
  isDragging?: boolean;
  onLoading?: (isLoading: boolean) => void;
  onEditing?: (isEditing: boolean) => void;
}

export const TaskRow: FC<TaskRowProps> = ({
  task,
  asSubtask = false,
  collapsed = false,
  dndRef,
  isDragging = false,
  onLoading,
}) => {
  const { user } = useUser();

  const subtasks = useMemo(() => {
    if (user) {
      return user?.tasks.filter((t) => t.parentId === task.id);
    } else {
      return [];
    }
  }, [user, task]);

  const [completed, setCompleted] = useState(!!task.completedAt);
  const { isMobile, isMobileWidth } = useDeviceData();
  const [subtasksExpanded, setSubtasksExpanded] = useState(isMobile ? false : false);
  const dialogState = usePopupState({ variant: "popover", popupId: `task-${task.id}-dialog` });

  const habit = task.habitId ? user?.habits?.find((habit) => habit.id === task.habitId) : null;

  const [updateTask, { loading }] = useUpdateTask();

  onLoading && onLoading(loading);

  const toggleCompletion = (complete: boolean) => {
    setCompleted(complete);
    const completedAt = complete ? new Date() : null;
    const data = { completedAt };
    const optimisticResponse = getOptimisticResponseForTaskUpdate(task as TaskFragment, data);
    updateTask.current?.({
      variables: {
        where: { id: task.id },
        data,
      },
      optimisticResponse,
    });
  };

  const isHabit = Boolean(task.habitId);

  const dueDate = task.dueDate ?? null;
  const scheduledDate = task.plannedStartDate ?? null;

  const dueDateTextElement = getDateTextElement(dueDate);
  const scheduledDateTextElement = getDateTextElement(scheduledDate);

  const dialogTriggerProps = bindTrigger(dialogState);
  return (
    <>
      <StyledTableRow
        isDragging={isDragging}
        isMobile={isMobile}
        hover={!isDragging}
        {...(dndRef ? { ref: dndRef } : {})}
      >
        <TableCell>
          <CompletionCheckbox
            checked={completed}
            disabled={loading}
            onClick={(event) => {
              event.preventDefault();
              toggleCompletion(!completed);
            }}
          />
        </TableCell>
        <TableCell
          sx={{
            ...(completed && {
              textDecoration: "line-through",
            }),
          }}
          onClick={(e) => {
            dialogTriggerProps.onClick(e);
          }}
        >
          <Box
            sx={{
              position: "relative",
              minHeight: "2.2rem",
              minWidth: 0,
              height: "auto",
              maxHeight: "auto",
              borderRadius: "3px",
              border: isHabit ? "1px solid rgba(0, 0, 0, 0.05)" : "none",
              color: (theme) => (theme.palette.mode === "light" ? "black" : "white"),
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box py={1}>
                <Typography
                  sx={{
                    fontSize: asSubtask
                      ? `${TASK_TITLE_FONT_SIZE_REM * 0.9}rem`
                      : `${TASK_TITLE_FONT_SIZE_REM}rem`,
                    textTransform: "none",
                    lineHeight: 1.1,
                  }}
                >
                  {task.title}
                </Typography>
                {task.description && (
                  <Typography fontSize={`${TASK_TITLE_FONT_SIZE_REM * 0.75}rem`}>
                    {task.description}
                  </Typography>
                )}
              </Box>
              {subtasks?.length ? (
                <IconButton
                  title={`${subtasksExpanded ? "Collapse" : "Expand"}`}
                  sx={{
                    backgroundColor: "transparent",
                    backgroundOrigin: "content-box",
                  }}
                  onClick={(event) => {
                    event.preventDefault();
                    setSubtasksExpanded(!subtasksExpanded);
                  }}
                >
                  {subtasksExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              ) : null}
            </Box>
            {!!habit && <CompletionTallyChart nCompletions={0} />}
            {habit?.cron && (
              <IconButton
                title={cronstrue.toString(habit.cron, { verbose: true })}
                onClick={(event) => {
                  event.preventDefault();
                  console.info("You clicked the schedule icon.");
                }}
              >
                <RepeatIcon sx={{ color: "gray" }} />
              </IconButton>
            )}
          </Box>
        </TableCell>
        {isMobileWidth ? null : (
          <>
            <TableCell sx={{ minWidth: "4rem" }}>
              <Box px="0.25rem" display="flex" justifyContent={"center"} width={"100%"}>
                {scheduledDate && (
                  <Box
                    fontSize="0.8rem"
                    textAlign={"center"}
                    sx={{
                      ...(isToday(scheduledDate) && {
                        color: (theme) => theme.palette.warning.main,
                      }),
                      ...(isPast(scheduledDate) && { color: (theme) => theme.palette.error.main }),
                    }}
                  >
                    {scheduledDateTextElement}
                  </Box>
                )}
              </Box>
            </TableCell>
            <TableCell sx={{ minWidth: "4rem" }}>
              <Box px="0.25rem" display="flex" justifyContent={"center"} width={"100%"}>
                {dueDate ? (
                  <Box
                    fontSize="0.8rem"
                    textAlign={"center"}
                    sx={{
                      ...(isToday(dueDate) && { color: (theme) => theme.palette.warning.main }),
                      ...(isPast(dueDate) && { color: (theme) => theme.palette.error.main }),
                    }}
                  >
                    {dueDateTextElement}
                  </Box>
                ) : null}
              </Box>
            </TableCell>
          </>
        )}
        <TableCell sx={{ "&:hover": { cursor: "grab" } }} className={`${isMobile ? "hidden" : ""}`}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              "&:hover": { cursor: "grab" },
            }}
          >
            <DragIndicatorIcon
              className="drag-handle"
              sx={{
                color: "gray",
                "&:hover": { cursor: "grab" },
              }}
            />
          </Box>
        </TableCell>
      </StyledTableRow>
      {!collapsed &&
        subtasks?.map((subtask, index) => (
          <DraggableTaskRow
            key={subtask.id}
            task={subtask}
            asSubtask={true}
            collapsed={!subtasksExpanded || isDragging}
            index={index}
          />
        ))}
      <TaskDialog data={task} {...bindPopover(dialogState)} />
    </>
  );
};

export default TaskRow;

function getDateTextElement(date: Date | null) {
  if (!date) return null;
  const today = new Date();
  const dateString = date ? (
    isSameDay(date, today) ? (
      <span style={{ fontWeight: "bold" }}>{"Today"}</span>
    ) : isSameYear(date, today) ? (
      format(date, "M/d")
    ) : (
      date.toLocaleDateString()
    )
  ) : (
    ""
  );
  const timeString = date?.getTime() ? format(date, "h:mm a") : "";
  return dateString ? (
    <Box fontSize={"inherit"} lineHeight={1}>
      <Typography fontSize={"inherit"}>
        {dateString}
        {!!timeString && ", "}
      </Typography>
      {!!timeString && (
        <Typography component="small" variant="inherit" noWrap>
          {timeString}
        </Typography>
      )}
    </Box>
  ) : null;
}

interface StyledTableRowProps extends Pick<TaskRowProps, "isDragging" | "collapsed" | "asSubtask"> {
  isMobile: boolean;
}

const StyledTableRow = styled(TableRow, {
  shouldForwardProp: (prop) =>
    !["isDragging", "collapsed", "asSubtask", "isMobile"].includes(prop.toString()),
})<StyledTableRowProps>(({ theme, isDragging, collapsed, asSubtask, isMobile }) => {
  const dividerColor = theme.palette.divider;
  const bgOpacity = isDragging ? "0.2" : "0.05";
  return {
    "& *": { ...(isDragging && { opacity: 0 }) },
    borderTop: isDragging ? `1px solid ${dividerColor}` : "initial",
    borderBottom: isDragging ? `2px solid ${dividerColor}` : "initial",
    cursor: isDragging ? "grabbing" : "pointer",
    // TODO: A CSS transition would be nice here...
    display: collapsed ? "none" : "table-row",
    backgroundColor: asSubtask
      ? theme.palette.mode === "light"
        ? `rgba(0,0,0,${bgOpacity})`
        : `rgba(255,255,255,${bgOpacity})`
      : "transparent",
    "& .drag-handle": { visibility: isMobile ? "visible" : "hidden" },
    "& .actions-menu-icon": { visibility: "hidden" },
    "&:hover": {
      "& .drag-handle": {
        visibility: "visible",
        color: "#666666",
      },
      "& .actions-menu-icon": { visibility: "visible" },
    },
    "& td, & th": {
      minWidth: "3.3rem",
      "&:nth-of-type(2)": {
        width: "90%",
      },
      "&:last-of-type": {
        minWidth: "initial",
      },
    },
    "& td": {
      padding: "6px 0.25rem",
      "& svg": {
        fontSize: "1.33rem",
        color: "#808080",
        "&:hover": {
          color: theme.palette.mode === "light" ? "#666666" : "#ffffff",
        },
      },
      "& button:hover svg": {
        color: theme.palette.mode === "light" ? "#666666" : "#ffffff",
      },
    },
    "& th": {
      py: 0,
    },
    "&:last-child td, &:last-child th": { border: 0 },
  };
});
