import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDeviceData } from "@web/components/contexts/DeviceContext";
import TaskRow, { TaskRowProps } from "@web/components/data/tasks/TaskRow";
import TitleAndDescriptionFields from "@web/components/fields/TitleAndDescriptionFields";
import { useCreateTask, useTaskReducer, useTasksReducer } from "@web/generated/hooks/task.hooks";
import { getOptimisticResponseForTaskCreation } from "@web/graphql/generated/mutations/task.mutations";
import { taskCreationInputSchema } from "@web/graphql/generated/schemas/task.schemas";
import { Dispatch, FC, useState } from "react";

const PREFERRED_FONT_SIZE = "0.8rem";

export interface TasksTableProps {
  tasksDataTuple: ReturnType<typeof useTasksReducer>;
  appendable?: boolean;
  moveTaskRow: TaskRowProps["move"];
  updateTaskRank: TaskRowProps["onDrop"];
}

const TasksTable: FC<TasksTableProps> = (props: TasksTableProps) => {
  const { tasksDataTuple, appendable, moveTaskRow, updateTaskRank } = props;
  const [tasks, dispatch] = tasksDataTuple;
  const [createTask] = useCreateTask();
  const [addingTask, setAddingTask] = useState(false);
  const [newTaskData, dispatchNewTaskData] = useTaskReducer();
  const { isMobileWidth } = useDeviceData();

  const onSaveNewTask = async () => {
    const data = await taskCreationInputSchema.validate(newTaskData);
    const optimisticResponse = getOptimisticResponseForTaskCreation(data);
    createTask
      .current?.({ variables: { data }, optimisticResponse }, { skipValidation: true })
      .then(() => {
        dispatchNewTaskData({
          field: "init",
          value: {},
        });
      });
    setAddingTask(false);
    dispatch({
      type: "append",
      payload: optimisticResponse.createTask,
    });
  };

  const nTotalColumns = isMobileWidth ? 3 : 5;
  return (
    <Table
      sx={{
        mt: 1,
        minWidth: 100,
        "& th": { px: "0.25rem", pb: "2px", fontSize: "0.75rem", lineHeight: "0.9rem" },
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
          {!isMobileWidth && (
            <>
              <TableCell component={"th"} sx={{ textAlign: "center", minWidth: "3.5rem" }}>
                {"Scheduled"}
              </TableCell>
              <TableCell component={"th"} sx={{ textAlign: "center", minWidth: "3.5rem" }}>
                {"Due"}
              </TableCell>
            </>
          )}
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
            <NewTaskRow
              dataTuple={[newTaskData, dispatchNewTaskData]}
              onSave={onSaveNewTask}
              setAddingNewTask={setAddingTask}
            />
          ) : (
            <TableRow>
              <TableCell colSpan={nTotalColumns}>
                <Button
                  variant="text"
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
  dataTuple: ReturnType<typeof useTaskReducer>;
  setAddingNewTask: Dispatch<boolean>;
  onSave: () => void;
}

const NewTaskRow: FC<NewTaskRowProps> = ({
  dataTuple,
  onSave,
  setAddingNewTask,
}: NewTaskRowProps) => {
  const [newTaskData, dispatchNewTaskData] = dataTuple;
  const [editing, setEditing] = useState(true);
  const { isMobileWidth } = useDeviceData();
  const nTotalColumns = isMobileWidth ? 3 : 5;
  const handleCreateTask = () => onSave();
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
                setAddingNewTask(false);
                dispatchNewTaskData({ field: "init", value: {} });
              }
            }}
          />
        </TableCell>
        <TableCell colSpan={nTotalColumns - 2} />
      </TableRow>
      <TableRow>
        <TableCell colSpan={nTotalColumns}>
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
