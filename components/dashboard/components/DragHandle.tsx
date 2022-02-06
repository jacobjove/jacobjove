import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { FC, HTMLAttributes } from "react";

interface DragHandleProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

const DragHandle: FC<DragHandleProps> = (props: DragHandleProps) => {
  return (
    <span {...props}>
      <DragIndicatorIcon sx={{ "&:hover": { cursor: "grab" } }} />
    </span>
  );
};

export default DragHandle;
