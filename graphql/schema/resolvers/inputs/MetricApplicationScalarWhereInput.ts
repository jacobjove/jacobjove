import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricApplicationScalarWhereInput", {
  isAbstract: true,
})
export class MetricApplicationScalarWhereInput {
  @TypeGraphQL.Field(() => [MetricApplicationScalarWhereInput], { nullable: true })
  AND?: MetricApplicationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationScalarWhereInput], { nullable: true })
  OR?: MetricApplicationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationScalarWhereInput], { nullable: true })
  NOT?: MetricApplicationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  metricId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
