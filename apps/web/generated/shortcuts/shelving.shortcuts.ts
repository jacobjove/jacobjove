import {
  FindUniqueShelvingArgs,
  ShelvingCreationArgs,
  ShelvingUpdateArgs,
  ShelvingUpsertionArgs,
} from "@web/generated/graphql/args/shelving.args";
import ShelvingModel from "@web/generated/models/Shelving";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

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
  const exists = await ShelvingModel.exists(where);
  return exists ? updateShelving({ where, data }) : createShelving({ data });
  /*
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
  */
};
