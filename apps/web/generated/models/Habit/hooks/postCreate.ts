/* Edit this file to add a non-default post-save hook for the Habit type. */

import { Habit, Task, User } from "@web/generated/interfaces";
import mongoosePromise from "@web/lib/mongodb";
import cronParser from "cron-parser";
import { addDays } from "date-fns";
import { HydratedDocument, Model } from "mongoose";

export const postCreate = async (habit: Habit | HydratedDocument<Habit>) => {
  if (habit.archivedAt) return;
  const mongoose = await mongoosePromise;
  const UserModel = mongoose.model("User") as Model<User>;
  await UserModel.findOneAndUpdate({ _id: habit.userId }, { $push: { habits: habit } });
  if (habit.cron) {
    const TaskModel = mongoose.model("Task") as Model<Task>;
    const now = new Date();
    const interval = cronParser.parseExpression(habit.cron, {
      currentDate: now,
      endDate: addDays(now, 30),
      iterator: true,
    });
    const nextOccurrence = interval.next() as IteratorResult<cronParser.CronDate>;
    if (nextOccurrence.value) {
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
};
