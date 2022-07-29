import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MetricApplicationAvgAggregate", {
  isAbstract: true,
})
export class MetricApplicationAvgAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, { nullable: true })
  actId!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, { nullable: true })
  metricId!: number | null;
}
