import {
  FindUniqueTaskArgs,
  TaskCreationArgs,
  TaskUpdateArgs,
  TaskUpsertionArgs,
} from "@web/generated/graphql/args/task.args";
import TaskModel from "@web/generated/models/Task";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";

export const findTask = async ({ where }: FindUniqueTaskArgs) => {
  const filter = convertFilterForMongo(where);
  return TaskModel.findOne(filter).lean({ virtuals: true });
};

export const createTask = async ({ data }: TaskCreationArgs) => {
  return TaskModel.create([data]).then((results) => results[0]);
};

export const updateTask = async ({ where, data }: TaskUpdateArgs) => {
  const filter = convertFilterForMongo(where);
  return await TaskModel.findOneAndUpdate(filter, data, { returnDocument: "after" }).lean({
    virtuals: true,
  });
};

export const upsertTask = async ({ where, data }: TaskUpsertionArgs) => {
  const exists = await TaskModel.exists(where);
  return exists ? updateTask({ where, data }) : createTask({ data });
  /*
  const result: ModifyResult<Task> = await TaskModel.findOneAndUpdate(
    convertFilterForMongo(where),
    data,
    {
      upsert: true,
      new: true,
      returnDocument: "after",
      runValidators: true,
      setDefaultsOnInsert: true,
      rawResult: true,
    }
  ).lean({ virtuals: true });
  return result.value;
  */
};
