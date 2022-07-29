import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MetricApplicationSumAggregate", {
  isAbstract: true,
})
export class MetricApplicationSumAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  actId!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  metricId!: string | null;
}
