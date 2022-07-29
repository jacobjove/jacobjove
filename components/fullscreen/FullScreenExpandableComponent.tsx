import Box, { BoxProps } from "@mui/material/Box";
import { Dispatch, FC, ReactElement } from "react";
import { createPortal } from "react-dom";

interface FullScreenExpandableComponentProps extends BoxProps {
  children: ReactElement;
  fullScreenState: [boolean, Dispatch<boolean>];
}

const FullScreenExpandableComponent: FC<FullScreenExpandableComponentProps> = ({
  children,
  fullScreenState,
  ...props
}: FullScreenExpandableComponentProps) => {
  const [fullScreen] = fullScreenState;
  const renderedComponent = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
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
        ...props?.sx,
      }}
    >
      {children}
    </Box>
  );
  if (fullScreen) return createPortal(renderedComponent, document.body);
  return renderedComponent;
};

export default FullScreenExpandableComponent;
