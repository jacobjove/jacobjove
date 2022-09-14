/* Edit this file to add a non-default post-save hook for the User type. */

import { DocumentType } from "@typegoose/typegoose";
import User from "@web/generated/types/User";

export const postUpdate = async (user: DocumentType<User>) => {
  return user;
};
