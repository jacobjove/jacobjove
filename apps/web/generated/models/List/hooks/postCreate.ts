/* Edit this file to add a non-default post-save hook for the List type. */

import { List } from "@web/generated/interfaces/List";
import ListModel from "@web/generated/models/List";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return ListModel.create<List>({} as List);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (list: Instance) => {
  return _postCreate(list);
};
