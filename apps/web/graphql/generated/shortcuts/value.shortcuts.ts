import { postSave } from "@web/graphql/generated/types/Value/hooks";
import ValueModel from "@web/graphql/generated/models/ValueModel";
import { ValueCreationArgs, ValueUpsertionArgs } from "@web/graphql/generated/args/value.args";

export const createValue = async (args: ValueCreationArgs) => {
  const value = await ValueModel.create(args);
  if (value) postSave(value);
  return value;
};

export const upsertValue = async (args: ValueUpsertionArgs) => {
  const { where, data } = args;
  const valueUpsertResult = await ValueModel.findOneAndUpdate(where, data, {
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
