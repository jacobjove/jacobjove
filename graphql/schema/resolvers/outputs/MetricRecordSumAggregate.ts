import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MetricRecordSumAggregate", {
  isAbstract: true,
})
export class MetricRecordSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  metricUsageId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  actionId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  value!: number | null;
}
