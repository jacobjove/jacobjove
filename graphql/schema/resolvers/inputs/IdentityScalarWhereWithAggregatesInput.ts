import * as TypeGraphQL from "type-graphql-v2-fork";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IdentityScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class IdentityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [IdentityScalarWhereWithAggregatesInput], { nullable: true })
  AND?: IdentityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityScalarWhereWithAggregatesInput], { nullable: true })
  OR?: IdentityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: IdentityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  slug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  description?: StringNullableWithAggregatesFilter | undefined;
}
