// import TasksBoard from "@/components/actions/TasksBoard";
import TasksAccordion, { TasksAccordionProps } from "@/components/actions/TasksAccordion";
import DateContext from "@/components/contexts/DateContext";
import DateSelector from "@/components/dates/DateSelector";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Dispatch, FC, useContext, useState } from "react";
import { createPortal } from "react-dom";

type ViewMode = "list" | "board";

interface TasksBoxProps extends TasksAccordionProps {
  defaultView?: ViewMode;
  selectedDateState: [Date, Dispatch<Date>];
}

const TasksBox: FC<TasksBoxProps> = (props: TasksBoxProps) => {
  const { defaultView, data, selectedDateState, ...tasksTableProps } = props;
  const date = useContext(DateContext);
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
  const [fullScreen, setFullScreen] = useState(false);
  const renderedComponent = (
    <Box
      display="flex"
      flexDirection={"column"}
      height={"100%"}
      sx={{
        ...(fullScreen
          ? {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: (theme) => theme.palette.background.default,
              padding: "0.5rem",
              zIndex: 1e14,
            }
          : {}),
      }}
    >
      <Box display="flex" justifyContent={"space-between"} alignItems={"center"}>
        <Box display="flex" justifyContent={"center"} alignItems={"end"}>
          <ToggleButtonGroup
            exclusive
            value={view}
            onChange={(_, value: ViewMode) => setView(value)}
            size="small"
            color="primary"
            aria-label="text alignment"
            sx={{ "& button": { px: "5px", py: "3px" } }}
          >
            <ToggleButton value="list" aria-label="list view">
              <TableRowsIcon />
            </ToggleButton>
            <ToggleButton value="board" aria-label="board view" disabled>
              <ViewColumnIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        {fullScreen && (
          <DateSelector date={selectedDate} setDate={setSelectedDate} minDate={date} />
        )}
        <Box
          display={"flex"}
          alignItems={"start"}
          justifyContent={"center"}
          position="relative"
          sx={{
            "& button svg": {
              fontSize: "1.25rem",
            },
          }}
        >
          <IconButton
            title={!fullScreen ? `Expand to full screen` : `Exit full screen`}
            onClick={() => setFullScreen(!fullScreen)}
          >
            {!fullScreen ? <ZoomOutMapIcon /> : <CloseFullscreenIcon />}
          </IconButton>
        </Box>
      </Box>
      <Box minHeight={0}>
        {
          view === "list" ? (
            <TasksAccordion data={{ tasks: selectedTasks }} {...tasksTableProps} />
          ) : null
          // <TasksBoard data={{ tasks: selectedTasks }} {...tasksTableProps} />
        }
      </Box>
      <Box id="tasks-box-bottom" flex={"1 1 auto"} minHeight={0} />
    </Box>
  );
  if (fullScreen) return createPortal(renderedComponent, document.body);
  return renderedComponent;
};

export default TasksBox;
