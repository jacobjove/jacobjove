/* Edit this file to add a non-default post-save hook for the Notebook type. */

import { Notebook } from "@web/generated/interfaces/Notebook";
import NotebookModel from "@web/generated/models/Notebook";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return NotebookModel.create<Notebook>({} as Notebook);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (notebook: Instance) => {
  return _postCreate(notebook);
};
