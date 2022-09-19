/* Edit this file to add a non-default pre-save hook for the User type. */

import UserDocument from "@web/generated/models/User/document";
import bcrypt from "bcryptjs";

const COST_FACTOR = 12;

export async function preSave(document: UserDocument) {
  if (document.isModified("password") && document.password) {
    document.password = await bcrypt.hash(document.password, COST_FACTOR);
  }
}
