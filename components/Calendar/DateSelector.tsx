import Box from "@mui/material/Box";
import { FC } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { addDays, subDays, format } from "date-fns";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface DateSelectorProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

const DateSelector: FC<DateSelectorProps> = (props: DateSelectorProps) => {
  const { date: currentDate, onDateChange } = props;
  return (
    <Box display="flex" alignItems="center">
      <Button
        variant="text"
        onClick={() => onDateChange(subDays(currentDate, 1))}
        sx={{ borderRadius: "50%", minWidth: 0 }}
      >
        <ChevronLeftIcon />
      </Button>
      <Typography mx="1rem">{format(currentDate, "MMMM d, yyyy")}</Typography>
      <Button
        variant="text"
        onClick={() => onDateChange(addDays(currentDate, 1))}
        sx={{ borderRadius: "50%", minWidth: 0 }}
      >
        <ChevronRightIcon />
      </Button>
    </Box>
  );
};

export default DateSelector;
