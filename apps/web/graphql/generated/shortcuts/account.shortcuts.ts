import { postSave } from "@web/graphql/generated/types/Account/hooks";
import AccountModel from "@web/graphql/generated/models/AccountModel";
import {
  AccountCreationArgs,
  AccountUpsertionArgs,
} from "@web/graphql/generated/args/account.args";

export const createAccount = async (args: AccountCreationArgs) => {
  const account = await AccountModel.create(args);
  if (account) postSave(account);
  return account;
};

export const upsertAccount = async (args: AccountUpsertionArgs) => {
  const { where, data } = args;
  const accountUpsertResult = await AccountModel.findOneAndUpdate(where, data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const account = accountUpsertResult.value;
  if (account && !accountUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(account);
  }
  return account;
};
