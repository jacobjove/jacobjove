/* Edit this file to add a non-default post-save hook for the Task type. */

import { DocumentType } from "@typegoose/typegoose";
import Task from "@web/generated/types/Task";
import { upsertCalendarEvent } from "@web/generated/shortcuts/calendarEvent.shortcuts";
import mongoosePromise from "@web/lib/mongodb";
import { addMinutes } from "date-fns";
import User from "../../User";

export const postUpdate = async (task: DocumentType<Task>) => {
  console.warn(">>> postUpdate task");
  if (task.plannedStartDate) {
    const mongoose = await mongoosePromise;
    const UserModel = mongoose.model("User");
    const taskId = task.id ?? task._id.toHexString();
    const user: User | null = await UserModel.findById(task.userId);
    if (!user) throw new Error(`Invalid user id: ${task.userId}`);
    console.warn("Attempting to upsert calendar event");
    await upsertCalendarEvent({
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
  return task;
};
