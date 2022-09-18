/* Edit this file to add a non-default post-save hook for the Account type. */

import { AccountDocument } from "@web/generated/models/Account/document";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export async function postCreate(account: AccountDocument) {
  return _postCreate(account);
}
