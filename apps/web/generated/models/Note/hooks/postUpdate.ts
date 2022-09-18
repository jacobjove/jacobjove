/* Edit this file to add a non-default post-save hook for the Note type. */

import NoteDocument from "@web/generated/models/Note/document";

export const postUpdate = async (note: NoteDocument, updatedFields: any) => {
  return note;
};
