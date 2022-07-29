import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricUsageScalarWhereInput", {
  isAbstract: true,
})
export class MetricUsageScalarWhereInput {
  @TypeGraphQL.Field((_type) => [MetricUsageScalarWhereInput], { nullable: true })
  AND?: MetricUsageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageScalarWhereInput], { nullable: true })
  OR?: MetricUsageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageScalarWhereInput], { nullable: true })
  NOT?: MetricUsageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  metricId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
