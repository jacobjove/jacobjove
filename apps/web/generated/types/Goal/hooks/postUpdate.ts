/* Edit this file to add a non-default post-save hook for the Goal type. */

import { DocumentType } from "@typegoose/typegoose";
import Goal from "@web/generated/types/Goal";

export const postUpdate = async (goal: DocumentType<Goal>) => {
  return goal;
};
