/* Edit this file to add a non-default post-save hook for the Task type. */

import { Task, User } from "@web/generated/interfaces";
import { upsertCalendarEvent } from "@web/generated/shortcuts/calendarEvent.shortcuts";
import mongoosePromise from "@web/lib/mongodb";
import cronParser from "cron-parser";
import { addDays, addMinutes } from "date-fns";
import { Model, Types } from "mongoose";

export const postUpdate = async (task: Task, updatedFields: Partial<Task>) => {
  const mongoose = await mongoosePromise;
  const UserModel = mongoose.model("User") as Model<User>;
  const user: User | null = await UserModel.findOneAndUpdate(
    { _id: task.userId, "tasks._id": task._id },
    {
      $set: Object.fromEntries(
        Object.entries(updatedFields).map(([key, value]) => [`tasks.$.${key}`, value])
      ),
    }
  );
  if (!user) throw new Error(`Invalid user id: ${task.userId}`);
  if (task.completedAt && task.habitId && Object.keys(updatedFields).includes("completedAt")) {
    const habitId = task.habitId as Types.ObjectId;
    const habit = user.habits.find((h) => h._id.equals(habitId));
    if (!habit) throw new Error(`Invalid habit id: ${habitId}`);
    if (habit.cron) {
      const TaskModel = mongoose.model("Task") as Model<Task>;
      const now = new Date();
      const interval = cronParser.parseExpression(habit.cron, {
        currentDate: now,
        endDate: addDays(now, 30),
        iterator: true,
      });
      let nextOccurrence = interval.next() as IteratorResult<cronParser.CronDate>;
      if (task.plannedStartDate && task.plannedStartDate > now && !nextOccurrence.done) {
        nextOccurrence = interval.next() as IteratorResult<cronParser.CronDate>;
      }
      if (nextOccurrence.value) {
        if (task.plannedStartDate && task.plannedStartDate > now) {
          nextOccurrence = interval.next() as IteratorResult<cronParser.CronDate>;
        }
        const taskData: Omit<Task, "_id" | "id" | "createdAt" | "updatedAt"> = {
          title: habit.name,
          habitId: habit._id,
          userId: habit.userId,
          plannedStartDate: nextOccurrence.value.toDate(),
          rank: -1, // TODO
        };
        await TaskModel.create(taskData);
      } else {
        console.error("Failed to create task for habit", habit.id);
      }
    }
  }
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
