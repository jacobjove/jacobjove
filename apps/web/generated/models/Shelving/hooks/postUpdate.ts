/* Edit this file to add a non-default post-save hook for the Shelving type. */

import ShelvingDocument from "@web/generated/models/Shelving/document";

export const postUpdate = async (shelving: ShelvingDocument, updatedFields: any) => {
  return shelving;
};
