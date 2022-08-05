import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationListRelationFilter } from "../inputs/IdentityActRelationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("IdentityWhereInput", { isAbstract: true })
export class IdentityWhereInput {
  @TypeGraphQL.Field(() => [IdentityWhereInput], { nullable: true })
  AND?: IdentityWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityWhereInput], { nullable: true })
  OR?: IdentityWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityWhereInput], { nullable: true })
  NOT?: IdentityWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => IdentityActRelationListRelationFilter, { nullable: true })
  actionRelations?: IdentityActRelationListRelationFilter | undefined;
}
