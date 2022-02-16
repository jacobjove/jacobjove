import { Calendar } from "@/graphql/schema";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Dispatch, FC } from "react";

const CalendarInclusionCheckbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  const { checked, disabled, onChange } = props;
  return <Checkbox checked={checked} disabled={disabled} onChange={onChange} sx={{ p: 0 }} />;
};

interface CalendarLegendProps {
  calendars: Calendar[];
  selectedCalendarIds: number[];
  dispatchCalendarIds: Dispatch<{ type: "add" | "remove"; value: number[] }>;
}

export const CalendarLegendItems: FC<CalendarLegendProps> = ({
  calendars,
  selectedCalendarIds,
  dispatchCalendarIds,
}: CalendarLegendProps) => {
  return (
    <>
      {calendars.map((calendar) => (
        <MenuItem
          key={calendar.id}
          {...(calendar.name ? { title: calendar.name } : {})}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CalendarInclusionCheckbox
            checked={selectedCalendarIds?.includes(calendar.id)}
            onChange={(_, checked) => {
              dispatchCalendarIds({ type: checked ? "add" : "remove", value: [calendar.id] });
            }}
          />
          <Typography mx="1rem">{calendar.name}</Typography>
        </MenuItem>
      ))}
    </>
  );
};

const CalendarLegend: FC<CalendarLegendProps> = (props: CalendarLegendProps) => {
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
      <MenuList>
        <CalendarLegendItems {...props} />
      </MenuList>
    </Box>
  );
};

export default CalendarLegend;
