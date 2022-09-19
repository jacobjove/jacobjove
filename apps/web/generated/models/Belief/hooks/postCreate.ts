/* Edit this file to add a non-default post-save hook for the Belief type. */

import { Belief } from "@web/generated/interfaces/Belief";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (belief: Belief) => {
  return _postCreate(belief);
};
