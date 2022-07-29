import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricRecordScalarWhereInput", {
  isAbstract: true,
})
export class MetricRecordScalarWhereInput {
  @TypeGraphQL.Field(() => [MetricRecordScalarWhereInput], { nullable: true })
  AND?: MetricRecordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordScalarWhereInput], { nullable: true })
  OR?: MetricRecordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordScalarWhereInput], { nullable: true })
  NOT?: MetricRecordScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  metricUsageId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  actionId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  value?: IntFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
