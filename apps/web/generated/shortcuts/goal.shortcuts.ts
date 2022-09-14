import { postCreate, postUpdate } from "@web/generated/types/Goal/hooks";
import GoalModel from "@web/generated/models/GoalModel";
import UserModel from "@web/generated/models/UserModel";
import {
  GoalCreationArgs,
  GoalUpdateArgs,
  GoalUpsertionArgs,
  FindUniqueGoalArgs,
} from "@web/graphql/generated/args/goal.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findGoal = async ({ where }: FindUniqueGoalArgs) => {
  const filter = convertFilterForMongo(where);
  return GoalModel.findOne(filter);
};

export const createGoal = async ({ data }: GoalCreationArgs) => {
  const goal = await GoalModel.create(data);
  if (goal) await postCreate(goal);
  return goal;
};

export const updateGoal = async ({ where, data }: GoalUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const goal = await GoalModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  // NOTE: This update fails if it's not awaited.
  goal &&
    (await UserModel.findOneAndUpdate(
      { _id: goal.userId, "goals._id": goal._id },
      {
        $set: { "goals.$": { ...goal } },
      }
    ));
  if (goal) await postUpdate(goal);
  return goal;
};

export const upsertGoal = async ({ where, data }: GoalUpsertionArgs) => {
  const goalUpsertResult = await GoalModel.findOneAndUpdate(convertFilterForMongo(where), data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const goal = goalUpsertResult.value;
  if (goal) {
    if (!goalUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(goal);
    } else {
      await postUpdate(goal);
    }
  }
  return goal;
};
