import DateTimePicker from "@mui/lab/DateTimePicker";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { FC } from "react";

interface EventCreationDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  startTime: Date | null;
  setStartTime: (startTime: Date | null) => void;
  endTime: Date | null;
  setEndTime: (endTime: Date | null) => void;
}

const EventCreationDialog: FC<EventCreationDialogProps> = (props: EventCreationDialogProps) => {
  const { open, setOpen, startTime, setStartTime, endTime, setEndTime } = props;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create calendar event</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>Enter the event details below.</DialogContentText> */}
        <TextField id="title" label="Title" variant="standard" fullWidth autoFocus />
        <FormGroup sx={{ marginY: "1rem" }}>
          <DateTimePicker
            label="Start"
            openTo="minutes"
            value={startTime}
            onChange={(value) => {
              setStartTime(value);
            }}
            renderInput={(params) => <TextField {...params} sx={{ marginY: "1rem" }} />}
          />
          <DateTimePicker
            label="End"
            openTo="minutes"
            minDateTime={startTime}
            value={endTime}
            // inputFormat="yyyy/MM/dd hh:mm a"
            onChange={(value) => {
              setEndTime(value);
            }}
            renderInput={(params) => <TextField {...params} sx={{ marginY: "1rem" }} />}
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="All day" />
          <FormControlLabel control={<Checkbox />} label="Repeat" />
        </FormGroup>
        <TextField id="notes" label="Notes" variant="outlined" margin="dense" fullWidth multiline />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventCreationDialog;
