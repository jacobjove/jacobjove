/* Edit this file to add a non-default post-save hook for the Account type. */

import { DocumentType } from "@typegoose/typegoose";
import Account from "@web/generated/types/Account";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (user: DocumentType<Account>) => {
  return _postCreate(user);
};
