import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationListRelationFilter } from "../inputs/MetricApplicationListRelationFilter";
import { MetricUsageListRelationFilter } from "../inputs/MetricUsageListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricWhereInput", { isAbstract: true })
export class MetricWhereInput {
  @TypeGraphQL.Field(() => [MetricWhereInput], { nullable: true })
  AND?: MetricWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricWhereInput], { nullable: true })
  OR?: MetricWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricWhereInput], { nullable: true })
  NOT?: MetricWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(() => MetricApplicationListRelationFilter, { nullable: true })
  applications?: MetricApplicationListRelationFilter | undefined;

  @TypeGraphQL.Field(() => MetricUsageListRelationFilter, { nullable: true })
  usages?: MetricUsageListRelationFilter | undefined;
}
