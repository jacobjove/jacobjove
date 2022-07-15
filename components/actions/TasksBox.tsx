// import TasksBoard from "@/components/actions/TasksBoard";
import TasksAccordion, { TasksAccordionProps } from "@/components/actions/TasksAccordion";
import DataBox, { DataBoxProps } from "@/components/DataBox";
// import DateSelector from "@/components/dates/DateSelector";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import TableRowsIcon from "@mui/icons-material/TableRows";
// import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import { Box } from "@mui/material";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Dispatch, FC, useState } from "react";

type ViewMode = "list" | "board";

type TasksBoxProps = TasksAccordionProps &
  Pick<DataBoxProps, "displayTitle"> & {
    defaultView?: ViewMode;
    selectedDateState: [Date, Dispatch<Date>];
  };

const TasksBox: FC<TasksBoxProps> = (props: TasksBoxProps) => {
  const { defaultView, data, selectedDateState, displayTitle, ...tasksTableProps } = props;
  const [selectedDate, setSelectedDate] = selectedDateState;
  // TODO: which of the following is more performant?
  // const selectedTasks = useMemo(() => {
  //   if (!selectedDate) return data.tasks;
  //   return data.tasks.filter((task) =>
  //     !task.plannedStartDate ? true : parseISO(task.plannedStartDate) <= selectedDate
  //   );
  // }, [selectedDate, data.tasks]);
  //prettier-ignore
  const selectedTasks = !selectedDate ? data.tasks : data.tasks.filter((task) => {
    return !task.plannedStartDate ? true : task.plannedStartDate <= selectedDate;
  });
  const [view, setView] = useState<ViewMode>(defaultView ?? "list");
  return (
    <DataBox title={"Tasks"} displayTitle={displayTitle}>
      <Box minHeight={0} flexGrow={1}>
        {
          view === "list" ? (
            <TasksAccordion data={{ tasks: selectedTasks }} {...tasksTableProps} />
          ) : null
          // <TasksBoard data={{ tasks: selectedTasks }} {...tasksTableProps} />
        }
      </Box>
    </DataBox>
  );
};

export default TasksBox;
