/* Edit this file to add a non-default post-save hook for the CalendarEvent type. */

import { CalendarEvent } from "@web/generated/interfaces/CalendarEvent";
import { findUser } from "@web/generated/shortcuts/user.shortcuts";
import mongoosePromise from "@web/lib/mongodb";

export const postUpdate = async (calendarEvent: CalendarEvent, updatedFields: any) => {
  if (!calendarEvent?.archivedAt) {
    const mongoose = await mongoosePromise;
    const UserModel = mongoose.model("User");
    const user = await findUser({ where: { id: calendarEvent.userId.toHexString() } });
    if (!user) throw new Error(`Invalid user id: ${calendarEvent.userId}`);
    await UserModel.updateOne(
      { _id: calendarEvent.userId, "calendarEvents._id": calendarEvent._id },
      {
        $set: Object.fromEntries(
          Object.entries(updatedFields).map(([key, value]) => [`calendarEvents.$.${key}`, value])
        ),
      }
    );
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
