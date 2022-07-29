import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("AccountScalarWhereInput", {
  isAbstract: true,
})
export class AccountScalarWhereInput {
  @TypeGraphQL.Field((_type) => [AccountScalarWhereInput], { nullable: true })
  AND?: AccountScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AccountScalarWhereInput], { nullable: true })
  OR?: AccountScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AccountScalarWhereInput], { nullable: true })
  NOT?: AccountScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

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
}
