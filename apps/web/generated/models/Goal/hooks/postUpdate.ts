/* Edit this file to add a non-default post-save hook for the Goal type. */

import GoalDocument from "@web/generated/models/Goal/document";

export const postUpdate = async (goal: GoalDocument, updatedFields: any) => {
  return goal;
};
