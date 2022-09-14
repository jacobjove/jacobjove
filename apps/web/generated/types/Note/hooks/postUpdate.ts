/* Edit this file to add a non-default post-save hook for the Note type. */

import { DocumentType } from "@typegoose/typegoose";
import Note from "@web/generated/types/Note";

export const postUpdate = async (note: DocumentType<Note>) => {
  return note;
};
