import { postCreate, postUpdate } from "@web/generated/types/User/hooks";
import UserModel from "@web/generated/models/UserModel";
import {
  UserCreationArgs,
  UserUpdateArgs,
  UserUpsertionArgs,
  FindUniqueUserArgs,
} from "@web/graphql/generated/args/user.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findUser = async ({ where }: FindUniqueUserArgs) => {
  const filter = convertFilterForMongo(where);
  return UserModel.findOne(filter);
};

export const createUser = async ({ data }: UserCreationArgs) => {
  const user = await UserModel.create(data);
  if (user) await postCreate(user);
  return user;
};

export const updateUser = async ({ where, data }: UserUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const user = await UserModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  if (user) await postUpdate(user);
  return user;
};

export const upsertUser = async ({ where, data }: UserUpsertionArgs) => {
  const userUpsertResult = await UserModel.findOneAndUpdate(convertFilterForMongo(where), data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const user = userUpsertResult.value;
  if (user) {
    if (!userUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(user);
    } else {
      await postUpdate(user);
    }
  }
  return user;
};
