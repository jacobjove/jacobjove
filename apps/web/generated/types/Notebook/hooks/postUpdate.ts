/* Edit this file to add a non-default post-save hook for the Notebook type. */

import { DocumentType } from "@typegoose/typegoose";
import Notebook from "@web/generated/types/Notebook";

export const postUpdate = async (notebook: DocumentType<Notebook>) => {
  return notebook;
};
