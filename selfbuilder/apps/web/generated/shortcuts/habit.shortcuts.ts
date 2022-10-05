import {
  FindUniqueHabitArgs,
  HabitCreationArgs,
  HabitUpdateArgs,
  HabitUpsertionArgs,
} from "@web/generated/graphql/args/habit.args";
import HabitModel from "@web/generated/models/Habit";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

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
  const exists = await HabitModel.exists(where);
  return exists ? updateHabit({ where, data }) : createHabit({ data });
  /*
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
  */
};
