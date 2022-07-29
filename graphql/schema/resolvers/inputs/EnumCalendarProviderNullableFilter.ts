import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../../enums/CalendarProvider";
import { NestedEnumCalendarProviderNullableFilter } from "../inputs/NestedEnumCalendarProviderNullableFilter";

@TypeGraphQL.InputType("EnumCalendarProviderNullableFilter", {
  isAbstract: true,
})
export class EnumCalendarProviderNullableFilter {
  @TypeGraphQL.Field(() => CalendarProvider, { nullable: true })
  equals?: "google" | "apple" | undefined;

  @TypeGraphQL.Field(() => [CalendarProvider], { nullable: true })
  in?: Array<"google" | "apple"> | undefined;

  @TypeGraphQL.Field(() => [CalendarProvider], { nullable: true })
  notIn?: Array<"google" | "apple"> | undefined;

  @TypeGraphQL.Field(() => NestedEnumCalendarProviderNullableFilter, { nullable: true })
  not?: NestedEnumCalendarProviderNullableFilter | undefined;
}
