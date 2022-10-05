import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@common/definition";

const valueFields = ["userId", "name", "description"] as const;

type ValueFields = typeof valueFields[number];

const definition: Definition<ValueFields> = {
  name: "value",
  fields: {
    userId: { required: true, type: "ID", ref: "User" },
    name: REQUIRED_STRING,
    description: OPTIONAL_STRING,
    // archivedAt: { required: false, type: "DateTime" },
  },
};

export default definition;
