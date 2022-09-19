/* Do not edit this file. It was generated programmatically. */

import { MutationHookOptions } from "@apollo/client";
import { useUser } from "@web/components/contexts/UserContext";
import { HabitCreationArgs, HabitUpdateArgs } from "@web/generated/graphql/args/habit.args";
import { HabitFragment } from "@web/generated/graphql/fragments/habit.fragment";
import {
  CREATE_HABIT,
  getOptimisticResponseForHabitCreation,
  updateCacheAfterCreatingHabit,
  UPDATE_HABIT,
} from "@web/generated/graphql/mutations/habit.mutations";
import {
  habitCreationInputSchema,
  habitUpdateInputSchema,
} from "@web/generated/graphql/schemas/habit.schemas";
import {
  HabitData,
  habitReducer,
  habitsReducer,
  initializeHabitData,
} from "@web/generated/reducers/habit.reducer";
import { useHandleMutation } from "@web/utils/data/mutation";
import { ArrayAction, Payload } from "@web/utils/data/reduction";
import { Dispatch, useEffect, useReducer } from "react";

type HabitCreationMutationHookOptions = MutationHookOptions<
  { createHabit: HabitFragment },
  HabitCreationArgs
>;

export const useCreateHabit = (options?: HabitCreationMutationHookOptions) => {
  return useHandleMutation<{ createHabit: HabitFragment }, HabitCreationArgs>(
    CREATE_HABIT,
    { ...updateCacheAfterCreatingHabit, ...(options ?? {}) },
    habitCreationInputSchema,
    getOptimisticResponseForHabitCreation
  );
};

type HabitUpdateMutationHookOptions = MutationHookOptions<
  { updateHabit: HabitFragment },
  HabitUpdateArgs
>;

export const useUpdateHabit = (options?: HabitUpdateMutationHookOptions) => {
  return useHandleMutation<{ updateHabit: HabitFragment }, HabitUpdateArgs>(
    UPDATE_HABIT,
    { refetchQueries: ["GetUser"], ...(options ?? {}) },
    habitUpdateInputSchema
  );
};

export const useHabitReducer = (data?: HabitData): [HabitData, Dispatch<Payload<HabitData>>] => {
  const { user } = useUser();
  const [habitData, dispatchHabitData] = useReducer(habitReducer, data ?? {}, initializeHabitData);
  useEffect(() => {
    if (!user) return;
    if (!habitData?.userId) {
      dispatchHabitData({
        field: "init",
        value: initializeHabitData(habitData, user),
      });
    }
  }, [user, habitData]);
  return [habitData, dispatchHabitData];
};

export const useHabitsReducer = (
  data: HabitFragment[]
): [HabitFragment[], Dispatch<ArrayAction<HabitFragment>>] => {
  return useReducer(habitsReducer, data);
};
