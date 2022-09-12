import { postSave } from "@web/graphql/generated/types/Calendar/hooks";
import CalendarModel from "@web/graphql/generated/models/CalendarModel";
import {
  CalendarCreationArgs,
  CalendarUpsertionArgs,
} from "@web/graphql/generated/args/calendar.args";

export const createCalendar = async (args: CalendarCreationArgs) => {
  const calendar = await CalendarModel.create(args);
  if (calendar) postSave(calendar);
  return calendar;
};

export const upsertCalendar = async (args: CalendarUpsertionArgs) => {
  const { where, data } = args;
  const calendarUpsertResult = await CalendarModel.findOneAndUpdate(where, data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const calendar = calendarUpsertResult.value;
  if (calendar && !calendarUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(calendar);
  }
  return calendar;
};
