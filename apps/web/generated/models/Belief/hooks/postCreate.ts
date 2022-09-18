/* Edit this file to add a non-default post-save hook for the Belief type. */

import { Belief } from "@web/generated/interfaces/Belief";
import BeliefModel from "@web/generated/models/Belief";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return BeliefModel.create<Belief>({} as Belief);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (belief: Instance) => {
  return _postCreate(belief);
};
