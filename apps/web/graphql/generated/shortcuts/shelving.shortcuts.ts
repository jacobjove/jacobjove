import { postSave } from "@web/graphql/generated/types/Shelving/hooks";
import ShelvingModel from "@web/graphql/generated/models/ShelvingModel";
import {
  ShelvingCreationArgs,
  ShelvingUpsertionArgs,
} from "@web/graphql/generated/args/shelving.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const createShelving = async (args: ShelvingCreationArgs) => {
  const shelving = await ShelvingModel.create(args);
  if (shelving) postSave(shelving);
  return shelving;
};

export const upsertShelving = async (args: ShelvingUpsertionArgs) => {
  const { where, data } = args;
  const shelvingUpsertResult = await ShelvingModel.findOneAndUpdate(
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
  const shelving = shelvingUpsertResult.value;
  if (shelving && !shelvingUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(shelving);
  }
  return shelving;
};
