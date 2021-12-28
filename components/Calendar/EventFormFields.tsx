import DateTimePicker from "@mui/lab/DateTimePicker";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { FC } from "react";

interface EventFormFieldsProps {
  title?: string;
  setTitle: (title: string) => void;
  start: Date | null;
  setStart: (start: Date | null) => void;
  end: Date | null;
  setEnd: (end: Date | null) => void;
}

const EventFormFields: FC<EventFormFieldsProps> = (props: EventFormFieldsProps) => {
  const { title, setTitle, start, setStart, end, setEnd } = props;
  return (
    <div>
      <TextField
        id="title"
        label="Title"
        variant="standard"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        fullWidth
        autoFocus
      />
      <FormGroup sx={{ marginY: "1rem" }}>
        <DateTimePicker
          label="Start"
          openTo="minutes"
          value={start}
          onChange={(value) => {
            setStart(value);
          }}
          renderInput={(params) => <TextField {...params} sx={{ marginY: "1rem" }} required />}
        />
        <DateTimePicker
          label="End"
          openTo="minutes"
          minDateTime={start}
          value={end}
          // inputFormat="yyyy/MM/dd hh:mm a"
          onChange={(value) => {
            setEnd(value);
          }}
          renderInput={(params) => <TextField {...params} sx={{ marginY: "1rem" }} />}
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="All day" />
        <FormControlLabel control={<Checkbox />} label="Repeat" />
      </FormGroup>
      <TextField id="notes" label="Notes" variant="outlined" margin="dense" fullWidth multiline />
    </div>
  );
};

export default EventFormFields;
