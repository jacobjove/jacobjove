import { Identity, UserIdentity as _UserIdentity } from "@/graphql/schema";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";

type UserIdentity = _UserIdentity & {
  identity: Identity;
};

interface IdentityTableProps {
  userIdentities: UserIdentity[];
}

// TODO: https://mui.com/components/tables/#sorting-amp-selecting
const IdentityTable: FC<IdentityTableProps> = (props: IdentityTableProps) => {
  const { userIdentities } = props;
  return (
    <TableContainer>
      {(!userIdentities.length && <IdentityTable userIdentities={userIdentities} />) || (
        <Typography component="p" textAlign="center">
          No identities yet.
        </Typography>
      )}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="col">
              <Typography fontWeight="normal" fontSize="0.7rem">
                Identity
              </Typography>
            </TableCell>
            <TableCell component="th" scope="col">
              <Typography fontWeight="normal" fontSize="0.7rem">
                Health
              </Typography>
            </TableCell>
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
              <TableCell component="td">
                <Box display="flex" alignItems="center">
                  <progress value="100" max="100" style={{ flexGrow: 1 }}></progress>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box textAlign="center" marginTop="1rem">
        <Link href="/identities" passHref>
          <IconButton
            component={"a"}
            color="info"
            style={{ marginLeft: 3 }}
            title="Explore identities"
          >
            <SearchIcon />
          </IconButton>
        </Link>
      </Box>
    </TableContainer>
  );
};

export default IdentityTable;
