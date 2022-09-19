import {
  CalendarCreationArgs,
  CalendarUpdateArgs,
  CalendarUpsertionArgs,
  FindUniqueCalendarArgs,
} from "@web/generated/graphql/args/calendar.args";
import { Calendar } from "@web/generated/interfaces/Calendar";
import CalendarModel from "@web/generated/models/Calendar";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ModifyResult } from "mongoose";

export const findCalendar = async ({ where }: FindUniqueCalendarArgs) => {
  const filter = convertFilterForMongo(where);
  return CalendarModel.findOne(filter).lean({ virtuals: true });
};

export const createCalendar = async ({ data }: CalendarCreationArgs) => {
  return CalendarModel.create([data]).then((results) => results[0]);
};

export const updateCalendar = async ({ where, data }: CalendarUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await CalendarModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertCalendar = async ({ where, data }: CalendarUpsertionArgs) => {
  const result: ModifyResult<Calendar> = await CalendarModel.findOneAndUpdate(
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
