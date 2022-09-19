import { TaskFragment } from "@web/graphql/generated/fragments/task.fragment";
import { XYCoord } from "dnd-core";
import { FC, useEffect, useRef, useState } from "react";
import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import TaskRow, { TaskRowProps } from "./TaskRow";

export interface DraggableTaskRowProps
  extends Pick<TaskRowProps, "task" | "collapsed" | "asSubtask"> {
  index: number;
  move?: (draggedTask: DraggedTask, hoveredTask: TaskFragment) => Partial<DraggedTask> | null;
  onDrop?: (dropIndex: number) => void;
}

export interface DraggedTask extends TaskFragment {
  type: "task";
  index: number;
  size: { width?: number; height?: number };
}

const DraggableTaskRow: FC<DraggableTaskRowProps> = ({
  task,
  index,
  onDrop,
  move,
}: DraggableTaskRowProps) => {
  const dndRef = useRef<HTMLTableRowElement>(null);
  const loadingRef = useRef(false);
  const editingRef = useRef(false);

  const [size, setSize] = useState<{ width?: number; height?: number }>({});

  useEffect(() => {
    if (size.width && size.height) return;
    if (dndRef.current?.offsetWidth && dndRef.current?.offsetHeight) {
      setSize({
        width: dndRef.current.offsetWidth,
        height: dndRef.current.offsetHeight,
      });
    }
  }, [size, setSize]);

  const [{ isDragging }, dragRef, dragPreview] = useDrag<
    DraggedTask,
    unknown,
    { isDragging: boolean }
  >(() => {
    return {
      type: "task",
      item: {
        type: "task",
        ...task,
        index,
        size,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: () => !(editingRef.current || loadingRef.current || task.parentId != null),
    };
  }, [task, index, size]);

  // Hide the default drag preview.
  useEffect(() => {
    dragPreview(getEmptyImage(), { captureDraggingState: true });
  }, [dragPreview]);

  const [, dropRef] = useDrop(
    () => ({
      accept: ["task"],
      canDrop: (draggedTask: DraggedTask) =>
        // prevent moving between complete/incomplete
        !loadingRef.current && !(draggedTask.completedAt ? !task.completedAt : task.completedAt),
      drop: (draggedTask: DraggedTask) => {
        onDrop?.(draggedTask.index);
      },
      hover(draggedItem, monitor: DropTargetMonitor) {
        if (draggedItem.type !== "task" || !dndRef.current || !move || !monitor.canDrop()) return;
        const draggedTask = draggedItem as DraggedTask;
        const dragIndex = draggedTask.index;
        const hoverIndex = index;

        // Don't replace items with themselves.
        if (dragIndex === hoverIndex) return;

        // Determine rectangle on screen
        const hoverBoundingRect = dndRef.current?.getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height.
        // When dragging downwards, only move when the cursor is below 50%.
        // When dragging upwards, only move when the cursor is above 50%.

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

        // Time to actually perform the action.
        const updatedTaskFields = move(draggedTask, task);

        if (updatedTaskFields != null) {
          // Note: we're mutating the monitor item here!
          // Generally it's better to avoid mutations,
          // but it's good here for the sake of performance
          // to avoid expensive index searches.
          Object.assign(draggedTask, updatedTaskFields);
          draggedTask.index = index;
        }
      },
    }),
    [move, task, index]
  );

  dragRef(dropRef(dndRef));

  return (
    <TaskRow
      task={task}
      dndRef={dndRef}
      isDragging={isDragging}
      onLoading={(isLoading) => {
        loadingRef.current = isLoading;
      }}
      onEditing={(isEditing) => {
        editingRef.current = isEditing;
      }}
    />
  );
};

export default DraggableTaskRow;
