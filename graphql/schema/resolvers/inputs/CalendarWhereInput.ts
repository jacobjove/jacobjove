import * as TypeGraphQL from "type-graphql";
import { AccountRelationFilter } from "../inputs/AccountRelationFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { CalendarEventListRelationFilter } from "../inputs/CalendarEventListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumCalendarProviderNullableFilter } from "../inputs/EnumCalendarProviderNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("CalendarWhereInput", {
  isAbstract: true,
})
export class CalendarWhereInput {
  @TypeGraphQL.Field((_type) => [CalendarWhereInput], {
    nullable: true,
  })
  AND?: CalendarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarWhereInput], {
    nullable: true,
  })
  OR?: CalendarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarWhereInput], {
    nullable: true,
  })
  NOT?: CalendarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  uid?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  color?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumCalendarProviderNullableFilter, {
    nullable: true,
  })
  provider?: EnumCalendarProviderNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  remoteId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  syncToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => AccountRelationFilter, {
    nullable: true,
  })
  account?: AccountRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  accountId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolNullableFilter, {
    nullable: true,
  })
  primary?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolNullableFilter, {
    nullable: true,
  })
  public?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolNullableFilter, {
    nullable: true,
  })
  enabled?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventListRelationFilter, {
    nullable: true,
  })
  events?: CalendarEventListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableFilter | undefined;
}
