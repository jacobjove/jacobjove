import { styled } from "@mui/material/styles";
import { FragmentBase } from "@web/graphql/schema/types";
import { FC, memo } from "react";

import Row, { RowProps } from "./Row";

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

interface RowDragPreviewProps<FragmentType extends FragmentBase = FragmentBase> {
  item: FragmentType;
  RowContent: FC<{ item: FragmentType }>;
}

export const RowDragPreview: FC<RowDragPreviewProps> = memo(function RowDragPreview({
  item,
  RowContent,
}: RowDragPreviewProps) {
  return (
    <Root>
      <tbody>
        <Row item={item} RowContent={RowContent} />
      </tbody>
    </Root>
  );
},
itemRowPropsAreEqual);

function itemRowPropsAreEqual(prev: RowProps, next: RowProps) {
  return prev.item.id === next.item.id;
}
