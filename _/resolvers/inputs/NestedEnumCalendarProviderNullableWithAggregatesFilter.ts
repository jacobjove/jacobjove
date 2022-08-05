import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../../enums/CalendarProvider";
import { NestedEnumCalendarProviderNullableFilter } from "../inputs/NestedEnumCalendarProviderNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";

@TypeGraphQL.InputType("NestedEnumCalendarProviderNullableWithAggregatesFilter", {
  isAbstract: true,
})
export class NestedEnumCalendarProviderNullableWithAggregatesFilter {
  @TypeGraphQL.Field(() => CalendarProvider, { nullable: true })
  equals?: "google" | "apple" | undefined;

  @TypeGraphQL.Field(() => [CalendarProvider], { nullable: true })
  in?: Array<"google" | "apple"> | undefined;

  @TypeGraphQL.Field(() => [CalendarProvider], { nullable: true })
  notIn?: Array<"google" | "apple"> | undefined;

  @TypeGraphQL.Field(() => NestedEnumCalendarProviderNullableWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumCalendarProviderNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(() => NestedEnumCalendarProviderNullableFilter, { nullable: true })
  _min?: NestedEnumCalendarProviderNullableFilter | undefined;

  @TypeGraphQL.Field(() => NestedEnumCalendarProviderNullableFilter, { nullable: true })
  _max?: NestedEnumCalendarProviderNullableFilter | undefined;
}
