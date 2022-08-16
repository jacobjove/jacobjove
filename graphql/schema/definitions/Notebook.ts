import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";

const definition: Definition = {
  name: "notebook",
  fields: {
    userId: { required: true, type: "ID" },
    title: REQUIRED_STRING,
    description: OPTIONAL_STRING,
    public: { required: false, type: "Boolean" },
    // archivedAt: { required: false, type: "DateTime" },
  },
};

export default definition;
