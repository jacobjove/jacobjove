import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../../enums/CalendarProvider";

@TypeGraphQL.InputType("NestedEnumCalendarProviderNullableFilter", {
  isAbstract: true,
})
export class NestedEnumCalendarProviderNullableFilter {
  @TypeGraphQL.Field((_type) => CalendarProvider, { nullable: true })
  equals?: "google" | "apple" | undefined;

  @TypeGraphQL.Field((_type) => [CalendarProvider], { nullable: true })
  in?: Array<"google" | "apple"> | undefined;

  @TypeGraphQL.Field((_type) => [CalendarProvider], { nullable: true })
  notIn?: Array<"google" | "apple"> | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumCalendarProviderNullableFilter, { nullable: true })
  not?: NestedEnumCalendarProviderNullableFilter | undefined;
}
