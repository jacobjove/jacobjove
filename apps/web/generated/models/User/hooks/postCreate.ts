/* Edit this file to add a non-default post-save hook for the User type. */

import { User } from "@web/generated/interfaces";

export const postCreate = async (user: User) => {
  console.log("User created:", user);
};
