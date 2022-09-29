import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TodayIcon from "@mui/icons-material/Today";
import { Button, ButtonProps, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useUser } from "@web/components/contexts/UserContext";
import Stopwatch from "@web/components/data/tasks/Stopwatch";
import TasksTable from "@web/components/data/tasks/TasksTable";
import CompletionCheckbox from "@web/components/fields/CompletionCheckbox";
// import DateSelector from "@web/components/dates/DateSelector";
import { useDate } from "@web/components/contexts/DateContext";
import { Cron } from "@web/components/fields/cron";
import TitleAndDescriptionFields from "@web/components/fields/TitleAndDescriptionFields";
import { HabitFragment } from "@web/generated/graphql/fragments/habit.fragment";
import { TaskFragment } from "@web/generated/graphql/fragments/task.fragment";
import { getOptimisticResponseForTaskUpdate } from "@web/generated/graphql/mutations/task.mutations";
import { habitCreationInputSchema } from "@web/generated/graphql/schemas/habit.schemas";
import { useCreateHabit } from "@web/generated/hooks/habit.hooks";
import { useTaskReducer, useTasksReducer, useUpdateTask } from "@web/generated/hooks/task.hooks";
import { ID } from "@web/graphql/schema/types";
import { addDays, addHours, endOfDay, format, parse, setHours, setMinutes } from "date-fns";
import {
  bindDialog,
  bindMenu,
  bindTrigger,
  PopupState,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { FC, SyntheticEvent, useEffect, useMemo, useState } from "react";

interface TaskDialogProps extends ReturnType<typeof bindDialog> {
  data: TaskFragment;
}

const USE_STOPWATCH = false;

const LEFT_SIDE_WIDTH = "3.3rem";

const TaskDialog: FC<TaskDialogProps> = (props: TaskDialogProps) => {
  const { data: _data, onClose: initialOnClose, ...dialogProps } = props;
  const { user } = useUser();
  const [data, dispatchData] = useTaskReducer(_data);
  const [time, setTime] = useState(0);
  const [stopwatchIsRunning, setStopwatchIsRunning] = useState(false);
  const [editing, setEditing] = useState(!data.id);
  const [convertingToHabit, setConvertingToHabit] = useState(false);
  const [cron, setCron] = useState<string>("0 1 * * *");
  const [validating, setValidating] = useState(false);

  // TODO: refactor?
  const [dirtyFields, setDirtyFields] = useState<string[]>([]);

  const handleDispatchData = ({ field, value }: Parameters<typeof dispatchData>[0]) => {
    dispatchData({ field, value } as Parameters<typeof dispatchData>[0]);
    if (!dirtyFields.includes(field)) {
      setDirtyFields([...dirtyFields, field]);
    }
  };

  const menuState = usePopupState({
    variant: "popper",
    popupId: data.id ? `task-${data.id}-menu` : "new-task-menu",
  });

  const dueDateMenuState = usePopupState({
    variant: "popper",
    popupId: data.id ? `task-${data.id}-due-date-menu` : "new-task-due-date-menu",
  });

  const scheduledDateMenuState = usePopupState({
    variant: "popper",
    popupId: data.id ? `task-${data.id}-scheduled-date-menu` : "new-task-scheduled-date-menu",
  });

  const [updateTask, { loading: loadingUpdateTask }] = useUpdateTask();
  const [createHabit, { loading: loadingCreateHabit }] = useCreateHabit();

  const loading = loadingUpdateTask || loadingCreateHabit;

  const handleSetDueDate = (date: Date | null) => {
    dispatchData({
      field: "dueDate",
      value: date,
    });
    updateTask.current?.({
      variables: { where: { id: data.id }, data: { dueDate: date } },
      optimisticResponse: getOptimisticResponseForTaskUpdate(data as TaskFragment, {
        dueDate: date,
      }),
    });
  };

  const handleSetScheduledDate = (date: Date | null) => {
    dispatchData({
      field: "plannedStartDate",
      value: date,
    });
    updateTask.current?.({
      variables: { where: { id: data.id }, data: { plannedStartDate: date } },
      optimisticResponse: getOptimisticResponseForTaskUpdate(data as TaskFragment, {
        plannedStartDate: date,
      }),
    });
  };

  const canUpdate = !!data.id;

  const onClose = (event: SyntheticEvent<unknown>) => {
    initialOnClose(event);
    canUpdate && setEditing(false);
  };

  const handleClose = (event: SyntheticEvent<unknown>) => {
    if (stopwatchIsRunning) {
      // TODO: ask for confirmation
      setStopwatchIsRunning(false);
    }
    console.log("calling onClose");
    onClose(event);
  };

  const menuTriggerProps = bindTrigger(menuState);
  const menuProps = bindMenu(menuState);

  const completed = data.completedAt ? true : false;

  const habit: HabitFragment | null | undefined = data.habitId
    ? user?.habits?.find((habit) => habit.id === data.habitId)
    : null;

  const initialSubtasks = useMemo(
    () => user?.tasks?.filter((task) => task.parentId === data.id) ?? [],
    [data.id, user?.tasks]
  );
  const [subtasks, dispatchSubtasks] = useTasksReducer(initialSubtasks);

  // const metricUsages = habit?.metricUsages;
  // const metricUsages = null; // TODO

  useEffect(() => {
    dispatchSubtasks({ type: "init", payload: initialSubtasks });
  }, [initialSubtasks, dispatchSubtasks]);

  const saveChanges = () => {
    if (dirtyFields.length) {
      const dataForUpdate = Object.fromEntries(
        Object.entries(data).filter(([field]) => dirtyFields.includes(field))
      );
      const optimisticResponse = getOptimisticResponseForTaskUpdate(data as TaskFragment, data);
      // TODO
      updateTask.current &&
        updateTask.current({
          variables: {
            where: { id: data.id as ID },
            data: dataForUpdate,
          },
          optimisticResponse,
        });
    }
    setEditing(false);
  };

  const saveAndExit = (event: any) => {
    saveChanges();
    handleClose(event);
  };

  const handleNewHabitCreation = async () => {
    const newHabitData = {
      name: data.title,
      description: data.description,
      userId: data.userId,
      cron: cron,
    };
    setValidating(true);
    const validatedData = await habitCreationInputSchema.validate(newHabitData);
    setValidating(false);
    const result = await createHabit.current?.({
      variables: { data: validatedData },
    });
    const newHabit = result.data?.createHabit;
    if (newHabit) {
      dispatchData({
        field: "habitId",
        value: newHabit.id,
      });
      updateTask.current?.({
        variables: {
          where: { id: data.id },
          data: { habitId: newHabit.id },
        },
      });
      setConvertingToHabit(false);
    }
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
              <MenuItem
                disabled={!data.id}
                onClick={() => {
                  const archivedAt = new Date();
                  dispatchData({ field: "archivedAt", value: archivedAt });
                  menuProps.onClose();
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
                if (editing) return saveChanges();
                return saveAndExit(event);
              }
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget) && data.id) setEditing(false);
            }}
          >
            <Box display="flex" alignItems="center" my={1} py={"0.25rem"}>
              <CompletionCheckbox
                sx={{
                  alignSelf: "start",
                  alignItems: "start",
                  minWidth: LEFT_SIDE_WIDTH,
                  py: "0.1rem",
                }}
                checked={completed}
                disabled={!canUpdate}
                onClick={() => {
                  dispatchData({ field: "completedAt", value: new Date() });
                }}
              />
              <TitleAndDescriptionFields
                titleConfig={{ name: "title", label: "Title", fontSizeRem: 1.6 }}
                descriptionConfig={{ name: "description", label: "Description", fontSizeRem: 1 }}
                dataTuple={[data, handleDispatchData]}
                editingState={[editing, setEditing]}
              />
            </Box>
            <Box pl={LEFT_SIDE_WIDTH} fontSize={"0.9rem"}>
              {/* {!!data.archivedAt && (
                <Box my={2}>
                  <Typography>{`This task is archived.`}</Typography>
                </Box>
              )} */}
              <Box my={2} ml={"-0.55rem"}>
                <Box my={2}>
                  {subtasks?.length ? (
                    <TasksTable
                      tasksDataTuple={[subtasks, dispatchSubtasks]}
                      moveTaskRow={undefined}
                      updateTaskRank={undefined}
                    />
                  ) : (
                    // TODO
                    <Button sx={{ pr: 2 }} onClick={() => alert("Not yet implemented")}>
                      <AddIcon sx={{ mr: 1 }} /> {"Add subtask"}
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            ml={2}
            px={"0.75rem"}
            sx={{
              flexBasis: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
              "& > *": {
                "&:not(:last-child)": {
                  borderBottom: "1px solid gray",
                },
                width: "100%",
                py: 1,
                color: (theme) =>
                  theme.palette.mode === "light" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
              },
              "& *": {
                fontSize: "0.85rem",
                lineHeight: 1.15,
              },
            }}
          >
            <Box alignItems={"center"} justifyContent={"start"}>
              <Button
                sx={{
                  width: "100%",
                  textTransform: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  lineHeight: 1,
                  ...(!!data.dueDate && { mb: -1 }),
                  color: (theme) =>
                    theme.palette.mode === "light" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
                }}
                disabled={!!data.dueDate}
                {...bindTrigger(dueDateMenuState)}
              >
                {"Due date "}
                {!data.dueDate && <AddIcon sx={{ ml: 1 }} />}
              </Button>
              <DateMenu
                date={data.dueDate}
                setDate={handleSetDueDate}
                menuState={dueDateMenuState}
              />
              {data.dueDate && (
                <SelectedDateButton date={data.dueDate} {...bindTrigger(dueDateMenuState)} />
              )}
            </Box>
            <Box>
              <Button
                sx={{
                  textAlign: "left",
                  width: "100%",
                  textTransform: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  lineHeight: 1,
                  ...(!!data.plannedStartDate && { mb: -1 }),
                  color: (theme) =>
                    theme.palette.mode === "light" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
                }}
                disabled={!!data.plannedStartDate}
                {...bindTrigger(scheduledDateMenuState)}
              >
                {"Scheduled date "}
                {!data.plannedStartDate && <AddIcon sx={{ ml: 1 }} />}
              </Button>
              <DateMenu
                date={data.plannedStartDate}
                setDate={handleSetScheduledDate}
                menuState={scheduledDateMenuState}
              />
              {data.plannedStartDate && (
                <SelectedDateButton
                  date={data.plannedStartDate}
                  {...bindTrigger(scheduledDateMenuState)}
                />
              )}
            </Box>
            <Box py={"1rem"}>
              <Box px={1}>
                {habit ? (
                  <>
                    <Typography component={"p"} fontSize={"inherit"}>
                      {`This task is associated with your `}
                      {'"'}
                      <a onClick={() => alert("Not yet implemented")}>
                        {habit.name.replace(/\.$/, "")}
                      </a>
                      {'"'}
                      {` habit.`}
                    </Typography>
                    <Typography
                      component={"p"}
                      fontSize={"inherit"}
                      mt={1}
                    >{`Keep it up!`}</Typography>
                  </>
                ) : convertingToHabit ? null : (
                  <Typography>{"This is a one-off task."}</Typography>
                )}
              </Box>
              <Box>
                {data.habitId ? null : convertingToHabit ? (
                  <Box
                    px={1}
                    sx={{
                      position: "relative",
                      "& .react-js-cron-select": {
                        display: "flex",
                      },
                      "& .react-js-cron-field": {
                        alignItems: "start",
                      },
                    }}
                  >
                    <Cron value={cron || ""} setValue={setCron} />
                    <Box display={"flex"} justifyContent={"right"}>
                      <Button onClick={() => setConvertingToHabit(false)}>{"Cancel"}</Button>
                      <Button disabled={validating || loading} onClick={handleNewHabitCreation}>
                        {validating ? "Validating..." : loading ? "Saving..." : "Save"}
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <Button sx={{ pr: 2 }} onClick={() => setConvertingToHabit(true)}>
                    <ArrowForwardIcon sx={{ mr: 1 }} /> {"Convert to habit"}
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        {!subtasks?.length && !!habit && USE_STOPWATCH && (
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
      {/* <DialogActions>
        {editing && <Button onClick={saveAndExit}>{"Done"}</Button>}
      </DialogActions> */}
    </Dialog>
  );
};

export default TaskDialog;

interface DateMenuProps {
  date: Date | null | undefined;
  setDate: (date: Date | null) => void;
  menuState: PopupState;
}
export function DateMenu({ date, setDate, menuState }: DateMenuProps) {
  const now = useDate();
  const defaultDate = setMinutes(addHours(now, 1), 0);
  const [dateInputValue, setDateInputValue] = useState(format(date || defaultDate, "M/d, h:mm a"));
  const today = endOfDay(now);
  const tomorrow = setMinutes(setHours(addDays(today, 1), 9), 0); // 9am tomorrow
  const menuProps = bindMenu(menuState);
  const setDateFromInput = (inputValue: string) => {
    let parsedDate = date;
    try {
      parsedDate = parse(inputValue, "M/d, h:mm a", date || now);
      if (parsedDate) setDate(parsedDate);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Menu
      {...menuProps}
      PaperProps={{
        sx: {
          minWidth: "13.5rem",
          maxWidth: "13.5rem",
        },
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      sx={{
        width: "100%",
      }}
    >
      <MenuItem disableRipple>
        <TextField
          value={dateInputValue}
          variant={"standard"}
          onChange={(e) => {
            setDateInputValue(e.target.value);
          }}
          InputProps={{
            onKeyUp: (e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setDateFromInput(dateInputValue);
                const input = e.target as HTMLInputElement;
                input.blur();
                menuProps.onClose();
              }
            },
          }}
          onBlur={() => {
            setDateFromInput(dateInputValue);
          }}
        />
      </MenuItem>
      <MenuItem
        onClick={() => {
          setDate(today);
          menuProps.onClose();
        }}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>{"Today"}</Typography>
        <Typography
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)",
          }}
        >
          {format(today, "M/d")}
        </Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          setDate(tomorrow);
          menuProps.onClose();
        }}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>{"Tomorrow"}</Typography>
        <Typography
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)",
          }}
        >
          {format(tomorrow, "EEE")}
        </Typography>
      </MenuItem>
      {/* <Divider /> */}
      {/* <MenuItem sx={{ pt: 0 }}>
        <DateSelector open={false} date={date ?? new Date()} setDate={setDate} dateFormat={"M/d"} sx={{ width: "100%" }} />
      </MenuItem> */}
    </Menu>
  );
}

function SelectedDateButton({ date, sx, ...buttonProps }: { date: Date } & ButtonProps) {
  return (
    <Button sx={{ color: "inherit", mt: "0.33rem", py: "0.2rem", ...sx }} {...buttonProps}>
      <TodayIcon />{" "}
      <Typography component="span" fontSize={"0.9rem"} ml={"0.5rem"}>
        {date ? format(date, "M/d, h:mm a") : null}
      </Typography>
    </Button>
  );
}
