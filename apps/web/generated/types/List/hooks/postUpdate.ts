/* Edit this file to add a non-default post-save hook for the List type. */

import { DocumentType } from "@typegoose/typegoose";
import List from "@web/generated/types/List";

export const postUpdate = async (list: DocumentType<List>) => {
  return list;
};
