import {
  CalendarCreationArgs,
  CalendarUpdateArgs,
  CalendarUpsertionArgs,
  FindUniqueCalendarArgs,
} from "@web/generated/graphql/args/calendar.args";
import CalendarModel from "@web/generated/models/Calendar";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

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
  const exists = await CalendarModel.exists(where);
  return exists ? updateCalendar({ where, data }) : createCalendar({ data });
  /*
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
  */
};
