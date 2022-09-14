import { postCreate, postUpdate } from "@web/generated/types/Identity/hooks";
import IdentityModel from "@web/generated/models/IdentityModel";
import UserModel from "@web/generated/models/UserModel";
import {
  IdentityCreationArgs,
  IdentityUpdateArgs,
  IdentityUpsertionArgs,
  FindUniqueIdentityArgs,
} from "@web/graphql/generated/args/identity.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findIdentity = async ({ where }: FindUniqueIdentityArgs) => {
  const filter = convertFilterForMongo(where);
  return IdentityModel.findOne(filter);
};

export const createIdentity = async ({ data }: IdentityCreationArgs) => {
  const identity = await IdentityModel.create(data);
  if (identity) await postCreate(identity);
  return identity;
};

export const updateIdentity = async ({ where, data }: IdentityUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const identity = await IdentityModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  // NOTE: This update fails if it's not awaited.
  identity &&
    (await UserModel.findOneAndUpdate(
      { _id: identity.userId, "identities._id": identity._id },
      {
        $set: { "identities.$": { ...identity } },
      }
    ));
  if (identity) await postUpdate(identity);
  return identity;
};

export const upsertIdentity = async ({ where, data }: IdentityUpsertionArgs) => {
  const identityUpsertResult = await IdentityModel.findOneAndUpdate(
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
  const identity = identityUpsertResult.value;
  if (identity) {
    if (!identityUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(identity);
    } else {
      await postUpdate(identity);
    }
  }
  return identity;
};
