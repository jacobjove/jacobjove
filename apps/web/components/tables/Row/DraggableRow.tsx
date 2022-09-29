import { FragmentBase } from "@web/graphql/schema/types";
import { XYCoord } from "dnd-core";
import { useEffect, useRef, useState } from "react";
import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import Row, { RowProps } from "./Row";

export interface DraggableRowProps<FragmentType extends FragmentBase>
  extends Pick<RowProps<FragmentType>, "item" | "collapsed" | "asSubitem" | "RowContent"> {
  index: number;
  move?: (
    draggedItem: Dragged<FragmentType>,
    hoveredItem: FragmentType
  ) => Partial<Dragged<FragmentType>> | null;
  canDrag?: (item: FragmentType) => boolean;
  canDrop?: (draggedItem: Dragged<FragmentType>, thisItem: FragmentType) => boolean;
  onDrop?: (dropIndex: number) => void;
}

export type Dragged<FragmentType extends FragmentBase> = FragmentType & {
  type: string;
  index: number;
  size: { width?: number; height?: number };
};

function DraggableRow<FragmentType extends FragmentBase>({
  item,
  index,
  move,
  canDrag,
  canDrop,
  onDrop,
  RowContent,
}: DraggableRowProps<FragmentType>) {
  const dndRef = useRef<HTMLTableRowElement>(null);
  const loadingRef = useRef(false);
  const editingRef = useRef(false);

  const [size, setSize] = useState<{ width?: number; height?: number }>({});

  const type = item.__typename;

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
    Dragged<FragmentType>,
    unknown,
    { isDragging: boolean }
  >(() => {
    return {
      type,
      item: {
        type,
        ...item,
        index,
        size,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: () => canDrag?.(item) ?? true,
    };
  }, [item, index, size]);

  // Hide the default drag preview.
  useEffect(() => {
    dragPreview(getEmptyImage(), { captureDraggingState: true });
  }, [dragPreview]);

  const [, dropRef] = useDrop(
    () => ({
      accept: ["task"],
      canDrop: (draggedItem: Dragged<FragmentType>) => canDrop?.(draggedItem, item) ?? true,
      drop: (draggedItem: Dragged<FragmentType>) => {
        onDrop?.(draggedItem.index);
      },
      hover(draggedItem, monitor: DropTargetMonitor) {
        if (draggedItem.type !== "task" || !dndRef.current || !move || !monitor.canDrop()) return;
        const dragged = draggedItem as Dragged<FragmentType>;
        const dragIndex = dragged.index;
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
        const updatedFields = move(dragged, item);

        if (updatedFields != null) {
          // Note: we're mutating the monitor item here!
          // Generally it's better to avoid mutations,
          // but it's good here for the sake of performance
          // to avoid expensive index searches.
          Object.assign(dragged, updatedFields);
          dragged.index = index;
        }
      },
    }),
    [move, item, index]
  );

  dragRef(dropRef(dndRef));

  return (
    <Row
      item={item}
      dndRef={dndRef}
      isDragging={isDragging}
      onLoading={(isLoading) => {
        loadingRef.current = isLoading;
      }}
      onEditing={(isEditing) => {
        editingRef.current = isEditing;
      }}
      RowContent={RowContent}
    />
  );
}

export default DraggableRow;
