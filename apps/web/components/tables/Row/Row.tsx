import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useDeviceData } from "@web/components/contexts/DeviceContext";
import { FragmentBase } from "@web/graphql/schema/types";
import { FC, RefObject, useState } from "react";
import DraggableRow from "./DraggableRow";

interface BaseRowProps {
  asSubitem?: boolean;
  collapsed?: boolean;
  isDragging?: boolean;
}

export interface RowProps<FragmentType extends FragmentBase = FragmentBase> extends BaseRowProps {
  item: FragmentType;
  subitems?: FragmentType[];
  dndRef?: RefObject<HTMLTableRowElement>;
  onLoading?: (isLoading: boolean) => void;
  onEditing?: (isEditing: boolean) => void;
  RowContent: FC<{ item: FragmentType }>;
}

export function Row<FragmentType extends FragmentBase>({
  item,
  // asSubitem = false,
  subitems = [],
  collapsed = false,
  dndRef,
  isDragging = false,
  RowContent,
}: RowProps<FragmentType>) {
  const { isMobile } = useDeviceData();
  const [subitemsExpanded, _setSubitemsExpanded] = useState(isMobile ? false : false);
  return (
    <>
      <StyledTableRow
        isDragging={isDragging}
        isMobile={isMobile}
        hover={!isDragging}
        {...(dndRef ? { ref: dndRef } : {})}
      >
        <RowContent item={item} />
        <TableCell sx={{ "&:hover": { cursor: "grab" } }} className={`${isMobile ? "hidden" : ""}`}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              "&:hover": { cursor: "grab" },
            }}
          >
            <DragIndicatorIcon
              className="drag-handle"
              sx={{
                color: "gray",
                "&:hover": { cursor: "grab" },
              }}
            />
          </Box>
        </TableCell>
      </StyledTableRow>
      {!collapsed &&
        subitems?.map((subitem, index) => (
          <DraggableRow
            key={subitem.id}
            item={subitem}
            asSubitem={true}
            collapsed={!subitemsExpanded || isDragging}
            index={index}
            RowContent={RowContent}
          />
        ))}
    </>
  );
}

export default Row;

interface StyledTableRowProps extends Pick<BaseRowProps, "isDragging" | "collapsed" | "asSubitem"> {
  isMobile: boolean;
}

const StyledTableRow = styled(TableRow, {
  shouldForwardProp: (prop) =>
    !["isDragging", "collapsed", "asSubitem", "isMobile"].includes(prop.toString()),
})<StyledTableRowProps>(({ theme, isDragging, collapsed, asSubitem, isMobile }) => {
  const dividerColor = theme.palette.divider;
  const bgOpacity = isDragging ? "0.2" : "0.05";
  return {
    "& *": { ...(isDragging && { opacity: 0 }) },
    borderTop: isDragging ? `1px solid ${dividerColor}` : "initial",
    borderBottom: isDragging ? `2px solid ${dividerColor}` : "initial",
    cursor: isDragging ? "grabbing" : "pointer",
    // TODO: A CSS transition would be nice here...
    display: collapsed ? "none" : "table-row",
    backgroundColor: asSubitem
      ? theme.palette.mode === "light"
        ? `rgba(0,0,0,${bgOpacity})`
        : `rgba(255,255,255,${bgOpacity})`
      : "transparent",
    "& .drag-handle": { visibility: isMobile ? "visible" : "hidden" },
    "& .actions-menu-icon": { visibility: "hidden" },
    "&:hover": {
      "& .drag-handle": {
        visibility: "visible",
        color: "#666666",
      },
      "& .actions-menu-icon": { visibility: "visible" },
    },
    "& td, & th": {
      minWidth: "3.3rem",
      "&:last-of-type": {
        minWidth: "initial",
      },
    },
    "& td": {
      padding: "2px 0.25rem",
      "& svg": {
        fontSize: "1.33rem",
        color: "#808080",
        "&:hover": {
          color: theme.palette.mode === "light" ? "#666666" : "#ffffff",
        },
      },
      "& button:hover svg": {
        color: theme.palette.mode === "light" ? "#666666" : "#ffffff",
      },
    },
    "& th": {
      py: 0,
    },
    "&:last-child td, &:last-child th": { border: 0 },
  };
});
