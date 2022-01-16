import HabitChip from "@/components/actions/HabitChip";
import TaskChip from "@/components/actions/TaskChip";
import DateContext from "@/components/DateContext";
import { habitFragment, taskFragment } from "@/graphql/fragments";
import { Action, Habit, Task } from "@/graphql/schema";
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
  fragment TasksBox on Query {
    habits(where: { userId: { equals: $userId } }) {
      ...HabitFragment
    }
    tasks(where: { userId: { equals: $userId } }) {
      ...TaskFragment
    }
  }
  ${habitFragment}
  ${taskFragment}
`;

interface TasksBoxProps {
  data: {
    habits: Habit[];
    tasks: Task[];
  };
}

const TasksBox: FC<TasksBoxProps> = (props: TasksBoxProps) => {
  const { data } = props;
  const { habits: allHabits, tasks: allTasks } = data;
  const today = useContext(DateContext);
  const [completeHabits, incompleteHabits] = partition(allHabits, (habit) => {
    // console.log("TasksBox", habit.name, habit.actions);
    return !!habit.actions?.filter((action: Action) => {
      return isSameDay(parseISO(action.start), today) && !action.archivedAt;
    }).length;
  });
  const [completeTasks, incompleteTasks] = partition(allTasks, (task) => {
    return !!task.completedAt;
  });
  // const [routines, habits] = partition(incompleteHabits, (_) => Boolean(_.habits?.length));
  let habitsContent, tasksContent;
  if (allHabits.length) {
    habitsContent = (
      <div>
        <div>
          {incompleteHabits ? (
            incompleteHabits.map((habit) => <HabitChip key={habit.id} habit={habit} />)
          ) : (
            <Typography>All done!</Typography>
          )}
        </div>
        {!!completeHabits.length && (
          <div>
            <p>Completed:</p>
            {completeHabits.map((habit) => (
              <HabitChip key={habit.id} habit={habit} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    habitsContent = <ActionsOnboarder />;
  }
  if (allTasks.length) {
    tasksContent = (
      <div>
        <div>
          {incompleteTasks ? (
            incompleteTasks.map((task) => <TaskChip key={task.id} task={task} />)
          ) : (
            <Typography>All done!</Typography>
          )}
        </div>
        {!!completeTasks.length && (
          <div>
            <p>Completed:</p>
            {completeTasks.map((task) => (
              <TaskChip key={task.id} task={task} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    tasksContent = null;
  }
  return (
    <div>
      {tasksContent}
      {habitsContent}
      <Link href="/habits" passHref>
        <IconButton component={"a"} color="info" style={{ marginLeft: 3 }} title="Explore habits">
          <SearchIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default TasksBox;

const steps = [
  {
    label: "Select habits",
    description: `Select one or more habits.`,
  },
  {
    label: "Add schedules",
    description: "Add schedules for your tracked habits.",
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
