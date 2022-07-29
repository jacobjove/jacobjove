import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumCalendarProviderNullableFilter } from "../inputs/EnumCalendarProviderNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CalendarScalarWhereInput", {
  isAbstract: true,
})
export class CalendarScalarWhereInput {
  @TypeGraphQL.Field((_type) => [CalendarScalarWhereInput], { nullable: true })
  AND?: CalendarScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarScalarWhereInput], { nullable: true })
  OR?: CalendarScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarScalarWhereInput], { nullable: true })
  NOT?: CalendarScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  uid?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  color?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumCalendarProviderNullableFilter, { nullable: true })
  provider?: EnumCalendarProviderNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  remoteId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  syncToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  accountId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolNullableFilter, { nullable: true })
  primary?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolNullableFilter, { nullable: true })
  public?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolNullableFilter, { nullable: true })
  enabled?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
