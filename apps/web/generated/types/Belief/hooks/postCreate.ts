/* Edit this file to add a non-default post-save hook for the Belief type. */

import { DocumentType } from "@typegoose/typegoose";
import Belief from "@web/generated/types/Belief";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (user: DocumentType<Belief>) => {
  return _postCreate(user);
};
