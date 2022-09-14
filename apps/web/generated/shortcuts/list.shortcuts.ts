import { postCreate, postUpdate } from "@web/generated/types/List/hooks";
import ListModel from "@web/generated/models/ListModel";
import UserModel from "@web/generated/models/UserModel";
import {
  ListCreationArgs,
  ListUpdateArgs,
  ListUpsertionArgs,
  FindUniqueListArgs,
} from "@web/graphql/generated/args/list.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findList = async ({ where }: FindUniqueListArgs) => {
  const filter = convertFilterForMongo(where);
  return ListModel.findOne(filter);
};

export const createList = async ({ data }: ListCreationArgs) => {
  const list = await ListModel.create(data);
  if (list) await postCreate(list);
  return list;
};

export const updateList = async ({ where, data }: ListUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const list = await ListModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  // NOTE: This update fails if it's not awaited.
  list &&
    (await UserModel.findOneAndUpdate(
      { _id: list.userId, "lists._id": list._id },
      {
        $set: { "lists.$": { ...list } },
      }
    ));
  if (list) await postUpdate(list);
  return list;
};

export const upsertList = async ({ where, data }: ListUpsertionArgs) => {
  const listUpsertResult = await ListModel.findOneAndUpdate(convertFilterForMongo(where), data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const list = listUpsertResult.value;
  if (list) {
    if (!listUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(list);
    } else {
      await postUpdate(list);
    }
  }
  return list;
};
