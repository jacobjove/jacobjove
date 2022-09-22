/* Edit this file to add a non-default post-save hook for the Mantra type. */

import MantraDocument from "@web/generated/interfaces/Mantra";

export const postUpdate = async (mantra: MantraDocument, updatedFields: any) => {
  return mantra;
};
