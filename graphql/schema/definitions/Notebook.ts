import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";

const notebookFields = ["userId", "title", "description", "public"] as const;

type NotebookFields = typeof notebookFields[number];

const definition: Definition<NotebookFields> = {
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
