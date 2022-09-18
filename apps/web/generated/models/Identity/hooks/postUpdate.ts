/* Edit this file to add a non-default post-save hook for the Identity type. */

import IdentityDocument from "@web/generated/models/Identity/document";

export const postUpdate = async (identity: IdentityDocument, updatedFields: any) => {
  return identity;
};
