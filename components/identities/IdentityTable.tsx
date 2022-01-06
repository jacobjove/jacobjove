import { Identity, UserIdentity as _UserIdentity } from "@/graphql/schema";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC, useState } from "react";

type UserIdentity = _UserIdentity & {
  identity: Identity;
};

interface IdentityTableProps {
  userIdentities: UserIdentity[];
}

// TODO: https://mui.com/components/tables/#sorting-amp-selecting
const IdentityTable: FC<IdentityTableProps> = (props: IdentityTableProps) => {
  console.log("IdentityTable", props);
  const { userIdentities } = props;
  let content;
  if (!userIdentities.length) {
    content = <IdentitiesOnboarder />;
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

const steps = [
  {
    label: "Select identities",
    description: `Select one or more identities.`,
  },
  {
    label: "Link actions to identities",
    description: "Add actions for your selected identities.",
  },
];

export const IdentitiesOnboarder: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box padding={"0.75rem"}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
