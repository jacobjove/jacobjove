import * as TypeGraphQL from "type-graphql-v2-fork";

export enum CalendarProvider {
  google = "google",
  apple = "apple",
}
TypeGraphQL.registerEnumType(CalendarProvider, {
  name: "CalendarProvider",
  description: undefined,
});
