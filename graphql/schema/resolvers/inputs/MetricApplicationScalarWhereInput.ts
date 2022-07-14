import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricApplicationScalarWhereInput", {
  isAbstract: true,
})
export class MetricApplicationScalarWhereInput {
  @TypeGraphQL.Field((_type) => [MetricApplicationScalarWhereInput], {
    nullable: true,
  })
  AND?: MetricApplicationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationScalarWhereInput], {
    nullable: true,
  })
  OR?: MetricApplicationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationScalarWhereInput], {
    nullable: true,
  })
  NOT?: MetricApplicationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  metricId?: StringFilter | undefined;

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
