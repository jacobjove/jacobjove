import Stopwatch from "@/components/actions/Stopwatch";
import { Task } from "@/graphql/schema";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { bindPopover } from "material-ui-popup-state/hooks";
import TasksTable from "./TasksTable";

type ActionDialogProps = ReturnType<typeof bindPopover> & {
  task: Task;
};

export default function ActionDialog(props: ActionDialogProps) {
  const { task, onClose, anchorEl: _anchorEl, ...dialogProps } = props;
  return (
    <Dialog fullWidth {...dialogProps} onClose={onClose}>
      <DialogTitle>{task.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{task.description}</DialogContentText>
        {(!!task.subtasks?.length && <TasksTable data={{ tasks: task.subtasks }} />) || (
          <Stopwatch />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {/* <Button
          onClick={() => {
            console.log("do something");
          }}
        >
          Subscribe
        </Button> */}
      </DialogActions>
    </Dialog>
  );
}
