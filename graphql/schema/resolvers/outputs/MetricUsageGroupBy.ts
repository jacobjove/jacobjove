import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { MetricUsageAvgAggregate } from "../outputs/MetricUsageAvgAggregate";
import { MetricUsageCountAggregate } from "../outputs/MetricUsageCountAggregate";
import { MetricUsageMaxAggregate } from "../outputs/MetricUsageMaxAggregate";
import { MetricUsageMinAggregate } from "../outputs/MetricUsageMinAggregate";
import { MetricUsageSumAggregate } from "../outputs/MetricUsageSumAggregate";

@TypeGraphQL.ObjectType("MetricUsageGroupBy", {
  isAbstract: true,
})
export class MetricUsageGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  metricId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  habitId!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => MetricUsageCountAggregate, {
    nullable: true,
  })
  _count!: MetricUsageCountAggregate | null;

  @TypeGraphQL.Field((_type) => MetricUsageAvgAggregate, {
    nullable: true,
  })
  _avg!: MetricUsageAvgAggregate | null;

  @TypeGraphQL.Field((_type) => MetricUsageSumAggregate, {
    nullable: true,
  })
  _sum!: MetricUsageSumAggregate | null;

  @TypeGraphQL.Field((_type) => MetricUsageMinAggregate, {
    nullable: true,
  })
  _min!: MetricUsageMinAggregate | null;

  @TypeGraphQL.Field((_type) => MetricUsageMaxAggregate, {
    nullable: true,
  })
  _max!: MetricUsageMaxAggregate | null;
}
