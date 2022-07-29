import * as TypeGraphQL from "type-graphql-v2-fork";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RedirectScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class RedirectScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [RedirectScalarWhereWithAggregatesInput], { nullable: true })
  AND?: RedirectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [RedirectScalarWhereWithAggregatesInput], { nullable: true })
  OR?: RedirectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [RedirectScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: RedirectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  old_path?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  new_path?: StringWithAggregatesFilter | undefined;
}
