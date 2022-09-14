import { postCreate, postUpdate } from "@web/generated/types/CalendarEvent/hooks";
import CalendarEventModel from "@web/generated/models/CalendarEventModel";
import UserModel from "@web/generated/models/UserModel";
import {
  CalendarEventCreationArgs,
  CalendarEventUpdateArgs,
  CalendarEventUpsertionArgs,
  FindUniqueCalendarEventArgs,
} from "@web/graphql/generated/args/calendarEvent.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findCalendarEvent = async ({ where }: FindUniqueCalendarEventArgs) => {
  const filter = convertFilterForMongo(where);
  return CalendarEventModel.findOne(filter);
};

export const createCalendarEvent = async ({ data }: CalendarEventCreationArgs) => {
  const calendarEvent = await CalendarEventModel.create(data);
  if (calendarEvent) await postCreate(calendarEvent);
  return calendarEvent;
};

export const updateCalendarEvent = async ({ where, data }: CalendarEventUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  const calendarEvent = await CalendarEventModel.findOneAndUpdate(filter, data, {
    returnDocument: "after",
  });
  // NOTE: This update fails if it's not awaited.
  calendarEvent &&
    (await UserModel.findOneAndUpdate(
      { _id: calendarEvent.userId, "calendarEvents._id": calendarEvent._id },
      {
        $set: { "calendarEvents.$": { ...calendarEvent } },
      }
    ));
  if (calendarEvent) await postUpdate(calendarEvent);
  return calendarEvent;
};

export const upsertCalendarEvent = async ({ where, data }: CalendarEventUpsertionArgs) => {
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
  if (calendarEvent) {
    if (!calendarEventUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(calendarEvent);
    } else {
      await postUpdate(calendarEvent);
    }
  }
  return calendarEvent;
};
