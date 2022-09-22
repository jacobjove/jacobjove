/* Edit this file to add a non-default post-save hook for the List type. */

import ListDocument from "@web/generated/interfaces/List";

export const postUpdate = async (list: ListDocument, updatedFields: any) => {
  return list;
};
