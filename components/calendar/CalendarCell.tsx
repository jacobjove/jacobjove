import { BORDER_DEF } from "@/components/calendar/constants";
import { styled } from "@mui/material/styles";
import { FC, ReactNode } from "react";

interface CalendarCellProps {
  children: ReactNode;
  className?: string;
}

const Root = styled("div")(() => ({
  position: "relative",
  "& > div": {
    position: "absolute",
    top: "1px",
    left: "1px",
    right: "1px",
    bottom: "1px",
  },
  "&.day-header-cell": {
    flexGrow: 1,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:not(:first-of-type)": {
      borderLeft: BORDER_DEF,
    },
  },
  "&.all-day-cell": {
    flexGrow: 1,
    "&:not(:first-of-type)": {
      borderLeft: BORDER_DEF,
    },
  },
}));

const CalendarCell: FC<CalendarCellProps> = ({ children, className }: CalendarCellProps) => {
  return (
    <Root className={className ? `calendar-cell ${className}` : "calendar-cell"}>
      <div>{children}</div>
    </Root>
  );
};

export default CalendarCell;
