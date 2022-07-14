import * as TypeGraphQL from "type-graphql";
import { CalendarProvider } from "../../enums/CalendarProvider";
import { NestedEnumCalendarProviderNullableFilter } from "../inputs/NestedEnumCalendarProviderNullableFilter";

@TypeGraphQL.InputType("EnumCalendarProviderNullableFilter", {
  isAbstract: true,
})
export class EnumCalendarProviderNullableFilter {
  @TypeGraphQL.Field((_type) => CalendarProvider, {
    nullable: true,
  })
  equals?: "google" | "apple" | undefined;

  @TypeGraphQL.Field((_type) => [CalendarProvider], {
    nullable: true,
  })
  in?: Array<"google" | "apple"> | undefined;

  @TypeGraphQL.Field((_type) => [CalendarProvider], {
    nullable: true,
  })
  notIn?: Array<"google" | "apple"> | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumCalendarProviderNullableFilter, {
    nullable: true,
  })
  not?: NestedEnumCalendarProviderNullableFilter | undefined;
}
