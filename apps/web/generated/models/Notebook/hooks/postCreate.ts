/* Edit this file to add a non-default post-save hook for the Notebook type. */

import { User } from "@web/generated/interfaces";
import { Notebook } from "@web/generated/interfaces/Notebook";
import mongoosePromise from "@web/lib/mongodb";
import { Model } from "mongoose";

export const postCreate = async (notebook: Notebook) => {
  const mongoose = await mongoosePromise;
  const UserModel = mongoose.model("User") as Model<User>;
  if (!notebook?.archivedAt) {
    // TODO
    await UserModel.updateOne({ _id: notebook.userId }, { $push: { notebooks: notebook } });
  }
};
