/* Edit this file to add a non-default post-save hook for the Habit type. */

import { Habit, User } from "@web/generated/interfaces";
import mongoosePromise from "@web/lib/mongodb";
import { HydratedDocument, Model } from "mongoose";

export const postCreate = async (habit: Habit | HydratedDocument<Habit>) => {
  if (habit.archivedAt) return;
  const mongoose = await mongoosePromise;
  const UserModel = mongoose.model("User") as Model<User>;
  await UserModel.findOneAndUpdate({ _id: habit.userId }, { $push: { habits: habit } });
};
