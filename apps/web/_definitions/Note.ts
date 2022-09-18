import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@web/graphql/schema/definition";

const noteFields = ["userId", "notebookId", "title", "body", "public"] as const;

type NoteFields = typeof noteFields[number];

const definition: Definition<NoteFields> = {
  name: "note",
  fields: {
    userId: { required: true, type: "ID", ref: "User" },
    notebookId: { required: true, type: "ID", ref: "Notebook" },
    title: REQUIRED_STRING,
    body: { ...OPTIONAL_STRING, default: "" },
    public: { required: false, type: "Boolean" },
    // archivedAt: { required: false, type: "DateTime" },
  },
};

export default definition;
