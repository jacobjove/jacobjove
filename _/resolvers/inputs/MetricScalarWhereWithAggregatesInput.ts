import * as TypeGraphQL from "type-graphql-v2-fork";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MetricScalarWhereWithAggregatesInput", { isAbstract: true })
export class MetricScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [MetricScalarWhereWithAggregatesInput], { nullable: true })
  AND?: MetricScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricScalarWhereWithAggregatesInput], { nullable: true })
  OR?: MetricScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: MetricScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;
}
