import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";

const definition: Definition = {
  name: "list",
  fields: {
    userId: { required: true, type: "ID", typeCast: "ObjectId" },
    name: REQUIRED_STRING,
    description: OPTIONAL_STRING,
    fields: { required: true, type: "Map", typeCast: "JSON" },
    // archivedAt: { required: false, type: "DateTime", typeCast: "DateTime" },
  },
};

export default definition;
