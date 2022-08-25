/* Edit this file to add a non-default pre-save hook for the User type. */

import { HookNextErrorFn } from "@/graphql/schema/helpers";
import { DocumentType } from "@typegoose/typegoose";
import bcrypt from "bcryptjs";

const COST_FACTOR = 12;

export async function preSave(this: DocumentType<any>, next: HookNextErrorFn) {
  if (this.isModified("password") && this.password) {
    this.password = await bcrypt.hash(this.password, COST_FACTOR);
  }
  return next();
}
