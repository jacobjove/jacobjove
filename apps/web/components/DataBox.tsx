import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FC, MouseEvent, ReactNode } from "react";

export interface DataBoxProps {
  title: string;
  displayTitle?: boolean;
  includeAddButton?: boolean;
  onClickAddItem?: (event: MouseEvent<unknown>) => void;
  children: ReactNode;
}

const DataBox: FC<DataBoxProps> = (props: DataBoxProps) => {
  const { title, displayTitle: _displayTitle, onClickAddItem, children } = props;
  const displayTitle = false;
  const includeToolbar = false;

  return (
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
      }}
    >
      {includeToolbar && (
        <Toolbar>
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
        </Toolbar>
      )}
      {children}
    </Box>
  );
};

export default DataBox;
