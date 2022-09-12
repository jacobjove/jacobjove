import { postSave } from "@web/graphql/generated/types/Goal/hooks";
import GoalModel from "@web/graphql/generated/models/GoalModel";
import { GoalCreationArgs, GoalUpsertionArgs } from "@web/graphql/generated/args/goal.args";

export const createGoal = async (args: GoalCreationArgs) => {
  const goal = await GoalModel.create(args);
  if (goal) postSave(goal);
  return goal;
};

export const upsertGoal = async (args: GoalUpsertionArgs) => {
  const { where, data } = args;
  const goalUpsertResult = await GoalModel.findOneAndUpdate(where, data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const goal = goalUpsertResult.value;
  if (goal && !goalUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(goal);
  }
  return goal;
};
