/* Edit this file to add a non-default post-save hook for the Habit type. */

import { Habit } from "@web/generated/interfaces/Habit";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (habit: Habit) => {
  return _postCreate(habit);
};
