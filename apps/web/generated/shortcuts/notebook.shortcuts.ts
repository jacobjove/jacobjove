import {
  FindUniqueNotebookArgs,
  NotebookCreationArgs,
  NotebookUpdateArgs,
  NotebookUpsertionArgs,
} from "@web/generated/graphql/args/notebook.args";
import NotebookModel from "@web/generated/models/Notebook";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findNotebook = async ({ where }: FindUniqueNotebookArgs) => {
  const filter = convertFilterForMongo(where);
  return NotebookModel.findOne(filter).lean({ virtuals: true });
};

export const createNotebook = async ({ data }: NotebookCreationArgs) => {
  return NotebookModel.create([data]).then((results) => results[0]);
};

export const updateNotebook = async ({ where, data }: NotebookUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await NotebookModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertNotebook = async ({ where, data }: NotebookUpsertionArgs) => {
  const exists = await NotebookModel.exists(where);
  return exists ? updateNotebook({ where, data }) : createNotebook({ data });
  /*
  const result: ModifyResult<Notebook> = await NotebookModel.findOneAndUpdate(
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
  ).lean({ virtuals: true });
  return result.value;
  */
};
