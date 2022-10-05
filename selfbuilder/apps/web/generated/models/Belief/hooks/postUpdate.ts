/* Edit this file to add a non-default post-save hook for the Belief type. */

import BeliefDocument from "@web/generated/interfaces/Belief";

export const postUpdate = async (belief: BeliefDocument, updatedFields: any) => {
  return belief;
};
