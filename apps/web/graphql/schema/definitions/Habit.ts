import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@web/graphql/schema/definition";

const HABIT_FIELDS = [
  "userId",
  "name",
  "description",
  "public",
  "cron",
  "defaultDurationInMinutes",
] as const;

type HabitFields = typeof HABIT_FIELDS[number];

const HABIT_DEFINITION: Definition<HabitFields> = {
  name: "habit",
  fields: {
    userId: { required: true, type: "ID" },
    name: REQUIRED_STRING,
    description: OPTIONAL_STRING,
    public: { required: false, type: "Boolean", default: false },
    cron: OPTIONAL_STRING,
    defaultDurationInMinutes: { required: false, type: "Int" },
    // archivedAt: { required: false, type: "DateTime" },
  },
};

export default HABIT_DEFINITION;
