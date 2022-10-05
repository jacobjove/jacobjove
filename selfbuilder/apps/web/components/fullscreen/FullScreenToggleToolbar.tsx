import { Box } from "@mui/material";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";
import FullScreenToggleButton from "@web/components/fullscreen/FullScreenToggleButton";
import { Dispatch, FC } from "react";

interface FullScreenToggleToolbarProps extends ToolbarProps {
  fullScreenState: [boolean, Dispatch<boolean>];
}

const FullScreenToggleToolbar: FC<FullScreenToggleToolbarProps> = ({
  fullScreenState,
  children,
  ...props
}: FullScreenToggleToolbarProps) => {
  const [fullScreen, setFullScreen] = fullScreenState;
  return (
    <Toolbar
      disableGutters
      style={{ minHeight: "2.4rem" }}
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pr: "2rem",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
      {...props}
    >
      {children}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        position="absolute"
        right="0"
        top="0"
        height="100%"
        sx={{
          "& button svg": {
            fontSize: "1.25rem",
          },
        }}
      >
        <FullScreenToggleButton fullScreenState={[fullScreen, setFullScreen]} />
      </Box>
    </Toolbar>
  );
};

export default FullScreenToggleToolbar;
