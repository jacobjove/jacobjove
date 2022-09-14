import { postCreate, postUpdate } from "@web/generated/types/Shelving/hooks";
import ShelvingModel from "@web/generated/models/ShelvingModel";
import {
  ShelvingCreationArgs,
  ShelvingUpdateArgs,
  ShelvingUpsertionArgs,
  FindUniqueShelvingArgs,
} from "@web/graphql/generated/args/shelving.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findShelving = async ({ where }: FindUniqueShelvingArgs) => {
  const filter = convertFilterForMongo(where);
  return ShelvingModel.findOne(filter);
};

export const createShelving = async ({ data }: ShelvingCreationArgs) => {
  const shelving = await ShelvingModel.create(data);
  if (shelving) await postCreate(shelving);
  return shelving;
};

export const updateShelving = async ({ where, data }: ShelvingUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const shelving = await ShelvingModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  if (shelving) await postUpdate(shelving);
  return shelving;
};

export const upsertShelving = async ({ where, data }: ShelvingUpsertionArgs) => {
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
  if (shelving) {
    if (!shelvingUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(shelving);
    } else {
      await postUpdate(shelving);
    }
  }
  return shelving;
};
