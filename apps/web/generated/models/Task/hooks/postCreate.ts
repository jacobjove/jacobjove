/* Edit this file to add a non-default post-save hook for the Task type. */

import { Task } from "@web/generated/interfaces/Task";
import { TaskModel } from "@web/generated/models";
import { upsertCalendarEvent } from "@web/generated/shortcuts/calendarEvent.shortcuts";
import { findUser } from "@web/generated/shortcuts/user.shortcuts";
import mongoosePromise from "@web/lib/mongodb";
import { addMinutes } from "date-fns";
import { ObjectId } from "mongodb";

function create() {
  return TaskModel.create<Task>({} as Task);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (task: Instance) => {
  console.error("postCreate", task);
  const mongoose = await mongoosePromise;
  const UserModel = mongoose.model("User");
  const user = await findUser({ where: { id: task.userId.toHexString() } });
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
};
