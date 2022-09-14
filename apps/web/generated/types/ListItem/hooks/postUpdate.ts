/* Edit this file to add a non-default post-save hook for the ListItem type. */

import { DocumentType } from "@typegoose/typegoose";
import ListItem from "@web/generated/types/ListItem";

export const postUpdate = async (listItem: DocumentType<ListItem>) => {
  return listItem;
};
