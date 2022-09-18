/* Edit this file to add a non-default post-save hook for the Goal type. */

import { Goal } from "@web/generated/interfaces/Goal";
import GoalModel from "@web/generated/models/Goal";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return GoalModel.create<Goal>({} as Goal);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (goal: Instance) => {
  return _postCreate(goal);
};
