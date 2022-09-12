import { postSave } from "@web/graphql/generated/types/List/hooks";
import ListModel from "@web/graphql/generated/models/ListModel";
import { ListCreationArgs, ListUpsertionArgs } from "@web/graphql/generated/args/list.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const createList = async (args: ListCreationArgs) => {
  const list = await ListModel.create(args);
  if (list) postSave(list);
  return list;
};

export const upsertList = async (args: ListUpsertionArgs) => {
  const { where, data } = args;
  const listUpsertResult = await ListModel.findOneAndUpdate(convertFilterForMongo(where), data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const list = listUpsertResult.value;
  if (list && !listUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(list);
  }
  return list;
};
