/* Edit this file to add a non-default post-save hook for the Belief type. */

import { DocumentType } from "@typegoose/typegoose";
import Belief from "@web/graphql/generated/types/Belief";
import { postSave as _postSave } from "@web/graphql/schema/helpers";

export const postSave = async (user: DocumentType<Belief>) => {
  return _postSave(user);
};
