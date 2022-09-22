/* Edit this file to add a non-default post-save hook for the CalendarEvent type. */

import { User } from "@web/generated/interfaces";
import { CalendarEvent } from "@web/generated/interfaces/CalendarEvent";
import mongoosePromise from "@web/lib/mongodb";
import { Model } from "mongoose";

export const postUpdate = async (calendarEvent: CalendarEvent, updatedFields: any) => {
  if (!calendarEvent?.archivedAt) {
    const mongoose = await mongoosePromise;
    const UserModel = mongoose.model("User") as Model<User>;
    await UserModel.updateOne(
      { _id: calendarEvent.userId, "calendarEvents._id": calendarEvent._id },
      {
        $set: Object.fromEntries(
          Object.entries(updatedFields).map(([key, value]) => [`calendarEvents.$.${key}`, value])
        ),
      }
    );
    // TODO
    // if (task.plannedStartDate) {
    //   const taskId = task._id.toHexString();
    //   await upsertCalendarEvent({
    //     where: { taskId },
    //     data: {
    //       userId: user._id.toHexString(),
    //       calendarId: user.settings.defaultCalendarId,
    //       taskId,
    //       title: task.title,
    //       start: task.plannedStartDate,
    //       ...(task.expectedDuration && {
    //         end: addMinutes(task.plannedStartDate, task.expectedDuration),
    //       }),
    //     },
    //   });
    // }
  }
  return calendarEvent;
};
