import { postCreate, postUpdate } from "@web/generated/types/Habit/hooks";
import HabitModel from "@web/generated/models/HabitModel";
import UserModel from "@web/generated/models/UserModel";
import {
  HabitCreationArgs,
  HabitUpdateArgs,
  HabitUpsertionArgs,
  FindUniqueHabitArgs,
} from "@web/graphql/generated/args/habit.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findHabit = async ({ where }: FindUniqueHabitArgs) => {
  const filter = convertFilterForMongo(where);
  return HabitModel.findOne(filter);
};

export const createHabit = async ({ data }: HabitCreationArgs) => {
  const habit = await HabitModel.create(data);
  if (habit) await postCreate(habit);
  return habit;
};

export const updateHabit = async ({ where, data }: HabitUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const habit = await HabitModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  // NOTE: This update fails if it's not awaited.
  habit &&
    (await UserModel.findOneAndUpdate(
      { _id: habit.userId, "habits._id": habit._id },
      {
        $set: { "habits.$": { ...habit } },
      }
    ));
  if (habit) await postUpdate(habit);
  return habit;
};

export const upsertHabit = async ({ where, data }: HabitUpsertionArgs) => {
  const habitUpsertResult = await HabitModel.findOneAndUpdate(convertFilterForMongo(where), data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const habit = habitUpsertResult.value;
  if (habit) {
    if (!habitUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(habit);
    } else {
      await postUpdate(habit);
    }
  }
  return habit;
};
