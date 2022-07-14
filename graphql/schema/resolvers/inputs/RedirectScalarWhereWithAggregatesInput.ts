import * as TypeGraphQL from "type-graphql";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RedirectScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class RedirectScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [RedirectScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: RedirectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RedirectScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: RedirectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RedirectScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: RedirectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  old_path?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  new_path?: StringWithAggregatesFilter | undefined;
}
