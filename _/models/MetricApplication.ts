import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "../models/Act";
import { Metric } from "../models/Metric";
import { DateTimeScalar } from "../scalars";

@TypeGraphQL.ObjectType("MetricApplication", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class MetricApplication extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  actId!: string;

  act?: Act;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  metricId!: string;

  metric?: Metric;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const MetricApplicationModel = getModelForClass<typeof MetricApplication>(MetricApplication);
export default MetricApplicationModel;
