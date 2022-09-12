import { postSave } from "@web/graphql/generated/types/CalendarEvent/hooks";
import CalendarEventModel from "@web/graphql/generated/models/CalendarEventModel";
import {
  CalendarEventCreationArgs,
  CalendarEventUpsertionArgs,
} from "@web/graphql/generated/args/calendarEvent.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const createCalendarEvent = async (args: CalendarEventCreationArgs) => {
  const calendarEvent = await CalendarEventModel.create(args);
  if (calendarEvent) postSave(calendarEvent);
  return calendarEvent;
};

export const upsertCalendarEvent = async (args: CalendarEventUpsertionArgs) => {
  const { where, data } = args;
  const calendarEventUpsertResult = await CalendarEventModel.findOneAndUpdate(
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
  const calendarEvent = calendarEventUpsertResult.value;
  if (calendarEvent && !calendarEventUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(calendarEvent);
  }
  return calendarEvent;
};
