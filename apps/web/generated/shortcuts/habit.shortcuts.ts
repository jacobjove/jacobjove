import { Habit } from "@web/generated/interfaces/Habit";
import HabitModel from "@web/generated/models/Habit";
import {
  FindUniqueHabitArgs,
  HabitCreationArgs,
  HabitUpdateArgs,
  HabitUpsertionArgs,
} from "@web/graphql/generated/args/habit.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ModifyResult } from "mongoose";

export const findHabit = async ({ where }: FindUniqueHabitArgs) => {
  const filter = convertFilterForMongo(where);
  return HabitModel.findOne(filter).lean({ virtuals: true });
};

export const createHabit = async ({ data }: HabitCreationArgs) => {
  return HabitModel.create([data]).then((results) => results[0]);
};

export const updateHabit = async ({ where, data }: HabitUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await HabitModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertHabit = async ({ where, data }: HabitUpsertionArgs) => {
  const result: ModifyResult<Habit> = await HabitModel.findOneAndUpdate(
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
  ).lean({ virtuals: true });
  return result.value;
};
