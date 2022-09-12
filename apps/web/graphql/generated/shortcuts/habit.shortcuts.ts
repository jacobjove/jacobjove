import { postSave } from "@web/graphql/generated/types/Habit/hooks";
import HabitModel from "@web/graphql/generated/models/HabitModel";
import { HabitCreationArgs, HabitUpsertionArgs } from "@web/graphql/generated/args/habit.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const createHabit = async (args: HabitCreationArgs) => {
  const habit = await HabitModel.create(args);
  if (habit) postSave(habit);
  return habit;
};

export const upsertHabit = async (args: HabitUpsertionArgs) => {
  const { where, data } = args;
  const habitUpsertResult = await HabitModel.findOneAndUpdate(convertFilterForMongo(where), data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const habit = habitUpsertResult.value;
  if (habit && !habitUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(habit);
  }
  return habit;
};
