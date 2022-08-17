import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";

const habitFields = [
  "userId",
  "name",
  "public",
  "chronString",
  "defaultDurationInMinutes",
] as const;

type HabitFields = typeof habitFields[number];

const definition: Definition<HabitFields> = {
  name: "habit",
  fields: {
    userId: { required: true, type: "ID" },
    name: REQUIRED_STRING,
    public: { required: false, type: "Boolean", default: false },
    chronString: OPTIONAL_STRING,
    defaultDurationInMinutes: { required: false, type: "Int" },
    // archivedAt: { required: false, type: "DateTime" },
  },
};

export default definition;
