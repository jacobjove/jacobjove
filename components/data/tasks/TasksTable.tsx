import TaskRow, { TaskRowProps } from "@/components/data/tasks/TaskRow";
import TitleAndDescriptionFields from "@/components/fields/TitleAndDescriptionFields";
import { TaskFragment } from "@/graphql/generated/fragments/task.fragment";
import { useCreateTask, useTaskDataReducer } from "@/graphql/generated/hooks/task.hooks";
import { getOptimisticResponseForTaskCreation } from "@/graphql/generated/mutations/task.mutations";
import { taskCreationInputSchema } from "@/graphql/generated/schemas/task.schemas";
import { ID } from "@/graphql/schema/types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Dispatch, FC, useEffect, useReducer, useState } from "react";

const PREFERRED_FONT_SIZE = "0.8rem";

export interface TasksTableProps {
  tasks: TaskFragment[];
  appendable?: boolean;
  moveTaskRow: TaskRowProps["move"];
  updateTaskRank: TaskRowProps["onDrop"];
}

type Action =
  | {
      type: "append";
      payload: TaskFragment;
    }
  | {
      type: "insert";
      payload: {
        task: TaskFragment;
        index: number;
      };
    }
  | {
      type: "remove";
      payload: {
        id: ID;
      };
    }
  | {
      type: "init";
      payload: TaskFragment[];
    };

function tasksReducer(state: TaskFragment[], action: Action) {
  switch (action.type) {
    case "init":
      return action.payload;
    case "append":
      return [...state, action.payload];
    case "insert":
      return [
        // part of the array before the specified index
        ...state.slice(0, action.payload.index),
        // inserted item
        action.payload.task,
        // part of the array after the specified index
        ...state.slice(action.payload.index),
      ];
    // case "update":
    //   return {
    //     ...state,
    //     tasks: state.map((task) => {
    //       if (task.id === action.task.id) {
    //         return action.task;
    //       }
    //       return task;
    //     }),
    //   };
    case "remove":
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
}

const TasksTable: FC<TasksTableProps> = (props: TasksTableProps) => {
  const { tasks: _tasks, appendable, moveTaskRow, updateTaskRank } = props;
  const [createTask] = useCreateTask();
  const [addingTask, setAddingTask] = useState(false);
  const [newTaskData, dispatchNewTaskData] = useTaskDataReducer();
  const [tasks, dispatch] = useReducer(tasksReducer, _tasks);

  useEffect(() => {
    dispatch({
      type: "init",
      payload: _tasks,
    });
  }, [_tasks]);

  const onSaveNewTask = async () => {
    const data = await taskCreationInputSchema.validate(newTaskData);
    const optimisticResponse = getOptimisticResponseForTaskCreation(data);
    createTask.current?.({ variables: { data }, optimisticResponse }, { skipValidation: true });
    setAddingTask(false);
    dispatch({
      type: "append",
      payload: optimisticResponse.createTask,
    });
  };

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
            <NewTaskRow
              dataTuple={[newTaskData, dispatchNewTaskData]}
              onSave={onSaveNewTask}
              setAddingNewTask={setAddingTask}
            />
          ) : (
            <TableRow>
              <TableCell colSpan={5}>
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
  dataTuple: ReturnType<typeof useTaskDataReducer>;
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
  const handleCreateTask = async () => {
    onSave();
    dispatchNewTaskData({ field: "init", value: {} });
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
                setAddingNewTask(false);
                dispatchNewTaskData({ field: "init", value: {} });
              }
            }}
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
