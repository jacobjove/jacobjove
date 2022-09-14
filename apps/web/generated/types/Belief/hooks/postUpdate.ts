/* Edit this file to add a non-default post-save hook for the Belief type. */

import { DocumentType } from "@typegoose/typegoose";
import Belief from "@web/generated/types/Belief";

export const postUpdate = async (belief: DocumentType<Belief>) => {
  return belief;
};
