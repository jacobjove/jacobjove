// import TasksBoard from "@/components/actions/TasksBoard";
import TasksAccordion, { TasksAccordionProps } from "@/components/actions/TasksAccordion";
import { useNewTaskDialog } from "@/components/contexts/NewTaskDialogContext";
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
  const [selectedDate, _setSelectedDate] = selectedDateState;
  const { newTaskDialogTriggerProps } = useNewTaskDialog();

  // TODO: useMemo?
  // prettier-ignore
  // const selectedTasks = !selectedDate ? data.tasks : data.tasks.filter((task) => {
  //   return !task.plannedStartDate ? true : task.plannedStartDate <= selectedDate;
  // });

  const [view, _setView] = useState<ViewMode>(defaultView ?? "list");
  return (
    <DataBox
      title={"Tasks"}
      displayTitle={displayTitle}
      onClickAddItem={newTaskDialogTriggerProps.onClick}
    >
      <Box minHeight={0} flexGrow={1}>
        {
          view === "list" ? (
            <TasksAccordion data={{ tasks: data.tasks }} {...tasksTableProps} />
          ) : null
          // <TasksBoard data={{ tasks: selectedTasks }} {...tasksTableProps} />
        }
      </Box>
    </DataBox>
  );
};

export default TasksBox;
