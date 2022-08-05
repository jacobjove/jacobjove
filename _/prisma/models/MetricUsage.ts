import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { Habit } from "./Habit";
import { Metric } from "./Metric";
import { MetricRecord } from "./MetricRecord";

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
