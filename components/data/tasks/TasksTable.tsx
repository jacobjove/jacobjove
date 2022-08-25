// import { useNewTaskDialog } from "@/components/contexts/NewTaskDialogContext";
import TaskRow, { TaskRowProps } from "@/components/data/tasks/TaskRow";
import TitleAndDescriptionFields from "@/components/fields/TitleAndDescriptionFields";
import { useCreateTask, useTaskDataReducer } from "@/graphql/generated/hooks/task.hooks";
import { getOptimisticResponseForTaskCreation } from "@/graphql/generated/mutations/task.mutations";
import { taskCreationInputSchema } from "@/graphql/generated/schemas/task.schemas";
import Task from "@/graphql/generated/types/Task";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import { bindTrigger } from "material-ui-popup-state/hooks";
import { Dispatch, FC, useState } from "react";

const PREFERRED_FONT_SIZE = "0.8rem";

export interface TasksTableProps {
  tasks: Task[];
  appendable?: boolean;
  moveTaskRow: TaskRowProps["move"];
  updateTaskRank: TaskRowProps["onDrop"];
}

const TasksTable: FC<TasksTableProps> = (props: TasksTableProps) => {
  const { tasks, appendable, moveTaskRow, updateTaskRank } = props;
  // const { newTaskDialogState } = useNewTaskDialog();
  const [addingTask, setAddingTask] = useState(false);
  return (
    <Table
      sx={{
        mt: 1,
        minWidth: 100,
        "& th": { px: "0.25rem", py: "1px", fontSize: "0.75rem", lineHeight: "0.9rem" },
        "& td": { px: "0.25rem", fontSize: PREFERRED_FONT_SIZE },
      }}
      size="small"
      aria-label="table of tasks"
    >
      <TableHead>
        <TableRow>
          <TableCell component={"th"} sx={{ minWidth: "3.3rem" }}>
            {"Done?"}
          </TableCell>
          <TableCell component={"th"} sx={{ width: "90%" }}>
            {"Task"}
          </TableCell>
          <TableCell component={"th"} sx={{ textAlign: "center", minWidth: "3.5rem" }}>
            {"Scheduled"}
          </TableCell>
          <TableCell component={"th"} sx={{ textAlign: "center", minWidth: "3.5rem" }}>
            {"Due"}
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task, index) => {
          const subtasks = tasks.filter((_) => _.parentId === task.id);
          return (
            <TaskRow
              key={task.id}
              task={task}
              subtasks={subtasks}
              index={index}
              move={moveTaskRow}
              onDrop={updateTaskRank}
            />
          );
        })}
        {appendable &&
          (addingTask ? (
            <NewTaskRow setAddingNewTask={setAddingTask} />
          ) : (
            <TableRow>
              <TableCell colSpan={5}>
                <Button
                  variant="text"
                  // {...(newTaskDialogState && bindTrigger(newTaskDialogState))}
                  onClick={() => setAddingTask(true)}
                  sx={{
                    textTransform: "none",
                    fontStyle: "italic",
                    // color: (theme) => (theme.palette.mode === "light" ? "lightgray" : "darkgray"),
                    py: "0.25rem",
                    pl: "3rem", // TODO: match checkbox width.
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                  }}
                >
                  {tasks.length ? "Add another task..." : "Add a task..."}
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default TasksTable;

interface NewTaskRowProps {
  setAddingNewTask: Dispatch<boolean>;
}

const NewTaskRow: FC<NewTaskRowProps> = ({ setAddingNewTask }: NewTaskRowProps) => {
  const [newTaskData, dispatchNewTaskData] = useTaskDataReducer();
  const [createTask] = useCreateTask();
  const [editing, setEditing] = useState(true);
  const handleCreateTask = async () => {
    const data = await taskCreationInputSchema.validate(newTaskData);
    createTask.current?.({
      variables: { data },
      optimisticResponse: getOptimisticResponseForTaskCreation(data),
    });
    setAddingNewTask(false);
  };
  return (
    <>
      <TableRow onBlur={() => (newTaskData.title ? null : setAddingNewTask(false))}>
        <TableCell />
        <TableCell>
          <TitleAndDescriptionFields
            dataTuple={[newTaskData, dispatchNewTaskData]}
            titleConfig={{ name: "title", label: "Task title", fontSizeRem: 0.85 }}
            descriptionConfig={{ name: "description", label: "Task description (optional)" }}
            includeIcon={false}
            editingState={[editing, setEditing]}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleCreateTask();
              } else if (e.key === "Escape") {
                if (!newTaskData.title) return setAddingNewTask(false);
              }
            }}
            // sx={{ py: 1 }}
          />
        </TableCell>
        <TableCell colSpan={3} />
      </TableRow>
      <TableRow>
        <TableCell colSpan={5}>
          <Box width="100%" display="flex">
            <Button sx={{ ml: "auto" }} onClick={() => setAddingNewTask(false)}>
              {"Cancel"}
            </Button>
            <Button onClick={handleCreateTask}>{"Save"}</Button>
          </Box>
        </TableCell>
        {/* <TableCell /> */}
      </TableRow>
    </>
  );
};
