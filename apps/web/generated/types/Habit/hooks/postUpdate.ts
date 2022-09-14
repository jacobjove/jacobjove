/* Edit this file to add a non-default post-save hook for the Habit type. */

import { DocumentType } from "@typegoose/typegoose";
import Habit from "@web/generated/types/Habit";

export const postUpdate = async (habit: DocumentType<Habit>) => {
  return habit;
};
