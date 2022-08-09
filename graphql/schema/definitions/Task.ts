import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";
import { ObjectId } from "mongodb";
import UserModel from "../../generated/models/user.model";

const definition: Definition = {
  name: "task",
  fields: {
    title: REQUIRED_STRING,
    description: OPTIONAL_STRING,
    plannedStartDate: { required: false, type: "DateTime", typeCast: "DateTime" },
    dueDate: { required: false, type: "DateTime", typeCast: "DateTime" },
    userId: { required: true, type: "ID", typeCast: "ObjectId" },
    parentId: { required: false, type: "ID", typeCast: "ObjectId" },
    habitId: { required: false, type: "ID", typeCast: "ObjectId" },
    rank: { required: true, type: "Number", typeCast: "Int" },
    completedAt: { required: false, type: "DateTime", typeCast: "DateTime" },
  },
  hooks: {
    save: {
      post: async (instance) => {
        if (instance && (instance as any)["userId"] && !instance?.archivedAt) {
          UserModel.updateOne(
            {
              _id: new ObjectId((instance as any).userId),
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
