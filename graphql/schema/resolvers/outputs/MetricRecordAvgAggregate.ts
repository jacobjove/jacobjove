import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("MetricRecordAvgAggregate", {
  isAbstract: true,
})
export class MetricRecordAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  metricUsageId!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  actionId!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  value!: number | null;
}
