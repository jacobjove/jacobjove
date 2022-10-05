/* Edit this file to add a non-default post-save hook for the Note type. */

import { Note } from "@web/generated/interfaces/Note";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (note: Note) => {
  return _postCreate(note);
};
