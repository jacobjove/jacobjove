import Definition, { REQUIRED_STRING, OPTIONAL_STRING } from "@/graphql/schema/definition";

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
    archivedAt: { required: false, type: "DateTime", typeCast: "DateTime" },
  },
};

export default definition;
