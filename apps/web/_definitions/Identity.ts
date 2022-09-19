import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@web/graphql/schema/definition";

const identityFields = ["userId", "name", "description"] as const;

type IdentityFields = typeof identityFields[number];

const definition: Definition<IdentityFields> = {
  name: "identity",
  fields: {
    userId: { required: true, type: "ID", ref: "User" },
    name: REQUIRED_STRING,
    description: OPTIONAL_STRING,
    // archivedAt: { required: false, type: "DateTime" },
  },
};

export default definition;
