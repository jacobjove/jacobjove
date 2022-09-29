// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import { useUser } from "@web/components/contexts/UserContext";
import { DraggedTask } from "@web/components/data/tasks/TaskRow";
import TasksTable from "@web/components/data/tasks/TasksTable";
import { DistinctTasksUpdateArgs } from "@web/generated/graphql/args/task.args";
import { TaskFragment } from "@web/generated/graphql/fragments/task.fragment";
import {
  getOptimisticResponseForTaskUpdate,
  UPDATE_TASKS_DISTINCTLY,
} from "@web/generated/graphql/mutations/task.mutations";
import { useTasksReducer, useUpdateTask } from "@web/generated/hooks/task.hooks";
import { MAX_TASK_RANK, MIN_TASK_RANK } from "@web/graphql/schema/constants";
import { useHandleMutation } from "@web/hooks/mutation";
import { addDays, endOfDay, isSameDay } from "date-fns";
import partition from "lodash/partition";
import { FC, useCallback, useEffect, useMemo, useState } from "react";

type TasksView = "today" | "next7" | "all";

export interface TasksAccordionProps {
  contained?: boolean;
}

const TasksAccordion: FC<TasksAccordionProps> = () => {
  const { user } = useUser();

  const [tasks, dispatchTasks] = useTasksReducer(user?.tasks ?? []);

  // If these are any top-level tasks, exclude the subtasks, since the top-level tasks
  // should already contain their subtasks. Otherwise, if there are no top-level tasks,
  // just show all the tasks, so that, e.g., a table of a task's subtasks can be
  // rendered in a task's detail dialog... TODO.
  const filteredTasks = useMemo(() => {
    const unarchivedTasks = tasks
      .filter((task) => !task.archivedAt)
      .sort((a, b) => (a.rank > b.rank ? 1 : -1));
    const [topLevelTasks, subtasks] = partition(unarchivedTasks, (task) => {
      return !task.parentId;
    });
    return topLevelTasks.length ? topLevelTasks : subtasks;
  }, [tasks]);

  // Distinguish incomplete tasks from completed tasks.
  const [incompleteTasks, completeTasks] = useMemo(() => {
    return partition(filteredTasks, (task) => !task.completedAt);
  }, [filteredTasks]);

  const recentlyCompletedTasks = useMemo(() => {
    const now = new Date();
    return completeTasks.filter((task) => task.completedAt && isSameDay(task.completedAt, now));
  }, [completeTasks]);

  const [recentlyCompletedTasksExpanded, setRecentlyCompletedTasksExpanded] = useState(false);

  const [updateTask, { loading: loadingUpdateTask }] = useUpdateTask();

  const [updateTaskRanks] = useHandleMutation<
    { updateTasksDistinctly: TaskFragment[] },
    DistinctTasksUpdateArgs
  >(UPDATE_TASKS_DISTINCTLY);

  // TODO
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
    (draggedTask: DraggedTask, hoveredTask: TaskFragment) => {
      if (draggedTask.id === hoveredTask.id || loadingUpdateTask) return null;
      const direction = draggedTask.rank < hoveredTask.rank ? "down" : "up";
      const temporaryRank = hoveredTask.rank + (direction === "up" ? -1 : 1);
      console.log(`Moving task to rank ${temporaryRank}`);
      dispatchTasks({
        type: "updateItem",
        payload: { id: draggedTask.id, item: { ...draggedTask, rank: temporaryRank } },
      });
      console.log(`Dispatched ${temporaryRank}`);
      // apolloClient.cache.writeFragment({
      //   id: `Task:${draggedTask.id}`,
      //   data: {
      //     rank: temporaryRank,
      //   },
      //   fragment: gql`
      //     fragment UpdateTaskRank on Task {
      //       rank
      //     }
      //   `,
      //   fragmentName: "UpdateTaskRank",
      // });
      // returning modified fields allows an actively dragging task to update
      return { rank: temporaryRank };
    },
    [loadingUpdateTask, dispatchTasks]
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
        const rearrangedTasks = incompleteTasks.map((task, index) => ({
          ...task,
          rank: MIN_TASK_RANK + increment * (index + 1),
        }));
        const data = rearrangedTasks.map(({ id, rank }) => ({
          where: { id },
          data: { rank },
        }));
        updateTaskRanks.current?.({
          variables: { data },
          optimisticResponse: {
            updateTasksDistinctly: rearrangedTasks,
          },
        });
      } else {
        updateTask.current?.({
          variables: {
            where: { id: task.id },
            data: { rank: newRank },
          },
          optimisticResponse: getOptimisticResponseForTaskUpdate(task, { rank: newRank }),
        });
      }
    },
    [incompleteTasks, updateTask, updateTaskRanks]
  );

  const views: [TasksView, string][] = [
    // ["today", "To do"],
    // TODO
    // ["next7", "Next 7 Days"],
    ["all", "All"],
  ];

  useEffect(() => {
    if (user?.tasks) {
      dispatchTasks({
        type: "init",
        payload: user.tasks,
      });
    }
  }, [user?.tasks, dispatchTasks]);

  // console.log(tasksBySelection);

  return (
    <TableContainer
      className="no-scrollbar"
      sx={{
        height: "100%",
        maxHeight: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        "& .MuiPaper-root": {
          margin: 0,
          flexGrow: 1,
        },
      }}
    >
      {views.map(([key]) => (
        <Accordion
          key={key}
          expanded={key === selectedView}
          onChange={() => {
            key === selectedView ? setSelectedView(null) : setSelectedView(key);
          }}
          sx={{
            padding: 0,
            backgroundImage: "none",
            backgroundColor: "transparent",
            "& .MuiAccordionSummary-root.Mui-expanded": { minHeight: 0 },
            "& .MuiAccordionSummary-content.Mui-expanded": { margin: "0.5rem 0" },
          }}
        >
          {/* <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>{label}</Typography>
          </AccordionSummary> */}
          <AccordionDetails sx={{ p: 0 }}>
            <TasksTable
              tasksDataTuple={[tasksBySelection[key], dispatchTasks]}
              moveTaskRow={moveTaskRow}
              updateTaskRank={updateTaskRank}
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
            mt: "auto",
            "& .MuiAccordionSummary-root.Mui-expanded": { minHeight: 0 },
            "& .MuiAccordionSummary-content.Mui-expanded": { margin: "0.5rem 0" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandLessIcon />}
            // collapseIcon={<ExpandLessIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>{"Recently completed"}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TasksTable
              tasksDataTuple={[recentlyCompletedTasks, dispatchTasks]}
              moveTaskRow={undefined}
              updateTaskRank={undefined}
            />
          </AccordionDetails>
        </Accordion>
      )}
    </TableContainer>
  );
};

export default TasksAccordion;
