import AddIcon from "@mui/icons-material/Add";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FC, ReactNode, SyntheticEvent, useState } from "react";
import { createPortal } from "react-dom";

export interface DataBoxProps {
  title: string;
  displayTitle?: boolean;
  onClickAddItem?: (event: SyntheticEvent) => void;
  children: ReactNode;
}

const DataBox: FC<DataBoxProps> = (props: DataBoxProps) => {
  const { title, displayTitle: _displayTitle, onClickAddItem, children } = props;
  const [fullScreen, setFullScreen] = useState(false);
  const displayTitle = fullScreen || (_displayTitle ?? true);
  const renderedComponent = (
    <Box
      whiteSpace="normal"
      height={"100%"}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: "100%",
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
        ...(fullScreen
          ? {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: (theme) => theme.palette.background.default,
              padding: "0.5rem",
              zIndex: 1e14,
            }
          : {}),
      }}
    >
      <Toolbar
        disableGutters
        style={{ minHeight: "2rem" }}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pr: "2rem",
        }}
      >
        {displayTitle && (
          <Typography
            component="h2"
            variant="h4"
            sx={{
              mx: 1,
              mt: 1,
              fontSize: "1rem",
              fontWeight: "bold",
              color: (theme) =>
                theme.palette.mode === "light" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
              textTransform: "uppercase",
            }}
          >
            {title}
          </Typography>
        )}
        <Box ml={"auto"}>
          {onClickAddItem && (
            <IconButton onClick={onClickAddItem}>
              <AddIcon />
            </IconButton>
          )}
        </Box>
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
          <IconButton
            title={!fullScreen ? `Expand to full screen` : `Exit full screen`}
            onClick={() => setFullScreen(!fullScreen)}
          >
            {!fullScreen ? <ZoomOutMapIcon /> : <CloseFullscreenIcon />}
          </IconButton>
        </Box>
      </Toolbar>
      {children}
    </Box>
  );
  if (fullScreen) return createPortal(renderedComponent, document.body);
  return renderedComponent;
};

export default DataBox;
