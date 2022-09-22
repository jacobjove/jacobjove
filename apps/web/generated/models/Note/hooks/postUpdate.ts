/* Edit this file to add a non-default post-save hook for the Note type. */

import NoteDocument from "@web/generated/interfaces/Note";

export const postUpdate = async (note: NoteDocument, updatedFields: any) => {
  return note;
};
