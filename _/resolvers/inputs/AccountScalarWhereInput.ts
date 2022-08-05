import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("AccountScalarWhereInput", { isAbstract: true })
export class AccountScalarWhereInput {
  @TypeGraphQL.Field(() => [AccountScalarWhereInput], { nullable: true })
  AND?: AccountScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [AccountScalarWhereInput], { nullable: true })
  OR?: AccountScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [AccountScalarWhereInput], { nullable: true })
  NOT?: AccountScalarWhereInput[] | undefined;

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
}
