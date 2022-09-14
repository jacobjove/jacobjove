/* Edit this file to add a non-default pre-save hook for the User type. */

import { DocumentType } from "@typegoose/typegoose";
import { HookNextErrorFn } from "@web/graphql/schema/helpers";
import bcrypt from "bcryptjs";

const COST_FACTOR = 12;

export async function preSave(this: DocumentType<any>, next: HookNextErrorFn) {
  if (this.isModified("password") && this.password) {
    this.password = await bcrypt.hash(this.password, COST_FACTOR);
  }
  return next();
}
