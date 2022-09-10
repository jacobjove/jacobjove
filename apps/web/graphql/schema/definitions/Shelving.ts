import Definition, {
  // REQUIRED_STRING,
  OPTIONAL_STRING,
} from "@web/graphql/schema/definition";

const shelvingFields = ["bookId", "shelfId", "position", "rationale"] as const;

type ShelvingFields = typeof shelvingFields[number];

const definition: Definition<ShelvingFields> = {
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
