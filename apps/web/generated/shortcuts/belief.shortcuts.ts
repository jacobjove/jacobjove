import { postCreate, postUpdate } from "@web/generated/types/Belief/hooks";
import BeliefModel from "@web/generated/models/BeliefModel";
import UserModel from "@web/generated/models/UserModel";
import {
  BeliefCreationArgs,
  BeliefUpdateArgs,
  BeliefUpsertionArgs,
  FindUniqueBeliefArgs,
} from "@web/graphql/generated/args/belief.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findBelief = async ({ where }: FindUniqueBeliefArgs) => {
  const filter = convertFilterForMongo(where);
  return BeliefModel.findOne(filter);
};

export const createBelief = async ({ data }: BeliefCreationArgs) => {
  const belief = await BeliefModel.create(data);
  if (belief) await postCreate(belief);
  return belief;
};

export const updateBelief = async ({ where, data }: BeliefUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const belief = await BeliefModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  // NOTE: This update fails if it's not awaited.
  belief &&
    (await UserModel.findOneAndUpdate(
      { _id: belief.userId, "beliefs._id": belief._id },
      {
        $set: { "beliefs.$": { ...belief } },
      }
    ));
  if (belief) await postUpdate(belief);
  return belief;
};

export const upsertBelief = async ({ where, data }: BeliefUpsertionArgs) => {
  const beliefUpsertResult = await BeliefModel.findOneAndUpdate(
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
  const belief = beliefUpsertResult.value;
  if (belief) {
    if (!beliefUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(belief);
    } else {
      await postUpdate(belief);
    }
  }
  return belief;
};
