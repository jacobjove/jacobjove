/* Edit this file to add a non-default post-save hook for the Habit type. */

import HabitDocument from "@web/generated/interfaces/Habit";

export const postUpdate = async (habit: HabitDocument, updatedFields: any) => {
  return habit;
};
