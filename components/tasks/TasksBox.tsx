import ActionBox, { ActionBoxProps } from "@/components/actions/ActionBox";
import RoutineChip from "@/components/routines/RoutineChip";
import { routineFragment, userActionFragment } from "@/graphql/fragments";
import { Routine, UserAction } from "@/graphql/schema";
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
  }
  ${userActionFragment}
  ${routineFragment}
`;

type TasksBoxProps = Omit<ActionBoxProps, "userActions"> & {
  data: {
    routines: Routine[];
    userActions: UserAction[];
  };
};

const TasksBox: FC<TasksBoxProps> = (props: TasksBoxProps) => {
  const { data, ...rest } = props;
  const { routines, userActions } = data;
  return (
    <div>
      <div>
        {routines.map((routine: Routine) => (
          <RoutineChip key={routine.id} routine={routine} />
        ))}
      </div>
      <ActionBox userActions={userActions} {...rest} />
    </div>
  );
};

export default TasksBox;
