import { EventData } from "@/components/calendar/EventEditingDialog";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { Dispatch, FC } from "react";

interface EventFormFieldsProps {
  state: EventData;
  dispatch: Dispatch<{ field: string; value: unknown }>;
}

const EventFormFields: FC<EventFormFieldsProps> = ({ state, dispatch }: EventFormFieldsProps) => {
  return (
    <div>
      <TextField
        id="title"
        label="Title"
        variant="standard"
        value={state.title}
        onChange={(event) => dispatch({ field: "title", value: event.target.value })}
        fullWidth
        autoFocus
      />
      <FormGroup sx={{ marginY: "1rem" }}>
        <DateTimePicker
          label="Start"
          openTo="minutes"
          value={state.start}
          onChange={(value) => dispatch({ field: "start", value: value })}
          renderInput={(params) => <TextField {...params} sx={{ marginY: "1rem" }} required />}
        />
        <DateTimePicker
          label="End"
          openTo="minutes"
          minDateTime={state.start}
          value={state.end}
          // inputFormat="yyyy/MM/dd hh:mm a"
          onChange={(value) => dispatch({ field: "end", value: value })}
          renderInput={(params) => <TextField {...params} sx={{ marginY: "1rem" }} />}
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="All day" />
        <FormControlLabel control={<Checkbox />} label="Repeat" />
      </FormGroup>
      <TextField
        fullWidth
        multiline
        id="notes"
        label="Notes"
        variant="outlined"
        margin="dense"
        value={state.notes}
        onChange={(event) => dispatch({ field: "notes", value: event.target.value })}
      />
    </div>
  );
};

export default EventFormFields;
