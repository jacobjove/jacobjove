import ActionChip from "@/components/actions/ActionChip";
import { UserAction as _UserAction, UserActionSchedule } from "@/graphql/schema";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC, useState } from "react";

type UserAction = _UserAction & {
  schedules: UserActionSchedule[];
};

export interface ActionBoxProps {
  userActions: UserAction[];
}

const ActionBox: FC<ActionBoxProps> = (props: ActionBoxProps) => {
  const { userActions } = props;
  let content;
  if (userActions.length) {
    content = userActions.map((userAction: UserAction) => (
      <ActionChip key={userAction.action.name} userAction={userAction} />
    ));
  } else {
    content = <ActionsOnboarder />;
  }
  return (
    <div>
      {content}
      <Link href="/actions" passHref>
        <IconButton component={"a"} color="info" style={{ marginLeft: 3 }} title="Explore actions">
          <SearchIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default ActionBox;

const steps = [
  {
    label: "Select actions",
    description: `Select one or more actions.`,
  },
  {
    label: "Add schedules",
    description: "Add schedules for your tracked actions.",
  },
];

export const ActionsOnboarder: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box sx={{ p: 3 }}>
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
