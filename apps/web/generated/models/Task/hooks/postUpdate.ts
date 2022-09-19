/* Edit this file to add a non-default post-save hook for the Task type. */

import { Task } from "@web/generated/interfaces";
import { User } from "@web/generated/interfaces/User";
import TaskDocument from "@web/generated/models/Task/document";
import { upsertCalendarEvent } from "@web/generated/shortcuts/calendarEvent.shortcuts";
import mongoosePromise from "@web/lib/mongodb";
import { addMinutes } from "date-fns";
import { Model } from "mongoose";

export const postUpdate = async (_task: Task | TaskDocument, updatedFields: any) => {
  const task: Task = _task instanceof Model ? (_task as TaskDocument).toObject() : _task;
  const mongoose = await mongoosePromise;
  const UserModel = mongoose.model("User");
  const user: User | null = await UserModel.findOneAndUpdate(
    { _id: task.userId, "tasks._id": task._id },
    {
      $set: Object.fromEntries(
        Object.entries(updatedFields).map(([key, value]) => [`tasks.$.${key}`, value])
      ),
    }
  );
  if (!user) throw new Error(`Invalid user id: ${task.userId}`);
  if (task.plannedStartDate) {
    const taskId = task._id.toHexString();
    await upsertCalendarEvent({
      where: { taskId },
      data: {
        userId: user._id.toHexString(),
        calendarId: user.settings.defaultCalendarId,
        taskId,
        title: task.title,
        start: task.plannedStartDate,
        ...(task.expectedDuration && {
          end: addMinutes(task.plannedStartDate, task.expectedDuration),
        }),
      },
    });
  }
  return task;
};
