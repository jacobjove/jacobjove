import UserModel from "@/graphql/generated/models/user.model";
import Definition, { Field, OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";
import { DocumentType } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Model } from "../types";

const taskFields = [
  "title",
  "description",
  "plannedStartDate",
  "dueDate",
  "userId",
  "parentId",
  "habitId",
  "rank",
  "completedAt",
] as const;

type TaskFields = typeof taskFields[number];

const fields: Record<TaskFields, Field> = {
  title: REQUIRED_STRING,
  description: { ...OPTIONAL_STRING, widget: { multiline: true, fullWidth: true } },
  plannedStartDate: { required: false, type: "DateTime" },
  dueDate: { required: false, type: "DateTime" },
  userId: { required: true, type: "ID" },
  parentId: { required: false, type: "ID" },
  habitId: { required: false, type: "ID" },
  rank: { required: true, type: "Int", initialize: true },
  completedAt: { required: false, type: "DateTime" },
};

const definition: Definition<TaskFields> = {
  name: "task",
  fields,
  hooks: {
    save: {
      post: async (instance: DocumentType<Partial<Model> & { [key in TaskFields]?: unknown }>) => {
        if (instance && instance.userId && !instance?.archivedAt) {
          UserModel.updateOne(
            {
              _id: new ObjectId(instance.userId as string | ObjectId),
              "tasks.id": instance.id ?? instance._id.toHexString(),
            },
            { $set: { "users.$": { ...instance } } }
          ).catch(console.error);
        }
      },
    },
  },
};

export default definition;
