import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";

const definition: Definition = {
  name: "value",
  fields: {
    userId: { required: true, type: "ID", typeCast: "ObjectId" },
    name: REQUIRED_STRING,
    description: OPTIONAL_STRING,
    archivedAt: { required: false, type: "DateTime", typeCast: "DateTime" },
  },
};

export default definition;
