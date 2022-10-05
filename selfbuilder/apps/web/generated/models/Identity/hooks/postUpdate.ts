/* Edit this file to add a non-default post-save hook for the Identity type. */

import IdentityDocument from "@web/generated/interfaces/Identity";

export const postUpdate = async (identity: IdentityDocument, updatedFields: any) => {
  return identity;
};
