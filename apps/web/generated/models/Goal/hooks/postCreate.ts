/* Edit this file to add a non-default post-save hook for the Goal type. */

import { Goal } from "@web/generated/interfaces/Goal";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (goal: Goal) => {
  return _postCreate(goal);
};
