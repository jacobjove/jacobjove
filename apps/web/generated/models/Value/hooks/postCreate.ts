/* Edit this file to add a non-default post-save hook for the Value type. */

import { Value } from "@web/generated/interfaces/Value";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (value: Value) => {
  return _postCreate(value);
};
