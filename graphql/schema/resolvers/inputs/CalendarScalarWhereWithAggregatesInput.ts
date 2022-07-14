import * as TypeGraphQL from "type-graphql";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumCalendarProviderNullableWithAggregatesFilter } from "../inputs/EnumCalendarProviderNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CalendarScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class CalendarScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [CalendarScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: CalendarScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: CalendarScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: CalendarScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  uid?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  color?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumCalendarProviderNullableWithAggregatesFilter, {
    nullable: true,
  })
  provider?: EnumCalendarProviderNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  remoteId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  syncToken?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableWithAggregatesFilter, {
    nullable: true,
  })
  accountId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolNullableWithAggregatesFilter, {
    nullable: true,
  })
  primary?: BoolNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolNullableWithAggregatesFilter, {
    nullable: true,
  })
  public?: BoolNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolNullableWithAggregatesFilter, {
    nullable: true,
  })
  enabled?: BoolNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableWithAggregatesFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
