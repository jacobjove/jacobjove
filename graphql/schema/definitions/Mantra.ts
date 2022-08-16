import Definition, { REQUIRED_STRING } from "@/graphql/schema/definition";

const definition: Definition = {
  name: "mantra",
  fields: {
    userId: { required: true, type: "ID" },
    content: REQUIRED_STRING,
    // archivedAt: { required: false, type: "DateTime" },
  },
};

export default definition;
