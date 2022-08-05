import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { MetricRecordAvgAggregate } from "../outputs/MetricRecordAvgAggregate";
import { MetricRecordCountAggregate } from "../outputs/MetricRecordCountAggregate";
import { MetricRecordMaxAggregate } from "../outputs/MetricRecordMaxAggregate";
import { MetricRecordMinAggregate } from "../outputs/MetricRecordMinAggregate";
import { MetricRecordSumAggregate } from "../outputs/MetricRecordSumAggregate";

@TypeGraphQL.ObjectType("MetricRecordGroupBy", { isAbstract: true })
export class MetricRecordGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  metricUsageId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actionId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  value!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

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
