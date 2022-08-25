/* Edit this file to add a non-default post-save hook for the Task type. */

import { ObjectId } from "mongodb";

export const postSave = async (task: any) => {
  if (task && task.userId && !task?.archivedAt) {
    const UserModel = await import(`${process.env.BASE_DIR}/graphql/generated/models/UserModel`);
    UserModel.updateOne(
      {
        _id: new ObjectId(task.userId as string | ObjectId),
        "tasks.id": task.id ?? task._id.toHexString(),
      },
      { $set: { "users.$": { ...task } } }
    ).catch(console.error);
  }
};
