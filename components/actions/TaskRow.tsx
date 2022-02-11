import ActionDialog from "@/components/actions/ActionDialog";
import CompletionCheckbox from "@/components/actions/CompletionCheckbox";
import EditingModeTaskCells from "@/components/actions/EditingModeTaskCells";
import DateContext from "@/components/contexts/DateContext";
import UserContext from "@/components/contexts/UserContext";
import { UPDATE_TASK } from "@/graphql/mutations";
import { Task } from "@/graphql/schema";
import { printError } from "@/utils/apollo/error-handling";
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
import { format, isPast, isSameDay, isSameYear, parseISO } from "date-fns";
import { XYCoord } from "dnd-core";
import { bindMenu, bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { useSession } from "next-auth/react";
import { FC, RefObject, useContext, useMemo, useRef, useState } from "react";
import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";

interface TaskRowProps extends Pick<TaskRowContentProps, "task" | "collapsed"> {
  index: number;
  move?: (dragIndex: number, hoverIndex: number) => void;
  onDrop?: (dropIndex: number) => void;
}

interface TaskRowContentProps {
  task: Task;
  collapsed?: boolean;
  dndRef: RefObject<HTMLTableRowElement>;
  isDragging: boolean;
  onLoading: (isLoading: boolean) => void;
  onEditing: (isEditing: boolean) => void;
}

type DraggedTask = Pick<Task, "id" | "completedAt"> & { index: number };

const TaskRowContent: FC<TaskRowContentProps> = (props) => {
  const { task, collapsed: _collapsed, dndRef, isDragging, onLoading, onEditing } = props;
  const completed = !!task.completedAt;
  const collapsed = _collapsed ?? false;
  const { data: session } = useSession();
  const user = useContext(UserContext);
  const today = useContext(DateContext);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [editing, setEditing] = useState(false);
  const [actionInProgress, setActionInProgress] = useState(false);
  const [subtasksExpanded, setSubtasksExpanded] = useState(isMobile ? false : false);
  const menuState = usePopupState({ variant: "popper", popupId: `task-${task.id}-menu` });
  const dialogState = usePopupState({ variant: "popover", popupId: `task-${task.id}-dialog` });

  const [updateTask, { loading }] = useMutation(UPDATE_TASK);

  onLoading(loading);
  onEditing(editing);

  const toggleCompletion = (complete: boolean) => {
    if (!session?.user.id) return;
    const completedAt = complete ? new Date().toISOString() : null;
    updateTask({
      variables: {
        taskId: task.id,
        data: { completedAt: { set: completedAt } },
      },
      optimisticResponse: {
        __typename: "Mutation",
        updateTask: {
          __typename: "Task",
          subtasks: [],
          habit: null,
          ...task,
          completedAt,
        },
      },
    }).catch((error) => {
      console.error(error);
    });
  };

  const isHabit = Boolean(task.habit);

  const dueDate = task.dueDate ? parseISO(task.dueDate) : null;
  // prettier-ignore
  const dueDateString = dueDate ? (
    isSameDay(dueDate, today) ? "Today" : (
      isSameYear(dueDate, today) ? format(dueDate, "M/d") : dueDate.toLocaleDateString()
    )
  ) : "";

  const bindTriggerProps = bindTrigger(dialogState);
  const menuTriggerProps = bindTrigger(menuState);
  const originalOnClick = menuTriggerProps.onClick;
  menuTriggerProps.onClick = (event) => {
    event.stopPropagation();
    originalOnClick(event);
  };

  return (
    <>
      <TableRow
        ref={dndRef}
        onClick={(e) => {
          if (!editing) bindTriggerProps.onClick(e);
        }}
        sx={{
          opacity: isDragging ? 0 : 1,
          // TODO: A CSS transition would be nice here...
          display: collapsed ? "none" : "table-row",
          "& .drag-handle": { visibility: "hidden" },
          "& .actions-menu-icon": { visibility: "hidden" },
          "&:hover": {
            "& .drag-handle": {
              visibility: "visible",
              color: "#666666",
            },
            "& .actions-menu-icon": { visibility: "visible" },
          },
          "& td, th": {
            padding: 0,
            "& svg": {
              fontSize: "1.33rem",
              color: "#808080",
              "&:hover": {
                color: (theme) => (theme.palette.mode === "light" ? "#666666" : "#ffffff"),
              },
            },
            "& button:hover svg": {
              color: (theme) => (theme.palette.mode === "light" ? "#666666" : "#ffffff"),
            },
          },
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        {editing ? (
          <EditingModeTaskCells
            task={task}
            handleFieldChange={(fieldName, value) => {
              updateTask({
                variables: {
                  taskId: task.id,
                  data: { [fieldName]: { set: value } },
                },
                optimisticResponse: {
                  updateTask: {
                    __typename: "Task",
                    subtasks: [],
                    habit: null,
                    ...task,
                    [fieldName]: value,
                  },
                },
              }).catch((error) => {
                console.error(error);
              });
            }}
            handleSubmit={() => null}
            handleCancel={() => setEditing(false)}
          />
        ) : (
          <>
            <TableCell sx={{ visibility: task.parentId ? "hidden" : "visible" }}>
              <CompletionCheckbox
                checked={completed}
                disabled={loading || Boolean(task.parentId)}
                onClick={(event) => {
                  event.stopPropagation();
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
                  onClick={(event) => {
                    event.stopPropagation();
                    setSubtasksExpanded(!subtasksExpanded);
                  }}
                >
                  {subtasksExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              ) : task.parentId ? (
                <CompletionCheckbox
                  checked={completed}
                  disabled={loading}
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleCompletion(!completed);
                  }}
                />
              ) : null}
            </TableCell>
            <TableCell>
              <Box
                sx={{
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
                        color: (theme) => (theme.palette.mode === "light" ? "black" : "white"),
                        padding: "0 0.25rem",
                        margin: 0,
                        fontSize: "0.8rem",
                        textTransform: "none",
                        minWidth: 0,
                        lineHeight: "1rem",
                        textAlign: "left",
                      }}
                      {...bindTriggerProps}
                    >
                      {task.title}
                      {/* TODO: clean up */}
                      {session?.user.isAdmin && (
                        <small style={{ color: "gray", margin: 2 }}>&nbsp;{task.rank}</small>
                      )}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Box px="0.25rem" display="flex" justifyContent={"center"}>
                {dueDate ? (
                  <Typography
                    component="span"
                    fontSize="0.8rem"
                    sx={{
                      ...(isPast(dueDate) && {
                        color: (theme) => theme.palette.error.main,
                      }),
                    }}
                  >
                    {dueDateString}
                  </Typography>
                ) : task.habit?.schedules?.length ? (
                  <IconButton
                    title={`every ${task.habit.schedules[0].frequency.toLowerCase()}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      console.info("You clicked the schedule icon.");
                    }}
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
                    disabled={loading || editing}
                    onClick={(event) => {
                      event.stopPropagation();
                      setActionInProgress(true);
                    }}
                  >
                    <PlayArrowIcon style={{ fontSize: "1.5rem" }} />
                  </IconButton>
                )) || (
                  <IconButton
                    title="Stop action"
                    onClick={(event) => {
                      event.stopPropagation();
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
                className="actions-menu-icon"
                {...menuTriggerProps}
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
                    onClick={(event) => {
                      event.stopPropagation();
                      setEditing(true);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    title={`Delete task`}
                    onClick={(event) => {
                      event.stopPropagation();
                      const archivedAt = new Date().toISOString();
                      updateTask({
                        variables: {
                          taskId: task.id,
                          data: { archivedAt: { set: archivedAt } },
                        },
                        optimisticResponse: {
                          updateTask: {
                            __typename: "Task",
                            subtasks: [],
                            habit: null,
                            ...task,
                            archivedAt,
                          },
                        },
                      }).catch(printError);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Menu>
            </TableCell>
            <TableCell sx={{ "&:hover": { cursor: "grab" } }}>
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
          </>
        )}
      </TableRow>
      {!collapsed &&
        task.subtasks?.map((subtask, index) => (
          <TaskRow
            key={subtask.id}
            task={subtask}
            collapsed={!subtasksExpanded || isDragging}
            index={index}
          />
        ))}
      <ActionDialog {...bindPopover(dialogState)} task={task} />
    </>
  );
};

const TaskRow = (props: TaskRowProps) => {
  const { task, index, onDrop, move } = props;

  const { data: session } = useSession();
  const dndRef = useRef<HTMLTableRowElement>(null);
  const loadingRef = useRef(false);
  const editingRef = useRef(false);

  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "task",
      item: {
        type: "task",
        id: task.id,
        completedAt: task.completedAt,
        index,
      } as DraggedTask,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: () => !(editingRef.current || loadingRef.current || task.parentId != null),
    }),
    [index, editingRef, loadingRef]
  );

  const [, dropRef] = useDrop(
    () => ({
      accept: ["task"],
      canDrop: (draggedTask: DraggedTask) =>
        // prevent moving between complete/incomplete
        !loadingRef.current && !(draggedTask.completedAt ? !task.completedAt : task.completedAt),
      drop: (item: DraggedTask) => {
        if (!session) return;
        onDrop?.(item.index);
      },
      hover(item: DraggedTask, monitor: DropTargetMonitor) {
        if (!dndRef.current || !move || !monitor.canDrop()) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;

        // Don't replace items with themselves.
        if (dragIndex === hoverIndex) {
          return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = dndRef.current?.getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height.
        // When dragging downwards, only move when the cursor is below 50%.
        // When dragging upwards, only move when the cursor is above 50%.

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        // Time to actually perform the action
        move(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex;
      },
    }),
    [move, loadingRef, index]
  );

  dragRef(dropRef(dndRef));

  return useMemo(() => {
    return (
      <TaskRowContent
        {...props}
        dndRef={dndRef}
        isDragging={isDragging}
        onLoading={(isLoading) => {
          loadingRef.current = isLoading;
        }}
        onEditing={(isEditing) => {
          editingRef.current = isEditing;
        }}
      />
    );
  }, [props.task, props.collapsed, isDragging, dndRef, editingRef, loadingRef]);
};

export default TaskRow;
