import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  metricId!: string;

  metric?: Metric;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  habitId!: string;

  habit?: Habit;

  records?: MetricRecord[];

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null;

  @TypeGraphQL.Field((_type) => MetricUsageCount, {
    nullable: true,
  })
  _count?: MetricUsageCount | null;
}
