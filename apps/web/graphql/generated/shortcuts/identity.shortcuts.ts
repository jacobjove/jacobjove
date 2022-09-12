import { postSave } from "@web/graphql/generated/types/Identity/hooks";
import IdentityModel from "@web/graphql/generated/models/IdentityModel";
import {
  IdentityCreationArgs,
  IdentityUpsertionArgs,
} from "@web/graphql/generated/args/identity.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const createIdentity = async (args: IdentityCreationArgs) => {
  const identity = await IdentityModel.create(args);
  if (identity) postSave(identity);
  return identity;
};

export const upsertIdentity = async (args: IdentityUpsertionArgs) => {
  const { where, data } = args;
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
  if (identity && !identityUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(identity);
  }
  return identity;
};
