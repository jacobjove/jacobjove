/* Edit this file to add a non-default post-save hook for the ListItem type. */

import ListItemDocument from "@web/generated/models/ListItem/document";

export const postUpdate = async (listItem: ListItemDocument, updatedFields: any) => {
  return listItem;
};
