/* Edit this file to add a non-default post-save hook for the Account type. */

import AccountDocument from "@web/generated/interfaces/Account";

export const postUpdate = async (account: AccountDocument, updatedFields: any) => {
  return account;
};
