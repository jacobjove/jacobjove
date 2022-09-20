// import TasksBoard from "@web/components/data/tasks/TasksBoard";
// import DateSelector from "@web/components/dates/DateSelector";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import TableRowsIcon from "@mui/icons-material/TableRows";
// import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import { Box } from "@mui/material";
import TasksAccordion, { TasksAccordionProps } from "@web/components/data/tasks/TasksAccordion";
import DataBox, { DataBoxProps } from "@web/components/DataBox";
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

  const [view, _setView] = useState<ViewMode>(defaultView ?? "list");
  return (
    <DataBox title={"Tasks"} displayTitle={displayTitle}>
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
