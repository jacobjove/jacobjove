import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationListRelationFilter } from "../inputs/IdentityActRelationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("IdentityWhereInput", {
  isAbstract: true,
})
export class IdentityWhereInput {
  @TypeGraphQL.Field((_type) => [IdentityWhereInput], { nullable: true })
  AND?: IdentityWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityWhereInput], { nullable: true })
  OR?: IdentityWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityWhereInput], { nullable: true })
  NOT?: IdentityWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationListRelationFilter, { nullable: true })
  actionRelations?: IdentityActRelationListRelationFilter | undefined;
}
