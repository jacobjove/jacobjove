import {
  BORDER_DEF,
  HALF_HOUR_HEIGHT,
  NUM_HOURS,
  START_HOUR,
  TIME_LABEL_COLUMN_WIDTH,
} from "@/components/calendar/constants";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { FC, Fragment } from "react";

interface TimeLabelProps {
  hour: number;
  minutes?: number;
}

const TimeLabelBox: FC<TimeLabelProps> = ({ hour, minutes }) => {
  return (
    <Box className="time-label" height={`${HALF_HOUR_HEIGHT}px`}>
      {convertHourAndMinutesToTimeString(hour, minutes)}
    </Box>
  );
};

const Root = styled("div")(() => ({
  position: "relative",
  top: "1px", // TODO: remove this hack
  display: "flex",
  width: TIME_LABEL_COLUMN_WIDTH,
  "& .border-trick-box": {
    height: `${HALF_HOUR_HEIGHT}px`,
    borderBottom: BORDER_DEF,
  },
}));

const TimeLabelsColumn: FC = () => {
  return (
    <Root>
      <div>
        {/* Note: This first div offsets the labels from the top. */}
        <div style={{ height: `${HALF_HOUR_HEIGHT / 2 + 1}px` }} />
        {[...Array(NUM_HOURS)].map((_, i) => (
          <Fragment key={i}>
            <TimeLabelBox hour={START_HOUR + i} />
            <TimeLabelBox hour={START_HOUR + i} minutes={30} />
          </Fragment>
        ))}
      </div>
      <div>
        {[...Array(NUM_HOURS)].map((_, i) => (
          <div key={i} className="border-trick-box" />
        ))}
      </div>
    </Root>
  );
};

export default TimeLabelsColumn;

const convertHourAndMinutesToTimeString = (hour: number, minutes = 0) => {
  const suffix = hour >= 12 ? "PM" : "AM";
  return `${((hour + 11) % 12) + 1}:${minutes.toString().padStart(2, "0")} ${suffix}`;
};
