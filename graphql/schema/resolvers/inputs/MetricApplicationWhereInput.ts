import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActRelationFilter } from "../inputs/ActRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { MetricRelationFilter } from "../inputs/MetricRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricApplicationWhereInput", {
  isAbstract: true,
})
export class MetricApplicationWhereInput {
  @TypeGraphQL.Field(() => [MetricApplicationWhereInput], { nullable: true })
  AND?: MetricApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationWhereInput], { nullable: true })
  OR?: MetricApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationWhereInput], { nullable: true })
  NOT?: MetricApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => ActRelationFilter, { nullable: true })
  act?: ActRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  metricId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => MetricRelationFilter, { nullable: true })
  metric?: MetricRelationFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
