import { TaskFragment } from "@/graphql/generated/fragments/task.fragment";
import {
  useCreateTask,
  useTaskDataReducer,
  useUpdateTask,
} from "@/graphql/generated/hooks/task.hooks";
import { Habit } from "@/graphql/generated/models/habit.model";
import { Task } from "@/graphql/generated/models/task.model";
import {
  getOptimisticResponseForTaskCreation,
  getOptimisticResponseForTaskUpdate,
} from "@/graphql/generated/mutations/task.mutations";
import { TaskData } from "@/graphql/generated/reducers/task.reducer";
import { ID } from "@/graphql/schema/types";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { bindMenu, bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { FC, useState } from "react";
import { useUser } from "../../contexts/UserContext";

interface TaskDialogProps extends ReturnType<typeof bindPopover> {
  data?: TaskData;
}

const LEFT_SIDE_WIDTH = "3.3rem";

const TaskDialog: FC<TaskDialogProps> = (props: TaskDialogProps) => {
  const { data, onClose: initialOnClose, anchorEl: _anchorEl, ...dialogProps } = props;
  const user = useUser();
  const [taskData, dispatchTaskData] = useTaskDataReducer(
    data ?? {
      title: "",
      rank: 0, // TODO
      userId: user?.id as ID,
    }
  );
  const [time, setTime] = useState(0);
  const [stopwatchIsRunning, setStopwatchIsRunning] = useState(false);
  const [editing, setEditing] = useState(!taskData.id);

  const canUpdate = !!taskData.id;

  const onClose = () => {
    initialOnClose();
    canUpdate && setEditing(false);
  };

  const menuState = usePopupState({
    variant: "popper",
    popupId: taskData.id ? `task-${taskData.id}-menu` : "new-task-menu",
  });

  const [updateTask] = useUpdateTask();
  const [createTask] = useCreateTask();

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
    dispatchTaskData({ field, value });
    if (canUpdate) {
      const data = { [field]: value };
      const optimisticResponse = getOptimisticResponseForTaskUpdate(taskData as TaskFragment, data);
      // TODO
      taskData &&
        data &&
        updateTask.current &&
        updateTask
          .current({
            variables: {
              where: { id: taskData.id },
              data,
            },
            optimisticResponse,
          })
          ?.catch(console.error);
    }
  };

  const menuTriggerProps = bindTrigger(menuState);
  const menuProps = bindMenu(menuState);

  const completed = taskData.completedAt ? true : false;

  // const habit = taskData.habit;
  const habit: Habit | null = null; // TODO

  // const subtasks = taskData.subtasks;
  const subtasks: Task[] = []; // TODO

  // const metricUsages = habit?.metricUsages;
  // const metricUsages = null; // TODO

  const saveAndExit = () => {
    if (!canUpdate && taskData.title) {
      console.log("Creating task...", taskData);
      const optimisticResponse = getOptimisticResponseForTaskCreation(taskData);
      createTask.current?.({
        variables: { data: taskData },
        optimisticResponse,
      });
      dispatchTaskData({
        field: "init",
        value: {
          title: "",
          userId: user?.id as ID,
          rank: taskData.rank + 1,
        },
      }); // TODO
    }
    handleClose();
  };

  return (
    <Dialog fullWidth onClose={onClose} {...dialogProps}>
      <DialogTitle sx={{ minHeight: "3.3rem", borderBottom: "1px solid gray" }}>
        {!!taskData.id && !!updateTask && (
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
              title={`Display actions for ${taskData.title}`}
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
                title={`Edit ${taskData.title}`}
                onClick={() => {
                  setEditing(true);
                  menuProps.onClose();
                }}
              >
                <EditIcon /> <Typography sx={{ ml: 1 }}>{"Edit task"}</Typography>
              </MenuItem> */}
              <MenuItem
                disabled={!taskData.id}
                onClick={() => {
                  const archivedAt = new Date();
                  console.log("Archiving task ", taskData.title, taskData.id);
                  const data = { archivedAt };
                  const optimisticResponse = getOptimisticResponseForTaskUpdate(
                    taskData as TaskFragment,
                    data
                  );
                  updateTask.current &&
                    updateTask.current({
                      variables: {
                        where: { id: taskData.id },
                        data,
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
