import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { MetricRecordAvgAggregate } from "../outputs/MetricRecordAvgAggregate";
import { MetricRecordCountAggregate } from "../outputs/MetricRecordCountAggregate";
import { MetricRecordMaxAggregate } from "../outputs/MetricRecordMaxAggregate";
import { MetricRecordMinAggregate } from "../outputs/MetricRecordMinAggregate";
import { MetricRecordSumAggregate } from "../outputs/MetricRecordSumAggregate";

@TypeGraphQL.ObjectType("MetricRecordGroupBy", {
  isAbstract: true,
})
export class MetricRecordGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  metricUsageId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  actionId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  value!: number;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => MetricRecordCountAggregate, { nullable: true })
  _count!: MetricRecordCountAggregate | null;

  @TypeGraphQL.Field((_type) => MetricRecordAvgAggregate, { nullable: true })
  _avg!: MetricRecordAvgAggregate | null;

  @TypeGraphQL.Field((_type) => MetricRecordSumAggregate, { nullable: true })
  _sum!: MetricRecordSumAggregate | null;

  @TypeGraphQL.Field((_type) => MetricRecordMinAggregate, { nullable: true })
  _min!: MetricRecordMinAggregate | null;

  @TypeGraphQL.Field((_type) => MetricRecordMaxAggregate, { nullable: true })
  _max!: MetricRecordMaxAggregate | null;
}
