/* Edit this file to add a non-default post-save hook for the Value type. */

import { DocumentType } from "@typegoose/typegoose";
import Value from "@web/generated/types/Value";

export const postUpdate = async (value: DocumentType<Value>) => {
  return value;
};
