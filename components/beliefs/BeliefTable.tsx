import { Belief, UserBelief as _UserBelief } from "@/graphql/schema";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import { FC } from "react";

type UserBelief = _UserBelief & {
  belief: Belief;
};

interface BeliefTableProps {
  userBeliefs: UserBelief[];
}

// TODO: https://mui.com/components/tables/#sorting-amp-selecting
const BeliefTable: FC<BeliefTableProps> = (props: BeliefTableProps) => {
  const { userBeliefs } = props;
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
          {userBeliefs.map((userBelief: UserBelief) => (
            <TableRow
              key={userBelief.belief.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link href={`/identities/${userBelief.belief.slug}`}>
                  <a>{userBelief.belief.name}</a>
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

export default BeliefTable;
