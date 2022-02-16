import DateSelector from "@/components/dates/DateSelector";
import { Task } from "@/graphql/schema";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import { parseISO } from "date-fns";
import { FC } from "react";

const PREFERRED_FONT_SIZE = "0.8rem";

interface EditingModeTaskRowProps {
  task: Partial<Task>;
  handleFieldChange: (field: keyof Task, value: unknown) => void;
  handleSubmit: () => void;
  handleCancel: () => void;
}

const EditingModeTaskCells: FC<EditingModeTaskRowProps> = ({
  task,
  handleFieldChange,
  handleSubmit,
  handleCancel,
}: EditingModeTaskRowProps) => {
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    } else if (event.key === "Escape") {
      event.preventDefault();
      handleCancel();
    }
  };
  return (
    <>
      <TableCell colSpan={1} />
      <TableCell>
        <Box height="2.5rem" width="100%" display="flex" justifyContent="center">
          <TextField
            autoFocus
            variant="standard"
            placeholder={"Task title"}
            value={task.title ?? ""}
            required
            sx={{
              flexGrow: 1,
              height: "100%",
              "& div": { height: "100%" },
              "& input": {
                height: "100%",
                fontSize: PREFERRED_FONT_SIZE,
              },
              "& input::placeholder": {
                fontStyle: "italic",
                fontSize: PREFERRED_FONT_SIZE,
              },
            }}
            onChange={(event) => {
              handleFieldChange("title", event.target.value);
            }}
            onKeyUp={handleKeyUp}
          />
        </Box>
      </TableCell>
      <TableCell>
        <Box height="2.5rem" maxWidth={"5rem"}>
          <DateSelector
            date={task.dueDate ? parseISO(task.dueDate) : null}
            setDate={(date) => {
              handleFieldChange("dueDate", date);
            }}
            dateFormat={"M/d"}
            steppable={false}
            onKeyUp={handleKeyUp}
          />
        </Box>
      </TableCell>
      <TableCell colSpan={3} />
    </>
  );
};

export default EditingModeTaskCells;
