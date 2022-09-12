import { postSave } from "@web/graphql/generated/types/Mantra/hooks";
import MantraModel from "@web/graphql/generated/models/MantraModel";
import { MantraCreationArgs, MantraUpsertionArgs } from "@web/graphql/generated/args/mantra.args";

export const createMantra = async (args: MantraCreationArgs) => {
  const mantra = await MantraModel.create(args);
  if (mantra) postSave(mantra);
  return mantra;
};

export const upsertMantra = async (args: MantraUpsertionArgs) => {
  const { where, data } = args;
  const mantraUpsertResult = await MantraModel.findOneAndUpdate(where, data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const mantra = mantraUpsertResult.value;
  if (mantra && !mantraUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(mantra);
  }
  return mantra;
};
