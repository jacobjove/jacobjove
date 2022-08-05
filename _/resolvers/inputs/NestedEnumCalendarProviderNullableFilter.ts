import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../../enums/CalendarProvider";

@TypeGraphQL.InputType("NestedEnumCalendarProviderNullableFilter", { isAbstract: true })
export class NestedEnumCalendarProviderNullableFilter {
  @TypeGraphQL.Field(() => CalendarProvider, { nullable: true })
  equals?: "google" | "apple" | undefined;

  @TypeGraphQL.Field(() => [CalendarProvider], { nullable: true })
  in?: Array<"google" | "apple"> | undefined;

  @TypeGraphQL.Field(() => [CalendarProvider], { nullable: true })
  notIn?: Array<"google" | "apple"> | undefined;

  @TypeGraphQL.Field(() => NestedEnumCalendarProviderNullableFilter, { nullable: true })
  not?: NestedEnumCalendarProviderNullableFilter | undefined;
}
