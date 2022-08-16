import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";

const definition: Definition = {
  name: "book",
  fields: {
    isbn: { label: "ISBN", ...OPTIONAL_STRING },
    isbn13: { label: "ISBN13", ...OPTIONAL_STRING },
    title: REQUIRED_STRING,
    slug: REQUIRED_STRING,
    description: OPTIONAL_STRING,
    authorNames: { required: true, type: "Array", typeArg: "String" },
    authorNamesLf: { required: true, type: "Array", typeArg: "String" },
    publicationYear: { required: false, type: "Int" },
    originalPublicationYear: { required: false, type: "Int" },
    // archivedAt: { required: false, type: "DateTime" },
    // authorships?: Authorship[];
    // readings?: Reading[];
    // shelvings?: Shelving[];
  },
};

export default definition;
