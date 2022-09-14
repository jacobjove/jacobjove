import { postCreate, postUpdate } from "@web/generated/types/Mantra/hooks";
import MantraModel from "@web/generated/models/MantraModel";
import UserModel from "@web/generated/models/UserModel";
import {
  MantraCreationArgs,
  MantraUpdateArgs,
  MantraUpsertionArgs,
  FindUniqueMantraArgs,
} from "@web/graphql/generated/args/mantra.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findMantra = async ({ where }: FindUniqueMantraArgs) => {
  const filter = convertFilterForMongo(where);
  return MantraModel.findOne(filter);
};

export const createMantra = async ({ data }: MantraCreationArgs) => {
  const mantra = await MantraModel.create(data);
  if (mantra) await postCreate(mantra);
  return mantra;
};

export const updateMantra = async ({ where, data }: MantraUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const mantra = await MantraModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  // NOTE: This update fails if it's not awaited.
  mantra &&
    (await UserModel.findOneAndUpdate(
      { _id: mantra.userId, "mantras._id": mantra._id },
      {
        $set: { "mantras.$": { ...mantra } },
      }
    ));
  if (mantra) await postUpdate(mantra);
  return mantra;
};

export const upsertMantra = async ({ where, data }: MantraUpsertionArgs) => {
  const mantraUpsertResult = await MantraModel.findOneAndUpdate(
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
  const mantra = mantraUpsertResult.value;
  if (mantra) {
    if (!mantraUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(mantra);
    } else {
      await postUpdate(mantra);
    }
  }
  return mantra;
};
