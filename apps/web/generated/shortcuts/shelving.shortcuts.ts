import { Shelving } from "@web/generated/interfaces/Shelving";
import ShelvingModel from "@web/generated/models/Shelving";
import {
  FindUniqueShelvingArgs,
  ShelvingCreationArgs,
  ShelvingUpdateArgs,
  ShelvingUpsertionArgs,
} from "@web/graphql/generated/args/shelving.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ModifyResult } from "mongoose";

export const findShelving = async ({ where }: FindUniqueShelvingArgs) => {
  const filter = convertFilterForMongo(where);
  return ShelvingModel.findOne(filter).lean({ virtuals: true });
};

export const createShelving = async ({ data }: ShelvingCreationArgs) => {
  return ShelvingModel.create([data]).then((results) => results[0]);
};

export const updateShelving = async ({ where, data }: ShelvingUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await ShelvingModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertShelving = async ({ where, data }: ShelvingUpsertionArgs) => {
  const result: ModifyResult<Shelving> = await ShelvingModel.findOneAndUpdate(
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
