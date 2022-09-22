/* Edit this file to add a non-default post-save hook for the Task type. */

import { User } from "@web/generated/interfaces";
import { Task } from "@web/generated/interfaces/Task";
import { upsertCalendarEvent } from "@web/generated/shortcuts/calendarEvent.shortcuts";
import mongoosePromise from "@web/lib/mongodb";
import { addMinutes } from "date-fns";
import { HydratedDocument, Model } from "mongoose";

export const postCreate = async (task: HydratedDocument<Task> | Task) => {
  const mongoose = await mongoosePromise;
  const UserModel = mongoose.model("User") as Model<User>;
  if (!task?.archivedAt) {
    // TODO
    const user = await UserModel.findOneAndUpdate({ _id: task.userId }, { $push: { tasks: task } });
    if (user && task.plannedStartDate) {
      // const CalendarEventModel = mongoose.model("CalendarEvent") as Model<CalendarEvent>;
      const taskId = task._id.toHexString();
      upsertCalendarEvent({
        where: { taskId },
        data: {
          userId: task.userId.toHexString(),
          calendarId: user.settings.defaultCalendarId as string, // TODO
          taskId,
          title: task.title,
          start: task.plannedStartDate,
          ...(task.expectedDuration && {
            end: addMinutes(task.plannedStartDate, task.expectedDuration),
          }),
        },
      });
    }
  }
};
