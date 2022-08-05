import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountRelationFilter } from "../inputs/AccountRelationFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { CalendarEventListRelationFilter } from "../inputs/CalendarEventListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumCalendarProviderNullableFilter } from "../inputs/EnumCalendarProviderNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CalendarWhereInput", { isAbstract: true })
export class CalendarWhereInput {
  @TypeGraphQL.Field(() => [CalendarWhereInput], { nullable: true })
  AND?: CalendarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarWhereInput], { nullable: true })
  OR?: CalendarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarWhereInput], { nullable: true })
  NOT?: CalendarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  uid?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  color?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => EnumCalendarProviderNullableFilter, { nullable: true })
  provider?: EnumCalendarProviderNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  remoteId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  syncToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => AccountRelationFilter, { nullable: true })
  account?: AccountRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  accountId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => BoolNullableFilter, { nullable: true })
  primary?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(() => BoolNullableFilter, { nullable: true })
  public?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(() => BoolNullableFilter, { nullable: true })
  enabled?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(() => CalendarEventListRelationFilter, { nullable: true })
  events?: CalendarEventListRelationFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
