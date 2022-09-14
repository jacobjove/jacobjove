import { postCreate, postUpdate } from "@web/generated/types/Notebook/hooks";
import NotebookModel from "@web/generated/models/NotebookModel";
import UserModel from "@web/generated/models/UserModel";
import {
  NotebookCreationArgs,
  NotebookUpdateArgs,
  NotebookUpsertionArgs,
  FindUniqueNotebookArgs,
} from "@web/graphql/generated/args/notebook.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findNotebook = async ({ where }: FindUniqueNotebookArgs) => {
  const filter = convertFilterForMongo(where);
  return NotebookModel.findOne(filter);
};

export const createNotebook = async ({ data }: NotebookCreationArgs) => {
  const notebook = await NotebookModel.create(data);
  if (notebook) await postCreate(notebook);
  return notebook;
};

export const updateNotebook = async ({ where, data }: NotebookUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const notebook = await NotebookModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  // NOTE: This update fails if it's not awaited.
  notebook &&
    (await UserModel.findOneAndUpdate(
      { _id: notebook.userId, "notebooks._id": notebook._id },
      {
        $set: { "notebooks.$": { ...notebook } },
      }
    ));
  if (notebook) await postUpdate(notebook);
  return notebook;
};

export const upsertNotebook = async ({ where, data }: NotebookUpsertionArgs) => {
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
  if (notebook) {
    if (!notebookUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(notebook);
    } else {
      await postUpdate(notebook);
    }
  }
  return notebook;
};
