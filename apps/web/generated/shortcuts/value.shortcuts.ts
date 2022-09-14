import { postCreate, postUpdate } from "@web/generated/types/Value/hooks";
import ValueModel from "@web/generated/models/ValueModel";
import UserModel from "@web/generated/models/UserModel";
import {
  ValueCreationArgs,
  ValueUpdateArgs,
  ValueUpsertionArgs,
  FindUniqueValueArgs,
} from "@web/graphql/generated/args/value.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findValue = async ({ where }: FindUniqueValueArgs) => {
  const filter = convertFilterForMongo(where);
  return ValueModel.findOne(filter);
};

export const createValue = async ({ data }: ValueCreationArgs) => {
  const value = await ValueModel.create(data);
  if (value) await postCreate(value);
  return value;
};

export const updateValue = async ({ where, data }: ValueUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const value = await ValueModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  // NOTE: This update fails if it's not awaited.
  value &&
    (await UserModel.findOneAndUpdate(
      { _id: value.userId, "values._id": value._id },
      {
        $set: { "values.$": { ...value } },
      }
    ));
  if (value) await postUpdate(value);
  return value;
};

export const upsertValue = async ({ where, data }: ValueUpsertionArgs) => {
  const valueUpsertResult = await ValueModel.findOneAndUpdate(convertFilterForMongo(where), data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const value = valueUpsertResult.value;
  if (value) {
    if (!valueUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(value);
    } else {
      await postUpdate(value);
    }
  }
  return value;
};
