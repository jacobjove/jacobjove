/* Edit this file to add a non-default post-save hook for the Task type. */

import mongoosePromise from "@web/lib/mongodb";
import { ObjectId } from "mongodb";

export const postSave = async (task: any) => {
  if (task && task.userId && !task?.archivedAt) {
    const mongoose = await mongoosePromise;
    const UserModel = mongoose.model("User");
    UserModel.updateOne(
      {
        _id: new ObjectId(task.userId as string | ObjectId),
        "tasks.id": task.id ?? task._id.toHexString(),
      },
      { $set: { "users.$": { ...task } } }
    );
    console.log("Task.postSave");
  }
};
