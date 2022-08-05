import Definition, {
  REQUIRED_STRING,
  // OPTIONAL_STRING,
} from "@/graphql/schema/definition";

const definition: Definition = {
  name: "goal",
  fields: {
    habitId: { required: false, type: "ID", typeCast: "ObjectId" },
    parentId: { required: false, type: "ID", typeCast: "ObjectId" },
    description: REQUIRED_STRING,
    archivedAt: { required: false, type: "DateTime", typeCast: "DateTime" },
  },
};

export default definition;
