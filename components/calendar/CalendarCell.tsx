import { styled } from "@mui/material/styles";
import { alpha, darken, lighten } from "@mui/system";
import { FC, ReactNode } from "react";

interface CalendarCellProps {
  children: ReactNode;
  className?: string;
}

const Root = styled("div")(({ theme }) => {
  const borderDef = `1px solid ${
    theme.palette.mode === "light"
      ? lighten(alpha(theme.palette.divider, 1), 0.88)
      : darken(alpha(theme.palette.divider, 1), 0.68)
  }`;
  return {
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
        borderLeft: borderDef,
      },
    },
    "&.all-day-cell": {
      flexGrow: 1,
      "&:not(:first-of-type)": {
        borderLeft: borderDef,
      },
    },
  };
});

const CalendarCell: FC<CalendarCellProps> = ({ children, className }: CalendarCellProps) => {
  return (
    <Root className={className ? `calendar-cell ${className}` : "calendar-cell"}>
      <div>{children}</div>
    </Root>
  );
};

export default CalendarCell;
