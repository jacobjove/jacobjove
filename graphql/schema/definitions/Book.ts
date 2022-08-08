import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";

const definition: Definition = {
  name: "book",
  fields: {
    isbn: { ...OPTIONAL_STRING },
    isbn13: { ...OPTIONAL_STRING },
    title: REQUIRED_STRING,
    slug: REQUIRED_STRING,
    description: OPTIONAL_STRING,
    authorNames: { required: true, type: "String[]", typeCast: "StringArray" },
    authorNamesLf: { required: true, type: "String[]", typeCast: "StringArray" },
    publicationYear: { required: false, type: "Number", typeCast: "Int" },
    originalPublicationYear: { required: false, type: "Number", typeCast: "Int" },
    // archivedAt: { required: false, type: "DateTime", typeCast: "DateTime" },
    // authorships?: Authorship[];
    // readings?: Reading[];
    // shelvings?: Shelving[];
  },
};

export default definition;
