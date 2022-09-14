/* Edit this file to add a non-default post-save hook for the Identity type. */

import { DocumentType } from "@typegoose/typegoose";
import Identity from "@web/generated/types/Identity";

export const postUpdate = async (identity: DocumentType<Identity>) => {
  return identity;
};
