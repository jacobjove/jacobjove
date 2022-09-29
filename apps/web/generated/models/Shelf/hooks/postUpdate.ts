/* Edit this file to add a non-default post-save hook for the Shelf type. */

import ShelfDocument from "@web/generated/interfaces/Shelf";

export const postUpdate = async (shelf: ShelfDocument, updatedFields: any) => {
  return shelf;
};
