import { Account } from "@web/generated/interfaces/Account";
import AccountModel from "@web/generated/models/Account";
import {
  AccountCreationArgs,
  AccountUpdateArgs,
  AccountUpsertionArgs,
  FindUniqueAccountArgs,
} from "@web/graphql/generated/args/account.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ModifyResult } from "mongoose";

export const findAccount = async ({ where }: FindUniqueAccountArgs) => {
  const filter = convertFilterForMongo(where);
  return AccountModel.findOne(filter).lean({ virtuals: true });
};

export const createAccount = async ({ data }: AccountCreationArgs) => {
  return AccountModel.create([data]).then((results) => results[0]);
};

export const updateAccount = async ({ where, data }: AccountUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await AccountModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertAccount = async ({ where, data }: AccountUpsertionArgs) => {
  const result: ModifyResult<Account> = await AccountModel.findOneAndUpdate(
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
