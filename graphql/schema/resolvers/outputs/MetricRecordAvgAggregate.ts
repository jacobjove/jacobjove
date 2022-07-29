import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MetricRecordAvgAggregate", {
  isAbstract: true,
})
export class MetricRecordAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  metricUsageId!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  actionId!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  value!: number | null;
}
