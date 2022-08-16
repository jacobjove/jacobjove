import Definition, {
  // REQUIRED_STRING,
  OPTIONAL_STRING,
} from "@/graphql/schema/definition";

const definition: Definition = {
  name: "shelving",
  fields: {
    bookId: { required: true, type: "ID" },
    shelfId: { required: true, type: "ID" },
    position: { required: true, type: "Int" },
    rationale: OPTIONAL_STRING,
    // archivedAt: { required: false, type: "DateTime" },
  },
};

export default definition;
