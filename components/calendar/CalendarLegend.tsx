import { Calendar } from "@/graphql/schema";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { Dispatch, FC } from "react";

const CalendarInclusionCheckbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  const { checked, disabled, onChange } = props;
  return <Checkbox checked={checked} disabled={disabled} onChange={onChange} />;
};

interface CalendarLegendProps {
  calendars: Calendar[];
  selectedCalendarIds: number[];
  dispatchCalendarIds: Dispatch<{ type: "add" | "remove"; value: number[] }>;
}

const CalendarLegend: FC<CalendarLegendProps> = ({
  calendars,
  selectedCalendarIds,
  dispatchCalendarIds,
}: CalendarLegendProps) => {
  return (
    <Box
      sx={{
        height: "100%",
        m: "-0.2rem",
        p: "0.5rem",
        backgroundColor: (theme) => theme.palette.background.paper,
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: "2px",
      }}
    >
      {calendars.map((calendar) => (
        <Box key={calendar.id} display={"flex"} alignItems={"center"}>
          <CalendarInclusionCheckbox
            checked={selectedCalendarIds?.includes(calendar.id)}
            onChange={(_, checked) => {
              dispatchCalendarIds({ type: checked ? "add" : "remove", value: [calendar.id] });
            }}
          />
          <Typography
            component="div"
            fontWeight={"600"}
            fontSize={"0.75rem"}
            marginBottom="0.15rem"
            lineHeight={"0.7rem"}
            mx="0.1rem"
          >
            {calendar.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CalendarLegend;
