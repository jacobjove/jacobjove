import {
  FindUniqueUserArgs,
  UserCreationArgs,
  UserUpdateArgs,
  UserUpsertionArgs,
} from "@web/generated/graphql/args/user.args";
import UserModel from "@web/generated/models/User";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findUser = async ({ where }: FindUniqueUserArgs) => {
  const filter = convertFilterForMongo(where);
  return UserModel.findOne(filter).lean({ virtuals: true });
};

export const createUser = async ({ data }: UserCreationArgs) => {
  return UserModel.create([data]).then((results) => results[0]);
};

export const updateUser = async ({ where, data }: UserUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await UserModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertUser = async ({ where, data }: UserUpsertionArgs) => {
  const exists = await UserModel.exists(where);
  return exists ? updateUser({ where, data }) : createUser({ data });
  /*
  const result: ModifyResult<User> = await UserModel.findOneAndUpdate(
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
