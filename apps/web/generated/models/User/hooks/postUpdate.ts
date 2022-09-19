/* Edit this file to add a non-default post-save hook for the User type. */

import UserDocument from "@web/generated/models/User/document";

export const postUpdate = async (user: UserDocument, updatedFields: any) => {
  return user;
};
