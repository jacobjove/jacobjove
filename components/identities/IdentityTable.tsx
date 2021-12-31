import { Identity, UserIdentity as _UserIdentity } from "@/graphql/schema";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import { FC } from "react";

type UserIdentity = _UserIdentity & {
  identity: Identity;
};

interface IdentityTableProps {
  userIdentities: UserIdentity[];
}

const IdentityTable: FC<IdentityTableProps> = (props: IdentityTableProps) => {
  const { userIdentities } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Identity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userIdentities.map((userIdentity: UserIdentity) => (
            <TableRow
              key={userIdentity.identity.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link href={`/identities/${userIdentity.identity.slug}`}>
                  <a>{userIdentity.identity.name}</a>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IdentityTable;
