import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordAvgAggregate } from "../outputs/MetricRecordAvgAggregate";
import { MetricRecordCountAggregate } from "../outputs/MetricRecordCountAggregate";
import { MetricRecordMaxAggregate } from "../outputs/MetricRecordMaxAggregate";
import { MetricRecordMinAggregate } from "../outputs/MetricRecordMinAggregate";
import { MetricRecordSumAggregate } from "../outputs/MetricRecordSumAggregate";

@TypeGraphQL.ObjectType("AggregateMetricRecord", {
  isAbstract: true,
})
export class AggregateMetricRecord {
  @TypeGraphQL.Field(() => MetricRecordCountAggregate, { nullable: true })
  _count!: MetricRecordCountAggregate | null;

  @TypeGraphQL.Field(() => MetricRecordAvgAggregate, { nullable: true })
  _avg!: MetricRecordAvgAggregate | null;

  @TypeGraphQL.Field(() => MetricRecordSumAggregate, { nullable: true })
  _sum!: MetricRecordSumAggregate | null;

  @TypeGraphQL.Field(() => MetricRecordMinAggregate, { nullable: true })
  _min!: MetricRecordMinAggregate | null;

  @TypeGraphQL.Field(() => MetricRecordMaxAggregate, { nullable: true })
  _max!: MetricRecordMaxAggregate | null;
}
