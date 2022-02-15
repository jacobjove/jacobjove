import EditingModeTaskCells from "@/components/actions/EditingModeTaskCells";
import TaskRow, { DraggedTask } from "@/components/actions/TaskRow";
import { taskFragment } from "@/graphql/fragments";
import { CREATE_TASK, UPDATE_TASK } from "@/graphql/mutations";
import { Task } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import partition from "lodash/partition";
import { useSession } from "next-auth/react";
import { FC, useCallback, useMemo, useState } from "react";

export const fragment = gql`
  fragment TasksTable on Query {
    tasks(where: { userId: { equals: $userId } }) {
      ...TaskFragment
    }
  }
  ${taskFragment}
`;

const UPDATE_MANY_TASK_RANK = gql`
  mutation UpdateManyTaskRank($data: [UpdateManyTaskRankData!]!, $userId: Int!) {
    updateManyTaskRank(data: $data, userId: $userId) {
      id
      rank
    }
  }
`;

const PREFERRED_FONT_SIZE = "0.8rem";
const MAX_TASK_RANK = 2 ** 31 - 1;
const MIN_TASK_RANK = -MAX_TASK_RANK - 1;

export interface TasksTableProps {
  contained?: boolean;
  data: {
    tasks: Task[];
  };
}

const TasksTable: FC<TasksTableProps> = (props: TasksTableProps) => {
  const { data } = props;
  const { tasks: allTasks } = data;
  const { data: session } = useSession();

  const [updateTask, { loading: loadingUpdateTask, client: apolloClient }] =
    useMutation(UPDATE_TASK);
  const [updateManyTaskRank] = useMutation(UPDATE_MANY_TASK_RANK);
  const [addingNewTask, setAddingNewTask] = useState(false);
  const [newTask, setNewTask] = useState<Partial<Task>>({});

  const [createTask, { loading: _loading }] = useMutation<{ createTask: Task }>(CREATE_TASK, {
    update(cache, { data }) {
      console.log("update", data);
      const { createTask } = data || {};
      if (createTask) {
        console.log("cache.modify...");
        cache.modify({
          fields: {
            tasks(existingTasks = []) {
              console.log("existingTasks", existingTasks);
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

  // Exclude archived tasks.
  let filteredTasks = useMemo(
    () => allTasks.filter((task) => !task.archivedAt).sort((a, b) => (a.rank > b.rank ? 1 : -1)),
    [allTasks]
  );
  // filteredTasks.sort((a, b) => (a.rank > b.rank ? 1 : -1));

  // If these are any top-level tasks, exclude the subtasks, since the top-level tasks
  // should already contain their subtasks. Otherwise, if there are no top-level tasks,
  // just show all the tasks, so that, e.g., a table of a task's subtasks can be
  // rendered in a task's detail dialog... TODO.
  const [topLevelTasks, subtasks] = useMemo(
    () =>
      partition(filteredTasks, (task) => {
        return !task.parentId;
      }),
    [filteredTasks]
  );

  filteredTasks = topLevelTasks.length ? topLevelTasks : subtasks;

  // Distinguish incomplete tasks from completed tasks.
  const [incompleteTasks, completeTasks] = useMemo(() => {
    // console.log("incompleteTasks dependency change")
    return partition(filteredTasks, (task) => !task.completedAt);
  }, [filteredTasks]);

  // Enable re-ordering the tasks.
  const moveTaskRow = useCallback(
    (draggedTask: DraggedTask, hoveredTask: Task) => {
      if (draggedTask.id === hoveredTask.id || loadingUpdateTask) return null;

      const temporaryRank = hoveredTask.rank + (draggedTask.rank < hoveredTask.rank ? 1 : -1);
      apolloClient.cache.writeFragment({
        id: `${draggedTask.__typename}:${draggedTask.id}`,
        data: {
          rank: temporaryRank,
        },
        fragment: gql`
          fragment UpdateTaskRank on Task {
            rank
          }
        `,
        fragmentName: "UpdateTaskRank",
      });
      // returning modified fields allows an actively dragging task to update
      return { rank: temporaryRank };
    },
    [incompleteTasks, loadingUpdateTask, apolloClient.cache]
  );

  const updateTaskRank = useCallback(
    (dropIndex: number) => {
      const task = incompleteTasks[dropIndex];
      const lowerRank = dropIndex == 0 ? MIN_TASK_RANK : incompleteTasks[dropIndex - 1].rank;
      const upperRank =
        dropIndex == incompleteTasks.length - 1
          ? MAX_TASK_RANK
          : incompleteTasks[dropIndex + 1].rank;

      const newRank = lowerRank + Math.floor((upperRank - lowerRank) / 2);

      // check bounds and their neighbors to prevent rank conflicts
      // while actively dragging a task
      if ([lowerRank, upperRank, lowerRank + 1, upperRank - 1].includes(newRank)) {
        const increment = Math.floor(
          (MAX_TASK_RANK - MIN_TASK_RANK) / (incompleteTasks.length + 1)
        );
        const newRanks = incompleteTasks.map(({ id }, index) => ({
          id,
          rank: MIN_TASK_RANK + increment * (index + 1),
        }));
        updateManyTaskRank({
          variables: {
            userId: session?.user.id,
            data: newRanks,
          },
          optimisticResponse: {
            updateManyTaskRank: newRanks.map((task) => ({ __typename: "Task", ...task })),
          },
        });
      } else {
        updateTask({
          variables: {
            taskId: task.id,
            data: { rank: { set: newRank } },
          },
          optimisticResponse: {
            updateTask: {
              __typename: "Task",
              ...task,
              rank: newRank,
            },
          },
        });
      }
    },
    [incompleteTasks, updateTask, updateManyTaskRank]
  );

  const handleNewTaskFieldChange = (field: keyof Task, value: unknown) => {
    setNewTask({ ...newTask, [field]: value });
  };

  const handleNewTaskSubmit = async () => {
    setAddingNewTask(false);

    const greatestRank = incompleteTasks[incompleteTasks.length - 1]?.rank ?? MIN_TASK_RANK;
    const defaultRank = Math.floor(greatestRank + Math.floor((MAX_TASK_RANK - greatestRank) / 2));

    if (session?.user) {
      const now = new Date().toISOString();
      await createTask({
        variables: {
          data: {
            ...newTask,
            rank: defaultRank,
            user: {
              connect: {
                id: session.user.id,
              },
            },
          },
        },
        optimisticResponse: {
          createTask: {
            title: "",
            dueDate: null,
            description: null,
            habit: null,
            parentId: null,
            subtasks: [],
            completedAt: null,
            archivedAt: null,
            rank: defaultRank,
            createdAt: now,
            updatedAt: now,
            ...newTask,
            __typename: "Task",
            id: -1,
          },
        },
      }).catch((error) => {
        console.error(error);
      });
    }
    setNewTask({});
  };

  const renderTaskRow = (task: Task, index: number) => (
    <TaskRow key={task.id} task={task} index={index} move={moveTaskRow} onDrop={updateTaskRank} />
  );

  return (
    <TableContainer className="no-scrollbar" sx={{ mt: 1 }}>
      <Table
        sx={{
          minWidth: 100,
          "& th": { padding: 0 },
          "& td": { padding: 0, fontSize: PREFERRED_FONT_SIZE },
        }}
        size="small"
        aria-label="table of tasks"
      >
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Task</TableCell>
            <TableCell style={{ width: "5rem", textAlign: "center" }}>Due date</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incompleteTasks.map(renderTaskRow)}
          <TableRow>
            {(addingNewTask && (
              <EditingModeTaskCells
                task={newTask}
                handleFieldChange={handleNewTaskFieldChange}
                handleSubmit={handleNewTaskSubmit}
                handleCancel={() => setAddingNewTask(false)}
              />
            )) || (
              <>
                <TableCell colSpan={2} />
                <TableCell colSpan={5}>
                  <Button
                    variant="text"
                    onClick={() => setAddingNewTask(true)}
                    sx={{
                      textTransform: "none",
                      fontStyle: "italic",
                      color: (theme) => (theme.palette.mode === "light" ? "lightgray" : "darkgray"),
                      py: "0.25rem",
                      width: "100%",
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    {incompleteTasks.length ? "Add another task..." : "Add a task..."}
                  </Button>
                </TableCell>
              </>
            )}
          </TableRow>
          {!!completeTasks.length && (
            <>
              <TableRow>
                <TableCell colSpan={7} style={{ paddingTop: "1rem", paddingBottom: "0.25rem" }}>
                  <Typography variant="h4" mx="0.25rem">
                    {"Recently completed"}
                  </Typography>
                </TableCell>
              </TableRow>
              {completeTasks.map(renderTaskRow)}
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TasksTable;
