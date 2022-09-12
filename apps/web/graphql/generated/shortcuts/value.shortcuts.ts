import { postSave } from "@web/graphql/generated/types/Value/hooks";
import ValueModel from "@web/graphql/generated/models/ValueModel";
import { ValueCreationArgs, ValueUpsertionArgs } from "@web/graphql/generated/args/value.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const createValue = async (args: ValueCreationArgs) => {
  const value = await ValueModel.create(args);
  if (value) postSave(value);
  return value;
};

export const upsertValue = async (args: ValueUpsertionArgs) => {
  const { where, data } = args;
  const valueUpsertResult = await ValueModel.findOneAndUpdate(convertFilterForMongo(where), data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const value = valueUpsertResult.value;
  if (value && !valueUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(value);
  }
  return value;
};
