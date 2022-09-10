import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction, useEffect } from "react";

interface StopwatchProps {
  time: number;
  setTime: Dispatch<number | SetStateAction<number>>;
  running: boolean;
  setRunning: (running: boolean) => void;
}

const Stopwatch = ({ time, setTime, running, setRunning }: StopwatchProps) => {
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (running) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (intervalId) {
      clearInterval(intervalId);
    }
    // Clean up when the component unmounts.
    return function cleanup() {
      if (intervalId) clearInterval(intervalId);
    };
  }, [running, setTime]);
  const hour = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const minute = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const second = ("0" + ((time / 10) % 100)).slice(-2);
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
      textAlign={"center"}
      m={"1.5rem 0 0"}
      py={1}
    >
      <Box
        border={"2px solid gray"}
        borderRadius={"50%"}
        p={"10%"}
        width={"250px"}
        height={"250px"}
      >
        <Box>
          <Typography bgcolor={"black"} color="whitesmoke" py={"3px"}>
            {hour}:{minute}:{second}
          </Typography>
          <Box my={2}>
            {!running ? (
              <IconButton onClick={() => setRunning(true)}>
                <PlayArrowIcon />
              </IconButton>
            ) : (
              <IconButton onClick={() => setRunning(false)}>
                <StopIcon />
              </IconButton>
            )}
          </Box>
          <Button
            variant="text"
            color="warning"
            disabled={!time || running}
            onClick={() => setTime(0)}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Stopwatch;
