import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../../enums/CalendarProvider";
import { NestedEnumCalendarProviderNullableFilter } from "../inputs/NestedEnumCalendarProviderNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";

@TypeGraphQL.InputType("NestedEnumCalendarProviderNullableWithAggregatesFilter", {
  isAbstract: true,
})
export class NestedEnumCalendarProviderNullableWithAggregatesFilter {
  @TypeGraphQL.Field((_type) => CalendarProvider, { nullable: true })
  equals?: "google" | "apple" | undefined;

  @TypeGraphQL.Field((_type) => [CalendarProvider], { nullable: true })
  in?: Array<"google" | "apple"> | undefined;

  @TypeGraphQL.Field((_type) => [CalendarProvider], { nullable: true })
  notIn?: Array<"google" | "apple"> | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumCalendarProviderNullableWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumCalendarProviderNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumCalendarProviderNullableFilter, { nullable: true })
  _min?: NestedEnumCalendarProviderNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumCalendarProviderNullableFilter, { nullable: true })
  _max?: NestedEnumCalendarProviderNullableFilter | undefined;
}
