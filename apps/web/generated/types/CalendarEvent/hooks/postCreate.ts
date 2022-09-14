/* Edit this file to add a non-default post-save hook for the CalendarEvent type. */

import mongoosePromise from "@web/lib/mongodb";
import { ObjectId } from "mongodb";
import CalendarEvent from "..";
import { findUser } from "@web/generated/shortcuts/user.shortcuts";

export const postCreate = async (calendarEvent: CalendarEvent) => {
  const mongoose = await mongoosePromise;
  const UserModel = mongoose.model("User");
  const user = await findUser({ where: { id: calendarEvent.userId } });
  if (!user) throw new Error(`Invalid user id: ${calendarEvent.userId}`);
  if (!calendarEvent?.archivedAt) {
    await UserModel.updateOne(
      { _id: new ObjectId(calendarEvent.userId as string | ObjectId) },
      { $push: { calendarEvents: calendarEvent } }
    );
  }
  return calendarEvent;
};
