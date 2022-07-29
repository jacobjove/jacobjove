import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CategorizationScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class CategorizationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [CategorizationScalarWhereWithAggregatesInput], { nullable: true })
  AND?: CategorizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationScalarWhereWithAggregatesInput], { nullable: true })
  OR?: CategorizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: CategorizationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  categoryId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  actId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
