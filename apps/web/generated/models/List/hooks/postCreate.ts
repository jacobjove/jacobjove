/* Edit this file to add a non-default post-save hook for the List type. */

import { List } from "@web/generated/interfaces/List";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (list: List) => {
  return _postCreate(list);
};
