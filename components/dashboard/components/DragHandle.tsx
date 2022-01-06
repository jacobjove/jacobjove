import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { styled } from "@mui/material/styles";
import { FC } from "react";

interface DragHandleProps {
  className?: string;
}

const DragHandle: FC<DragHandleProps> = styled((props: DragHandleProps) => {
  return <DragIndicatorIcon {...props} />;
})(() => ({
  color: "gray",
  fontSize: "1.25rem",
  padding: "0.25rem",
  "&:hover": { cursor: "grab" },
}));

export default DragHandle;
