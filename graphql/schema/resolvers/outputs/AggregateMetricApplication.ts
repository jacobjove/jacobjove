import * as TypeGraphQL from "type-graphql";
import { MetricApplicationAvgAggregate } from "../outputs/MetricApplicationAvgAggregate";
import { MetricApplicationCountAggregate } from "../outputs/MetricApplicationCountAggregate";
import { MetricApplicationMaxAggregate } from "../outputs/MetricApplicationMaxAggregate";
import { MetricApplicationMinAggregate } from "../outputs/MetricApplicationMinAggregate";
import { MetricApplicationSumAggregate } from "../outputs/MetricApplicationSumAggregate";

@TypeGraphQL.ObjectType("AggregateMetricApplication", {
  isAbstract: true,
})
export class AggregateMetricApplication {
  @TypeGraphQL.Field((_type) => MetricApplicationCountAggregate, {
    nullable: true,
  })
  _count!: MetricApplicationCountAggregate | null;

  @TypeGraphQL.Field((_type) => MetricApplicationAvgAggregate, {
    nullable: true,
  })
  _avg!: MetricApplicationAvgAggregate | null;

  @TypeGraphQL.Field((_type) => MetricApplicationSumAggregate, {
    nullable: true,
  })
  _sum!: MetricApplicationSumAggregate | null;

  @TypeGraphQL.Field((_type) => MetricApplicationMinAggregate, {
    nullable: true,
  })
  _min!: MetricApplicationMinAggregate | null;

  @TypeGraphQL.Field((_type) => MetricApplicationMaxAggregate, {
    nullable: true,
  })
  _max!: MetricApplicationMaxAggregate | null;
}
