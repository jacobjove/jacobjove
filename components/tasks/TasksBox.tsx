import ActionBox, { ActionBoxProps } from "@/components/actions/ActionBox";
import RoutineChip from "@/components/routines/RoutineChip";
import { actionCompletionFragment, routineFragment, userActionFragment } from "@/graphql/fragments";
import { ActionCompletion, Routine, UserAction } from "@/graphql/schema";
import { gql } from "@apollo/client";
import { FC } from "react";

export const fragment = gql`
  fragment TasksBox on Query {
    routines(where: { userId: { equals: $userId } }) {
      ...RoutineFragment
    }
    userActions(where: { userId: { equals: $userId } }) {
      ...UserActionFragment
    }
    actionCompletions(where: { userId: { equals: $userId } }) {
      ...ActionCompletionFragment
    }
  }
  ${userActionFragment}
  ${routineFragment}
  ${actionCompletionFragment}
`;

type TasksBoxProps = Omit<ActionBoxProps, "userActions" | "actionCompletions"> & {
  data: {
    routines: Routine[];
    userActions: UserAction[];
    actionCompletions: ActionCompletion[];
  };
};

const TasksBox: FC<TasksBoxProps> = (props: TasksBoxProps) => {
  const { data, ...rest } = props;
  const { routines, userActions, actionCompletions } = data;
  return (
    <div>
      <div>
        {routines.map((routine: Routine) => (
          <RoutineChip key={routine.id} routine={routine} />
        ))}
      </div>
      <ActionBox userActions={userActions} actionCompletions={actionCompletions} {...rest} />
    </div>
  );
};

export default TasksBox;
