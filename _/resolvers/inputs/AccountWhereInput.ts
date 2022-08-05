import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarListRelationFilter } from "../inputs/CalendarListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("AccountWhereInput", { isAbstract: true })
export class AccountWhereInput {
  @TypeGraphQL.Field(() => [AccountWhereInput], { nullable: true })
  AND?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [AccountWhereInput], { nullable: true })
  OR?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [AccountWhereInput], { nullable: true })
  NOT?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  provider?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  remoteId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableListFilter, { nullable: true })
  scopes?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  accessToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  refreshToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  accessTokenExpiry?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  syncToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => CalendarListRelationFilter, { nullable: true })
  calendars?: CalendarListRelationFilter | undefined;
}
