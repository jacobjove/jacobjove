import Definition, {
  OPTIONAL_BOOLEAN,
  OPTIONAL_STRING,
  REQUIRED_STRING,
} from "@web/graphql/schema/definition";

const calendarEventFields = [
  "userId",
  "calendarId",
  "remoteId",
  "scheduleId",
  "habitId",
  "taskId",
  "title",
  "start",
  "end",
  "allDay",
  "notes",
  "canceled",
] as const;

type CalendarEventFields = typeof calendarEventFields[number];

const definition: Definition<CalendarEventFields> = {
  name: "calendarEvent",
  fields: {
    userId: { required: true, type: "ID" },
    calendarId: { required: true, type: "ID", initialize: true },
    remoteId: { required: false, type: "String" },
    scheduleId: { required: false, type: "ID" },
    habitId: { required: false, type: "ID" },
    taskId: { required: false, type: "ID", unique: true },
    title: REQUIRED_STRING,
    start: { required: true, type: "DateTime" },
    end: { required: false, type: "DateTime" },
    allDay: { ...OPTIONAL_BOOLEAN, default: false },
    notes: OPTIONAL_STRING,
    canceled: { required: false, type: "Boolean" },
  },
};

export default definition;
