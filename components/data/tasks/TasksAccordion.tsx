import { useUser } from "@/components/contexts/UserContext";
import { DraggedTask } from "@/components/data/tasks/TaskRow";
import TasksTable from "@/components/data/tasks/TasksTable";
import { DistinctTasksUpdateArgs } from "@/graphql/generated/args/task.args";
import { TaskFragment } from "@/graphql/generated/fragments/task.fragment";
import { useUpdateTask } from "@/graphql/generated/hooks/task.hooks";
import { Task } from "@/graphql/generated/models/task.model";
import {
  getOptimisticResponseForTaskUpdate,
  UPDATE_TASKS_DISTINCTLY,
} from "@/graphql/generated/mutations/task.mutations";
import { MAX_TASK_RANK, MIN_TASK_RANK } from "@/graphql/schema/constants";
import { useHandleMutation } from "@/utils/data";
import { gql } from "@apollo/client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import { addDays, endOfDay, isSameDay } from "date-fns";
import partition from "lodash/partition";
import { FC, useCallback, useMemo, useState } from "react";

type TasksView = "today" | "next7" | "all";

export interface TasksAccordionProps {
  contained?: boolean;
}

const TasksAccordion: FC<TasksAccordionProps> = () => {
  const { user } = useUser();

  // If these are any top-level tasks, exclude the subtasks, since the top-level tasks
  // should already contain their subtasks. Otherwise, if there are no top-level tasks,
  // just show all the tasks, so that, e.g., a table of a task's subtasks can be
  // rendered in a task's detail dialog... TODO.
  const filteredTasks = useMemo(() => {
    const allTasks = user?.tasks ?? [];
    console.log("Calculating filteredTasks");
    const unarchivedTasks = allTasks
      .filter((task) => !task.archivedAt)
      .sort((a, b) => (a.rank > b.rank ? 1 : -1));
    const [topLevelTasks, subtasks] = partition(unarchivedTasks, (task) => {
      return !task.parentId;
    });
    return topLevelTasks.length ? topLevelTasks : subtasks;
  }, [user?.tasks]);

  // Distinguish incomplete tasks from completed tasks.
  const [incompleteTasks, completeTasks] = useMemo(() => {
    return partition(filteredTasks, (task) => !task.completedAt);
  }, [filteredTasks]);

  const recentlyCompletedTasks = useMemo(() => {
    const now = new Date();
    return completeTasks.filter((task) => task.completedAt && isSameDay(task.completedAt, now));
  }, [completeTasks]);

  const [recentlyCompletedTasksExpanded, setRecentlyCompletedTasksExpanded] = useState(false);

  const [updateTask, { loading: loadingUpdateTask, client: apolloClient }] = useUpdateTask();

  const [updateTaskRanks] = useHandleMutation<
    { updateTasksDistinctly: TaskFragment[] },
    DistinctTasksUpdateArgs
  >(UPDATE_TASKS_DISTINCTLY);

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
    ["today", "To do"],
    // TODO
    // ["next7", "Next 7 Days"],
    // ["all", "All"],
  ];

  console.log("Rendering TasksAccordion");

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
          <AccordionDetails>
            <TasksTable
              tasks={tasksBySelection[key]}
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
    </TableContainer>
  );
};

export default TasksAccordion;
