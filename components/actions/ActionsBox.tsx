import ActionChip from "@/components/actions/ActionChip";
import DateContext from "@/components/DateContext";
import { actionFragment } from "@/graphql/fragments";
import { Action, ActionCompletion } from "@/graphql/schema";
import { gql } from "@apollo/client";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { isSameDay, parseISO } from "date-fns";
import partition from "lodash/partition";
import Link from "next/link";
import { FC, useContext, useState } from "react";

export const fragment = gql`
  fragment ActionsBox on Query {
    actions(where: { userId: { equals: $userId } }) {
      ...ActionFragment
    }
  }
  ${actionFragment}
`;

interface ActionsBoxProps {
  data: {
    actions: Action[];
  };
}

const ActionsBox: FC<ActionsBoxProps> = (props: ActionsBoxProps) => {
  const { data } = props;
  const { actions: allActions } = data;
  const today = useContext(DateContext);
  const [completeActions, incompleteActions] = partition(allActions, (action) => {
    // console.log("ActionsBox", action.name, action.completions);
    return !!action.completions?.filter((actionCompletion: ActionCompletion) => {
      return isSameDay(parseISO(actionCompletion.date), today) && !actionCompletion.archivedAt;
    }).length;
  });
  // const [routines, actions] = partition(incompleteActions, (_) => Boolean(_.actions?.length));
  let content;
  if (allActions.length) {
    content = (
      <div>
        <div>
          {incompleteActions ? (
            incompleteActions.map((action) => <ActionChip key={action.id} action={action} />)
          ) : (
            <Typography>All done!</Typography>
          )}
        </div>
        {!!completeActions.length && (
          <div>
            <p>Completed:</p>
            {completeActions.map((action) => (
              <ActionChip key={action.id} action={action} />
            ))}
          </div>
        )}
      </div>
    );
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

export default ActionsBox;

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
