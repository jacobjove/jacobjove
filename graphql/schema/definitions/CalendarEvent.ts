import Definition, {
  OPTIONAL_BOOLEAN,
  OPTIONAL_STRING,
  REQUIRED_STRING,
} from "@/graphql/schema/definition";

const definition: Definition = {
  name: "calendarEvent",
  fields: {
    userId: { required: true, type: "ID" },
    calendarId: { required: true, type: "ID", initialize: true },
    remoteId: { required: false, type: "String" },
    scheduleId: { required: false, type: "ID" },
    habitId: { required: false, type: "ID" },
    taskId: { required: false, type: "ID" },
    title: REQUIRED_STRING,
    start: { required: true, type: "DateTime" },
    end: { required: false, type: "DateTime" },
    allDay: { ...OPTIONAL_BOOLEAN, default: false },
    notes: OPTIONAL_STRING,
    canceled: { required: false, type: "Boolean" },
    // archivedAt: { required: false, type: "DateTime" },
  },
};

export default definition;
