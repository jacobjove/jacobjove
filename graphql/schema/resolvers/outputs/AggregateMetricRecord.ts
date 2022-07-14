import * as TypeGraphQL from "type-graphql";
import { MetricRecordAvgAggregate } from "../outputs/MetricRecordAvgAggregate";
import { MetricRecordCountAggregate } from "../outputs/MetricRecordCountAggregate";
import { MetricRecordMaxAggregate } from "../outputs/MetricRecordMaxAggregate";
import { MetricRecordMinAggregate } from "../outputs/MetricRecordMinAggregate";
import { MetricRecordSumAggregate } from "../outputs/MetricRecordSumAggregate";

@TypeGraphQL.ObjectType("AggregateMetricRecord", {
  isAbstract: true,
})
export class AggregateMetricRecord {
  @TypeGraphQL.Field((_type) => MetricRecordCountAggregate, {
    nullable: true,
  })
  _count!: MetricRecordCountAggregate | null;

  @TypeGraphQL.Field((_type) => MetricRecordAvgAggregate, {
    nullable: true,
  })
  _avg!: MetricRecordAvgAggregate | null;

  @TypeGraphQL.Field((_type) => MetricRecordSumAggregate, {
    nullable: true,
  })
  _sum!: MetricRecordSumAggregate | null;

  @TypeGraphQL.Field((_type) => MetricRecordMinAggregate, {
    nullable: true,
  })
  _min!: MetricRecordMinAggregate | null;

  @TypeGraphQL.Field((_type) => MetricRecordMaxAggregate, {
    nullable: true,
  })
  _max!: MetricRecordMaxAggregate | null;
}
