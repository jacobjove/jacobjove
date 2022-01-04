import ActionBox, { ActionBoxProps } from "@/components/actions/ActionBox";
import { routineFragment, userActionFragment } from "@/graphql/fragments";
import { Routine, UserAction } from "@/graphql/schema";
import { gql } from "@apollo/client";
import { FC } from "react";

export const fragment = gql`
  fragment TaskBox on Query {
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

type TaskBoxProps = Omit<ActionBoxProps, "userActions"> & {
  data: {
    routines: Routine[];
    userActions: UserAction[];
  };
};

const TaskBox: FC<TaskBoxProps> = (props: TaskBoxProps) => {
  const { data, ...rest } = props;
  const { routines, userActions } = data;
  return (
    <div>
      <div>
        {routines.map((routine: Routine) => (
          <p key={routine.id}>{routine.name}</p>
        ))}
      </div>
      <ActionBox userActions={userActions} {...rest} />
    </div>
  );
};

export default TaskBox;
