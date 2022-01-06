import { ViewerProps } from "@/components/calendar/views/props";
import DateContext from "@/components/DateContext";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { addDays, getDay, getWeeksInMonth } from "date-fns";
import { FC, useContext } from "react";

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const Root = styled("div")(({ theme }) => ({
  "& table": {
    fontSize: "0.875rem",
    width: "100%",
    borderCollapse: "collapse",
  },
  "& th": {
    width: `${100 / 7}%`,
  },
  "& td": {
    position: "relative",
    height: "9vh", // TODO
    "& > div": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "start",
      justifyContent: "center",
      "&.past": {
        backgroundColor: grey[50],
        opacity: 0.6,
      },
    },
    border: "1px solid rgba(224, 224, 224, 1)",
    "&:first-of-type": {
      borderLeft: "none",
    },
    "&:last-of-type": {
      borderRight: "none",
    },
    "&:hover": {
      backgroundColor: theme.palette.grey[50],
    },
  },
}));

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MonthViewer: FC<ViewerProps> = (props: ViewerProps) => {
  const date = useContext(DateContext);
  const { selectedDate, hidden, data, session } = props;
  const { calendarEvents } = data;
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstDayIndex = getDay(firstDayOfMonth);
  // console.log(calendarEvents);
  if (!session) return null;
  return (
    <Root className={`${hidden ? "hidden" : ""}`}>
      <table>
        <thead>
          <tr>
            {DAYS_OF_WEEK.map((day) => (
              <th key={day}>
                <Typography fontSize="0.9rem">{day}</Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(getWeeksInMonth(selectedDate))].map((_, i) => {
            return (
              <tr key={i}>
                {[...Array(7)].map((_, j) => {
                  const monthDay = i * 7 + j + 1 - firstDayIndex;
                  return (
                    <td key={j}>
                      <MonthDay date={addDays(firstDayOfMonth, monthDay - 1)} />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Root>
  );
};

export default MonthViewer;

interface MonthDayProps {
  date: Date;
}

const MonthDay: FC<MonthDayProps> = (props: MonthDayProps) => {
  const { date } = props;
  return (
    <div>
      <Typography component={"div"} fontSize={"0.75rem"} marginTop="0.2rem">
        {date.getDate()}
      </Typography>
    </div>
  );
};
