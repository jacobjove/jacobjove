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
  const { defaultView, selectedDateState, displayTitle, ...tasksTableProps } = props;
  const [_selectedDate, _setSelectedDate] = selectedDateState;
  const { newTaskDialogTriggerProps } = useNewTaskDialog();

  const [view, _setView] = useState<ViewMode>(defaultView ?? "list");
  return (
    <DataBox
      title={"Tasks"}
      displayTitle={displayTitle}
      onClickAddItem={newTaskDialogTriggerProps.onClick}
    >
      <Box minHeight={0} flexGrow={1}>
        {
          view === "list" ? <TasksAccordion {...tasksTableProps} /> : null
          // <TasksBoard data={{ tasks: selectedTasks }} {...tasksTableProps} />
        }
      </Box>
    </DataBox>
  );
};

export default TasksBox;
