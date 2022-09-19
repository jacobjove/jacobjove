/* Edit this file to add a non-default post-save hook for the ListItem type. */

import { ListItem } from "@web/generated/interfaces/ListItem";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (listItem: ListItem) => {
  return _postCreate(listItem);
};
