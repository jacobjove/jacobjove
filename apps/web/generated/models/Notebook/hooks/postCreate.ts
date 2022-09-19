/* Edit this file to add a non-default post-save hook for the Notebook type. */

import { Notebook } from "@web/generated/interfaces/Notebook";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (notebook: Notebook) => {
  return _postCreate(notebook);
};
