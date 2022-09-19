import Definition, { REQUIRED_STRING } from "@web/graphql/schema/definition";

const mantraFields = ["userId", "content"] as const;

type MantraFields = typeof mantraFields[number];

const definition: Definition<MantraFields> = {
  name: "mantra",
  fields: {
    userId: { required: true, type: "ID", ref: "User" },
    content: REQUIRED_STRING,
    // archivedAt: { required: false, type: "DateTime" },
  },
};

export default definition;
