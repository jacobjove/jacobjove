import { CalendarEvent } from "@web/generated/interfaces/CalendarEvent";
import CalendarEventModel from "@web/generated/models/CalendarEvent";
import {
  CalendarEventCreationArgs,
  CalendarEventUpdateArgs,
  CalendarEventUpsertionArgs,
  FindUniqueCalendarEventArgs,
} from "@web/graphql/generated/args/calendarEvent.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ModifyResult } from "mongoose";

export const findCalendarEvent = async ({ where }: FindUniqueCalendarEventArgs) => {
  const filter = convertFilterForMongo(where);
  return CalendarEventModel.findOne(filter).lean({ virtuals: true });
};

export const createCalendarEvent = async ({ data }: CalendarEventCreationArgs) => {
  return CalendarEventModel.create([data]).then((results) => results[0]);
};

export const updateCalendarEvent = async ({ where, data }: CalendarEventUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await CalendarEventModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertCalendarEvent = async ({ where, data }: CalendarEventUpsertionArgs) => {
  const result: ModifyResult<CalendarEvent> = await CalendarEventModel.findOneAndUpdate(
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
