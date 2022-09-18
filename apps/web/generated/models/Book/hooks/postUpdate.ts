/* Edit this file to add a non-default post-save hook for the Book type. */

import BookDocument from "@web/generated/models/Book/document";

export const postUpdate = async (book: BookDocument, updatedFields: any) => {
  return book;
};
