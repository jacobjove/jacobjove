import { styled } from "@mui/material/styles";
import { FC, memo } from "react";

import TaskRow, { TaskRowProps } from "./TaskRow";

const Root = styled("table", { shouldForwardProp: () => true })(({ theme }) => {
  const bgOpacity = 0.1;
  const dividerColor = theme.palette.divider;
  return {
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    maxHeight: "100%",
    borderTop: `1px solid ${dividerColor}`,
    borderBottom: `1px solid ${dividerColor}`,
    backgroundColor:
      theme.palette.mode === "light"
        ? `rgba(0,0,0,${bgOpacity})`
        : `rgba(255,255,255,${bgOpacity})`,
  };
});

export const TaskRowDragPreview: FC<TaskRowProps> = memo(function TaskRowDragPreview({ task }) {
  return (
    <Root>
      <tbody>
        <TaskRow task={task} />
      </tbody>
    </Root>
  );
}, taskRowPropsAreEqual);

function taskRowPropsAreEqual(prev: TaskRowProps, next: TaskRowProps) {
  return prev.task.id === next.task.id;
}
