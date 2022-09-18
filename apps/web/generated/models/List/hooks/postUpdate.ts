/* Edit this file to add a non-default post-save hook for the List type. */

import ListDocument from "@web/generated/models/List/document";

export const postUpdate = async (list: ListDocument, updatedFields: any) => {
  return list;
};
