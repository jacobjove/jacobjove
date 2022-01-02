import { UserValue as _UserValue, Value } from "@/graphql/schema";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import { FC } from "react";

type UserValue = _UserValue & {
  value: Value;
};

interface ValueTableProps {
  userValues: UserValue[];
}

// TODO: https://mui.com/components/tables/#sorting-amp-selecting
const ValueTable: FC<ValueTableProps> = (props: ValueTableProps) => {
  const { userValues } = props;
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="col">
              Value
            </TableCell>
            <TableCell component="th" scope="col">
              Health
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userValues.map((userValue: UserValue) => (
            <TableRow
              key={userValue.value.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link href={`/identities/${userValue.value.slug}`}>
                  <a>{userValue.value.name}</a>
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

export default ValueTable;
