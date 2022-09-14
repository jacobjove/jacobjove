/* Edit this file to add a non-default post-save hook for the Account type. */

import { DocumentType } from "@typegoose/typegoose";
import Account from "@web/generated/types/Account";

export const postUpdate = async (account: DocumentType<Account>) => {
  return account;
};
