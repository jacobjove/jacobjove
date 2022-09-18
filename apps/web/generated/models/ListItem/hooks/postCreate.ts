/* Edit this file to add a non-default post-save hook for the ListItem type. */

import { ListItem } from "@web/generated/interfaces/ListItem";
import ListItemModel from "@web/generated/models/ListItem";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return ListItemModel.create<ListItem>({} as ListItem);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (listItem: Instance) => {
  return _postCreate(listItem);
};
