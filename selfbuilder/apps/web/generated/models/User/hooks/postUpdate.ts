/* Edit this file to add a non-default post-save hook for the User type. */

import UserDocument from "@web/generated/interfaces/User";

export const postUpdate = async (user: UserDocument, updatedFields: any) => {
  return user;
};
