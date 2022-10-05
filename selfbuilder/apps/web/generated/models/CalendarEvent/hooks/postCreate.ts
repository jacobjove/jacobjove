/* Edit this file to add a non-default post-save hook for the CalendarEvent type. */

import { User } from "@web/generated/interfaces";
import { CalendarEvent } from "@web/generated/interfaces/CalendarEvent";
import mongoosePromise from "@web/lib/mongodb";
import { ObjectId } from "mongodb";
import { Model } from "mongoose";

export const postCreate = async (calendarEvent: CalendarEvent) => {
  const mongoose = await mongoosePromise;
  const UserModel = mongoose.model("User") as Model<User>;
  if (!calendarEvent?.archivedAt) {
    await UserModel.updateOne(
      { _id: new ObjectId(calendarEvent.userId as string | ObjectId) },
      { $push: { calendarEvents: calendarEvent } }
    );
  }
  return calendarEvent;
};
