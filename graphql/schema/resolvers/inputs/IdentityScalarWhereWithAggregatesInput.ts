import * as TypeGraphQL from "type-graphql-v2-fork";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IdentityScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class IdentityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [IdentityScalarWhereWithAggregatesInput], { nullable: true })
  AND?: IdentityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityScalarWhereWithAggregatesInput], { nullable: true })
  OR?: IdentityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: IdentityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  slug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, { nullable: true })
  description?: StringNullableWithAggregatesFilter | undefined;
}
