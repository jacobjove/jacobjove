import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Action, Schedule } from "@/prisma/generated";
import { FC } from "react";
import Link from "next/link";

interface ActionTableProps {
  actions: (Schedule & {
    action: Action;
  })[];
}

const ActionTable: FC<ActionTableProps> = (props: ActionTableProps) => {
  const { actions } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Action</TableCell>
            <TableCell align="right">Frequency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {actions.map((schedule) => (
            <TableRow
              key={schedule.action.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link href={`/actions/${schedule.action.slug}`}>
                  <a>{schedule.action.name}</a>
                </Link>
              </TableCell>
              <TableCell align="right">every {schedule.frequency.toLowerCase()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ActionTable;
