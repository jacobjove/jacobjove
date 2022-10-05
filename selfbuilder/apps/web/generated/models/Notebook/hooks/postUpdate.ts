/* Edit this file to add a non-default post-save hook for the Notebook type. */

import NotebookDocument from "@web/generated/interfaces/Notebook";

export const postUpdate = async (notebook: NotebookDocument, updatedFields: any) => {
  return notebook;
};
