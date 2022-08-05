import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";

const definition: Definition = {
  name: "calendar",
  fields: {
    userId: { required: true, type: "ID", typeCast: "ObjectId" },
    name: REQUIRED_STRING,
    color: OPTIONAL_STRING,
    provider: OPTIONAL_STRING,
    remoteId: { required: false, type: "String", typeCast: "String" },
    syncToken: { required: false, type: "String", typeCast: "String" },
    accountId: { required: false, type: "ID", typeCast: "ObjectId" },
    primary: { required: false, type: "Boolean", typeCast: "Boolean" },
    public: { required: false, type: "Boolean", typeCast: "Boolean" },
    enabled: { required: false, type: "Boolean", typeCast: "Boolean", default: true },
    archivedAt: { required: false, type: "DateTime", typeCast: "DateTime" },
  },
};

export default definition;
