import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Habit } from "../models/Habit";
import { Metric } from "../models/Metric";
import { MetricRecord } from "../models/MetricRecord";
import { DateTimeScalar } from "../scalars";

@TypeGraphQL.ObjectType("MetricUsage", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class MetricUsage extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  metricId!: string;

  metric?: Metric;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  habitId!: string;

  habit?: Habit;

  records?: MetricRecord[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const MetricUsageModel = getModelForClass<typeof MetricUsage>(MetricUsage);
export default MetricUsageModel;
