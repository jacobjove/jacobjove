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
    userId: { required: true, type: "ID", ref: "User" },
    calendarId: { required: true, type: "ID", ref: "Calendar", initialize: true },
    remoteId: { required: false, type: "String" },
    scheduleId: { required: false, type: "ID", ref: "Schedule" },
    habitId: { required: false, type: "ID", ref: "Habit" },
    taskId: { required: false, type: "ID", ref: "Task", unique: true },
    title: REQUIRED_STRING,
    start: { required: true, type: "DateTime" },
    end: { required: false, type: "DateTime" },
    allDay: { ...OPTIONAL_BOOLEAN, default: false },
    notes: OPTIONAL_STRING,
    canceled: { required: false, type: "Boolean" },
  },
};

export default definition;
