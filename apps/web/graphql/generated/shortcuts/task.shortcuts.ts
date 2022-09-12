import { postSave } from "@web/graphql/generated/types/Task/hooks";
import TaskModel from "@web/graphql/generated/models/TaskModel";
import { TaskCreationArgs, TaskUpsertionArgs } from "@web/graphql/generated/args/task.args";

export const createTask = async (args: TaskCreationArgs) => {
  const task = await TaskModel.create(args);
  if (task) postSave(task);
  return task;
};

export const upsertTask = async (args: TaskUpsertionArgs) => {
  const { where, data } = args;
  const taskUpsertResult = await TaskModel.findOneAndUpdate(where, data, {
    upsert: true,
    new: true,
    returnDocument: "after",
    runValidators: true,
    setDefaultsOnInsert: true,
    rawResult: true,
  });
  const task = taskUpsertResult.value;
  if (task && !taskUpsertResult.lastErrorObject?.updatedExisting) {
    postSave(task);
  }
  return task;
};
