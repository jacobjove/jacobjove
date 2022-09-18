/* Edit this file to add a non-default post-save hook for the Book type. */

import { Book } from "@web/generated/interfaces/Book";
import BookModel from "@web/generated/models/Book";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return BookModel.create<Book>({} as Book);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (book: Instance) => {
  return _postCreate(book);
};
