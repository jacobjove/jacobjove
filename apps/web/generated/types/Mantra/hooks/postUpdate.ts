/* Edit this file to add a non-default post-save hook for the Mantra type. */

import { DocumentType } from "@typegoose/typegoose";
import Mantra from "@web/generated/types/Mantra";

export const postUpdate = async (mantra: DocumentType<Mantra>) => {
  return mantra;
};
