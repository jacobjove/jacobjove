import { postSave } from "@web/graphql/generated/types/Belief/hooks";
import BeliefModel from "@web/graphql/generated/models/BeliefModel";
import { BeliefCreationArgs, BeliefUpsertionArgs } from "@web/graphql/generated/args/belief.args";

export const createBelief = async (args: BeliefCreationArgs) => {
  const belief = await BeliefModel.create(args);
  if (belief) postSave(belief);
  return belief;
};

export const upsertBelief = async (args: BeliefUpsertionArgs) => {
  const { where, data } = args;
  const beliefUpsertResult = await BeliefModel.findOneAndUpdate(where, data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const belief = beliefUpsertResult.value;
  if (belief && !beliefUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(belief);
  }
  return belief;
};
