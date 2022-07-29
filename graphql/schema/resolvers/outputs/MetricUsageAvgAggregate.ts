import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MetricUsageAvgAggregate", {
  isAbstract: true,
})
export class MetricUsageAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  metricId!: number | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;
}
