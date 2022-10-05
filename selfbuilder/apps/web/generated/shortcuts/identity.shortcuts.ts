import {
  FindUniqueIdentityArgs,
  IdentityCreationArgs,
  IdentityUpdateArgs,
  IdentityUpsertionArgs,
} from "@web/generated/graphql/args/identity.args";
import IdentityModel from "@web/generated/models/Identity";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findIdentity = async ({ where }: FindUniqueIdentityArgs) => {
  const filter = convertFilterForMongo(where);
  return IdentityModel.findOne(filter).lean({ virtuals: true });
};

export const createIdentity = async ({ data }: IdentityCreationArgs) => {
  return IdentityModel.create([data]).then((results) => results[0]);
};

export const updateIdentity = async ({ where, data }: IdentityUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await IdentityModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertIdentity = async ({ where, data }: IdentityUpsertionArgs) => {
  const exists = await IdentityModel.exists(where);
  return exists ? updateIdentity({ where, data }) : createIdentity({ data });
  /*
  const result: ModifyResult<Identity> = await IdentityModel.findOneAndUpdate(
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
