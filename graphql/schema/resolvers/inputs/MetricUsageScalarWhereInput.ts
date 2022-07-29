import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricUsageScalarWhereInput", {
  isAbstract: true,
})
export class MetricUsageScalarWhereInput {
  @TypeGraphQL.Field(() => [MetricUsageScalarWhereInput], { nullable: true })
  AND?: MetricUsageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageScalarWhereInput], { nullable: true })
  OR?: MetricUsageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricUsageScalarWhereInput], { nullable: true })
  NOT?: MetricUsageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  metricId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
