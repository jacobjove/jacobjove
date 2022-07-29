import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarListRelationFilter } from "../inputs/CalendarListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("AccountWhereInput", {
  isAbstract: true,
})
export class AccountWhereInput {
  @TypeGraphQL.Field((_type) => [AccountWhereInput], { nullable: true })
  AND?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AccountWhereInput], { nullable: true })
  OR?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AccountWhereInput], { nullable: true })
  NOT?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  provider?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  remoteId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableListFilter, { nullable: true })
  scopes?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  accessToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  refreshToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  accessTokenExpiry?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  syncToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => CalendarListRelationFilter, { nullable: true })
  calendars?: CalendarListRelationFilter | undefined;
}
