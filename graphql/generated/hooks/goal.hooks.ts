/* Do not edit this file. It was generated programmatically. */

import { GoalCreationArgs, GoalUpdateArgs } from "@/graphql/generated/args/goal.args";
import { GoalFragment } from "@/graphql/generated/fragments/goal.fragment";
import {
  CREATE_GOAL,
  updateCacheAfterCreatingGoal,
  UPDATE_GOAL,
} from "@/graphql/generated/mutations/goal.mutations";
import {
  GoalData,
  goalDataReducer,
  initializeGoalData,
} from "@/graphql/generated/reducers/goal.reducer";
import { Payload, useHandleMutation } from "@/utils/data";
import { MutationHookOptions } from "@apollo/client";
import { Dispatch, useReducer } from "react";

type GoalCreationMutationHookOptions = MutationHookOptions<
  { createGoal: GoalFragment },
  GoalCreationArgs
>;

export const useCreateGoal = (options?: GoalCreationMutationHookOptions) => {
  return useHandleMutation<{ createGoal: GoalFragment }, GoalCreationArgs>(CREATE_GOAL, {
    ...updateCacheAfterCreatingGoal,
    ...(options ?? {}),
  });
};

type GoalUpdateMutationHookOptions = MutationHookOptions<
  { updateGoal: GoalFragment },
  GoalUpdateArgs
>;

export const useUpdateGoal = (options?: GoalUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateGoal: GoalFragment }, GoalUpdateArgs>(UPDATE_GOAL, options);
};

export const useGoalDataReducer = (data: GoalData): [GoalData, Dispatch<Payload<GoalData>>] => {
  const initialData = initializeGoalData(data);
  const [goalData, dispatchGoalData] = useReducer(goalDataReducer, initialData, initializeGoalData);
  return [goalData, dispatchGoalData];
};
