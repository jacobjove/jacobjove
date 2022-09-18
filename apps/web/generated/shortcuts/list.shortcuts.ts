import { List } from "@web/generated/interfaces/List";
import ListModel from "@web/generated/models/List";
import {
  FindUniqueListArgs,
  ListCreationArgs,
  ListUpdateArgs,
  ListUpsertionArgs,
} from "@web/graphql/generated/args/list.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ModifyResult } from "mongoose";

export const findList = async ({ where }: FindUniqueListArgs) => {
  const filter = convertFilterForMongo(where);
  return ListModel.findOne(filter).lean({ virtuals: true });
};

export const createList = async ({ data }: ListCreationArgs) => {
  return ListModel.create([data]).then((results) => results[0]);
};

export const updateList = async ({ where, data }: ListUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await ListModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertList = async ({ where, data }: ListUpsertionArgs) => {
  const result: ModifyResult<List> = await ListModel.findOneAndUpdate(
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
};
