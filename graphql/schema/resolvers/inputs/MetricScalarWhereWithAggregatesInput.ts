import * as TypeGraphQL from "type-graphql-v2-fork";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MetricScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class MetricScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [MetricScalarWhereWithAggregatesInput], { nullable: true })
  AND?: MetricScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricScalarWhereWithAggregatesInput], { nullable: true })
  OR?: MetricScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: MetricScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;
}
