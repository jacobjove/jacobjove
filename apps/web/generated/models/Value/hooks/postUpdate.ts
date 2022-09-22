/* Edit this file to add a non-default post-save hook for the Value type. */

import ValueDocument from "@web/generated/interfaces/Value";

export const postUpdate = async (value: ValueDocument, updatedFields: any) => {
  return value;
};
