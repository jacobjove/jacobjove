import { CSSProperties, FC } from "react";
import type { XYCoord } from "react-dnd";
import { useDragLayer } from "react-dnd";
import { TaskRowDragPreview } from "./data/tasks/TaskRow/TaskRowDragPreview";

const layerStyles: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

function getContainerStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null,
  { width, height }: { width?: number; height?: number }
) {
  if (!initialOffset || !currentOffset) {
    return { display: "none" };
  }
  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
    maxWidth: width ? `${width}px` : undefined,
    maxHeight: height ? `${height}px` : undefined,
    overflow: "hidden",
  };
}

export const CustomDragLayer: FC = () => {
  const {
    item: _item,
    itemType,
    isDragging,
    initialOffset,
    currentOffset,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));
  const { size, ...item } = _item ?? {};

  if (!isDragging) return null;

  const renderInnerComponent = () => {
    switch (itemType) {
      case "task":
        return <TaskRowDragPreview task={item} isDragging={isDragging} />;
      default:
        return null;
    }
  };

  return (
    <div style={layerStyles}>
      <div style={getContainerStyles(initialOffset, currentOffset, size)}>
        {renderInnerComponent()}
      </div>
    </div>
  );
};

export default CustomDragLayer;
