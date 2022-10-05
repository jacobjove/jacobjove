import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Onboarder from "@web/components/Onboarder";
import Value from "@web/generated/graphql/types/Value";
import Link from "next/link";
import { FC } from "react";

interface ValueTableProps {
  data: {
    values: Value[];
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
    data: { values },
  } = props;
  let content;
  if (!values.length) {
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
            {values.map((value) => (
              <TableRow key={value.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Link href={`/identities/`}>
                    <a>{value.name}</a>
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
