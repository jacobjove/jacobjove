import { HALF_HOUR_HEIGHT, TIME_LABEL_COLUMN_WIDTH } from "@/components/calendar/constants";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { alpha, darken, lighten } from "@mui/system";
import { FC } from "react";

interface TimeLabelProps {
  minutes: number;
}

const TimeLabelBox: FC<TimeLabelProps> = ({ minutes }) => {
  return (
    <Typography
      className="time-label"
      sx={{
        height: `${HALF_HOUR_HEIGHT}px`,
        "&:first-of-type": {
          visibility: "hidden",
        },
        color: (theme) => theme.palette.primary.contrastText,
      }}
    >
      {convertMinutesToTimeString(minutes)}
    </Typography>
  );
};

const Root = styled("div")(({ theme }) => ({
  position: "relative",
  top: "1px", // TODO: remove this hack
  display: "flex",
  width: TIME_LABEL_COLUMN_WIDTH,
  "& .border-trick-box": {
    height: `${HALF_HOUR_HEIGHT}px`,
    "&:not(:last-of-type)": {
      borderBottom: `1px solid ${
        theme.palette.mode === "light"
          ? lighten(alpha(theme.palette.divider, 1), 0.88)
          : darken(alpha(theme.palette.divider, 1), 0.68)
      }`,
    },
  },
}));

const TimeLabelsColumn: FC = () => {
  return (
    <Root>
      <Box
        sx={{
          position: "relative",
          top: `-${HALF_HOUR_HEIGHT / 2}px`,
        }}
      >
        {[...Array(24 * 2)].map((_, i) => {
          return <TimeLabelBox key={i} minutes={i * 30} />;
        })}
      </Box>
      <div>
        {[...Array(24 * 2)].map((_, i) => (
          <div key={i} className="border-trick-box" />
        ))}
      </div>
    </Root>
  );
};

export default TimeLabelsColumn;

const convertMinutesToTimeString = (minutes: number) => {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const suffix = hour >= 12 ? "PM" : "AM";
  return `${((hour + 11) % 12) + 1}:${minute.toString().padStart(2, "0")} ${suffix}`;
};
