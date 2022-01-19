import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
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
  }, [running]);
  const hour = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const minute = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const second = ("0" + ((time / 10) % 100)).slice(-2);
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
      m={"1.5rem 0 0"}
      py={1}
    >
      <Typography>
        {hour}:{minute}:{second}
      </Typography>
      <Box>
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
      {!!time && (
        <Box>
          <Button variant="text" onClick={() => setTime(0)}>
            Reset
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Stopwatch;
