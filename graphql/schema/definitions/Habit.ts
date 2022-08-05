import Definition, { REQUIRED_STRING, OPTIONAL_STRING } from "@/graphql/schema/definition";

const definition: Definition = {
  name: "habit",
  fields: {
    userId: { required: true, type: "ID", typeCast: "ObjectId" },
    name: REQUIRED_STRING,
    public: { required: false, type: "Boolean", typeCast: "Boolean", default: false },
    chronString: OPTIONAL_STRING,
    defaultDurationInMinutes: { required: false, type: "Number", typeCast: "Int" },
    archivedAt: { required: false, type: "DateTime", typeCast: "DateTime" },
  },
};

export default definition;
