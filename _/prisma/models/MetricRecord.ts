import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { Action } from "./Action";
import { MetricUsage } from "./MetricUsage";

@TypeGraphQL.ObjectType("MetricRecord", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class MetricRecord extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  metricUsageId!: string;

  metricUsage?: MetricUsage;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  actionId!: string;

  action?: Action;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  @Property({ required: true })
  value!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const MetricRecordModel = getModelForClass<typeof MetricRecord>(MetricRecord);
export default MetricRecordModel;
