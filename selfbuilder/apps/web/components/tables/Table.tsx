import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDeviceData } from "@web/components/contexts/DeviceContext";
import Row, { RowProps } from "@web/components/tables/Row";
import { FragmentBase } from "@web/graphql/schema/types";
import { ArrayAction } from "@web/hooks/reduction";
import { Data, DataTuple } from "@web/types/data";
import { Dispatch, FC } from "react";

const PREFERRED_FONT_SIZE = "0.8rem";

export interface TableProps<FragmentType extends FragmentBase> {
  titleField: Extract<keyof Data<FragmentType>, string>; // e.g. "title"
  dataTuple: [FragmentType[], Dispatch<ArrayAction<FragmentType>>];
  newItemDataTuple: DataTuple<FragmentType>;
  appendable?: boolean;
  RowContent: FC<{ item: FragmentType }>;
  moveRow: RowProps<FragmentType>["move"];
  onDropRow: RowProps<FragmentType>["onDrop"];
  onSaveNewItem: () => void;
  addingNewItem: boolean;
  setAddingNewItem: (addingNewItem: boolean) => void;
  headers: { label: string; sx?: SxProps }[];
}

function DataTable<FragmentType extends FragmentBase>({
  titleField,
  dataTuple,
  newItemDataTuple,
  appendable,
  RowContent,
  onSaveNewItem,
  moveRow,
  onDropRow,
  addingNewItem,
  setAddingNewItem,
  headers,
}: TableProps<FragmentType>) {
  const [items, _dispatchItems] = dataTuple;

  const [newItemData, dispatchNewItemData] = newItemDataTuple;
  const { width } = useDeviceData();

  const isMobileWidth = width === "xs";
  const nTotalColumns = isMobileWidth ? 3 : 5;
  return (
    <Table
      sx={{
        mt: 1,
        "& th": { px: "0.25rem", pb: "2px", fontSize: "0.75rem", lineHeight: "0.9rem" },
        "& td": { px: "0.25rem", fontSize: PREFERRED_FONT_SIZE },
      }}
      size="small"
    >
      <TableHead>
        <TableRow>
          {headers.map(({ label, sx }) => (
            <TableCell key={label} component={"th"} sx={sx}>
              {label}
            </TableCell>
          ))}
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item, index) => (
          <Row
            key={item.id}
            item={item}
            index={index}
            move={moveRow}
            onDrop={onDropRow}
            RowContent={RowContent}
          />
        ))}
        {appendable &&
          (addingNewItem ? (
            <NewRow
              titleField={titleField}
              dataTuple={[newItemData, dispatchNewItemData]}
              onSave={onSaveNewItem}
              setAddingNew={setAddingNewItem}
            />
          ) : (
            <TableRow>
              <TableCell colSpan={nTotalColumns}>
                <Button
                  variant="text"
                  onClick={() => setAddingNewItem(true)}
                  sx={{
                    textTransform: "none",
                    fontStyle: "italic",
                    py: "0.25rem",
                    pl: "3rem", // TODO: match checkbox width.
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                  }}
                >
                  {items.length ? "Add another item..." : "Add an item..."}
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default DataTable;

interface NewRowProps<FragmentType extends FragmentBase> {
  titleField: Extract<keyof Data<FragmentType>, string>;
  dataTuple: DataTuple<FragmentType>;
  setAddingNew: Dispatch<boolean>;
  onSave: () => void;
}

function NewRow<FragmentType extends FragmentBase>({
  titleField,
  dataTuple,
  onSave,
  setAddingNew,
}: NewRowProps<FragmentType>) {
  const [newData] = dataTuple;
  const { isMobileWidth } = useDeviceData();
  const nTotalColumns = isMobileWidth ? 3 : 5;
  const handleCreate = () => onSave();
  return (
    <>
      <TableRow onBlur={() => (newData[titleField] ? null : setAddingNew(false))}>
        <TableCell />
        <TableCell colSpan={nTotalColumns - 2} />
      </TableRow>
      <TableRow>
        <TableCell colSpan={nTotalColumns}>
          <Box width="100%" display="flex">
            <Button sx={{ ml: "auto" }} onClick={() => setAddingNew(false)}>
              {"Cancel"}
            </Button>
            <Button onClick={handleCreate}>{"Save"}</Button>
          </Box>
        </TableCell>
        {/* <TableCell /> */}
      </TableRow>
    </>
  );
}
