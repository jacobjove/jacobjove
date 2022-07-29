import * as TypeGraphQL from "type-graphql-v2-fork";
import { Habit } from "../models/Habit";
import { Metric } from "../models/Metric";
import { MetricRecord } from "../models/MetricRecord";
import { MetricUsageCount } from "../resolvers/outputs/MetricUsageCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("MetricUsage", {
  isAbstract: true,
})
export class MetricUsage extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  metricId!: string;

  metric?: Metric;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  habit?: Habit;

  records?: MetricRecord[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field(() => MetricUsageCount, { nullable: true })
  _count?: MetricUsageCount | null;
}
