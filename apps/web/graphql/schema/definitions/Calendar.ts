import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@web/graphql/schema/definition";

const calendarFields = [
  "userId",
  "name",
  "color",
  "provider",
  "remoteId",
  "syncToken",
  "accountId",
  "primary",
  "public",
  "enabled",
] as const;
type CalendarFields = typeof calendarFields[number];

const definition: Definition<CalendarFields> = {
  name: "calendar",
  fields: {
    userId: { required: true, type: "ID" },
    name: REQUIRED_STRING,
    color: OPTIONAL_STRING,
    provider: OPTIONAL_STRING,
    remoteId: { required: false, type: "String" },
    syncToken: { required: false, type: "String" },
    accountId: { required: false, type: "ID" },
    primary: { required: false, type: "Boolean" },
    public: { required: false, type: "Boolean" },
    enabled: { required: false, type: "Boolean", default: true },
  },
};

export default definition;
