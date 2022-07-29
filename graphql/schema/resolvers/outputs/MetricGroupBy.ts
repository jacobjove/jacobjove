import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricAvgAggregate } from "../outputs/MetricAvgAggregate";
import { MetricCountAggregate } from "../outputs/MetricCountAggregate";
import { MetricMaxAggregate } from "../outputs/MetricMaxAggregate";
import { MetricMinAggregate } from "../outputs/MetricMinAggregate";
import { MetricSumAggregate } from "../outputs/MetricSumAggregate";

@TypeGraphQL.ObjectType("MetricGroupBy", {
  isAbstract: true,
})
export class MetricGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => MetricCountAggregate, { nullable: true })
  _count!: MetricCountAggregate | null;

  @TypeGraphQL.Field((_type) => MetricAvgAggregate, { nullable: true })
  _avg!: MetricAvgAggregate | null;

  @TypeGraphQL.Field((_type) => MetricSumAggregate, { nullable: true })
  _sum!: MetricSumAggregate | null;

  @TypeGraphQL.Field((_type) => MetricMinAggregate, { nullable: true })
  _min!: MetricMinAggregate | null;

  @TypeGraphQL.Field((_type) => MetricMaxAggregate, { nullable: true })
  _max!: MetricMaxAggregate | null;
}
