/* Edit this file to add a non-default post-save hook for the Book type. */

import { DocumentType } from "@typegoose/typegoose";
import Book from "@web/generated/types/Book";

export const postUpdate = async (book: DocumentType<Book>) => {
  return book;
};
