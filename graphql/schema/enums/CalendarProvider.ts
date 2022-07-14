import * as TypeGraphQL from "type-graphql";

export enum CalendarProvider {
  google = "google",
  apple = "apple",
}
TypeGraphQL.registerEnumType(CalendarProvider, {
  name: "CalendarProvider",
  description: undefined,
});
