import { useUser } from "@/components/contexts/UserContext";
import CreationDialog from "@/components/data/CreationDialog";
import TasksTable from "@/components/data/tasks/TasksTable";
import fields from "@/graphql/generated/fields/task.fields";
import { TaskFragment } from "@/graphql/generated/fragments/task.fragment";
import { useCreateTask, useTaskDataReducer } from "@/graphql/generated/hooks/task.hooks";
import { TaskCreationInput } from "@/graphql/generated/inputs/task.inputs";
import Task from "@/graphql/generated/types/Task";
import { ID } from "@/graphql/schema/types";
import TodayIcon from "@mui/icons-material/Today";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import { bindPopover } from "material-ui-popup-state/hooks";

export type TaskCreationDialogProps = ReturnType<typeof bindPopover>;

export default function TaskCreationDialog(props: TaskCreationDialogProps) {
  const { user } = useUser();
  const [create] = useCreateTask();
  const dataTuple = useTaskDataReducer();
  const [data, dispatchData] = dataTuple;
  const subtasks: Task[] = [];
  const saveAndExit = () => {
    const dataIsValid = !!data.title;
    // TODO: run validator!
    const validatedData = data as TaskCreationInput;
    if (dataIsValid) {
      create.current?.({
        variables: { data: validatedData },
      });
      dispatchData({
        field: "init",
        value: { userId: user?.id as ID, rank: validatedData.rank + 1 },
      });
    }
    props.onClose();
  };
  return CreationDialog<Task, TaskCreationInput, { createTask: TaskFragment }>({
    typeName: "task",
    dataTuple,
    create,
    fields,
    ...props,
    children: (
      <>
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
          >
            <Box display="flex" alignItems="center">
              <Box sx={{ "& *": { fontSize: "1.6rem", fontWeight: "400" } }}>
                <TextField
                  autoFocus
                  id="title"
                  name="title"
                  variant="standard"
                  value={data.title}
                  placeholder={"Task title"}
                  onChange={(event) => dispatchData({ field: "title", value: event.target.value })}
                />
              </Box>
            </Box>
            <Box>
              <TextField
                multiline
                fullWidth
                id="description"
                name="description"
                // variant="standard"
                value={data.description ?? ""}
                placeholder="Task description"
                onChange={(event) =>
                  dispatchData({ field: "description", value: event.target.value })
                }
              />
              <Box my={2}>
                {subtasks?.length ? (
                  <TasksTable tasks={subtasks} moveTaskRow={undefined} updateTaskRank={undefined} />
                ) : (
                  <Typography>{`Add subtask`}</Typography>
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
      </>
    ),
  });
}
