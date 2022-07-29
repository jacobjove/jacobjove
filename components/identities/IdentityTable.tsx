import Onboarder from "@/components/Onboarder";
import { Identity } from "@/graphql/schema";
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

interface IdentityTableProps {
  data: {
    identities: Identity[];
  };
}

const ONBOARDING_STEPS = [
  {
    label: "Select identities",
    description: `Select one or more identities.`,
  },
  {
    label: "Link actions to identities",
    description: "Add actions for your selected identities.",
  },
];

// TODO: https://mui.com/components/tables/#sorting-amp-selecting
const IdentityTable: FC<IdentityTableProps> = (props: IdentityTableProps) => {
  // console.log("IdentityTable", props);
  const {
    data: { identities },
  } = props;
  let content;
  if (!identities.length) {
    content = <Onboarder steps={ONBOARDING_STEPS} />;
  } else {
    content = (
      <TableContainer>
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
            {identities.map(
              (identity) =>
                !!identity && (
                  <TableRow
                    key={identity.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Link href={`/identities/${identity.slug}`}>
                        <a>{identity.name}</a>
                      </Link>
                    </TableCell>
                    <TableCell component="td">
                      <Box display="flex" alignItems="center">
                        <progress value="100" max="100" style={{ flexGrow: 1 }}></progress>
                      </Box>
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return (
    <div>
      {content}
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
    </div>
  );
};

export default IdentityTable;
