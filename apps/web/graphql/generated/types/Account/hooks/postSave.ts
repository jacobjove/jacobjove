/* Edit this file to add a non-default post-save hook for the Account type. */

import { DocumentType } from "@typegoose/typegoose";
import Account from "@web/graphql/generated/types/Account";
import { postSave as _postSave } from "@web/graphql/schema/helpers";

export const postSave = async (user: DocumentType<Account>) => {
  return _postSave(user);
};
