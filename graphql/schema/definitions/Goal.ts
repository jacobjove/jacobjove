import Definition, { REQUIRED_STRING } from "@/graphql/schema/definition";

const definition: Definition = {
  name: "goal",
  fields: {
    habitId: { required: false, type: "ID" },
    parentId: { required: false, type: "ID" },
    description: REQUIRED_STRING,
    // archivedAt: { required: false, type: "DateTime" },
  },
};

export default definition;
