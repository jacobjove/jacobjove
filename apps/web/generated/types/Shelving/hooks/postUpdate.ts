/* Edit this file to add a non-default post-save hook for the Shelving type. */

import { DocumentType } from "@typegoose/typegoose";
import Shelving from "@web/generated/types/Shelving";

export const postUpdate = async (shelving: DocumentType<Shelving>) => {
  return shelving;
};
