import Definition, {
  // REQUIRED_STRING,
  OPTIONAL_STRING,
} from "@/graphql/schema/definition";

const definition: Definition = {
  name: "shelving",
  fields: {
    bookId: { required: true, type: "ID", typeCast: "ObjectId" },
    shelfId: { required: true, type: "ID", typeCast: "ObjectId" },
    position: { required: true, type: "Number", typeCast: "Int" },
    rationale: OPTIONAL_STRING,
    archivedAt: { required: false, type: "DateTime", typeCast: "DateTime" },
  },
};

export default definition;
