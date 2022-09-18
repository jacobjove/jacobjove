/* Edit this file to add a non-default post-save hook for the Habit type. */

import { Habit } from "@web/generated/interfaces/Habit";
import HabitModel from "@web/generated/models/Habit";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return HabitModel.create<Habit>({} as Habit);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (habit: Instance) => {
  return _postCreate(habit);
};
