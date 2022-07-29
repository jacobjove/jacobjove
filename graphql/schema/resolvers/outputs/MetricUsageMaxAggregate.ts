import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MetricUsageMaxAggregate", {
  isAbstract: true,
})
export class MetricUsageMaxAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  metricId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
