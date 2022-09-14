import { postCreate, postUpdate } from "@web/generated/types/Task/hooks";
import TaskModel from "@web/generated/models/TaskModel";
import UserModel from "@web/generated/models/UserModel";
import {
  TaskCreationArgs,
  TaskUpdateArgs,
  TaskUpsertionArgs,
  FindUniqueTaskArgs,
} from "@web/graphql/generated/args/task.args";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findTask = async ({ where }: FindUniqueTaskArgs) => {
  const filter = convertFilterForMongo(where);
  return TaskModel.findOne(filter);
};

export const createTask = async ({ data }: TaskCreationArgs) => {
  const task = await TaskModel.create(data);
  if (task) await postCreate(task);
  return task;
};

export const updateTask = async ({ where, data }: TaskUpdateArgs) => {
  console.warn(">>> updateTask shortcut");
  const filter = convertFilterForMongo(where);
  console.warn(">>> updateTask filter", filter);
  const task = await TaskModel.findOneAndUpdate(filter, data, { returnDocument: "after" });
  console.warn(">>> updateTask result", task);
  // NOTE: This update fails if it's not awaited.
  task &&
    (await UserModel.findOneAndUpdate(
      { _id: task.userId, "tasks._id": task._id },
      {
        $set: { "tasks.$": { ...task } },
      }
    ));
  if (task) await postUpdate(task);
  return task;
};

export const upsertTask = async ({ where, data }: TaskUpsertionArgs) => {
  const taskUpsertResult = await TaskModel.findOneAndUpdate(convertFilterForMongo(where), data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const task = taskUpsertResult.value;
  if (task) {
    if (!taskUpsertResult.lastErrorObject?.updatedExisting) {
      await postCreate(task);
    } else {
      await postUpdate(task);
    }
  }
  return task;
};
