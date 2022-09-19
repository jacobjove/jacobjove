/* Edit this file to add a non-default post-save hook for the Book type. */

import { Book } from "@web/generated/interfaces/Book";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (book: Book) => {
  return _postCreate(book);
};
