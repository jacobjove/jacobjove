/* Edit this file to add a non-default post-save hook for the Task type. */

import mongoosePromise from "@web/lib/mongodb";
import { addMinutes } from "date-fns";
import { ObjectId } from "mongodb";
import Task from "..";
import { upsertCalendarEvent } from "@web/generated/shortcuts/calendarEvent.shortcuts";
import { findUser } from "@web/generated/shortcuts/user.shortcuts";

export const postCreate = async (task: Task) => {
  const mongoose = await mongoosePromise;
  const UserModel = mongoose.model("User");
  const user = await findUser({ where: { id: task.userId } });
  if (!user) throw new Error(`Invalid user id: ${task.userId}`);
  const taskId = task.id ?? task._id.toHexString();
  if (!task?.archivedAt) {
    UserModel.updateOne(
      {
        _id: new ObjectId(task.userId as string | ObjectId),
        "tasks.id": taskId,
      },
      { $set: { "users.$": { ...task } } }
    );
  }
  if (task.plannedStartDate) {
    upsertCalendarEvent({
      where: { taskId },
      data: {
        userId: task.userId,
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
};
