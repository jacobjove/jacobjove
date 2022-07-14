import TaskDialog from "@/components/actions/TaskDialog";
import TaskRow, { DraggedTask } from "@/components/actions/TaskRow";
import TasksTable from "@/components/actions/TasksTable";
import { taskFragment } from "@/graphql/fragments";
import { UPDATE_TASK } from "@/graphql/mutations";
import { Task } from "@/graphql/schema/models/Task";
import { initializeTaskData, taskDataReducer } from "@/utils/tasks";
import { gql, useMutation } from "@apollo/client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import { addDays, endOfDay, isSameDay } from "date-fns";
import partition from "lodash/partition";
import { bindPopover, usePopupState } from "material-ui-popup-state/hooks";
import { FC, useCallback, useMemo, useReducer, useState } from "react";

const MAX_TASK_RANK = 2 ** 31 - 1;
const MIN_TASK_RANK = -MAX_TASK_RANK - 1;

const UPDATE_MANY_TASK_RANK = gql`
  mutation UpdateManyTaskRank($data: [UpdateManyTaskRankData!]!) {
    updateManyTaskRank(data: $data) {
      id
      rank
    }
  }
`;

type TasksView = "today" | "next7" | "all";

export const fragment = gql`
  fragment TasksTable on Query {
    tasks {
      ...TaskFragment
    }
  }
  ${taskFragment}
`;

export interface TasksAccordionProps {
  contained?: boolean;
  data: {
    tasks: Task[];
  };
}

const TasksAccordion: FC<TasksAccordionProps> = (props: TasksAccordionProps) => {
  const { data } = props;
  const { tasks: allTasks } = data;

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
    return partition(filteredTasks, (task) => !task.completedAt);
  }, [filteredTasks]);

  const recentlyCompletedTasks = useMemo(() => {
    const now = new Date();
    return completeTasks.filter((task) => task.completedAt && isSameDay(task.completedAt, now));
  }, [completeTasks]);

  const greatestRank = incompleteTasks[incompleteTasks.length - 1]?.rank ?? MIN_TASK_RANK;
  const defaultRank = Math.floor(greatestRank + Math.floor((MAX_TASK_RANK - greatestRank) / 2));

  const [newTaskData, dispatchNewTaskData] = useReducer(
    taskDataReducer,
    initializeTaskData({ rank: defaultRank }),
    initializeTaskData
  );

  const [recentlyCompletedTasksExpanded, setRecentlyCompletedTasksExpanded] = useState(false);

  const [updateTask, { loading: loadingUpdateTask, client: apolloClient }] =
    useMutation(UPDATE_TASK);
  const [updateManyTaskRank] = useMutation(UPDATE_MANY_TASK_RANK);

  const newTaskDialogState = usePopupState({ variant: "popover", popupId: `new-task-dialog` });

  // TODO: is this efficient enough?
  const tasksBySelection = useMemo(() => {
    return {
      all: incompleteTasks,
      today: incompleteTasks.filter(
        (task) => !task.plannedStartDate || task.plannedStartDate <= endOfDay(new Date())
      ),
      next7: incompleteTasks.filter(
        (task) =>
          !task.plannedStartDate || task.plannedStartDate <= endOfDay(addDays(new Date(), 7))
      ),
    };
  }, [incompleteTasks]);

  const [selectedView, setSelectedView] = useState<TasksView | null>("today");

  // Enable re-ordering the tasks.
  const moveTaskRow = useCallback(
    (draggedTask: DraggedTask, hoveredTask: Task) => {
      if (draggedTask.id === hoveredTask.id || loadingUpdateTask) return null;

      const temporaryRank = hoveredTask.rank + (draggedTask.rank < hoveredTask.rank ? 1 : -1);
      apolloClient.cache.writeFragment({
        id: `Task:${draggedTask.id}`,
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
    [loadingUpdateTask, apolloClient.cache]
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

  const renderTaskRow = (task: Task, index: number) => (
    <TaskRow key={task.id} task={task} index={index} move={moveTaskRow} onDrop={updateTaskRank} />
  );

  // const handleNewTaskFieldChange = (field: keyof Task, value: unknown) => {
  //   dispatchNewTaskData({ field, value });
  // };

  // const handleNewTaskSubmit = async () => {
  //   setAddingNewTask(false);

  const views: [TasksView, string][] = [
    ["today", "To do"],
    // TODO
    // ["next7", "Next 7 Days"],
    // ["all", "All"],
  ];

  return (
    <TableContainer className="no-scrollbar" sx={{ mt: 1, maxHeight: "100%" }}>
      {views.map(([key, label]) => (
        <Accordion
          key={key}
          expanded={key === selectedView}
          onChange={() => {
            key === selectedView ? setSelectedView(null) : setSelectedView(key);
          }}
          sx={{
            "& .MuiAccordionSummary-root.Mui-expanded": { minHeight: 0 },
            "& .MuiAccordionSummary-content.Mui-expanded": { margin: "0.5rem 0" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>{label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TasksTable
              tasks={tasksBySelection[key]}
              moveTaskRow={undefined}
              updateTaskRank={undefined}
              newTaskDialogState={newTaskDialogState}
              appendable
            />
          </AccordionDetails>
        </Accordion>
      ))}
      {!!recentlyCompletedTasks.length && (
        <Accordion
          expanded={recentlyCompletedTasksExpanded}
          onChange={() => {
            setRecentlyCompletedTasksExpanded(!recentlyCompletedTasksExpanded);
          }}
          sx={{
            "& .MuiAccordionSummary-root.Mui-expanded": { minHeight: 0 },
            "& .MuiAccordionSummary-content.Mui-expanded": { margin: "0.5rem 0" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>{"Recently completed"}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TasksTable
              tasks={recentlyCompletedTasks}
              moveTaskRow={undefined}
              updateTaskRank={undefined}
            />
          </AccordionDetails>
        </Accordion>
      )}
      <TaskDialog
        task={newTaskData}
        dispatchTaskData={dispatchNewTaskData}
        {...bindPopover(newTaskDialogState)}
      />
    </TableContainer>
  );
};

export default TasksAccordion;
