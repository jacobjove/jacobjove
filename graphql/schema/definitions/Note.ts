import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";

const definition: Definition = {
  name: "note",
  fields: {
    userId: { required: true, type: "ID", typeCast: "ObjectId" },
    notebookId: { required: true, type: "ID", typeCast: "ObjectId" },
    title: REQUIRED_STRING,
    body: { ...OPTIONAL_STRING, default: '""' },
    public: { required: false, type: "Boolean" },
    // archivedAt: { required: false, type: "DateTime", typeCast: "DateTime" },
  },
};

export default definition;
