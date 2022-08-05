import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";

const definition: Definition = {
  name: "calendarEvent",
  fields: {
    userId: { required: true, type: "ID", typeCast: "ObjectId" },
    calendarId: { required: true, type: "ID", typeCast: "ObjectId" },
    remoteId: { required: false, type: "String", typeCast: "String" },
    scheduleId: { required: false, type: "ID", typeCast: "ObjectId" },
    habitId: { required: false, type: "ID", typeCast: "ObjectId" },
    taskId: { required: false, type: "ID", typeCast: "ObjectId" },
    title: REQUIRED_STRING,
    start: { required: true, type: "DateTime", typeCast: "DateTime" },
    end: { required: false, type: "DateTime", typeCast: "DateTime" },
    allDay: { required: true, type: "Boolean", typeCast: "Boolean", default: false },
    notes: OPTIONAL_STRING,
    canceled: { required: false, type: "Boolean", typeCast: "Boolean" },
    archivedAt: { required: false, type: "DateTime", typeCast: "DateTime" },
  },
};

export default definition;
