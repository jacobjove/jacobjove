import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { MetricApplicationAvgAggregate } from "../outputs/MetricApplicationAvgAggregate";
import { MetricApplicationCountAggregate } from "../outputs/MetricApplicationCountAggregate";
import { MetricApplicationMaxAggregate } from "../outputs/MetricApplicationMaxAggregate";
import { MetricApplicationMinAggregate } from "../outputs/MetricApplicationMinAggregate";
import { MetricApplicationSumAggregate } from "../outputs/MetricApplicationSumAggregate";

@TypeGraphQL.ObjectType("MetricApplicationGroupBy", {
  isAbstract: true,
})
export class MetricApplicationGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  actId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  metricId!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => MetricApplicationCountAggregate, { nullable: true })
  _count!: MetricApplicationCountAggregate | null;

  @TypeGraphQL.Field((_type) => MetricApplicationAvgAggregate, { nullable: true })
  _avg!: MetricApplicationAvgAggregate | null;

  @TypeGraphQL.Field((_type) => MetricApplicationSumAggregate, { nullable: true })
  _sum!: MetricApplicationSumAggregate | null;

  @TypeGraphQL.Field((_type) => MetricApplicationMinAggregate, { nullable: true })
  _min!: MetricApplicationMinAggregate | null;

  @TypeGraphQL.Field((_type) => MetricApplicationMaxAggregate, { nullable: true })
  _max!: MetricApplicationMaxAggregate | null;
}
