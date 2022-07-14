import CompletionCheckbox from "@/components/actions/CompletionCheckbox";
import Stopwatch from "@/components/actions/Stopwatch";
import { taskFragment } from "@/graphql/fragments";
import { CREATE_TASK, UPDATE_TASK } from "@/graphql/mutations";
import { Task } from "@/graphql/schema/models/Task";
import { printError } from "@/utils/apollo/error-handling";
import { TaskData } from "@/utils/tasks";
import { gql, useMutation } from "@apollo/client";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { bindMenu, bindPopover, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";
import { Dispatch, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import TasksTable from "./TasksTable";

type TaskDialogProps = ReturnType<typeof bindPopover> & {
  task: TaskData;
  toggleCompletion?: Dispatch<boolean>;
  dispatchTaskData: Dispatch<{ field: string; value: unknown }>;
};

export default function TaskDialog(props: TaskDialogProps) {
  const { token } = useAuth();
  const {
    task: taskData,
    toggleCompletion,
    dispatchTaskData,
    onClose,
    anchorEl: _anchorEl,
    ...dialogProps
  } = props;
  const [time, setTime] = useState(0);
  const [stopwatchIsRunning, setStopwatchIsRunning] = useState(false);

  const [editing, setEditing] = useState(!taskData.id);

  const menuState = usePopupState({
    variant: "popper",
    popupId: taskData.id ? `task-${taskData.id}-menu` : "new-task-menu",
  });

  const [updateTask, { loading: _loadingUpdateTask }] = useMutation(UPDATE_TASK);
  const [createTask, { loading: _loadingCreateTask }] = useMutation<{
    createTask: Task;
  }>(CREATE_TASK, {
    update(cache, { data }) {
      const { createTask } = data || {};
      if (createTask) {
        cache.modify({
          fields: {
            tasks(existingTasks = []) {
              const newTaskRef = cache.writeFragment({
                data: createTask,
                fragment: gql`
                  fragment NewTask on Task {
                    ...TaskFragment
                  }
                  ${taskFragment}
                `,
                fragmentName: "NewTask",
              });
              return [...existingTasks, newTaskRef];
            },
          },
        });
      }
    },
  });

  const canUpdate = !!taskData.id;

  const handleClose = () => {
    if (stopwatchIsRunning) {
      // TODO: ask for confirmation
      setStopwatchIsRunning(false);
    }
    onClose();
    canUpdate && setEditing(false);
  };

  const handleUpdateField = (field: string, value: unknown) => {
    dispatchTaskData({ field, value });
    canUpdate &&
      updateTask({
        variables: {
          taskId: taskData.id,
          data: { [field]: { set: value } },
        },
        optimisticResponse: {
          __typename: "Mutation",
          updateTask: {
            __typename: "Task",
            ...taskData,
            [field]: value,
          },
        },
      }).catch(console.error);
  };

  const menuTriggerProps = bindTrigger(menuState);
  const completed = taskData.completedAt ? true : false;
  const habit = taskData.habit;
  const subtasks = taskData.subtasks;
  const metricUsages = habit?.metricUsages;
  return (
    <Dialog fullWidth onClose={onClose} {...dialogProps}>
      <DialogTitle>
        {editing ? (
          <TextField
            autoFocus
            id="title"
            name="title"
            variant="standard"
            value={taskData.title}
            placeholder={"Task title"}
            // label={"Title"}
            onChange={(event) => {
              handleUpdateField("title", event.target.value);
            }}
          />
        ) : (
          <Typography
            onClick={() => {
              setEditing(true);
            }}
          >
            {taskData.title}
          </Typography>
        )}
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
                  disabled={editing}
                  title={`Edit ${taskData.title}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setEditing(true);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  title={`Delete task`}
                  disabled={!taskData.id}
                  onClick={(event) => {
                    event.preventDefault();
                    const archivedAt = new Date();
                    updateTask({
                      variables: {
                        taskId: taskData.id,
                        data: { archivedAt: { set: archivedAt } },
                      },
                      optimisticResponse: {
                        updateTask: {
                          __typename: "Task",
                          subtasks: [],
                          habit: null,
                          ...taskData,
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
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        )}
      </DialogTitle>
      <DialogContent>
        <DialogContentText component={"div"} onClick={() => !editing && setEditing(true)}>
          {editing ? (
            <TextField
              multiline
              fullWidth
              id="description"
              name="description"
              // variant="standard"
              value={taskData.description}
              placeholder="Task description"
              onChange={(event) => {
                handleUpdateField("description", event.target.value);
              }}
            />
          ) : (
            taskData.description
          )}
        </DialogContentText>
        {!!subtasks?.length && (
          <TasksTable tasks={subtasks} moveTaskRow={undefined} updateTaskRank={undefined} />
        )}
        {!subtasks?.length && !!habit && (
          <Stopwatch
            time={time}
            setTime={setTime}
            running={stopwatchIsRunning}
            setRunning={setStopwatchIsRunning}
          />
        )}
        {!metricUsages?.length ? null : (
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
        )}
        {!!toggleCompletion && (
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={5}>
            <CompletionCheckbox
              checked={completed}
              // disabled={loading}
              onClick={(event) => {
                event.stopPropagation();
                toggleCompletion(!completed);
              }}
            />
            <Typography>{"Complete?"}</Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            if (!canUpdate && taskData.title) {
              console.log("Creating task...", taskData);
              const now = new Date();
              const completeTaskData = {
                createdAt: now,
                updatedAt: now,
                ...taskData,
              };
              createTask({
                variables: {
                  data: {
                    ...completeTaskData,
                  },
                },
                optimisticResponse: {
                  createTask: {
                    __typename: "Task",
                    id: "tmp-id",
                    subtasks: [],
                    habitId: null,
                    userId: token?.uid as string,
                    ...completeTaskData,
                  },
                },
              }).catch(printError);
              dispatchTaskData({
                field: "init",
                value: {
                  rank: taskData.rank + 1,
                },
              }); // TODO
            }
            handleClose();
          }}
        >
          {"Done"}
        </Button>
        {/* <Button
          onClick={() => {
            console.log("do something");
          }}
        >
          Subscribe
        </Button> */}
      </DialogActions>
    </Dialog>
  );
}
