import { postSave } from "@web/graphql/generated/types/Notebook/hooks";
import NotebookModel from "@web/graphql/generated/models/NotebookModel";
import {
  NotebookCreationArgs,
  NotebookUpsertionArgs,
} from "@web/graphql/generated/args/notebook.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const createNotebook = async (args: NotebookCreationArgs) => {
  const notebook = await NotebookModel.create(args);
  if (notebook) postSave(notebook);
  return notebook;
};

export const upsertNotebook = async (args: NotebookUpsertionArgs) => {
  const { where, data } = args;
  const notebookUpsertResult = await NotebookModel.findOneAndUpdate(
    convertFilterForMongo(where),
    data,
    {
      upsert: true,
      new: true,
      returnDocument: "after",
      runValidators: true,
      setDefaultsOnInsert: true,
      rawResult: true,
    }
  );
  const notebook = notebookUpsertResult.value;
  if (notebook && !notebookUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(notebook);
  }
  return notebook;
};
