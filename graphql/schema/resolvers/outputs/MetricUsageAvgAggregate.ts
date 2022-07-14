import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("MetricUsageAvgAggregate", {
  isAbstract: true,
})
export class MetricUsageAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  metricId!: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  habitId!: string | null;
}
