/* Edit this file to add a non-default post-save hook for the Value type. */

import ValueDocument from "@web/generated/models/Value/document";

export const postUpdate = async (value: ValueDocument, updatedFields: any) => {
  return value;
};
