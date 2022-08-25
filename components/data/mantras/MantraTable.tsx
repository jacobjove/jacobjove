import Mantra from "@/graphql/generated/types/Mantra";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import { FC } from "react";

interface MantraTableProps {
  mantras: Mantra[];
}

// TODO: https://mui.com/components/tables/#sorting-amp-selecting
const MantraTable: FC<MantraTableProps> = (props: MantraTableProps) => {
  const { mantras } = props;
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="col">
              Mantra
            </TableCell>
            <TableCell component="th" scope="col">
              Health
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mantras.map((mantra) => (
            <TableRow
              key={mantra.content}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link href={`/mantras/${mantra.id}`}>
                  <a>{mantra.content}</a>
                </Link>
              </TableCell>
              <TableCell component="td">
                <Box display="flex" alignItems="center">
                  <progress value="100" max="100" style={{ flexGrow: 1 }}></progress>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MantraTable;
