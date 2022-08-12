import { Belief } from "@/graphql/generated/models/belief.model";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FC } from "react";

interface BeliefTableProps {
  beliefs: Belief[];
}

// TODO: https://mui.com/components/tables/#sorting-amp-selecting
const BeliefTable: FC<BeliefTableProps> = (props: BeliefTableProps) => {
  const { beliefs } = props;
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="col">
              Belief
            </TableCell>
            <TableCell component="th" scope="col">
              Health
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {beliefs.map((belief: Belief) => (
            <TableRow key={belief.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {belief.name}
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

export default BeliefTable;
