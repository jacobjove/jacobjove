import * as TypeGraphQL from "type-graphql";

export enum ScheduleTemplateScalarFieldEnum {
  id = "id",
  frequency = "frequency",
  multiplier = "multiplier",
  chron = "chron",
}
TypeGraphQL.registerEnumType(ScheduleTemplateScalarFieldEnum, {
  name: "ScheduleTemplateScalarFieldEnum",
  description: undefined,
});
