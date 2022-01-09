import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import { addDays, subDays } from "date-fns";
import { FC } from "react";

interface DateSelectorProps {
  date: Date | null;
  setDate: (date: Date | null) => void;
  onDateChange: (date: Date) => void;
}

const DateSelector: FC<DateSelectorProps> = styled((props: DateSelectorProps) => {
  const { date: currentDate, setDate, onDateChange } = props;
  return (
    <Box display="flex" alignItems="stretch" justifyContent={"space-evenly"}>
      <IconButton
        disabled={!currentDate}
        onClick={() => {
          if (currentDate) {
            onDateChange(subDays(currentDate, 1));
          }
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <DesktopDatePicker
        inputFormat="MMMM d, yyyy"
        mask={undefined} // uncontrolled
        value={currentDate}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => {
          const { inputRef, inputProps, InputProps } = params;
          const style = {
            height: "100%",
            border: "none",
            width: "10rem",
          };
          if (inputProps) {
            inputProps.style = { ...inputProps.style, ...style };
          }
          return (
            <Input
              className="DateSelector-input"
              inputRef={inputRef}
              inputProps={inputProps}
              endAdornment={InputProps?.endAdornment}
              style={{
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
                padding: "0 0.5rem",
              }}
            />
          );
        }}
      />
      <IconButton
        disabled={!currentDate}
        onClick={() => {
          if (currentDate) {
            onDateChange(addDays(currentDate, 1));
          }
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
})(() => ({
  "& .DateSelector-input": {
    height: "100%",
    backgroundColor: "blue",
  },
}));

export default DateSelector;
