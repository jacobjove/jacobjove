import * as TypeGraphQL from "type-graphql";
import { ActRelationFilter } from "../inputs/ActRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { MetricRelationFilter } from "../inputs/MetricRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricApplicationWhereInput", {
  isAbstract: true,
})
export class MetricApplicationWhereInput {
  @TypeGraphQL.Field((_type) => [MetricApplicationWhereInput], {
    nullable: true,
  })
  AND?: MetricApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationWhereInput], {
    nullable: true,
  })
  OR?: MetricApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationWhereInput], {
    nullable: true,
  })
  NOT?: MetricApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => ActRelationFilter, {
    nullable: true,
  })
  act?: ActRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  metricId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => MetricRelationFilter, {
    nullable: true,
  })
  metric?: MetricRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableFilter | undefined;
}
