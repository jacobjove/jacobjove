import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  metricId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => MetricUsageCountAggregate, { nullable: true })
  _count!: MetricUsageCountAggregate | null;

  @TypeGraphQL.Field(() => MetricUsageAvgAggregate, { nullable: true })
  _avg!: MetricUsageAvgAggregate | null;

  @TypeGraphQL.Field(() => MetricUsageSumAggregate, { nullable: true })
  _sum!: MetricUsageSumAggregate | null;

  @TypeGraphQL.Field(() => MetricUsageMinAggregate, { nullable: true })
  _min!: MetricUsageMinAggregate | null;

  @TypeGraphQL.Field(() => MetricUsageMaxAggregate, { nullable: true })
  _max!: MetricUsageMaxAggregate | null;
}
