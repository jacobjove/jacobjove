import Definition from "@/graphql/schema/definition"; // OPTIONAL_STRING, // REQUIRED_STRING,

const listItemFields = ["userId", "listId", "data"] as const;

type ListItemFields = typeof listItemFields[number];

const definition: Definition<ListItemFields> = {
  name: "listItem",
  fields: {
    userId: { required: true, type: "ID" },
    listId: { required: true, type: "ID" },
    data: { required: true, type: "Map", typeCast: "JSON" },
    // archivedAt: { required: false, type: "DateTime" },
  },
};

export default definition;
