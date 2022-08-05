import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { MetricApplicationAvgAggregate } from "../outputs/MetricApplicationAvgAggregate";
import { MetricApplicationCountAggregate } from "../outputs/MetricApplicationCountAggregate";
import { MetricApplicationMaxAggregate } from "../outputs/MetricApplicationMaxAggregate";
import { MetricApplicationMinAggregate } from "../outputs/MetricApplicationMinAggregate";
import { MetricApplicationSumAggregate } from "../outputs/MetricApplicationSumAggregate";

@TypeGraphQL.ObjectType("MetricApplicationGroupBy", { isAbstract: true })
export class MetricApplicationGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  metricId!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => MetricApplicationCountAggregate, { nullable: true })
  _count!: MetricApplicationCountAggregate | null;

  @TypeGraphQL.Field(() => MetricApplicationAvgAggregate, { nullable: true })
  _avg!: MetricApplicationAvgAggregate | null;

  @TypeGraphQL.Field(() => MetricApplicationSumAggregate, { nullable: true })
  _sum!: MetricApplicationSumAggregate | null;

  @TypeGraphQL.Field(() => MetricApplicationMinAggregate, { nullable: true })
  _min!: MetricApplicationMinAggregate | null;

  @TypeGraphQL.Field(() => MetricApplicationMaxAggregate, { nullable: true })
  _max!: MetricApplicationMaxAggregate | null;
}
