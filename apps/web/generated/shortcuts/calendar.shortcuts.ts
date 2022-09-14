import { postCreate, postUpdate } from "@web/generated/types/Calendar/hooks";
import CalendarModel from "@web/generated/models/CalendarModel";
import UserModel from "@web/generated/models/UserModel";
import {
  CalendarCreationArgs,
  CalendarUpdateArgs,
  CalendarUpsertionArgs,
  FindUniqueCalendarArgs,
} from "@web/graphql/generated/args/calendar.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findCalendar = async ({ where }: FindUniqueCalendarArgs) => {
  const filter = convertFilterForMongo(where);
  return CalendarModel.findOne(filter);
};

export const createCalendar = async ({ data }: CalendarCreationArgs) => {
  const calendar = await CalendarModel.create(data);
  if (calendar) await postCreate(calendar);
  return calendar;
};

export const updateCalendar = async ({ where, data }: CalendarUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const calendar = await CalendarModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  // NOTE: This update fails if it's not awaited.
  calendar &&
    (await UserModel.findOneAndUpdate(
      { _id: calendar.userId, "calendars._id": calendar._id },
      {
        $set: { "calendars.$": { ...calendar } },
      }
    ));
  if (calendar) await postUpdate(calendar);
  return calendar;
};

export const upsertCalendar = async ({ where, data }: CalendarUpsertionArgs) => {
  const calendarUpsertResult = await CalendarModel.findOneAndUpdate(
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
  );
  const calendar = calendarUpsertResult.value;
  if (calendar) {
    if (!calendarUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(calendar);
    } else {
      await postUpdate(calendar);
    }
  }
  return calendar;
};
