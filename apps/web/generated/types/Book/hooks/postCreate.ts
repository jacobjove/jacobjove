/* Edit this file to add a non-default post-save hook for the Book type. */

import { DocumentType } from "@typegoose/typegoose";
import Book from "@web/generated/types/Book";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (user: DocumentType<Book>) => {
  return _postCreate(user);
};
