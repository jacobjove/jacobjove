import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActRelationFilter } from "../inputs/ActRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IdentityRelationFilter } from "../inputs/IdentityRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IdentityActRelationWhereInput", {
  isAbstract: true,
})
export class IdentityActRelationWhereInput {
  @TypeGraphQL.Field(() => [IdentityActRelationWhereInput], { nullable: true })
  AND?: IdentityActRelationWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationWhereInput], { nullable: true })
  OR?: IdentityActRelationWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationWhereInput], { nullable: true })
  NOT?: IdentityActRelationWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => IdentityRelationFilter, { nullable: true })
  identity?: IdentityRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  identityId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => ActRelationFilter, { nullable: true })
  action?: ActRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  actionId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
