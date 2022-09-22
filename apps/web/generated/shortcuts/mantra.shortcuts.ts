import {
  FindUniqueMantraArgs,
  MantraCreationArgs,
  MantraUpdateArgs,
  MantraUpsertionArgs,
} from "@web/generated/graphql/args/mantra.args";
import MantraModel from "@web/generated/models/Mantra";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findMantra = async ({ where }: FindUniqueMantraArgs) => {
  const filter = convertFilterForMongo(where);
  return MantraModel.findOne(filter).lean({ virtuals: true });
};

export const createMantra = async ({ data }: MantraCreationArgs) => {
  return MantraModel.create([data]).then((results) => results[0]);
};

export const updateMantra = async ({ where, data }: MantraUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await MantraModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertMantra = async ({ where, data }: MantraUpsertionArgs) => {
  const exists = await MantraModel.exists(where);
  return exists ? updateMantra({ where, data }) : createMantra({ data });
  /*
  const result: ModifyResult<Mantra> = await MantraModel.findOneAndUpdate(
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
