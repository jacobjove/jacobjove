import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricRecordScalarWhereInput", {
  isAbstract: true,
})
export class MetricRecordScalarWhereInput {
  @TypeGraphQL.Field((_type) => [MetricRecordScalarWhereInput], { nullable: true })
  AND?: MetricRecordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordScalarWhereInput], { nullable: true })
  OR?: MetricRecordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordScalarWhereInput], { nullable: true })
  NOT?: MetricRecordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  metricUsageId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  actionId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, { nullable: true })
  value?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
