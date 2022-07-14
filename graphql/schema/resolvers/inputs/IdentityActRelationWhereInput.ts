import * as TypeGraphQL from "type-graphql";
import { ActRelationFilter } from "../inputs/ActRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IdentityRelationFilter } from "../inputs/IdentityRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IdentityActRelationWhereInput", {
  isAbstract: true,
})
export class IdentityActRelationWhereInput {
  @TypeGraphQL.Field((_type) => [IdentityActRelationWhereInput], {
    nullable: true,
  })
  AND?: IdentityActRelationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationWhereInput], {
    nullable: true,
  })
  OR?: IdentityActRelationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationWhereInput], {
    nullable: true,
  })
  NOT?: IdentityActRelationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IdentityRelationFilter, {
    nullable: true,
  })
  identity?: IdentityRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  identityId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => ActRelationFilter, {
    nullable: true,
  })
  action?: ActRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  actionId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableFilter | undefined;
}
