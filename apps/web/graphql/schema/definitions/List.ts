import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@web/graphql/schema/definition";

const listFields = ["userId", "name", "description", "fields"] as const;

type ListFields = typeof listFields[number];

const definition: Definition<ListFields> = {
  name: "list",
  fields: {
    userId: { required: true, type: "ID" },
    name: REQUIRED_STRING,
    description: OPTIONAL_STRING,
    fields: { required: true, type: "Map", typeCast: "JSON" },
    // archivedAt: { required: false, type: "DateTime" },
  },
};

export default definition;
