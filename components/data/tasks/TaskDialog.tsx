import CompletionCheckbox from "@/components/actions/CompletionCheckbox";
import Stopwatch from "@/components/actions/Stopwatch";
import TasksTable from "@/components/data/tasks/TasksTable";
import { TaskFragment } from "@/graphql/generated/fragments/task.fragment";
import { useTaskDataReducer, useUpdateTask } from "@/graphql/generated/hooks/task.hooks";
import { Habit } from "@/graphql/generated/models/habit.model";
import { Task } from "@/graphql/generated/models/task.model";
import { getOptimisticResponseForTaskUpdate } from "@/graphql/generated/mutations/task.mutations";
import { TaskData } from "@/graphql/generated/reducers/task.reducer";
import { ID } from "@/graphql/schema/types";
import { Payload } from "@/utils/data";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotesIcon from "@mui/icons-material/Notes";
import TodayIcon from "@mui/icons-material/Today";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import { bindMenu, bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { FC, useState } from "react";

interface TaskDialogProps extends ReturnType<typeof bindPopover> {
  data: TaskData;
}

const LEFT_SIDE_WIDTH = "3.3rem";

const TaskDialog: FC<TaskDialogProps> = (props: TaskDialogProps) => {
  const { data: _data, onClose: initialOnClose, anchorEl: _anchorEl, ...dialogProps } = props;
  const [data, dispatchData] = useTaskDataReducer(_data);
  const [time, setTime] = useState(0);
  const [stopwatchIsRunning, setStopwatchIsRunning] = useState(false);
  const [editing, setEditing] = useState(!data.id);

  const menuState = usePopupState({
    variant: "popper",
    popupId: data.id ? `task-${data.id}-menu` : "new-task-menu",
  });

  const [updateTask] = useUpdateTask();

  const canUpdate = !!data.id;

  const onClose = () => {
    initialOnClose();
    canUpdate && setEditing(false);
  };

  const handleClose = () => {
    if (stopwatchIsRunning) {
      // TODO: ask for confirmation
      setStopwatchIsRunning(false);
    }
    console.log("calling onClose");
    onClose();
  };

  const handleUpdateField = (
    field: "init" | keyof TaskData,
    value: TaskData | TaskData[keyof TaskData]
  ) => {
    dispatchData({ field, value } as Payload<TaskData>);
    if (canUpdate) {
      const data = { [field]: value };
      const optimisticResponse = getOptimisticResponseForTaskUpdate(data as TaskFragment, data);
      // TODO
      data &&
        updateTask.current &&
        updateTask.current({
          variables: {
            where: { id: data.id as ID },
            data,
          },
          optimisticResponse,
        });
    }
  };

  const menuTriggerProps = bindTrigger(menuState);
  const menuProps = bindMenu(menuState);

  const completed = data.completedAt ? true : false;

  // const habit = data.habit;
  const habit: Habit | null = null; // TODO

  // const subtasks = data.subtasks;
  const subtasks: Task[] = []; // TODO

  // const metricUsages = habit?.metricUsages;
  // const metricUsages = null; // TODO

  const saveAndExit = () => {
    handleClose();
  };

  return (
    <Dialog fullWidth onClose={onClose} {...dialogProps}>
      <DialogTitle sx={{ minHeight: "3.3rem", borderBottom: "1px solid gray" }}>
        {!!data.id && !!updateTask && (
          <Box
            ml={"auto"}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <IconButton
              title={`Display actions for ${data.title}`}
              className="actions-menu-icon"
              {...menuTriggerProps}
              disableTouchRipple
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              {...menuProps}
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
              {/* <MenuItem
                disabled={editing}
                title={`Edit ${data.title}`}
                onClick={() => {
                  setEditing(true);
                  menuProps.onClose();
                }}
              >
                <EditIcon /> <Typography sx={{ ml: 1 }}>{"Edit task"}</Typography>
              </MenuItem> */}
              <MenuItem
                disabled={!data.id}
                onClick={() => {
                  const archivedAt = new Date();
                  console.log("Archiving task ", data.title, data.id);
                  const updatedData = { archivedAt };
                  const optimisticResponse = getOptimisticResponseForTaskUpdate(
                    data as TaskFragment,
                    updatedData
                  );
                  updateTask.current &&
                    updateTask.current({
                      variables: {
                        where: { id: data.id },
                        data: updatedData,
                      },
                      optimisticResponse,
                    });
                  menuProps.onClose();
                }}
              >
                <DeleteIcon /> <Typography sx={{ ml: 1 }}>{"Delete task"}</Typography>
              </MenuItem>
            </Menu>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        )}
      </DialogTitle>
      <DialogContent sx={{ px: 0 }}>
        <Box display="flex" borderBottom={"1px solid gray"}>
          <Box
            mb={2}
            flexGrow={1}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                saveAndExit();
              }
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget) && data.id) setEditing(false);
            }}
          >
            <Box display="flex" alignItems="center">
              <CompletionCheckbox
                sx={{ alignSelf: "start", alignItems: "start", minWidth: LEFT_SIDE_WIDTH }}
                checked={completed}
                disabled={!canUpdate}
                onClick={() => handleUpdateField("completedAt", new Date())}
              />
              <Box sx={{ "& *": { fontSize: "1.6rem", fontWeight: "400" } }}>
                {editing ? (
                  <TextField
                    autoFocus
                    id="title"
                    name="title"
                    variant="standard"
                    value={data.title}
                    placeholder={"Task title"}
                    onChange={(event) => handleUpdateField("title", event.target.value)}
                  />
                ) : (
                  <Typography component="span" variant="h2" onClick={() => setEditing(true)}>
                    {data.title}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box pl={LEFT_SIDE_WIDTH}>
              {editing ? (
                <TextField
                  multiline
                  fullWidth
                  id="description"
                  name="description"
                  // variant="standard"
                  value={data.description ?? ""}
                  placeholder="Task description"
                  onChange={(event) => handleUpdateField("description", event.target.value)}
                />
              ) : (
                <DialogContentText
                  component="div"
                  sx={{ mt: 1, mb: 2 }}
                  onClick={() => setEditing(true)}
                >
                  {data.description || (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: (theme) =>
                          theme.palette.mode === "light"
                            ? "rgba(0,0,0,0.5)"
                            : "rgba(255,255,255,0.5)",
                      }}
                    >
                      <NotesIcon />
                      <Typography sx={{ ml: 1 }}>{"Description"}</Typography>
                    </Box>
                  )}
                </DialogContentText>
              )}
              {!!data.archivedAt && (
                <Box my={2}>
                  <Typography>{`This task is archived.`}</Typography>
                </Box>
              )}
              <Box my={2}>
                {subtasks?.length ? (
                  <TasksTable tasks={subtasks} moveTaskRow={undefined} updateTaskRank={undefined} />
                ) : (
                  <Button>{`Add subtasks.`}</Button>
                )}
              </Box>
              <Box my={2}>
                {data.habitId ? (
                  <Typography>{`This task is associated with habit ${data.habitId}.`}</Typography>
                ) : (
                  <Typography>
                    {`Trying to build a new habit? Create a habit from this task.`}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            ml={2}
            p={2}
            sx={{
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
              // backgroundColor: (theme) => theme.palette.mode === "light" ? "gray" : "black"
            }}
          >
            <Box my={2}>
              <Typography>{"Due date"}</Typography>
              <Box display="flex" alignItems="center">
                <TodayIcon />
                <Typography component="span">
                  {data.dueDate ? format(data.dueDate, "h:m") : "No due date"}
                </Typography>
              </Box>
            </Box>
            <Box my={2}>
              <Typography>{"Scheduled date"}</Typography>
              <Box display="flex" alignItems="center">
                <TodayIcon />
                <Typography component="span">
                  {data.plannedStartDate ? format(data.plannedStartDate, "h:m") : "Unscheduled"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {!subtasks?.length && !!habit && (
          <Stopwatch
            time={time}
            setTime={setTime}
            running={stopwatchIsRunning}
            setRunning={setStopwatchIsRunning}
          />
        )}
        {/* {!metricUsages?.length ? null : (
          <Box display={"flex"} justifyContent={"center"} width={"50%"} mx={"auto"}>
            <TableContainer sx={{ my: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Metric</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {metricUsages.map((metricUsage) => {
                    return (
                      <TableRow key={metricUsage.id}>
                        <TableCell align="right">
                          <Typography
                            sx={{
                              "&::first-letter": { textTransform: "capitalize" },
                            }}
                          >
                            {metricUsage.metric?.name}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <TextField
                            type="number"
                            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )} */}
      </DialogContent>
      <DialogActions>
        {/* {editing && <Button onClick={saveAndExit}>{"Done"}</Button>} */}
      </DialogActions>
    </Dialog>
  );
};

export default TaskDialog;
