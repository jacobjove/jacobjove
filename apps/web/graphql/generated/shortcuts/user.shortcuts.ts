import { postSave } from "@web/graphql/generated/types/User/hooks";
import UserModel from "@web/graphql/generated/models/UserModel";
import { UserCreationArgs, UserUpsertionArgs } from "@web/graphql/generated/args/user.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const createUser = async (args: UserCreationArgs) => {
  const user = await UserModel.create(args);
  if (user) postSave(user);
  return user;
};

export const upsertUser = async (args: UserUpsertionArgs) => {
  const { where, data } = args;
  const userUpsertResult = await UserModel.findOneAndUpdate(convertFilterForMongo(where), data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const user = userUpsertResult.value;
  if (user && !userUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(user);
  }
  return user;
};
