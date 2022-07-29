import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IdentityScalarWhereInput", {
  isAbstract: true,
})
export class IdentityScalarWhereInput {
  @TypeGraphQL.Field((_type) => [IdentityScalarWhereInput], { nullable: true })
  AND?: IdentityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityScalarWhereInput], { nullable: true })
  OR?: IdentityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityScalarWhereInput], { nullable: true })
  NOT?: IdentityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  mantraId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
