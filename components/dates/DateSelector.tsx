import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DatePicker from "@mui/lab/DatePicker";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { addDays, subDays } from "date-fns";
import { FC, useState } from "react";

interface DateSelectorProps {
  date: Date | null;
  setDate: (date: Date | null) => void;
  dateFormat?: string;
  clearable?: boolean;
  steppable?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

const DateSelector: FC<DateSelectorProps> = ({
  date: currentDate,
  setDate,
  dateFormat: _dateFormat,
  clearable,
  minDate,
  maxDate,
  steppable: _steppable,
}: DateSelectorProps) => {
  const [open, setOpen] = useState(false);
  const dateFormat = _dateFormat || "MMMM d, yyyy";
  const steppable = _steppable ?? true;
  const referenceDate = currentDate || new Date();
  const canStepBack = steppable && (minDate ? subDays(referenceDate, 1) >= minDate : true);
  const canStepForward = steppable && (maxDate ? addDays(referenceDate, 1) <= maxDate : true);
  console.log(canStepBack, canStepForward);
  return (
    // Note: 100% height on the outer box lets the bottom border flesh with any containing element.
    <Box display="flex" alignItems="stretch" justifyContent={"space-evenly"} height="100%">
      {canStepBack && (
        <IconButton
          disabled={!currentDate}
          onClick={() => {
            if (currentDate) {
              setDate(subDays(currentDate, 1));
            }
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      )}
      <DatePicker
        open={open}
        onClose={() => setOpen(false)}
        inputFormat={dateFormat}
        clearable={clearable ?? false}
        mask={undefined} // uncontrolled
        value={currentDate}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => {
          const { inputRef, inputProps } = params;
          if (inputProps) {
            inputProps.style = {
              ...inputProps.style,
              ...{
                height: "100%",
                border: "none",
                textAlign: "center",
              },
            };
          }
          return (
            <Input
              className="DateSelector-input"
              inputRef={inputRef}
              inputProps={inputProps}
              sx={{ px: "0.25rem", fontSize: "inherit" }}
              onClick={() => {
                setOpen(true);
              }}
            />
          );
        }}
      />
      {canStepForward && (
        <IconButton
          disabled={!currentDate}
          onClick={() => {
            if (currentDate) {
              setDate(addDays(currentDate, 1));
            }
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default DateSelector;
