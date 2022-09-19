/* Edit this file to add a non-default post-save hook for the Identity type. */

import { Identity } from "@web/generated/interfaces/Identity";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (identity: Identity) => {
  return _postCreate(identity);
};
