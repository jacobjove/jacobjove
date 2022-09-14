import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { addDays, subDays } from "date-fns";
import json2mq from "json2mq";
import { Dispatch, FC, useState } from "react";
import { Theme } from "@mui/material/styles";

interface DateSelectorProps {
  date: Date;
  setDate: Dispatch<Date>;
  dateFormat?: string;
  clearable?: boolean;
  steppable?: boolean;
  minDate?: Date;
  maxDate?: Date;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
  open?: boolean;
}

// TODO: refactor...
const FORMAT_A = "MMMM d, yyyy";
const FORMAT_B = "MMM d, yyyy";
const FORMAT_C = "yyyy-M-d";
const FORMAT_D = "M/d";
// const FORMAT_CH_LENGTHS: Record<string, number> = {
//   [FORMAT_A]: 16,
//   [FORMAT_B]: 12,
//   [FORMAT_C]: 8,
//   [FORMAT_D]: 3,
// };

const DateSelector: FC<DateSelectorProps> = ({
  date: currentDate,
  setDate,
  dateFormat: _dateFormat,
  // clearable,
  minDate,
  maxDate,
  steppable: _steppable,
  onKeyUp,
  sx,
  open: initiallyOpen,
}: DateSelectorProps) => {
  const [open, setOpen] = useState(initiallyOpen ?? false);

  // TODO: determine if there's a more efficient way to do this...
  // Also, it would be way better to use container queries instead of media queries...
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries
  const canUseFormatA = useMediaQuery(json2mq({ minWidth: "1090px" }));
  const canUseFormatB = useMediaQuery(json2mq({ minWidth: "455px" }));
  const canUseFormatC = useMediaQuery(json2mq({ minWidth: "450px" }));
  const canIncludeSteppers = useMediaQuery(json2mq({ minWidth: "434px" }));

  const dateFormat =
    _dateFormat ||
    (canUseFormatA ? FORMAT_A : canUseFormatB ? FORMAT_B : canUseFormatC ? FORMAT_C : FORMAT_D);
  const steppable = _steppable ?? true;
  const referenceDate = currentDate || new Date();
  const canStepBack = steppable && (minDate ? subDays(referenceDate, 1) >= minDate : true);
  const canStepForward = steppable && (maxDate ? addDays(referenceDate, 1) <= maxDate : true);
  return (
    // Note: 100% height on the outer box lets the bottom border flesh with any containing element.
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        height: "100%",
        ...(sx ?? {}),
      }}
    >
      {canIncludeSteppers && (
        <IconButton
          disabled={!currentDate || !canStepBack}
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
        // mask={undefined} // uncontrolled
        disableMaskedInput
        value={currentDate}
        onChange={(newValue) => {
          newValue && setDate(newValue);
        }}
        renderInput={(params) => {
          const { inputRef, inputProps } = params;
          if (inputProps) {
            inputProps.style = {
              ...inputProps.style,
              minWidth: "3rem",
              width: "100%",
              height: "100%",
              border: "none",
              textAlign: "center",
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
              onKeyUp={onKeyUp}
            />
          );
        }}
      />
      {canIncludeSteppers && (
        <IconButton
          disabled={!currentDate || !canStepForward}
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
