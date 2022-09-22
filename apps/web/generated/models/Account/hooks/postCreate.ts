/* Edit this file to add a non-default post-save hook for the Account type. */

import { Account } from "@web/generated/interfaces";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export async function postCreate(account: Account) {
  return _postCreate(account);
}
