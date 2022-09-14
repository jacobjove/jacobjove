import { postCreate, postUpdate } from "@web/generated/types/Account/hooks";
import AccountModel from "@web/generated/models/AccountModel";
import UserModel from "@web/generated/models/UserModel";
import {
  AccountCreationArgs,
  AccountUpdateArgs,
  AccountUpsertionArgs,
  FindUniqueAccountArgs,
} from "@web/graphql/generated/args/account.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findAccount = async ({ where }: FindUniqueAccountArgs) => {
  const filter = convertFilterForMongo(where);
  return AccountModel.findOne(filter);
};

export const createAccount = async ({ data }: AccountCreationArgs) => {
  const account = await AccountModel.create(data);
  if (account) await postCreate(account);
  return account;
};

export const updateAccount = async ({ where, data }: AccountUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const account = await AccountModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  // NOTE: This update fails if it's not awaited.
  account &&
    (await UserModel.findOneAndUpdate(
      { _id: account.userId, "accounts._id": account._id },
      {
        $set: { "accounts.$": { ...account } },
      }
    ));
  if (account) await postUpdate(account);
  return account;
};

export const upsertAccount = async ({ where, data }: AccountUpsertionArgs) => {
  const accountUpsertResult = await AccountModel.findOneAndUpdate(
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
  const account = accountUpsertResult.value;
  if (account) {
    if (!accountUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(account);
    } else {
      await postUpdate(account);
    }
  }
  return account;
};
