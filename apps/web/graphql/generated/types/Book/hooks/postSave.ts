/* Edit this file to add a non-default post-save hook for the Book type. */

import { DocumentType } from "@typegoose/typegoose";
import Book from "@web/graphql/generated/types/Book";
import { postSave as _postSave } from "@web/graphql/schema/helpers";

export const postSave = async (user: DocumentType<Book>) => {
  return _postSave(user);
};
