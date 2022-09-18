/* Edit this file to add a non-default post-save hook for the Note type. */

import { Note } from "@web/generated/interfaces/Note";
import NoteModel from "@web/generated/models/Note";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return NoteModel.create<Note>({} as Note);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (note: Instance) => {
  return _postCreate(note);
};
