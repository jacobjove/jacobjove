import Onboarder from "@/components/Onboarder";
import { UserValue as _UserValue, Value } from "@/graphql/schema";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
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
  data: {
    userValues: UserValue[];
  };
}

const ONBOARDING_STEPS = [
  {
    label: "Select values",
    description: `Select one or more values.`,
  },
  {
    label: "Link actions to values",
    description: "Add actions for your selected values.",
  },
];

// TODO: https://mui.com/components/tables/#sorting-amp-selecting
const ValueTable: FC<ValueTableProps> = (props: ValueTableProps) => {
  const {
    data: { userValues },
  } = props;
  let content;
  if (!userValues.length) {
    content = <Onboarder steps={ONBOARDING_STEPS} />;
  } else {
    content = (
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
  }
  return (
    <div>
      {content}

      <Box textAlign="center" marginTop="1rem">
        <Link href="/values" passHref>
          <IconButton component={"a"} color="info" style={{ marginLeft: 3 }} title="Explore values">
            <SearchIcon />
          </IconButton>
        </Link>
      </Box>
    </div>
  );
};

export default ValueTable;
