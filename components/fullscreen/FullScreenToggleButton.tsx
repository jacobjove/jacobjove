import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import { Dispatch, FC } from "react";

interface FullScreenToggleButtonProps {
  fullScreenState: [boolean, Dispatch<boolean>];
}

const FullScreenToggleButton: FC<FullScreenToggleButtonProps> = ({
  fullScreenState,
}: FullScreenToggleButtonProps) => {
  const [fullScreen, setFullScreen] = fullScreenState;
  return (
    <IconButton
      title={!fullScreen ? `Expand to full screen` : `Exit full screen`}
      onClick={() => setFullScreen(!fullScreen)}
    >
      {!fullScreen ? <ZoomOutMapIcon /> : <CloseFullscreenIcon />}
    </IconButton>
  );
};

export default FullScreenToggleButton;
