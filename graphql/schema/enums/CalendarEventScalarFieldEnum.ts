import * as TypeGraphQL from "type-graphql-v2-fork";

export enum CalendarEventScalarFieldEnum {
  id = "id",
  uid = "uid",
  remoteId = "remoteId",
  calendarId = "calendarId",
  scheduleId = "scheduleId",
  habitId = "habitId",
  taskId = "taskId",
  title = "title",
  start = "start",
  end = "end",
  allDay = "allDay",
  notes = "notes",
  canceled = "canceled",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  archivedAt = "archivedAt",
}
TypeGraphQL.registerEnumType(CalendarEventScalarFieldEnum, {
  name: "CalendarEventScalarFieldEnum",
  description: undefined,
});
