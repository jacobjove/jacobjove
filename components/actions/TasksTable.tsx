import TaskRow, { TaskRowProps } from "@/components/actions/TaskRow";
import { Task } from "@/graphql/schema";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { bindTrigger, PopupState } from "material-ui-popup-state/hooks";
import { FC } from "react";

const PREFERRED_FONT_SIZE = "0.8rem";

export interface TasksTableProps {
  tasks: Task[];
  appendable?: boolean;
  newTaskDialogState?: PopupState;
  moveTaskRow: TaskRowProps["move"];
  updateTaskRank: TaskRowProps["onDrop"];
}

const TasksTable: FC<TasksTableProps> = (props: TasksTableProps) => {
  const { tasks, appendable, newTaskDialogState, moveTaskRow, updateTaskRank } = props;
  return (
    <Table
      sx={{
        minWidth: 100,
        "& th": { px: "0.25rem", py: "1px", fontSize: "0.75rem", lineHeight: "0.9rem" },
        "& td": { padding: 0, fontSize: PREFERRED_FONT_SIZE },
      }}
      size="small"
      aria-label="table of tasks"
    >
      <TableHead>
        <TableRow>
          <TableCell component={"th"}>{"Done?"}</TableCell>
          <TableCell component={"th"} sx={{ width: "90%" }}>
            {"Task"}
          </TableCell>
          <TableCell component={"th"} sx={{ textAlign: "center", minWidth: "3.5rem" }}>
            {"Due"}
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task, index) => (
          <TaskRow
            key={task.id}
            task={task}
            index={index}
            move={moveTaskRow}
            onDrop={updateTaskRank}
          />
        ))}
        {appendable && (
          <TableRow>
            {
              <>
                <TableCell colSpan={1} />
                <TableCell colSpan={3}>
                  <Button
                    variant="text"
                    {...(newTaskDialogState && bindTrigger(newTaskDialogState))}
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
                    {tasks.length ? "Add another task..." : "Add a task..."}
                  </Button>
                </TableCell>
              </>
            }
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TasksTable;
