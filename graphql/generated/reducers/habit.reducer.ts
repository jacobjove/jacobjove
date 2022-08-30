/* Do not edit this file. It was generated programmatically. */
// import Habit from "@/graphql/generated/types/Habit";
import { HabitFragment } from "@/graphql/generated/fragments/habit.fragment";
import { UserFragment } from "@/graphql/generated/fragments/user.fragment";
import { HabitCreationInput } from "@/graphql/generated/inputs/habit.inputs";
import { ID } from "@/graphql/schema/types";
import { ArrayAction, arrayReducer, Payload } from "@/utils/data/reduction";

export type HabitData = Partial<HabitCreationInput> & { id?: ID };
// export type HabitData = InputData<Habit>;
// export type InitialHabitData = InitialData<Habit, "rank" | "userId">;

export function initializeHabitData(
  data: Partial<HabitData>,
  user?: UserFragment | null | undefined
): Partial<HabitData> {
  if (!user) return data;
  return {
    userId: user.id,
    name: "",
    ...Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined)), // TODO: make this unnecessary
  };
}

export function habitReducer(state: HabitData, payload: Payload<HabitData>) {
  if (payload.field === "init") return initializeHabitData(payload.value as Partial<HabitData>);
  return { ...state, [payload.field]: payload.value };
}

export function habitsReducer(state: HabitFragment[], action: ArrayAction<HabitFragment>) {
  return arrayReducer<HabitFragment>(state, action);
}
