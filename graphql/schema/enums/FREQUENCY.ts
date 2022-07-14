import * as TypeGraphQL from "type-graphql";

export enum FREQUENCY {
  MINUTE = "MINUTE",
  HOUR = "HOUR",
  DAY = "DAY",
  WEEK = "WEEK",
  MONTH = "MONTH",
  YEAR = "YEAR",
}
TypeGraphQL.registerEnumType(FREQUENCY, {
  name: "FREQUENCY",
  description: undefined,
});
